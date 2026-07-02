// data_aside.js
// 🔮 願像系統 (Aside) 資料庫 - 多語系版本 (zh: 中文, ja: 日文, en: 英文)

const ASIDE_DATA = {
    "Amelia": { 
        asideIcon: "https://i.postimg.cc/bsZs8jKN/Aside-Icon-Amelia.png", 
        totalName: { zh: "王子艾琳娜", ja: "王子エレナ", en: "White Knight Elena" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/rKWS8MLS/Aside-Skill-Amelia-1.png", 
                name: { zh: "王子的恩寵", ja: "王子さまの恵み", en: "White Knight's Blessing" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases the bearer's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/4mtzJsTp/Aside-Skill-Amelia-2.png", 
                name: { zh: "超高速雷射光", ja: "超高速サンダーレーザー", en: "High-Speed Thunder Laser" }, 
                desc: { zh: "提升強化攻擊的施展機率。對處於觸電狀態的敵人造成的普通攻擊傷害量增加。被動技能施加觸電的目標數變為3名。", ja: "強化攻撃の発動確率が増加する。感電状態の敵に与える普通攻撃のダメージ量が増加する。パッシブスキルで付与する感電の対象数が3体になる。", en: "Increases the Enhanced Attack Cast Rate. Increases the Normal Attack Damage on enemies inflicted with Electrocution, Passive Skill inflicts Electrocution on 3 targets." }, 
                effects: { zh: ["強化攻擊施展機率增加:15%", "普通攻擊傷害量增加:40%"], ja: ["強化攻擊発動確率増加: 15%", "普通攻撃のダメージ量増加: 40%"], en: ["Chance of Enhanced Attack Increase: 15%", "Normal ATK DMG Increase: 40%"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/6yRd9tNr/Aside-Skill-Amelia-3.png", 
                name: { zh: "請求支援", ja: "援軍要請の件", en: "Request for Support" }, 
                desc: { zh: "增加後排友軍的每秒SP恢復量。", ja: "後列の味方の1秒ごとのSP回復量を増加させる。", en: "Increases SP Recovery per second for Back Row allies." }, 
                effects: { zh: ["每秒SP恢復量:4"], ja: ["1秒ごとのSP回復量: 4"], en: ["SP Recovery per second: 4"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體爆擊 3%"], ja: ["全体物理攻撃力 3%", "全体会心 3%"], en: ["All Physical ATK 3%", "All CRIT Hit 3%"] } 
            }
        }
    },
    "Barong": { 
        asideIcon: "https://i.postimg.cc/9D2LGRq7/Aside-Icon-Barong.png", 
        totalName: { zh: "備受喜愛的幽靈芭瓏", ja: "愛され幽霊バロン", en: "Beloved Phantom Barong" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/XvnKk0zc/Aside-Skill-Barong-1.png", 
                name: { zh: "惹人愛的小搗蛋", ja: "みんなの愛されキャラ", en: "Everyone's Little Darling" }, 
                desc: { zh: "穿戴者的最大HP、魔法攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、魔法攻撃力、会心、会心ダメージが増加する。", en: "Increases bearer's Max HP, Magical ATK, CRIT, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "魔法攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP增加:6%", "魔法攻擊力增加:6%", "会心增加:6%", "会心ダメージ増加:6%"], en: ["Max HP Increase: 6%", "Magical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/dhF58kTC/Aside-Skill-Barong-2.png", 
                name: { zh: "主人的時間到了", ja: "ご主人様の時間だ", en: "Master's Time" }, 
                desc: { zh: "衝向普通技能的目標對象時,受到的傷害量減少,並沿著足跡生成不祥的霧氣。每隔一段時間給予不祥霧氣內的敵人詛咒效果。普通技能命中時,給予敵人中毒效果,並恢復自身的HP。每波次,第一次普通技能命中時,給予敵人昏迷效果。", ja: "低学年スキルの目標対象に向かって突進する際、被ダメージ量が減少し、足跡に沿って不吉な需を生成する。不吉な霧の中にいる敵に一定時間ごとに呪いを付与する。低学年スキル命中時、敵に毒を付与し、自身の HPを回復する。ウェーブごとに最初の低学年スキル命中時、敵に気絶を付与する。", en: "When charging toward the target of her Freshman Skill, reduces Incoming Damage and creates an ominous fog along her trail. Enemies within the ominous fog are afflicted with Curse at regular intervals. When Freshman Skill hits, applies Poison to the enemy and recovers own HP. Per wave, when the first Freshman Skill hits, applies Stun to the enemy." }, 
                effects: { zh: ["中毒:每秒造成傷害並減少所受傷害量。", "詛咒:隨機對其他對象造成相當於目標所受傷害量一定比例的魔法傷害。", "昏迷:無法進行任何行動。", "受到的傷害量減少:40%", "不祥的霧氣持續時間:10秒", "詛咒持續時間:6秒", "中毒持續時間:3秒", "HP恢復:最大HP的15%", "昏迷持續時間:3秒"], ja: ["毒:攻撃力が減少し、1秒ごとにダメージを受ける。", "呪い: 対象が受けたダメージの一定割合分、ランダムな別の対象に魔法ダメージを与える。", "気絶:行動不能になる。", "被ダメージ量減少:40%", "不吉な霊の持続時間:10秒", "呪いの持続時間:6秒", "毒の持続時間:3秒", "HP回復:最大HPの15%", "気絶の持続時間:3秒"], en: ["Poison: Applies Damage every second and reduces Attack", "Curse: Ratio of Damage Received by the target is dealt as Magical Damage to a random target.", "Stun: Becomes unable to act.", "Incoming DMG Reduction: 140%", "Ominous Fog Duration: 10s", "Curse Duration: 6s", "Poison Duration: 3s", "HP Recovery: 15% of Max HP", "Stun Duration: 3s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/tsbBhZVn/Aside-Skill-Barong-3.png", 
                name: { zh: "新任大金主", ja: "新たなクジラ", en: "The New Big Spender" }, 
                desc: { zh: "增加前排友軍對敵人造成的傷害量,並減少前排友軍受到敵人的傷害量。", ja: "前列の味方の敵への与ダメージ量を増加させ、 前列の味方の敵からの被ダメージ量を減少させる。", en: "Increases Outgoing Damage and reduces Incoming Damage of Front Row allies." }, 
                effects: { zh: ["傷害量增加:13.6%", "受到的傷害量減少:5.9%"], ja: ["ダメージ量増加:13.6%", "被ダメージ量減少:5,9%"], en: ["DMG Increase: 13,6%", "Incoming DMG Reduction: 5.9%"] }, 
                globalEffects: { zh: ["全體魔法攻擊力 3%", "全體魔法防禦力 3%"], ja: ["全体魔法攻撃力 3%", "全体魔法防御力 3%"], en: ["All Magical ATK 3%", "All Magical DEF3%"] } 
            }
        }
    },
    "Chloe": { 
        asideIcon: "https://i.postimg.cc/tYsYyHLT/Aside-Icon-Chloe.png", 
        totalName: { zh: "時尚封面庫洛艾", ja: "ファッションカバークロエ", en: "Fashion Cover Chloe" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/w7Jh6gd0/Aside-Skill-Chloe-1.png", 
                name: { zh: "名人庫洛艾", ja: "セレブリティ・クロエ", en: "Celebrity Chloe" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/YvHQ0Zpf/Aside-Skill-Chloe-2.png", 
                name: { zh: "F/W 庫洛艾穿搭", ja: "F/W クロエルック", en: "F/W Chloe Look" }, 
                desc: { zh: "免疫昏迷與變異。受到14次直接傷害時,會挑釁周圍敵人並造成範圍魔法傷害。發動玩偶的意志時,一定時間內攻擊速度提升,且每秒恢復HP。", ja: "気絶と変異の免疫を持つ。直接ダメージによって14回ダメージを受けると、周囲の敵を挑発して範囲魔法ダメージを与える。ぬいぐるみの意思が発動すると、一定時間、攻撃速度が増加し、1秒ごとにHPが回復する。", en: "Becomes immune to Stun and Mutate, After taking 14 hits from Direct Damage, Taunts nearby enemies and deals AoE Magical Damage. When Doll's Will is activated, increases Attack Speed for a set period of time and recovers HP every second." }, 
                effects: { zh: ["昏迷:無法進行任何行動。", "變異:使目標變成物品並且無法進行任何行動。", "直接傷害:指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "挑釁:使目標對發動挑釁的單位進行基本攻擊。", "玩偶的意志:改變基本攻擊效果。", "挑釁持續時間:3秒", "魔法傷害:300%", "攻擊速度提升: 30%", "攻擊速度提升持續時間:7秒", "每秒HP恢復:最大HP的1%", "每秒HP恢復持續時間:7秒"], ja: ["気絶: 行動不能になる。", "変異: 物体に変化し、行動不能になる。", "直接ダメージ: 直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "挑発: 挑発した対象を基本攻撃で攻撃する。", "ぬいぐるみの意思: 基本攻撃の効果が変更される。", "挑発の持続時間: 3秒", "魔法ダメージ: 300%", "攻撃速度増加: 30%", "攻撃速度増加の持続時間: 7秒", "1秒ごとのHP回復: 最大HPの1%", "1秒ごとのHP回復の持続時間: 7秒"], en: ["Stun: Becomes unable to act.", "Mutate: Turns into an inanimate object and becomes unable to act.", "Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "Taunt: Provokes Basic Attacks on the taunt.", "Doll's Will: The effect of Basic Attack changes.", "Taunt Duration: 3s", "Magical DMG: 300%", "ATK SPD Increase: 30%", "ATK SPD Increase Duration: 7s", "HP Recovery Per Second: 1% of Max HP", "HP Recovery Duration: 7s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/4YgpyqJp/Aside-Skill-Chloe-3.png", 
                name: { zh: "伸展台開場", ja: "ランウェイオープニング", en: "Runway Opening" }, 
                desc: { zh: "增加前排友軍對敵人造成的傷害量,並減少前排友軍受到敵人的傷害量。", ja: "前列の味方の敵への与ダメージ量を増加させ、前列味方の敵からの被ダメージ量を減少させる。", en: "Increases Outgoing Damage and reduces Incoming Damage Rate of Front Row allies." }, 
                effects: { zh: ["傷害量增加:19.5%", "受到的傷害量減少:8.8%"], ja: ["ダメージ量増加: 19.5%", "被ダメージ量減少: 8.8%"], en: ["DMG Increase: 19.5%", "Incoming DMG Reduction: 8.8%"] }, 
                globalEffects: { zh: ["全體魔法防禦力 4%", "全體爆擊抵抗 4%"], ja: ["全体魔法防御力 4%", "全体会心抵抗 4%"], en: ["All Magical DEF 4%", "All CRIT Resistance 4%"] } 
            }
        }
    },
    "Diana": { 
        asideIcon: "https://i.postimg.cc/9rDrVjv0/Aside-Icon-Diana.png", 
        totalName: { zh: "小蒂亞娜", ja: "ちびディアナ", en: "Runt Diana" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/SnhcR3yf/Aside-Skill-Diana-1.png", 
                name: { zh: "小鹿加油?", ja: "子ジカの応援？", en: "Baby Deer Cheer?" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/PCj1J9tW/Aside-Skill-Diana-2.png", 
                name: { zh: "厲害的治療方法", ja: "すごい治療法", en: "Incredible Healing Method" }, 
                desc: { zh: "強化攻擊的恢復目標增加至3名。戰鬥開始時,減少除自身外友軍狂亂性格使者受到的爆擊傷害量。", ja: "強化攻撃の回復対象が3体に増加する。戦闘開始時、自身を除く狂気の味方使徒の会心被ダメージ量を減少させる。", en: "Increases Enhanced Attack Recovery Targets to 3. When the combat starts, reduces the Incoming Critical Damage of all allied Mad Personality Apostles excluding herself." }, 
                effects: { zh: ["受到的爆擊傷害量減少:66%"], ja: ["会心被ダメージ量減少: 66%"], en: ["Incoming CRIT DMG Reduction: 66%"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/18QDX29H/Aside-Skill-Diana-3.png", 
                name: { zh: "自然之力", ja: "自然の力", en: "Power of Nature" }, 
                desc: { zh: "中排友軍對敵人造成的傷害量增加、敵人對中排友軍造成的傷害量減少。", ja: "中列の味方の敵への与ダメージ量が増加し、中列の味方の敵からの被ダメージ量が減少する。", en: "Increases Outgoing Damage for and reduces Incoming Damage for Middle Row allies." }, 
                effects: { zh: ["傷害量增加:13.6%", "受到的傷害量減少:5.9%"], ja: ["ダメージ量増加: 13.6%", "被ダメージ量減少: 5.9%"], en: ["DMG Increase: 13.6%", "Incoming DMG Reduction: 5.9%"] }, 
                globalEffects: { zh: ["全體魔法防禦力 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体魔法防御力 3%", "全体会心ダメージ抵抗 3%"], en: ["All Magical DEF 3%", "All CRIT DMG RES 3%"] } 
            }
        }
    },
    "Ed": { 
        asideIcon: "https://i.postimg.cc/9rDrVjvD/Aside-Icon-Ed.png", 
        totalName: { zh: "伊德永恆子彈", ja: "イード・ジ・エターナルブレット", en: "ED the Eternal Bullet" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/jDby2msc/Aside-Skill-Ed-1.png", 
                name: { zh: "心地善良的伊德", ja: "心優しいイード", en: "Kind-Hearted ED" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/75kShdxX/Aside-Skill-Ed-2.png", 
                name: { zh: "未醒之夢", ja: "まだ夢から覚めていない", en: "Not Yet Awake from the Dream" }, 
                desc: { zh: "使用強化攻擊時,在一段時間內增加自己的防禦力。使用普通技能時,額外赋予剩下HP比例最低的友軍護盾。恢復觸發保護友軍的SP。", ja: "強化攻撃使用時、一定時間、自身の防御力を増加させる。低学年スキル使用時、残りHP割合が最も低い味方に追加でシールドを付与する。保護が発動した味方のSPを回復させる。", en: "When Enhanced Attack is used, increases her Defense for a set period of time. When Freshman Skill is used, additionally grants a Shield to the ally with the lowest remaining HP Ratio. Recovers the SP of allies with Protection activated." }, 
                effects: { zh: ["保護:因直接傷害陷入無法戰鬥狀態時,該傷害將被無效化並賦予護盾。", "直接傷害:指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "防禦力增加:25%", "防禦力增加持續時間:5秒", "護盾:最大HP的50%", "護盾持續時間:8秒", "友軍SP恢復:30%"], ja: ["保護: 直接ダメージによって戦闘不能になった時、そのダメージを無効化してシールドを付与する。", "直接ダメージ: 直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "防御力増加: 25%", "防御力増加の持続時間: 5秒", "シールド: 最大HPの24%/46%/48%/50%/52% (低学年スキルLvに依存)", "シールドの持続時間: 8秒", "味方SP回復: 30%"], en: ["Protection: Negates incapacitating Direct Damage and grants a Shield.", "Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "DEF Increase: 25%", "DEF Increase Duration: 5s", "Shield: 50% of Max HP", "Shield Duration: 8s", "Ally SP Recovery: 30%"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/dhYG3pq5/Aside-Skill-Ed-3.png", 
                name: { zh: "共同的夢", ja: "共に見る夢", en: "Shared Dream" }, 
                desc: { zh: "增加所有友軍的最大HP。", ja: "味方全員の最大HPを増加させる。", en: "Increases Max HP of all allies." }, 
                effects: { zh: ["最大HP增加:18%"], ja: ["最大HP増加: 18%"], en: ["Max HP Increase: 18%"] }, 
                globalEffects: { zh: ["全體 HP 4%", "全體爆擊抵抗 4%"], ja: ["全体HP 4%","全体会心抵抗 4%"], en: ["All HP 4%", "All CRIT Resistance 4%"] } 
            }
        }
    },
    "Haley": { 
        asideIcon: "https://i.postimg.cc/BXRtnV0J/Aside-Icon-Haley.png", 
        totalName: { zh: "宇宙戰艦", ja: "宇宙船艦", en: "Space Warship" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/Xrb9qmV2/Aside-Skill-Haley-1.png", 
                name: { zh: "宇宙戰艦海莉", ja: "宇宙船艦ヘイリー", en: "Space Battleship Haley" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases the bearer's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/9Dhy0KW8/Aside-Skill-Haley-2.png", 
                name: { zh: "航行經過地球", ja: "地球をフライバイ", en: "Sailing Over Earth" }, 
                desc: { zh: "獲得強化攻擊增益效果時,增加除自己以外的中排友軍使者的攻擊力與防禦力。普通技能的最後一擊必定赋予灼痛。使用高級技能時會召喚軍艦。軍艦會對前方的敵人投下6枚砲彈,造成範圍物理傷害。", ja: "強化攻撃バフの獲得時、自身を除く中列の味方使徒の攻撃力と防御力を増加させる。低学年スキルの最後の一撃に確定で苦痛を付与する。高学年スキル使用時、軍艦が召喚される。軍艦は前方の敵に砲弾を6発降らせ、範囲物理ダメージを与える。", en: "When acquiring an Enhanced Attack Buff, increases ATK and DEF of all Middle Row allied Apostles except self. The final hit of the Freshman Skill always applies Stinging. When Senior Skill is used, summons a battleship. The battleship drops 6 cannon shells on enemies in front, dealing AoE Physical Damage." }, 
                effects: { zh: ["灼痛:每秒造成傷害,並使恢復量減少。", "攻擊力增加:32%", "攻擊力增加持續時間:6秒", "防禦力增加:16%", "防禦力增加持續時間:6秒", "灼痛持續時間:5秒", "每枚砲彈物理傷害:375%"], ja: ["苦痛: 1秒ごとにダメージを受け、回復量が減少する。", "攻撃力増加: 32%", "攻撃力増加の持続時間: 6秒", "防御力増加: 16%", "攻撃力増加の持続時間: 6秒", "苦痛の持続時間: 5秒", "砲弾につき物理ダメージ: 375%"], en: ["Stinging: Reduces Recovery and applies Damage every second.", "ATK Increase: 32%", "ATK Increase Duration: 6s", "DEF Increase: 16%", "DEF Increase Duration: 6s", "Stinging Duration: 5s", "Physical DMG per Cannon: 375%"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/tsjFJwXM/Aside-Skill-Haley-3.png", 
                name: { zh: "友軍基地保護作戰", ja: "味方基地防衛作戦", en: "Ally Base Defensive Operation" }, 
                desc: { zh: "使敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵からの被ダメージ量を減少させる。", en: "Reduces the Incoming Damage of all allies." }, 
                effects: { zh: ["受到的傷害量減少:7.5%"], ja: ["被ダメージ量減少: 7.5%"], en: ["Incoming DMG Reduction: 7.5%"] }, 
                globalEffects: { zh: ["全體爆擊 3%", "全體物理防禦力 3%"], ja: ["全体会心 3%", "全体物理防御力 3%"], en: ["All CRIT Hit 3%", "All Physical DEF 3%"] } 
            }
        }
    },
    "Hilde": { 
        asideIcon: "https://i.postimg.cc/crP6LbSs/Aside-Icon-Hilde.png", 
        totalName: { zh: "泡溫泉的希爾德", ja: "温泉のヒルデ", en: "Hilde in a Hot Spring" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/TK6n1FRS/Aside-Skill-Hilde-1.png", 
                name: { zh: "自我治療", ja: "自己治療", en: "Self-Care" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗: 6%", "会心ダメージ抵抗: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/yDH0xtVG/Aside-Skill-Hilde-2.png", 
                name: { zh: "醫務人員保護法", ja: "医療従事者保護法", en: "Healthcare Protection Act" }, 
                desc: { zh: "提升強化攻擊恢復目標的攻擊速度。強化攻擊的HP恢復比例變為2倍。", ja: "強化攻撃の回復対象の攻撃速度を増加させる。強化攻撃のHP回復割合が2倍になる。", en: "Increases the Attack Speed for the Enhanced Attack Recovery Target. Enhanced Attack's HP Recovery Ratio is doubled." }, 
                effects: { zh: ["攻擊速度提升:60%", "攻擊速度提升持續時間:6秒"], ja: ["攻撃速度増加: 60%", "攻撃速度増加の持続時間: 6秒"], en: ["ATK SPD Increase: 60%", "ATK SPD Increase Duration: 6s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/5XV8yTxZ/Aside-Skill-Hilde-3.png", 
                name: { zh: "溫泉功效", ja: "温泉の効能", en: "Hot Springs Benefits" }, 
                desc: { zh: "敵人對所有友軍造成的魔法傷害量減少。", ja: "味方全員の敵からの魔法被ダメージ量が減少する。", en: "Reduces Incoming Magical Damage for all allies." }, 
                effects: { zh: ["受到的魔法傷害量減少:10.5%"], ja: ["魔法被ダメージ量減少: 10.5%"], en: ["Incoming Magical DMG Reduction: 10.5%"] }, 
                globalEffects: { zh: ["全體魔法攻撃力 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体魔法攻撃力 3%", "全体会心ダメージ抵抗 3%"], en: ["All Magical ATK 3%", "All CRIT DMG RES 3%"] } 
            }
        }
    },
    "Kyarot": { 
        asideIcon: "https://i.postimg.cc/pp3yL6HW/Aside-Icon-Kyarot.png", 
        totalName: { zh: "小太陽", ja: "おひさま", en: "Sunny" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/Xrb9qmj0/Aside-Skill-Kyarot-1.png", 
                name: { zh: "快快長大吧!", ja: "すくすく育って！", en: "Grow Stronger!" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/LJpj5w9p/Aside-Skill-Kyarot-2.png", 
                name: { zh: "讓胡蘿蔔保持新鮮", ja: "ニンジンの鮮度維持", en: "Fresh Carrot Saved" }, 
                desc: { zh: "強化攻擊追加護盾。護盾被破壞時,額外恢復SP。", ja: "強化攻撃にシールドが追加される。シールドが破壊されると、追加でSPを回復する。", en: "Adds a Shield to Enhanced Attack. If the Shield is destroyed, recovers additional SP." }, 
                effects: { zh: ["護盾:最大HP的30%", "護盾持續時間:5秒", "SP恢復量:45"], ja: ["シールド: 最大HPの30%", "シールドの持続時間: 5秒", "SP回復量: 45"], en: ["Shield: 30% of Max HP", "Shield Duration: 5s", "SP Recovery: 45"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/nXJqrgFx/Aside-Skill-Kyarot-3.png", 
                name: { zh: "冰凍胡蘿蔔", ja: "アイスニンジン", en: "Icy Carrot-Carrot" }, 
                desc: { zh: "增加後排友軍對敵人造成的傷害量。", ja: "後列の味方が敵に与えるダメージ量を増加させる。", en: "Increases Outgoing DMG to enemies for Back Row allies." }, 
                effects: { zh: ["造成的傷害量增加:19.5%"], ja: ["ダメージ量増加: 19.5%"], en: ["DMG Increase: 19.5%"] }, 
                globalEffects: { zh: ["全體爆擊傷害 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体会心ダメージ 3%", "全体会心ダメージ抵抗 3%"], en: ["All CRIT DMG 3%", "All CRIT DMG RES 3%"] } 
            }
        }
    },
    "Momo": { 
        asideIcon: "https://i.postimg.cc/TpBh3463/Aside-Icon-Momo.png", 
        totalName: { zh: "傳說中的手裡劍", ja: "伝説の手裏剣", en: "Legendary Shuriken" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/PCj1J9XT/Aside-Skill-Momo-1.png", 
                name: { zh: "櫻花手裡劍", ja: "桜花手裏剣", en: "Cherry Blossom Shuriken" }, 
                desc: { zh: "穿戴者的最大HP、魔法攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、魔法攻撃力、会心、会心ダメージが増加する。", en: "Increases bearer's Max HP, Magical ATK, CRIT, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "魔法攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "魔法攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Magical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/xX3Mz5Ch/Aside-Skill-Momo-2.png", 
                name: { zh: "開眼的忍者", ja: "目覚めたニンジャ", en: "Awakened Ninja" }, 
                desc: { zh: "召喚獸自爆傷害增加。召喚獸被破壞時,恢復自身SP。使用高級技能時,在一段時間內,減少桃桃受到的傷害量。", ja: "召喚獣の自爆ダメージが増加する。召喚獣が破壊されると、自身のSPを回復する。高学年スキル使用時、一定時間、モモの被ダメージ量が減少する。", en: "Increases Minion Self-Destruct Damage. When a Minion is destroyed, recovers her SP. When Senior Skill is used, reduces Incoming Damage to Momo for a set period of time." }, 
                effects: { zh: ["召喚獸自爆傷害增加:200%", "SP恢復量:10", "受到的傷害量減少:50%", "受到的傷害量減少持續時間:3秒"], ja: ["召喚獣の自爆ダメージ増加: 200%", "SP回復量: 10", "被ダメージ量減少: 50%", "被ダメージ量減少の持続時間: 3秒"], en: ["Minion Self-Destruct DMG Increase: 200%", "SP Recovery: 10", "Incoming DMG Reduction: 50%", "Incoming DMG Reduction Duration: 3s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/yDH0xt17/Aside-Skill-Momo-3.png", 
                name: { zh: "桃桃~喝!", ja: "モモ～ハッ！", en: "Momo, Combine!" }, 
                desc: { zh: "所有友軍對敵人造成的傷害量增加。敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵への与ダメージ量が増加し、味方全員の敵からの被ダメージ量が減少する。", en: "Increases Outgoing Damage to enemies for all allies. Reduces Incoming Damage from enemies for all allies." }, 
                effects: { zh: ["傷害量增加:10.5%", "受到的傷害量減少:4.5%"], ja: ["ダメージ量増加: 10.5%", "被ダメージ量減少: 4.5%"], en: ["DMG Increase: 10.5%", "Incoming DMG Reduction: 4.5%"] }, 
                globalEffects: { zh: ["全體魔法攻撃力 3%", "全體爆擊傷害 3%"], ja: ["全体魔法攻撃力 3%", "全体会心ダメージ: 3%"], en: ["All Magical ATK 3%", "All CRIT DMG 3%"] } 
            }
        }
    },
    "Ner": { 
        asideIcon: "https://i.postimg.cc/fJ1kRrNy/Aside-Icon-Ner.png", 
        totalName: { zh: "聖君艾爾芬", ja: "聖君エルフィン", en: "The Sage Ruler, Erpin" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/mPyCHjDK/Aside-Skill-Ner-1.png", 
                name: { zh: "女王特別輔佐官", ja: "女王特別補佐役", en: "Queen's Special Aide" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical Defense, Magical Defense, Critical Hit Resistance, and Critical Damage Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/XrkdCLJT/Aside-Skill-Ner-2.png", 
                name: { zh: "祭司長無敵權", ja: "司祭長の無敵権", en: "Head Priestess' Unconditional Invincibility" }, 
                desc: { zh: "基本攻撃命中時,自身受到的傷害量減少,並恢復HP與SP。使用高級技能時,給予自身與前排使者無敵效果。", ja: "基本攻撃が命中すると、自身の被ダメージ量が減少し、HPとSPを回復する。高学年スキル使用時、自身と前衛使徒に無敵を付与する。", en: "When Basic Attack hits, reduces Incoming Damage and recovers HP and SP. When Senior Skill is used, applies Invincible to self and Front Row Apostles." }, 
                effects: { zh: ["無敵:對所有傷害及減益效果免疫。", "受到的傷害量減少:15%", "受到的傷害量減少持續時間:3秒", "HP恢復:最大HP的3%", "SP恢復量:30", "無敵持續時間:5秒"], ja: ["無敵: 全てのダメージおよび状態異常に対して免疫を持つ。", "被ダメージ量減少: 15%", "被ダメージ量減少の持続時間: 3秒", "HP回復: 最大HPの3%", "SP回復量: 30", "無敵の持続時間: 5秒"], en: ["Invincible: Immune to all damage and debuffs.", "Incoming DMG Reduction: 15%", "Incoming DMG Reduction Duration: 3s", "HP Recovery: 3% of Max HP", "SP Recovery: 30", "Invincible Duration: 5s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/MnmVQ5TC/Aside-Skill-Ner-3.png", 
                name: { zh: "以世界樹之名!", ja: "世界樹の名前で！", en: "In the Name of Yggdrasil!" }, 
                desc: { zh: "所有友軍對敵人造成的傷害量增加,敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵への与ダメージ量が増加し、味方全員の敵からの被ダメージ量が減少する。", en: "Increases Outgoing Damage and reduces Incoming Damage for all allies." }, 
                effects: { zh: ["傷害量增加:10.5%", "受到的傷害量減少:4.5%"], ja: ["ダメージ量増加: 10.5%", "被ダメージ量減少: 4.5%"], en: ["DMG Increase: 10.5%", "Incoming DMG Reduction: 4.5%"] }, 
                globalEffects: { zh: ["全體魔法攻撃力 3%", "全體爆擊抵抗 3%"], ja: ["全体魔法攻撃力 3%", "全体会心抵抗 3%"], en: ["All Magical ATK 3%", "All CRIT Resistance 3%"] } 
            }
        }
    },
    "Picola": { 
        asideIcon: "https://i.postimg.cc/0bhryBsK/Aside-Icon-Picora.png", 
        totalName: { zh: "最愛購物", ja: "ショッピングが大好き", en: "I Love to Shop All Day" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/LJ3L1D5d/Aside-Skill-Picora-1.png", 
                name: { zh: "購物王皮可菈", ja: "ショッピング王ピコラ", en: "Shopping Queen Picora" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、 爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/xX3Mz58S/Aside-Skill-Picora-2.png", 
                name: { zh: "皮可菈貼紙是附贈的!", ja: "ピコラのステッカーはオマケ！", en: "Picora Sticker Included!" }, 
                desc: { zh: "最大HP增加。強化攻擊後、一定時間內對剩餘HP比例最低的 2名友軍貼上皮可菈貼紙。皮可菈貼紙會恢復 2次HP,並增加傷害量。減少高級技能冷卻時間。", ja: "最大HPが増加する。強化攻撃後、一定時間、残りHP割合が最も低い味方2名にピコラのステッカーを貼る。ピコラのステッカーはHPを2回回復させ、与ダメージ量を増加させる。高学年スキルのクールタイムが減少する。", en: "Increases Max HP. After an Enhanced Attack, applies Picora Stickers to the 2 allies with the lowest remaining HP Ratio for a set period of time. Picora Stickers recover HP twice and increases DMG. Reduces Senior Skill Cooldown." }, 
                effects: { zh: ["最大HP增加:20%", "皮可菈貼紙持續時間:7秒", "HP恢復:目標最大HP的22%", "傷害量增加:30%", "冷卻時間減少:12秒"], ja: ["最大HP増加: 20%", "ピコラのステッカーの持続時間: 7秒", "HP回復: 対象の最大HPの22%", "与ダメージ量増加: 30%", "クールタイム減少: 12秒"], en: ["Max HP Increase: 20%", "Picora Sticker Duration: 7s", "HP Recovery: 22% of the target's Max HP", "DMG Increase: 30%", "Cooldown Reduction: 12s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/217hZGyD/Aside-Skill-Picora-3.png", 
                name: { zh: "聚集吧時尚達人", ja: "おしゃれピープル、集合！", en: "Fashionistas, Assemble!" }, 
                desc: { zh: "使敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵への被ダメージ量を減少させる。", en: "Reduces the Incoming Damage of all allies." }, 
                effects: { zh: ["受到的傷害量減少:7.5%"], ja: ["被ダメージ量減少: 7.5%"], en: ["Incoming DMG Reduction: 7.5%"] }, 
                globalEffects: { zh: ["全體 HP 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体HP 3%", "全体会心ダメージ抵抗 3%"], en: ["All HP 3%", "All CRIT DMG RES 3%"] } 
            }
        }
    },
    "Posher": { 
        asideIcon: "https://i.postimg.cc/QHvVdy3B/Aside-Icon-Posher.png", 
        totalName: { zh: "大家的藥水", ja: "みんなのポーション", en: "A Potion for All" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/fVfm9Cys/Aside-Skill-Posher-1.png", 
                name: { zh: "藥水達人珀榭", ja: "ポーション職人ポーシャー", en: "Potion Master Posher" }, 
                desc: { zh: "穿戴者的最大HP、魔法攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、魔法攻撃力、会心、会心ダメージが増加する。", en: "Increases bearer's Max HP, Magical ATK, CRIT, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "魔法攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "魔法攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Magical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/k2vKbsGq/Aside-Skill-Posher-2.png", 
                name: { zh: "臨床實驗大成功", ja: "臨床実験大成功", en: "Clinical Trial Great Success" }, 
                desc: { zh: "使用普通技能後,恢復後排友軍的SP。高級技能的變異對象額外增加1名。", ja: "低学年スキルを使用すると、後列の味方のSPを回復する。高学年スキルに変異が1体追加される。", en: "After using Freshman Skill, recovers SP for Back Row allies. Adds 1 more target for her Senior Skill's Mutate." }, 
                effects: { zh: ["SP恢復量:20~50"], ja: ["SP回復量: 20～50"], en: ["SP Recovery: 20-50"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/xX3Mz58f/Aside-Skill-Posher-3.png", 
                name: { zh: "新藥革命", ja: "新薬革命", en: "New Potion Revolution" }, 
                desc: { zh: "增加所有友軍的爆擊抵抗與爆擊傷害抵抗。", ja: "味方全員の会心抵抗と会心ダメージ抵抗を増加させる。", en: "Increases Critical Hit Resistance and Critical Damage Resistance for all allies." }, 
                effects: { zh: ["爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] }, 
                globalEffects: { zh: ["全體爆擊傷害 3%", "全體爆擊抵抗 3%"], ja: ["全体会心ダメージ 3%", "全体会心抵抗 3%"], en: ["All CRIT DMG 3%", "All CRIT Resistance 3%"] } 
            }
        }
    },
    "RenewaAwaken": { 
        asideIcon: "https://i.postimg.cc/3dzWxcTD/Aside-Icon-Renewa-Awaken.png", 
        totalName: { zh: "故障的末日鐘", ja: "壊れたドゥームズデイ・クロック", en: "Broken Doomsday Clock" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/rDNxrjsm/Aside-Skill-Renewa-Awaken-1.png", 
                name: { zh: "停止的時間", ja: "止まった時間", en: "Halted Time" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases the bearer's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/18rwqBXV/Aside-Skill-Renewa-Awaken-2.png", 
                name: { zh: "飛向時空彼端!", ja: "時空の彼方へ！", en: "To Spacetime, and Beyond!" }, 
                desc: { zh: "經過6秒,或使用強化攻擊、普通技能時,對中間的敵人投下飛彈。飛彈會對敵人造成範圍物理傷害,命中時增加高級技能的冷卻時間。飛彈爆炸時,立即減少當前自身的高級技能冷卻時間。", ja: "6秒経過、または強化攻撃、低学年スキル使用時、中央に位置する敵にミサイルを投下する。ミサイルは敵に範囲物理ダメージを与え、命中時に現在高学年スキルのクールタイムを即時増加させる。ミサイルが爆発すると、自身の現在高学年スキルのクールタイムが即時減少する。", en: "After 6 seconds have passed, or when an Enhanced Attack or Freshman Skill is used, launches a missile at the enemy in the center. The missile deals AoE Physical Damage to enemies and increases Senior Skill Cooldown on hit. When the missile explodes, reduces her own Senior Skill Cooldown." }, 
                effects: { zh: ["飛彈物理傷害:200%", "冷卻時間增加:1秒", "冷卻時間立即減少:2秒"], ja: ["ミサイル物理ダメージ: 200%", "クールタイム即時増加: 1秒", "クールタイム即時減少: 2秒"], en: ["Missile Physical DMG: 200%", "Cooldown Increase: 1s", "Instant Cooldown Reduction: 2s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/hX1Tdsvm/Aside-Skill-Renewa-Awaken-3.png", 
                name: { zh: "屬於我們的和平時光", ja: "私たちの平和な時間", en: "Our Peaceful Time" }, 
                desc: { zh: "我方全體對敵人造成的傷害量增加。", ja: "味方全員の敵への与ダメージ量を増加させる。", en: "Increases Outgoing Damage to enemies for all allies." }, 
                effects: { zh: ["造成的傷害量增加:22%"], ja: ["ダメージ量増加: 22%"], en: ["DMG Increase: 22%"] }, 
                globalEffects: { zh: ["全體物理攻擊力 4%", "全體爆擊 4%"], ja: ["全体物理攻撃力 4%", "全体会心 4%"], en: ["All Physical ATK 4%", "All CRIT Hit 4%"] } 
            }
        }
    },
    "Rim": { 
        asideIcon: "https://i.postimg.cc/xcXcYSBw/Aside-Icon-Rim.png", 
        totalName: { zh: "派對主人琳", ja: "パーティの主宰リム", en: "Party Host, Rim" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/5H9vqzQ0/Aside-Skill-Rim-1.png", 
                name: { zh: "愛神派對", ja: "アモール・パーティー", en: "Amor Party" }, 
                desc: { zh: "穿戴使者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases bearing Apostle's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/VSsMBt0d/Aside-Skill-Rim-2.png", 
                name: { zh: "恢復原樣", ja: "リカバリム", en: "RecoveRim" }, 
                desc: { zh: "對陷入灼痛的敵人造成直接傷害時,物理攻擊力增加。物理攻擊力增加最多可疊加4次。普通、高級技能的傷害增加。普通HP恢復數值變為2倍。", ja: "苦痛を付与された敵に直接ダメージを与えると物理攻撃力が増加する。物理攻撃力増加は、最大4回スタックする。低学年、高学年スキルのダメージが増加する。低学年のHP回復値が2倍になる。", en: "Dealing Direct Damage to an enemy afflicted with Stinging increases Physical Attack. Physical Attack Increase stacks up to 4 times. Freshman and Senior Skill Damage are increased. Freshman HP Recovery amount is doubled." }, 
                effects: { zh: ["灼痛:每秒造成傷害,並使恢復量減少。", "直接傷害:指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "物理攻擊力增加:15%", "物理攻擊力增加持續時間:4秒", "普通技能傷害增加:50%", "高級技能傷害增加:50%"], ja: ["苦痛: 1秒ごとにダメージを受け、回復量が減少する。", "直接ダメージ: 直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "物理攻撃力増加: 15%", "物理攻撃力増加の持続時間: 4秒", "低学年スキルダメージ増加: 50％", "高学年スキルダメージ増加: 50％"], en: ["Stinging: Reduces Recovery and applies Damage every second.", "Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "Physical ATK Increase: 15%", "Physical ATK Increase Duration: 4s", "Freshman Skill DMG Increase: 50%", "Senior Skill DMG Increase: 50%"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/1gR6cFV8/Aside-Skill-Rim-3.png", 
                name: { zh: "敬你們的眼珠!", ja: "君たちの瞳に乾杯！", en: "Here's looking at you, kid!" }, 
                desc: { zh: "敵人對所有友軍造成的物理傷害量減少。", ja: "味方全員の敵からの物理被ダメージ量が減少する。", en: "Reduces Incoming Physical Damage for all allies." }, 
                effects: { zh: ["受到的物理傷害量減少:10.5%"], ja: ["物理被ダメージ量減少: 10.5%"], en: ["Incoming Physical DMG Reduction: 10.5%"] }, 
                globalEffects: { zh: ["全體HP 3%", "全體爆擊 3%"], ja: ["全体HP 3%", "全体会心 3%"], en: ["All HP 3%", "All CRIT Hit 3%"] } 
            }
        }
    },
    "Risty": { 
        asideIcon: "https://i.postimg.cc/1f8fPZLh/Aside-Icon-Risty.png", 
        totalName: { zh: "今日的POTG", ja: "本日のPOTG", en: "POTG of the day" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/qtBnXK6h/Aside-Skill-Risty-1.png", 
                name: { zh: "精靈聯盟最強者", ja: "リーグ・オブ・エルフ最強者", en: "League of Elves Champion" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases the bearer's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心增加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/GB3YJDTs/Aside-Skill-Risty-2.png", 
                name: { zh: "天才駭客登場", ja: "天才ハッカーの登場", en: "The Genius Hacker Appears" }, 
                desc: { zh: "以普通技能擊殺敵人時恢復SP。使用高級技能後,對剩餘HP比例最低的3名敵人額外造成3次物理傷害。", ja: "低学年スキルで敵を退治すると、SPを回復する。高学年スキル使用後、残りHP割合が最も低い敵3体に追加で3回物理ダメージを与える", en: "Recovers SP when defeating an enemy with her Freshman Skill. After using her Senior Skill, deals Physical Damage 3 additional times to the 3 enemies with the lowest remaining HP Ratio." }, 
                effects: { zh: ["SP恢復:75%", "SP恢復冷卻時間:10秒", "每個方塊物理傷害:160%"], ja: ["SP回復: 75%", "SP回復クールタイム: 10秒", "ブロックにつき物理ダメージ: 160%"], en: ["SP Recovery: 75%", "SP Recovery Cooldown: 10s", "Physical DMG per Block: 160%"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/2qjvFWLn/Aside-Skill-Risty-3.png", 
                name: { zh: "莉絲蒂的超級救援", ja: "リスティのスーパーセーブ", en: "Risty's Super Save" }, 
                desc: { zh: "增加後排友軍的每秒SP恢復量。", ja: "後列の味方の1秒ごとのSP回復量を増加させる。", en: "Increases SP Recovery per second for Back Row allies." }, 
                effects: { zh: ["每秒SP恢復量:4"], ja: ["1秒ごとのSP回復量: 4"], en: ["SP Recovery per second: 4"] }, 
                globalEffects: { zh: ["全體爆擊傷害 3%", "全體物理防禦力 3%"], ja: ["全体 会心ダメージ 3%", "全体 物理防御力 3%"], en: ["All CRIT DMG 3%", "All Physical DEF 3%"] } 
            }
        }
    },
    "Rufo": { 
        asideIcon: "https://i.postimg.cc/8j7jDVq8/Aside-Icon-Rufo.png", 
        totalName: { zh: "智囊盧波", ja: "ブレーンルポ", en: "Rufo the Brain" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/t1RPt6n5/Aside-Skill-Rufo-1.png", 
                name: { zh: "反對獸糧黨知識王", ja: "反アニマル缶戦線の知識王", en: "Chow Rebels Knowledge Queen" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases the bearer's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/mcZMN91S/Aside-Skill-Rufo-2.png", 
                name: { zh: "三劍客的大冒險", ja: "三銃士の大冒険", en: "The Three Musketeers' Great Adventure" }, 
                desc: { zh: "普通攻擊傷害量增加。當自身處於障眼法狀態時,攻擊速度提升,且立即減少目前高級技能冷卻時間。回合開始時,自身的第一下普通攻擊將以強化攻擊施放。", ja: "普通攻撃の与ダメージが増加する。自身に目くらましが付与されると攻撃速度が増加し、高学年スキルのクールタイムが減少する。ウェーブ開始時、自身の最初の普通攻撃は強化攻撃で発動する。", en: "Increases Normal Attack Damage. When Trickery is applied to self, increases Attack Speed and instantly reduces current Senior Skill Cooldown. At the start of a wave, her first Normal Attack is cast as an Enhanced Attack." }, 
                effects: { zh: ["障眼法:不會成為敵人的攻擊目標。沒有友軍時不會觸發。", "普通攻擊傷害量增加:200%", "攻擊速度提升:75%", "攻擊速度提升持續時間:6秒", "冷卻時間立即減少:4秒"], ja: ["目くらまし: 敵の目標にならない。他の味方がいない時は発動しない。", "普通攻撃のダメージ量増加: 200%", "攻撃速度増加: 75%", "攻撃速度増加の持続時間: 6秒", "クールタイム減少: 4秒"], en: ["Trickery: Cannot be targeted by enemies. Does not trigger when no allies are present.", "Normal ATK DMG Increase: 200%", "ATK SPD Increase: 75%", "ATK SPD Increase Duration: 6s", "Instant Cooldown Reduction: 4s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/676RLZ4Y/Aside-Skill-Rufo-3.png", 
                name: { zh: "我就是最棒的戰略家!", ja: "最高の戦友なのだ！", en: "The Greatest Strategist!" }, 
                desc: { zh: "提升所有友軍的攻擊速度。", ja: "味方全員の攻撃速度を増加させる。", en: "Increases the Attack Speed of all allies." }, 
                effects: { zh: ["攻擊速度增加:7%"], ja: ["攻撃速度増加: 7%"], en: ["ATK SPD Increase: 7%"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體爆擊傷害抵抗 3%"], ja: ["全体物理攻撃力 3%", "全体会心ダメージ抵抗 3%"], en: ["All Physical ATK 3%", "All CRIT DMG RES 3%"] } 
            }
        }
    },
    "Selline": { 
        asideIcon: "https://i.postimg.cc/Mvnvx8gg/Aside-Icon-Selline.png", 
        totalName: { zh: "網紅的瑟琳娜", ja: "セレブ・セリーネ", en: "Selene the Celeb" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/hJ4xbmQw/Aside-Skill-Selline-1.png", 
                name: { zh: "惡作劇的瑟琳娜", ja: "悪戯好きなセリーネ", en: "Playful Selene" }, 
                desc: { zh: "穿戴者的最大HP增加。", ja: "着用者の最大HPが増加する。", en: "Increases the bearer's Max HP." }, 
                effects: { zh: ["最大HP增加:22.5%"], ja: ["最大HP増加: 22.5%"], en: ["Max HP Increase: 22.5%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/94x9xfyx/Aside-Skill-Selline-2.png", 
                name: { zh: "挑釁專家ElfTuber", ja: "煽り専門ElTuber", en: "Bait-Specialist ElfTuber" }, 
                desc: { zh: "受到直接傷害時恢復SP。降低因強化攻擊受到挑釁的敵人的攻擊速度。強化攻擊的HP恢復比例變為2倍", ja: "直接ダメージを受けるとSPが回復する。強化攻撃で挑発した敵の攻撃速度を減少させる。強化攻撃のHP回復割合が2倍になる。", en: "When taking Direct Damage, recovers SP. Reduces the Attack Speed of the enemy taunted by the Enhanced Attack. Enhanced Attack's HP Recovery Ratio is doubled." }, 
                effects: { zh: ["直接傷害:指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "SP恢復量:6", "攻擊速度降低:33%", "攻擊速度降低持續時間:4秒"], ja: ["直接ダメージ: 直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "SP回復量: 6", "攻擊速度減少: 33%", "攻撃速度減少の持続時間: 4秒"], en: ["Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "SP Recovery: 6", "ATK SPD Reduction: 33%", "ATK SPD Reduction Duration: 4s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/1gWFWzDB/Aside-Skill-Selline-3.png", 
                name: { zh: "捐款挑戰", ja: "寄付チャレンジ", en: "Donation Campaign" }, 
                desc: { zh: "敵人對前排友軍造成傷害量減少。", ja: "前列の味方の敵への被ダメージ量を減少させる。", en: "Reduces Incoming Damage of Front Row allies." }, 
                effects: { zh: ["受到的傷害量減少:9.7%"], ja: ["被ダメージ量減少: 9.7%"], en: ["Incoming DMG Reduction: 9.7%"] }, 
                globalEffects: { zh: ["全體魔法防禦力 3%", "全體爆擊抵抗 3%"], ja: ["全体魔法防御力 3%", "全体会心抵抗 3%"], en: ["All Magical DEF 3%", "All CRIT Resistance 3%"] } 
            }
        }
    },
    "Sist": { 
        asideIcon: "https://i.postimg.cc/9rDrVjvj/Aside-Icon-Sist.png", 
        totalName: { zh: "名牌包", ja: "ブランドバック", en: "Luxury Bag" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/kVjSj5Ww/Aside-Skill-Sist-1.png", 
                name: { zh: "商業天才希絲特", ja: "商売の天才シスト", en: "Business Genius Sist" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases the bearer's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/3yLGLw2b/Aside-Skill-Sist-2.png", 
                name: { zh: "賭上友誼的勝負", ja: "友情をかけた勝負", en: "Friendship Duel" }, 
                desc: { zh: "獲得普通技能增益效果時,增加隨機友軍攻擊型使者的攻擊力與攻擊速度。若無攻擊型使者,則隨機套用於友軍隊友。高級技能固定造成最大物理傷害。", ja: "低学年スキルのバフを獲得時、ランダムな味方アタッカー使徒の攻撃力と攻撃速度を増加させる。アタッカー使徒がいない場合は、ランダムな味方に適用される。高学年スキルは、常に最大物理ダメージ量を与える。", en: "Upon receiving her Freshman Skill Buff, increases the Attack and Attack Speed of a random allied DPS Apostle. If there are no DPS Apostles, this applies to a random ally instead. Senior Skill always deals Max Physical Damage." }, 
                effects: { zh: ["隨機友軍使者:2名", "攻擊力增加:41%", "攻擊力增加持續時間:10秒", "攻擊速度提升:41%", "攻擊速度提升持續時間:10秒"], ja: ["ランダムな味方の使徒: 2体", "攻撃力増加: 41%", "攻撃力増加の持続時間: 10秒", "攻撃速度増加: 41%"], en: ["Random Allied Apostles: 2", "ATK Increase: 41%", "ATK Increase Duration: 10s", "ATK SPD Increase: 41%", "ATK SPD Increase Duration: 10s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/LhGtKhGg/Aside-Skill-Sist-3.png", 
                name: { zh: "天真目標商品", ja: "味方ターゲット商品", en: "Innocent Target Product" }, 
                desc: { zh: "使所有友軍爆擊及爆擊傷害增加。", ja: "味方全員の会心と会心ダメージを増加させる。", en: "Increase CRIT Hit and CRIT DMG of all allies." }, 
                effects: { zh: ["爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["会心増加: 6%", "会心ダメージ増加: 6%"], en: ["CRIT Increase: 6%", "CRIT DMG Increase: 6%"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體爆擊 3%"], ja: ["全体物理攻撃力 3%", "全体会心 3%"], en: ["All Physical ATK 3%", "All CRIT Hit 3%"] } 
            }
        }
    },
    "Snorky": { 
        asideIcon: "https://i.postimg.cc/nsB3PgH9/Aside-Icon-Snorky.png", 
        totalName: { zh: "大BOSS斯諾奇", ja: "ビッグボススノキー", en: "Big Boss Snorky" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/bsbQzpjz/Aside-Skill-Snorky-1.png", 
                name: { zh: "我的夢想是大Boss!", ja: "夢はビッグボス", en: "Being the Big Boss Is My Dream" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/c6PRy6Pg/Aside-Skill-Snorky-2.png", 
                name: { zh: "義氣的代名詞", ja: "義理の代名詞", en: "Epitome of Loyalty" }, 
                desc: { zh: "回合開始時,賦予前排友軍護盾並增加造成的傷害量。強化攻擊時,減少周圍友軍受到的傷害量。", ja: "ウェーブ開始時に前列の味方にシールドを付与し、与えるダメージ量を増加させる。強化攻撃時、周囲の味方の被ダメージ量を減少させる。", en: "At the start of a wave, grants a Shield to Front Row allies and increases their Outgoing Damage. When using an Enhanced Attack, reduces Incoming Damage for nearby allies." }, 
                effects: { zh: ["護盾:最大HP的24%", "護盾持續時間:12秒", "傷害量增加:32%", "傷害量增加持續時間:12秒", "受到的傷害量減少:46%", "受到的傷害量減少持續時間:3秒"], ja: ["シールド: 最大HPの24%", "シールドの持続時間: 12秒", "ダメージ量増加: 32%", "ダメージ量増加の持続時間: 12秒", "被ダメージ量減少: 24%", "被ダメージ量減少の持続時間: 3秒"], en: ["Shield: 24% of Max HP", "Shield Duration: 12s", "DMG Increase: 32%", "DMG Increase Duration: 12s", "Incoming DMG Reduction: 46%", "Incoming DMG Reduction Duration: 3s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/nC7vHptc/Aside-Skill-Snorky-3.png", 
                name: { zh: "吃我一拳", ja: "拳の味を見せてやる", en: "Here's a Taste of My Fists!" }, 
                desc: { zh: "使敵人對所有友軍造成的傷害量減少。", ja: "味方全員の敵からの被ダメージ量を減少させる。", en: "Reduces the Incoming Damage of all allies." }, 
                effects: { zh: ["受到的傷害量減少:7.5%"], ja: ["被ダメージ量減少: 7.5%"], en: ["Incoming DMG Reduction: 7.5%"] }, 
                globalEffects: { zh: ["全體物理攻擊力 3%", "全體物理防禦力 3%"], ja: ["全体物理攻撃力 3%", "全体物理防御力 3%"], en: ["All Physical ATK 3%", "All Physical DEF 3%"] } 
            }
        }
    },
    "Ui": { 
        asideIcon: "https://i.postimg.cc/qzNz0d9T/Aside-Icon-Ui.png", 
        totalName: { zh: "不快樂的羽伊", ja: "アンハッピーウイ", en: "Unhappy Ui" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/tYPhXpHY/Aside-Skill-Ui-1.png", 
                name: { zh: "耶魯呱呱叫", ja: "エルはケロケロ", en: "Croak-Croak Croakie" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical Defense, Magical Defense, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/WhrM2TP3/Aside-Skill-Ui-2.png", 
                name: { zh: "正向王羽伊", ja: "ポジティブの王ウイ", en: "Ui, Queen of Positivity" }, 
                desc: { zh: "額外追加1個活潑性格。使用普通技能時,增加中排友軍的傷害量。", ja: "活発を1個追加する。低学年スキル使用時、中列の味方のダメージ量を増加させる。", en: "Adds 1 additional Vivacious Personality. When Freshman Skill is used, increases the Damage for Middle Row allies." }, 
                effects: { zh: ["傷害量增加:16%", "傷害量增加持續時間:7秒"], ja: ["ダメージ量増加: 16%", "ダメージ量増加の持続時間: 7秒"], en: ["DMG Increase: 16%", "DMG Increase Duration: 7s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/rKWS8MLs/Aside-Skill-Ui-3.png", 
                name: { zh: "穿雨靴的羽伊", ja: "長ぐつをはいたウイ", en: "Ui in Boots" }, 
                desc: { zh: "敵人對中排友軍造成的傷害量減少。", ja: "中列の味方の敵からの被ダメージ量が減少する。", en: "Reduces Incoming Damage for Middle Row allies." }, 
                effects: { zh: ["受到的傷害量減少:14%"], ja: ["被ダメージ量減少: 14%"], en: ["Incoming DMG Reduction: 14%"] }, 
                globalEffects: { zh: ["全體 HP 4%", "全體魔法攻撃力 4%"], ja: ["全体HP 4%", "全体魔法攻撃力 4%"], en: ["All HP 4%", "All Magical ATK 4%"] } 
            }
        }
    },
    "Vivi": { 
        asideIcon: "https://i.postimg.cc/mtPtRG0b/Aside-Icon-Vivi.png", 
        totalName: { zh: "被鎖鏈鎖上的箱子", ja: "鎖で閉ざされた箱", en: "Chest Bound in Chains" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/MvRyWq8M/Aside-Skill-Vivi-1.png", 
                name: { zh: "上鎖的回憶箱", ja: "閉ざされた記憶の箱", en: "Chest of Locked Memories" }, 
                desc: { zh: "穿戴者的最大HP、物理防禦力、魔法防禦力、爆擊抵抗、爆擊傷害抵抗增加。", ja: "着用者の最大HP、物理防御力、魔法防御力、会心抵抗、会心ダメージ抵抗が増加する。", en: "Increases the bearer's Max HP, Physical DEF, Magical DEF, CRIT Resistance, and CRIT DMG Resistance." }, 
                effects: { zh: ["最大HP增加:6%", "物理防禦力增加:6%", "魔法防禦力增加:6%", "爆擊抵抗增加:6%", "爆擊傷害抵抗增加:6%"], ja: ["最大HP増加: 6%", "物理防御力増加: 6%", "魔法防御力増加: 6%", "会心抵抗増加: 6%", "会心ダメージ抵抗増加: 6%"], en: ["Max HP Increase: 6%", "Physical DEF Increase: 6%", "Magical DEF Increase: 6%", "CRIT Resistance Increase: 6%", "CRIT DMG Resistance Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/9rTGWCjq/Aside-skill-vivi-2.png", 
                name: { zh: "本少女會保護你的", ja: "わたくしがお守りいたしますわ", en: "I Shall Keep Thee Safe" }, 
                desc: { zh: "減少受到的技能傷害量。基本攻撃命中時,所攻擊敵人SP減少。(世界首領的SP減少值會降低。) 使用普通技能後,賦予除自身以外剩下HP比例最低的友軍水銀護盾。高級技能的水銀槍將額外飛向隨機2名敵人。", ja: "敵からの被スキルダメージ量が減少する。基本攻撃が命中時、攻撃した敵のSPを減少させる。(ワールドボスはSP減少量が低下する。)低学年スキル使用後、自身を除き、残りHP割合が最も低い味方に水銀シールドを付与する。高学年スキルの水銀の槍が、ランダムな2体に追加で発射される。", en: "Reduces Incoming Skill Damage from enemies. When Basic Attack hits, reduces the targeted enemy's SP. (SP Reduction is lower against World Bosses.) After using Freshman Skill, grants a Mercury Shield to the ally with the lowest remaining HP Ratio, other than herself. The Senior Skill's Mercury Spear gets launched at 2 additional random targets." }, 
                effects: { zh: ["受到的技能傷害量減少:33%", "SP減少量:45", "世界首領SP減少量:15", "護盾:最大HP的64%", "護盾持續時間:6秒"], ja: ["被スキルダメージ量減少: 33%", "SP減少量: 45", "ワールドボスSP減少量: 15", "シールド: 最大HPの64%", "シールドの持続時間: 6秒"], en: ["Incoming Skill DMG Reduction: 33%", "SP Reduction: 45", "World Boss SP Reduction: 15", "Shield: 64% of Max HP", "Shield Duration: 6s"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/F7cj9NQk/Aside-skill-vivi-3.png", 
                name: { zh: "榮耀的薇薇", ja: "名誉あるヴィヴィ", en: "Honorable Vivi" }, 
                desc: { zh: "所有友軍受到敵人的傷害量減少。所有友軍的攻擊速度提升。", ja: "味方全員の敵からの被ダメージ量を減少させる。味方全員の攻撃速度を増加させる。", en: "Reduces Incoming Damage from enemies for all allies. Increases Attack Speed for all allies." }, 
                effects: { zh: ["受到的傷害量減少:6%", "攻擊速度提升:5.25%"], ja: ["被ダメージ量減少: 6%", "攻撃速度増加: 5.25%"], en: ["Incoming DMG Reduction: 6%", "ATK SPD Increase: 5.25%"] }, 
                globalEffects: { zh: ["全體 HP 4%", "全體魔法防禦力 4%"], ja: ["全体HP 4%", "全体魔法防御力 4%"], en: ["All HP 4%", "All Magical DEF 4%"] } 
            }
        }
    },
    "xXionx": { 
        asideIcon: "https://i.postimg.cc/vc4cMdpY/Aside-Icon-x-Xionx.png", 
        totalName: { zh: "喋喋不休的伊德", ja: "おしゃべりイード", en: "Chattering ED" }, 
        stars: {
            1: { 
                icon: "https://i.postimg.cc/1f6p9sZq/Aside-Skill-x-Xionx-1.png", 
                name: { zh: "本大人、登場★", ja: "我、参上★", en: "I Have Arrived ★" }, 
                desc: { zh: "穿戴者的最大HP、物理攻擊力、爆擊、爆擊傷害增加。", ja: "着用者の最大HP、物理攻撃力、会心、会心ダメージが増加する。", en: "Increases the bearer's Max HP, Physical ATK, CRIT Hit, and CRIT DMG." }, 
                effects: { zh: ["最大HP增加:6%", "物理攻擊力增加:6%", "爆擊增加:6%", "爆擊傷害增加:6%"], ja: ["最大HP増加: 6%", "物理攻撃力増加: 6%", "会心増加: 6%", "会心ダメージ増加: 6%"], en: ["Max HP Increase: 6%", "Physical ATK Increase: 6%", "CRIT Increase: 6%", "CRIT DMG Increase: 6%"] } 
            },
            2: { 
                icon: "https://i.postimg.cc/qzn8k4dK/Aside-Skill-x-Xionx-2.png", 
                name: { zh: "這就是魔彈的絕對威力?", ja: "絶対なる魔弾の力と言うべきだろうか？", en: "Absolute Power of Magic Bullets" }, 
                desc: { zh: "最大HP增加,且基本攻撃命中時恢復HP。使用普通技能、高級技能後,攻擊速度增加。使用普通技能時,如果敵人只有1名,則傷害增加。", ja: "最大HPが増加し、基本攻撃命中時、HPを回復する。低学年スキル、高学年スキル使用後、攻撃速度が増加する。低学年スキル使用中、敵が一体しかいない場合、ダメージが増加する。", en: "Increases Max HP. When Basic Attack hits, recovers HP. Using a Freshman or Senior Skill increases Attack Speed, Increases Damage if there is only one enemy while using Freshman Skill." }, 
                effects: { zh: ["最大HP增加:30%", "HP恢復:最大HP的3%", "攻擊速度提升:100%", "攻擊速度提升持續時間:6秒", "普通技能傷害增加:100%"], ja: ["最大HP増加: 30%", "HP回復: 最大HPの3%", "攻撃速度増加: 100%", "攻撃速度増加の持続時間: 6秒", "低学年スキルのダメージ増加: 100%"], en: ["Max HP Increase: 30%", "HP Recovery: 3% of Max HP", "ATK SPD Increase: 100%", "ATK SPD Increase Duration: 6s", "Freshman Skill DMG Increase: 100%"] } 
            },
            3: { 
                icon: "https://i.postimg.cc/CzDjFSVC/Aside-Skill-x-Xionx-3.png", 
                name: { zh: "暗·黑·救・援・者★", ja: "闇・の・救・世・主★", en: "Savior of Darkness ★" }, 
                desc: { zh: "使後排友軍對敵人造成的傷害量增加,並使敵人對後排友軍造成的傷害量減少。", ja: "後列の味方の敵への与ダメージ量を増加させ、後列の味方の敵からの被ダメージ量を減少させる。", en: "Increases Outgoing Damage and reduces Incoming Damage of Back Row allies." }, 
                effects: { zh: ["傷害量增加:19.5%", "受到的傷害量減少:8.8%"], ja: ["ダメージ量増加: 19.5%", "被ダメージ量減少: 8.8%"], en: ["DMG Increase: 19.5%", "Incoming DMG Reduction: 8.8%"] }, 
                globalEffects: { zh: ["全體物理攻擊力 4%", "全體爆擊傷害 4%"], ja: ["全体物理攻撃力 4%", "全体会心ダメージ 4%"], en: ["All Physical ATK 4%", "All CRIT DMG 4%"] } 
            }
        }
    }
};
