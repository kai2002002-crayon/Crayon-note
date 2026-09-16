// sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker 安裝成功');
});

self.addEventListener('fetch', (event) => {
    // 必須要有 fetch 事件的 listener，Chrome 才會認定這是一個合格的 PWA
    // 目前不做任何快取攔截，直接放行所有請求
});
