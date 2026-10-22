// ==========================================
// 嘟嘟臉金蠟筆記事本 - 核心資料庫 (data_config.js)
// 負責：首頁與詳細頁共用的基礎資料、圖片映射、多語系字典
// ==========================================

const CRAYON_PATH_CONFIG = {
    "精靈": {
        "V1": { layer1: ["攻擊", "血量"], layer2: ["攻擊", "防禦", "爆抗"], layer3: ["攻擊", "防禦", "爆擊", "爆抗"] },
        "V2": { layer1: ["防禦", "爆抗"], layer2: ["攻擊", "血量", "爆擊"], layer3: ["攻擊", "防禦", "血量", "爆抗"] },
        "V3": { layer1: ["攻擊", "防禦"], layer2: ["攻擊", "防禦", "血量"], layer3: ["攻擊", "血量", "爆擊", "爆抗"] },
        "V4": { layer1: ["血量", "爆擊"], layer2: ["防禦", "爆擊", "爆抗"], layer3: ["攻擊", "防禦", "血量", "爆擊"] },
        "V5": { layer1: ["爆擊", "爆抗"], layer2: ["爆擊", "血量", "爆抗"], layer3: ["爆擊", "防禦", "血量", "爆抗"] }
    },
    "獸人": {
        "V1": { layer1: ["攻擊", "血量"], layer2: ["攻擊", "防禦", "爆抗"], layer3: ["攻擊", "防禦", "爆擊", "爆抗"] },
        "V2": { layer1: ["防禦", "爆抗"], layer2: ["攻擊", "血量", "爆擊"], layer3: ["攻擊", "防禦", "血量", "爆抗"] },
        "V3": { layer1: ["攻擊", "防禦"], layer2: ["攻擊", "防禦", "血量"], layer3: ["攻擊", "血量", "爆擊", "爆抗"] },
        "V4": { layer1: ["血量", "爆擊"], layer2: ["防禦", "爆擊", "爆抗"], layer3: ["攻擊", "防禦", "血量", "爆擊"] },
        "V5": { layer1: ["爆擊", "爆抗"], layer2: ["血量", "爆擊", "爆抗"], layer3: ["防禦", "血量", "爆擊", "爆抗"] }
    },
    "龍族": {
        "V1": { layer1: ["爆擊", "爆抗"], layer2: ["血量", "爆擊", "爆抗"], layer3: ["爆擊", "防禦", "血量", "爆抗"] },
        "V2": { layer1: ["攻擊", "血量"], layer2: ["攻擊", "防禦", "爆抗"], layer3: ["攻擊", "防禦", "爆擊", "爆抗"] },
        "V3": { layer1: ["防禦", "爆抗"], layer2: ["攻擊", "血量", "爆擊"], layer3: ["攻擊", "防禦", "血量", "爆抗"] },
        "V4": { layer1: ["血量", "爆擊"], layer2: ["防禦", "爆擊", "爆抗"], layer3: ["攻擊", "血量", "爆擊", "防禦"] }
    },
    "幽靈": {
        "V1": { layer1: ["攻擊", "防禦"], layer2: ["攻擊", "防禦", "血量"], layer3: ["攻擊", "血量", "爆擊", "爆抗"] },
        "V2": { layer1: ["血量", "爆擊"], layer2: ["防禦", "爆擊", "爆抗"], layer3: ["攻擊", "防禦", "血量", "爆擊"] },
        "V3": { layer1: ["防禦", "爆抗"], layer2: ["攻擊", "血量", "爆擊"], layer3: ["攻擊", "防禦", "血量", "爆抗"] },
        "V4": { layer1: ["爆擊", "爆抗"], layer2: ["血量", "爆擊", "爆抗"], layer3: ["防禦", "血量", "爆擊", "爆抗"] }
    },
    "魔女": {
        "V1": { layer1: ["防禦", "爆抗"], layer2: ["攻擊", "血量", "爆擊"], layer3: ["攻擊", "防禦", "血量", "爆抗"] },
        "V2": { layer1: ["攻擊", "血量"], layer2: ["攻擊", "防禦", "爆抗"], layer3: ["攻擊", "防禦", "爆擊", "爆抗"] },
        "V3": { layer1: ["攻擊", "防禦"], layer2: ["攻擊", "防禦", "血量"], layer3: ["攻擊", "血量", "爆擊", "爆抗"] },
        "V4": { layer1: ["血量", "爆擊"], layer2: ["防禦", "爆擊", "爆抗"], layer3: ["攻擊", "防禦", "血量", "爆擊"] },
        "V5": { layer1: ["爆擊", "爆抗"], layer2: ["血量", "爆擊", "爆抗"], layer3: ["防禦", "血量", "爆擊", "爆抗"] }
    },
    "魔靈": {
        "V1": { layer1: ["血量", "爆擊"], layer2: ["防禦", "爆擊", "爆抗"], layer3: ["攻擊", "防禦", "血量", "爆擊"] },
        "V2": { layer1: ["攻擊", "血量"], layer2: ["攻擊", "防禦", "爆抗"], layer3: ["攻擊", "防禦", "爆擊", "爆抗"] },
        "V3": { layer1: ["防禦", "爆抗"], layer2: ["攻擊", "血量", "爆擊"], layer3: ["攻擊", "防禦", "血量", "爆抗"] },
        "V4": { layer1: ["爆擊", "爆抗"], layer2: ["血量", "爆擊", "爆抗"], layer3: ["防禦", "血量", "爆擊", "爆抗"] },
        "V5": { layer1: ["攻擊", "防禦"], layer2: ["攻擊", "防禦", "血量"], layer3: ["攻擊", "血量", "爆擊", "爆抗"] }
    },
    "妖精": {
        "V1": { layer1: ["防禦", "爆抗"], layer2: ["攻擊", "血量", "爆擊"], layer3: ["攻擊", "防禦", "血量", "爆抗"] },
        "V2": { layer1: ["攻擊", "防禦"], layer2: ["攻擊", "防禦", "血量"], layer3: ["攻擊", "血量", "爆擊", "爆抗"] },
        "V3": { layer1: ["攻擊", "血量"], layer2: ["攻擊", "防禦", "爆抗"], layer3: ["攻擊", "防禦", "爆擊", "爆抗"] },
        "V4": { layer1: ["血量", "爆擊"], layer2: ["防禦", "爆擊", "爆抗"], layer3: ["攻擊", "防禦", "血量", "爆擊"] },
        "V5": { layer1: ["爆擊", "爆抗"], layer2: ["血量", "爆擊", "爆抗"], layer3: ["防禦", "血量", "爆擊", "爆抗"] }
    },
    "???": {
        "V1": { layer1: ["攻擊", "防禦"], layer2: ["攻擊", "防禦", "血量"], layer3: ["攻擊", "血量", "爆擊", "爆抗"] }
    }
};

