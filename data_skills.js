// ==========================================
// トリッカル特級クレヨンノート - スキルデータベース (data_skills.js)
// 役割: 使徒の全言語（中・日・英）のスキルデータを一元管理
// ==========================================

const CHAR_BACKGROUNDS = {
    "龍族": "https://i.postimg.cc/SNvZjtmR/Popup-Gacha-Event-Pattern-Tribe-Dragon.png",
    "魔靈": "https://i.postimg.cc/5tMSFhGq/Popup-Gacha-Event-Pattern-Tribe-Elemental.png",
    "精靈": "https://i.postimg.cc/X7z2XDnX/Popup-Gacha-Event-Pattern-Tribe-Elf.png",
    "???": "https://i.postimg.cc/jSfh2x8F/Popup-Gacha-Event-Pattern-Tribe-Mystic.png",
    "幽靈": "https://i.postimg.cc/13FKXmWY/Popup-Gacha-Event-Pattern-Tribe-Phantom.png",
    "妖精": "https://i.postimg.cc/pX60y1Pm/Popup-Gacha-Event-Pattern-Tribe-Sprite.png",
    "獸人": "https://i.postimg.cc/L8PV59yC/Popup-Gacha-Event-Pattern-Tribe-Werebeast.png",
    "魔女": "https://i.postimg.cc/C1r8JXPw/Popup-Gacha-Event-Pattern-Tribe-Witch.png"
};

const PERSONALITY_BACKGROUNDS = {
    "冷靜": "https://i.postimg.cc/HkNfDkrZ/Motion-Experience-Pattern-Bg-Composed.png",
    "憂鬱": "https://i.postimg.cc/4x0rkxY2/Motion-Experience-Pattern-Bg-Depressed.png",
    "狂亂": "https://i.postimg.cc/5tFDxWzq/Motion-Experience-Pattern-Bg-Madness.png",
    "活潑": "https://i.postimg.cc/q7CWkHKG/Motion-Experience-Pattern-Bg-Vivacious.png",
    "天真": "https://i.postimg.cc/BQVhtwJ6/Motion-Experience-Pattern-Bg-Innocence.png"
};


