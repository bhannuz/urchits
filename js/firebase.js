// ═══════════════════════════════════════════════════════════
// URChits — FIREBASE CONFIG
// ═══════════════════════════════════════════════════════════

const firebaseConfig = {
    apiKey: "AIzaSyAdf1YmwR6dzWl_PvA3tZZaoyHlYg3-OUA",
    authDomain: "clients-8f8bc.firebaseapp.com",
    projectId: "clients-8f8bc",
    storageBucket: "clients-8f8bc.firebasestorage.app",
    messagingSenderId: "516801738309",
    appId: "1:516801738309:web:ed58638d82ac2c8101952c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ── Shared globals (used across ALL js files) ──
let ALL_MEMBERS = [];
let CURRENT_USER = null;
