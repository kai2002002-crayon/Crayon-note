// 🌟 定義快取名稱與版本號 (每次更新網站內容時，請更改ver.)
const CACHE_NAME = 'trickcal-notepad-v1.1.51';

// 🌟 定義需要離線快取的核心檔案
// 建議把首頁、CSS、主要的 JS 與重要的圖檔都寫進來
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './checklist.html',
    './tier_maker.html',
    './apostle_viewer.html',
    './gacha.html',
    './char_detail.html',
    './data_core.js',
    './data_aside.js',
    './data_skills.js',
    './data_intro.js',
    './data_collectibles.js',
    './char_sprites/char_sprites.css',
    './char_sprites/common_icon.png',
    './sprites.css',
    './manifest.json',
    './icon.png'
];

// 1. Install 事件：當 Service Worker 第一次安裝時，把核心檔案存進快取
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] 正在快取核心資源...');
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => {
            // 強制讓這個新的 Service Worker 立即接管控制權
            return self.skipWaiting();
        })
    );
});

// 2. Activate 事件：當 Service Worker 啟動時，清除舊版本的快取
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // 如果快取名稱不等於當前的版本號，就刪除它
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] 清除舊快取:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// 3. Fetch 事件：攔截網站發出的所有網路請求 (動態頁面加強版)
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension')) return;

    event.respondWith(
        // 🌟 升級 1：加入 { ignoreSearch: true } 
        // 這樣 char_detail.html?name=xxx 就會去抓 char_detail.html 的快取，不會因為問號參數而報錯
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
            
            if (cachedResponse) {
                return cachedResponse;
            }

            // 如果快取沒有這個檔案，就透過網路去抓取
            return fetch(event.request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // 🌟 升級 2：開啟「邊看邊存」機制 (Runtime Caching)
                // 這樣只要玩家在有網路時看過「莉1莉」或「克魯布魯斯」的頁面，
                // 他們的專屬資料、Spine 動畫檔案就會自動被存下來，下次斷網時也能看！
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return networkResponse;
            }).catch(() => {
                console.log('[Service Worker] 處於離線狀態，無法取得資源:', event.request.url);
            });
        })
    );
});
// 4. Message 事件：接收網頁傳來的指令，強制讓新版 Service Worker 立即接管
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