const PATH_IMAGES = {
    "幽靈": {
        "V1": { 1: "https://i.postimg.cc/nMb6P1wY/PHANTOM-V1-L1.png", 2: "https://i.postimg.cc/0ytjmZqp/PHANTOM-V1-L2.png", 3: "https://i.postimg.cc/vDFpNvSt/PHANTOM-V1-L3.png" },
        "V2": { 1: "https://i.postimg.cc/PNsBRMF2/PHANTOM-V2-L1.png", 2: "https://i.postimg.cc/z3Z9ckPP/PHANTOM-V2-L2.png", 3: "https://i.postimg.cc/V5Q3VFHZ/PHANTOM-V2-L3.png" },
        "V3": { 1: "https://i.postimg.cc/pybg6B1S/PHANTOM-V3-L1.png", 2: "https://i.postimg.cc/23RPKxXK/PHANTOM-V3-L2.png", 3: "https://i.postimg.cc/qBhqWM5V/PHANTOM-V3-L3.png" },
        "V4": { 1: "https://i.postimg.cc/FFdzwsBm/PHANTOM-V4-L1.png", 2: "https://i.postimg.cc/WpFzxbHc/PHANTOM-V4-L2.png", 3: "https://i.postimg.cc/J7D0S428/PHANTOM-V4-L3.png" }
    },
    "???": {
        "V1": { 1: "https://i.postimg.cc/L5LH55cN/UNKNOWN-V1-L1.png", 2: "https://i.postimg.cc/vTfQTTJ0/UNKNOWN-V1-L2.png", 3: "https://i.postimg.cc/ZnpTnnGj/UNKNOWN-V1-L3.png" }
    },
    "妖精": {
        "V1": { 1: "https://i.postimg.cc/VNvmMKyN/SPRITE-V1-L1.png", 2: "https://i.postimg.cc/43ystWCx/SPRITE-V1-L2.png", 3: "https://i.postimg.cc/fbyDX84T/SPRITE-V1-L3.png" },
        "V2": { 1: "https://i.postimg.cc/Jh0MJpwn/SPRITE-V2-L1.png", 2: "https://i.postimg.cc/s2xsSTFW/SPRITE-V2-L2.png", 3: "https://i.postimg.cc/TP1fmt85/SPRITE-V2-L3.png" },
        "V3": { 1: "https://i.postimg.cc/k5Gq8Tr8/SPRITE-V3-L1.png", 2: "https://i.postimg.cc/xd8nH6rM/SPRITE-V3-L2.png", 3: "https://i.postimg.cc/yNxs9Lqm/SPRITE-V3-L3.png" },
        "V4": { 1: "https://i.postimg.cc/zfQ5kT5y/SPRITE-V4-L1.png", 2: "https://i.postimg.cc/W4yj70jD/SPRITE-V4-L2.png", 3: "https://i.postimg.cc/d0fv9GvT/SPRITE-V4-L3.png" },
        "V5": { 1: "https://i.postimg.cc/XvP3g935/SPRITE-V5-L1.png", 2: "https://i.postimg.cc/8CYDbLDW/SPRITE-V5-L2.png", 3: "https://i.postimg.cc/XvP3g93d/SPRITE-V5-L3.png" }
    },
    "魔靈": {
        "V1": { 1: "https://i.postimg.cc/t4CjQB4m/ELEMENTAL-V1-L1.png", 2: "https://i.postimg.cc/NjfcqdjC/ELEMENTAL-V1-L2.png", 3: "https://i.postimg.cc/135Qhv3C/ELEMENTAL-V1-L3.png" },
        "V2": { 1: "https://i.postimg.cc/mg2sfmgn/ELEMENTAL-V2-L1.png", 2: "https://i.postimg.cc/g2SPY3xg/ELEMENTAL-V2-L2.png", 3: "https://i.postimg.cc/pLGt2Kmq/ELEMENTAL-V2-L3.png" },
        "V3": { 1: "https://i.postimg.cc/7ZsyxS5R/ELEMENTAL-V3-L1.png", 2: "https://i.postimg.cc/7ZsyxS5j/ELEMENTAL-V3-L2.png", 3: "https://i.postimg.cc/vZqdQ51w/ELEMENTAL-V3-L3.png" },
        "V4": { 1: "https://i.postimg.cc/13CZ9Dgh/ELEMENTAL-V4-L1.png", 2: "https://i.postimg.cc/dVHKqG7K/ELEMENTAL-V4-L2.png", 3: "https://i.postimg.cc/zGt1JTLr/ELEMENTAL-V4-L3.png" },
        "V5": { 1: "https://i.postimg.cc/sg6RV5Bs/ELEMENTAL-V5-L1.png", 2: "https://i.postimg.cc/3xSHK2yK/ELEMENTAL-V5-L2.png", 3: "https://i.postimg.cc/P53kt1LX/ELEMENTAL-V5-L3.png" }
    },
    "魔女": {
        "V1": { 1: "https://i.postimg.cc/bYxcZ7G2/WITCH-V1-L1.png", 2: "https://i.postimg.cc/ZY8tWG9v/WITCH-V1-L2.png", 3: "https://i.postimg.cc/VsqQJxSt/WITCH-V1-L3.png" },
        "V2": { 1: "https://i.postimg.cc/VsqQJxSC/WITCH-V2-L1.png", 2: "https://i.postimg.cc/RC75Wk3f/WITCH-V2-L2.png", 3: "https://i.postimg.cc/qBsVNPt8/WITCH-V2-L3.png" },
        "V3": { 1: "https://i.postimg.cc/h4LWXkJV/WITCH-V3-L1.png", 2: "https://i.postimg.cc/dQ2Phb7r/WITCH-V3-L2.png", 3: "https://i.postimg.cc/ry1XDBdg/WITCH-V3-L3.png" },
        "V4": { 1: "https://i.postimg.cc/NG6qK3yx/WITCH-V4-L1.png", 2: "https://i.postimg.cc/HWwDrqJ2/WITCH-V4-L2.png", 3: "https://i.postimg.cc/T2VMKzyC/WITCH-V4-L3.png" },
        "V5": { 1: "https://i.postimg.cc/sfYdMkB0/WITCH-V5-L1.png", 2: "https://i.postimg.cc/SQ6FnBX5/WITCH-V5-L2.png", 3: "https://i.postimg.cc/FFy5YMfw/WITCH-V5-L3.png" }
    },
    "精靈": {
        "V1": { 1: "https://i.postimg.cc/CMNrTSnK/ELF-V1-L1.png", 2: "https://i.postimg.cc/CMNrTSnM/ELF-V1-L2.png", 3: "https://i.postimg.cc/FFZC5Nks/ELF-V1-L3.png" },
        "V2": { 1: "https://i.postimg.cc/h4rZWcQj/ELF-V2-L1.png", 2: "https://i.postimg.cc/J4z6RvjW/ELF-V2-L2.png", 3: "https://i.postimg.cc/Pr53d91H/ELF-V2-L3.png" },
        "V3": { 1: "https://i.postimg.cc/5N27fT8f/ELF-V3-L1.png", 2: "https://i.postimg.cc/nchRngqV/ELF-V3-L2.png", 3: "https://i.postimg.cc/jdSgRmyx/ELF-V3-L3.png" },
        "V4": { 1: "https://i.postimg.cc/28ScCMn5/ELF-V4-L1.png", 2: "https://i.postimg.cc/dtVHJpG1/ELF-V4-L2.png", 3: "https://i.postimg.cc/Ghm7bVv9/ELF-V4-L3.png" },
        "V5": { 1: "https://i.postimg.cc/7YZsqdSf/ELF-V5-L1.png", 2: "https://i.postimg.cc/kXg17zW2/ELF-V5-L2.png", 3: "https://i.postimg.cc/rFwnq35r/ELF-V5-L3.png" }
    },
    "獸人": {
        "V1": { 1: "https://i.postimg.cc/nrPvFRtL/WEREBEAST-V1-L1.png", 2: "https://i.postimg.cc/j2FzxgrL/WEREBEAST-V1-L2.png", 3: "https://i.postimg.cc/hv59Dyqv/WEREBEAST-V1-L3.png" },
        "V2": { 1: "https://i.postimg.cc/NFz1sJwM/WEREBEAST-V2-L1.png", 2: "https://i.postimg.cc/qq58Jbdn/WEREBEAST-V2-L2.png", 3: "https://i.postimg.cc/nrPvFRtB/WEREBEAST-V2-L3.png" },
        "V3": { 1: "https://i.postimg.cc/PJRmX3km/WEREBEAST-V3-L1.png", 2: "https://i.postimg.cc/j2Fzxgry/WEREBEAST-V3-L2.png", 3: "https://i.postimg.cc/MHFy6P8s/WEREBEAST-V3-L3.png" },
        "V4": { 1: "https://i.postimg.cc/v8q7tBxp/WEREBEAST-V4-L1.png", 2: "https://i.postimg.cc/BZY5B6PR/WEREBEAST-V4-L2.png", 3: "https://i.postimg.cc/pVGQJTnt/WEREBEAST-V4-L3.png" },
        "V5": { 1: "https://i.postimg.cc/c197BH8S/WEREBEAST-V5-L1.png", 2: "https://i.postimg.cc/QN4gJtWX/WEREBEAST-V5-L2.png", 3: "https://i.postimg.cc/L4Ck3XZ4/WEREBEAST-V5-L3.png" }
    },
    "龍族": {
        "V1": { 1: "https://i.postimg.cc/5tSLYNVY/DRAGON-V1-L1.png", 2: "https://i.postimg.cc/W4wgFbvd/DRAGON-V1-L2.png", 3: "https://i.postimg.cc/Ls3LY6pq/DRAGON-V1-L3.png" },
        "V2": { 1: "https://i.postimg.cc/cJBwg4St/DRAGON-V2-L1.png", 2: "https://i.postimg.cc/SsQ8WFSN/DRAGON-V2-L2.png", 3: "https://i.postimg.cc/RFCfc5SF/DRAGON-V2-L3.png" },
        "V3": { 1: "https://i.postimg.cc/gJcRvFzc/DRAGON-V3-L1.png", 2: "https://i.postimg.cc/HxW5QDYn/DRAGON-V3-L2.png", 3: "https://i.postimg.cc/k4M8x3JR/DRAGON-V3-L3.png" },
        "V4": { 1: "https://i.postimg.cc/9MXTG5mq/DRAGON-V4-L1.png", 2: "https://i.postimg.cc/PxfZmsXD/DRAGON-V4-L2.png", 3: "https://i.postimg.cc/bJYbQcyb/DRAGON-V4-L3.png" }
    }
};

