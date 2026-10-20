// 引入 Firebase 核心與 Firestore 模組
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 貼上你在 Firebase 後台取得的設定
const firebaseConfig = {
    apiKey: "AIzaSyDhv8D2pY_0M56UJrDTQw0RGPHA-BkXU8Y", 
    authDomain: "crayon-note.firebaseapp.com", 
    projectId: "crayon-note", 
    storageBucket: "crayon-note.firebasestorage.app", 
    messagingSenderId: "210614088940", 
    appId: "1:210614088940:web:7addbdc7c466eeb05421c9", 
    measurementId: "G-M1EJPE12TE" 
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 匯出 db 給其他 HTML/JS 檔案使用
export const db = getFirestore(app);
