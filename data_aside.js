// data_aside.js
// 🔮 願像系統 (Aside) 資料庫 - 多語系版本 (zh: 中文, ja: 日文, en: 英文)

const ASIDE_DATA = {
    "Amelia": { 
        asideIcon: "https://i.postimg.cc/bsZs8jKN/Aside-Icon-Amelia.png", 
        totalName: { zh: "王子艾琳娜", ja: "王子エレナ", en: "English Total Nam" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/rKWS8MLS/Aside-Skill-Amelia-1.png", 
                name: { zh: "王子的恩寵", ja: "王子さまの恵み", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1", "Effect 2"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/4mtzJsTp/Aside-Skill-Amelia-2.png", 
                name: { zh: "超高速雷射光", ja: "超高速サンダーレーザー", en: "English 2-Star Name" }, 
                desc: { zh: "提升強化攻擊的施展機率。對處於觸電狀態的敵人造成的普通攻擊傷害量增加。被動技能施加觸電的目標數變為3名。", ja: "強化攻撃の発動確率が増加する。感電状態の敵に与える普通攻撃のダメージ量が増加する。パッシブスキルで付与する感電の対象数が3体になる。", en: "English 2-Star Desc" }, 
                effects: { zh: ["強化攻擊施展機率增加:15%", "普通攻擊傷害量增加:40%"], ja: ["強化攻擊発動確率増加: 15%", "普通攻撃のダメージ量増加: 40%"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/6yRd9tNr/Aside-Skill-Amelia-3.png", 
                name: { zh: "請求支援", ja: "援軍要請の件", en: "English 3-Star Name" }, 
                desc: { zh: "增加後排友軍的每秒SP恢復量。", ja: "後列の味方の1秒ごとのSP回復量を増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["每秒SP恢復量:4"], ja: ["1秒ごとのSP回復量: 4"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體爆擊 3%"], ja: ["全体物理攻撃力 3%", "全体会心 3%"], en: ["ATK +X%", "HP +Y%"] } 
            }
        }
    },
    "Chloe": { 
        asideIcon: "https://i.postimg.cc/tYsYyHLT/Aside-Icon-Chloe.png", 
        totalName: { zh: "時尚封面庫洛艾", ja: "ファッションカバークロエ", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/w7Jh6gd0/Aside-Skill-Chloe-1.png", 
                name: { zh: "名人庫洛艾", ja: "セレブリティ・クロエ", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/YvHQ0Zpf/Aside-Skill-Chloe-2.png", 
                name: { zh: "F/W 庫洛艾穿搭", ja: "F/W クロエルック", en: "English 2-Star Name" }, 
                desc: { zh: "免疫昏迷與變異。受到14次直接傷害時,會挑釁周圍敵人並造成範圍魔法傷害。發動玩偶的意志時,一定時間內攻擊速度提升,且每秒恢復HP。", ja: "気絶と変異の免疫を持つ。直接ダメージによって14回ダメージを受けると、周囲の敵を挑発して範囲魔法ダメージを与える。ぬいぐるみの意思が発動すると、一定時間、攻撃速度が増加し、1秒ごとにHPが回復する。", en: "English 2-Star Desc" }, 
                effects: { zh: ["昏迷:無法進行任何行動。", "變異:使目標變成物品並且無法進行任何行動。", "直接傷害:指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "挑釁:使目標對發動挑釁的單位進行基本攻擊。", "玩偶的意志:改變基本攻擊效果。", "挑戰持續時間:3秒", "魔法傷害:300%", "攻擊速度提升: 30%", "攻擊速度提升持續時間:7秒", "每秒HP恢復:最大HP的1%", "每秒HP恢復持續時間:7秒"], ja: ["気絶: 行動不能になる。", "変異: 物体に変化し、行動不能になる。", "直接ダメージ: 直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "挑発: 挑発した対象を基本攻撃で攻撃する。", "ぬいぐるみの意思: 基本攻撃の効果が変更される。", "挑発の持続時間: 3秒", "魔法ダメージ: 300%", "攻撃速度増加: 30%", "攻撃速度増加の持続時間: 7秒", "1秒ごとのHP回復: 最大HPの1%", "1秒ごとのHP回復の持続時間: 7秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/4YgpyqJp/Aside-Skill-Chloe-3.png", 
                name: { zh: "伸展台開場", ja: "ランウェイオープニング", en: "English 3-Star Name" }, 
                desc: { zh: "增加前排友軍對敵人造成的傷害量,並減少前排友軍受到敵人的傷害量。", ja: "前列の味方の敵への与ダメージ量を増加させ、前列味方の敵からの被ダメージ量を減少させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["傷害量增加:19.5%", "受到的傷害量減少:8.8%"], ja: ["ダメージ量増加: 19.5%", "被ダメージ量減少: 8.8%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體魔法防禦力 4%", "全體爆擊抵抗 4%"], ja: ["全体魔法防御力 4%", "全体会心抵抗 4%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Diana": { 
        asideIcon: "https://i.postimg.cc/9rDrVjv0/Aside-Icon-Diana.png", 
        totalName: { zh: "小蒂亞娜", ja: "ちびディアナ", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/SnhcR3yf/Aside-Skill-Diana-1.png", 
                name: { zh: "小鹿加油?", ja: "子ジカの応援？", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "日着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/PCj1J9tW/Aside-Skill-Diana-2.png", 
                name: { zh: "厲害的治療方法", ja: "すごい治療法", en: "English 2-Star Name" }, 
                desc: { zh: "強化攻擊的恢復目標增加至3名。戰鬥開始時,減少除自身外友軍狂亂性格使者受到的爆擊傷害量。", ja: "強化攻撃の回復対象が3体に増加する。戦闘開始時、自身を除く狂気の味方使徒の会心被ダメージ量を減少させる。", en: "English 2-Star Desc" }, 
                effects: { zh: ["受到的爆擊傷害量減少:66%"], ja: ["会心被ダメージ量減少: 66%"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/18QDX29H/Aside-Skill-Diana-3.png", 
                name: { zh: "自然之力", ja: "自然の力", en: "English 3-Star Name" }, 
                desc: { zh: "中排友軍對敵人造成的傷害量增加、敵人對中排友軍造成的傷害量減少。", ja: "中列の味方の敵への与ダメージ量が増加し、中列の味方の敵からの被ダメージ量が減少する。", en: "English 3-Star Desc" }, 
                effects: { zh: ["傷害量增加:13.6%", "受到的傷害量減少:5.9%"], ja: ["ダメージ量増加: 13.6%", "被ダメージ量減少: 5.9%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體魔法防禦力 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体魔法防御力 3%", "全体会心ダメージ抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Ed": { 
        asideIcon: "https://i.postimg.cc/9rDrVjvD/Aside-Icon-Ed.png", 
        totalName: { zh: "伊德永恆子彈", ja: "イード・ジ・エターナルブレット", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/jDby2msc/Aside-Skill-Ed-1.png", 
                name: { zh: "心地善良的伊德", ja: "心優しいイード", en: "English 1-Star Name" }, 
                desc: { zh: "[穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/75kShdxX/Aside-Skill-Ed-2.png", 
                name: { zh: "未醒之夢", ja: "まだ夢から覚めていない", en: "English 2-Star Name" }, 
                desc: { zh: "使用強化攻擊時,在一段時間內增加自己的防禦力。使用普通技能時,額外赋予剩下HP比例最低的友軍護盾。恢復觸發保護友軍的SP。", ja: "強化攻撃使用時、一定時間、自身の防御力を増加させる。低学年スキル使用時、残りHP割合が最も低い味方に追加でシールドを付与する。保護が発動した味方のSPを回復させる。", en: "English 2-Star Desc" }, 
                effects: { zh: ["保護:因直接傷害陷入無法戰鬥狀態時,該傷害將被無效化並賦予護盾。", "直接傷害:指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "防禦力增加:25%", "防禦力增加持續時間:5秒", "護盾:最大HP的50%", "護盾持續時間:8秒", "友軍SP恢復:30%"], ja: ["保護: 直接ダメージによって戦闘不能になった時、そのダメージを無効化してシールドを付与する。", "直接ダメージ: 直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "防御力増加: 25%", "防御力増加の持続時間: 5秒", "シールド: 最大HPの24%/46%/48%/50%/52% (低学年スキルLvに依存)", "シールドの持続時間: 8秒", "味方SP回復: 30%"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/dhYG3pq5/Aside-Skill-Ed-3.png", 
                name: { zh: "共同的夢", ja: "共に見る夢", en: "English 3-Star Name" }, 
                desc: { zh: "增加所有友軍的最大HP。", ja: "味方全員の最大HPを増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["最大HP增加:18%"], ja: ["最大HP増加: 18%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體 HP 4%", "全體爆擊抵抗 4%"], ja: ["全体HP 4%","全体会心抵抗 4%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Haley": { 
        asideIcon: "https://i.postimg.cc/BXRtnV0J/Aside-Icon-Haley.png", 
        totalName: { zh: "宇宙戰艦", ja: "宇宙船艦", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/Xrb9qmV2/Aside-Skill-Haley-1.png", 
                name: { zh: "宇宙戰艦海莉", ja: "宇宙船艦ヘイリー", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/9Dhy0KW8/Aside-Skill-Haley-2.png", 
                name: { zh: "航行經過地球", ja: "地球をフライバイ", en: "English 2-Star Name" }, 
                desc: { zh: "獲得強化攻擊增益效果時,增加除自己以外的中排友軍使者的攻擊力與防禦力。普通技能的最後一擊必定赋予灼痛。使用高級技能時會召喚軍艦。軍艦會對前方的敵人投下6枚砲彈,造成範圍物理傷害。", ja: "強化攻撃バフの獲得時、自身を除く中列の味方使徒の攻撃力と防御力を増加させる。低学年スキルの最後の一撃に確定で苦痛を付与する。高学年スキル使用時、軍艦が召喚される。軍艦は前方の敵に砲弾を6発降らせ、範囲物理ダメージを与える。", en: "English 2-Star Desc" }, 
                effects: { zh: ["灼痛:每秒造成傷害,並使恢復量減少。", "攻擊力增加:32%", "攻擊力增加持續時間:6秒", "防禦力增加:16%", "防禦力增加持續時間:6秒", "灼痛持續時間:5秒", "每枚砲彈物理傷害:375%"], ja: ["苦痛: 1秒ごとにダメージを受け、回復量が減少する。", "攻撃力増加: 32%", "攻撃力増加の持続時間: 6秒", "防御力増加: 16%", "攻撃力増加の持続時間: 6秒", "苦痛の持続時間: 5秒", "砲弾につき物理ダメージ: 375%"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/tsjFJwXM/Aside-Skill-Haley-3.png", 
                name: { zh: "友軍基地保護作戰", ja: "味方基地防衛作戦", en: "English 3-Star Name" }, 
                desc: { zh: "使敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵からの被ダメージ量を減少させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["受到的傷害量減少:7.5%"], ja: ["被ダメージ量減少: 7.5%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體爆擊 3%", "全體物理防禦力 3%"], ja: ["全体会心 3%", "全体物理防御力 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Hilde": { 
        asideIcon: "https://i.postimg.cc/crP6LbSs/Aside-Icon-Hilde.png", 
        totalName: { zh: "泡溫泉的希爾德", ja: "温泉のヒルデ", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/TK6n1FRS/Aside-Skill-Hilde-1.png", 
                name: { zh: "自我治療", ja: "自己治療", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗: 6%", "会心ダメージ抵抗: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/yDH0xtVG/Aside-Skill-Hilde-2.png", 
                name: { zh: "醫務人員保護法", ja: "医療従事者保護法", en: "English 2-Star Name" }, 
                desc: { zh: "提升強化攻擊恢復目標的攻擊速度。強化攻擊的HP恢復比例變為2倍。", ja: "強化攻撃の回復対象の攻撃速度を増加させる。強化攻撃のHP回復割合が2倍になる。", en: "English 2-Star Desc" }, 
                effects: { zh: ["攻擊速度提升:60%", "攻擊速度提升持續時間:6秒"], ja: ["攻撃速度増加: 60%", "攻撃速度増加の持続時間: 6秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/5XV8yTxZ/Aside-Skill-Hilde-3.png", 
                name: { zh: "溫泉功效", ja: "温泉の効能", en: "English 3-Star Name" }, 
                desc: { zh: "敵人對所有友軍造成的魔法傷害量減少。", ja: "味方全員の敵からの魔法被ダメージ量が減少する。", en: "English 3-Star Desc" }, 
                effects: { zh: ["受到的魔法傷害量減少:10.5%"], ja: ["魔法被ダメージ量減少: 10.5%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體魔法攻撃力 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体魔法攻撃力 3%", "全体会心ダメージ抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Kyarot": { 
        asideIcon: "https://i.postimg.cc/pp3yL6HW/Aside-Icon-Kyarot.png", 
        totalName: { zh: "小太陽", ja: "おひさま", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/Xrb9qmj0/Aside-Skill-Kyarot-1.png", 
                name: { zh: "快快長大吧!", ja: "すくすく育って！", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/LJpj5w9p/Aside-Skill-Kyarot-2.png", 
                name: { zh: "讓胡蘿蔔保持新鮮", ja: "ニンジンの鮮度維持", en: "English 2-Star Name" }, 
                desc: { zh: "強化攻擊追加護盾。護盾被破壞時,額外恢復SP。", ja: "強化攻撃にシールドが追加される。シールドが破壊されると、追加でSPを回復する。", en: "English 2-Star Desc" }, 
                effects: { zh: ["護盾:最大HP的30%", "護盾持續時間:5秒", "SP恢復量:45"], ja: ["シールド: 最大HPの30%", "シールドの持続時間: 5秒", "SP回復量: 45"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/nXJqrgFx/Aside-Skill-Kyarot-3.png", 
                name: { zh: "冰凍胡蘿蔔", ja: "アイスニンジン", en: "English 3-Star Name" }, 
                desc: { zh: "增加後排友軍對敵人造成的傷害量。", ja: "後列の味方が敵に与えるダメージ量を増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["造成的傷害量增加:19.5%"], ja: ["ダメージ量増加: 19.5%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體爆擊傷害 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体会心ダメージ 3%", "全体会心ダメージ抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Momo": { 
        asideIcon: "https://i.postimg.cc/TpBh3463/Aside-Icon-Momo.png", 
        totalName: { zh: "傳說中的手裡劍", ja: "伝説の手裏剣", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/PCj1J9XT/Aside-Skill-Momo-1.png", 
                name: { zh: "櫻花手裡劍", ja: "桜花手裏剣", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、魔法攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、魔法攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "魔法攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "魔法攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/xX3Mz5Ch/Aside-Skill-Momo-2.png", 
                name: { zh: "開眼的忍者", ja: "目覚めたニンジャ", en: "English 2-Star Name" }, 
                desc: { zh: "召喚獸自爆傷害增加。召喚獸被破壞時,恢復自身SP。使用高級技能時,在一段時間內,減少桃桃受到的傷害量。", ja: "召喚獣の自爆ダメージが増加する。召喚獣が破壊されると、自身のSPを回復する。高学年スキル使用時、一定時間、モモの被ダメージ量が減少する。", en: "English 2-Star Desc" }, 
                effects: { zh: ["召喚獸自爆傷害增加:200%", "SP恢復量:10", "受到的傷害量減少:50%", "受到的傷害量減少持續時間:3秒"], ja: ["召喚獣の自爆ダメージ増加: 200%", "SP回復量: 10", "被ダメージ量減少: 50%", "被ダメージ量減少の持続時間: 3秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/yDH0xt17/Aside-Skill-Momo-3.png", 
                name: { zh: "桃桃~喝!", ja: "モモ～ハッ！", en: "English 3-Star Name" }, 
                desc: { zh: "所有友軍對敵人造成的傷害量增加。敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵への与ダメージ量が増加し、味方全員の敵からの被ダメージ量が減少する。", en: "English 3-Star Desc" }, 
                effects: { zh: ["傷害量增加:10,5%", "受到的傷害量減少:4.5%"], ja: ["ダメージ量増加: 10.5%", "被ダメージ量減少: 4.5%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體魔法攻撃力 3%", "全體爆擊傷害 3%"], ja: ["全体魔法攻撃力 3%", "全体会心ダメージ: 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Ner": { 
        asideIcon: "https://i.postimg.cc/fJ1kRrNy/Aside-Icon-Ner.png", 
        totalName: { zh: "聖君艾爾芬", ja: "聖君エルフィン", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/mPyCHjDK/Aside-Skill-Ner-1.png", 
                name: { zh: "女王特別輔佐官", ja: "女王特別補佐役", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/XrkdCLJT/Aside-Skill-Ner-2.png", 
                name: { zh: "祭司長無敵權", ja: "司祭長の無敵権", en: "English 2-Star Name" }, 
                desc: { zh: "基本攻撃命中時,自身受到的傷害量減少,並恢復HP與SP。使用高級技能時,給予自身與前排使者無敵效果。", ja: "基本攻撃が命中すると、自身の被ダメージ量が減少し、HPとSPを回復する。高学年スキル使用時、自身と前衛使徒に無敵を付与する。", en: "English 2-Star Desc" }, 
                effects: { zh: ["無敵:對所有傷害及減益效果免疫。", "受到的傷害量減少:15%", "受到的傷害量減少持續時間:3秒", "HP恢復:最大HP的3%", "SP恢復量:30", "無敵持續時間:5秒"], ja: ["無敵: 全てのダメージおよび状態異常に対して免疫を持つ。", "被ダメージ量減少: 15%", "被ダメージ量減少の持続時間: 3秒", "HP回復: 最大HPの3%", "SP回復量: 30", "無敵の持続時間: 5秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/MnmVQ5TC/Aside-Skill-Ner-3.png", 
                name: { zh: "以世界樹之名!", ja: "世界樹の名前で！", en: "English 3-Star Name" }, 
                desc: { zh: "所有友軍對敵人造成的傷害量增加,敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵への与ダメージ量が増加し、味方全員の敵からの被ダメージ量が減少する。", en: "English 3-Star Desc" }, 
                effects: { zh: ["傷害量增加:10.5%", "受到的傷害量減少:4.5%"], ja: ["ダメージ量増加: 10.5%", "被ダメージ量減少: 4.5%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體魔法攻撃力 3%", "全體爆擊抵抗 3%"], ja: ["全体魔法攻撃力 3%", "全体会心抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Picola": { 
        asideIcon: "https://i.postimg.cc/0bhryBsK/Aside-Icon-Picora.png", 
        totalName: { zh: "最愛購物", ja: "ショッピングが大好き", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/LJ3L1D5d/Aside-Skill-Picora-1.png", 
                name: { zh: "購物王皮可菈", ja: "ショッピング王ピコラ", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/xX3Mz58S/Aside-Skill-Picora-2.png", 
                name: { zh: "皮可菈貼紙是附贈的!", ja: "ピコラのステッカーはオマケ！", en: "English 2-Star Name" }, 
                desc: { zh: "最大HP增加。強化攻擊後、一定時間內對剩餘HP比例最低的 2名友軍貼上皮可菈貼紙。皮可菈貼紙會恢復 2次HP,並增加傷害量。減少高級技能冷卻時間。", ja: "最大HPが増加する。強化攻撃後、一定時間、残りHP割合が最も低い味方2名にピコラのステッカーを貼る。ピコラのステッカーはHPを2回回復させ、与ダメージ量を増加させる。高学年スキルのクールタイムが減少する。", en: "English 2-Star Desc" }, 
                effects: { zh: ["大HP增加:20%", "皮可菈貼紙持續時間:7秒", "HP恢復:目標最大HP的22%", "傷害量增加:30%", "冷卻時間減少:12秒"], ja: ["最大HP増加: 20%", "ピコラのステッカーの持続時間: 7秒", "HP回復: 対象の最大HPの22%", "与ダメージ量増加: 30%", "クールタイム減少: 12秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/217hZGyD/Aside-Skill-Picora-3.png", 
                name: { zh: "聚集吧時尚達人", ja: "おしゃれピープル、集合！", en: "English 3-Star Name" }, 
                desc: { zh: "使敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵への被ダメージ量を減少させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["受到的傷害量減少:7.5%"], ja: ["被ダメージ量減少: 7.5%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體 HP 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体HP 3%", "全体会心ダメージ抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Posher": { 
        asideIcon: "https://i.postimg.cc/QHvVdy3B/Aside-Icon-Posher.png", 
        totalName: { zh: "大家的藥水", ja: "みんなのポーション", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/fVfm9Cys/Aside-Skill-Posher-1.png", 
                name: { zh: "藥水達人珀榭", ja: "ポーション職人ポーシャー", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、魔法攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、魔法攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "魔法攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "魔法攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/k2vKbsGq/Aside-Skill-Posher-2.png", 
                name: { zh: "臨床實驗大成功", ja: "臨床実験大成功", en: "English 2-Star Name" }, 
                desc: { zh: "使用普通技能後,恢復後排友軍的SP。高級技能的變異對象額外增加1名。", ja: "低学年スキルを使用すると、後列の味方のSPを回復する。高学年スキルに変異が1体追加される。", en: "English 2-Star Desc" }, 
                effects: { zh: ["SP恢復量:20~50"], ja: ["SP回復量: 20～50"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/xX3Mz58f/Aside-Skill-Posher-3.png", 
                name: { zh: "新藥革命", ja: "新薬革命", en: "English 3-Star Name" }, 
                desc: { zh: "增加所有友軍的爆擊抵抗與爆擊傷害抵抗。", ja: "味方全員の会心抵抗と会心ダメージ抵抗を増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體爆擊傷害 3%", "全體爆擊抵抗 3%"], ja: ["全体会心ダメージ 3%", "全体会心抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "RenewaAwaken": { 
        asideIcon: "https://i.postimg.cc/3dzWxcTD/Aside-Icon-Renewa-Awaken.png", 
        totalName: { zh: "故障的末日鐘", ja: "壊れたドゥームズデイ・クロック", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/rDNxrjsm/Aside-Skill-Renewa-Awaken-1.png", 
                name: { zh: "停止的時間", ja: "止まった時間", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/18rwqBXV/Aside-Skill-Renewa-Awaken-2.png", 
                name: { zh: "飛向時空彼端!", ja: "時空の彼方へ！", en: "English 2-Star Name" }, 
                desc: { zh: "經過6秒,或使用強化攻擊、普通技能時,對中間的敵人投下飛彈。飛彈會對敵人造成範圍物理傷害,命中時增加高級技能的冷卻時間。飛彈爆炸時,立即減少當前自身的高級技能冷卻時間。", ja: "6秒経過、または強化攻撃、低学年スキル使用時、中央に位置する敵にミサイルを投下する。ミサイルは敵に範囲物理ダメージを与え、命中時に現在高学年スキルのクールタイムを即時増加させる。ミサイルが爆発すると、自身の現在高学年スキルのクールタイムが即時減少する。", en: "English 2-Star Desc" }, 
                effects: { zh: ["飛彈物理傷害:200%", "冷卻時間增加:1秒", "冷卻時間立即減少:2秒"], ja: ["ミサイル物理ダメージ: 200%", "クールタイム即時増加: 1秒", "クールタイム即時減少: 2秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/hX1Tdsvm/Aside-Skill-Renewa-Awaken-3.png", 
                name: { zh: "屬於我們的和平時光", ja: "私たちの平和な時間", en: "English 3-Star Name" }, 
                desc: { zh: "我方全體對敵人造成的傷害量增加。", ja: "味方全員の敵への与ダメージ量を増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["造成的傷害量增加:22%"], ja: ["ダメージ量増加: 22%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體物理攻擊力 4%", "全體爆擊 4%"], ja: ["全体物理攻撃力 4%", "全体会心 4%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Rim": { 
        asideIcon: "https://i.postimg.cc/xcXcYSBw/Aside-Icon-Rim.png", 
        totalName: { zh: "派對主人琳", ja: "パーティの主宰リム", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/5H9vqzQ0/Aside-Skill-Rim-1.png", 
                name: { zh: "中文1星名稱", ja: "日文1星名稱", en: "English 1-Star Name" }, 
                desc: { zh: "中文1星描述", ja: "日文1星描述", en: "English 1-Star Desc" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/VSsMBt0d/Aside-Skill-Rim-2.png", 
                name: { zh: "中文2星名稱", ja: "日文2星名稱", en: "English 2-Star Name" }, 
                desc: { zh: "中文2星描述", ja: "日文2星描述", en: "English 2-Star Desc" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/1gR6cFV8/Aside-Skill-Rim-3.png", 
                name: { zh: "中文3星名稱", ja: "日文3星名稱", en: "English 3-Star Name" }, 
                desc: { zh: "中文3星描述", ja: "日文3星描述", en: "English 3-Star Desc" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Risty": { 
        asideIcon: "https://i.postimg.cc/1f8fPZLh/Aside-Icon-Risty.png", 
        totalName: { zh: "今日的POTG", ja: "本日のPOTG", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/qtBnXK6h/Aside-Skill-Risty-1.png", 
                name: { zh: "精靈聯盟最強者", ja: "リーグ・オブ・エルフ最強者", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心增加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/GB3YJDTs/Aside-Skill-Risty-2.png", 
                name: { zh: "天才駭客登場", ja: "天才ハッカーの登場", en: "English 2-Star Name" }, 
                desc: { zh: "以普通技能擊殺敵人時恢復SP。使用高級技能後,對剩餘HP比例最低的3名敵人額外造成3次物理傷害。", ja: "低学年スキルで敵を退治すると、SPを回復する。高学年スキル使用後、残りHP割合が最も低い敵3体に追加で3回物理ダメージを与える", en: "English 2-Star Desc" }, 
                effects: { zh: ["SP恢復:75%", "SP恢復冷卻時間:10秒", "每個方塊物理傷害:160%"], ja: ["SP回復: 75%", "SP回復クールタイム: 10秒", "ブロックにつき物理ダメージ: 160%"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/2qjvFWLn/Aside-Skill-Risty-3.png", 
                name: { zh: "莉絲蒂的超級救援", ja: "リスティのスーパーセーブ", en: "English 3-Star Name" }, 
                desc: { zh: "增加後排友軍的每秒SP恢復量。", ja: "後列の味方の1秒ごとのSP回復量を増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["每秒SP恢復量:4"], ja: ["1秒ごとのSP回復量: 4"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體爆擊傷害 3%", "全體物理防禦力 3%"], ja: ["全体 会心ダメージ 3%", "全体 物理防御力 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Rufo": { 
        asideIcon: "https://i.postimg.cc/8j7jDVq8/Aside-Icon-Rufo.png", 
        totalName: { zh: "智囊盧波", ja: "ブレーンルポ", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/t1RPt6n5/Aside-Skill-Rufo-1.png", 
                name: { zh: "反對獸糧黨知識王", ja: "反アニマル缶戦線の知識王", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/mcZMN91S/Aside-Skill-Rufo-2.png", 
                name: { zh: "三劍客的大冒險", ja: "三銃士の大冒険", en: "English 2-Star Name" }, 
                desc: { zh: "普通攻擊傷害量增加。當自身處於障眼法狀態時,攻擊速度提升,且立即減少目前高級技能冷卻時間。回合開始時,自身的第一下普通攻擊將以強化攻擊施放。", ja: "普通攻撃の与ダメージが増加する。自身に目くらましが付与されると攻撃速度が増加し、高学年スキルのクールタイムが減少する。ウェーブ開始時、自身の最初の普通攻撃は強化攻撃で発動する。", en: "English 2-Star Desc" }, 
                effects: { zh: ["障眼法:不會成為敵人的攻擊目標。沒有友軍時不會觸發。", "普通攻擊傷害量增加:200%", "攻擊速度提升:75%", "攻擊速度提升持續時間:6秒", "冷卻時間立即減少:4秒"], ja: ["目くらまし: 敵の目標にならない。他の味方がいない時は発動しない。", "普通攻撃のダメージ量増加: 200%", "攻撃速度増加: 75%", "攻撃速度増加の持続時間: 6秒", "クールタイム減少: 4秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/676RLZ4Y/Aside-Skill-Rufo-3.png", 
                name: { zh: "我就是最棒的戰略家!", ja: "最高の戦友なのだ！", en: "English 3-Star Name" }, 
                desc: { zh: "提升所有友軍的攻擊速度。", ja: "味方全員の攻撃速度を増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["攻擊速度增加:7%"], ja: ["攻撃速度増加: 7%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体物理攻撃力 3%", "全体会心ダメージ抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Selline": { 
        asideIcon: "https://i.postimg.cc/Mvnvx8gg/Aside-Icon-Selline.png", 
        totalName: { zh: "網紅的瑟琳娜", ja: "セレブ・セリーネ", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/hJ4xbmQw/Aside-Skill-Selline-1.png", 
                name: { zh: "惡作劇的瑟琳娜", ja: "悪戯好きなセリーネ", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP增加。", ja: "着用者の最大HPが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:22.5%"], ja: ["最大HP増加: 22.5%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/94x9xfyx/Aside-Skill-Selline-2.png", 
                name: { zh: "挑釁專家ElfTuber", ja: "煽り専門ElTuber", en: "English 2-Star Name" }, 
                desc: { zh: "受到直接傷害時恢復SP。降低因強化攻擊受到挑釁的敵人的攻擊速度。強化攻擊的HP恢復比例變為2倍", ja: "直接ダメージを受けるとSPが回復する。強化攻撃で挑発した敵の攻撃速度を減少させる。強化攻撃のHP回復割合が2倍になる。", en: "English 2-Star Desc" }, 
                effects: { zh: ["直接傷害:指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "SP恢復量:6", "攻擊速度降低:33%", "攻擊速度降低持續時間:4秒"], ja: ["直接ダメージ: 直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "SP回復量: 6", "攻擊速度減少: 33%", "攻撃速度減少の持続時間: 4秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/1gWFWzDB/Aside-Skill-Selline-3.png", 
                name: { zh: "捐款挑戰", ja: "寄付チャレンジ", en: "English 3-Star Name" }, 
                desc: { zh: "敵人對前排友軍造成傷害量減少。", ja: "前列の味方の敵への被ダメージ量を減少させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["受到的傷害量減少:97%"], ja: ["被ダメージ量減少: 9.7%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體魔法防禦力 3%", "全體爆擊抵抗 3%"], ja: ["全体魔法防御力 3%", "全体会心抵抗 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Sist": { 
        asideIcon: "https://i.postimg.cc/9rDrVjvj/Aside-Icon-Sist.png", 
        totalName: { zh: "名牌包", ja: "ブランドバック", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/kVjSj5Ww/Aside-Skill-Sist-1.png", 
                name: { zh: "商業天才希瑟圖", ja: "商売の天才シスト", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/3yLGLw2b/Aside-Skill-Sist-2.png", 
                name: { zh: "賭上友誼的勝負", ja: "友情をかけた勝負", en: "English 2-Star Name" }, 
                desc: { zh: "得普通技能增益效果時,增加隨機友軍攻擊型使者的攻擊力與攻擊速度。若無攻擊型使者,則隨機套用於友軍隊友。高級技能固定造成最大物理傷害。", ja: "低学年スキルのバフを獲得時、ランダムな味方アタッカー使徒の攻撃力と攻撃速度を増加させる。アタッカー使徒がいない場合は、ランダムな味方に適用される。高学年スキルは、常に最大物理ダメージ量を与える。", en: "English 2-Star Desc" }, 
                effects: { zh: ["隨機友軍使者:2名", "攻擊力增加:41%", "攻擊力增加持續時間:10秒", "攻擊速度提升:41%", "攻擊速度提升持續時間:10秒"], ja: ["ランダムな味方の使徒: 2体", "攻撃力増加: 41%", "攻撃力増加の持続時間: 10秒", "攻撃速度増加: 41%"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/LhGtKhGg/Aside-Skill-Sist-3.png", 
                name: { zh: "天真目標商品", ja: "味方ターゲット商品", en: "English 3-Star Name" }, 
                desc: { zh: "使所有友軍爆擊及爆擊傷害增加。", ja: "味方全員の会心と会心ダメージを増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體爆擊 3%"], ja: ["全体物理攻撃力 3%", "全体会心 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Snorky": { 
        asideIcon: "https://i.postimg.cc/nsB3PgH9/Aside-Icon-Snorky.png", 
        totalName: { zh: "大BOSS斯諾奇", ja: "ビッグボススノキー", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/bsbQzpjz/Aside-Skill-Snorky-1.png", 
                name: { zh: "我的夢想是大Boss!", ja: "夢はビッグボス", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/c6PRy6Pg/Aside-Skill-Snorky-2.png", 
                name: { zh: "義氣的代名詞", ja: "義理の代名詞", en: "English 2-Star Name" }, 
                desc: { zh: "回合開始時,賦予前排友軍護盾並增加造成的傷害量。強化攻擊時,減少周圍友軍受到的傷害量。", ja: "ウェーブ開始時に前列の味方にシールドを付与し、与えるダメージ量を増加させる。強化攻撃時、周囲の味方の被ダメージ量を減少させる。", en: "English 2-Star Desc" }, 
                effects: { zh: ["護盾:最大HP的24%", "護盾持續時間:12秒", "傷害量增加:32%", "傷害量增加持續時間:12秒", "受到的傷害量減少:46%", "受到的傷害量減少持續時間:3秒"], ja: ["シールド: 最大HPの24%", "シールドの持続時間: 12秒", "ダメージ量増加: 32%", "ダメージ量増加の持続時間: 12秒", "被ダメージ量減少: 24%", "被ダメージ量減少の持続時間: 3秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/nC7vHptc/Aside-Skill-Snorky-3.png", 
                name: { zh: "吃我一拳", ja: "拳の味を見せてやる", en: "English 3-Star Name" }, 
                desc: { zh: "使敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵からの被ダメージ量を減少させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["受到的傷害量減少:7.5%"], ja: ["被ダメージ量減少: 7.5%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體物理防禦力 3%"], ja: ["全体物理攻撃力 3%", "全体物理防御力 3%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Ui": { 
        asideIcon: "https://i.postimg.cc/qzNz0d9T/Aside-Icon-Ui.png", 
        totalName: { zh: "不快樂的羽伊", ja: "アンハッピーウイ", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/tYPhXpHY/Aside-Skill-Ui-1.png", 
                name: { zh: "耶魯呱呱叫", ja: "エルはケロケロ", en: "English 1-Star Name" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/WhrM2TP3/Aside-Skill-Ui-2.png", 
                name: { zh: "正向王羽伊", ja: "ポジティブの王ウイ", en: "English 2-Star Name" }, 
                desc: { zh: "額外追加1個活潑性格。使用普通技能時,增加中排友軍的傷害量。", ja: "活発を1個追加する。低学年スキル使用時、中列の味方のダメージ量を増加させる。", en: "English 2-Star Desc" }, 
                effects: { zh: ["傷害量增加:16%", "傷害量增加持續時間:7秒"], ja: ["ダメージ量増加: 16%", "ダメージ量増加の持続時間: 7秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/rKWS8MLs/Aside-Skill-Ui-3.png", 
                name: { zh: "穿雨靴的羽伊", ja: "長ぐつをはいたウイ", en: "English 3-Star Name" }, 
                desc: { zh: "敵人對中排友軍造成的傷害量減少。", ja: "中列の味方の敵からの被ダメージ量が減少する。", en: "English 3-Star Desc" }, 
                effects: { zh: ["受到的傷害量減少:14%"], ja: ["被ダメージ量減少: 14%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體 HP 4%", "全體魔法攻撃力 4%"], ja: ["全体HP 4%", "全体魔法攻撃力 4%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "Vivi": { 
        asideIcon: "https://i.postimg.cc/mtPtRG0b/Aside-Icon-Vivi.png", 
        totalName: { zh: "被鎖鏈鎖上的箱子", ja: "鎖で閉ざされた箱", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/MvRyWq8M/Aside-Skill-Vivi-1.png", 
                name: { zh: "上鎖的回憶箱", ja: "閉ざされた記憶の箱", en: "English 1-Star Name" }, 
                desc: { zh: "戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "English 1-Star Desc" }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/9rTGWCjq/Aside-skill-vivi-2.png", 
                name: { zh: "本少女會保護你的", ja: "わたくしがお守りいたしますわ", en: "English 2-Star Name" }, 
                desc: { zh: "減少受到的技能傷害量。基本攻撃命中時,所攻擊敵人SP減少。(世界首領的SP減少值會降低。) 使用普通技能後,賦予除自身以外剩下HP比例最低的友軍水銀護盾。高級技能的水銀槍將額外飛向隨機2名敵人。", ja: "敵からの被スキルダメージ量が減少する。基本攻撃が命中時、攻撃した敵のSPを減少させる。(ワールドボスはSP減少量が低下する。)低学年スキル使用後、自身を除き、残りHP割合が最も低い味方に水銀シールドを付与する。高学年スキルの水銀の槍が、ランダムな2体に追加で発射される。", en: "English 2-Star Desc" }, 
                effects: { zh: ["受到的技能傷害量減少:33%", "SP減少量:45", "世界首領SP減少量:15", "護盾:最大HP的64%", "護盾持續時間:6秒"], ja: ["被スキルダメージ量減少: 33%", "SP減少量: 45", "ワールドボスSP減少量: 15", "シールド: 最大HPの64%", "シールドの持続時間: 6秒"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/F7cj9NQk/Aside-skill-vivi-3.png", 
                name: { zh: "榮耀的薇薇", ja: "名誉あるヴィヴィ", en: "English 3-Star Name" }, 
                desc: { zh: "所有友軍受到敵人的傷害量減少。所有友軍的攻擊速度提升。", ja: "味方全員の敵からの被ダメージ量を減少させる。味方全員の攻撃速度を増加させる。", en: "English 3-Star Desc" }, 
                effects: { zh: ["受到的傷害量減少:6%", "攻擊速度提升:5.25%"], ja: ["被ダメージ量減少: 6%", "攻撃速度増加: 5.25%"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["全體 HP 4%", "全體魔法防禦力 4%"], ja: ["全体HP 4%", "全体魔法防御力 4%"], en: ["Global Stat Bonus 1"] } 
            }
        }
    },
    "xXionx": { 
        asideIcon: "https://i.postimg.cc/vc4cMdpY/Aside-Icon-x-Xionx.png", 
        totalName: { zh: "喋喋不休的伊德", ja: "おしゃべりイード", en: "English Total Name" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/1f6p9sZq/Aside-Skill-x-Xionx-1.png", 
                name: { zh: "中文1星名稱", ja: "日文1星名稱", en: "English 1-Star Name" }, 
                desc: { zh: "中文1星描述", ja: "日文1星描述", en: "English 1-Star Desc" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/qzn8k4dK/Aside-Skill-x-Xionx-2.png", 
                name: { zh: "中文2星名稱", ja: "日文2星名稱", en: "English 2-Star Name" }, 
                desc: { zh: "中文2星描述", ja: "日文2星描述", en: "English 2-Star Desc" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/CzDjFSVC/Aside-Skill-x-Xionx-3.png", 
                name: { zh: "中文3星名稱", ja: "日文3星名稱", en: "English 3-Star Name" }, 
                desc: { zh: "中文3星描述", ja: "日文3星描述", en: "English 3-Star Desc" }, 
                effects: { zh: ["效果1"], ja: ["効果1"], en: ["Effect 1"] }, 
                globalEffects: { zh: ["能力加成1"], ja: ["ステータスボーナス1"], en: ["Global Stat Bonus 1"] } 
            }
        }
    }
};