// ------------------------------------------
// 圖標與圖片對應表
// ------------------------------------------
const LOBBY_BACKGROUNDS = [
    "https://firebasestorage.googleapis.com/v0/b/crayon-note.firebasestorage.app/o/lobby%2FLobby-100010-1.webp?alt=media&token=91171715-07aa-4c3d-aee6-0daf8099536c", "https://firebasestorage.googleapis.com/v0/b/crayon-note.firebasestorage.app/o/lobby%2FLobby-10002-1.webp?alt=media&token=e44c4eba-f9b0-4e1e-bd2c-bbcd5891be84", "https://firebasestorage.googleapis.com/v0/b/crayon-note.firebasestorage.app/o/lobby%2FLobby-10003-1.webp?alt=media&token=11071be4-520c-4bd4-ae9d-10aae72e6dd1",
    "https://firebasestorage.googleapis.com/v0/b/crayon-note.firebasestorage.app/o/lobby%2FLobby-10007-1.webp?alt=media&token=d5e8d59e-8dc0-41af-a18b-ed5e62a7cff2", "https://firebasestorage.googleapis.com/v0/b/crayon-note.firebasestorage.app/o/lobby%2FLobby-10008-1.webp?alt=media&token=daba6fe4-8708-4767-896f-e40867e86a2f", "https://firebasestorage.googleapis.com/v0/b/crayon-note.firebasestorage.app/o/lobby%2FLobby-10009-1.webp?alt=media&token=153f26aa-b336-4301-bffa-130172c0af75", "https://firebasestorage.googleapis.com/v0/b/crayon-note.firebasestorage.app/o/lobby%2FLobby_10001_1.webp?alt=media&token=97f5b368-2818-46f7-a957-6af54f9e3d33"
];
const SPINE_BACKGROUNDS = {
"龍族":"https://i.postimg.cc/FdJxQDZ7/Gacha-Pattern-Bg-Dragon.png",
"精靈":"https://i.postimg.cc/xJbPStRN/Gacha-Pattern-Bg-Elf.png",
"妖精":"https://i.postimg.cc/G8sj1qQ4/Gacha-Pattern-Bg-Fairy.png",
"獸人":"https://i.postimg.cc/S2zGpDrz/Gacha-Pattern-Bg-Furry.png",
"幽靈":"https://i.postimg.cc/ygSTzvP0/Gacha-Pattern-Bg-Ghost.png",
"???":"https://i.postimg.cc/kR3vMK1D/Gacha-Pattern-Bg-Mystic.png",
"魔靈":"https://i.postimg.cc/BP9BZHYb/Gacha-Pattern-Bg-Spirit.png",
"魔女":"https://i.postimg.cc/zHZFDKtL/Gacha-Pattern-Bg-Witch.png",
"NPC":"https://i.postimg.cc/q703FkG3/Gacha-Characterpattern.png"
}; 