const characterSkills = [
    {
    "name": "",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": " []",
          "enhanced": " []"
        },
        "normalSkill": {
          "name": "",
          "desc": "",
          "stats": [""]
        },
        "ultimateSkill": {
          "name": "",
          "desc": "",
          "stats": [""],
          "cooldown": "秒"
        },
        "passiveSkill": {
          "desc": "",
          "stats": ["秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": " []",
          "enhanced": " []"
        },
        "normalSkill": {
          "name": "",
          "desc": "",
          "stats": [""]
        },
        "ultimateSkill": {
          "name": "",
          "desc": "",
          "stats": [""],
          "cooldown": "秒"
        },
        "passiveSkill": {
          "desc": "",
          "stats": [""]
        }
      },
      "en": {
        "normalAttack": {
          "basic": " []",
          "enhanced": " []"
        },
        "normalSkill": {
          "name": "",
          "desc": "",
          "stats": [""]
        },
        "ultimateSkill": {
          "name": "",
          "desc": "",
          "stats": [""],
          "cooldown": "s"
        },
        "passiveSkill": {
          "desc": "",
          "stats": [""]
        }
      },
    }
  },
    {
    "name": "羅蕾特",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對指定範圍內最遠的敵人投擲火球，造成魔法傷害。 [魔法傷害:90%]",
          "enhanced": "以一定機率對指定範圍內最遠的敵人投擲火球，造成範圖魔法傷害，並給予損傷效果。 [燒傷:每秒造成傷害。] [魔法傷害:120%] [燒傷持續時間:4秒]"
        },
        "normalSkill": {
          "name": "獲得掌聲的藝人",
          "desc": "放出鴿子後，展現鴿子復活魔術。鴿子會飛向指定範圍內距離最造的敵人，造成範圍魔法傷害。",
          "stats": ["魔法傷害:525%"]
        },
        "ultimateSkill": {
          "name": "吸引觀眾的戲法師",
          "desc": "取出箱子並將其送往指定範圍內最遠的敵人。箱子經過時對周圍敵人施加好奇，到達目標地點後爆炸，造成範圍魔法傷害，並給予昏迷效果。昏迷及傷害最多影響6人。",
          "stats": ["好奇:向敵人緩慢移動。", "昏迷:無法進行任何行動。", "魔法傷害:723%", "好奇持續時間:4秒", "昏迷持續時間:3秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "使用普通技能展現鸽子復活魔術時，立即減少自身以外隨機1名友軍目前的高級技能冷卻時間。",
          "stats": ["友軍冷卻時間立即減少:7.5秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "指定範囲内で最も遠い敵に火の玉を飛ばして魔法ダメージを与える。 [魔法ダメージ:90%]",
          "enhanced": "一定確率で、指定範囲内で最も遠い敵に火の玉を飛ばして範囲魔法ダメージを与え、火傷を付与する。 [火傷:1部ごとにダメージを受ける。] [魔法ダメージ:120%] [火傷の持続時間:4秒]"
        },
        "normalSkill": {
          "name": "喝采を浴びるエンターテイナー",
          "desc": "黒を飛ばした後、鳩の復活マシックを披露する。鶏は指定範囲内で最も遠い敵に飛んでいき、範囲魔法ダメージを与える。",
          "stats": ["魔法ダメージ:525%"]
        },
        "ultimateSkill": {
          "name": "観客を魅了するトリックスター",
          "desc": "箱を取り出して指定範囲内で最も遠い敵に届ける。箱は通り過ぎながら周囲の敵に好奇心を付与する。箱が目標地点に到着すると、爆発し、範囲魔法ダメージを与え、気絶を付与する。気絶とダメージは最大6名に適用される。",
          "stats": ["好奇心: 敵にゆっくり移動する。", "気絶: 行動不能になる。", "魔法ダメージ:723%", "好奇心の持続時間:4秒", "気絶の持続時間:3秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "低学年スキルを使用して鳴の復活マジックを披露すると、自身を除くランダムな味方1名の現在の高学年スキルのクールタイムを即時減少させる。",
          "stats": ["味方のクールタイム即時減少:7.5秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a fireball and deals Magical Damage to the furthest enemy within the designated range. [Magical DMG: 90%]",
          "enhanced": "At a set chance, throws a fireball at the furthest target within the designated range, dealing AoE Magical Damage, and applies the Scorchon them. Scorch: Applies damage every second. [Magical DMG: 120%] [Scorch Duration: 4s]"
        },
        "normalSkill": {
          "name": "Applause Loving Entertainer",
          "desc": "Releases a Dove, then performs the Dove Magic Trick. The Dove flies to the farthest enemy within the designated range, dealing AoE Magical Damage. Dove Magic enemy AoE",
          "stats": ["Magical DMG: 525%"]
        },
        "ultimateSkill": {
          "name": "Audience-Captivating Trickster",
          "desc": "Pulls out a chest which runs towards the furthest target within the designated range. The chest periodically applies Curiosity to surrounding targets. The chest explodes when it reaches the target, dealing AoE Magical Damage and applies Stun. Stun and damage are applied to a maximum of 6.",
          "stats": ["Curiosity: Moves slowly towards the target's location.", "Stun: Becomes unable to act.", "Magical Damage: 723%", "Curiosity Duration: 4s", "Stun Duration: 3s"],
          "cooldown": "32s"
        },
        "passiveSkill": {
          "desc": "After using her Freshman Skill to perform a Dove Magic Trick, immediately reducing the current Senior Skill Cooldown of 1 random ally other than herself.",
          "stats": ["Ally Cooldown Instant Reduction: 7.5s"]
        }
      },
    }
  },
    {
    "name": "琵拉",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": " []",
          "enhanced": " []"
        },
        "normalSkill": {
          "name": "",
          "desc": "",
          "stats": [""]
        },
        "ultimateSkill": {
          "name": "",
          "desc": "",
          "stats": [""],
          "cooldown": "秒"
        },
        "passiveSkill": {
          "desc": "",
          "stats": [""]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "[]",
          "enhanced": "[]"
        },
        "normalSkill": {
          "name": "",
          "desc": "",
          "stats": [""]
        },
        "ultimateSkill": {
          "name": "",
          "desc": "",
          "stats": [""],
          "cooldown": "秒"
        },
        "passiveSkill": {
          "desc": "",
          "stats": [""]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "[]",
          "enhanced": "[]"
        },
        "normalSkill": {
          "name": "",
          "desc": "",
          "stats": [""]
        },
        "ultimateSkill": {
          "name": "",
          "desc": "",
          "stats": [""],
          "cooldown": "s"
        },
        "passiveSkill": {
          "desc": "",
          "stats": ["%"]
        }
      },
    }
  },
    {
    "name": "提格",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對目標快速揮動雙劍、造成2次物理傷害，第二次攻擊造成更高額的傷害。 [物理傷害:40%] [第2擊物理傷害:60%]",
          "enhanced": "每三次攻擊後，對目標擊敲雙劍向周圍揮舞，造成範圍物理傷害並恢復SP，最後一次攻擊造成更高額的傷害。 [物理傷害:60%] [第2次物理傷害:90%] [每命中1名敵人的SP恢復量:120]"
        },
        "normalSkill": {
          "name": "音速斬擊",
          "desc": "瞬間向前突進並造成範圍物理傷害後，回到原位。若目標為使者，則追加依最大HP比例計算的額外傷害。",
          "stats": ["物理傷害:672%", "使者最大HP比例傷害:最大HP的20%"]
        },
        "ultimateSkill": {
          "name": "超載",
          "desc": "對敵人揮出劍氣,造成範圍物理傷害。在一定時間內，攻擊速度與普通攻擊的傷害增加。此效果無法解除。",
          "stats": ["物理傷害:1260%", "攻擊速度提升:150%", "普通攻擊傷害增加:100%", "攻擊速度提升持續時間:10秒"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "提升攻擊速度。",
          "stats": ["攻擊速度提升:42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "双剣で敵を素早く薙ぎ払い、物理ダメージを2回与える。2回目の攻撃はより高いダメージを与える。 [物理ダメージ: 40%] [2回目の物理ダメージ: 60%]",
          "enhanced": "3回攻撃することに、双剣で周囲を薙ぎ払って範囲物理ダメージを与え、SPを回復する。最後の一撃ではより高いダメージを与える。[物理ダメージ:60%] [2回目の物理ダメージ: 90%] [敵1体撃破あたりのSP回復量: 120]"
        },
        "normalSkill": {
          "name": "ソニックフレイド",
          "desc": "前方へ撥時に移動しながら囲物理ダメージを与えた後、元の位置に戻る。",
          "stats": ["物理ダメージ:672%"]
        },
        "ultimateSkill": {
          "name": "オーバードライブ",
          "desc": "剣の気を放って固囲に範囲物理ダメージを与え、一定時間、攻撃速度と基本攻撃の与ダメージを増加させる。この効果は解除できない。",
          "stats": ["物理ダメージ: 1260%", "攻擊速度增加:150%", "普通攻撃ダメージ增加: 100%", "攻撃速度増加の持続時間: 10秒"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "攻撃速度が増加する。",
          "stats": ["攻撃速度増加:42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swiftly swings her dual swords and deals Physical Damage to an enemy. [Physical DMG: 40%] [Two-Hit Physical DMG: 60%]",
          "enhanced": "Strikes down with her dual swords, swings them around her, and deals AoE Physical Damage. Recovers SP proportionally to the number of enemies that have taken damage. [Physical DMG: 60%] [Two-Hit Physical DMG: 90%] [SP Recovery per Enemy: 120]"
        },
        "normalSkill": {
          "name": "Sonic Blade",
          "desc": "Instantly advances forward, deals AoE Physical Damage, then returns to her original position.",
          "stats": ["Physical DMG: 672%"]
        },
        "ultimateSkill": {
          "name": "Overdrive",
          "desc": "Unleashes sword energy to the enemy, deals AoE Physical Damage nearby, and increases Attack Speed, Normal Attack, and Enhanced Attack Damage for a set period of time. This effect cannot be removed.",
          "stats": ["Physical DMG: 1260%", "ATK SPD Increase: 150%", "Normal Attack DMG: 100%", "ATK SPD Increase Duration: 10s"],
          "cooldown": "20s"
        },
        "passiveSkill": {
          "desc": "Increases Attack Speed.",
          "stats": ["ATK SPD Increase: 42%"]
        }
      },
    }
  },
  {
    "name": "達雅",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲3顆鑽石造成魔法傷害，最後一擊將造成更大的傷害。 [魔法傷害:72%] [最後一擊魔法傷害:48%]",
          "enhanced": "以一定機率對敵人投擲巨型鑽石，造成魔法傷害並給予灼痛效果。 [灼痛:每秒受到傷害，並使恢復量減少。] [魔法傷害:240%] [灼痛持續時間:4秒。]"
        },
        "normalSkill": {
          "name": "鑽石穿刺",
          "desc": "對3名敵人突起尖銳的鑽石，造成魔法傷害並給予灼痛效果。",
          "stats": ["灼痛:每秒受到傷害，並使恢復量減少。", "魔法傷害:475%", "灼痛持續時間:8秒。"]
        },
        "ultimateSkill": {
          "name": "達雅哈………哈啾!",
          "desc": "對敵人打噴哩，造成範圍魔法傷害。",
          "stats": ["魔法傷害:1050%。"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "增加友軍後排使者的技能傷害量。 (該效果即使達雅不在場上也會觸發。)",
          "stats": ["技能傷害量增加:34%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "ダイヤを3個飛ばして敵に魔法ダメージを与える。最後の一撃はより高いダメージを与える。 [魔法ダメージ: 72%] [最後の一撃の魔法ダメージ: 48%]",
          "enhanced": "一定確率で大きなダイヤを飛ばして魔法ダメージを与え、苦痛を付与する[苦痛:1ごとにダメージを受け、回復量が減少する} [魔法ダメージ: 240%] [苦痛の持続時間:4秒]"
        },
        "normalSkill": {
          "name": "ダイヤモンドピアス",
          "desc": "尖ったダイヤを突き出し、敵3名に魔法ダメージを与え、苦痛を付与する。",
          "stats": ["苦痛:1ごとにダメージを受け、回復量が減少する", "魔法ダメージ: 475%", "苦痛の持続時間:8秒"]
        },
        "ultimateSkill": {
          "name": "ダイヤブレ･･･くちゅ!",
          "desc": "くしゃみで敵に範囲魔法ダメージを与える。",
          "stats": ["魔法ダメージ:1050%"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "味方の後列使徒のスキルダメージ量を増加させる",
          "stats": ["スキルダメージ量増加:34%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws 3 diamonds, dealing Magical Damage to the enemy. The final hit deals greater damage. [Magical DMG: 72%] [Final Hit Magical DMG: 48%]",
          "enhanced": "At a set chance, throws a big diamond, dealing Magical Damage to the enemy and applying the Stinging debuff on them. [Stinging: Reduces Recovery Amount and applies damage every second] [Magical DMG: 240%] [Stinging Duration: 4s]"
        },
        "normalSkill": {
          "name": "Diamond Pierce",
          "desc": "Calls forth sharp diamonds targeting 3 enemies, deals Magical Damage and applies the Stinging debuff on them.",
          "stats": ["Stinging: Reduces Recovery Amount and applies damage every second.", "Magical DMG: 475%", "Stinging Duration: 8s"]
        },
        "ultimateSkill": {
          "name": "Daya-choo!",
          "desc": "Sneezes and deals AoE Magical Damage to enemies,",
          "stats": ["Magical DMG: 1050%"],
          "cooldown": "40s"
        },
        "passiveSkill": {
          "desc": "Increases Skill Damage of allied back row Apostles. (This effect activates even if Daya is not on the field.)",
          "stats": ["Skill DMG Increase: 34%"]
        }
      },
    }
  },
   {
    "name": "芭瓏",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "以釘子刺傷敵軍,對其造成2次魔法傷害。 [總魔法傷害:120%]",
          "enhanced": "投擲釘子對敵人造成2次魔法傷害,並給予自身障眼法效樂。當有處於詛咒狀態的敵人時,將發動強化攻擊而非基本攻擊。 [障眼法:不會成為敵人的攻擊目標。沒有友軍時不會觸發。] [詛咒:隨機對其他對象造成相當於目標所受傷害量一定比例的魔法傷害。] [魔法傷害:360%] [障眼持續時間:9秒]"
        },
        "normalSkill": {
          "name": "八卦玩偶",
          "desc": "南向距離自身最遠的敵人造成魔法傷害,並給予完效果。梅展技能後,一定時間內給予敵人沉默效果。當敵人有3名以上時,則優先攻擊未攻擊過的敵人。",
          "stats": ["詛咒:隨機對其他對象造成相當於目標所受傷害量一定比例的魔法傷害。", "沉默:無法使用任何技能。", "魔法傷害:630%", "詛咒持續時間:15秒", "沉默持持續時間:10秒"]
        },
        "ultimateSkill": {
          "name": "召喚鬼火",
          "desc": "以自身為中心,對敵人造成範圍魔法傷害,給予詛咒效果,並於一定時間內減少受到的傷害。",
          "stats": ["詛咒:隨機對其他對象造成相當於目標所受傷害量一定比例的魔法傷害。", "魔法傷害:930%", "詛咒持續時間:15秒", "受到的傷害量減少:25%", "受到的傷害量減少持續時間:8秒"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "回合開始時,一定時間內對自身生成護霜。使用普通技能後，一定時間內增加自身的攻擊速度。",
          "stats": ["護盾:最大HP的68%", "護盾持續時間:10秒", "攻擊速度增加:63%", "攻擊速度增加持續時間:10秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "釘で刺し、敵に魔法ダメージを2回与える。[総魔法ダメージ: 120%]",
          "enhanced": "釘を飛ばして敵に2回魔法ダメージを与え、自身に目くらましを付与する。呪い状態の敵が存在する場合、基本攻撃の代わりに強化攻撃を発動する。 [目くらまし:敵の目標にならない。他の味方がいない時は発動しない。] [呪い:対象が受けたダメージの一定割合分、ランダムな別の対象に魔法ダメージを与える。] [総魔法ダメージ:360%] [目くらましの持続時間:8秒]"
        },
        "normalSkill": {
          "name": "陰口ぬいぐるみ",
          "desc": "自分から最も遠い敵に突進して魔法ダメージを与え、 呪いを付与する。スキル発動後、一定時間敵に沈黙を付与する。敵が3体以上の場合、攻撃していない敵を優先的に攻撃する。",
          "stats": ["呪い:対象が受けたダメージの一定割合分、ランダムな別の対象に魔法ダメージを与える。", "沈黙: 全てのスキルが使用できなくなる。", "魔法ダメージ:630%", "呪いの持続時間:15秒", "沈黙の持続時間:10秒"]
        },
        "ultimateSkill": {
          "name": "鬼火召喚",
          "desc": "自身を中心に敵に範囲魔法ダメージを与え、呪いを付与する、一定時間、被ダメージ量が減少する。",
          "stats": ["呪い:対象が受けたダメージの一定割合分、ランダムな別の対象に魔法ダメージを与える。", "魔法ダメージ:930%", "呪いの持続時間:15秒", "被ダメージ量減少:25%", "被ダメージ量減少の持続時間:8秒"],
          "cooldown": "s"
        },
        "passiveSkill": {
          "desc": "ウェーフ開始時に一定時間、自身にシールドを生成する。低学年スキル使用後、一定時間自身の攻撃速度が増加する。",
          "stats": ["シールド: 最大HPの68%", "シールドの持続時間:10秒", "攻擊速度增加:63%", "攻撃速度増加の持続時間: 10秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Pierces with a nail, dealing Magical Damage 2 times to the enemy. [Total Magical DMG: 120%]",
          "enhanced": "Launches nails to deal Magical Damage 2 times, applying Trickery to herself. If there is an enemy inflicted with the Curse effect, triggers an Enhanced Attack instead of a Basic Attack. [Trickery: Cannot be targeted by enemies. Does not trigger when no allies are present.] [Curse: Ratio of Damage Received by the target is dealt as Magical Damage to a random target.] [Total Magical DMG: 360%] [Trickery Duration: 8s]"
        },
        "normalSkill": {
          "name": "Backstabbing Doll",
          "desc": "Dashes to the farthest enemy from self, and deals Magical DMG, applying Curse. After using the skill, applies Silence to enemies for a set period of time. Prioritizes attacking unharmed enemies if there are 3 or more present",
          "stats": ["Curse: Ratio of Damage Received by the target Is dealt as Magical DMG to a random target.", "Silence: Unable to use any skills.", "Magical DMG: 630%", "Curse Duration: 15s", "Silence Duration: 10s"]
        },
        "ultimateSkill": {
          "name": "Summon Will-o'-wisp",
          "desc": "Deals AoE Magical Damage around self, applying Curse. Reduces Incoming Damage for a set period of time.",
          "stats": ["Curse: Ratio of Damage Received by the target is dealt as Magical Damage to a random target.", "Magical DMG: 930%", "Curse Duration: 15s", "Incoming DMG Reduction: 25%", "Incoming DMG Reduction Duration: 8s"],
          "cooldown": "40s"
        },
        "passiveSkill": {
          "desc": "At the start of a wave, casts a shield on herself for a set duration, After using Freshman Skill, increases own Attack Speed for a set period of time.",
          "stats": ["Shield: 68% of Max HP", "Shield Duration: 10s", "ATK SPD Increase: 63%", "ATK SPD Increase Duration: 10s"]
        }
      },
    }
  },
  {
    "name": "貝麗塔",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發動爆擊魔法，造成範圍魔法傷害。 [魔法傷害：75%]",
          "enhanced": "以一定機率對敵人發動凝聚魔力的爆擊魔法，造成範圍魔法傷害。 [魔法傷害：200%]"
        },
        "normalSkill": {
          "name": "次元爆裂",
          "desc": "對敵人發動次元能量轟炸，造成範圍魔法傷害。",
          "stats": ["總魔法傷害：1939.2%"]
        },
        "ultimateSkill": {
          "name": "深紅之雨",
          "desc": "對敵人爆擊「深紅之雨」，造成12次範圍魔法傷害。",
          "stats": ["總魔法傷害：1489.4%"],
          "cooldown": "22秒"
        },
        "passiveSkill": {
          "desc": "對前排使者所造成的傷害量增加。",
          "stats": ["對前排使者所造成的傷害量增加：84%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "爆撃魔法を発動させて敵に範囲魔法ダメージを与える。 [魔法ダメージ：75%]",
          "enhanced": "一定確率でマナを凝縮した爆撃魔法を発動させて敵に範囲魔法ダメージを与える。 [魔法ダメージ：200%]"
        },
        "normalSkill": {
          "name": "ディメンションバースト",
          "desc": "次元エネルギーを爆発させ範囲魔法ダメージを与える。",
          "stats": ["総魔法ダメージ：1939.2%"]
        },
        "ultimateSkill": {
          "name": "クリムゾンレイン",
          "desc": "クリムゾンレインで爆撃し、敵に12回範囲魔法ダメージを与える。",
          "stats": ["総魔法ダメージ：1489.4%"],
          "cooldown": "22秒"
        },
        "passiveSkill": {
          "desc": "前列の使徒への与ダメージ量が増加する。",
          "stats": ["前列の使徒への与ダメージ量増加：84%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Activates Explosion Magic, dealing AoE Magical Damage to enemies. [Magical DMG: 75%]",
          "enhanced": "At a set chance, activates Explosion Magic with concentrated mana, dealing AoE Magical Damage to enemies. [Magical DMG: 200%]"
        },
        "normalSkill": {
          "name": "Dimensional Burst",
          "desc": "Activates a blast of dimensional energy, dealing AoE Magical Damage to enemies.",
          "stats": ["Total Magical DMG: 1939.2%"]
        },
        "ultimateSkill": {
          "name": "Crimson Rain",
          "desc": "Activates a downpour of Crimson Rain, dealing AoE Magical Damage 12 times to enemies.",
          "stats": ["Total Magical DMG: 1489.4%"],
          "cooldown": "22s"
        },
        "passiveSkill": {
          "desc": "Increases Incoming Damage to Front Row Apostles.",
          "stats": ["Increases Incoming Damage to Front Row Apostles: 84%"]
        }
      }
    }
  },
  {
    "name": "劉美美",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對指定範圍內距離最遠的敵人發射箭矢，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "發射！咻~",
          "desc": "對指定範圍內距離最遠的敵人發射強力箭矢，造成物理傷害。",
          "stats": ["物理傷害：420%"]
        },
        "ultimateSkill": {
          "name": "發射！箭雨！",
          "desc": "集中力量向天空射出箭矢，對最遠的敵人造成5次範圍物理傷害。",
          "stats": ["總物理傷害：630%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "提升攻擊速度。",
          "stats": ["攻擊速度提升：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "射程距離内で最も離れている敵に矢を発射して物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "発射！シュー～",
          "desc": "指定範囲内で最も遠い敵に強化された矢を発射して物理ダメージを与える。",
          "stats": ["物理ダメージ：420%"]
        },
        "ultimateSkill": {
          "name": "発射！矢の雨！",
          "desc": "力を溜めて空へ矢を放ち、最も離れている敵に範囲物理ダメージを5回与える。",
          "stats": ["総物理ダメージ：630%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "攻撃速度が増加する。",
          "stats": ["攻撃速度：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots an arrow at the farthest enemy within the designated range, dealing Physical Damage. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Fire! Whoosh!",
          "desc": "Shoots an enhanced arrow at the farthest enemy within the designated range, dealing Physical Damage.",
          "stats": ["Physical DMG: 420%"]
        },
        "ultimateSkill": {
          "name": "Fire! Rain of Arrows!",
          "desc": "Gathers power and shoots an arrow in the sky, dealing AoE Physical Damage 5 times to the farthest enemy.",
          "stats": ["Total Physical DMG: 630%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Attack Speed.",
          "stats": ["ATK SPD Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "大師2號",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人用拳頭猛擊，造成物理傷害。 [物理傷害：175%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "機器人矩陣",
          "desc": "為前排友軍提供護盾。",
          "stats": ["護盾量：最大HP的21%", "護盾持續時間：3秒"]
        },
        "ultimateSkill": {
          "name": "聲納衝擊波",
          "desc": "對敵人發射衝擊波，造成物理傷害，並給予噪音效果。",
          "stats": ["噪音：減少造成的傷害量。", "物理傷害：210%", "噪音持續時間：6秒"],
          "cooldown": "16秒"
        },
        "passiveSkill": {
          "desc": "基本攻擊傷害量增加。對中毒和灼痛免疫。",
          "stats": ["中毒：每秒造成傷害並減少傷害量。", "灼痛：每秒造成傷害，並使恢復量減少。", "基本攻擊傷害量增加：52%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "拳を振るい、敵に物理ダメージを与える。 [物理ダメージ：175%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ロボティックマトリクス",
          "desc": "前列の味方にシールドを付与する。",
          "stats": ["シールド：最大HPの21%", "シールド持続時間：3秒"]
        },
        "ultimateSkill": {
          "name": "ソナーショックウェーブ",
          "desc": "範囲内の対象に衝撃波を放出し、物理ダメージを与え、ノイズを付与する。",
          "stats": ["ノイズ：与ダメージ量が減少する。", "物理ダメージ：210%", "ノイズの持続時間：6秒"],
          "cooldown": "16秒"
        },
        "passiveSkill": {
          "desc": "基本攻撃のダメージ量が増加する。毒と苦痛の免疫を得る。",
          "stats": ["毒：1秒ごとにダメージを受け、与ダメージ量が減少する。", "苦痛：1秒ごとにダメージを受け、回復量が減少する。", "基本ダメージ量増加：52%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Slams a fist down and deals Physical Damage to an enemy. [Physical DMG: 175%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Robot Matrix",
          "desc": "Grants Shield to the front row allies.",
          "stats": ["Shield: 21% of Max HP", "Shield Duration: 3s"]
        },
        "ultimateSkill": {
          "name": "Sonar Shock Wave",
          "desc": "Unleashes a shockwave, deals Physical Damage to enemies within range, and applies the Noise debuff on them.",
          "stats": ["Noise: Reduces Outgoing Damage.", "Physical DMG: 210%", "Noise Duration: 6s"],
          "cooldown": "16s"
        },
        "passiveSkill": {
          "desc": "Increases Basic Attack Damage. Becomes immune to Poison and Stinging.",
          "stats": ["Poison: Applies Damage every second and reduces its Outgoing Damage.", "Stinging: Reduces Recovery Amount and applies damage every second.", "Basic ATK DMG Increase: 52%"]
        }
      }
    }
  },
  {
    "name": "梅森",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲手裡劍，造成物理傷害。 [物理傷害：60%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "手裡劍飛過去囉！",
          "desc": "對隨機敵人投擲3枚手裡劍，造成物理傷害。最後一擊將造成更大的傷害。",
          "stats": ["物理傷害：252%", "最後一擊物理傷害：168%"]
        },
        "ultimateSkill": {
          "name": "教主的天罰-梅森",
          "desc": "借助教主的力量，對敵人造成物理傷害。",
          "stats": ["物理傷害：630%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "爆擊增加。",
          "stats": ["爆擊增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "手裏剣を投げ、敵に物理ダメージを与える。 [物理ダメージ：60%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "手裏剣飛ばすよ～！",
          "desc": "手裏剣を3個投げ、ランダムな敵に物理ダメージを与える。最後の刺撃はより大きなダメージを与える。",
          "stats": ["物理ダメージ：252%", "最後の攻撃の物理ダメージ：168%"]
        },
        "ultimateSkill": {
          "name": "教主の天罰 - メゾン",
          "desc": "教主の力を借りて敵に物理ダメージを与える。",
          "stats": ["物理ダメージ：630%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "会心が増加する。",
          "stats": ["会心増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a shuriken, dealing Physical Damage to an enemy. [Physical DMG: 60%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Take This Shuriken!",
          "desc": "Throws 3 shurikens, dealing Physical Damage to a random enemy. The final hit deals greater Damage.",
          "stats": ["Physical DMG: 252%", "Final Hit Physical DMG: 168%"]
        },
        "ultimateSkill": {
          "name": "Divine Punishment of The Master - Maison",
          "desc": "Borrows the power of the Master to deal Physical Damage to an enemy.",
          "stats": ["Physical DMG: 630%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases CRIT Hit.",
          "stats": ["CRIT Hit Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "伊弗利特",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動劍刃，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "嗶嗶啵啵",
          "desc": "對敵人生成火焰區域。對火焰區域內的敵人造成魔法傷害並給予燒傷效果。",
          "stats": ["燒傷：每秒造成傷害。", "魔法傷害：273%", "燒傷持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "營火晚會",
          "desc": "跳向空中後墜落至中央敵人位置，造成範圍魔法傷害並給予燒傷效果。隨後再造成10次範圍魔法傷害。",
          "stats": ["燒傷：每秒造成傷害。", "首次落下魔法傷害：42%", "魔法傷害：168%", "燒傷持續時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "基本攻擊傷害量增加，並對燒傷免疫。伊弗利特技能所引發的燒傷傷害增加。",
          "stats": ["燒傷：每秒造成傷害。", "基本攻擊傷害量增加：52%", "燒傷傷害增加：68%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "剣を振るい、敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "グツグツ",
          "desc": "炎の領域を生成して領域内の敵に魔法ダメージを与え、火傷を付与する。",
          "stats": ["火傷：1秒ごとにダメージを受ける。", "魔法ダメージ：273%", "火傷持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "キャンプファイア",
          "desc": "空中に跳び上がった後、真ん中にいる敵に落下し、範囲魔法ダメージを与え、火傷を付与する。その後10回範囲魔法ダメージを与える。",
          "stats": ["火傷：1秒ごとにダメージを受ける。", "初回落下時の魔法ダメージ：42%", "魔法ダメージ：168%", "火傷持続時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "基本攻撃のダメージ量が増加し、火傷の免疫を得る。イフリートのスキルで発生した火傷のダメージ量が増加する。",
          "stats": ["火傷：1秒ごとにダメージを受ける。", "基本攻撃のダメージ量増加：52%", "火傷のダメージ量増加：68%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her sword and deals Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Sizzle, Sizzle",
          "desc": "Creates a fire zone. Enemies within the zone take Magical Damage and are afflicted with Scorch.",
          "stats": ["Scorch: Applies Damage every second.", "Magical DMG: 273%", "Scorch Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "Campfire",
          "desc": "Leaps into the air and falls down on the enemy at the center, dealing AoE Magical Damage and applying Scorch. Afterwards, deals AoE Magical Damage 10 times.",
          "stats": ["Scorch: Applies Damage every second.", "First Fall's Magical DMG: 42%", "Magical DMG: 168%", "Scorch Duration: 6s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Basic Attack Damage and becomes immune to Scorch. Increases the Damage from Scorch caused by Ifrit's Skill.",
          "stats": ["Scorch: Applies Damage every second.", "Basic ATK DMG Increase: 52%", "Scorch DMG Increase: 68%"]
        }
      }
    }
  },
  {
    "name": "修帕",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲信件，造成魔法傷害。 [魔法傷害：55%]",
          "enhanced": "第二次攻擊時改為恢復HP比例最低的友軍，然後返回。 [HP恢復：目標最大HP的15%]"
        },
        "normalSkill": {
          "name": "不負責任的快遞員",
          "desc": "快速往返配送信件2次。每次掉落信件時恢復周圍友軍的HP。",
          "stats": ["HP恢復施展次數：4次", "每次HP恢復：目標最大HP的20% + 自身攻擊力的21%"]
        },
        "ultimateSkill": {
          "name": "修帕配送",
          "desc": "向前衝刺並散落信件，增加友軍的防禦力。對撞上的敵人造成範圍魔法傷害，並給予噪音效果。",
          "stats": ["噪音：減少造成的傷害量。", "魔法傷害：1050%", "噪音持續時間：10秒", "防禦力增加：31%", "防禦力增加持續時間：10秒"],
          "cooldown": "36秒"
        },
        "passiveSkill": {
          "desc": "減少敵人技能攻擊受到的傷害量。強化攻擊與普通技能的移動速度增加。",
          "stats": ["技能攻擊受到的傷害量減少：46%", "技能移動速度提升：50%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に郵便物を飛ばして魔法ダメージを与える。 [魔法ダメージ：55%]",
          "enhanced": "2回目の攻撃の代わりに、HP割合が最も低い味方を回復させ、元の位置に戻る。 [HP回復：対象の最大HPの15%]"
        },
        "normalSkill": {
          "name": "無責任な配達人",
          "desc": "素早く2往復して郵便を配る。郵便物を落とすごとに、周囲の味方のHPを回復する。",
          "stats": ["HP回復発動回数：4回", "1回あたりのHP回復：対象の最大HPの20%+自分の攻撃力の21%"]
        },
        "ultimateSkill": {
          "name": "シュパン配送",
          "desc": "前方に疾走しながら郵便物をばらまき、味方の防御力を増加させる。衝突した敵には範囲魔法ダメージを与え、ノイズを付与する。",
          "stats": ["ノイズ：与えるダメージ量が減少する。", "ノイズの持続時間：10秒", "魔法ダメージ：1050%", "防御力増加：31%", "防御力増加の持続時間：10秒"],
          "cooldown": "36秒"
        },
        "passiveSkill": {
          "desc": "敵のスキル攻撃の被ダメージ量が減少する。強化攻撃と低学年スキルの移動速度が増加する。",
          "stats": ["スキル攻撃の被ダメージ量減少：46%", "スキル移動速度増加：50%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws mail and deals Magical Damage to the enemy. [Magical DMG: 55%]",
          "enhanced": "Recovers and returns the ally with the lowest HP Ratio in lieu of her second attack. [HP Recovery: 15% of the target's Max HP]"
        },
        "normalSkill": {
          "name": "Irresponsible Courier",
          "desc": "Quickly delivers the mail for 2 round trips. Recovers HP for nearby allies each time drops the mail.",
          "stats": ["HP Recovery Per Use: 20% of the target's Max HP + 21% of own ATK", "HP Recovery Cast Count: 4"]
        },
        "ultimateSkill": {
          "name": "Shoupan Delivery",
          "desc": "Dashes forward, dropping the mail, and increasing the defense of allies. Deals AoE Magical Damage to enemies and applies Noise.",
          "stats": ["Noise: Reduces Outgoing Damage Rate.", "Magical DMG: 1050%", "Noise Duration: 10s", "DEF Increase: 31%", "DEF Increase Duration: 10s"],
          "cooldown": "36s"
        },
        "passiveSkill": {
          "desc": "Reduces Incoming Damage from enemy Skill Attacks. Increases Enhanced Attack and the Movement Speed of Freshman Skills.",
          "stats": ["Incoming Skill ATK DMG Reduction: 46%", "Skill MOV SPD Increase: 50%"]
        }
      }
    }
  },
  {
    "name": "奶油",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射石塊，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "以一定機率對敵人發射狗咬骨頭，造成絕對爆擊的物理傷害。 [物理傷害：150%]"
        },
        "normalSkill": {
          "name": "奶油噴射！",
          "desc": "若有多個目標，則對敵人發射彈跳子彈，造成物理傷害。",
          "stats": ["每次打擊物理傷害：336%", "最多打擊次數：4次"]
        },
        "ultimateSkill": {
          "name": "彈弓！好球！",
          "desc": "對敵人遠發射巨大石塊，造成範圍物理傷害並給予昏迷效果。",
          "stats": ["昏迷：無法進行任何行動。", "物理傷害：640%", "昏迷持續時間:2秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "爆擊機率增加。提升友軍活潑性格使者的攻擊力。(該效果即使奶油不在場上也會觸發。)",
          "stats": ["爆擊機率增加：63%", "攻擊力增加：23%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に大きな石を発射して物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "一定確率で犬用ガムを発射し、敵に確定会心物理ダメージを与える。 [物理ダメージ：150%]"
        },
        "normalSkill": {
          "name": "バターフライ！",
          "desc": "対象が複数いる場合、跳ね返る弾丸を発射して敵に物理ダメージを与える。",
          "stats": ["攻撃ごとの物理ダメージ：336%", "攻撃の最大回数4回"]
        },
        "ultimateSkill": {
          "name": "ストラ～イク！",
          "desc": "巨大な石を発射し、敵に範囲物理ダメージを与え、気絶を付与する。",
          "stats": ["気絶：行動不能になる", "物理ダメージ：640%", "気絶持続時間：2秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "会心率が増加する。活発の味方使徒の攻撃力を増加させる。(この効果はバターがフィールドにいなくても発動する。)",
          "stats": ["会心率増加：63%", "攻撃力増加：23%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots a rock, dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "At a set chance, fires a dog chew, dealing Guaranteed Physical Critical Damage to the enemy. [Physical DMG: 150%]"
        },
        "normalSkill": {
          "name": "Butter Fly!",
          "desc": "If there are multiple targets, fires a ricocheting shot that deals Physical Damage to the enemy.",
          "stats": ["Physical DMG Per Hit: 336%", "Max Hit Count: 4 time(s)"]
        },
        "ultimateSkill": {
          "name": "Slingshot, Strike!",
          "desc": "Launches a huge rock that deals AoE Physical Damage and Stuns enemies.",
          "stats": ["Stun: Becomes unable to act.", "Physical DMG: 640%", "Stun Duration: 2s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Critical Rate. Increases all allied Vivacious Personality Apostles Attack. (This effect activates even if Butter is not on the field.)",
          "stats": ["CRIT Rate Increase: 63%", "ATK Increase: 23%"]
        }
      }
    }
  },
  {
    "name": "桃桃",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "朝敵軍投擲2次電弧手裡劍，對敵人造成魔法傷害。 [總魔法傷害：150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "雙倍擁抱",
          "desc": "召喚對隨機敵人造成魔法傷害的分身。分身在受到3次傷或經過一段時間後會被破壞。被破壞時，會對周圍造成範圍魔法傷害並給予觸電效果。分身不受HP恢復效果。",
          "stats": ["觸電：攻擊速度及移動速度下降", "召喚獸：4個", "召喚持續時間：12秒", "召喚獸傷害耐受度：3次", "召喚獸魔法傷害：86%", "召喚獸自爆傷害：129%", "觸電持續時間：2秒"]
        },
        "ultimateSkill": {
          "name": "絕殺松鼠雷霆",
          "desc": "在指定範圍內最靠後的敵人身邊出現，對其造成4次範圍魔法傷害。攻擊結束後派一個分身留在原地，重回起始位置。分身與普通技能召喚的分身具有相通特性。",
          "stats": ["總魔法傷害：720%", "召喚獸魔法傷害：86%", "召喚獸自爆傷害：129%"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "受到2次直接傷害後發動「機靈躲避」。機靈躲避發動後在一定時間內增加攻擊力並減少受到的傷害量。",
          "stats": ["直接傷害：指不包含狀態異常傷害與反射傷害的直接攻擊所造成的傷害。", "機靈躲避：執行木樁替身術，向後移動。施放誘導術使自身不會成為敵人的目標。", "機靈躲避冷卻時間：8秒", "攻擊力增加：30%", "攻擊力增加持續時間：6秒", "受到的傷害量減少：30%", "受到的傷害量減少持續時間：6秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に電気手裏剣を2回投げ、魔法ダメージを与える。 [総魔法ダメージ：150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "倍返しで抱きしめるっ",
          "desc": "ランダムな敵に魔法ダメージを与える分身を召喚する。分身は3回ダメージを受けるか、時間が経過すると破壊される。破壊時、周囲に魔法ダメージを与え、感電を付与する。分身はHP回復効果を受けない。",
          "stats": ["感電：攻撃移動速度が減少する。", "召喚獣：4 体", "召喚の持続時間：12秒", "召喚獣の被ダメージ耐久度：3回", "召喚獣の魔法ダメージ：86%", "召喚獣の自爆ダメージ：129%", "感電の持続時間：2秒"]
        },
        "ultimateSkill": {
          "name": "秒殺リスサンダー",
          "desc": "指定された射程距離内で最も後ろにいる敵の元に現れ、範囲魔法ダメージを4回与える。攻撃が終わるとその場に分身を1個残し、スキル発動位置に戻ってくる。分身は低学年スキルによって召喚される分身と同一の特性を持つ。",
          "stats": ["総魔法ダメージ：720%", "召喚獣魔法ダメージ：86%", "召喚獣自爆ダメージ：129%"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "2回直接ダメージを受けると才気煥発を発動する、才気煥発発動後は一定時間、攻撃力が増加し、被ダメージ量が減少する。",
          "stats": ["直接ダメージ: 状態異常ダメージ、反射ダメージを く直接攻撃によるダメージを意味する。", "才気煥発：変わり身の術を使って後ろに移動する。自身に目くらましをかけ、敵の目標にならなくなる。", "才気煥発クールタイム：8秒", "攻撃力増加：30%", "攻撃力増加の持続時間：6秒", "被ダメージ量減少：30%", "被ダメージ量減少の持続時間：6秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws an electric Shuriken 2 times at the enemy, dealing Magical Damage. [Total Magical DMG: 150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Double Hug",
          "desc": "Summons a clone that attacks a random enemy with Magical Damage. The clone is destroyed after either taking damage 3 times or a set period of time. Upon destruction, deals AoE Magical Damage and applies Electrocution. Clones cannot receive HP Recovery effects.",
          "stats": ["Electrocution: Reduces Attack Speed and Movement Speed.", "Minion Magical Damage: 86%", "Minion Self-Destruct Damage: 129%", "Summon Duration: 12s", "Minion Durability: 3hits", "Minions: 4", "Electrocution Duration: 2s"]
        },
        "ultimateSkill": {
          "name": "Rapid Momorisu",
          "desc": "Appears behind the furthest target within the designated range, dealing AoE Magical Damage 4 times. After the attack ends, leaves behind a clone in its place and returns to the casting location. The clone has the same traits as the clones summoned by the Freshman Skill.",
          "stats": ["Total Magical DMG: 720%", "Minion Magical DMG: 86%", "Minion Self-Destruct DMG: 129%"],
          "cooldown": "30s"
        },
        "passiveSkill": {
          "desc": "When taking Direct Damage twice, activates Swift Ruse. After Swift Ruse activates, increases Attack and reduces Incoming Damage for a set period of time.",
          "stats": ["Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "Swift Ruse: Performs a swap with a log to move backward. Applies Trickery to self becoming unable to be targeted by enemies.", "Swift Ruse Cooldown: 8.5s", "ATK Increase: 30%", "ATK Increase Duration: 6s", "Incoming DMG Reduction: 30%", "Incoming DMG Reduction Duration: 6s"]
        }
      }
    }
  },
  {
    "name": "瑟琳娜",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動布條，造成2次魔法傷害。 [總魔法傷害：75%]",
          "enhanced": "第三次攻擊時改為恢復自身HP，並對敵人進行挑禦。 [挑釁：使目標對發動挑釁的單位進行基本攻擊。] [HP恢復：最大HP的10%] [挑釁持續時間：3秒]"
        },
        "normalSkill": {
          "name": "全心全意",
          "desc": "對指定范圍內最遠的敵人投擲心形能量，對撞擊到的所有敵人造成範圍魔法傷害。心形能量到達目標位置後爆炸，讓周圍目標進入昏迷狀態。",
          "stats": ["昏迷：進入無法行動狀態。", "愛心能量傷害間隔：0.3秒", "昏迷持續時間：2.5秒", "每次魔法傷害：72%"]
        },
        "ultimateSkill": {
          "name": "粉色星塵",
          "desc": "對HP比例最低的敵人造成魔法傷害。使用此技能消減敵人時，為自身生成護盾。",
          "stats": ["魔法傷害：1440%", "護盾：最大HP的64%", "護盾持續時間：8秒"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "爆擊抵抗增加。對挑釁免疫。",
          "stats": ["挑釁：使目標對發動挑釁的單位進行基本攻擊。", "爆擊抵抗增加：48%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に袖を振るい、魔法ダメージを2回与える。 [総魔法ダメージ：75%]",
          "enhanced": "3回目の攻撃の代わりに自身のHPを回復し、敵を挑発する。 [挑発：挑発した対象を基本攻撃で攻撃する。] [HP回復：最大HPの10%] [挑発の持続時間：3秒]"
        },
        "normalSkill": {
          "name": "これが愛よ",
          "desc": "指定範囲内で最も遠い敵にハートエネルギーを発射し、衝突した全ての敵に範囲魔法ダメージを与える。ハートエネルギーは敵の位置に到達すると爆発して周囲に気絶を付与する",
          "stats": ["気絶：行動不能状態になる。", "ハートエネルギーのダメージ間隔：0.3秒", "気絶の持続時間：2.5秒", "1回の攻撃ごとの魔法ダメージ：72%"]
        },
        "ultimateSkill": {
          "name": "ピンクダスト",
          "desc": "残りHP割合が最も低い敵に魔法ダメージを与える。このスキルで敵を倒すと、自身にシールドを生成する。",
          "stats": ["魔法ダメージ：1440%", "シールド：最大HPの64%", "シールドの持続時間：8秒"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "会心抵抗が増加する。挑発の免疫を持つ。",
          "stats": ["挑発：挑発した対象を基本攻撃で攻撃する。", "会心抵抗増加：48%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Whirls her cloth around and deals Magical Damage to the enemy twice. [Total Magical DMG: 75%]",
          "enhanced": "Selene recovers HP in lieu of her third attack. Also, Taunts the enemy. [Taunt: Provokes Basic Attacks on the taunt.] [HP Recovery: 10% of Max HP] [Taunt Duration: 3s]"
        },
        "normalSkill": {
          "name": "Wholeheartedly",
          "desc": "Unleashes Heart Energy at the furthest enemy within the designated range and deals AoE Magical Damage to enemies who have come into contact with it. When the Heart Energy reaches the enemy, it explodes and applies Stun on nearby targets.",
          "stats": ["Stun: Becomes unable to act.", "Magical DMG Per Hit: 72%", "Heart Energy DMG Interval: 0.3s", "Stun Duration: 2.5s"]
        },
        "ultimateSkill": {
          "name": "Pink Dust",
          "desc": "Deals Magical Damage to the enemy with the lowest remaining HP Ratio. When an enemy is defeated with this skill, she casts a Shield on herself.",
          "stats": ["Magical DMG: 1440%", "Shield: 64% of Max HP", "Shield Duration: 8s"],
          "cooldown": "28s"
        },
        "passiveSkill": {
          "desc": "Increases Critical Hit Resistance. Becomes immune to Taunt.",
          "stats": ["Taunt: Provokes Basic Attacks on the taunt.", "CRIT Resistance Increase: 48%"]
        }
      }
    }
  },
  {
    "name": "羽伊",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射魔靈魔法，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "耶魯以一定機率對敵人揮動舌頭，造成魔法傷害，並恢復周圍友軍的SP。 [魔法傷害：160%] [SP恢復量：20]"
        },
        "normalSkill": {
          "name": "呱呱雨",
          "desc": "在自身周圍下起呱呱雨，每秒恢復友軍的HP與SP，並對敵人造成範圍魔法傷害。恢復與傷害效果，分別最多適用於9名友軍與敵軍。",
          "stats": ["持續HP恢復：自身最大HP的7.2%", "持續SP恢復：目標最大SP的2.4%", "總魔法傷害：601.2%", "呱呱雨持續時間：6秒"]
        },
        "ultimateSkill": {
          "name": "言之命至！",
          "desc": "耶魯唱起歌來，對3名不同的對象給予以下效果：恢復HP比例最低的友軍所有HP並提供護盾。恢復剩餘SP比例最低的友軍所有SP。對隨機敵人給予變異效果。",
          "stats": ["變異：變為物體，進入無法行動狀態。", "護盾：最大HP的19%", "護盾持續時間：6秒", "變異持續時間：5.8秒"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "減少所有友軍受到的技能攻擊傷害量。",
          "stats": ["技能攻擊受到的傷害量減少：26%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "精霊魔法を放って敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "一定確率で敵を舌ではたいて魔法ダメージを与え、周囲の味方のSPを回復させる。 [魔法ダメージ：160%] [SP回復量：20]"
        },
        "normalSkill": {
          "name": "カエル雨",
          "desc": "自身の周囲にカエルの雨を降らせて1秒ごとに味方のHPとSPを回復させ、敵に範囲魔法ダメージを与える。回復とダメージはそれぞれ最大9名の味方と敵に適用される。",
          "stats": ["持続HP回復：最大HPの7.2%", "持続SP回復：対象の最大SPの2.4%", "総魔法ダメージ：601.2%", "カエル雨の持続時間：6秒"]
        },
        "ultimateSkill": {
          "name": "カエルの言うとおり！",
          "desc": "エルの歌で対象3体にそれぞれ以下の効果を付与する。残りHP割合が最も低い味方のHPを全回復させ、シールドを付与する。 残りSP割合が最も低い味方のSPを全回復させる。ランダムな敵に変異を付与する。",
          "stats": ["変異:物体に変化し、行動不能になる。", "シールド：最大HPの19%", "シールド持続時間：6秒", "変異の持続時間：5.8秒"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "味方全員のスキル攻撃による被ダメージ量が減少する。",
          "stats": ["スキル攻撃の被ダメージ量減少：26%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts Elemental Magic, dealing Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "At a set chance, Croakie lashes her tongue out at the enemy, dealing Magical Damage to them and recovering SP for nearby allies. [Magical DMG: 160%] [SP Recovery: 20]"
        },
        "normalSkill": {
          "name": "Croaking Rain",
          "desc": "Makes Croaking Rain fall on the surroundings, recovering allies' HP and SP, and AoE Magical Damage to enemies every second. Recovery and Damage are applied to up to 9 allies and enemies each.",
          "stats": ["Continuous HP Recovery: 7.2% of own Max HP", "Continuous SP Recovery: 2.4% of target's Max SP", "Total Magical DMG: 601.2%", "Croaking Rain Duration: 6s"]
        },
        "ultimateSkill": {
          "name": "As I Said!",
          "desc": "Croakie sings to grant the following effects to 3 different allies: Fully restores HP and grants a Shield to the ally with the lowest remaining HP Ratio. Fully recovers SP of the ally with the lowest SP Ratio. Inflicts Mutate on a random enemy.",
          "stats": ["Mutate: Turns into an inanimate object and becomes unable to act.", "Shield: 19% of Max HP", "Shield Duration: 6s", "Mutation Duration: 5.8s"],
          "cooldown": "20s"
        },
        "passiveSkill": {
          "desc": "Reduces all allies Incoming Damage from Skill Attacks.",
          "stats": ["Incoming Skill ATK DMG Reduction: 26%"]
        }
      }
    }
  },
  {
    "name": "艾皮卡",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "讓艾比康攻擊敵人，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "勇敢的艾比康有一定機率對敵人造成範圍物理傷害。 [物理傷害：400%]"
        },
        "normalSkill": {
          "name": "戲劇性演出",
          "desc": "在一定時間內，自身與周圍友軍的攻擊速度提升，基本攻擊替換為強化攻擊。",
          "stats": ["攻擊速度增加：93%", "友軍攻擊速度增加：13.5%", "攻擊速度增加持續時間：9秒"]
        },
        "ultimateSkill": {
          "name": "獻給教主大人！",
          "desc": "演奏一首頌揚教主的英雄詩。直到演奏結束為止，艾比康們會對隨機敵人造成物理傷害。此攻擊傷害視為基本攻擊傷害。在一定時間內，增加周圍友軍的攻擊力。",
          "stats": ["召喚獸物理傷害：420%", "演奏持續時間：6秒", "攻擊力增加：25%", "攻擊力增加持續時間：8秒"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "爆擊與爆擊傷害增加。",
          "stats": ["爆擊增加：42%", "爆擊傷害增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "エピコンに敵を攻撃させ、物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "勇敢なエピコンが一定確率で敵に範囲物理ダメージを与える。 [物理ダメージ：400%]"
        },
        "normalSkill": {
          "name": "ドラマチック演出",
          "desc": "一定時間、自身と周囲の味方の攻撃速度を増加させ、基本攻撃が強化された普通攻撃に置き換わる。",
          "stats": ["攻撃速度増加：93%", "味方の攻撃速度増加：13.5%", "攻撃速度増加の持続時間：9秒"]
        },
        "ultimateSkill": {
          "name": "教主様に捧げる",
          "desc": "教主を称える英雄譚を演奏する。演奏が終わるまでエピコンがランダムな敵に物理ダメージを与える。この攻撃は基本攻撃のダメージとみなされる。一定時間、周囲の味方の攻撃力が増加する。",
          "stats": ["召喚獣の物理ダメージ：420%", "演奏の持続時間：6秒", "攻撃力増加：25%", "攻撃力増加の持続時間：8秒"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "会心と会心ダメージが増加する。",
          "stats": ["会心率増加：42%", "会心ダメージ増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Has Epicon dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "At a set chance, Brave Epicon deals AoE Physical Damage to the enemy. [Physical DMG: 400%]"
        },
        "normalSkill": {
          "name": "Dramatic Staging",
          "desc": "For a set period of time, increases the Attack Speed of herself and nearby allies, and replaces Basic Attacks with Enhanced Attacks.",
          "stats": ["ATK SPD Increase: 93%", "Ally ATK SPD Increase: 13.5%", "ATK SPD Increase Duration: 9s"]
        },
        "ultimateSkill": {
          "name": "For The Master!",
          "desc": "Performs a heroic tale praising the Master. When it's over, the Epicons deal Physical Damage to a random enemy. This Attack Damage is treated as Basic Attack Damage. Increases the Attack of nearby allies for a set period of time.",
          "stats": ["Minion Physical Damage: 420%", "Performance Duration: 6s", "ATK Increase: 25%", "ATK Increase Duration: 8s"],
          "cooldown": "40s"
        },
        "passiveSkill": {
          "desc": "Increases Critical Hit and Critical Damage.",
          "stats": ["CRIT Increase: 42%", "Critical Damage Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "米雪",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動劍刃，造成物理傷害。 [物理傷害：75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "嘎哦~",
          "desc": "對敵人怒吼，造成3次範圍物理傷害。",
          "stats": ["總物理傷害：270.3%"]
        },
        "ultimateSkill": {
          "name": "教主的天罰-米雪",
          "desc": "借助教主的力量，對敵人造成物理傷害。",
          "stats": ["物理傷害：756%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "攻擊力增加。",
          "stats": ["攻擊力增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "剣を振るって敵に物理ダメージを与える。 [物理ダメージ：75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ガオオ〜",
          "desc": "大声を出して敵に範囲物理ダメージを3回与える。",
          "stats": ["総物理ダメージ：270.3%"]
        },
        "ultimateSkill": {
          "name": "教主の天罰 - ミンス",
          "desc": "教主の力を借りて敵に物理ダメージを与える。",
          "stats": ["物理ダメージ：756%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "攻撃力が増加する。",
          "stats": ["攻撃力増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her sword and deals Physical Damage to the enemy. [Physical DMG: 75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Purr!",
          "desc": "Shouts loudly, dealing AoE Physical Damage 3 times to enemies.",
          "stats": ["Total Physical DMG: 270.3%"]
        },
        "ultimateSkill": {
          "name": "Divine Punishment of The Master - Mynx",
          "desc": "Borrows the power of the Master to deal Physical Damage to an enemy.",
          "stats": ["Physical DMG: 756%"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "Increases Attack.",
          "stats": ["ATK Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "茱蜜",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人射出蜂刺，造成物理傷害。 [物理傷害：120%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "朋友來了嗡",
          "desc": "召喚好友蜜蜂。對HP比例最低的敵人用好友蜜蜂的蜂刺攻擊，造成物理傷害。",
          "stats": ["召喚獸物理傷害：73%", "召喚獸技能物理傷害：200%", "可召喚的最大召喚獸數量：3隻"]
        },
        "ultimateSkill": {
          "name": "好幸福嗡",
          "desc": "提升自身與好友蜜蜂的攻擊力和攻擊速度。",
          "stats": ["攻擊力增加：42%", "攻擊速度增加：31%", "增益持續時間：8秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "召喚獸的防禦力增加。",
          "stats": ["召喚獸防禦力增加：38%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "針を飛ばして敵に物理ダメージを与える。 [物理ダメージ：120%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "友達が来たビー",
          "desc": "友達のミツバチを呼び寄せる。友達のミツバチは残りHP割合が最も低い敵を針で攻撃して物理ダメージを与える。",
          "stats": ["召喚獣物理ダメージ：73%", "召喚獣スキルの物理ダメージ：200%", "最大召喚数：3体"]
        },
        "ultimateSkill": {
          "name": "ハッピーハッピー",
          "desc": "自身と友達のミツバチの攻撃力と攻撃速度を増加させる。",
          "stats": ["攻撃力増加：42%", "攻撃速度増加：31%", "バフの持続時間：8秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "召喚獣の防御力が増加する。",
          "stats": ["召喚獣防御力増加：38%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots a stinger, dealing Physical Damage to an enemy. [Physical DMG: 120%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "I'm Here, Bee!",
          "desc": "Calls a honey bee friend. The honey bee attacks the enemy with the lowest remaining HP Ratio using its stinger and deals Physical Damage.",
          "stats": ["Minion Physical DMG: 73%", "Minion Skill Physical DMG: 200%", "Max Summonable Minions: 3"]
        },
        "ultimateSkill": {
          "name": "Happy Bee",
          "desc": "Increases ATK and ATK SPD for self and summoned honey bees.",
          "stats": ["ATK Increase: 42%", "ATK SPD Increase: 31%", "Buff Duration: 8s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Minions' Defense.",
          "stats": ["Minion DEF Increase: 38%"]
        }
      }
    }
  },
  {
    "name": "琳",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞鐮刀，造成範圍物理傷害，並以一定機率給予灼痛效果。 [灼痛：每秒造成傷害，並使恢復量減少。] [物理傷害：100%] [灼痛持續時間：2秒]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "側斬",
          "desc": "黑暗降臨並恢復HP。揮出斬擊，對敵人造成範圍物理傷害，並給予灼痛與擊退效果。",
          "stats": ["灼痛：每秒造成傷害，並使恢復量減少。", "擊退：進入無法行動的狀態並被向後推。", "HP恢復：最大HP的21.5%", "物理傷害：580%", "灼痛持續時間：10秒"]
        },
        "ultimateSkill": {
          "name": "死亡收割",
          "desc": "解放死亡的力量，對敵人揮出斬擊，造成2次範圍物理傷害並給予擊退效果，同時恢復自身的HP。",
          "stats": ["擊退：進入無法行動的狀態並被向後推。", "物理傷害：730%", "最後一擊物理傷害：930%", "HP恢復：最後一擊造成傷害量的250%"],
          "cooldown": "56秒"
        },
        "passiveSkill": {
          "desc": "以直接傷害擊殺敵人時恢復自身HP。",
          "stats": ["直接傷害：指狀態異常傷害、反射傷害以外的直接攻繫傷害。", "HP恢復：最大HP的21.5%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "鎌を薙ぎ払って敵に範囲物理ダメージを与え、一定確率で苦痛を付与する。 [苦痛：回復量が減少し、1秒ごとにダメージを受ける。] [物理ダメージ：100%] [苦痛の持続時間：2秒]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "スクラッチサイド",
          "desc": "闇が降り、HPを回復する。斬撃を放ち、敵に範囲物理ダメージを与えて苦痛を付与し、ノックバックさせる。",
          "stats": ["苦痛：回復量が減少し、1秒ごとにダメージを受ける。", "ノックバック：行動不能になり後ろへ押し戻される。", "HP回復：最大HPの21.5%", "物理ダメージ：580%", "苦痛の持続時間：10秒"]
        },
        "ultimateSkill": {
          "name": "グリムリーパー",
          "desc": "グリムの力を解放し、敵に斬撃を放ち、範囲物理ダメージを2回与えノックバックさせる、そして自身のHPを回復する。",
          "stats": ["ノックバック：行動不能状態になり後ろへ押し戻される。", "物理ダメージ：730%", "最後の一撃での与ダメージ量の930%", "HP回復：最後の一撃での与ダメージ量の250%"],
          "cooldown": "56秒"
        },
        "passiveSkill": {
          "desc": "直接ダメージで敵を倒すと、自身のHPを回復する。",
          "stats": ["直接ダメージ：直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。", "HP回復：最大HPの21.5%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "At a set chance, swings her scythe to the enemies, dealing AoE Physical Damage and applying Stinging. [Stinging: Reduces Recovery Amount and applies damage every second.] [Physical DMG: 100%] [Stinging Duration: 2s]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Side Slash",
          "desc": "Darkness descends and restores HP. Unleashes a slash attack that deals AoE Physical Damage to enemies, inflicting Stinging and Knockback.",
          "stats": ["Stinging: Reduces Recovery Amount and applies damage every second.", "Knockback: is pushed back, becoming unable to act.", "HP Recovery: 21.5% of Max HP", "Physical DMG: 580%", "Stinging Duration: 10s"]
        },
        "ultimateSkill": {
          "name": "Grim Reaper",
          "desc": "Unleashes a slash attack by unlocking the Grim Reaper's power, dealing AoE Physical Damage to enemies twice and Knocking them back. Additionally recovers own HP.",
          "stats": ["Knockback: is pushed back, becoming unable to act.", "Physical DMG: 730%", "Final Hit Physical DMG: 930%", "HP Recovery: 250% of DMG Dealt by the Final Hit"],
          "cooldown": "56s"
        },
        "passiveSkill": {
          "desc": "When defeating an enemy with Direct Damage, recovers own HP.",
          "stats": ["Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "HP Recovery: 21.5% of Max HP"]
        }
      }
    }
  },
  {
    "name": "莉絲蒂",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲喝完的罐子，造成物理傷害。 [物理傷害：80%]",
          "enhanced": "每四次攻擊會駭入敵人，對敵人造成絕對爆擊的物理傷害。 [物理傷害：120%]"
        },
        "normalSkill": {
          "name": "科技法師",
          "desc": "對剩餘HP比例最低的敵人造成範圍物理傷害。若敵人未被消滅，則重新尋找敵人造成範圍物理傷害，最多3次。最後一次攻擊會造成更高的傷害。",
          "stats": ["物理傷害：317%", "擊退：進入無法行動的狀態並被向後推。", "最後一擊物理傷害：648%"]
        },
        "ultimateSkill": {
          "name": "立體像素故障",
          "desc": "對剩餘HP比例最低的3名敵人各落下10個方塊，造成物理傷害。最後落下的方塊造成更高的傷害並給予昏迷效果。技能施展期間可變更目標。",
          "stats": ["昏迷：無法進行任何行動。", "每個方塊物理傷害：77%", "最後方塊物理傷害：309%", "昏迷持續時間：3秒"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "高級技能昏迷的持續時間變更。",
          "stats": ["昏迷：無法進行任何行動。", "昏迷持續時間：6.8秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に飲み干した缶を投げて、物理ダメージを与える。 [物理ダメージ：80%]",
          "enhanced": "4回攻撃するごとに敵をハッキングし、確定会心物理ダメージを与える。 [物理ダメージ：120%]"
        },
        "normalSkill": {
          "name": "テクノマンシー",
          "desc": "敵を撃破できなかった場合、最大3回まで敵を再サーチし、範囲物理ダメージを与える。最後の一撃はより高いダメージを与える。",
          "stats": ["物理ダメージ：317%", "最後の一撃の物理ダメージ：648%"]
        },
        "ultimateSkill": {
          "name": "ボクセルグリッチ",
          "desc": "残りHP割合が最も低い敵3体にブロックを10個ずつ落として、物理ダメージを与える。最後のブロックはより高いダメージを与え、気絶を付与する。スキル発動中に対象が変更される場合もある。",
          "stats": ["気絶：行動不能状態になる。", "ブロックにつき物理ダメージ：77%", "最後のブロックの物理ダメージ：309%", "気絶の持続時間：3秒"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "高学年スキル気絶の持続時間が変更される。",
          "stats": ["気絶：行動不能状態になる。", "気絶の持続時間：6.8秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws an empty can and deals Physical Damage to the enemy. [Physical DMG: 80%]",
          "enhanced": "Every fourth attack hacks the enemy, dealing Guaranteed Physical Critical Damage. [Physical DMG: 120%]"
        },
        "normalSkill": {
          "name": "Technomancy",
          "desc": "Deals AoE Physical Damage to the enemy with the lowest remaining HP Ratio. If the enemy is not defeated, finds the target again, up to 3 more times, dealing AoE Physical Damage. The final hit deals higher Damage.",
          "stats": ["Physical DMG: 317%", "Final Hit Physical DMG: 648%"]
        },
        "ultimateSkill": {
          "name": "Voxel Glitch",
          "desc": "Deals Physical Damage by dropping 10 blocks on 3 targets with the lowest remaining HP Ratio. The final block to drop deals higher damage and applies Stun. The target may change during Skill casting.",
          "stats": ["Stun: Becomes unable to act.", "Physical DMG per Block: 77%", "Final Block Physical DMG: 309%", "Stun Duration: 3s"],
          "cooldown": "26s"
        },
        "passiveSkill": {
          "desc": "Senior Skill Stun Duration is changed.",
          "stats": ["Stun: Becomes unable to act.", "Stun Duration: 6.8s"]
        }
      }
    }
  },
  {
    "name": "芙莉可",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人召喚追蹤的藤蔓，造成魔法傷害。 [魔法傷害：75%]",
          "enhanced": "有一定機率召喚荊棘觸手。荊棘觸手在被消減前會攻擊附近的敵人。荊棘觸手被消滅後，將進行前後範圍攻擊。 [召喚獸魔法傷害：15%] [召喚獸消失第一次傷害：30%] [召喚獸消失第二次傷害：60%]"
        },
        "normalSkill": {
          "name": "荆棘守衛",
          "desc": "對敵人造成範圍魔法傷害，並消滅所有被召喚的荆棘觸手。被該技能消滅的荆棘觸手對敵人造成更大的傷害。",
          "stats": ["魔法傷害：630%", "召喚獸消失第一次傷害：60%", "召喚獸消失第二次傷害：120%"]
        },
        "ultimateSkill": {
          "name": "絞藤警衛",
          "desc": "以荊棘藤蔓繞最近的3名敵人持續5秒，造成魔法傷害並給予定身、沉默效果。荊棘藤蔓生成時，對敵人召喚一隻荊棘觸手。",
          "stats": ["定身：無法行走移動。", "沉默：無法使用任何技能。", "每秒魔法傷害：180%", "定身持續時間：5秒", "沉默持續時間：7秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "增加對狂亂性格敵人造成的傷害量。",
          "stats": ["造成的傷害量增加：84%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "追跡する蔓を発射し、敵に魔法ダメージを与える。 [魔法ダメージ：75%]",
          "enhanced": "一定確率で棘の触手を召喚する。棘の触手は消滅するまで、定期的に近くの敵を攻撃する。棘の触手は消滅時、前後方向に範囲攻撃を放つ。 [召喚獣魔法ダメージ：15%] [召喚獣消滅時ダメージ(1回目)：30%] [召喚獣消滅時ダメージ(2回目)：60%]"
        },
        "normalSkill": {
          "name": "スティンギングゲートキーパー",
          "desc": "敵に範囲魔法ダメージを与え、召喚された棘の触手を全て消滅させる。この棘の触手は、消滅時、敵により大きなダメージを与える。",
          "stats": ["魔法ダメージ：630%", "召喚獣消滅時ダメージ(1回目)：60%", "召喚獣消滅時ダメージ(2回目)：120%"]
        },
        "ultimateSkill": {
          "name": "ガードオブトーチャー",
          "desc": "棘の蔓で縛り付け、5秒間最も近い敵から3体に魔法ダメージを与え、バインド、沈黙を付与する。棘の蔓生成時、敵に棘の触手を1体召喚する。",
          "stats": ["バインド：歩行移動ができなくなる。", "沈黙：全てのスキルが使用できなくなる。", "1秒ごとの魔法ダメージ：180%", "バインド持続時間：5秒", "沈黙持続時間：7秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "狂気の敵へのダメージ量が増加する。",
          "stats": ["ダメージ量増加：84%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Sends a tracking vine to the enemy and deals Magical Damage. [Magical DMG: 75%]",
          "enhanced": "At a set chance, summons a thorn tendril. The thorn tendril attacks nearby enemies until it dies. When a thorn tendril dies, executes an AoE Attack both ahead and behind. [Minion Magical DMG: 15%] [Minion Death First DMG: 30%] [Minion Death Second DMG: 60%]"
        },
        "normalSkill": {
          "name": "Prickly Gatekeeper",
          "desc": "Deals AoE Magical Damage to enemies and kills all summoned thorn tendrils. Thorn tendrils that die using this skill deal greater damage.",
          "stats": ["Magical DMG: 630%", "Minion Death First DMG: 60%", "Minion Death Second DMG: 120%"]
        },
        "ultimateSkill": {
          "name": "Constricting Guard",
          "desc": "Ensnares up to 3 closest enemies with briars, dealing Magical Damage for 5s, and applying Numb Feet and Silence. When the briar is created, summons 1 thorn tendril on the enemy.",
          "stats": ["Numb Feet: Can't move by walking.", "Silence: Unable to use any skills.", "Magical DMG Per Second: 180%", "Numb Feet Duration: 5s", "Silence Duration: 7s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Outgoing Damage to enemies who are Mad.",
          "stats": ["Outgoing Damage Increase: 84%"]
        }
      }
    }
  },
  {
    "name": "綾",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞冰雪花刀，造成2次魔法傷害。 [總魔法傷害：100%]",
          "enhanced": "以一定機率對敵人揮舞冰雪花刀，造成2次範圍魔法傷害。第2次攻擊降低敵人的攻擊速度。 [總魔法傷害：190%] [攻擊速度降低：20%] [攻擊速度減少持續時間：4秒]"
        },
        "normalSkill": {
          "name": "冰霰之蝶",
          "desc": "對敵人放出蝴蝶，蝴蝶會飛行一定距離後返回。蝴蝶與敵人碰撞時會多次造成魔法傷害，並降低敵人的技能傷害量。蝴蝶與敵人碰撞時，會恢復自身的SP。SP恢復效果對同一目標僅能觸發一次。",
          "stats": ["每次魔法傷害：425%", "技能傷害量減少：50%", "技能傷害量減少持續時間：6秒", "SP恢復：15%"]
        },
        "ultimateSkill": {
          "name": "滿開雪花",
          "desc": "對敵人綻放雲花。雪花對敵人造成範圍魔法傷害並給予凍傷效果。對受到傷害的隨機敵人綻放新雪花，造成範圍魔法傷害。雪花對同一目標僅會綻放一次。",
          "stats": ["凍傷：每秒造成傷害，且受到冷靜性格使者的傷害量增加。", "魔法傷害：415%", "最大重複次數：5次", "凍傷時冷靜性格使者的傷害量增加：30%", "凍傷持續時間：10秒"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "受到的爆擊傷害量減少。提升友軍冷靜性格使者的攻擊力。（該效果即使綾不在場上也會觸發。）",
          "stats": ["受到的爆擊傷害量減少：42%", "攻擊力增加：23%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "氷刃雪花を振って敵に魔法ダメージを2回与える。 [総魔法ダメージ：100%]",
          "enhanced": "一定確率で氷刃雪花を振って敵に範囲魔法ダメージを2回与える。2回目の攻撃は敵の攻撃速度を減少させる。 [総魔法ダメージ：190%] [攻撃速度減少：20%] [攻撃速度減少持続時間：4秒]"
        },
        "normalSkill": {
          "name": "あられ蝶",
          "desc": "敵に蝶を飛ばす。飛んでいった蝶は一定距離移動し、再び戻ってくる。蝶は衝突した敵に魔法ダメージを数回与え、スキルダメージ量を減少させる。 蝶が敵に衝突すると、自身のSPが回復する。SP回復効果は同じ対象に一度だけ発動する。",
          "stats": ["攻撃1回ごとの魔法ダメージ：425%", "スキルダメージ量減少：50%", "スキルダメージ量減少持続時間：6秒", "SP回復：15%"]
        },
        "ultimateSkill": {
          "name": "雪花満開",
          "desc": "敵に雪の花を咲かせる。雪の花は敵に範囲魔法ダメージを与え、凍傷を付与する。ダメージを受けたランダムな敵に新しい雪の花を咲かせ、敵に範囲魔法ダメージを与える。雪の花は同じ対象に一度だけ咲く。",
          "stats": ["凍傷：1秒ごとにダメージを受け、性格が冷静の使徒からの被ダメージ量が増加する。", "魔法ダメージ：415%", "最大繰り返し回数：5回", "凍傷時に性格が冷静の使徒から受ける被ダメージ量増加：30%", "凍傷持続時間：10秒"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "会心被ダメージ量が減少する。冷静の味方使徒の攻撃力を増加させる。(この効果はアヤがフィールドにいなくても発動する。)",
          "stats": ["被会心ダメージ量減少：42%", "攻撃力増加：23%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her Snowflake Blade, dealing Magical Damage 2 times to the enemy. [Total Magical DMG: 100%]",
          "enhanced": "At a set chance, swings her Snowflake Blade, dealing AoE Magical Damage 2 times to enemies. The second attack reduces the enemy's Attack Speed. [Total Magical DMG: 190%] [ATK SPD Reduction: 20%] [ATK SPD Reduction Duration: 4s]"
        },
        "normalSkill": {
          "name": "Ice Butterfly",
          "desc": "Sends an ice butterfly to the enemy. It flies a set distance and returns. In flight, the butterfly collides with enemies, dealing Magical Damage multiple times and reducing their Skill Damage. If the butterfly collides with an enemy, you recover your SP. SP Recovery effect activates only once on the same target.",
          "stats": ["Magical DMG Per Hit: 425%", "Skill DMG Reduction: 50%", "Skill DMG Reduction Duration: 6s", "SP Recovery: 15%"]
        },
        "ultimateSkill": {
          "name": "Frost Flower in Bloom",
          "desc": "A frost flower blooms on the enemies, dealing AoE Magical Damage and applying Freeze. Blooms a new frost flower on a random hit enemy, dealing AOE Magical Damage to surrounding ones. The frost flowers bloom only once on the same target.",
          "stats": ["Freeze: Applies damage every second and Increases Outgoing Damage from Composed Apostles.", "Magical DMG: 415%", "Max Repetition Count: 5 time(s)", "Incoming DMG Increase from Composed Apostles when in Freeze: 30%", "Freeze Duration: 10s"],
          "cooldown": "28s"
        },
        "passiveSkill": {
          "desc": "Reduces Incoming Critical Damage. Increases all allied Composed Personality Apostles Attack. (This effect activates even if Aya is not on the field.)",
          "stats": ["Incoming CRIT DMG Reduction: 42%", "ATK Increase: 23%"]
        }
      }
    }
  },
  {
    "name": "帕特拉",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人用鏟子敲擊，造成物理傷害。 [物理傷害：50%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "給我吃薄荷！",
          "desc": "對敵人用沾滿薄荷的鍋鏟捶打，造成物理傷害並給予中毒效果。",
          "stats": ["中毒：每秒受到傷害並減少傷害量。", "物理傷害：315%", "中毒持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "教主的天罰-帕特拉",
          "desc": "借助教主的力量，對敵人造成物理傷害。",
          "stats": ["物理傷害：420%"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "攻擊力增加。",
          "stats": ["攻擊力增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "フライ返しで叩きつけて敵に物理ダメージを与える。 [物理ダメージ：50%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ミントでも食らえ！",
          "desc": "フライ返しに乗せたミントを投げつけて敵に物理ダメージを与え、毒を付与する",
          "stats": ["毒：1秒ごとにダメージを受け、攻撃力が減少する。", "物理ダメージ：315%", "毒持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "教主の天罰 - パトラ",
          "desc": "教主の力を借りて敵に物理ダメージを与える。",
          "stats": ["物理ダメージ：420%"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "攻撃力が増加する",
          "stats": ["攻撃力増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Slams a spatula down, dealing Physical Damage to an enemy. [Physical DMG: 50%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Eat This Mint and Screw You!",
          "desc": "Strikes down with a mint-coated spatula, dealing Physical Damage to enemies and applying Poison.",
          "stats": ["Poison: Applies Damage every second and reduces its Outgoing Damage.", "Physical DMG: 315%", "Poison Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "Divine Punishment of The Master - Patula",
          "desc": "Borrows the power of the Master to deal Physical Damage to an enemy.",
          "stats": ["Physical DMG: 420%"],
          "cooldown": "30s"
        },
        "passiveSkill": {
          "desc": "Increases Attack.",
          "stats": ["ATK Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "梅露娜",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲哈密瓜，造成傷害。 [魔法傷害：75%]",
          "enhanced": "以一定機率對敵人投擲頂級哈密瓜，造成傷害並給予致盲效果。 [致盲：普通攻擊失準。] [魔法傷害：100%] [致盲持續時間：3秒]"
        },
        "normalSkill": {
          "name": "來吧．梅露娜～",
          "desc": "對敵人降下5次哈密瓜雨，造成範圍魔法傷害並恢復所有友軍的HP。",
          "stats": ["總魔法傷害：105%", "HP恢復：造成傷害量的810%"]
        },
        "ultimateSkill": {
          "name": "哈隆馬斯克X",
          "desc": "對隨機敵人滾動巨型哈密瓜，造成範圍魔法傷害。到達目標後會爆炸造成傷害，並恢復剩餘HP比例最低的友軍HP。",
          "stats": ["魔法傷害：210%", "爆炸魔法傷害：210%", "HP恢復：所造成傷害量的392%"],
          "cooldown": "14秒"
        },
        "passiveSkill": {
          "desc": "增加強化攻擊機率。",
          "stats": ["強化攻擊機率增加：21%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "メロンを投げつけ、敵にダメージを与える。 [魔法ダメージ：75%]",
          "enhanced": "一定確率で高級メロンを投げつけて敵にダメージを与え、目隠しを付与する。 [目隠し：普通攻撃が命中しない。] [魔法ダメージ：100%] [目隠し持続時間：3秒]"
        },
        "normalSkill": {
          "name": "メロンに、メロメロン！",
          "desc": "メロンの雨を5回降らせて敵に魔法ダメージを与え、味方全員のHPを回復させる。",
          "stats": ["総魔法ダメージ：105%", "HP回復：与ダメージ量の810%"]
        },
        "ultimateSkill": {
          "name": "メーロンマスクX",
          "desc": "巨大メロンをランダムな敵に向かって転がし、範囲魔法ダメージを与える。目標に到達すると爆発してダメージを与え、残りHP割合が最も低い味方のHPを回復させる。",
          "stats": ["魔法ダメージ：210%", "爆発魔法ダメージ：210%", "HP回復：与ダメージ量の392%"],
          "cooldown": "14秒"
        },
        "passiveSkill": {
          "desc": "強化攻撃確率が増加する。",
          "stats": ["強化攻撃確率増加：21%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a melon, dealing Damage to the enemy. [Magical DMG: 75%]",
          "enhanced": "At a set chance, throws a premium-grade melon, dealing Damage to an enemy and applying Blindfold. [Blindfold: Normal Attacks miss.] [Magical DMG: 100%] [Blindfold Duration: 3s]"
        },
        "normalSkill": {
          "name": "When You Come, Bring Meluna!",
          "desc": "Summons Melon Rain 5 times to deal AoE Magical Damage to enemies and recovers HP of all allies.",
          "stats": ["Total Magical DMG: 105%", "HP Recovery: 810% of Damage Dealt"]
        },
        "ultimateSkill": {
          "name": "Melon Musk X",
          "desc": "Rolls a giant melon toward a random enemy, dealing AoE Magical Damage. Upon reaching the target, it explodes, dealing Damage and recovering HP for the ally with the lowest remaining HP Ratio.",
          "stats": ["Magical DMG: 210%", "Explosion Magical DMG: 210%", "HP Recovery: 392% of Damage Dealt"],
          "cooldown": "14s"
        },
        "passiveSkill": {
          "desc": "Increases Enhanced Attack Chance.",
          "stats": ["Enhanced Attack Chance Increase: 21%"]
        }
      }
    }
  },
  {
    "name": "傑德",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射咒語，造成魔法傷害。 [魔法傷害：75%]",
          "enhanced": "有一定機率攝取翡翠，獲得1層翡翠玉。獲得翡翠玉時，為自身生成魔法護盾。 [翡翠玉最大疊加數：3] [護盾：最大HP的30%] [護盾持續時間：6秒]"
        },
        "normalSkill": {
          "name": "鍺元素電熱毯",
          "desc": "根據翡翠玉的疊加，會造成更強的範圍魔法傷害。翡翠玉達到疊加上限狀態並觸發技能時，會失去所有持有的翡翠玉。",
          "stats": ["魔法傷害：475%", "翡翠玉疊加1~2層時魔法傷害增加：1.2倍", "翡翠玉疊加3層時魔法傷害增加：1.5倍"]
        },
        "ultimateSkill": {
          "name": "鍺元素探測法",
          "desc": "裂開大地讓礦物湧出，對敵人造成4次範圍魔法傷害，立即獲得3層翡翠玉並恢復SP。",
          "stats": ["總魔法傷害：1260%", "SP恢復：15%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "當翡翠玉疊加至3層時，若以強化攻擊吸收翡翠，將增加魔法攻擊力。",
          "stats": ["魔法攻擊力增加：30%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "呪文を唱えて最も近い単体対象に魔法ダメージを与える。 [魔法ダメージ：75%]",
          "enhanced": "一定確率で翡翠を摂取し、翡翠玉を1スタック獲得する。翡翠玉の獲得時、自身に魔法のシールドを生成する。 [翡翠玉の最大スタック数：3] [シールド：最大HPの30%] [シールドの持続時間：6秒]"
        },
        "normalSkill": {
          "name": "ゲルマニウム翡翠電気毛布",
          "desc": "翡翠玉のスタック数が多いほど、範囲魔法の与ダメージが増加する。最大スタック状態でスキルを発動すると、所持している翡翠玉を全て失う。",
          "stats": ["魔法ダメージ：475%", "翡翠玉1～2スタック時の魔法ダメージ：1.2倍増加", "翡翠玉3スタック時の魔法ダメージ：1.5倍増加"]
        },
        "ultimateSkill": {
          "name": "ゲルマニウム覚醒",
          "desc": "地面を割って鉱物を噴出させ、敵に範囲魔法ダメージ4回与え、翡翠玉を3スタック獲得してSPを回復する。",
          "stats": ["総魔法ダメージ：1260%", "SP回復：15%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "翡翠玉が3スタックの時に強化攻撃で翡翠を摂取すると、魔法攻撃力が増加する。",
          "stats": ["魔法攻撃力増加：30%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a spell, dealing Magical Damage to the enemy. [Magical DMG: 75%]",
          "enhanced": "At a set chance, consumes a Jadeite and obtains 1 JadeForce stack. When obtaining JadeForce, generates a Magical Shield on self. [Max JadeForce Stacks: 3] [Shield: 30% of Max HP] [Shield Duration: 6s]"
        },
        "normalSkill": {
          "name": "Germanium Electric Blanket",
          "desc": "Deals more powerful AoE Magical Damage based on JadeForce stacks. When using skills while at max JadeForce stacks, loses all owned JadeForce.",
          "stats": ["Magical DMG: 475%", "Magical DMG Multiplier with 1-2 JadeForce stacks: 1.2x", "Magical DMG Multiplier with 3 JadeForce stacks: 1.5x"]
        },
        "ultimateSkill": {
          "name": "Germanium Rain",
          "desc": "Splits the ground, causing minerals to shoot out and deals AoE Magical Damage to enemies 4 times, instantly earning 3 JadeForce stacks and recovering SP.",
          "stats": ["Total Magical DMG: 1260%", "SP Recovery: 15%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "At 3 JadeForce stacks, consuming jade with an Enhanced Attack increases Magical Attack.",
          "stats": ["Magical ATK Increase: 30%"]
        }
      }
    }
  },
  {
    "name": "艾斯皮",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人射出燭火，造成魔法傷害。 [魔法傷害：75%]",
          "enhanced": "以一定機率對敵人連續射出2次燭火，造成魔法傷害。 [總魔法傷害：125%]"
        },
        "normalSkill": {
          "name": "搖曳幽燭",
          "desc": "對敵人釋放幽靈燭火，造成2次魔法傷害並給予沉默效果。",
          "stats": ["沉默：無法使用任何技能。", "總魔法傷害：1070%", "沉默持續時間：10秒"]
        },
        "ultimateSkill": {
          "name": "哇～喔！",
          "desc": "瞬間移動後，對敵人造成魔法傷害，並減少其SP。",
          "stats": ["魔法傷害：420%", "SP減少：79.2%"],
          "cooldown": "12秒"
        },
        "passiveSkill": {
          "desc": "當HP降至100%以下時，在一定時間內額外增加每秒SP恢復量。",
          "stats": ["每秒額外SP恢復量：34%", "每秒額外SP恢復量持續時間：10秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "ろうそくを飛ばし、敵に魔法ダメージを与える。 [魔法ダメージ：75%]",
          "enhanced": "一定確率でろうそくを2本飛ばし、敵に魔法ダメージを与える。 [総魔法ダメージ：125%]"
        },
        "normalSkill": {
          "name": "ゆらゆら炎",
          "desc": "幽霊ろうそくを飛ばし、敵に魔法ダメージを2回与え、沈黙を付与する。",
          "stats": ["沈黙：全てのスキルが使用できなくなる。", "総魔法ダメージ：1070%", "沈黙持続時間：10秒"]
        },
        "ultimateSkill": {
          "name": "スケキヨで～す！",
          "desc": "瞬間移動した後、敵に魔法ダメージを与えSPを減少させる。",
          "stats": ["魔法ダメージ：420%", "SP減少：79.2%"],
          "cooldown": "12秒"
        },
        "passiveSkill": {
          "desc": "HPが100%未満になると一定時間、1秒ごとにSP回復量が追加で増加する。",
          "stats": ["1秒ごとにSP回復量追加：34%", "1秒ごとにSP回復量追加の持続時間：10秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a candle and deals Magical Damage to an enemy. [Magical DMG: 75%]",
          "enhanced": "At a set chance, throws 2 candles, dealing Magical Damage to an enemy. [Total Magical DMG: 125%]"
        },
        "normalSkill": {
          "name": "Flickering Candlelight",
          "desc": "Throws a phantom candle, deals Magical Damage to an enemy twice, and applies Silence.",
          "stats": ["Silence: Unable to use any skills.", "Total Magical DMG: 1070%", "Silence Duration: 10s"]
        },
        "ultimateSkill": {
          "name": "Peekaboo!",
          "desc": "Teleports and deals Magical Damage to enemies and reduces their SP.",
          "stats": ["Magical DMG: 420%", "SP Reduction: 79.2%"],
          "cooldown": "12s"
        },
        "passiveSkill": {
          "desc": "When HP drops below 100%, additionally increases SP Recovery for a set period of time.",
          "stats": ["Additional SP Recovery Per Second: 34%", "Additional SP Recovery Per Second Duration: 10s"]
        }
      }
    }
  },
  {
    "name": "雷吉",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射雷射，造成範圍物理傷害. [物理傷害：80%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "XG-雷射",
          "desc": "對敵人發射強力雷射，造成範圍物理傷害。",
          "stats": ["物理傷害：420%"]
        },
        "ultimateSkill": {
          "name": "XG-MK2雷射",
          "desc": "對直線範圍內的目標聚集發射強力雷射，造成範圍物理傷害並給予觸電效果。",
          "stats": ["觸電：攻擊速度及移動速度下降。", "物理傷害：730%", "觸電持續時間：6秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "爆擊傷害增加。",
          "stats": ["爆擊傷害增加：80%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "レーザーを発射して敵に範囲物理ダメージを与える。 [物理ダメージ：80%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "XG-レーザー",
          "desc": "強力なレーザーを発射し、敵に範囲物理ダメージを与える。",
          "stats": ["物理ダメージ：420%"]
        },
        "ultimateSkill": {
          "name": "XG-MK2 レーザー",
          "desc": "強力なレーザーをチャージして発射し、直線範囲の対象に範囲物理ダメージを与え、帯電を付与する。",
          "stats": ["感電：攻撃と移動速度が減少する。", "物理ダメージ：730%", "感電持続時間：6秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "会心ダメージが増加する。",
          "stats": ["会心ダメージ増加：80%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots a laser and deals AoE Physical Damage to enemies. [Physical DMG: 80%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "XG-Laser",
          "desc": "Shoots a powerful laser, dealing AoE Physical Damage to enemies.",
          "stats": ["Physical DMG: 420%"]
        },
        "ultimateSkill": {
          "name": "XG-MK2 Laser",
          "desc": "Gathers and shoots a powerful laser, dealing AoE Physical Damage to enemies in a straight line and applying Electrocution.",
          "stats": ["Electrocution: Reduces Attack Speed and Movement Speed.", "Physical DMG: 730%", "Electrocution Duration: 6s"],
          "cooldown": "32s"
        },
        "passiveSkill": {
          "desc": "Increases Critical Damage.",
          "stats": ["CRIT DMG Increase: 80%"]
        }
      }
    }
  },
  {
    "name": "瑪約",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人射出針刺，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "以一定機率對敵人射出毒針，造成物理傷害並給予中毒效果。 [中毒：每秒造成傷害並減少傷害量。] [物理傷害：125%] [中毒持續時間：2秒]"
        },
        "normalSkill": {
          "name": "收藏家的準則",
          "desc": "對攻擊力最高的敵人發射毒針，造成3次物理傷害並給予中毒效果。",
          "stats": ["中毒：每秒造成傷害並減少傷害量。", "總物理傷害：249.5%", "中毒持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "那個收藏品是我的。",
          "desc": "對隨機目標發射毒針，造成8次物理傷害並給予中毒效果。",
          "stats": ["中毒：每秒造成傷害並減少傷害量。", "總物理傷害：294%", "中毒持續時間：4秒"],
          "cooldown": "11秒"
        },
        "passiveSkill": {
          "desc": "強化攻擊的傷害量增加。瑪約技能所引發的中毒效果每次消失時，會給予額外的物理傷害。",
          "stats": ["中毒：每秒造成傷害並減少傷害量。", "強化攻擊傷害量增加：68%", "額外物理傷害：58%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "吹き矢を飛ばして敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "一定確率で毒矢を飛ばして敵に物理ダメージを与え、毒を付与する。 [毒：1秒ごとにダメージを受け、攻撃力が減少する] [物理ダメージ：125%] [毒持続時間：2秒]"
        },
        "normalSkill": {
          "name": "収集家のルール",
          "desc": "最も攻撃力が高い対象に毒矢を放って物理ダメージを与え、毒を付与する。",
          "stats": ["毒：1秒ごとにダメージを受け、攻撃力が減少する。", "総物理ダメージ：249.5%", "毒持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "それは私のコレクションっす。",
          "desc": "毒矢を発射し、ランダムな敵に8回物理ダメージを与え、毒を付与する。",
          "stats": ["毒：1秒ごとにダメージを受け、与ダメージ量が減少する。", "総物理ダメージ：294%", "毒持続時間：4秒"],
          "cooldown": "11秒"
        },
        "passiveSkill": {
          "desc": "強化攻撃のダメージ量が増加する。マヨのスキルで発生した毒効果が消える度に追加で物理ダメージを与える。",
          "stats": ["毒：1秒ごとにダメージを受け、与ダメージ量が減少する。", "強化攻撃のダメージ増加：68%", "追加物理ダメージ：58%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots a blowgun dart, dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "At a set chance, shoots a poisoned needle, dealing Physical Damage to a random enemy and applying Poison. Poison: Applies Damage every second and reduces its Outgoing Damage. [Physical DMG: 125%] [Poison Duration: 2s]"
        },
        "normalSkill": {
          "name": "Collector's Creed",
          "desc": "Shoots a poisoned needle at the enemy with the highest Attack, dealing Physical Damage 3 times and applies Poison.",
          "stats": ["Poison: Applies Damage every second and reduces its Outgoing Damage.", "Total Physical DMG: 249.5%", "Poison Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "That Collectible Is Mine, IMHO",
          "desc": "Shoots a poisoned needle at a random enemy, dealing Physical Damage 8 times and applies Poison.",
          "stats": ["Poison: Applies Damage every second and reduces its Outgoing Damage.", "Total Physical DMG: 294%", "Poison Duration: 4s"],
          "cooldown": "11s"
        },
        "passiveSkill": {
          "desc": "Increases Enhanced Attack Damage. Deals additional Physical Damage each time the duration of Poison caused by Mayo's skill ends.",
          "stats": ["Poison: Applies Damage every second and reduces its Outgoing Damage.", "Enhanced ATK DMG Increase: 68%", "Additional Physical DMG: 58%"]
        }
      }
    }
  },
  {
    "name": "莉茲",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞大劍，造成2次範圍物理傷害。第2次打擊造成的傷害更高。 [物理傷害：60%] [第2次攻擊物理傷害：90%]",
          "enhanced": "以一定機率對敵人造成範圍物理傷害並擊退。 [擊退：進入無法行動的狀態並被向後推。] [物理傷害：200%]"
        },
        "normalSkill": {
          "name": "淬火的一擊",
          "desc": "短暫進入專注狀態，減少受到的傷害量。專注期間，對無法行動狀態免疫，每當前排友軍受到直接傷害時，額外增加自身的物理傷害量且受到的傷害量減少。專注結束後，對敵人造成範圍物理傷害，並給予灼痛效果。",
          "stats": ["直接傷害：指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "灼痛：每秒造成傷害，並使恢復量減少。", "物理傷害：420%", "受到的傷害量減少：60%", "最大物理傷害量增加：200%", "最大受到的傷害量減少：80%", "灼痛持續時間：6秒"]
        },
        "ultimateSkill": {
          "name": "錘鍊",
          "desc": "對敵人斬擊三次，造成成範圍物理傷害。最後一擊後，會因反作用力而向後退。",
          "stats": ["物理傷害：210%", "最後一擊物理傷害：315%"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "對目標敵人造成的傷害量增加。從目標敵人受到的傷害量減少。",
          "stats": ["傷害量增加：126%", "受到的傷害量減少：46%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "大剣を薙ぎ払って敵に範囲物理ダメージを2回与える。2回目はより高いダメージを与える。 [物理ダメージ：60%] [2回目の物理ダメージ：90%]",
          "enhanced": "一定確率で敵に範囲物理ダメージを与え、ノックバックさせる。 [ノックバック：行動不能状態になり後ろへ押し戻される。] [物理ダメージ：200%]"
        },
        "normalSkill": {
          "name": "精錬の一撃",
          "desc": "少しの間力を溜め、被ダメージ量が減少する。力を溜めている間、行動不能状態の免疫を獲得し、前列の味方が直接ダメージを受けるたびに、自身の物理ダメージ量と被ダメージ量減少効果が追加で増加する。力を溜め終わると、敵に範囲物理ダメージを与え、苦痛を付与する。",
          "stats": ["直接ダメージ：直接攻撃によるダメージ（状態異常ダメージ、反射ダメージを除く）。", "苦痛：1秒ごとにダメージを受け、回復量が減少する。", "物理ダメージ：420%", "被ダメージ量減少：60%", "最大物理ダメージ量増加：200%", "最大被ダメージ量減少：80%", "苦痛の持続時間：6秒"]
        },
        "ultimateSkill": {
          "name": "鍛冶乱撃",
          "desc": "敵を3回斬りつけ、範囲物理ダメージを与える。最後の一撃の後、反動で後ろに下がる。",
          "stats": ["物理ダメージ：210%", "最後の一撃の物理ダメージ：315%"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "目標の敵への与ダメージ量が増加し、目標の敵からの被ダメージ量が減少する。",
          "stats": ["ダメージ量増加：126%", "被ダメージ量減少：46%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings a greatsword and deals AoE Physical Damage to the enemy twice. The second hit deals a higher damage. [Physical DMG: 60%] [2nd Hit Physical DMG: 90%]",
          "enhanced": "At a set chance, deals AoE Physical Damage and applies Knockback on the enemy. [Knockback: Is pushed back, becoming unable to act.] [Physical DMG: 200%]"
        },
        "normalSkill": {
          "name": "Quenching Strike",
          "desc": "Focuses briefly and reduces Incoming Damage. Whenever the allies in the front row take Direct Damage while Focused, additionally increases own Physical Damage and Incoming Damage Reduction and becomes immune to statuses that make her unable to act. When Focus ends, deals AoE Physical Damage to enemies and applies Stinging.",
          "stats": ["Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "Stinging: Reduces Recovery Amount and applies damage every second.", "Physical DMG: 420%", "Incoming DMG Reduction: 60%", "Max Physical DMG Increase: 200%", "Max Incoming DMG Reduction: 80%", "Stinging Duration: 6s"]
        },
        "ultimateSkill": {
          "name": "Forge Hammering",
          "desc": "Slashes the enemy 3 times and deals AoE Physical Damage. After the final slash, Leets moves back with recoil.",
          "stats": ["Physical DMG: 210%", "Final Hit Physical DMG: 315%"],
          "cooldown": "30s"
        },
        "passiveSkill": {
          "desc": "Increases Outgoing Damage to targeted enemies. Reduces Incoming Damage from targeted enemies.",
          "stats": ["DMG Increase: 126%", "Incoming DMG Reduction: 46%"]
        }
      }
    }
  },
  {
    "name": "謝蒂",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞鏈刀，造成物理傷害。 [物理傷害：175%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "能幫我關個燈嗎？",
          "desc": "瞬間移動後，對指定範圍內最後方的敵人造成13次物理傷害並減少其SP。首次攻擊將造成更高的傷害。",
          "stats": ["第一次物理傷害：948%", "物理傷害：1422%", "SP減少：31.5%"]
        },
        "ultimateSkill": {
          "name": "謝蒂時刻",
          "desc": "穿梭於次元間的同時，對隨機的目標造成6次物理傷害，並給予沉默效果。",
          "stats": ["沉默：無法使用任何技能。", "總物理傷害：1472.9%", "沉默持續時間：11.5秒"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "受到直接傷害時恢復SP。",
          "stats": ["直接傷害：指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "SP恢復：17"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "鎖鎌を振り回して敵に物理ダメージを与える。 [物理ダメージ：175%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "明かり消してごらん？",
          "desc": "瞬間移動して射程距離内で最も後ろにいる敵に物理ダメージを13回与え、SPを減少させる。最初の斬撃はより高いダメージを与える。",
          "stats": ["最初の打撃物理ダメージ：948%", "物理ダメージ：1422%", "SP減少：31.5%"]
        },
        "ultimateSkill": {
          "name": "タイム・オブ・ジェイディ",
          "desc": "次元を移動しながらランダムな敵に物理ダメージを6回与え、沈滅を付与する。",
          "stats": ["沈黙：全てのスキルが使用できなくなる。", "総物理ダメージ：1472.9%", "沈黙持続時間：11.5秒"],
          "cooldown": "30秒"
        },
        "passiveSkill": {
          "desc": "直接ダメージを受けるとSPが回復する。",
          "stats": ["直接ダメージ：状態異常ダメージ、反射ダメージを除く直接攻撃によるダメージを意味する。", "SP回復：17"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her scythe, dealing Physical Damage to an enemy. [Physical DMG: 175%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Can You Please Turn Off the Light?",
          "desc": "Teleports and deals Physical Damage 13 times to the farthest enemy within the designated range and reduces their SP. The first hit deals Increased Damage.",
          "stats": ["First Hit Physical DMG: 948%", "Physical DMG: 1422%", "SP Reduction: 31.5%"]
        },
        "ultimateSkill": {
          "name": "It's Shaydi Time!",
          "desc": "Moves between dimensions, deals Physical Damage to random enemies 6 times, and applies Silence.",
          "stats": ["Silence: Unable to use any skills.", "Total Physical DMG: 1472.9%", "Silence Duration: 11.5s"],
          "cooldown": "30s"
        },
        "passiveSkill": {
          "desc": "When taking Direct Damage, recovers SP.",
          "stats": ["Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "SP Recovery: 17"]
        }
      }
    }
  },
  {
    "name": "寧琉",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人舉起斧頭揮砍，造成魔法傷害。 [魔法傷害：80%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "世界樹的啟示",
          "desc": "使用世界樹的力量給予自身無敵效果，並增加所有友軍的傷害量。",
          "stats": ["無敵：對所有傷害及減益效果免疫。", "無敵持續時間：3秒", "傷害量增加：48%", "傷害量增加持續時間：8秒"]
        },
        "ultimateSkill": {
          "name": "艾爾德爾的祝福",
          "desc": "降下艾爾德爾的祝福，減少周圍友軍使者受到的傷害量，並對周圍敵人造成範圍魔法傷害。",
          "stats": ["魔法傷害：1440%", "受到的傷害量減少：26%", "受到的傷害量減少持續時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "每2秒恢復自身與周圍友軍的SP。",
          "stats": ["SP恢復量：15"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "斧を振り回して敵に魔法ダメージを与える。 [魔法ダメージ：80%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "世界樹の啓示",
          "desc": "世界樹の力を使って、自身に無敵を付与し、味方全員の探ダメージ量を増加させる。",
          "stats": ["無敵：すべてのダメージ及びデバフの免疫を得る。", "無敵の持続時間：3秒", "与ダメージ量増加：48%", "与ダメージ量増加の持続時間：8秒"]
        },
        "ultimateSkill": {
          "name": "エーダルの祝福",
          "desc": "エーダルの祝福で周囲の味方使徒の被ダメージ量を減少させ、周囲の敵に範囲魔法ダメージを与える。",
          "stats": ["魔法ダメージ：1440%", "被ダメージ量減少：26%", "被ダメージ量減少の持続時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "2秒ごとに自身と周囲の味方のSPを回復する。",
          "stats": ["SP回復量：15"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her axe upward and deals Magical Damage to the enemy. [Magical DMG: 80%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Revelation of the Yggdrasil",
          "desc": "Uses the power of Yggdrasil to grant self Invincible and increase DMG for all allies.",
          "stats": ["Invincible: Immune to all damage and debuffs.", "Invincible Duration: 3s", "DMG Increase: 48%", "DMG Increase Duration: 8s"]
        },
        "ultimateSkill": {
          "name": "Blessing of Eldor",
          "desc": "Bestows the Blessing of Eldor to reduce Incoming Damage for nearby ally Apostles and deal AoE Magical Damage to nearby enemies.",
          "stats": ["Magical DMG: 1440%", "Incoming DMG Reduction: 26%", "Incoming DMG Reduction Duration: 6s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Every 2 seconds, recovers SP for herself and nearby allies.",
          "stats": ["SP Recovery: 15"]
        }
      }
    }
  },
  {
    "name": "庫洛艾",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動手臂，造成魔法傷害。玩偶的意志觸發時，效果會有所改變。玩偶的意志觸發時，對敵人揮動手臂造成3次魔法傷害，最後一擊會造成範圍更大的魔法傷害。 [玩偶的意志：改變基本攻擊效果。] [魔法傷害：125%] [玩偶的意志魔法傷害：192%] [玩偶的意志最後一擊魔法傷害：288%]",
          "enhanced": "每進行第三次攻擊時，雙臂猛擊地面，對敵人給予挑釁效果並造成範圍魔法傷害，同時擊退敵人。玩偶的意志觸發期間，無法使用強化攻擊。 [挑釁：使目標對發動挑釁的單位進行基本攻擊。] [擊退：處於無法行動的狀態，被向後推。] [魔法傷害：300%] [挑釁持續時間：2秒]"
        },
        "normalSkill": {
          "name": "旋轉木馬",
          "desc": "騎上塞巴斯蒂安，啟動玩偶的意志一段時間，並為自身生成護盾。每次普通攻擊時，自身的普通攻擊傷害量會在一定時間內增加。普通攻擊傷害量增加效果最多可疊加9次。玩偶的意志無法被解除。",
          "stats": ["玩偶的意志：改變基本攻擊效果。", "玩偶的意志持續時間：13.6秒", "護盾：最大HP的96%", "護盾持續時間：6秒", "普通攻擊傷害增加：7%", "普通攻擊傷害增加持續時間：10秒"]
        },
        "ultimateSkill": {
          "name": "迷你塞巴斯蒂安",
          "desc": "召喚7隻迷你塞巴斯蒂安。迷你塞巴斯蒂安撞擊敵人後爆炸，造成範圍魔法傷害並給予擊退效果。",
          "stats": ["擊退：處於無法行動的狀態，被向後推。", "每隻魔法傷害：384%"],
          "cooldown": "50秒"
        },
        "passiveSkill": {
          "desc": "減少受到的普通攻擊傷害量。",
          "stats": ["普通攻擊受到的傷害量減少：52%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "腕を振って敵に魔法ダメージを与える。 ぬいぐるみの意志発動時は効果が変更される。 ぬいぐるみの意志発動すると腕を振って敵に魔法ダメージを3回与え、最後の打撃はより広範囲の魔法ダメージとなる。 [ぬいぐるの意志：基本攻撃の効果が変更される。] [魔法ダメージ：125%] [ぬいぐるの意志の魔法ダメージ：192%] [ぬいぐるの意志の最後の魔法ダメージ：288%]",
          "enhanced": "3回攻撃するごとに両腕を叩きつけて敵を挑発し、範囲魔法ダメージを与え、ノックバックさせる。ぬいぐるみの意志発動中は強化攻撃を使用できない。 [挑発：挑発してきた対象を攻撃する。] [ノックバック：行動不能になり後ろへ押し戻される。] [魔法ダメージ：300%] [挑発持続時間：2秒]"
        },
        "normalSkill": {
          "name": "メリごラウンド！",
          "desc": "セバスチャンにまたがって一定時間ぬいぐるみの意志を発動し、自身にシールドを生成する。基本攻撃を行うごとに一定時間自身の普通攻撃のダメージ量が増加する。普通攻撃のダメージ量増加効果は最大9回までスタック可能。ぬいぐるみの意志は解除できない。",
          "stats": ["ぬいぐるみの意志：基本攻撃の効果が変更される。", "ぬいぐるみの意志持続時間：13.6秒", "シールド：最大HPの96%", "シールド持続時間：6秒", "普通攻撃ダメージ量増加：7%", "普通攻撃ダメージ量増加持続時間：10秒"]
        },
        "ultimateSkill": {
          "name": "プリチーセバスチャン",
          "desc": "プリチーセバスチャンを7体召喚する。プリチーセバスチャンは敵にぶつかると爆発して範囲魔法ダメージを与え、ノックバックさせる。",
          "stats": ["ノックバック：行動不能になり後ろへ押し戻される。", "1体あたりの魔法ダメージ：384%"],
          "cooldown": "50秒"
        },
        "passiveSkill": {
          "desc": "普通攻撃の被ダメージ量が減少する。",
          "stats": ["普通攻撃の被ダメージ量減少：52%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings Sebastian's arms, dealing Magical Damage to the enemy. The effect of Doll's Will changes when activated. When activating Doll's Will, flails Sebastian's arms around, dealing Magical Damage 3 times to the enemy. The final hit deals greater AoE Magical Damage. [Doll's Will: The effect of Basic Attack changes.] [Magical DMG: 125%] [Doll's Will Magical DMG: 192%] [Doll's Will Final Hit Magical DMG: 288%]",
          "enhanced": "Every third attack, strikes down with both her arms and Taunts enemies, dealing AoE Magical Damage and applying Knockback. While Doll's Will is activated, Enhanced Attack won't be used. [Taunt: Provokes Basic Attacks on the taunt.] [Knockback: is pushed back, becoming unable to act.] [Magical DMG: 300%] [Taunt Duration: 2s]"
        },
        "normalSkill": {
          "name": "Merry-go-round",
          "desc": "Mounts Sebastian and activates Doll's Will for a set period of time, casting a Shield on herself. Increases Normal Attack Damage for every Basic Attack for a set period of time. The Normal Attack Damage Boost stacks up to 9 times. Doll's Will can't be disabled.",
          "stats": ["Doll's Will: The effect of Basic Attack changes", "Doll's Will Duration: 13.6s", "Shield: 96% of Max HP", "Shield Duration: 6s", "Normal ATK DMG Increase: 7%", "Normal ATK DMG Increase Duration: 10s"]
        },
        "ultimateSkill": {
          "name": "Le Petit Sebastian",
          "desc": "Summons 7 Le Petit Sebastians. Le Petit Sebastians bump into enemies and explode, dealing AoE Magical Damage and applying Knockback.",
          "stats": ["Knockback: is pushed back, becoming unable to act", "Magical DMG Per Le Petit Sebastian: 384%"],
          "cooldown": "50s"
        },
        "passiveSkill": {
          "desc": "Reduces Incoming Damage from Normal Attacks.",
          "stats": ["Incoming Normal ATK DMG Reduction: 52%"]
        }
      }
    }
  },
  {
    "name": "希瑟圖",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲雜物，造成傷害。 [物理傷害：110%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Flex Gun",
          "desc": "發射Flex Gun後，自身的攻擊力與攻擊速度提升。",
          "stats": ["攻擊力增加：43%", "攻擊力增加持續時間：10秒", "攻擊速度增加：43%", "攻擊速度增加持續時間：10秒"]
        },
        "ultimateSkill": {
          "name": "彈藥配送",
          "desc": "對剩餘HP比例最低的敵人發射子彈，造成物理傷害。當擊殺敵人時，將額外使用技能。",
          "stats": ["物理傷害：1020～3100%", "最多額外使用次數：2次"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "基本攻擊命中時，減少高級技能冷卻時間。",
          "stats": ["冷卻時間減少：2.4秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵にガラクタを投げつけてダメージを与える。 [物理ダメージ: 110%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "マウントガン",
          "desc": "マウントガンを発を発射すると、自身の攻撃力と攻撃速度が増加する。",
          "stats": ["攻撃力増加 : 43%", "攻撃力増加の持続時間 : 10秒", "攻撃速度増加 : 43%", "攻撃速度増加の持続時間 : 10秒"]
        },
        "ultimateSkill": {
          "name": "弾丸のお届け物で～す",
          "desc": "弾丸を発射し、残りHP割合が最も低い敵に物理ダメージを与える。敵を撃破すると、スキルを追加で使用する。",
          "stats": ["物理ダメージ ：1020～3100%", "追加使用の最大回数 : 2回"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "基本攻撃が命中すると、高学年スキルのクールタイムが減少する。",
          "stats": ["クールタイム減少:2.4秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws junk and deals damage to an enemy. [Physical DMG: 110%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Flex Gun",
          "desc": "Firing the Flex Gun increases your Attack and Attack Speed.",
          "stats": ["ATK Increase: 43%", "ATK Increase Duration: 10s", "ATK SPD Increase: 43%", "ATK SPD Increase Duration: 10s"]
        },
        "ultimateSkill": {
          "name": "Bullet Delivery",
          "desc": "Fires a bullet at the enemy with the lowest remaining HP Ratio, dealing Physical Damage. If the target is defeated, the skill can be used again.",
          "stats": ["Physical DMG: 1020-3100%", "Max Additional Uses: 2"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "When Basic Attack hits, reduces senior skill cooldown.",
          "stats": ["Cooldown Reduction: 2.4s"]
        }
      }
    }
  },
  {
    "name": "愛麗絲",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲卡片，造成魔法傷害. [魔法傷害：100%]",
          "enhanced": "每四次攻擊時，對敵人投擲整疊卡片，造成魔法傷害。 [魔法傷害：250%]"
        },
        "normalSkill": {
          "name": "阿爾克那",
          "desc": "發動簡易占卜的3種效果之一。撐傘預報：造成2次範圍魔法傷害並給予觸電效果。小心餘火：造成範圍魔法傷害並給予燒傷效果。注意刮痕：對隨機3名敵人造成4次魔法傷害並給予昏迷效果。",
          "stats": ["觸電：攻擊速度及移動速度下降。", "燒傷：每秒造成傷害。", "昏迷：無法進行任何行動。", "撐傘預報總魔法傷害：545%", "小心餘火魔法傷害：1260%", "注意刮痕總魔法傷害：455%", "觸電持續時間：4秒", "燒傷持續時間：7秒", "昏迷持續時間：3秒"]
        },
        "ultimateSkill": {
          "name": "驅邪",
          "desc": "依照最近透過阿爾克那抽出的卡片來強化並發動技能效果。若未曾使用過阿爾克那，則發動「注意刮痕」。",
          "stats": ["感電：攻擊速度及移動速度下降。", "燒傷：每秒造成傷害。", "昏迷：無法進行任何行動。", "撐傘預報總魔法傷害：790%", "小心餘火魔法傷害：2520%", "注意刮痕總魔法傷害：655%", "觸電持續時間：6秒", "燒傷持續時間：10秒", "昏迷持續時間：4秒"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "強化攻擊命中時，會降低敵人SP並恢復自身SP。",
          "stats": ["敵軍SP減少：27", "自身SP恢復：53"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "カードを投げつけて敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "4回目の攻撃時に敵にカードの束を投げつけて魔法ダメージを与える。 [魔法ダメージ：250%]"
        },
        "normalSkill": {
          "name": "アルカナ",
          "desc": "簡易占いの3つの効果のうち1つを発動する。傘持参：範囲魔法ダメージを2回与え、感電を付与する。残り火注意：範囲魔法ダメージを与え火傷を付与する。かすり傷注意：ランダムな敵3体に魔法ダメージを4回与え、気絶を付与する。",
          "stats": ["感電：攻撃速度及び移動速度が減少する。", "火傷：1秒ごとにダメージを受ける。", "気絶：行動不能状態になる。", "傘持参の総魔法ダメージ：545%", "残り火注意の魔法ダメージ：1260%", "かすり傷注意の総魔法ダメージ：455%", "感電持続時間：4秒", "火傷持続時間：7秒", "気絶持続時間：3秒"]
        },
        "ultimateSkill": {
          "name": "おまじない❤",
          "desc": "直前に引いたアルカナカードに応じてスキルを強化し、発動する。アルカナを使用していない場合は、かすり傷注意が発動する。",
          "stats": ["感電：攻撃速度及び移動速度が減少する。", "火傷：1秒ごとにダメージを受ける。", "気絶：行動不能状態になる。", "傘持参の総魔法ダメージ：790%", "残り火注意の魔法ダメージ：2520%", "かすり傷注意の総魔法ダメージ：655%", "感電持続時間：6秒", "火傷持続時間：10秒", "気絶持続時間：4秒"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "強化攻撃が命中すると、敵のSPを減少させ自分のSPが回復する。",
          "stats": ["SP減少量：27", "SP回復量：53"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Alice throws a card, dealing Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "Throws a card stack every fourth attack, dealing Magical Damage to an enemy. [Magical DMG: 250%]"
        },
        "normalSkill": {
          "name": "Arcana",
          "desc": "One of three effects of Alice's simple readings will activate. Carry Umbrella: Deals AoE Magical Damage and Electrocution twice. Careful of Embers: Deals AoE Magical Damage and Scorch. Beware of Scratches: Deals Magical Damage to 3 random enemies and Stun 4 times.",
          "stats": ["Electrocution: Reduces Attack Speed and Movement Speed.", "Scorch: Applies Damage every second.", "Stun: Becomes unable to act.", "Carry Umbrella Total Magical DMG: 545%", "Careful of Embers Magical DMG: 1260%", "Beware of Scratches Total Magical DMG: 455%", "Electrocution Duration: 4s", "Scorch Duration: 7s", "Stun Duration: 3s"]
        },
        "ultimateSkill": {
          "name": "Bless You",
          "desc": "Activates an enhanced skill effect based on the most recent Arcana card drawn. If Arcana hasn't been used previously, activates Beware of Scratches.",
          "stats": ["Electrocution: Reduces Attack Speed and Movement Speed.", "Scorch: Applies Damage every second.", "Stun: Becomes unable to act.", "Carry Umbrella Total Magical DMG: 790%", "Careful of Embers Magical DMG: 2520%", "Beware of Scratches Total Magical DMG: 655%", "Electrocution Duration: 6s", "Scorch Duration: 10s", "Stun Duration: 4s"],
          "cooldown": "26s"
        },
        "passiveSkill": {
          "desc": "When Enhanced Attack hits, reduces SP for the enemy and recovers own SP.",
          "stats": ["Enemy SP Reduction: 27", "Self SP Recovery: 53"]
        }
      }
    }
  },
  {
    "name": "蒂亞娜",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射咒語，造成魔法傷害。 [魔法傷害：75%]",
          "enhanced": "以一定機率對敵人發射強化咒文，造成魔法傷害並恢復當前HP比例最低的友軍HP。 [魔法傷害：150%] [HP恢復：造成傷害量的275%]"
        },
        "normalSkill": {
          "name": "自然治療",
          "desc": "揮動手杖，為剩餘HP比例最低的3名友軍恢復HP。將手杖插入地面，額外恢復HP。",
          "stats": ["第一次HP恢復：目標最大HP的44%", "第二次HP恢復：攻擊力的355%"]
        },
        "ultimateSkill": {
          "name": "真正的治療法",
          "desc": "向前方釋放強大的能量流，對目標造成11次範圍魔法傷害並使目標擊退。",
          "stats": ["擊退：推向後方並進入無法行動狀態", "總魔法傷害：630%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "受到的爆擊傷害量減少。提升友軍狂亂性格使者隨攻擊力。(該效果即使蒂亞娜不在場上也會觸發。)",
          "stats": ["受到的爆擊傷害量減少：42%", "攻擊力增加：23%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "呪文を発射し、敵に魔法ダメージを与える。 [魔法ダメージ：75%]",
          "enhanced": "一定確率で強化呪文を発射し、敵に魔法ダメージを与え、残りHP割合が最も低い味方を回復させる。 [魔法ダメージ：150%] [HP回復：与ダメージ量の275%]"
        },
        "normalSkill": {
          "name": "ナチュラルヒーリング",
          "desc": "杖を振って残りHP割合が最も低い味方3名のHPを回復させる。杖を地面に突き刺し、追加でHPを回復させる。",
          "stats": ["最初のHP回復：対象の最大HPの44%", "2回目のHP回復：攻撃力の355%"]
        },
        "ultimateSkill": {
          "name": "真の癒し手",
          "desc": "前方に気功波を放出し、敵に範囲魔法ダメージを11回与え、ノックバックさせる。",
          "stats": ["ノックバック：行動不能になり後ろへ押し戻される。", "総魔法ダメージ：630%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "受ける会心ダメージ量が減少する。狂気性格の味方使徒の攻撃力を増加させる。(この効果はディアナがフィールドにいなくても発動する。)",
          "stats": ["被会心ダメージ量減少：42%", "攻撃力増加：23%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a spell, dealing Magical Damage to the enemy. [Magical DMG: 75%]",
          "enhanced": "At a set chance, casts an enhanced spell, dealing Magical Damage to the enemy and recovering the ally with the lowest remaining HP Ratio. [Magical DMG: 150%] [HP Recovery: 275% of DMG Dealt]"
        },
        "normalSkill": {
          "name": "Natural Healing",
          "desc": "Swings her staff to recover HP of 3 allies with the lowest HP Ratio. Slams the staff into the ground to provide additional HP recovery.",
          "stats": ["First HP Recovery: 44% of the target's Max HP", "Second HP Recovery: 355% of ATK"]
        },
        "ultimateSkill": {
          "name": "True Healing Method",
          "desc": "Unleashes a torrent of energy forward, dealing AoE Magical Damage 11 times to enemies and applies Knockback.",
          "stats": ["Knockback: Is pushed back, becoming unable to act.", "Total Magical DMG: 630%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Reduces Incoming Critical Damage. Increases all allied Madness Personality Apostles Attack. (This effect activates even if Diana is not on the field.)",
          "stats": ["Incoming CRIT DMG Reduction: 42%", "ATK Increase: 23%"]
        }
      }
    }
  },
  {
    "name": "奈雅",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射水槍，造成傷害。 [魔法傷害：45%]",
          "enhanced": "以一定機率對敵人快速發射水槍3次，造成傷害。最後一擊將造成更大的傷害。 [魔法傷害：48%] [最後一擊魔法傷害：72%]"
        },
        "normalSkill": {
          "name": "你有洗乾淨嗎？",
          "desc": "以水柱沖洗，為剩餘HP比例最低的友軍恢復20次HP，並解除其狀態異常。在施放技能過程中可以變更一次恢復的友軍。",
          "stats": ["每次HP恢復：目標最大HP的15%＋自身攻擊力的21%"]
        },
        "ultimateSkill": {
          "name": "接受水的洗禮吧！",
          "desc": "召喚向前進發的波浪。波浪會使友軍恢復HP並對敵人造成傷害。",
          "stats": ["HP恢復：目標最大HP的32%", "魔法傷害：756%"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "高級技能冷卻時間減少。",
          "stats": ["冷卻時間減少：6.5秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "水鉄砲を発射して敵にダメージを与える。 [魔法ダメージ：45%]",
          "enhanced": "一定確率で水鉄砲を素早く3回発射して敵にダメージを与える。最後の一撃ではより大きなダメージを与える。 [魔法ダメージ：48%] [最後の一撃の魔法ダメージ：72%]"
        },
        "normalSkill": {
          "name": "それ洗ったの？？",
          "desc": "水流で洗い流し、残りHP割合が最も低い味方のHPを20回回復させ、状態異常を解除する。スキル発動中に、回復する味方を1回変更できる。",
          "stats": ["1回あたりのHP回復：対象の最大HPの15%+自分の攻撃力の21%"]
        },
        "ultimateSkill": {
          "name": "水の洗礼を受けなさい！",
          "desc": "波を召喚して味方のHPを回復し、敵にダメージを与える。",
          "stats": ["HP回復：対象の最大HPの32%", "魔法ダメージ：756%"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "高学年スキルのクールタイムが減少する。",
          "stats": ["クールタイム減少：6.5秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Fires her water gun and deals damage to the enemy. [Magical DMG: 45%]",
          "enhanced": "At a set chance, fires her water gun 3 times rapidly and deals damage to the enemy. The final hit deals greater damage. [Magical DMG: 48%] [Final Hit Magical DMG: 72%]"
        },
        "normalSkill": {
          "name": "You Call That Washing?!",
          "desc": "Cleanses with Water Stream to recover the HP of the ally with the lowest remaining HP Ratio 20 times and removes Status Effects. Can switch the recovering ally once during skill casting.",
          "stats": ["HP Recovery Per Use: 15% of the target's Max HP + 21% of own ATK"]
        },
        "ultimateSkill": {
          "name": "Accept the Baptism of Water!",
          "desc": "Summons an advancing wave. The wave recovers allies and deals Damage to enemies.",
          "stats": ["HP Recovery: 32% of the target's Max HP", "Magical DMG: 756%"],
          "cooldown": "26s"
        },
        "passiveSkill": {
          "desc": "Reduces Cooldown for Senior Skills.",
          "stats": ["Cooldown Reduction: 6.5s"]
        }
      }
    }
  },
  {
    "name": "卡洛特",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人丟擲甘蔗，造成魔法傷害。 [魔法傷害：85%]",
          "enhanced": "取代第四次攻擊，撒下魔法成長肥料，為周圍友軍恢復SP。 [SP恢復量：50]"
        },
        "normalSkill": {
          "name": "碳酸汁液發射",
          "desc": "搖晃並發射甘蔗汁。發射的汁液片刻後會掉落在自己身上。汁液會增加範圍內友軍的攻擊力，並減少受到的傷害量。",
          "stats": ["攻擊力增加：24%", "攻擊力增加持續時間：8秒", "受到的傷害量減少：39%", "受到的傷害量減少持續時間：8秒"]
        },
        "ultimateSkill": {
          "name": "汁液泵射擊！",
          "desc": "對友軍及敵人各亂射12次甘蔗汁。射向友軍的汁液恢復範圍內友軍的HP、射向敵人的汁液對範圍內敵人造成範圍魔法傷害。最後發射的汁液會對中心的敵人造成範圍魔法傷害並給予沉默效果。",
          "stats": ["沉默：無法使用任何技能。", "每發HP恢復：目標最大HP的6%", "每發魔法傷害：96%", "沉默持續時間：8秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "每2秒恢復自身與周圍友軍的SP。",
          "stats": ["SP恢復量：15"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "サトウキビを投げつけて敵に魔法ダメージを与える。 [魔法ダメージ：85%]",
          "enhanced": "4回目の攻撃の代わりに、魔法成長肥料を撒いて周囲の味方のSPを回復する。 [SP回復量：50]"
        },
        "normalSkill": {
          "name": "炭酸水液発射",
          "desc": "サトウキビの樹液を振って発射する。発射された樹液は、しばらくしてキャロットに落ちる。樹液は、範囲内の味方の攻撃力を増加させ、被ダメージ量を減少させる。",
          "stats": ["攻撃力増加：24%", "攻撃力増加の持続時間：8秒", "被ダメージ量減少：39%", "被ダメージ量減少の持続時間：8秒"]
        },
        "ultimateSkill": {
          "name": "樹液ポンプ発射！",
          "desc": "味方と敵にそれぞれサトウキビの樹液を12回ずつ発射する。味方に発射された樹液は、範囲内の味方のHPを回復させる。敵に発射された樹液は、範囲内の敵に範囲魔法ダメージを与える。最後に発射された樹液は真ん中にいる敵に範囲魔法ダメージを与え、沈黙を付与する。",
          "stats": ["沈黙：すべてのスキルが使用できなくなる。", "1発あたりのHP回復：対象の最大HPの6%", "1発あたりの魔法ダメージ：96%", "沈黙の持続時間：8秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "2秒ごとに自身と周囲の味方のSPを回復する。",
          "stats": ["SP回復量：15"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a stalk of sugarcane, dealing Magical Damage to the enemy. [Magical DMG: 85%]",
          "enhanced": "Instead of a fourth attack, sprinkles Magic Growth Fertilizer to recover SP of nearby allies. [SP Recovery: 50]"
        },
        "normalSkill": {
          "name": "Fire the Carbonated Sap",
          "desc": "Shakes and fires sugarcane sap. After a brief moment, the sap falls on herself. Increases Attack and reduces Incoming Damage for allies within AoE.",
          "stats": ["ATK Increase: 24%", "ATK Increase Duration: 8s", "Incoming DMG Reduction: 39%", "Incoming DMG Reduction Duration: 8s"]
        },
        "ultimateSkill": {
          "name": "Fire Sap Pump!",
          "desc": "Rapidly fires sugarcane sap 12 times at both allies and enemies. For sap fired at allies, recovers HP of allies within AoE. For sap fired at enemies, deals AoE Magical Damage to enemies within range. The final shot deals AoE Magical Damage to the enemy in the center and applies Silence.",
          "stats": ["Silence: Unable to use any skills.", "HP Recovery per Shot: 6% of the target's Max HP", "Magical DMG per Shot: 96%", "Silence Duration: 8s"],
          "cooldown": "32s"
        },
        "passiveSkill": {
          "desc": "Every 2 seconds, recovers SP for herself and nearby allies.",
          "stats": ["SP Recovery: 15"]
        }
      }
    }
  },
  {
    "name": "薇薇",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人操弄刀刃，造成2次魔法傷害。 [總魔法傷害：75%]",
          "enhanced": "以一定機率對敵人用刀刃下刺4次，造成範圍魔法傷害。 [總魔法傷害：260%]"
        },
        "normalSkill": {
          "name": "要來少女的身邊嗎？",
          "desc": "為自身生成能吸收傷害的水銀護盾。護盾被破壞或持續時間結束時，會降低周圍敵人的防禦力。",
          "stats": ["護盾：最大HP的72%", "護盾持續時間：6秒", "防禦力減少：40%", "防禦力減少持續時間：7秒"]
        },
        "ultimateSkill": {
          "name": "極速銀槍",
          "desc": "對指定範圍內距離最遠的敵人拋出水銀槍，造成魔法傷害，並為自身生成護盾。",
          "stats": ["魔法傷害：1340%", "護盾：最大HP的72%", "護盾持續時間：6秒"],
          "cooldown": "42秒"
        },
        "passiveSkill": {
          "desc": "基本攻擊命中時，恢復自身HP。",
          "stats": ["HP恢復：最大HP的12%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "刀を撮り敵に魔法ダメージを2回与える。 [総魔法ダメージ: 75%]",
          "enhanced": "一定の確率で刀で敵を4回刺し、範囲魔法ダメージを与える。[総魔法ダメージ: 260%]"
        },
        "normalSkill": {
          "name": "わたくしに触れられまして？",
          "desc": "自身にダメージを吸収する水銀シールドを付与する。シールドが破壊されるか、持続時間が終わると、周囲の敵の防御力を減少させる。",
          "stats": ["シールド：最大HPの72%", "シールドの持続時間：6秒", "防御力減少:40%", "防御力減少の持続時間:7秒"]
        },
        "ultimateSkill": {
          "name": "クイックシルバーランス",
          "desc": "水銀の槍を飛ばして指定範囲内で最も遠くの敵に魔法ダメージを与え、自身にシールドを生成する。",
          "stats": ["魔法ダメージ：1340%", "シールド：最大HPの72%", "シールドの持続時間：6秒"],
          "cooldown": "42秒"
        },
        "passiveSkill": {
          "desc": "基本攻撃が命中すると、自分のHPを回復する。",
          "stats": ["HP回復：最大HPの12%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Manipulates blades, dealing Magical Damage to enemies twice. [Total Magical DMG: 75%]",
          "enhanced": "At a set chance, rains down blades 4 times, dealing AoE Magical Damage to the enemy. [Total Magical DMG: 260%]"
        },
        "normalSkill": {
          "name": "Here to See Your Girl?",
          "desc": "Casts a quicksilver shield that absorbs damage on herself. If the shield is destroyed or its duration ends, it reduces the defense of nearby enemies.",
          "stats": ["Shield: 72% of Max HP", "Shield Duration: 6s", "Defense Reduction: 40%", "Defense Reduction Duration: 7s"]
        },
        "ultimateSkill": {
          "name": "Quicksilver Lance",
          "desc": "Throws the quicksilver lance, dealing Magical Damage to the furthest enemy within the designated range and casting a Shield on herself.",
          "stats": ["Magical DMG: 1340%", "Shield: 72% of Max HP", "Shield Duration: 6s"],
          "cooldown": "42s"
        },
        "passiveSkill": {
          "desc": "Recovers HP when a Normal Attack hits.",
          "stats": ["HP Recovery: 12% of Max HP"]
        }
      }
    }
  },
  {
    "name": "海莉",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞鞭子，造成範圍物理傷害。 [物理傷害：85%]",
          "enhanced": "每四次攻擊整備鞭子。在一定時間內，增加物理攻擊力與魔法防禦力。 [物理攻擊力增加：20%] [物理攻擊力增加持續時間：6秒] [魔法防禦力增加：40%] [魔法防禦力增加持續時間：6秒]"
        },
        "normalSkill": {
          "name": "不受歡迎人物",
          "desc": "揮鞭3次對敵人造成範圍物理傷害，以一定機率對命中的所有敵人給予灼痛效果。若敵人處於灼痛、燒傷、中毒狀態時，將依據目標身上的狀態異常種類數量造成更大的傷害。",
          "stats": ["灼痛：每秒造成傷害，並使恢復量減少。", "總物理傷害：643.5%", "灼痛持續時間：5秒"]
        },
        "ultimateSkill": {
          "name": "B計畫",
          "desc": "對敵人發射炸彈留下煙霧地帶，造成範圍物理持續傷害並給予致盲效果。",
          "stats": ["致盲：普通攻擊失準。", "每秒物理傷害：121.8%", "物理傷害持續時間：7秒", "致盲持續時間：10秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "當敵人處於傷痕、燒傷、中毒狀態時，根據目標受到的狀態異常種類數增加傷害。",
          "stats": ["傷害增加：53%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に鞭を振るい、範囲物理ダメージを与える。 [物理ダメージ：85%]",
          "enhanced": "4回攻撃するごとに鞭を整える。一定時間、物理攻撃力が増加し、魔法防御力が増加する。 [物理攻撃力増加：20%] [物理攻撃力増加の持続時間：6秒] [魔法防御力増加：40%] [魔法防御力増加の持続時間：6秒]"
        },
        "normalSkill": {
          "name": "受け入れ難い人物",
          "desc": "鞭を3回振り回して敵に範囲物理ダメージを与え、命中した敵全員に一定確率で苦痛を付与する。敵が苦痛、火傷、毒状態の場合、対象にかかった状態異常の種類数に応じてより大きなダメージを与える。",
          "stats": ["苦痛：1秒ごとにダメージを受け、回復量が減少する。", "総物理ダメージ：643.5%", "苦痛の持続時間：5秒"]
        },
        "ultimateSkill": {
          "name": "プランB",
          "desc": "敵に煙幕弾を発射して範囲物理持続ダメージを与え目隠しを付与する。",
          "stats": ["目隠し：普通攻撃が命中しない。", "1秒ごとの物理ダメージ：121.8%", "物理ダメージの持続時間：7秒", "目隠しの持続時間：10秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "敵が苦痛、火傷、毒状態の場合、対象にかかった状態異常の種類数に応じてより大きなダメージを与える。",
          "stats": ["ダメージ増加：53%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Whips enemies, dealing AoE Physical Damage. [Physical DMG: 85%]",
          "enhanced": "Every fourth attack reinforces the whip, increasing Physical ATK and Magical DEF for a set period of time. [Physical ATK Increase: 20%] [Physical ATK Increase Duration: 6s] [Magical DEF Increase: 40%] [Magical DEF Increase Duration: 6s]"
        },
        "normalSkill": {
          "name": "Non Grata",
          "desc": "At a set chance, whips the enemy 3 times, dealing AoE Physical Damage and applying Stinging. If the target is affected by Stinging, Scorch, or Poison, additional Damage is dealt based on the number of active Status Effects.",
          "stats": ["Stinging: Reduces Recovery Amount and applies damage every second", "Total Physical Damage: 643.5%", "Stinging Duration: 5s"]
        },
        "ultimateSkill": {
          "name": "Plan B",
          "desc": "Launches a smoke bomb, dealing continuous AoE Physical Damage and applying Blindfold.",
          "stats": ["Blindfold: Normal Attacks miss.", "Physical Damage Per Second: 121.8%", "Physical Damage Duration: 7s", "Blindfold Duration: 10s"],
          "cooldown": "32s"
        },
        "passiveSkill": {
          "desc": "If the target is affected by Stinging, Scorch, or Poison, additional Damage is dealt based on the number of active Status Effects.",
          "stats": ["Damage Increase: 53%"]
        }
      }
    }
  },
  {
    "name": "洛涅",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動劍刃，造成物理傷害 [物理傷害：150%]",
          "enhanced": "在一定的機率下進行全力攻擊，對敵人造成物理傷害並給予昏迷效果 [昏迷：無法進行任何行動] [物理傷害：150%] [昏迷持續時間：2秒]"
        },
        "normalSkill": {
          "name": "傻裡傻氣黑色行動",
          "desc": "增加攻擊力最高的1名友軍攻擊力，增加攻擊力最高的3名友軍防禦力",
          "stats": ["攻擊力增加：42%", "攻擊力增加持續時間：8秒", "防禦力增加：42%", "防禦力增加持續時間：6秒"]
        },
        "ultimateSkill": {
          "name": "投降！投降了啦……",
          "desc": "拚命投降並挑釁範圍內攻擊力最高的2名敵人，減少其攻擊力",
          "stats": ["挑釁持續時間：6秒", "攻擊力減少：21%", "攻擊力減少持續時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "防禦力增加，每秒恢復HP",
          "stats": ["防禦力增加：42%", "每秒HP恢復：最大HP的1.2%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "剣を振り回して敵に物理ダメージを与える。 [物理ダメージ：150%]",
          "enhanced": "一定確率で本気の攻撃を行い、敵に物理ダメージを与え、気絶を付与する。 [気絶：行動不能状態になる。] [気絶持続時間：2秒] [物理ダメージ：150%]"
        },
        "normalSkill": {
          "name": "チョコより甘いオペレーション",
          "desc": "最も攻撃力が高い味方1名の攻撃力を増加させる。最も攻撃力が高い味方3名の防御力を増加させる。",
          "stats": ["攻撃力増加：42%", "攻撃力増加の持続時間：8秒", "防御力増加：42%", "防御力増加の持続時間：6秒"]
        },
        "ultimateSkill": {
          "name": "降参！降参だってば……",
          "desc": "必死な様子で降参し、周囲の最も攻撃力が高い敵2体を挑発して、攻撃力を減少させる。",
          "stats": ["挑発：挑発してきた対象を攻撃する。", "挑発の持続時間：6秒", "攻撃力減少：21%", "攻撃力減少の持続時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "防御力が増加する。1秒ごとにHPが回復する。",
          "stats": ["防御力増加：42%", "1秒ごとのHP回復：最大HPの1.2%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her sword and deals Physical Damage to the enemy. [Physical DMG: 150%]",
          "enhanced": "At a set chance, unleashes an all-out attack, dealing Physical Damage to the enemy and applying Stun. [Stun: Becomes unable to act.] [Physical DMG: 150%] [Stun Duration: 2s]"
        },
        "normalSkill": {
          "name": "Amateurish Black Ops",
          "desc": "Increases the Attack of the 1 ally with the highest Attack. Increases the Defense of the 3 allies with the highest Attack.",
          "stats": ["ATK Increase: 42%", "ATK Increase Duration: 8s", "DEF Increase: 42%", "DEF Increase Duration: 6s"]
        },
        "ultimateSkill": {
          "name": "I Surrender, I Say!",
          "desc": "Desperately surrenders to Taunt the 2 enemies with the highest Attack within AoE and reduces their Attack.",
          "stats": ["Taunt: Provokes Basic Attacks on the taunt.", "Taunt Duration: 6s", "ATK Reduction: 21%", "ATK Reduction Duration: 6s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Defense. Recovers HP every second.",
          "stats": ["DEF Increase: 42%", "HP Recovery Per Second: 1.2% of Max HP"]
        }
      }
    }
  },
  {
    "name": "加薇雅",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人突起岩石，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "還……給……你……",
          "desc": "為HP比例最低的3名友軍提供護盾。護盾被破或持續時間結束時，對敵人造成戰鬥範圍傷害。",
          "stats": ["護盾：最大HP的58%", "護盾被破傷害：462%", "護盾持續時間：6秒"]
        },
        "ultimateSkill": {
          "name": "我來……保護……你……",
          "desc": "對剩餘HP比例最低的友軍給予無敵效果。",
          "stats": ["無敵：對所有傷害和減益效果免疫。", "無敵持續時間：6.2秒"],
          "cooldown": "23秒"
        },
        "passiveSkill": {
          "desc": "免疫沉默效果，當HP降至50%以下時，會為自身生成護盾。",
          "stats": ["沉默：無法使用任何技能。", "護盾：最大HP的68%", "護盾持續時間：6秒", "護盾冷卻時間：25秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "岩石を突き出し、敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "かえす⋯⋯よ",
          "desc": "残りHP割合が最も低い味方3名にシールドを付与する。シールドが破壊されるか持続時間が終了すると、敵に範囲魔法ダメージを与える。",
          "stats": ["シールド：最大HPの58%", "シールド破壊時ダメージ：462%", "シールド持続時間：6秒"]
        },
        "ultimateSkill": {
          "name": "守って⋯⋯みせる",
          "desc": "残りHP割合が最も低い味方に無敵を付与する。",
          "stats": ["無敵：全てのダメージとデバフの免疫を獲得する。", "無敵の持続時間：6.2秒"],
          "cooldown": "23秒"
        },
        "passiveSkill": {
          "desc": "沈黙の免疫を持ち、HPが50%以下になると、自分にシールドを生成する。",
          "stats": ["沈黙：全てのスキルが使用できなくなる。", "シールド：最大HPの68%", "シールドの持続時間：6秒", "シールドのクールタイム：25秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Calls forth a rock from the ground and deals Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "I'll Give It Back...",
          "desc": "Casts Shields on 3 allies with the lowest remaining HP Ratio. If a Shield is destroyed or its duration ends, deals AoE Magical Damage to enemies.",
          "stats": ["Shield: 58% of Max HP", "Shield Destruction DMG: 462%", "Shield Duration: 6s"]
        },
        "ultimateSkill": {
          "name": "Let Me Protect You...",
          "desc": "Applies Invincibility to the ally with the lowest remaining HP Ratio.",
          "stats": ["Invincible: Immune to all damage and debuffs.", "Invincible Duration: 6.2s"],
          "cooldown": "23s"
        },
        "passiveSkill": {
          "desc": "Becomes immune to Silence. When her HP drops below 50%, casts a Shield on herself.",
          "stats": ["Silence: Unable to use any skills.", "Shield: 68% of Max HP", "Shield Duration: 6s", "Shield Cooldown: 25s"]
        }
      }
    }
  },
  {
    "name": "斯皮奇",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射南瓜，造成魔法傷害。 [魔法傷害：75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "南瓜魔術",
          "desc": "對指定範圍內的3名敵人施放培育南瓜的咒語，造成3次魔法傷害。",
          "stats": ["總魔法傷害：678.2%"]
        },
        "ultimateSkill": {
          "name": "不給糖就搗蛋",
          "desc": "提高自身與攻擊力最高的友軍的爆擊傷害量。",
          "stats": ["爆擊傷害量增加：29%", "爆擊傷害量增加持續時間：12秒"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "增加爆擊機率。",
          "stats": ["爆擊機率增加：63%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "かぼちゃを発射し、敵に魔法ダメージを与える [魔法ダメージ：75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "パンプキンマジック",
          "desc": "かぼちゃを育てる呪文を唱え、射程距離内の敵3体に3回魔法ダメージを与える。",
          "stats": ["総魔法ダメージ：678.2%"]
        },
        "ultimateSkill": {
          "name": "お菓子くれなきゃいたずらしちゃうぞ～☆",
          "desc": "自身と攻撃力が最も高い味方の会心ダメージ量を増加させる。",
          "stats": ["会心ダメージ量増加：29%", "会心ダメージ量増加の持続時間：12秒"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "会心率が増加する。",
          "stats": ["会心率増加：63%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a pumpkin and deals Magical Damage to an enemy. [Magical DMG: 75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Pumpkin Magic",
          "desc": "Casts a spell to grow pumpkins, dealing Magical Damage 3 times to 3 enemies within the designated range.",
          "stats": ["Total Magical DMG: 678.2%"]
        },
        "ultimateSkill": {
          "name": "Trick or Treat",
          "desc": "Increases Critical Damage of herself and the ally with the highest Attack",
          "stats": ["CRIT DMG Increase: 29%", "CRIT DMG Increase Duration: 12s"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "Increases CRIT Rate.",
          "stats": ["CRIT Rate Increase: 63%"]
        }
      }
    }
  },
  {
    "name": "大木頭",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動拳頭，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "以一定機率對敵人用拳頭猛力捶打，造成物理傷害並給予昏迷效果。 [昏迷：無法進行任何行動。] [物理傷害：300%] [昏迷持續時間：3秒]"
        },
        "normalSkill": {
          "name": "保護自然",
          "desc": "為自身生成魔法護盾。",
          "stats": ["護盾：最大HP的47%", "護盾持續時間：3秒"]
        },
        "ultimateSkill": {
          "name": "看我這邊～",
          "desc": "對敵人挑釁後恢復HP3次。",
          "stats": ["挑釁：使目標對發動挑釁的單位進行基本攻擊。", "每次HP恢復量：攻擊力的540%", "挑釁持續時間：4秒"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "減少受到的魔法傷害量。",
          "stats": ["受到的魔法傷害量減少：46%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "拳を振るい、敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "一定確率で単体対象に拳を振り回し、物理ダメージを与え、気絶を付与する。 [気絶：行動不能になる。] [物理ダメージ：300%] [気絶持続時間：3秒]"
        },
        "normalSkill": {
          "name": "環境保護",
          "desc": "自身に魔法のシールドを生成する。",
          "stats": ["シールド：最大HPの47%", "シールド持続時間：3秒"]
        },
        "ultimateSkill": {
          "name": "あたしを見て～",
          "desc": "敵を挑発した後、HPを3回回復する。",
          "stats": ["挑発：挑発してきた対象を攻撃する。", "HP回復量：540%", "挑発の持続時間：4秒"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "魔法被ダメージ量が減少する。",
          "stats": ["魔法被ダメージ量減少：46%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her fist and deals Physical Damage to an enemy. [Physical DMG: 100%]",
          "enhanced": "At a set chance, powerfully slams her fist down, deals Physical Damage to an enemy and applies Stun. [Stun: Becomes unable to act.] [Physical DMG: 300%] [Stun Duration: 3s]"
        },
        "normalSkill": {
          "name": "Let's Protect Nature",
          "desc": "Creates a Magical Shield on self.",
          "stats": ["Shield: 47% of Max HP", "Shield Duration: 3s"]
        },
        "ultimateSkill": {
          "name": "Look at Me!",
          "desc": "Taunts a nearby target and recovers HP 3 times.",
          "stats": ["Taunt: Provokes Basic Attacks on the taunt.", "HP Recovery per instance: 540% of ATK", "Taunt Duration: 4s"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "Reduces Incoming Magical Damage",
          "stats": ["Incoming Magical DMG Reduction: 46%"]
        }
      }
    }
  },
  {
    "name": "阿萊特",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人使用盾牌衝撞，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "鐵鏟攻擊",
          "desc": "對敵人揮動鏟子造成傷害並給予昏迷效果。",
          "stats": ["昏迷：無法進行任何行動。", "物理傷害：630%", "昏迷持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "鎮壓準備",
          "desc": "為自身生成吸收傷害的護盾。護盾被破壞或持續時間結束時，對敵人造成範圍物理傷害。",
          "stats": ["護盾：最大HP的47%", "護盾破壞物理傷害：310%", "護盾持續時間：7秒"],
          "cooldown": "16秒"
        },
        "passiveSkill": {
          "desc": "增加所有防禦力。",
          "stats": ["防禦力增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "盾で叩きつけて敵にダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ショベルアタック",
          "desc": "ショベルを振り回して敵にダメージを与え気絶を付与する。",
          "stats": ["気絶：行動不能になる。", "物理ダメージ：630%", "気絶持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "鎮圧準備",
          "desc": "ダメージを吸収するシールドを自身に生成する。シールドが破壊されるか持続時間が終わると、敵に範囲物理ダメージを与える。",
          "stats": ["シールド：最大HPの47%", "シールド破壊時の物理ダメージ：310%", "シールド持続時間：7秒"],
          "cooldown": "16秒"
        },
        "passiveSkill": {
          "desc": "全ての防御力が増加する。",
          "stats": ["防御力：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoves with a shield, dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Shovel Strike",
          "desc": "Swings a shovel to deal Damage to enemies and applies Stun.",
          "stats": ["Stun: Becomes unable to act.", "Physical DMG: 630%", "Stun Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "Suppression Preparation",
          "desc": "Casts a Shield on self that absorbs Damage. If the Shield is destroyed or its duration ends, deals AoE Physical Damage to enemies.",
          "stats": ["Shield: 47% of Max HP", "Shield Destruction Physical DMG: 310%", "Shield Duration: 7s"],
          "cooldown": "16s"
        },
        "passiveSkill": {
          "desc": "Increases All Defenses.",
          "stats": ["DEF Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "莎莉",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞鐮刀，造成物理傷害。 [物理傷害：70%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "調皮的笑容",
          "desc": "迅速移動到指定範圍內最遠的敵人處揮動鐮刀，造成物理傷害。",
          "stats": ["物理傷害：400%"]
        },
        "ultimateSkill": {
          "name": "超正向手技",
          "desc": "用鐮刀對敵人造成物理傷害，並給予沉默效果。",
          "stats": ["物理傷害：840%", "沉默持續時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "爆擊增加",
          "stats": ["爆擊增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "鎌を振り回して敵に物理ダメージを与える。 [物理ダメージ：70%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "いたずらの笑み",
          "desc": "射程距離内で最も遠い敵の付近に素早く移動した後、鎌を振り回して物理ダメージを与える。",
          "stats": ["物理ダメージ：400%"]
        },
        "ultimateSkill": {
          "name": "超ポジティブトリック",
          "desc": "敵に鎌で物理ダメージを与えて沈黙を付与する。",
          "stats": ["沈黙：全てのスキルが使用できなくなる。", "物理ダメージ：840%", "沈黙持続時間：6秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "会心が増加する。",
          "stats": ["会心増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her scythe, dealing Physical Damage to the enemy. [Physical DMG: 70%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Playful Laughter",
          "desc": "Quickly moves to the farthest enemy within the designated range and swings her scythe to deal Physical Damage.",
          "stats": ["Physical DMG: 400%"]
        },
        "ultimateSkill": {
          "name": "Super-positive Hand Trick",
          "desc": "With her Scythe, deals Physical Damage to the enemy and applies Silence.",
          "stats": ["Silence: Unable to use any skills.", "Physical DMG: 840%", "Silence Duration: 6s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases CRIT Hit.",
          "stats": ["CRIT Hit Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "路易",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射咒語，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "小黃瓜油",
          "desc": "使用小黃瓜的力量，恢復剩餘HP比例最低的友軍。",
          "stats": ["HP恢復：攻擊力的18.8%"]
        },
        "ultimateSkill": {
          "name": "教主的祝福-路易",
          "desc": "借助教主的力量，恢復剩餘HP比例最低的友軍。",
          "stats": ["HP恢復：攻擊力的32%"],
          "cooldown": "16秒"
        },
        "passiveSkill": {
          "desc": "增加HP治療量",
          "stats": ["HP治療量增加：63%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "呪文を発射し、敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "キュウリ投げ",
          "desc": "キュウリの力で残りHP割合が最も低い味方を回復させる。",
          "stats": ["HP回復：攻撃力の18.8%"]
        },
        "ultimateSkill": {
          "name": "教主の祝福 - キュウイ",
          "desc": "教主の力を借りて残りHP割合が最も低い味方を回復させる。",
          "stats": ["HP回復：攻撃力の32%"],
          "cooldown": "16秒"
        },
        "passiveSkill": {
          "desc": "HP回復量が増加する。",
          "stats": ["HP回復量増加：63%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a spell, dealing Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Kyuri Oil",
          "desc": "Uses cucumber power to recover the ally with the lowest HP Ratio.",
          "stats": ["HP Recovery: 18.8% of ATK"]
        },
        "ultimateSkill": {
          "name": "Blessing of The Master - Kyuri",
          "desc": "Borrows the power of the Master to recover the ally with the lowest HP Ratio.",
          "stats": ["HP Recovery: 32% of ATK"],
          "cooldown": "16s"
        },
        "passiveSkill": {
          "desc": "Increases HP Healing",
          "stats": ["HP Heal Increase: 63%"]
        }
      }
    }
  },
  {
    "name": "伊德",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射4次雷射，造成魔法傷害。 [總魔法傷害：120%]",
          "enhanced": "每受到9次直接傷害，對敵人造成範圍魔法傷害並恢復自身HP。受到傷害的敵人攻擊力減少。強化攻擊期間，被傷害次數不會累積。 [直接傷害：指除狀態異常傷害、反射傷害以外的直接攻擊傷害] [魔法傷害：240%] [HP恢復：最大HP的20%] [攻擊力減少：30%] [攻擊力減少持續時間：6秒]"
        },
        "normalSkill": {
          "name": "模糊的邊界",
          "desc": "為自身生成護盾，並給予除伊德外的所有友軍使者保護效果。此效果最多觸發2次。",
          "stats": ["保護：當受到直接傷害導致無法戰鬥時，將其傷害無效化並賦予護盾。", "保護持續時間：10秒", "護盾：最大HP的52%", "護盾持續時間：8秒", "友軍護盾：最大HP的99%", "友軍護盾持續時間：12秒"]
        },
        "ultimateSkill": {
          "name": "你和我的宇宙",
          "desc": "對周圍敵人造成4次範圍魔法傷害並減少其SP。",
          "stats": ["總魔法傷害：1680%", "總SP減少：208"],
          "cooldown": "38秒"
        },
        "passiveSkill": {
          "desc": "回合開始時，在一定時間內給予自身無敵效果。對致盲免疫",
          "stats": ["無敵：對所有傷害和減益效果免疫", "致盲：普通攻擊失準", "無敵持續時間：7.2秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵にレーザーを4回発射して魔法ダメージを与える。 [総魔法ダメージ：120%]",
          "enhanced": "直接ダメージを9回受けるたびに、前方の敵に範囲魔法ダメージを与え、自身のHPを回復する。ダメージを受けた敵は攻撃力が減少する。強化攻撃中は、被ダメージのカウントが累積されない。 [直接ダメージ：直接攻撃によるダメージ(状態異常ダメージ、反射ダメージを除く)。] [魔法ダメージ：240%] [HP回復：最大HPの20%] [攻撃力減少：30%] [攻撃力減少の持続時間：6秒]"
        },
        "normalSkill": {
          "name": "薄暗い境界線",
          "desc": "自身にシールドを生成し、イードを除く味方全員に保護を付与する。この効果は最大2回発動する。",
          "stats": ["保護：直接ダメージによって戦闘不能になった時、そのダメージを無効化してシールドを付与する。", "保護持続時間：10秒", "シールド：最大HPの52%", "シールドの持続時間：8秒", "味方シールド：最大HPの99%", "味方シールドの持続時間：12秒"]
        },
        "ultimateSkill": {
          "name": "あなたと私の宇宙",
          "desc": "周囲の敵に範囲魔法ダメージを4回与え、SPを減少させる。",
          "stats": ["総魔法ダメージ：1680%", "SP減少量：208"],
          "cooldown": "38秒"
        },
        "passiveSkill": {
          "desc": "ウェーブ開始時に一定時間、自身に無敵を付与する。目隠しの免疫を持つ。",
          "stats": ["無敵：すべてのダメージ及びデバフの免疫を持つ。", "無敵の持続時間：7.2秒", "目隠し：普通攻撃が命中しない。"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots the laser 4 times and deals Magical Damage to the enemy. [Total Magical DMG: 120%]",
          "enhanced": "After receiving Direct Damage 9 times, deals AoE Magical Damage to enemies in front and recovers HP. Reduces Attack of Enemies that take Damage. Hit Stacks do not accumulate during Enhanced Attack. [Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.] [Magical DMG: 240%] [HP Recovery: 20% of Max HP] [ATK Reduction: 30%] [ATK Reduction Duration: 6s]"
        },
        "normalSkill": {
          "name": "Blurry Divide",
          "desc": "ED casts a Shield for herself and applies Protection to all allied Apostles excluding herself. This effect activates up to 2 times.",
          "stats": ["Protection: Negates Incapacitating Direct Damage and grants a Shield.", "Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "Protection Duration: 10s", "Shield: 52% of Max HP", "Shield Duration: 8s", "Ally Shield: 99% of Max HP", "Ally Shield Duration: 12s"]
        },
        "ultimateSkill": {
          "name": "The Universe, Yours & Mine",
          "desc": "ED deals AoE Magical Damage 4 times to enemies near her and reduces their SP.",
          "stats": ["Total Magical DMG: 1680%", "Total SP Reduction: 208"],
          "cooldown": "38s"
        },
        "passiveSkill": {
          "desc": "At the start of a wave, applies Invincible on herself for a set period of time. Becomes immune to Blindfold.",
          "stats": ["Invincible: Immune to all damage and debuffs.", "Blindfold: Normal Attacks miss.", "Invincible Duration: 7.2s"]
        }
      }
    }
  },
  {
    "name": "艾琳娜",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "發射能量球，對敵人造成3次物理傷害，最後一擊造成更大傷害。 [物理傷害：90%] [最後一擊物理傷害：60%]",
          "enhanced": "以一定機率發射過載能量球，對敵人造成傷害。 [物理傷害：600%]"
        },
        "normalSkill": {
          "name": "戰術無人機MK-2",
          "desc": "向前方釋放脈衝波，對敵人造成範圍物理傷害並給予觸電效果。",
          "stats": ["觸電：攻擊速度及移動速度下降。", "物理傷害：1260%", "觸電持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "代號D-CAT",
          "desc": "派出特殊無人機後，向周圍釋放脈衝波，對敵人造成8次範圍物理傷害。",
          "stats": ["物理傷害：1470%", "最後爆炸物理傷害：630%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "若陣容中編入艾蜜莉雅，受到的傷害量將會減少。",
          "stats": ["受到的傷害量減少：46%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "エネルギー弾を発射して敵に物理ダメージを3回与える。最後の一撃はより高いダメージを与える。 [物理ダメージ：90%] [最後の一撃の物理ダメージ：60%]",
          "enhanced": "一定確率で過充電されたエネルギー弾を発射して敵にダメージを与える。 [物理ダメージ：600%]"
        },
        "normalSkill": {
          "name": "戦術ドローンMK-2",
          "desc": "前方にパルス波を放出して、範囲物理ダメージを与え、感電を付与する。",
          "stats": ["感電：攻撃力と移動速度が減少する。", "物理ダメージ：1260%", "感電の持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "コードネーム：D-CAT",
          "desc": "特殊ドローンを送り出した後、パルス波を周囲に放出し、敵に8回範囲物理ダメージを与える。",
          "stats": ["物理ダメージ：1470%", "最後の爆破の物理ダメージ：630%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "アメリアがデッキに編成されている場合、被ダメージ量が減少する。",
          "stats": ["被ダメージ量減少：46%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots an energy sphere and deals damage to the enemy 3 times. The final hit deals greater damage. [Physical DMG: 90%] [Final Hit Physical DMG: 60%]",
          "enhanced": "At a set chance, fires an overcharged energy sphere, dealing Damage to the enemy. [Physical DMG: 600%]"
        },
        "normalSkill": {
          "name": "Tactical Drone MK-2",
          "desc": "Emits a pulse wave forward, deals AoE Physical Damage to enemies, and applies the Electrocution debuff.",
          "stats": ["Electrocution: Reduces Attack Speed and Movement Speed.", "Physical DMG: 1260%", "Electrocution Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "Codename D-CAT",
          "desc": "Sends a special drone out that emits a pulse wave, and deals AoE Physical Damage to enemies 8 times.",
          "stats": ["Physical DMG: 1470%", "Final Explosive Physical DMG: 630%"],
          "cooldown": "28s"
        },
        "passiveSkill": {
          "desc": "If Amelia is deployed in the Line-up, reduces Incoming Damage.",
          "stats": ["Incoming DMG Reduction: 46%"]
        }
      }
    }
  },
  {
    "name": "佩佩",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人用斧頭猛擊，造成範圍物理傷害。 [物理傷害：125%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "放馬過來！",
          "desc": "挑釁敵人並恢復HP，一定時間內攻擊力增加。",
          "stats": ["挑釁：使目標對發動挑釁的單位進行基本攻擊。", "HP恢復：攻擊力的365%", "攻擊力增加：47%", "攻擊力增加持續時間：6秒", "挑釁持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "魔法：離心分離",
          "desc": "對敵人快速旋轉斧頭橫掃周圍，造成11次範圍物理傷害並擊退。最後一擊將造成更大的傷害。在旋轉期間處於無敵狀態。",
          "stats": ["擊退：處於無法行動的狀態，被向後推。", "無敵：對所有傷害和減益效果免疫。", "物理傷害：453.6%", "最後一擊物理傷害：113.4%", "無敵持續時間：3秒"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "最大HP增加。",
          "stats": ["最大HP增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "斧を振るい、敵に範囲物理ダメージを与える。 [物理ダメージ：125%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "かかってきな！",
          "desc": "敵を挑発し、HPを回復する。一定時間、攻撃力が増加する。",
          "stats": ["挑発：挑発してきた対象を攻撃する。", "HP回復：攻撃力の365%", "攻撃力増加：47%", "攻撃力増加の持続時間：6秒", "挑発の持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "魔法：遠心分離",
          "desc": "高速回転して斧で周囲を薙ぎ払い、敵に範囲物理ダメージを11回与え、ノックバックさせる。最後の一撃ではより大きなダメージを与える、回転中は無敵になる。",
          "stats": ["ノックバック：行動不能になり後ろへ押し戻される。", "無敵：全てのダメージとデバフの免疫を獲得する。", "物理ダメージ：453.6%", "最後の物理ダメージ：113.4%", "無敵持続時間：3秒"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "最大HPが増加する。",
          "stats": ["最大HP増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Strikes down with her axe and deals AoE Physical Damage to enemies. [Physical DMG: 125%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Challenge Accepted!",
          "desc": "Taunts enemies and recovers HP. Increases Outgoing Attack during a set period of time.",
          "stats": ["Taunt: Provokes Basic Attacks on the taunt.", "HP Recovery: 365% of ATK", "ATK Increase: 47%", "ATK Increase Duration: 6s", "Taunt Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "Magic: Centrifugal Separation",
          "desc": "Spins rapidly, sweeping around with an axe, dealing AoE Physical Damage 11 times and applying Knockback to enemies. The Final Hit deals greater Damage. While spinning, becomes Invincible.",
          "stats": ["Knockback: is pushed back, becoming unable to act.", "Invincible: Immune to all Damage and debuffs.", "Physical DMG: 453.6%", "Final Hit Physical DMG: 113.4%", "Invincible Duration: 3s"],
          "cooldown": "20s"
        },
        "passiveSkill": {
          "desc": "Increases Max HP.",
          "stats": ["Max HP Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "希拉",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對指定範圍內距離最遠的敵人發射箭矢，造成物理傷害。 [物理傷害：150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "快速射擊",
          "desc": "對指定範圍內距離最遠的敵人以極快的速度發射5支箭矢，造成物理傷害。",
          "stats": ["總物理傷害：1215%"]
        },
        "ultimateSkill": {
          "name": "黑特帕斯卡揮棒！",
          "desc": "對指定範圍內距離最遠的敵人釋放風之靈，造成物理傷害。",
          "stats": ["物理傷害：1830%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "增加基本攻擊傷害量。",
          "stats": ["基本攻擊傷害量增加：52%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "矢を発射し、指定された射程距離内で最も離れている敵に物理ダメージを与える。 [物理ダメージ：150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ラピッドアロー",
          "desc": "矢を目に止まらない速さで5回発射し、指定範囲内で最も遠い敵に物理ダメージを与える。",
          "stats": ["総物理ダメージ：1215%"]
        },
        "ultimateSkill": {
          "name": "ヘクトパスカルスイング！",
          "desc": "風の精霊を飛ばして最も遠い単体対象に物理ダメージを与える。",
          "stats": ["物理ダメージ：1830%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "基本攻撃のダメージ量が増加する。",
          "stats": ["基本攻撃のダメージ量増加：52%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots an arrow at the furthest enemy within the designated range, dealing Physical Damage. [Physical DMG: 150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Rapid Shot",
          "desc": "Shoots 5 arrows faster than the eye can see it at the furthest enemy within the designated range and deals Physical Damage.",
          "stats": ["Total Physical DMG: 1215%"]
        },
        "ultimateSkill": {
          "name": "Hectopascal Swing!",
          "desc": "Shoots a wind elemental at the farthest enemy within the designated range, dealing Physical Damage.",
          "stats": ["Physical DMG: 1830%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Basic Attack Damage.",
          "stats": ["Basic ATK DMG Increase: 52%"]
        }
      }
    }
  },
  {
    "name": "皮可菈",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射咒語，造成魔法傷害。 [魔法傷害：60%]",
          "enhanced": "有一定機率對隨機敵人反彈2個咒語，造成魔法傷害。 [總魔法傷害：120%]"
        },
        "normalSkill": {
          "name": "限定貼紙",
          "desc": "在一定時間內，對剩餘HP比例最低的3名友軍貼上貼紙，並恢復其HP。貼紙會額外恢復友軍的HP，並增加爆擊抵抗與物理防禦力。該效果無法解除。",
          "stats": ["HP恢復：攻擊力的1440%", "貼紙HP恢復：目標最大HP的23%", "爆擊抵抗增加：22%", "物理防禦力增加：22%", "貼紙持續時間：8秒"]
        },
        "ultimateSkill": {
          "name": "你也可以成為時尚達人",
          "desc": "為最大HP最高的友軍解除所有狀態異常並進行裝扮。增加被裝扮友軍的最大HP，並在一定時間內挑釁敵人。裝扮結束時，會恢復相當於增加的最大HP的HP。該效果無法解除。",
          "stats": ["挑釁：使目標對發動挑釁的單位進行基本攻擊。", "挑釁施放過期：3秒", "挑釁持續時間：2秒", "最大HP增加：53%", "最大HP增加持續時間：8秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "所有友軍的爆擊抵抗增加。（該效果即使皮可菈不在場上也會觸發。）",
          "stats": ["爆擊抵抗增加：24%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "呪文を唱えて敵に魔法ダメージを与える。 [魔法ダメージ：60%]",
          "enhanced": "一定確率でランダムな対象に呪文を2つ唱え、魔法ダメージを与える。 [総魔法ダメージ：120%]"
        },
        "normalSkill": {
          "name": "限定ステッカー",
          "desc": "一定時間、残りHP割合が最も低い味方3名にステッカーを貼り、HPを回復する。ステッカーは味方のHPを追加で回復し、会心抵抗と物理防御力増加させる。この効果は解除できない。",
          "stats": ["HP回復：攻撃力の1440%", "ステッカーのHP回復：最大HPの23%", "会心抵抗の増加：22%", "物理防御力の増加：22%", "ステッカーの持続時間：8秒"]
        },
        "ultimateSkill": {
          "name": "これできみもファッショニスタ",
          "desc": "最大HPが最も高い味方にかかっているすべての状態異常を解除しスタイリングする。スタイリングした味方の最大HP を増加させ、一定時間、敵を挑発する。スタイリングが終わると、増加した最大HP分だけHPを回復する。この効果は解除できない。",
          "stats": ["挑発：挑発してきた対象を攻撃する。", "挑発の発動周期：3秒", "挑発の持続時間：2秒", "最大HP増加：53%", "最大HP増加の持続時間：8秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "味方全員の会心抵抗が増加する。(この効果はピコラがフィールドにいなくても発動する)",
          "stats": ["会心抵抗増加：24%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a spell, dealing Magical Damage to the enemy. [Magical DMG: 60%]",
          "enhanced": "At a set chance, flings two spells and deals Magical Damage to random targets. [Total Magical DMG: 120%]"
        },
        "normalSkill": {
          "name": "Limited-Edition Sticker",
          "desc": "Adds stickers to recover HP of 3 allies with the lowest HP Ratio for a set period of time. The stickers recover additional HP of allies, and Increase CRIT Resistance and Physical Defense. This effect can not be removed.",
          "stats": ["HP Recovery: 1440% of ATK", "Sticker HP Recovery: 23% of target's Max HP", "CRIT Resistance Increase: 22%", "Physical DEF Increase: 22%", "Sticker Duration: 8s"]
        },
        "ultimateSkill": {
          "name": "You Can Be a Fashionista Too",
          "desc": "Removes all Status Effect from the ally with the highest Max HP and Adorns them. Increases the adorned ally's Max HP and Taunts the enemy for a set period of time. When Adorn ends, restores HP equal to the increased Max HP amount. This effect cannot be removed.",
          "stats": ["Taunt: Provokes Basic Attacks on the taunt.", "Taunt Cast Interval: 3s", "Taunt Duration: 2s", "Max HP Increase: 53%", "Max HP Increase Duration: 8s"],
          "cooldown": "32s"
        },
        "passiveSkill": {
          "desc": "Increases all allies CRIT Resistance. (This effect activates even if Picora is not on the field)",
          "stats": ["CRIT Resistance Increase: 24%"]
        }
      }
    }
  },
  {
    "name": "艾蜜莉雅",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射雷射，造成範圍物理傷害。 [物理傷害：100%]",
          "enhanced": "以一定機率對敵人發射強化雷射，造成範圍物理傷害並給予觸電效果。 [觸電：攻擊速度及移動速度下降。] [物理傷害：175%] [觸電持續時間：3秒]"
        },
        "normalSkill": {
          "name": "衛星戰術轟炸",
          "desc": "對敵人發射衛星信號彈，進行雷射轟炸，造成範圍物理傷害，並給予觸電效果。",
          "stats": ["觸電：攻擊速度及移動速度下降。", "物理傷害：600%", "觸電持續時間：6秒"]
        },
        "ultimateSkill": {
          "name": "超導雷射加農砲",
          "desc": "對敵人發射最新型雷射加農砲，造成6次範圍物理傷害。過熱後會造成更大的範圍物理傷害。若敵人處於觸電狀態，則給予昏迷效果。",
          "stats": ["觸電：攻擊速度及移動速度下降。", "昏迷：無法進行任何行動。", "物理傷害：144%", "過熱後物理傷害：576%", "昏迷持續時間：3秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "對指定範圍內的隨機敵人給予觸電效果。",
          "stats": ["觸電：攻擊速度及移動速度下降。", "觸電持續時間：17秒", "影響目標數：2名", "冷卻時間：10秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵にレーザーを発射して範囲物理ダメージを与える。 [物理ダメージ: 100%]",
          "enhanced": "一定確率で敵に強化レーザーを発射して範囲物理ダメージを与え、感電を付与する。 [感電:攻撃速度と移動速度が減少する。] [物理ダメージ: 175%] [感電の持続時間:3秒]"
        },
        "normalSkill": {
          "name": "サテライト戦術爆撃",
          "desc": "サテライト信号弾を発射して、レーザー爆撃を行い、敵に範囲物理ダメージを与え、帯電を付与する。",
          "stats": ["感電：攻撃と移動速度が減少する。", "物理ダメージ：600%", "感電持続時間：6秒"]
        },
        "ultimateSkill": {
          "name": "超電導レーザーキャノン",
          "desc": "最新型のレーザーキャノンを発射し、敵に6回の範囲物理ダメージを与える。過熱後は、より広範囲の物理ダメージを与える。敵が帯電状態の場合、気絶を付与する。",
          "stats": ["感電：攻撃と移動速度が減少する。", "気絶：行動不能になる。", "物理ダメージ：144%", "過熱後物理ダメージ：576%", "気絶持続時間：3秒"],
          "cooldown": "32秒"
        },
        "passiveSkill": {
          "desc": "指定された射程距離内の敵をランダムで帯電させる。",
          "stats": ["感電：攻撃と移動速度が減少する。", "感電持続時間：17秒", "適用対象数：2体", "クールタイム：10秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots a laser and deals AoE Physical Damage to enemies. [Physical DMG: 100%]",
          "enhanced": "At a set chance, shoots an enhanced laser, deals AoE Physical Damage to enemies within the designated line range, and applies the Electrocution debuff. [Electrocution: Reduces Attack Speed and Movement Speed.] [Physical DMG: 175%] [Electrocution Duration: 3s]"
        },
        "normalSkill": {
          "name": "Satellite Tactical Bombing",
          "desc": "Shoots a satellite flare that unleashes a bombardment of lasers, deals AoE Physical Damage, and applies the Electrocution debuff.",
          "stats": ["Electrocution: Reduces Attack Speed and Movement Speed.", "Physical DMG: 600%", "Electrocution Duration: 6s"]
        },
        "ultimateSkill": {
          "name": "Superconducting Laser Cannon",
          "desc": "Shoots a state-of-the-art laser cannon, dealing AoE Physical Damage to enemies 6 times. After overheating, deals greater AoE Physical Damage. If Electrocution has been applied on the enemy, applies Stun.",
          "stats": ["Stun: Becomes unable to act.", "Electrocution: Reduces Attack Speed and Movement Speed.", "Physical DMG: 144%", "Physical DMG after Overheat: 576%", "Stun Duration: 3s"],
          "cooldown": "32s"
        },
        "passiveSkill": {
          "desc": "Applies Electrocution on a random enemy within the designated range.",
          "stats": ["Electrocution: Reduces Attack Speed and Movement Speed.", "Electrocution Duration: 17s", "Number of Targets Affected: 2", "Cooldown: 10s"]
        }
      }
    }
  },
  {
    "name": "斯諾奇",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "快速踢擊敵人，造成3次物理傷害。 [總物理傷害：225%]",
          "enhanced": "每進行3次普通攻擊，就會飛向距離友軍陣營最接近的敵軍前方，進行下一波攻擊，對其造成範圍物理傷害，並以一定機率再發動一次強化攻擊，連續發動時，發動機率將會降低。 [物理傷害：350%]"
        },
        "normalSkill": {
          "name": "非法豆漿",
          "desc": "喝下隨身攜帶的麥芽豆奶，賦予前排友軍護盾。當護盾遭破壞或持續時間耗盡時，會減少周圍敵人的物理防禦力。當接近自身的敵人達3名以上時，每秒恢復自身HP。",
          "stats": ["護盾：最大HP的52%", "護盾持續時間：6秒", "物理防禦力減少：50%", "物理防禦力減少持續時間：5秒", "持續HP恢復：攻擊力的460%", "恢復持續時間：6秒"]
        },
        "ultimateSkill": {
          "name": "佔領區域",
          "desc": "跳高後往下踹擊。以自身為中心，對周遭敵軍造成範圍物理傷害，給予擊退效果。當接近自身的敵軍達3名以上時，增加物理傷害及擊退距離。",
          "stats": ["擊退：處於無法行動的狀態，被向後推。", "物理傷害：1080%", "強化物理傷害：2160%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "強化攻擊時，自身造成的傷害量增加，受到的傷害量減少。",
          "stats": ["傷害量增加：80%", "傷害量增加持續時間：3秒", "受到的傷害量減少：26%", "受到的傷害量減少持續時間：3秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵を素早く蹴り、物理ダメージを3回与える。 [総物理ダメージ：225%]",
          "enhanced": "普通攻撃を3回行うごとに、味方陣営から最も近い敵に向かって前方へ飛び蹴りを放ち、範囲物理ダメージを与える。強化攻撃は一定確率でもう一度発動し、連続で発動するたびに発動確率が減少する。 [物理ダメージ：350%]"
        },
        "normalSkill": {
          "name": "違法豆乳",
          "desc": "所持している闇豆乳を飲み、前列の味方にシールドを付与する。シールドが破壊されるか、持続時間が終わると、周囲の敵の物理防御力を減少させる。自身と近接する敵が3体以上の場合、1秒ごとに自身のHPを回復する。",
          "stats": ["シールド：最大HPの52%", "シールドの持続時間：6秒", "物理防御力減少：50%", "物理防御力減少の持続時間：5秒", "持続HP回復：攻撃力の460%", "回復の持続時間：6秒"]
        },
        "ultimateSkill": {
          "name": "エリア占拠",
          "desc": "高く跳び上がって地面を踏みつけ、自身を中心とする周囲の敵に範囲物理ダメージを与え、ノックバックさせる。自身と近接する敵が3体以上の場合、物理ダメージとノックバック距離が増加する。",
          "stats": ["ノックバック：行動不能状態になり後ろへ押し戻される。", "物理ダメージ：1080%", "強化物理ダメージ：2160%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "強化攻撃時、自身のダメージ量が増加し、被ダメージ量が減少する。",
          "stats": ["ダメージ量増加：80%", "ダメージ量増加の持続時間：3秒", "被ダメージ量減少：26%", "被ダメージ量減少の持続時間：3秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Delivers 3 rapid kicks, dealing Physical Damage. [Total Physical DMG: 225%]",
          "enhanced": "For every third Normal Attack, performs a flying kick at the enemy closest to the ally formation, dealing AoE Physical Damage. Enhanced Attack can trigger again at a set chance, with the probability reduced for consecutive activations. [Physical DMG: 350%]"
        },
        "normalSkill": {
          "name": "Illegal Soy Milk",
          "desc": "Drinks the illegal soy milk in her possession to grant a Shield to Front Row allies. If the Shield is destroyed or its Duration ends, reduces the Physical Defense of nearby enemies. If 3 or more enemies are close to her, recovers her own HP every second.",
          "stats": ["Shield: 52% of Max HP", "Shield Duration: 6s", "Physical DEF Reduction: 50%", "Physical DEF Reduction Duration: 5s", "Continuous HP Recovery: 460% of ATK", "Recover Duration: 6s"]
        },
        "ultimateSkill": {
          "name": "Territorial Occupation",
          "desc": "Leaps high and stomps the ground, dealing AoE Physical Damage and Knockback. If 3 or more enemies are nearby. Physical Damage and Knockback Range are increased.",
          "stats": ["Knockback: is pushed back, becoming unable to act.", "Physical DMG: 1080%", "Enhanced Physical DMG: 2160%"],
          "cooldown": "28s"
        },
        "passiveSkill": {
          "desc": "When using an Enhanced Attack, increases her own Damage and reduces Incoming Damage.",
          "stats": ["DMG Increase: 80%", "DMG Increase Duration: 3s", "Incoming DMG Reduction: 26%", "Incoming DMG Reduction Duration: 3s"]
        }
      }
    }
  },
  {
    "name": "貝魯",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲斧頭，造成物理傷害。 [物理傷害：75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "斧頭飛過去囉！",
          "desc": "對隨機敵人投擲3把斧頭，造成物理傷害。最後一擊將造成更大的傷害。",
          "stats": ["物理傷害：126%", "最後一擊物理傷害：210%"]
        },
        "ultimateSkill": {
          "name": "教主的天罰-貝魯",
          "desc": "借助教主的力量，對敵人造成物理傷害。",
          "stats": ["物理傷害：420%"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "提升攻擊速度。",
          "stats": ["攻擊速度提升：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "斧を投げつけ、敵に物理ダメージを与える。 [物理ダメージ：75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "斧が飛ぶよ〜",
          "desc": "斧を3個投げ、ランダムな敵に物理ダメージを与える。最後の一撃はより大きなダメージを与える。",
          "stats": ["物理ダメージ：126%", "最後の一撃の物理ダメージ：210%"]
        },
        "ultimateSkill": {
          "name": "教主の天罰 - ベル",
          "desc": "教主の力を借りて敵に物理ダメージを与える。",
          "stats": ["物理ダメージ：420%"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "攻撃速度が増加する。",
          "stats": ["攻撃速度增加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws her axe and deals Physical Damage to an enemy. [Physical DMG: 75%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Take This Axe!",
          "desc": "Throws three axes at a random enemy, dealing Physical Damage. The final hit deals greater Damage.",
          "stats": ["Physical DMG: 126%", "Final Hit Physical DMG: 210%"]
        },
        "ultimateSkill": {
          "name": "Divine Punishment of The Master - Veroo",
          "desc": "Borrows the power of the Master to deal Physical Damage to an enemy.",
          "stats": ["Physical DMG: 420%"],
          "cooldown": "26s"
        },
        "passiveSkill": {
          "desc": "Increases Attack Speed.",
          "stats": ["ATK SPD Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "佩斯塔",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人使用吉他劈砍，造成物理傷害。 [物理傷害：150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "搖滾與和平！",
          "desc": "演奏搖滾樂，每秒給予範圍內的敵人噪音效果，並解除敵人身上所有的增益效果。",
          "stats": ["噪音：減少造成的傷害量。", "噪音持續時間：7.3秒"]
        },
        "ultimateSkill": {
          "name": "聚光燈！",
          "desc": "三盞照明照耀於自身，根據各照明差異所受的效果也不同。",
          "stats": ["紅色照明：防禦力增加36%，持續10秒", "綠色照明：攻擊力增加72%，持續10秒", "藍色照明：攻擊速度增加41%，持續10秒"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "增加基本攻擊傷害量。",
          "stats": ["基本攻擊傷害量增加：52%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "ギターで敵を叩きつけダメージを与える。 [物理ダメージ：150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ロックンピース！",
          "desc": "ロックを演奏し、範囲内の対象にノイズを付与し、対象に掛かっているバフを解除する。",
          "stats": ["ノイズ：与ダメージ量が減少する。", "ノイズの持続時間：7.3秒"]
        },
        "ultimateSkill": {
          "name": "スポットライト",
          "desc": "フェスタに3つの照明を当て、照明の色に応じて異なる効果を付与する。",
          "stats": ["赤い照明：10秒間、防御力増加36%", "緑の照明：10秒間、攻撃力増加72%", "青い照明：10秒間、攻撃速度増加41%"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "基本攻撃のダメージ量が増加する。",
          "stats": ["基本攻撃のダメージ量増加：52%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Strikes down the enemy with a guitar, dealing Physical Damage. [Physical DMG: 150%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Rock and Peace!",
          "desc": "Puts on a rock performance, applies the Noise debuff to all enemies within range every second, and removes all beneficial buffs from them.",
          "stats": ["Noise: Reduces Outgoing Damage.", "Noise Duration: 7.3s"]
        },
        "ultimateSkill": {
          "name": "Spotlight",
          "desc": "Three lights shine on her and she receives effects from each light.",
          "stats": ["Red Light: Increases DEF by 36% for 10s", "Green Light: Increases ATK by 72% for 10s", "Blue Light: Increases ATK SPD by 41% for 10s"],
          "cooldown": "20s"
        },
        "passiveSkill": {
          "desc": "Increases Basic Attack Damage.",
          "stats": ["Basic ATK DMG Increase: 52%"]
        }
      }
    }
  },
  {
    "name": "喬菲",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動斧頭，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "喵～",
          "desc": "對敵人大聲怒吼，造成3次範圍物理傷害。",
          "stats": ["總物理傷害：415.8%"]
        },
        "ultimateSkill": {
          "name": "嗷嗚汪！",
          "desc": "對敵人揮動雙臂，造成10次物理傷害。",
          "stats": ["總物理傷害：1302%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "爆擊增加。",
          "stats": ["爆擊增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "斧を振り回して敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ニャオ〜",
          "desc": "大声を出して敵に範囲物理ダメージを3回与える。",
          "stats": ["総物理ダメージ：415.8%"]
        },
        "ultimateSkill": {
          "name": "グルル〜、ワン！",
          "desc": "両腕を振り回して敵に物理ダメージを10回与える。",
          "stats": ["総物理ダメージ：1302%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "会心が増加する。",
          "stats": ["会心増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her axe, dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Meow!",
          "desc": "Shouts loudly, dealing AoE Physical Damage 3 times to enemies.",
          "stats": ["Total Physical DMG: 415.8%"]
        },
        "ultimateSkill": {
          "name": "Grrr-Woof!",
          "desc": "Flails her both arms, dealing Physical Damage 10 times to the enemy.",
          "stats": ["Total Physical DMG: 1302%"],
          "cooldown": "28s"
        },
        "passiveSkill": {
          "desc": "Increases CRIT Hit.",
          "stats": ["CRIT Hit Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "萊薇",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動短刀，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "極速切割",
          "desc": "對敵人迅速揮動短刀，造成3次物理傷害。最後一擊將造成更高的傷害。",
          "stats": ["物理傷害：570%", "最後一擊物理傷害：380%"]
        },
        "ultimateSkill": {
          "name": "腥紅收割",
          "desc": "對敵人瞬間拔出隱藏的長刀，迅速衝刺，造成範圍物理傷害。",
          "stats": ["物理傷害：860%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "爆擊機率增加。使用高級技能後攻擊速度提高。",
          "stats": ["爆擊機率增加：63%", "攻擊速度提升：73%", "攻擊速度提升持續時間：6秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "ダガーを振るい、敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "ニンブルカッター",
          "desc": "ダガーを素早く振り回して敵に物理ダメージを3回与える。最後の斬撃はより大きなダメージを与える。",
          "stats": ["物理ダメージ：570%", "最後の打撃の物理ダメージ：380%"]
        },
        "ultimateSkill": {
          "name": "レヴィ・ザ・レッド",
          "desc": "切り札の長刀を一瞬で抜刀し、素早くダッシュして敵に範囲物理ダメージを与える。",
          "stats": ["物理ダメージ：860%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "会心率が増加する。高学年スキル使用後、攻撃速度も増加する。",
          "stats": ["会心率増加：63%", "攻撃速度増加：73%", "攻撃速度増加の持続時間：6秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her dagger, dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Nimble Cut",
          "desc": "Quickly swings her dagger, dealing Physical Damage 3 times to the enemy. The final hit deals greater Damage.",
          "stats": ["Physical DMG: 570%", "Final Hit Physical DMG: 380%"]
        },
        "ultimateSkill": {
          "name": "Levi the Crimson",
          "desc": "Quickly unsheathes a hidden blade and dashes to deal AoE Physical Damage to enemies.",
          "stats": ["Physical DMG: 860%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases CRIT Rate. After using a senior skill, increases ATK Speed.",
          "stats": ["CRIT Rate Increase: 63%", "ATK SPD Increase: 73%", "ATK SPD Increase Duration: 6s"]
        }
      }
    }
  },
  {
    "name": "卡蓮",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射咒語，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "胡蘿蔔治療術",
          "desc": "使用胡蘿蔔的力量，恢復剩餘HP比例最低的友軍。",
          "stats": ["HP恢復：自身最大HP的15.7%"]
        },
        "ultimateSkill": {
          "name": "請搖晃胡蘿蔔",
          "desc": "搖晃胡蘿蔔，為HP最低的3名友軍恢復3次HP。",
          "stats": ["每次HP恢復：自身最大HP的31.5%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "增加HP治療量。",
          "stats": ["HP治療量增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "呪文を唱えて敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "キャロットヒーリング",
          "desc": "ニンジンの力で残りHP割合が最も低い味方を回復させる。",
          "stats": ["HP回復：自身の最大HPの15.7%"]
        },
        "ultimateSkill": {
          "name": "シェイク・ア・キャロット",
          "desc": "ニンジンを振ってHPが最も少ない味方3名のHPを3回回復させる。",
          "stats": ["1回あたりのHP回復：自身の最大HPの31.5%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "HP治癒量が増加する。",
          "stats": ["HP治癒量増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a spell, dealing Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Carrot Healing",
          "desc": "Uses carrot power to recover the ally with the lowest HP Ratio.",
          "stats": ["HP Recovery: 15.7% of own Max HP"]
        },
        "ultimateSkill": {
          "name": "Carrot Cleanse",
          "desc": "Shakes her carrot, recovering HP for 3 allies with the lowest HP 3 times.",
          "stats": ["HP Recovery Per Use: 31.5% of own Max HP"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "Increases HP Healing.",
          "stats": ["HP Heal Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "布蘭切",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲藍玫瑰，造成魔法傷害。 [魔法傷害：60%]",
          "enhanced": "有一定機率投擲藍玫瑰，對敵人造成魔法傷害並給予苦痛效果。 [苦痛：每秒造成傷害，並使恢復量減少。] [魔法傷害：180%] [苦痛持續時間：4秒]"
        },
        "normalSkill": {
          "name": "同步玫瑰",
          "desc": "對敵人發射可以彈跳至多3次的同步玫瑰，造成魔法傷害。同步玫瑰會優先攻擊未被攻擊的目標。",
          "stats": ["魔法傷害：588%", "最後一擊傷害：882%"]
        },
        "ultimateSkill": {
          "name": "藍鳥花園",
          "desc": "對敵人投擲三次同步玫瑰。最後一擊造成範圍絕對爆擊傷害。所有攻擊給予沉默效果。",
          "stats": ["沉默：無法使用任何技能。", "沉默持續時間：6秒", "總魔法傷害：1008%", "最後一擊總魔法傷害：1512%"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "技能傷害量增加。免疫沉默效果。",
          "stats": ["沉默：無法使用任何技能。", "技能傷害量增加：53%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に青い薔薇を飛ばして魔法ダメージを与える。 [魔法ダメージ：60%]",
          "enhanced": "一定確率で青い薔薇を飛ばして敵に魔法ダメージを与え、苦痛を付与する。 [苦痛：回復量が減少し、1秒ごとにダメージを受ける。] [魔法ダメージ：180%] [苦痛の持続時間：4秒]"
        },
        "normalSkill": {
          "name": "シンクローズ",
          "desc": "敵に最大3回跳ね返るシンクローズを投げつけ、魔法ダメージを与える。シンクローズは攻撃していない対象を優先的に攻撃する。",
          "stats": ["魔法ダメージ：588%", "最後の一撃のダメージ：882%"]
        },
        "ultimateSkill": {
          "name": "青い鳥の花園",
          "desc": "敵にシンクローズを3回放つ。最後の一撃は、確定会心範囲ダメージを与える。全ての攻撃は沈黙を付与する。",
          "stats": ["沈黙：すべてのスキルが使用できなくなる。", "沈黙の持続時間：6秒", "総魔法ダメージ：1008%", "最後の一撃の総魔法ダメージ：1512%"],
          "cooldown": "20秒"
        },
        "passiveSkill": {
          "desc": "スキルダメージ量が増加する。沈黙に免疫を得る。",
          "stats": ["沈黙：全てのスキルが使用できなくなる。", "スキルダメージ量増加：53%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a blue rose and deals Magical Damage to the enemy. [Magical DMG: 60%]",
          "enhanced": "At a set chance, throws a blue rose, dealing Magical Damage to the enemy and applying Stinging. [Stinging: Reduces Recovery Amount and applies damage every second.] [Magical DMG: 180%] [Stinging Duration: 4s]"
        },
        "normalSkill": {
          "name": "Sync Rose",
          "desc": "Shoots a Sync Rose that ricochets up to 3 times and deals Magical Damage to the enemy. Sync Rose prioritizes targets who have not been attacked.",
          "stats": ["Magical DMG: 588%", "Final Hit DMG: 882%"]
        },
        "ultimateSkill": {
          "name": "Blue Bird Garden",
          "desc": "Shoots 3 Sync Roses to the enemy. Deals Guaranteed AoE Critical Damage on the final hit. All hits apply Silence.",
          "stats": ["Silence: Unable to use any skills.", "Total Magical DMG: 1008%", "Total Final Hit Magical DMG: 1512%", "Silence Duration: 6s"],
          "cooldown": "20s"
        },
        "passiveSkill": {
          "desc": "Increases Skill Damage. Becomes immune to Silence.",
          "stats": ["Silence: Unable to use any skills.", "Skill DMG Increase: 53%"]
        }
      }
    }
  },
  {
    "name": "優米",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射咒語，造成魔法傷害。 [魔法傷害：60%]",
          "enhanced": "以一定機率隨機對2名敵人降下星光，造成魔法傷害並降低攻擊速度，同時恢復自身與HP比例最低的友軍。 [魔法傷害：300%] [攻擊速度降低：40%] [攻擊速度降低持續時間：3秒] [自身HP恢復：最大HP的16%] [目標HP恢復：目標最大HP的16%]"
        },
        "normalSkill": {
          "name": "向月花",
          "desc": "在一定時間內，召喚月光照耀最大HP最高的友軍。月光內的友軍防禦力增加，敵人攻擊力減少。月光持續期間，優米的基本攻擊將替換為強化攻擊。",
          "stats": ["友軍防禦力增加：31%", "防禦力增加持續時間：6秒", "敵軍攻擊力減少：41%", "攻擊力減少持續時間：6秒", "月光持續時間：8秒"]
        },
        "ultimateSkill": {
          "name": "至誠迎月",
          "desc": "持續一段時間召喚踏雲而行的月光。月光朝優米面對的方向緩慢前進。月光中的友軍每秒恢復SP。敵人每秒受到傷害並減少SP。",
          "stats": ["友軍SP恢復：15", "每秒魔法傷害：470%", "敵軍SP減少：20", "月光持續時間：12秒"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "所有友軍的HP恢復量增加。（該效果即使優米不在場上也會觸發。）",
          "stats": ["HP恢復量增加：23%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "呪文を発射し、敵に魔法ダメージを与える。 [魔法ダメージ：60%]",
          "enhanced": "一定確率で星光を降らせ、ランダムな敵2体に魔法ダメージを与え、攻撃速度を減少させる。追加で自身と、残りHP割合が最も低い味方を回復させる。 [魔法ダメージ：300%] [攻撃速度減少：40%] [攻撃速度減少の持続時間：3秒] [自身のHP回復：最大HPの16%] [対象のHP回復：最大HPの16%]"
        },
        "normalSkill": {
          "name": "向月葵",
          "desc": "一定時間、最大HPが最も高い味方を照らす満月を召喚する。月光の中にいる味方は防御力が増加し、敵は攻撃力が減少する。月光が持続する間、ヨミの基本攻撃は強化攻撃に変わる。",
          "stats": ["味方の防御力増加：31%", "防御力増加の持続時間：6秒", "敵の攻撃力減少：41%", "攻撃力減少の持続時間：6秒", "月光の持続時間：8秒"]
        },
        "ultimateSkill": {
          "name": "心を込めたお迎えを",
          "desc": "一定時間、雲を晴らす月光を召喚する。月光はヨミが見ている方向へゆっくりと前進する。月光の内側にいる味方は1秒ごとにSPが回復する。敵は1秒ごとにダメージを受け、SPが減少する。",
          "stats": ["味方SP回復：15", "1秒ごとの魔法ダメージ：470%", "敵SP減少：20", "月光の持続時間：12秒"],
          "cooldown": "26秒"
        },
        "passiveSkill": {
          "desc": "味方全員のHP回復量が増加する。(この効果はヨミがフィールドにいなくても発動する。)",
          "stats": ["HP回復量増加：23%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a spell, dealing Magical Damage to the enemy. [Magical DMG: 60%]",
          "enhanced": "At a set chance, drops starlight to deal Magical Damage to 2 random enemies and reduce their Attack Speed. Additionally recovers own HP and that of the ally with the lowest remaining HP ratio. [Magical DMG: 300%] [ATK SPD Reduction: 40%] [ATK SPD Reduction Duration: 3s] [Own HP Recovery: 16% of Max HP] [Target HP Recovery: 16% of the target's Max HP]"
        },
        "normalSkill": {
          "name": "Moonflower",
          "desc": "Summons a full moon that shines down on the ally with the highest Max HP for a set period of time. Increases Defense of allies bathed in moonlight and reduces Attack of enemies under the moonlight. During the time when there's moonlight, Yomi's Basic Attacks become Enhanced Attacks.",
          "stats": ["Ally DEF Increase: 31%", "DEF Increase Duration: 6s", "Enemy Reduced ATK: 41%", "Reduced ATK Duration: 6s", "Moonlight Duration: 8s"]
        },
        "ultimateSkill": {
          "name": "Devoted Reception",
          "desc": "Summons a moonlight walking on clouds for a set period of time. The moonlight slowly advances in the direction Yomi is facing. Allies within the moonlight recover SP every second. Deals Damage to Enemies every second and reduces their SP.",
          "stats": ["Ally SP Recovery: 15", "Magical DMG per sec: 470%", "Enemy SP Reduction: 20", "Moonlight Duration: 12s"],
          "cooldown": "26s"
        },
        "passiveSkill": {
          "desc": "Increases HP Recovery for all allies. (This effect activates even if Yomi is not on the field.)",
          "stats": ["HP Recovery Increase: 23%"]
        }
      }
    }
  },
  {
    "name": "希爾德",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射注射器槍，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "取代第三次攻擊，為HP比例最低的友軍恢復HP。 [HP恢復：自身最大HP的20%]"
        },
        "normalSkill": {
          "name": "芬多精能量波",
          "desc": "發射能量波，治療周圍所有友軍1次。此外，每秒恢復2名血量低於80%的治療目標的HP。",
          "stats": ["波動HP恢復：自身最大HP的24%", "持續HP恢復：自身最大HP的8.5%", "HP恢復持續時間：6秒"]
        },
        "ultimateSkill": {
          "name": "過度治療",
          "desc": "對敵人進行無差別處方，造成範圍魔法傷害。範圍內的友軍會巨大化並提升攻擊速度。",
          "stats": ["每次打擊魔法傷害：760%", "攻擊速度提升：93%", "攻擊速度提升持續時間：10.5秒"],
          "cooldown": "36秒"
        },
        "passiveSkill": {
          "desc": "解除指定範圍內1名友軍身上的所有異常狀態。",
          "stats": ["冷卻時間：9秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "銃型注射器を発射して敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "3回目の攻撃の代わりに、HP割合が最も少ない味方のHPを回復する。 [HP回復：自身の最大HPの20%]"
        },
        "normalSkill": {
          "name": "フィトンチッドウエーブ",
          "desc": "治癒のウエーブを放出し、周囲の味方全員のHPを1回回復する。追加でHPが80%未満の味方2名のHPを1秒ごとに回復する。",
          "stats": ["ウエーブのHP回復：自身の最大HPの24%", "持続HP回復：自身の最大HPの8.5%", "HP回復の持続時間：6秒"]
        },
        "ultimateSkill": {
          "name": "過剰医療",
          "desc": "敵に無差別治療を行い、範囲魔法ダメージを与える。範囲内の味方を巨大化させ、攻撃速度を増加させる。",
          "stats": ["攻撃ごとの魔法ダメージ：760%", "攻撃速度増加：93%", "攻撃速度増加の持続時間：10.5秒"],
          "cooldown": "36秒"
        },
        "passiveSkill": {
          "desc": "指定範囲内の味方1人にかかった状態異常を全て解除する。",
          "stats": ["クールタイム：9秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Fires her Syringe Gun, dealing Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "Recovers the ally with the lowest HP Ratio in lieu of her third attack. [HP Recovery: 20% of own Max HP]"
        },
        "normalSkill": {
          "name": "Phytoncide Wave",
          "desc": "Unleashes a wave and recovers the HP of all nearby allies 1 time. Additionally, recovers the HP of 2 allies with HP lower than 80% every second.",
          "stats": ["Wave HP Recovery: 24% of own Max HP", "Continuous HP Recovery: 8.5% of own Max HP", "HP Recovery Duration: 6s"]
        },
        "ultimateSkill": {
          "name": "Overtreatment",
          "desc": "Activates Indiscriminate Treatment, dealing AoE Magical Damage to enemies. Allies within range become Giant and their Attack Speed Increases.",
          "stats": ["Magical DMG per Hit: 760%", "ATK SPD Increase: 93%", "ATK SPD Increase Duration: 10.5s"],
          "cooldown": "36s"
        },
        "passiveSkill": {
          "desc": "Removes all Status Effects on an ally within the designated range.",
          "stats": ["Cooldown: 9s"]
        }
      }
    }
  },
  {
    "name": "珀榭",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲藥水，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "第四次攻擊時對隨機敵人投擲2瓶藥水，造成魔法傷害。 [總魔法傷害：250%]"
        },
        "normalSkill": {
          "name": "要用哪種藥水呢？",
          "desc": "隨機選擇3種藥水中的一種，向敵人投擲。綠色藥水：恢復HP比例最低友軍的HP。紅色藥水：隨機對敵人造成魔法傷害。黃色藥水：隨機對敵人造成魔法傷害，並給予昏迷效果。",
          "stats": ["昏迷：無法進行任何行動。", "綠色藥水HP恢復：攻擊力的700~1400%", "紅色藥水魔法傷害：1210~2120%", "黃色藥水魔法傷害：1320~1640%", "黃色藥水昏迷持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "馬鈴薯與地瓜！",
          "desc": "向隨機兩名目標投擲可疑藥水，給予變異效果。",
          "stats": ["變異：使目標變成物品並且無法進行任何行動。", "變異持續時間：5.8秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "減少受到技能攻擊的傷害量。",
          "stats": ["技能攻擊受到的傷害量減少：52%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "ポーションを投げつけて敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "4回目の攻撃では、ポーションを2個投げつけてランダムな敵に魔法ダメージを与える。 [総魔法ダメージ：250%]"
        },
        "normalSkill": {
          "name": "どれにしようかな？",
          "desc": "ランダムに3つのポーションから1つを選択し、敵に投げつける。緑のポーションはHP割合が最も少ない味方を回復する。赤のポーションはランダムな敵に魔法ダメージを与える。黄のポーションはランダムな敵に魔法ダメージを与え、気絶を付与する。",
          "stats": ["気絶：行動不能になる。", "緑のポーションのHP回復：攻撃力の700～1400%", "赤いポーションの魔法ダメージ：1210～2120%", "黄色のポーションの魔法ダメージ：1320～1640%", "黄色のポーションの気絶持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "いももかぼちゃの仲間でしょ！",
          "desc": "ランダムな敵2体に怪しいポーションを投げつけ、変異を付与する。",
          "stats": ["変異：物体に変化し、行動不能になる。", "変異の持続時間：5.8秒"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "スキル攻撃の被ダメージ量が減少する。",
          "stats": ["スキル攻撃の被ダメージ量減少：52%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a potion, dealing Magical Damage to an enemy. [Magical DMG: 100%]",
          "enhanced": "For the fourth attack, throws 2 potions at a random enemy, dealing Magical Damage. [Total Magical DMG: 250%]"
        },
        "normalSkill": {
          "name": "Which Potion Should I Give?",
          "desc": "Randomly selects one of three potions and throws it to the enemy. Green Potion: Recovers the ally with the lowest remaining HP Ratio. Red Potion: Deals Magical Damage to a random enemy. Yellow Potion: Deals Magical Damage to a random enemy and applies Stun.",
          "stats": ["Stun: Becomes unable to act.", "Green Potion HP Recovery: 700-1400% of ATK", "Red Potion Magical DMG: 1210-2120%", "Yellow Potion Magical DMG: 1320-1640%", "Yellow Potion Stun Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "Potato Sweet Potato!",
          "desc": "Throws strange potions at two random enemies and applies the Mutate debuff on them.",
          "stats": ["Mutate: Turns into an inanimate object and becomes unable to act.", "Mutate Duration: 5.8s"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Reduces Incoming Damage from Skill Attacks.",
          "stats": ["Incoming Skill ATK DMG Reduction: 52%"]
        }
      }
    }
  },
  {
    "name": "艾舒爾",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "發射火焰咒語，對敵人造成魔法傷害並給予燒傷效果。 [燒傷：每秒受到傷害。] [魔法傷害：75%] [燒傷持續時間：2秒]",
          "enhanced": "以一定機率發射燃燒的麵包，對敵人造成魔法傷害並給予燒傷效果。若受到傷害的敵人後方一定距離內存在其他敵人，麵包碎片會彈射造成魔法傷害並給予燒傷效果。麵包碎片最多彈射2人。 [燒傷：每秒受到傷害。] [魔法傷害：100%] [第2下魔法傷害：150%] [燒傷持續時間：3秒]"
        },
        "normalSkill": {
          "name": "麵包潮流",
          "desc": "送出6個麵包，對撞擊到的敵人，造成魔法傷害。",
          "stats": ["總魔法傷害：1050%"]
        },
        "ultimateSkill": {
          "name": "流星麵包",
          "desc": "對位於中央的敵人落下巨大蛋糕，造成範圍魔法傷害並給予昏迷效果。若一定距離內存在其他敵人，切片蛋糕會彈射造成魔法傷害。切片蛋糕最多彈射3人。",
          "stats": ["昏迷：無法進行任何行動。", "昏迷持續時間：3秒", "魔法傷害：840%", "第2下魔法傷害：840%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "HP降至50%以下時，為自身生成護盾。",
          "stats": ["護盾：最大HP的68%", "護盾持續時間：6秒", "護盾冷卻時間：25秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "炎の呪文を発射して、敵に魔法ダメージを与え、火傷を付与する。 [火傷：1秒ごとにダメージを受ける。] [火傷の持続時間：2秒] [魔法ダメージ：75%]",
          "enhanced": "一定確率で燃えるパンを発射して敵に魔法ダメージを与え、火傷を付与する。ダメージを受けた敵の一定距離後ろに敵がいる場合、パンくずが跳ね返って魔法ダメージを与え、火傷を付与する。パンくずは最大2体に跳ね返る。 [火傷：1秒ごとにダメージを受ける。] [火傷の持続時間：3秒] [魔法ダメージ：100%] [2回目の魔法ダメージ：150%]"
        },
        "normalSkill": {
          "name": "パンテミック",
          "desc": "パンを6個放ち、ぶつかった敵に魔法ダメージを与える。",
          "stats": ["総魔法ダメージ：1050%"]
        },
        "ultimateSkill": {
          "name": "パンテオ",
          "desc": "真ん中にいる敵に巨大なケーキを投げ落とし、敵に範囲魔法ダメージを与え気絶を付与する。一定距離内に別の敵がいる場合、ショートケーキが跳ね返って魔法ダメージを与える。ショートケーキは最大3体に跳ね返る。",
          "stats": ["気絶：行動不能状態になる。", "気絶の持続時間：3秒", "魔法ダメージ：840%", "2回目の魔法ダメージ：840%"],
          "cooldown": "28秒"
        },
        "passiveSkill": {
          "desc": "HPが50%以下になると、自分にシールドを生成する。",
          "stats": ["シールド：最大HPの68%", "シールドの持続時間：6秒", "シールドのクールタイム：25秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a fire spell, dealing Magical Damage and applying Scorch. [Scorch: Applies Damage every second.] [Magical DMG: 75%] [Scorch Duration: 2s]",
          "enhanced": "At a set chance, fires burning buns to deal Magical Damage to enemies, applying Scorch. If there are other enemies within a certain range behind the hit one, crumbs bounce to deal Magical Damage, applying Scorch. Crumbs bounce to a max of 2 enemies. [Scorch: Applies Damage every second] [Magical DMG: 100%] [Two-Hit Magical DMG: 150%] [Scorch Duration: 3s]"
        },
        "normalSkill": {
          "name": "Bread Charge",
          "desc": "Shoots 6 buns, dealing Magical Damage to enemies hit with them.",
          "stats": ["Total Magical DMG: 1050%"]
        },
        "ultimateSkill": {
          "name": "Bread Meteor",
          "desc": "Drops a Giant cake on the enemy at the center, dealing AoE Magical Damage and applying Stun. If there are other enemies within a certain range, slices bounce to deal Magical Damage. Slices bounce to a max of 3 enemies.",
          "stats": ["Stun: Becomes unable to act.", "Magical DMG: 840%", "Two-Hit Magical DMG: 840%", "Stun Duration: 3s"],
          "cooldown": "28s"
        },
        "passiveSkill": {
          "desc": "When her HP drops at 50% or below, casts a Shield on herself.",
          "stats": ["Shield: 68% of Max HP", "Shield Duration: 6s", "Shield Cooldown: 25s"]
        }
      }
    }
  },
  {
    "name": "希菲爾",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲短劍，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "以一定機率對敵人連續投擲3次短劍，造成物理傷害。最後一擊造成更大的傷害並減少SP [物理傷害：96%] [最後一擊物理傷害：64%] [SP減少：10%]"
        },
        "normalSkill": {
          "name": "天空的支配者",
          "desc": "對敵人造成範圍物理傷害並減少其SP",
          "stats": ["物理傷害：294%", "SP減少：31.5%"]
        },
        "ultimateSkill": {
          "name": "宇宙無敵至尊希菲爾突擊",
          "desc": "對敵人投擲8把短劍",
          "stats": ["總物理傷害：735%"],
          "cooldown": "14秒"
        },
        "passiveSkill": {
          "desc": "增加基本攻擊傷害並提高強化攻擊的機率",
          "stats": ["基本攻擊傷害量增加：52%", "強化攻擊機率增加：21%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "短剣を投げつけ、敵に物理ダメージを与える [物理ダメージ：100%]",
          "enhanced": "最も近い単体対象に短剣を3回投げつけ、物理ダメージを与える。 [物理ダメージ：96%] [最後の一撃の物理ダメージ：64%] [SP減少：10%]"
        },
        "normalSkill": {
          "name": "青空の支配者",
          "desc": "敵に範囲物理ダメージを与え、SPを減少させる。",
          "stats": ["物理ダメージ：294%", "SP減少：31.5%"]
        },
        "ultimateSkill": {
          "name": "シルフィールZアタック",
          "desc": "敵に短剣を8本投げつける。",
          "stats": ["総物理ダメージ：735%"],
          "cooldown": "14秒"
        },
        "passiveSkill": {
          "desc": "基本攻撃のダメージ量と強化攻撃確率が増加する。",
          "stats": ["基本攻撃のダメージ量増加：52%", "強化攻撃確率増加：21%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a dagger, dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "At a set chance, throws daggers 3 times, dealing Physical Damage to the enemy. The final hit deals greater Damage and reduces SP. [Physical DMG: 96%] [Final Hit Physical DMG: 64%] [SP Reduction: 10%]"
        },
        "normalSkill": {
          "name": "Ruler of the Sky",
          "desc": "Deals AoE Physical Damage to enemies and reduces their SP",
          "stats": ["Physical DMG: 294%", "SP Reduction: 31.5%"]
        },
        "ultimateSkill": {
          "name": "Attack of the Almighty Silphir",
          "desc": "Throws 8 daggers at the enemy.",
          "stats": ["Total Physical DMG: 735%"],
          "cooldown": "14s"
        },
        "passiveSkill": {
          "desc": "Increases Basic Attack Damage and Enhanced Attack Chance.",
          "stats": ["Basic ATK DMG Increase: 52%", "Enhanced Attack Chance Increase: 21%"]
        }
      }
    }
  },
  {
    "name": "艾爾芬",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射魔力彈，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "有一定的機率瞞著朋友偷偷拿出蛋糕來吃，恢復SP。 [SP恢復：35%]"
        },
        "normalSkill": {
          "name": "魔彈暴走",
          "desc": "對隨機敵人發射3枚暴走魔彈，造成範圍魔法傷害。",
          "stats": ["總魔法傷害：1118.7%"]
        },
        "ultimateSkill": {
          "name": "都給我讓開啊啊啊！！！啊…？",
          "desc": "將魔力注入手杖後突擊，對敵人造成範圍魔法傷害。",
          "stats": ["魔法傷害：1050%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "強化攻擊的SP恢復量增加。提升友軍天真性格使者的攻擊力。（該效果即使艾爾芬不在場上也會觸發。）",
          "stats": ["SP恢復量增加：23%", "攻擊力增加：23%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "魔力弾を発射して敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "一定確率でケーキをつまみ食いして、SPを回復する。 [SP回復：35%]"
        },
        "normalSkill": {
          "name": "魔弾の暴走",
          "desc": "暴走する魔力弾を3個発射し、ランダムな敵に範囲魔法ダメージを与える。",
          "stats": ["総魔法ダメージ：1118.7%"]
        },
        "ultimateSkill": {
          "name": "どけえぇぇぇ！！！⋯⋯え？",
          "desc": "杖に魔力を込めて突撃し、敵に範囲魔法ダメージを与える。",
          "stats": ["魔法ダメージ：1050%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "強化攻撃のSP回復量が増加する。純粋性格の味方使徒の攻撃力を増加させる。(この効果はエルフィンがフィールドにいなくても発動する。)",
          "stats": ["SP回復量増加：23%", "攻撃力増加：23%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Shoots a Magic Bullet, dealing Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "At a set chance, secretly has some cake and recovers SP. [SP Recovery: 35%]"
        },
        "normalSkill": {
          "name": "Magic Bullet Rampage",
          "desc": "Shoots 3 Magic Bullets at random enemies and deals AoE Magical Damage.",
          "stats": ["Total Magical DMG: 1118.7%"]
        },
        "ultimateSkill": {
          "name": "Chaaaa...rge?",
          "desc": "Completely infuses her staff with Magical Energy and charges, dealing AoE Magical Damage to enemies.",
          "stats": ["Magical DMG: 1050%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases SP Recovery of Enhanced Attacks. Increases all allied Innocence Personality Apostles Attack. (This effect activates even if Erpin is not on the field.)",
          "stats": ["SP Recovery Increase: 23%", "ATK Increase: 23%"]
        }
      }
    }
  },
  {
    "name": "馬爾",
    "attribute": "魔法",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射咒語，造成魔法傷害。 [魔法傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "馬爾大大恢復",
          "desc": "每秒為所有友軍恢復HP。HP恢復量會根據魔法攻擊力而變化。",
          "stats": ["持續HP恢復：攻擊力的11.6%", "HP恢復持續時間：8秒"]
        },
        "ultimateSkill": {
          "name": "昇……羊～拳！",
          "desc": "派出羊朋友對最近的單體目標突進，造成魔法傷害。",
          "stats": ["總魔法傷害：1907.7%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "解除指定範圍內1名敵人身上的所有增益效果。",
          "stats": ["冷卻時間：12秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "呪文を発射し、敵に魔法ダメージを与える。 [魔法ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "マーゴマックスリカバリー",
          "desc": "1秒ごとに味方全員のHPを回復させる。HP回復量は魔法攻撃力に応じて変化する。",
          "stats": ["HP回復持続：攻撃力の11.6%", "HP回復持続時間：8秒"]
        },
        "ultimateSkill": {
          "name": "メェ～龍拳！",
          "desc": "最も近い単体対象に友達のヒツジを突進させ、魔法ダメージを与える。",
          "stats": ["総魔法ダメージ：1907.7%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "指定された射程距離内の敵1人にかかった有利なバフを全て解除する。",
          "stats": ["クールタイム：12秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Casts a spell, dealing Magical Damage to the enemy. [Magical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Mago's Mega Mend",
          "desc": "Recovers all allies HP every second.",
          "stats": ["Continuous HP Recovery: 11.6% of own Max HP", "HP Recovery Duration: 8s"]
        },
        "ultimateSkill": {
          "name": "Rising Lamb Fist!",
          "desc": "Sends her sheep friend to an enemy and deals Magical Damage.",
          "stats": ["Total Magical DMG: 1907.7%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Removes all beneficial buffs on an enemy within the designated range.",
          "stats": ["Cooldown: 12s"]
        }
      }
    }
  },
  {
    "name": "路德",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動拳頭，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "再來一組！",
          "desc": "對敵人怒吼，造成範圍物理傷害並給予噪音效果。立即恢復HP，若自身HP低於50%，每秒恢復HP。",
          "stats": ["噪音：減少造成的傷害量。", "物理傷害：325%", "噪音持續時間：3.5秒", "立即HP恢復：最大HP的11.5%", "持續HP恢復：最大HP的11.5%", "HP恢復持續時間：3秒"]
        },
        "ultimateSkill": {
          "name": "惡龍震擊",
          "desc": "對敵人用力敲擊地面5次，造成範圍物理傷害並給予擊退效果。最後一擊造成更大的傷害並給予昏迷效果。最後一擊時會恢復自身HP。",
          "stats": ["昏迷：無法進行任何行動。", "擊退：處於無法行動的狀態，被向後推。", "物理傷害：189%", "最後一擊物理傷害：126%", "昏迷持續時間：2秒", "HP恢復：最大HP的23%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "受到的物理傷害量減少。受到6次直接傷害後，給予自身無敵效果。",
          "stats": ["直接傷害：指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "無敵：對所有傷害和減益效果免疫。", "受到的物理傷害量減少：46%", "無敵持續時間：2秒", "無敵冷卻時間：15秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "拳を振るい、敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "もぉいっちょぉ！",
          "desc": "叫び声を上げて敵に範囲物理ダメージを与え、ノイズを付与する。すぐにHPを回復し、追加で自身のHPが50%未満の場合、HPを1秒ごとに回復する。",
          "stats": ["ノイズ：与ダメージ量が減少する。", "物理ダメージ：325%", "ノイズの持続時間：3.5秒", "即時HP回復：最大HPの11.5%", "HP回復持続：最大HPの11.5%", "HP回復持続時間：3秒"]
        },
        "ultimateSkill": {
          "name": "インパクトプレス",
          "desc": "地面を強く5回叩きつけ、敵に範囲物理ダメージを与えノックバックさせる。最後の一撃は、より高いダメージを与え、気絶を付与する。最後の一撃時に自身のHPを回復する。",
          "stats": ["気絶：行動不能になる。", "ノックバック：行動不能になり後ろへ押し戻される。", "物理ダメージ：189%", "最後の打撃物理ダメージ：126%", "気絶持続時間：2秒", "HP回復：最大HPの23%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "物理被ダメージ量が減少する。直接ダメージを6回受けると自分に無敵を適用させる。",
          "stats": ["直接ダメージ：状態異常ダメージ、反射ダメージを除く直接攻撃によるダメージを意味する。", "無敵：全てのダメージ及びデバフの免疫を持つ。", "物理被ダメージ量減少：46%", "無敵の持続時間：2秒", "無敵クールタイム：15秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her fist and deals Physical Damage to an enemy. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "One More!",
          "desc": "Shouts, deals AoE Physical Damage, and applies Noise to enemies. Immediately recovers HP, and if own HP is less than 50%, recovers HP every second.",
          "stats": ["Noise: Reduces Outgoing Damage.", "Physical DMG: 325%", "Noise Duration: 3.5s", "Immediate HP Recovery: 11.5% of Max HP", "Continuous HP Recovery: 11.5% of Max HP", "HP Recovery Duration: 3s"]
        },
        "ultimateSkill": {
          "name": "Impact Press",
          "desc": "Powerfully slams the ground 5 times, dealing AoE Physical Damage and applying Knockback to the enemy. The final hit deals higher Damage and applies Stun. When landing the final hit, recovers HP.",
          "stats": ["Stun: Becomes unable to act.", "Knockback: is pushed back, becoming unable to act.", "Physical DMG: 189%", "Final Hit Physical DMG: 126%", "Stun Duration: 2s", "HP Recovery: 23% of Max HP"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Reduces Incoming Physical Damage. After taking Direct Damage 6 times, applies Invincible on herself.",
          "stats": ["Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "Invincible: Immune to all damage and debuffs.", "Incoming Physical DMG Reduction: 46%", "Invincible Duration: 2s", "Invincible Cooldown: 15s"]
        }
      }
    }
  },
  {
    "name": "康娜",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對攻擊力最高的敵人發射砲彈，造成範圍物理傷害。 [物理傷害：125%]",
          "enhanced": "以一定機率對攻擊力最高的敵人發射衝擊砲彈，造成範圍物理傷害並給予昏迷效果。 [昏迷：無法進行任何行動。] [物理傷害：250%] [昏迷持續時間：1.5秒]"
        },
        "normalSkill": {
          "name": "來發大的",
          "desc": "對敵人發射特殊砲彈，造成物理傷害。",
          "stats": ["物理傷害：693%"]
        },
        "ultimateSkill": {
          "name": "羊子炸彈",
          "desc": "對敵人發射追蹤型羊炸彈，造成物理傷害。",
          "stats": ["物理傷害：1020%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "增加最大HP並提高強化攻擊的機率。",
          "stats": ["最大HP增加：42%", "強化攻擊機率增加：21%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "攻撃力が最も高い対象に砲弾を発射し、範囲物理ダメージを与える。 [物理ダメージ：125%]",
          "enhanced": "一定確率で衝撃砲弾を発射し、攻撃力が最も高い敵に範囲物理ダメージを与え、気絶を付与する。 [気絶：行動不能状態になる。] [物理ダメージ：250%] [気絶持続時間：1.5秒]"
        },
        "normalSkill": {
          "name": "でかいのかますぞ！",
          "desc": "特殊砲弾を発射して敵に物理ダメージを与える。",
          "stats": ["物理ダメージ：693%"]
        },
        "ultimateSkill": {
          "name": "ラムボム",
          "desc": "敵を追跡する羊爆弾を発射し、物理ダメージを与える。",
          "stats": ["物理ダメージ：1020%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "最大HPが増加し強化攻撃の確率が増加する。",
          "stats": ["最大HP増加：42%", "強化攻撃の確率増加：21%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Fires her cannon at the target with the highest Attack and deals AoE Physical Damage. [Physical DMG: 125%]",
          "enhanced": "At a set chance, fires her cannon at the target with the highest Attack, deals AoE Physical Damage, and applies Stun. [Stun: Becomes unable to act.] [Physical DMG: 250%] [Stun Duration: 1.5s]"
        },
        "normalSkill": {
          "name": "One Big Shot!",
          "desc": "Shoots a special cannon, dealing Physical Damage to the enemy.",
          "stats": ["Physical DMG: 693%"]
        },
        "ultimateSkill": {
          "name": "Lamb Bomb",
          "desc": "Shoots a Homing Lamb Bomb, dealing Physical Damage to the enemy.",
          "stats": ["Physical DMG: 1020%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Max HP and Enhanced Attack Chance.",
          "stats": ["Max HP Increase: 42%", "Enhanced Attack Chance Increase: 21%"]
        }
      }
    }
  },
  {
    "name": "班尼",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮動斧頭，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "鮮魚～咕嚕！",
          "desc": "吃魚恢復HP，並額外增加爆擊機率與爆擊傷害量。",
          "stats": ["HP恢復：攻擊力的1260%", "爆擊機率增加：20.4%", "爆擊傷害量增加：104%", "增益持續時間：8秒"]
        },
        "ultimateSkill": {
          "name": "班尼！砍你！",
          "desc": "用斧頭砍向地面，對敵人造成範圍物理傷害，並給予昏迷效果。",
          "stats": ["昏迷：無法進行任何行動。", "物理傷害：1386%", "昏迷持續時間：4秒"],
          "cooldown": "58秒"
        },
        "passiveSkill": {
          "desc": "受到直接傷害時恢復SP。",
          "stats": ["直接傷害：指狀態異常傷害、反射傷害以外的直接攻擊傷害。", "SP恢復：17"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "斧を振り回して敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "魚ウマウマ",
          "desc": "魚を食べてHPを回復する。追加で会心率と会心ダメージ量が増加する。",
          "stats": ["HP回復：攻撃力の1260%", "会心率増加：20.4%", "会心ダメージ量増加：104%", "バフ持続時間：8秒"]
        },
        "ultimateSkill": {
          "name": "ぶった切るよ〜！",
          "desc": "斧で地面を叩きつけて範囲物理ダメージを与え、気絶を付与する。",
          "stats": ["気絶：行動不能になる。", "物理ダメージ：1386%", "気絶持続時間：4秒"],
          "cooldown": "58秒"
        },
        "passiveSkill": {
          "desc": "直接ダメージを受けるとSPが回復する。",
          "stats": ["直接ダメージ：状態異常ダメージ、反射ダメージを除く直接攻撃によるダメージを意味する。", "SP回復：17"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her axe, dealing Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Nom, Nom, Fish!",
          "desc": "Eats a fish to recover her own HP. Additionally, Increases Critical Rate and Critical Damage.",
          "stats": ["HP Recovery: 1260% of ATK", "CRIT Rate Increase: 20.4%", "CRIT DMG Increase: 104%", "Buff Duration: 8s"]
        },
        "ultimateSkill": {
          "name": "Beni Goes Slashy!",
          "desc": "Strikes down on the ground with her axe, deals AoE Physical Damage to enemies, and applies Stun.",
          "stats": ["Stun: Becomes unable to act.", "Physical DMG: 1386%", "Stun Duration: 4s"],
          "cooldown": "58s"
        },
        "passiveSkill": {
          "desc": "When taking Direct Damage, recovers SP.",
          "stats": ["Direct Damage: Refers to damage caused by Direct Attacks, excluding Status Effect Damage and Damage Reflection.", "SP Recovery: 17"]
        }
      }
    }
  },
  {
    "name": "盧波",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞短劍，造成2次物理傷害。 [總物理傷害：100%]",
          "enhanced": "以一定機率給予自己障眼法效果，同時對敵人揮舞短劍，造成物理傷害。 [障眼法：不會成為敵人的攻擊目標。沒有友軍時不會觸發。] [物理傷害：200%] [障眼法持續時間：4秒]"
        },
        "normalSkill": {
          "name": "盧波流神速斬",
          "desc": "瞬間移動後，對指定範圍內最後方的敵人造成4次物理傷害。",
          "stats": ["總物理傷害：882%"]
        },
        "ultimateSkill": {
          "name": "奧義狐狸旋風！",
          "desc": "瞬間移動後高速旋轉，對指定范圍內最遠的敵人造成8次範圍物理傷害並擊退，旋轉期間增加防禦力。",
          "stats": ["擊退：處於無法行動的狀態，被向後推。", "總物理傷害：735%", "防禦力增加：50%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "增加強化攻擊傷害量。",
          "stats": ["強化攻擊傷害量增加：68%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "短剣を振るい、敵に2回物理ダメージを与える。 [総物理ダメージ：100%]",
          "enhanced": "一定確率で短剣を薙ぎ払って敵に物理ダメージを与え、自身に目くらましを付与する。[目くらまし：敵の目標にならない。他の味方がいない時は発動しない。] [物理ダメージ：200%] [目くらまし持続時間：4秒]"
        },
        "normalSkill": {
          "name": "ルボ流神速斬り",
          "desc": "瞬間移動した後、指定された射程距離内で、最も後ろにいる敵に4回物理ダメージを与える。",
          "stats": ["総物理ダメージ：882%"]
        },
        "ultimateSkill": {
          "name": "奥義：狐旋風！",
          "desc": "瞬間移動して素早く回転し、指定範囲内で最も後ろにいる敵に範囲物理ダメージを8回与え、ノックバックをさせる。回転中は物理防御力が増加する。",
          "stats": ["ノックバック：行動不能になり後ろへ押し戻される。", "総物理ダメージ：735%", "防御力増加：50%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "強化攻撃のダメージ量が増加する。",
          "stats": ["強化攻撃のダメージ量増加：68%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her dagger, dealing Physical Damage 2 times to the enemy. [Total Physical DMG: 100%]",
          "enhanced": "At a set chance, swings her dagger dealing Physical Damage to the enemy and applying Trickery to herself. [Trickery: Cannot be targeted by enemies. Does not trigger when no allies are present.] [Physical DMG: 200%] [Trickery Duration: 4s]"
        },
        "normalSkill": {
          "name": "Rufo Quick Slash",
          "desc": "Teleports and deals Physical Damage 4 times to the farthest enemy within the designated range.",
          "stats": ["Total Physical DMG: 882%"]
        },
        "ultimateSkill": {
          "name": "Ultimate: Fox Tornado",
          "desc": "Teleports and spins rapidly to deal AoE Physical Damage 8 times to the farthest enemy within the designated range, applying Knockback. Increases Defense while spinning.",
          "stats": ["Knockback: is pushed back, becoming unable to act.", "Total Physical DMG: 735%", "DEF Increase: 50%"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "Increases Enhanced Attack Damage.",
          "stats": ["Enhanced ATK DMG Increase: 68%"]
        }
      }
    }
  },
  {
    "name": "泰達",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人發射子彈，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "DX-射手",
          "desc": "對敵人發射強力子彈，造成物理傷害。",
          "stats": ["物理傷害：567%"]
        },
        "ultimateSkill": {
          "name": "噹噹砰？！",
          "desc": "對敵人發射強力子彈3次，造成範圍物理傷害。",
          "stats": ["總物理傷害：623.7%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "爆擊傷害增加。",
          "stats": ["爆擊傷害增加：80%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "弾丸を発射し、敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "DX - シューター",
          "desc": "強力な弾丸を発射し、敵に物理ダメージを与える。",
          "stats": ["物理ダメージ：567%"]
        },
        "ultimateSkill": {
          "name": "タンタン……パン！？",
          "desc": "強力な弾丸を敵に3回発射し、範囲物理ダメージを与える。",
          "stats": ["総物理ダメージ：623.7%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "会心ダメージが増加する。",
          "stats": ["会心ダメージ増加：80%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Fires a shot, dealing Physical Damage to an enemy. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "DX-Shooter",
          "desc": "Fires a powerful shot, dealing Physical Damage to an enemy.",
          "stats": ["Physical DMG: 567%"]
        },
        "ultimateSkill": {
          "name": "Bang-Bang-Pow?!",
          "desc": "Fires 3 powerful shots, dealing AoE Physical Damage to enemies.",
          "stats": ["Total Physical DMG: 623.7%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Critical Damage.",
          "stats": ["Increases Critical Damage: 80%"]
        }
      }
    }
  },
  {
    "name": "瑪麗",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人投擲炸彈，造成物理傷害。 [物理傷害：75%]",
          "enhanced": "有一定機率投擲強化炸彈，對敵人造成範圍物理傷害並給予燒傷效果。 [燒傷：每秒造成傷害。] [物理傷害：125%] [燒傷持續時間：2秒]"
        },
        "normalSkill": {
          "name": "您的炸彈請查收~",
          "desc": "投擲特製炸彈，對敵人造成範圍物理傷害並給予燒傷效果。",
          "stats": ["燒傷：每秒造成傷害。", "物理傷害：260%", "燒傷持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "要爆炸啦！",
          "desc": "安裝高爆彈後引爆，對敵人造成範圍物理傷害。",
          "stats": ["物理傷害：470%"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "增加強化攻擊機率並增加強化攻擊傷害量。",
          "stats": ["強化攻擊機率增加：21%", "強化攻擊傷害量增加：68%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に爆弾を投げつけて物理ダメージを与える。 [物理ダメージ：75%]",
          "enhanced": "一定確率で強化爆弾を投げつけて敵に範囲物理ダメージを与え、火傷を付与する。 [火傷：1秒ごとにダメージを受ける。] [物理ダメージ：125%] [火傷の持続時間：2秒]"
        },
        "normalSkill": {
          "name": "爆弾のお届け物です〜",
          "desc": "特製爆弾を投げつけて敵に範囲物理ダメージを与え、火傷を付与する。",
          "stats": ["火傷：1秒ごとにダメージを与える。", "物理ダメージ：260%", "火傷の持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "は〜じけるよ〜！",
          "desc": "高性能爆弾を設置した後、爆発させて敵に範囲物理ダメージを与える。",
          "stats": ["物理ダメージ：470%"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "強化攻撃の確率が増加し、強化攻撃のダメージ量が増加する。",
          "stats": ["強化攻撃確率増加：21%", "強化攻撃ダメージ量増加：68%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Throws a bomb and deals Physical Damage to an enemy. [Physical DMG: 75%]",
          "enhanced": "At a set chance, throws an enhanced bomb, deals Physical Damage to enemies, and applies the Scorch debuff on them. [Scorch: Applies damage every second.] [Physical DMG: 125%] [Scorch Duration: 2s]"
        },
        "normalSkill": {
          "name": "Bomb Delivery",
          "desc": "Throws a special bomb, deals AoE Physical Damage to enemies, and applies the Scorch debuff on them.",
          "stats": ["Scorch: Applies damage every second.", "Physical DMG: 260%", "Scorch Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "High-Explosive Bomb!",
          "desc": "Sets up a highly explosive bomb, detonates it, and deals AoE Physical Damage.",
          "stats": ["Physical DMG: 470%"],
          "cooldown": "40s"
        },
        "passiveSkill": {
          "desc": "Increases Enhanced Attack Chance and Enhanced Attack Damage.",
          "stats": ["Enhanced Attack Chance Increase: 21%", "Enhanced ATK DMG Increase: 68%"]
        }
      }
    }
  },
  {
    "name": "x乂錫安乂x",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對指定範圍內距離最遠的敵人發射子彈，造成物理傷害。 [物理傷害：200%]",
          "enhanced": "每三次攻擊，對敵人造成範圍物理傷害並給予致盲效果，且獲得1枚魔彈。魔彈最多可獲得6枚。 [致盲：普通攻擊失準。] [魔彈：物理傷害量提升。] [物理傷害：350%] [魔彈物理傷害量增加：5%] [致盲持續時間：6秒]"
        },
        "normalSkill": {
          "name": "魔·彈·射·手",
          "desc": "聚集黑暗之力，獲得2枚魔彈，並對指定范圍內最遠的敵人造成物理傷害。攻擊時消耗魔彈，攻擊次數隨魔彈數量增加。魔彈最多可獲得6枚。",
          "stats": ["魔彈：提升物理傷害量。", "每次物理傷害：365%", "魔彈物理傷害量增加：5%"]
        },
        "ultimateSkill": {
          "name": "末·日·爆·炸⭐️",
          "desc": "對指定范圍內最遠的目標造成範圍物理傷害並獲得1枚魔彈。魔彈最多可獲得6枚。",
          "stats": ["魔彈：物理傷害量增加。", "物理傷害：365%", "魔彈物理傷害量增加：5%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "獲得魔彈時，在一定時間內增加物理攻擊力。",
          "stats": ["物理攻擊力增加：53%", "持續時間：10秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "弾丸を発射し、指定された射程距離内で最も離れている敵に物理ダメージを与える。 [物理ダメージ：200%]",
          "enhanced": "3回攻撃することに敵に範囲物理ダメージと目隠しを付与し、魔弾を1個獲得する。魔弾は最大6個まで獲得可能。 [目隠し：普通攻撃が命中しない。] [魔弾：物理ダメージ量が上昇する。] [物理ダメージ：350%] [魔弾物理ダメージ量増加：5%] [目隠しの持続時間：6秒]"
        },
        "normalSkill": {
          "name": "魔・弾・の・射・手★",
          "desc": "闇の力を集めて魔弾を2個獲得し、射程距離内で最も離れている敵に物理ダメージを与える。攻撃時は魔弾を消費し、魔弾1個につき攻撃回数が増加する。魔弾は最大6個まで獲得可能。",
          "stats": ["魔弾：物理ダメージ量が上昇する。", "1回あたりの物理ダメージ：365%", "魔弾の物理ダメージ量増加：5%"]
        },
        "ultimateSkill": {
          "name": "アポカリブス★ゼロ",
          "desc": "魔弾獲得時に一定時間、物理攻撃力が増加する。",
          "stats": ["魔弾：物理ダメージ量が上昇する。", "物理ダメージ：365%", "魔弾の物理ダメージ量増加：5%"],
          "cooldown": "18秒"
        },
        "passiveSkill": {
          "desc": "魔弾獲得時に一定時間、物理攻撃力が増加する。",
          "stats": ["物理攻擊力增加：53%", "持続時間：10秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Fires a shot and deals Physical Damage to the furthest single target within the designated range. [Physical DMG: 200%]",
          "enhanced": "Every third Attack, deals AoE Physical Damage to enemies and applies Blindfold, obtaining 1 Magic Bullet. Up to 6 Magic Bullets can be obtained. [Blindfold: Normal Attacks miss.] [Magic Bullet: Increases Physical Damage.] [Physical DMG: 350%] [Magic Bullet Physical DMG Increase: 5%] [Blindfold Duration: 6s]"
        },
        "normalSkill": {
          "name": "M461C BULL37 5L1N63R",
          "desc": "Gathers dark power to obtain 2 Magic Bullets and deals Physical Damage to the farthest enemy within the designated range. Consumes Magic Bullets when attacking, increasing attack count per Magic Bullets, Up to 6 Magic Bullets can be obtained.",
          "stats": ["Magic Bullets: Increases Physical Damage.", "Physical DMG Per Hit: 365%", "Magic Bullet Physical DMG Increase: 5%"]
        },
        "ultimateSkill": {
          "name": "Apocalyptic Blast★",
          "desc": "Deals AoE Physical Damage to the farthest enemy within the designated range and obtains 1 Magic Bullet. Up to 6 Magic Bullets can be obtained.",
          "stats": ["Magic Bullet: Increases Physical Damage.", "Physical DMG: 365%", "Magic Bullet Physical DMG Increase: 5%"],
          "cooldown": "18s"
        },
        "passiveSkill": {
          "desc": "Increases Physical Attack for a set period of time upon acquiring a Magic Bullet.",
          "stats": ["Physical ATK: 53%", "Duration: 10s"]
        }
      }
    }
  },
  {
    "name": "基狄恩",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人揮舞短劍，造成物理傷害。 [物理傷害：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "暗影切割",
          "desc": "向敵人猛衝，造成2次物理傷害。每裝備一個神器，攻擊次數會增加。",
          "stats": ["每次打擊物理傷害：685%"]
        },
        "ultimateSkill": {
          "name": "暗影潛伏",
          "desc": "潛入影子後出現在HP比例最低的敵人面前，造成3次範圍物理傷害。",
          "stats": ["每次打擊物理傷害：365%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "使用技能時攻擊力增加。",
          "stats": ["攻擊力增加：68%", "攻擊力增加持續時間：6秒"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "短剣を振るい、敵に物理ダメージを与える。 [物理ダメージ：100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "アウトサイドカット",
          "desc": "敵に突進し、物理ダメージを2回与える。遺物を1個装着する事に攻撃回数が増加する。",
          "stats": ["1回の攻撃の物理ダメージ：685%"]
        },
        "ultimateSkill": {
          "name": "シャドウダイブ",
          "desc": "影に隠れた後、残りHP割合が最も低い敵に現れ、3回の範囲物理ダメージを与える。",
          "stats": ["1回の攻撃の物理ダメージ：365%"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "スキルを使用すると攻撃力が増加する。",
          "stats": ["攻撃力増加：68%", "攻撃力増加の持続時間：6秒"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Swings her dagger and deals Physical Damage to the enemy. [Physical DMG: 100%]",
          "enhanced": "無"
        },
        "normalSkill": {
          "name": "Shadow Cut",
          "desc": "Rushes at the enemy, dealing Physical Damage 2 times. Increases attack count per equipped artifact.",
          "stats": ["Physical DMG Per Hit: 685%"]
        },
        "ultimateSkill": {
          "name": "Shadow Dive",
          "desc": "Slips into the shadows and reappears at the location of the enemy with the lowest HP Ratio, dealing AoE Physical Damage 3 times.",
          "stats": ["Physical DMG Per Hit: 365%"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "If using a Skill, increases Attack.",
          "stats": ["ATK Increase: 68%", "ATK Increase Duration: 6s"]
        }
      }
    }
  },
  {
    "name": "柯米",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "對敵人使用枕頭猛擊，造成物理傷害。 [物理傷害：150%]",
          "enhanced": "以一定機率對敵人使用枕頭重擊，造成物理傷害並給予昏迷效果。 [昏迷：無法進行任何行動。] [物理傷害：300%] [昏迷持續時間：1.5秒]"
        },
        "normalSkill": {
          "name": "軟綿綿時光",
          "desc": "進入睡眠，每秒持續恢復柯米的HP。睡眠期間柯米不會受到減益效果。",
          "stats": ["持續HP恢復：最大HP的20.8%", "恢復持續時間：4秒"]
        },
        "ultimateSkill": {
          "name": "精靈製特製獸糧",
          "desc": "吃下特殊獸糧後會在一定時間內巨大化。著地時會引發衝擊波，對敵人造成範圍物理傷害並恢復HP。巨大化持續時間內，傷害量與攻擊速度增加。",
          "stats": ["HP恢復：所造成傷害量的 63%", "物理傷害：945%", "巨大化時傷害量增加：42%", "巨大化時攻擊速度提升：94%", "巨大化持續時間：12秒"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "最大HP增加。",
          "stats": ["最大HP增加：42%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵を枕で殴りつけて物理ダメージを与える。 [物理ダメージ：150%]",
          "enhanced": "一定確率で枕を強く叩きつけて敵に物理ダメージを与え、気絶を付与する。 [気絶：行動不能状態になる。] [物理ダメージ：300%]"
        },
        "normalSkill": {
          "name": "ふかふかタイム",
          "desc": "睡眠中、1秒ごとにコミーのHPが回復する。回復量は最大HPに比例する。眠っている間はデバフに免疫を持つ。",
          "stats": ["HP回復持続：最大HPの20.8%", "回復持続時間：4秒"]
        },
        "ultimateSkill": {
          "name": "エルフ族特製アニマル缶",
          "desc": "特別なアニマル缶を食べ、一定時間、巨大化する。巨大化時にHPを回復し、着地時に衝撃波を起こして範囲物理ダメージを与え、与ダメージ量の割合でHPを回復する。巨大化の持続時間中、与ダメージ量と攻撃速度が増加する。",
          "stats": ["HP回復：与ダメージ量の63%", "物理ダメージ：945%", "巨大化時ダメージ量増加：42%", "巨大化時攻撃速度増加：94%", "巨大化持続時間：12秒"],
          "cooldown": "24秒"
        },
        "passiveSkill": {
          "desc": "最大HPが増加する。",
          "stats": ["最大HP増加：42%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Slams a pillow down and deals Physical Damage to the enemy. [Physical DMG: 150%]",
          "enhanced": "At a set chance, powerfully slams a pillow down, deals Physical Damage to the enemy, and applies Stun. [Stun: Becomes unable to act.] [Physical DMG: 300%] [Stun Duration: 1.5s]"
        },
        "normalSkill": {
          "name": "Snuggly Time",
          "desc": "Recovers HP every second while sleeping, and becomes Immune to debuffs while asleep.",
          "stats": ["Continuous HP Recovery: 20.8% of Max HP", "Recovery Duration: 4s"]
        },
        "ultimateSkill": {
          "name": "Elven Special Feed",
          "desc": "Eats a special feed and becomes Giant for a set period of time. While in Giant form, recovers HP and creates a shockwave upon landing, deals AoE Physical Damage to enemies. Increases Damage and Attack Speed while in Giant form.",
          "stats": ["HP Recovery: 63% of DMG Dealt", "Physical DMG: 945%", "DMG Increase while Giant: 42%", "ATK SPD Increase while Giant: 94%", "Giant Duration: 12s"],
          "cooldown": "24s"
        },
        "passiveSkill": {
          "desc": "Increases Max HP.",
          "stats": ["Max HP Increase: 42%"]
        }
      }
    }
  },
  {
    "name": "雷內瓦",
    "attribute": "物理",
    "skills": {
      "zh-TW": {
        "normalAttack": {
          "basic": "向敵人發射魔導工學能量，對其造成物理傷害。[物理傷害：90%]",
          "enhanced": "每進行第四次攻擊時，發射魔導工學雷射，對敵人造成範圍物理傷害。物理攻擊力會在一段時間內提升。[物理傷害：360%] [物理攻擊力增加：25%] [物理攻擊力增加持續時間：6秒]"
        },
        "normalSkill": {
          "name": "時空迴響",
          "desc": "對敵人進行集中砲擊，造成5次範圍物理傷害。奇數次砲擊會減少敵人的HP恢復量。偶數次砲擊會恢復自身HP，並解除敵人身上1個護盾。",
          "stats": ["總物理傷害：1700%", "HP恢復量減少：40%", "HP恢復量減少持續時間：5秒", "HP恢復：最大HP的20%"]
        },
        "ultimateSkill": {
          "name": "時間暫停",
          "desc": "逐漸加快友軍所有行動，並減少受到的傷害量。逐漸減緩敵軍所有行動，並使其暫時靜止。使敵人靜止的同時，對所有敵人造成6次物理傷害。上述效果施展時，僅適用於在場上的目標。",
          "stats": ["總物理傷害：1260%", "友軍加速：64%", "友軍加速及敵人減速持續時間：7秒", "敵人靜止持續時間：3秒", "受到的傷害量減少：23%", "受到的傷害量減少持續時間：10秒"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "對挑釁免疫。增加友軍攻擊型角色對天真性格造成的傷害量。（該效果即使雷內瓦不在場上也會觸發。）",
          "stats": ["挑釁：使目標對發動挑釁的單位進行基本攻擊。", "對天真性格造成的傷害量增加：74%"]
        }
      },
      "ja": {
        "normalAttack": {
          "basic": "敵に魔道工学エネルギーを発射し、物理ダメージを与える。 [物理ダメージ：90%]",
          "enhanced": "4回攻撃するごとに魔道工学レーザーを発射し、敵に範囲物理ダメージを与える。一定時間、物理攻撃力が増加する。 [範囲物理ダメージ：360%] [物理攻撃力増加：25%] [物理攻撃力増加の持続時間：6秒]"
        },
        "normalSkill": {
          "name": "時空のこだま",
          "desc": "敵に集中砲撃を浴びせ、範囲物理ダメージを5回与える。奇数回目の砲撃は敵のHP回復量を減少させる。偶数回目の砲撃は自身のHPを回復して敵にかかっているシールドを1つ解除する。",
          "stats": ["総物理ダメージ：1700%", "HP回復量減少：40%", "HP回復量減少の持続時間：5秒", "HP回復：最大HPの20%"]
        },
        "ultimateSkill": {
          "name": "タイム・ブレイク",
          "desc": "味方の全行動速度を徐々に加速させ、被ダメージ量を減少させる。敵の全行動速度を徐々に減速させ、一定時間停止させる。敵を停止させている間、敵全員に6回物理ダメージを与える。上記効果は発動時にフィールドにいた対象にのみ適用される。",
          "stats": ["総物理ダメージ：1260%", "味方加速：64%", "味方加速および敵鈍化の持続時間：7秒", "敵停止の持続時間：3秒", "被ダメージ量減少：23%", "被ダメージ量減少の持続時間：10秒"],
          "cooldown": "40秒"
        },
        "passiveSkill": {
          "desc": "挑発の免疫を持つ。味方のアタッカーの純粋への与ダメージ量を増加させる。(この効果はリニュアがフィールドにいなくても発動する。)",
          "stats": ["挑発：挑発した対象を基本攻撃で攻撃する。", "純粋への与ダメージ量増加：74%"]
        }
      },
      "en": {
        "normalAttack": {
          "basic": "Fires arcane energy at enemies, dealing Physical Damage. [Physical DMG: 90%]",
          "enhanced": "Every fourth attack fires an arcane laser at enemies, dealing AoE Physical Damage and increasing Physical ATK for a set period of time. [Physical Damage: 360%] [Physical ATK Increase: 25%] [Physical ATK Increase Duration: 6s]"
        },
        "normalSkill": {
          "name": "Echo of Time",
          "desc": "Bombards enemies with 5 AoE Physical Damage attacks. Odd-numbered bombardments reduce enemy HP Recovery. Even-numbered bombardments recover HP and remove 1 Shield from enemies.",
          "stats": ["Total Physical DMG: 1700%", "HP Recovery Reduction: 40%", "HP Recovery Reduction Duration: 5s", "HP Recovery: 20% of Max HP"]
        },
        "ultimateSkill": {
          "name": "Time Break",
          "desc": "Gradually accelerates all allies' action speed and reduces Incoming Damage. Gradually slows all enemies' action speed and temporarily halts them. While enemies are halted, they take 6 instances of Physical Damage. This effect only applies to enemies present at the time of casting.",
          "stats": ["Total Physical DMG: 1260%", "Ally SPD Increase: 64%", "Ally SPD Increase and Enemy SPD Decrease Duration: 7s", "Enemy Halt Duration: 3s", "Incoming DMG Reduction: 23%", "Incoming DMG Reduction Duration: 10s"],
          "cooldown": "40s"
        },
        "passiveSkill": {
          "desc": "Becomes immune to Taunt. Increases Outgoing Damage dealt by allied DPS Apostles to Innocent Personality enemies. (This effect activates even if Renewa is not on the field.)",
          "stats": ["Taunt: Provokes Basic Attacks on the taunt.", "Outgoing DMG Increase to Innocent Personality: 74%"]
        }
      }
    }
  }
];
