import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBuovbUyZbs8ltYmEj2WdKztY5CyW-vT-Q",
    authDomain: "sora2-10955.firebaseapp.com",
    projectId: "sora2-10955",
    storageBucket: "sora2-10955.firebasestorage.app",
    messagingSenderId: "1043741721432",
    appId: "1:1043741721432:web:38eb3ec668580880445b2d",
    measurementId: "G-H5T1203XVT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);