// ==========================================
// char_detail.html背景圖
// ==========================================

const CHAR_BACKGROUNDS = {
    "龍族": "https://i.postimg.cc/SNvZjtmR/Popup-Gacha-Event-Pattern-Tribe-Dragon.png",
    "魔靈": "https://i.postimg.cc/5tMSFhGq/Popup-Gacha-Event-Pattern-Tribe-Elemental.png",
    "精靈": "https://i.postimg.cc/X7z2XDnX/Popup-Gacha-Event-Pattern-Tribe-Elf.png",
    "???": "https://i.postimg.cc/jSfh2x8F/Popup-Gacha-Event-Pattern-Tribe-Mystic.png",
    "幽靈": "https://i.postimg.cc/13FKXmWY/Popup-Gacha-Event-Pattern-Tribe-Phantom.png",
    "妖精": "https://i.postimg.cc/GmS7TWsH/Popup-Gacha-Event-Pattern-Tribe-Sprite.png",
    "獸人": "https://i.postimg.cc/qvZb6PCg/Popup-Gacha-Event-Pattern-Tribe-Werebeast.png",
    "魔女": "https://i.postimg.cc/C1r8JXPw/Popup-Gacha-Event-Pattern-Tribe-Witch.png"
};

const PERSONALITY_BACKGROUNDS = {
    "冷靜": "https://i.postimg.cc/HkNfDkrZ/Motion-Experience-Pattern-Bg-Composed.png",
    "憂鬱": "https://i.postimg.cc/4x0rkxY2/Motion-Experience-Pattern-Bg-Depressed.png",
    "狂亂": "https://i.postimg.cc/5tFDxWzq/Motion-Experience-Pattern-Bg-Madness.png",
    "活潑": "https://i.postimg.cc/q7CWkHKG/Motion-Experience-Pattern-Bg-Vivacious.png",
    "天真": "https://i.postimg.cc/BQVhtwJ6/Motion-Experience-Pattern-Bg-Innocence.png",
    "共鳴": "https://i.postimg.cc/bJwTwLmc/Motion-Experience-Pattern-Bg-Resonance.png"
};

const FOOD_ICON = {
    "草莓蛋糕": { ja: "イチゴケーキ", url: "https://i.postimg.cc/ZWC1KYw9/Icon-Food-1.png" },
    "巧克力冰淇淋": { ja: "チョコアイス", url: "https://i.postimg.cc/TKpZY2tK/Icon-Food-2.png" },
    "焦糖布丁": { ja: "クレームブリュレ", url: "https://i.postimg.cc/rDKvFyfK/Icon-Food-3.png" },
    "焦糖爆米花": { ja: "キャラメルポップコーン", url: "https://i.postimg.cc/TKpZY2tP/Icon-Food-4.png" },
    "獸糧罐頭": { ja: "アニマル缶", url: "https://i.postimg.cc/mPt02Zmy/Icon-Food-5.pngg" },
    "扭結麵包": { ja: "プレッツェル", url: "https://i.postimg.cc/rD37d6HR/Icon-Food-6.png" },
    "蜂蜜大蒜鮭魚": { ja: "ハニーガーリックサーモン", url: "https://i.postimg.cc/qNSWtfF3/Icon-Food-7.png" },
    "烤漫畫肉": { ja: "マンガ肉焼き", url: "https://i.postimg.cc/jDmBWV1f/Icon-Food-8.png" },
    "溫熱的冰美式咖啡": { ja: "ホットアイスアメリカーノ", url: "https://i.postimg.cc/nXgNs8W7/Icon-Food-9.png" },
    "檸檬茶": { ja: "レモンティー", url: "https://i.postimg.cc/879xF8YR/Icon-Food-10.png" },
    "祕密葡萄汁": { ja: "秘密のブドウジュース", url: "https://i.postimg.cc/CRX9Zy2j/Icon-Food-11.png" },
    "太空食品": { ja: "宇宙食", url: "https://i.postimg.cc/879xF8Yb/Icon-Food-12.png" },
    "哈密瓜博孔奇尼起司": { ja: "メロンボッコンチーニ", url: "https://i.postimg.cc/jDmBWV1k/Icon-Food-13.png" },
    "一口草生菜包": { ja: "一口草-野菜包み", url: "https://i.postimg.cc/bZW4GX5m/Icon-Food-14.png" },
    "蜂蜜罐": { ja: "ハニーポット", url: "https://i.postimg.cc/BjkR8WzN/Icon-Food-15.png" },
    "海藻沙拉": { ja: "海藻サラダ", url: "https://i.postimg.cc/hX6NJFYZ/Icon-Food-16.png" },
    "南瓜濃湯": { ja: "かぼちゃ粥", url: "https://i.postimg.cc/dhpg7Mff/Icon-Food-17.png" },
    "肉桂口味糖球": { ja: "シナモン味の飴玉", url: "https://i.postimg.cc/yDt2JqGt/Icon-Food-18.png" },
    "幽靈布丁": { ja: "幽霊プリン", url: "https://i.postimg.cc/WdCxDRyx/Icon-Food-19.pngg" },
    "空氣炸豬排": { ja: "空気カツレツ", url: "https://i.postimg.cc/3kVzyMqs/Icon-Food-20.png" },
    "寶石塔": { ja: "宝石タルト", url: "https://i.postimg.cc/XZ5mdHMH/Icon-Food-21.png" },
    "石榴果實": { ja: "ガーネットの実", url: "https://i.postimg.cc/HrRFJGK1/Icon-Food-22.png" },
    "龍族糖果": { ja: "竜族キャンティ", url: "https://i.postimg.cc/t16wWS0M/Icon-Food-23.png" },
    "金糖葫蘆": { ja: "金のフルーツ飴", url: "https://i.postimg.cc/nsmgBR8S/Icon-Food-24.png" },
    "椰子松針粥": { ja: "ココナッツ松葉粥", url: "https://i.postimg.cc/kVSzK1rz/Icon-Food-25.png" },
    "麵茶": { ja: "穀物ドリンク", url: "https://i.postimg.cc/PLD9Y3Gc/Icon-Food-26.png" },
    "薄荷巧克力冰淇淋": { ja: "チョコミントアイス", url: "https://i.postimg.cc/mc9JCXx0/Icon-Food-27.png" },
    "UFC炸胡蘿蔔": { ja: "UFC ニンジンフライ", url: "https://i.postimg.cc/7Czd0svj/Icon-Food-28.png" },
    "棉花糖馬卡龍": { ja: "マシュマロマカロン", url: "https://i.postimg.cc/d7CprHPc/Icon-Food-29.png" },
    "一碗米飯": { ja: "ご飯", url: "https://i.postimg.cc/hJm6TyWB/Icon-Food-30.png" },
    "美味維他命C": { ja: "もぐもぐビタミンC", url: "https://i.postimg.cc/hJm6TyWg/Icon-Food-31.png" },
    "松糕": { ja: "笹団子", url: "https://i.postimg.cc/Z9N2p7th/Icon-Food-32.png" },
    "酸甜維他命F": { ja: "スパビタF", url: "https://i.postimg.cc/SX93CTFk/Icon-Food-33.png" },
    "聖誕樹幹蛋糕": { ja: "ブッシュドノエル", url: "https://i.postimg.cc/7Czd0s8q/Icon-Food-34.png" },
    "杏仁金沙巧克力": { ja: "アーモンドロシェ", url: "https://i.postimg.cc/TybFg7MR/Icon-Food-35.png" },
    "年糕湯": { ja: "餅スープ", url: "https://i.postimg.cc/zLh6KtZG/Icon-Food-36.png" },
    "艾心堂綜合糖": { ja: "エーカリードロップ", url: "https://i.postimg.cc/kVSzK13G/Icon-Food-37.png" },
    "草莓切片蛋糕": { ja: "あーんイチゴケーキ", url: "https://i.postimg.cc/zLh6KtZ3/Icon-Food-38.png" },
    "ANSA太空食品": { ja: "ANSA宇宙食", url: "https://i.postimg.cc/nsmgBRbC/Icon-Food-39.png" },
    "甜甜蜂蜜罐": { ja: "ハチミツツボ", url: "https://i.postimg.cc/Z9N2p7tW/Icon-Food-40.png" },
    "龍族氣死你糖果": { ja: "逆鱗なでなでキャンディ", url: "https://i.postimg.cc/Z9N2p7tB/Icon-Food-41.png" },
    "UFC炸蔬菜": { ja: "UFC野菜フライ", url: "https://i.postimg.cc/wydPVXgq/Icon-Food-42.png" },
    "追劇焦糖爆米花": { ja: "エルフキャラメルポップコーン", url: "https://i.postimg.cc/8Fv9MKQF/Icon-Food-43.png" },
    "肉桂口味健康糖球": { ja: "シナモンの健康アメ玉", url: "https://i.postimg.cc/1nZTHGs9/Icon-Food-44.png" },
    "低糖棉花糖馬卡龍": { ja: "低糖マシュマロマカロン", url: "https://i.postimg.cc/wydPVXgv/Icon-Food-45.png" },
    "高級獸糧罐頭": { ja: "高級アニマル缶", url: "https://i.postimg.cc/MM84D7qX/Icon-Food-46.png" },
    "愛心扭結麵包": { ja: "ハートプレッツェル", url: "https://i.postimg.cc/HcCK2wdV/Icon-Food-47.png" },
    "有機檸檬茶": { ja: "オーガニックレモンティー", url: "https://i.postimg.cc/R6z8R74h/Icon-Food-48.png" },
    "兩口草生菜包": { ja: "二口草野菜包み", url: "https://i.postimg.cc/ZBhgc84v/Icon-Food-49.png" },
    "氫氣炸豬排": { ja: "水素カツレツ", url: "https://i.postimg.cc/47TM56s7/Icon-Food-50.png" },
    "椰子萬能青汁": { ja: "ココナッツ万能野菜ジュース", url: "https://i.postimg.cc/cgNjmR08/Icon-Food-51.png" },
    "軟軟焦糖布丁": { ja: "ソフトクレームフリコレ", url: "https://i.postimg.cc/sQR8cYsh/Icon-Food-52.png" },
    "白金糖葫蘆": { ja: "白銀フルーツ飴", url: "https://i.postimg.cc/1nZTHGsp/Icon-Food-53.png" },
    "皇家蜂蜜大蒜鮭魚": { ja: "ロイヤルハニーガーリックサーモン", url: "https://i.postimg.cc/R6z8R74f/Icon-Food-54.png" },
    "滾燙的冰美式咖啡": { ja: "灼熱アイスアメリカーノ", url: "https://i.postimg.cc/wydPVXgF/Icon-Food-55.png" },
    "夏威夷海藻蓋飯": { ja: "海藻ボキ", url: "https://i.postimg.cc/34H6BXYj/Icon-Food-56.png" },
    "燉南瓜": { ja: "ガほちゃシチュー", url: "https://i.postimg.cc/34H6BXYZ/Icon-Food-57.png" },
    "927穀麵茶": { ja: "927粒穀物ドリンク", url: "https://i.postimg.cc/r0LbJ1MC/Icon-Food-58.png" },
    "石榴甜茶": { ja: "ザクロフルーツパンチ", url: "https://i.postimg.cc/ygz5Pmsf/Icon-Food-59.png" },
    "一級祕密葡萄汁": { ja: "一級品秘密のフトウシュース", url: "https://i.postimg.cc/62NS0rtM/Icon-Food-60.png" },
    "寶石蛋塔": { ja: "秘宝タルト", url: "https://i.postimg.cc/ZBFQDW56/Icon-Food-61.png" },
    "一碗糯米飯": { ja: "もち米ご飯", url: "https://i.postimg.cc/Q9rPbQh4/Icon-Food-62.png" },
    "麝香甜瓜博孔奇尼起司": { ja: "マスクメロンボッコンチーニ", url: "https://i.postimg.cc/phYS1mLf/Icon-Food-63.png" },
    "惡靈布丁": { ja: "悪霊プリン", url: "https://i.postimg.cc/MMbLrnpy/Icon-Food-64.png" },
    "深黑巧克力冰淇淋": { ja: "ディープダーワチョコアイス", url: "https://i.postimg.cc/VrBhHJk9/Icon-Food-65.png" },
    "烤海賊漫畫肉": { ja: "海賊マンガ肉焼き", url: "https://i.postimg.cc/R6QYbWZL/Icon-Food-66.png" },
    "三重薄荷冰淇淋": { ja: "トリブルチョコスミントアイス", url: "https://i.postimg.cc/TLqsHK3Q/Icon-Food-67.png" },
    
    // 給 1 星坨坨使用的通用餐牌
    "餐牌": { ja: "メニュー", url: "https://i.postimg.cc/YGfPyvCb/My-Home-Restaurant-Menu-Icon.png" }
};

const REWARD_ICON = {
    // 🍕 食材類
    "麵粉": { ja: "小麦粉", url: "https://i.postimg.cc/Vd6QSCc7/Icon-Food-Made-Low1.png" },
    "雞蛋": { ja: "卵", url: "https://i.postimg.cc/bsJcGtjg/Icon-Food-Made-Low2.png" },
    "家禽肉": { ja: "鶏肉", url: "https://i.postimg.cc/qzRVt3dQ/Icon-Food-Made-Low3.png" },
    "水果": { ja: "果物", url: "https://i.postimg.cc/hfjWJdqy/Icon-Food-Made-Low4.png" },
    "巧克力": { ja: "チョコ", url: "https://i.postimg.cc/HVxDJyCN/Icon-Food-Made-Low5.png" },
    "糖": { ja: "砂糖", url: "https://i.postimg.cc/gnJFwZPB/Icon-Food-Made-Low6.png" },
    "牛肉": { ja: "牛肉", url: "https://i.postimg.cc/ykd4JZzp/Icon-Food-Made-Low7.png" },
    "魚": { ja: "魚", url: "https://i.postimg.cc/rKmXdrL3/Icon-Food-Made-Low8.png" },
    "堅硬的黑色果實": { ja: "黒くて硬い実", url: "https://i.postimg.cc/hfjWJdqN/Icon-Food-Made-Low9.png" },
    "各式穀物": { ja: "雑穀", url: "https://i.postimg.cc/vcBF1Vdp/Icon-Food-Made-Low10.png" },
    "蔬菜": { ja: "野菜", url: "https://i.postimg.cc/2V6RqZDp/Icon-Food-Made-Low11.png" },
    "蜂蜜": { ja: "蜜", url: "https://i.postimg.cc/GH2wBy1W/Icon-Food-Made-Low12.png" },
    "百老師萬能醬料": { ja: "万能スパイス", url: "https://i.postimg.cc/mt5x7gbm/Icon-Food-Made-Low13.png" },
    "牛奶": { ja: "牛乳", url: "https://i.postimg.cc/MvT2cQS2/Icon-Food-Made-Low14.png" },
    "米": { ja: "米", url: "https://i.postimg.cc/4mSCpxJ8/Icon-Food-Made-Low15.png" },
    "起司": { ja: "チーズ", url: "https://i.postimg.cc/9rn3yQW8/Icon-Food-Made-Low16.png" },
    "樹葉": { ja: "木の葉", url: "https://i.postimg.cc/GH50vmcg/Icon-Food-Made-Low17.png" },
    "巧克力米": { ja: "スプリンクル", url: "https://i.postimg.cc/ykbq08Vb/Icon-Food-Made-Low18.png" },

    // 🪵 素材類
    "軟棉棉的樹木": { ja: "加工しやすい木", url: "https://i.postimg.cc/YhscQCp5/Icon-Made-Low1.png" },
    "堅硬的石頭": { ja: "固い石", url: "https://i.postimg.cc/qz5f2vJf/Icon-Made-Low2.png" },
    "細膩的鐵粉": { ja: "サラサラの鉄粉", url: "https://i.postimg.cc/N5zhRjsq/Icon-Made-Low3.png" },
    "酥脆的金箔": { ja: "パリパリの金箔", url: "https://i.postimg.cc/jLFVySxY/Icon-Made-Low4.png" },
    "寶石碎片": { ja: "宝石の欠片", url: "https://i.postimg.cc/mt5x7gLG/Icon-Made-Low5.png" },
    "閃亮的玻璃": { ja: "キラキラのガラス", url: "https://i.postimg.cc/pp6NKLWR/Icon-Made-Low6.png" },
    "黏膩的黏土": { ja: "やわらか粘土", url: "https://i.postimg.cc/GH50vmLR/Icon-Made-Low7.png" },
    "濕潤的紙漿": { ja: "湿っぽい紙の原料", url: "https://i.postimg.cc/ykbq081V/Icon-Made-Low9.png" },
    "回收塑膠": { ja: "再生プラスチック", url: "https://i.postimg.cc/HVhGbkYH/Icon-Made-Low10.png" },
    "彩虹花汁": { ja: "虹の花の汁", url: "https://i.postimg.cc/6ymsCpW6/Icon-Made-Low12.png" },
    "堅硬的碎布": { ja: "ごわごわの布切れ", url: "https://i.postimg.cc/D8MV1wvw/Icon-Made-Low13.png" },
    "皮革樹葉": { ja: "レザーウッドの葉", url: "https://i.postimg.cc/jLFVySx5/Icon-Made-Low14.png" },
    "柔軟的棉花": { ja: "ふわふわ綿", url: "https://i.postimg.cc/JG2wjzrt/Icon-Made-Low15.png" },
    "槭樹樹液": { ja: "カエデの樹液", url: "https://i.postimg.cc/ZCMk65bW/Icon-Made-Low16.png" },
    "眨眼墨水": { ja: "ウィンクウィンク", url: "https://i.postimg.cc/gxXCsbjm/Icon-Made-Low18.png" },
    "睡眠眼罩": { ja: "睡眠アイマスク", url: "https://i.postimg.cc/bZD7gfrq/Icon-Made-Low20.png" },
    "銅湯匙": { ja: "銅の匙", url: "https://i.postimg.cc/mPzvjWkb/Icon-Made-Low21.png" },
    "尖銳的針": { ja: "尖った針", url: "https://i.postimg.cc/0zMTn1jk/Icon-Made-Low25.png" },
    "可彎曲金屬": { ja: "曲がったもの", url: "https://i.postimg.cc/PPRG15t0/Icon-Furn-Made-Low1.png" }
};

// ------------------------------------------
// 特選使者招募, 活動, 卡片schedule
// ------------------------------------------

const PICKUP_SCHEDULE = [
	{
        start: "2026-10-22T17:00:00+09:00",
        end: "2026-11-05T03:59:59+09:00",
        chars: ["瑰恩"],
        note: "Guin"
    },
	{
        start: "2026-10-08T17:00:00+09:00",
        end: "2026-10-22T10:59:59+09:00",
        chars: ["瓊安", "柯米(泳裝)", "艾琳娜", "海莉"],
        note: "SwimKommy"
    },
	{
        start: "2026-10-01T03:00:00+09:00",
        end: "2026-10-08T10:59:59+09:00",
        chars: ["瓊安", "貝麗塔", "艾皮卡"],
        note: "Joanne"
    },
];

// 🎪 遊戲內活動排程表
const EVENT_SCHEDULE = [
    {
        start: "2026-09-10T17:00:00+09:00",
        end: "2026-09-24T10:59:59+09:00",
        eventId: "Theme023" 
    },
	{
        start: "2026-09-24T17:00:00+09:00",
        end: "2026-10-22T10:59:59+09:00",
        eventId: "Theme024" 
    },
		{
        start: "2026-10-22T17:00:00+09:00",
        end: "2026-11-05T10:59:59+09:00",
        eventId: "Theme028" 
    },
	{
        start: "2026-09-24T17:00:00+09:00",
        end: "2026-10-22T10:59:59+09:00",
        eventId: "SelectPickPersonality" 
    },
	{
        start: "2026-08-13T17:00:00+09:00",
        end: "2026-08-27T10:59:59+09:00",
        eventId: "PickPersonalityComposed" 
    },
	{
        start: "2026-08-20T17:00:00+09:00",
        end: "2026-08-27T10:59:59+09:00",
        eventId: "GachaOnceSelectPickHero1" 
    },
	{
        start: "2026-09-25T12:00:00+09:00",
        end: "2026-09-28T03:59:59+09:00",
        eventId: "TowerBattle" 
    },
	{
        start: "2026-08-14T12:00:00+09:00",
        end: "2026-08-17T03:59:59+09:00",
        eventId: "Playground" 
    },
	{
        start: "2026-10-23T12:00:00+09:00",
        end: "2026-10-25T15:59:59+09:00",
        eventId: "WWE" 
    },
	{
        start: "2026-09-11T11:00:00+09:00",
        end: "2026-09-14T03:59:59+09:00",
        eventId: "TricDice" 
    }
];

// 🃏 特選卡片排程表
const CARD_SCHEDULE = [
	{
        start: "2026-10-29T04:00:00+09:00",
        end: "2026-11-05T10:59:59+09:00",
        id: "Rune52",
        type: "Rune"
    },
	{
        start: "2026-10-22T17:00:00+09:00",
        end: "2026-11-05T10:59:59+09:00",
        id: "Artifact118",
        type: "Artifact"
    },
	{
        start: "2026-09-17T04:00:00+09:00",
        end: "2026-09-24T10:59:59+09:00",
        id: "Artifact92",
        type: "Artifact"
    }
];
