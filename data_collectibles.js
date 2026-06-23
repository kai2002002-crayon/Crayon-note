// 檔案名稱： data_collectibles.js
// 整合：珍藏品 (PRESENT_MAP)、教主心聲 (THOUGHT_MAP)、情信 (LETTER_MAP)

const PRESENT_MAP = {
    "Alice": { 
        url: "https://i.postimg.cc/NMq3VZL4/Present-List-Alice.png",
        name: { "zh-TW": "愛麗絲的卡片冊", "ja": "アリスのカードブック", "en": "Alice's Card Deck" }
    },
    "Allet": { 
        url: "https://i.postimg.cc/B69ryRtC/Present-List-Allet.png",
        name: { "zh-TW": "無限保存拌飯醬", "ja": "永久保存可能ソース", "en": "Everlasting Mixing Sauce" }
    },
    "Amelia": { 
        url: "https://i.postimg.cc/cHypjP6h/Present-List-Amelia.png",
        name: { "zh-TW": "莫納蒂姆的待審文件堆", "ja": "決裁待ち書類の山", "en": "Stack of Monatium Paperwork" }
    },
    "Ashur": { 
        url: "https://i.postimg.cc/3R5s6zWL/Present-List-Ashur.png",
        name: { "zh-TW": "艾心堂全年免費自由使用劵", "ja": "エーカリー年間無料パス", "en": "Free Pass for Ashurin\'" }
    },
    "Aya": { 
        url: "https://i.postimg.cc/JnVfgStg/Present-List-Aya.png",
        name: { "zh-TW": "雪花雕像", "ja": "雪花の彫像", "en": "Snowflake Statue" }
    },
    "Belita": { 
        url: "https://i.postimg.cc/DZk9DR8h/Present-List-Belita.png",
        name: { "zh-TW": "老舊的木雕玩偶", "ja": "古びた木彫り人形", "en": "Old Wooden Doll" }
    },
    "Beni": { 
        url: "https://i.postimg.cc/ZR8GhjyQ/Present-List-Beni.png",
        name: { "zh-TW": "高級釣魚包", "ja": "高級釣り具カバン", "en": "High-End Fishing Rod Bag" }
    },
    "BigWood": { 
        url: "https://i.postimg.cc/RF7kzGny/Present-List-Big-Wood.png",
        name: { "zh-TW": "大木頭的種子", "ja": "ビッグウッドの種", "en": "BigWood Seed" }
    },
    "Blanchet": { 
        url: "https://i.postimg.cc/50BhMpFZ/Present-List-Blanchet.png",
        name: { "zh-TW": "藍玫瑰花束", "ja": "青い薔薇の花束", "en": "Bouquet of Blue Roses" }
    },
    "Butter": { 
        url: "https://i.postimg.cc/fLcGh59Q/Present-List-Butter.png",
        name: { "zh-TW": "花草花冠", "ja": "草花の花冠", "en": "Grass Flower Crown" }
    },
    "Canna": { 
        url: "https://i.postimg.cc/wvXCdFmz/Present-List-Canna.png",
        name: { "zh-TW": "客製化遊戲機", "ja": "カスタムゲーム機", "en": "Custom Game Console" }
    },
    "Carren": { 
        url: "https://i.postimg.cc/V6qxc4C1/Present-List-Carren.png",
        name: { "zh-TW": "胡蘿蔔幼苗種子包", "ja": "ニンジンの苗の種袋", "en": "Carrot Seed Package" }
    },
    "Chloe": { 
        url: "https://i.postimg.cc/ZR8GhjdY/Present-List-Chloe.png",
        name: { "zh-TW": "王國風景掛毯", "ja": "王国風景のタペストリー", "en": "Kingdom Landscape Tapestry" }
    },
    "Chopi": { 
        url: "https://i.postimg.cc/vBrJdXVm/Present-List-Chopi.png",
        name: { "zh-TW": "教主簽名簿", "ja": "教主のサインブック", "en": "The Master's Autograph Book" }
    },
    "Diana": { 
        url: "https://i.postimg.cc/RF7kzGH6/Present-List-Diana.png",
        name: { "zh-TW": "橡樹實木搖椅", "ja": "オーク無垢材のロッキングチェア", "en": "Oak Wood Rocking Chair" }
    },
    "Ed": { 
        url: "https://i.postimg.cc/d3JzQd2V/Present-List-Ed.png",
        name: { "zh-TW": "夢中的姐妹畫作", "ja": "夢の中の姉妹たちの絵", "en": "Dreaming Sisters Portrait" }
    },
    "Elena": { 
        url: "https://i.postimg.cc/mkT0ZMYt/Present-List-Elena.png",
        name: { "zh-TW": "精靈製最新型筆記型電腦", "ja": "エルフ製最新型ノートパソコン", "en": "Latest Elven Laptop" }
    },
    "Epica": { 
        url: "https://i.postimg.cc/tJ9LRP3x/Present-List-Epica.png",
        name: { "zh-TW": "教主史詩抄本", "ja": "教主叙事詩の写本", "en": "Master's Epic Draft" }
    },
    "Erpin": { 
        url: "https://i.postimg.cc/Kks9J1sx/Present-List-Erpin.png",
        name: { "zh-TW": "昨晚的蠟筆", "ja": "昨晩のクレヨン", "en": "Last Night's Pastels" }
    },
    "Espi": { 
        url: "https://i.postimg.cc/mkT0ZMYF/Present-List-Espi.png",
        name: { "zh-TW": "夢境筆記", "ja": "ドリームノート", "en": "Dream Diary" }
    },
    "Festa": { 
        url: "https://i.postimg.cc/GtbZ3YFF/Present-List-Festa.png",
        name: { "zh-TW": "全盛時期簽名專輯", "ja": "全盛期のサイン入りアルバム", "en": "Signed Album from her Glory Days" }
    },
    "Fricle": { 
        url: "https://i.postimg.cc/wM9SxJXV/Present-List-Fricle.png",
        name: { "zh-TW": "友情荊棘戒指", "ja": "友情の茨の指輪", "en": "Thorny Friendship Ring" }
    },
    "Gabia": { 
        url: "https://i.postimg.cc/Y0tJ2g6x/Present-List-Gabia.png",
        name: { "zh-TW": "高級奇石套裝", "ja": "高級奇石セット", "en": "High-End Ornamental Rock Set" }
    },
    "Haley": { 
        url: "https://i.postimg.cc/5yfZ9vB7/Present-List-Haley.png",
        name: { "zh-TW": "莫納蒂姆戰略圖", "ja": "モナティアム戦略地図", "en": "Tactical Map of Monatium" }
    },
    "Hilde": { 
        url: "https://i.postimg.cc/d3ngh16R/Present-List-Hilde.png",
        name: { "zh-TW": "專業學位證書", "ja": "専門学位証書", "en": "Medical Specialist Diploma" }
    },
    "Ifrit": { 
        url: "https://i.postimg.cc/wM9SxJXb/Present-List-Ifrit.png",
        name: { "zh-TW": "銀箔套裝", "ja": "銀箔のスーツ", "en": "Silver-foil Suit" }
    },
    "Jade": { 
        url: "https://i.postimg.cc/rsg7Dmj1/Present-List-Jade.png",
        name: { "zh-TW": "高級玉石地板", "ja": "高級翡翠マット", "en": "Premium Jade Electric Blanket" }
    },
    "Jubee": { 
        url: "https://i.postimg.cc/901sDMbL/Present-List-Jubee.png",
        name: { "zh-TW": "皇家蜂蜜", "ja": "ロイヤルハニー", "en": "Royal Honey" }
    },
    "Kidian": { 
        url: "https://i.postimg.cc/zvp4yB70/Present-List-Kidian.png",
        name: { "zh-TW": "黑曜石短劍", "ja": "黒曜石の短剣", "en": "Obsidian Dagger" }
    },
    "Kommy": { 
        url: "https://i.postimg.cc/XqxtrJLt/Present-List-Kommy.png",
        name: { "zh-TW": "名牌枕頭", "ja": "高級ブランド枕", "en": "Luxury Pillow" }
    },
    "Kyarot": { 
        url: "https://i.postimg.cc/RhG2WFdy/Present-List-Kyarot.png",
        name: { "zh-TW": "優良農業獎盃", "ja": "優良農業トロフィー", "en": "Outstanding Harvest Trophy" }
    },
    "Lazy": { 
        url: "https://i.postimg.cc/Gtz642zn/Present-List-Lazy.png",
        name: { "zh-TW": "最先進工具組", "ja": "最先端の工具セット", "en": "High-tech Toolset" }
    },
    "Leets": { 
        url: "https://i.postimg.cc/vTXC4BXb/Present-List-Leets.png",
        name: { "zh-TW": "超重鋼鐵盔甲", "ja": "超重量級の鋼鉄アーマー", "en": "Utterly Heavy Steel Armor" }
    },
    "Levi": { 
        url: "https://i.postimg.cc/QCSvFtSj/Present-List-Levi.png",
        name: { "zh-TW": "超大尺寸保暖內衣", "ja": "特大サイズの保温インナー", "en": "Extra Large Pajama" }
    },
    "MaestroMK2": { 
        url: "https://i.postimg.cc/mZSvXX4z/Present-List-Maestro-MK2.png",
        name: { "zh-TW": "充滿回憶的硬碟", "ja": "思い出のハードディスク", "en": "Hard Drive of Memories" }
    },
    "Mago": { 
        url: "https://i.postimg.cc/kMy011Ct/Present-List-Mago.png",
        name: { "zh-TW": "羊毛大衣", "ja": "羊毛のコート", "en": "Wool Parka" }
    },
    "Marie": { 
        url: "https://i.postimg.cc/7PNFss47/Present-List-Marie.png",
        name: { "zh-TW": "反物質中子炸彈", "ja": "反物質中性子爆弾", "en": "Antimatter Neutron Bomb" }
    },
    "Mayo": { 
        url: "https://i.postimg.cc/zDksttN7/Present-List-Mayo.png",
        name: { "zh-TW": "奇怪的石膏像", "ja": "奇妙な石膏像", "en": "Strange Plaster Statue" }
    },
    "Meluna": { 
        url: "https://i.postimg.cc/ry9BnnTC/Present-List-Meluna.png",
        name: { "zh-TW": "遊艇啟動匙", "ja": "ヨットのエンジンキー", "en": "Yacht Ignition Key" }
    },
    "Momo": { 
        url: "https://i.postimg.cc/zDksttNF/Present-List-Momo.png",
        name: { "zh-TW": "忍術替身木", "ja": "忍術の変わり身の丸太", "en": "Ninjutsu Log" }
    },
    "Naia": { 
        url: "https://i.postimg.cc/sfJk66zw/Present-List-Naia.png",
        name: { "zh-TW": "海豚大砲", "ja": "イルカ大砲", "en": "Dolphin Cannon" }
    },
    "Ner": { 
        url: "https://i.postimg.cc/8PPqqRkZ/Present-List-Ner.png",
        name: { "zh-TW": "女王育兒日記", "ja": "女王の育児日記", "en": "Queen-Parenting Diary" }
    },
    "Picora": { 
        url: "https://i.postimg.cc/dQ9bHHFz/Present-List-Picora.png",
        name: { "zh-TW": "精緻的時尚貼紙簿", "ja": "おしゃれなステッカーブック", "en": "Cool and Chic Sticker Book" }
    },
    "Posher": { 
        url: "https://i.postimg.cc/7YYpp3Pt/Present-List-Posher.png",
        name: { "zh-TW": "健康防禦葡萄汁", "ja": "健康防御ブドウジュース", "en": "Health Defense Grape Juice" }
    },
	"RenewaAwaken": { 
        url: "https://i.postimg.cc/7YYpp3PR/Present-List-Renewa-Awaken.png",
        name: { "zh-TW": "", "ja": "" }
    },
    "Rim": { 
        url: "https://i.postimg.cc/hPPHHL4k/Present-List-Rim.png",
        name: { "zh-TW": "高級茶杯套裝", "ja": "高級ティーカップセット", "en": "High-End Teacup Set" }
    },
    "Risty": { 
        url: "https://i.postimg.cc/bNNKKxNc/Present-List-Risty.png",
        name: { "zh-TW": "經典遊戲大集合", "ja": "レトロなゲームパッケージ", "en": "Classic Game Bundle" }
    },
    "Rohne": { 
        url: "https://i.postimg.cc/fTT66cTs/Present-List-Rohne.png",
        name: { "zh-TW": "教主觀察日記", "ja": "教主観察日誌", "en": "Master Observation Journal" }
    },
    "Rude": { 
        url: "https://i.postimg.cc/yYYwwmY6/Present-List-Rude.png",
        name: { "zh-TW": "莫納蒂姆健身房高級會員卡", "ja": "モナティアムジムのプレミアム会員券", "en": "Monatium Gym Premium Membership" }
    },
    "Rufo": { 
        url: "https://i.postimg.cc/SNNww6Nx/Present-List-Rufo.png",
        name: { "zh-TW": "作弊骰子", "ja": "イカサマダイス", "en": "Manipulated Dice" }
    },
    "Sari": { 
        url: "https://i.postimg.cc/4NNrr6Nd/Present-List-Sari.png",
        name: { "zh-TW": "反應卡片", "ja": "リアクションカード", "en": "Reaction Card" }
    },
    "Selline": { 
        url: "https://i.postimg.cc/fTT66cTJ/Present-List-Selline.png",
        name: { "zh-TW": "挑釁用的比賽服", "ja": "挑発用の勝負服", "en": "Combat Outfit for Taunting" }
    },
    "Shady": { 
        url: "https://i.postimg.cc/DyjtFS8F/Present-List-Shady.png",
        name: { "zh-TW": "魔法水晶珠", "ja": "魔法の水晶玉", "en": "Magical Crystal Orb" }
    },
    "Shoupan": { 
        url: "https://i.postimg.cc/J469msG4/Present-List-Shoupan.png",
        name: { "zh-TW": "艾利亞斯英雄勳章", "ja": "エリアス英雄勲章", "en": "Elias Hero Medal" }
    },
    "Silphir": { 
        url: "https://i.postimg.cc/4NLrZYmy/Present-List-Silphir.png",
        name: { "zh-TW": "對練用稻草人", "ja": "訓練用のカカシ", "en": "Training Scarecrow" }
    },
    "Sist": { 
        url: "https://i.postimg.cc/hPyHgXfh/Present-List-Sist.png",
        name: { "zh-TW": "紫水晶存錢筒", "ja": "アメジストの貯金箱", "en": "Amethyst Coin Bank" }
    },
    "Snorky": { 
        url: "https://i.postimg.cc/TY7ZGKpW/Present-List-Snorky.png",
        name: { "zh-TW": "手工豆漿48包", "ja": "手作り豆乳48パック", "en": "Craft Soymilk (48 Packs)" }
    },
    "Speaki": { 
        url: "https://i.postimg.cc/xTxWYXcK/Present-List-Speaki.png",
        name: { "zh-TW": "南瓜南瓜套裝", "ja": "かぼちゃかぼちゃセット", "en": "Pumpkin Pumpkin Set" }
    },
    "Sylla": { 
        url: "https://i.postimg.cc/nhXNLnD7/Present-List-Sylla.png",
        name: { "zh-TW": "攜帶型電風扇", "ja": "携帯用扇風機", "en": "Portable Fan" }
    },
    "Taida": { 
        url: "https://i.postimg.cc/tCSLysY2/Present-List-Taida.png",
        name: { "zh-TW": "偷懶專用睡袋", "ja": "サボり用の寝袋", "en": "Sleeping Bag for Skipping Work" }
    },
    "Ui": { 
        url: "https://i.postimg.cc/y8D2N7ZT/Present-List-Ui.png",
        name: { "zh-TW": "魔靈池塘的蓮花", "ja": "精霊蓮池の蓮の花", "en": "Elemental Pond Lotus" }
    },
    "Velvet": { 
        url: "https://i.postimg.cc/T3KBPTDk/Present-List-Velvet.png",
        name: { "zh-TW": "黃金荊棘王冠", "ja": "黄金の茨の王冠", "en": "Golden Crown of Thorns" }
    },
    "Vivi": { 
        url: "https://i.postimg.cc/9QDsfc7K/Present-List-Vivi.png",
        name: { "zh-TW": "銀製高腳杯", "ja": "銀のゴブレット", "en": "Silver Goblet" }
    },
    "xXionx": { 
        url: "https://i.postimg.cc/MpngGzQF/Present-List-x-Xionx.png",
        name: { "zh-TW": "網絡小說單行本", "ja": "ネット小説の単行本", "en": "Web Novel Monography" }
    },
    "Yomi": { 
        url: "https://i.postimg.cc/T3KBPTbv/Present-List-Yomi.png",
        name: { "zh-TW": "向月花花環", "ja": "向月花の花冠", "en": "Moonflower Wreath" }
    },
    "Yumimi": { 
        url: "https://i.postimg.cc/mgPKrT9f/Present-List-Yumimi.png",
        name: { "zh-TW": "偽裝用木製面具", "ja": "変装用の木製仮面", "en": "Camouflage Wooden Mask" }
    }
};

const THOUGHT_MAP = {
	"zh-TW": {
            "Alice": "每天抽1張就可以得知大概運勢的卡片簿。不知道這上面是不是有魔法，卡片會自動洗牌。",
            "Allet": "據說這是一種在沒有像樣餐點時，撒在食物上吃的醬料。真的能無限保存嗎？",
            "Amelia": "原以為是一大堆工作，所以感到很茫然。沒想到裡面夾著一張小小的感謝信。",
            "Ashur": "這是她偷偷塞給我的優惠券，說餓了就可以去找她，還說絕對不能讓艾爾芬看到。",
            "Aya": "綾用冰製成的美麗雪花雕像。不知道上面是不是施加了魔法，就算天氣熱也不會融化。",
            "Belita": "據說是和艾爾芬一起玩過的玩偶，因為非常珍貴，所以她委託我保管。",
            "Beni": "據說，這是為了和我一起去釣魚，努力存下零用錢買的釣魚套裝。",
            "BigWood": "這是一袋種子，她希望我能把它們種植在各地，以防我忘記她。",
            "Blanchet": "她將她親自在庭院裡種下的藍玫瑰拿給我。看來我得將這些花插在花瓶裡保存了。",
            "Butter": "奶油用花草拼接而成的王冠。據說，她花了整整一週的時間尋找她喜歡的花，這頂王冠還施加了艾舒爾的永久保存魔法。",
            "Canna": "這是一台充滿康娜品味的個性化遊戲機。她說自己比回家更常去遊戲廳，因此送給了我。",
            "Carren": "看起來是從卡洛特的花園裡偷來的幼苗種子。附有一張紙條請求種植於教團花壇，但因為擔心被寧琉察覺，無法動手。",
            "Chloe": "這是一幅她所居住的妖精王國的大型刺繡掛毯，上面也描繪了世界樹教團。",
            "Chopi": "喬菲害羞地跑來找我簽名，結果慌慌張張地逃走時，落下了一本簽名簿。",
            "Diana": "蒂亞娜抽空為我做的搖椅，她叫我累了就坐在這張搖椅上休息。",
            "Ed": "伊德將她夢中的美麗場景印出來的畫作。總覺得有點傷感。",
            "Elena": "她說我應該會想念現代文物，所以送給我這個禮物應該不會有竊聽功能吧？",
            "Epica": "艾皮卡將我的旅程改編成小說的書籍。雖然有些地方太誇張了，但閱讀起來很有趣。",
            "Erpin": "艾爾芬偷偷用了我倉庫裡的蠟筆，帶著歉意送來了一套蠟筆作為賠禮。",
            "Espi": "這是艾斯皮在窺探他人夢境後，記錄下來的有趣夢境筆記。",
            "Festa": "這是佩斯塔用過去的名字活動時，親自簽名的最佳專輯。",
            "Fricle": "刺是用橡膠製成的，所以不會傷到人。她好像是趁我不注意時，偷偷把它跟信放進了我的口袋。",
            "Gabia": "這是加薇雅在魔靈山洞窟和湖附近用心收集的漂亮石頭，看起來就像是寶石一樣。",
            "Haley": "據說是莫納蒂姆的祕密地圖，但感覺只是觀光旅遊指南而已。海莉說她在祕密地圖上畫圈的地方是重要的要塞。",
            "Hilde": "上面大大地寫著「希爾德博士」的學位證書。看來是她背著艾琳娜，偷偷藏在了自己的抽屜裡。",
            "Ifrit": "每當遇到炙熱的她時，她都會要求人穿上這個。",
            "Jade": "這是一塊能釋放負離子並保護健康，鑲滿了玉石的床墊。這在艾利亞斯有效嗎？",
            "Jubee": "裝在一個小小的玻璃瓶裡，每天早晨喝完後，茱蜜似乎都會悄悄幫我重新填滿。味道比我所想得更香甜。",
            "Kidian": "好像是基狄恩自己費心打造的短劍。雖然打磨得不精緻，但感受得到她的真心。",
            "Kommy": "據說是一顆只要碰到就會入睡的名牌枕頭。還聽說她特意買了一個跟她自己用的一模一樣的枕頭送給我。",
            "Kyarot": "這是卡洛特在最盛大的農作物大會中勇奪第一的獎盃。",
            "Lazy": "從扳手到焊炬，內含各種工具的組合。是一份非常符合雷吉喜好的禮物。",
            "Leets": "莉茲親自製作的防身用盔甲。是依照龍族的體型製作的，所以非常重，只能拿來裝飾了。",
            "Levi": "這是萊薇打工存錢買給我的人類尺寸保暖內衣，總覺得有點欣慰驕傲。",
            "MaestroMK2": "這裡滿滿儲存了從初次相遇的瞬間起到現在的影片、照片、錄音的紀錄。",
            "Mago": "馬爾做給我的保暖外套。該不會是用她自己的毛做的吧？",
            "Marie": "用從精靈那裡學到的奇怪東西，精心製作的炸彈。瑪麗被寧琉罵了好久，最後不得不自己把爆炸物質移除。",
            "Mayo": "好像是想仿照我的模樣而努力製作的雕像，但瑪約的藝術天賦不佳，看起來有點奇怪。",
            "Meluna": "可以啟動停泊在魔靈湖的梅露娜遊艇的鑰匙……不過目前遊艇被臨時扣押，無法搭乘。",
            "Momo": "這是桃桃送我的禮物，根據她那奇妙的邏輯，利用忍術的瞬移術，可以讓她轉眼間抵達我的住處。",
            "Naia": "巨大的海豚大砲模樣水槍。反映出了奈雅想玩水的心願。",
            "Ner": "這是寧琉當初教導並撫養貝麗塔和艾爾芬的日記。真不愧是寧琉、詳實紀錄了一切。",
            "Picora": "皮可菈親自製作的貼紙簿，上面貼滿了表達各種感情和表情符號的貼紙。",
            "Posher": "為了照顧我的健康而送的葡萄汁，送得太頻繁了，根本喝不完。",
			"RenewaAwaken": "",
            "Rim": "琳扭扭捏捏地送給我的茶杯套組。她每次來我房間時都想用這個一起喝茶。",
            "Risty": "她說自己己經是大人，不玩這些東西了，就拿了一堆來給我。但她現在每天都帶著她的遊戲機來找我玩。",
            "Rohne": "原本猶豫要不要給艾琳娜，但後來決定把它送給我。上面重複了好幾次想請我幫她做真正的炸豬排。",
            "Rude": "路德說她需要一起運動的夥伴，所以寄給我的定期會員卡。我該去嗎？",
            "Rufo": "這是一個可以擲出自己想要數字的作弊骰子。她擔心被提格發現，所以交給我保管。",
            "Sari": "莎莉親手製作的反應卡片。當我用雙手舉起卡片時，莎莉會根據卡片上寫的內容做出相應的反應。",
            "Selline": "不是什麼奇怪的衣服，顧名思義，就是瑟琳娜為了挑釁我分出勝負的服裝。",
            "Shady": "看起來像是一個漂亮的裝飾品，但如果仔細操作，能看到一張謝蒂盯著我的臉。這應該是畫吧？",
            "Shoupan": "修帕親自為我製作的粗糙勳章。她說她拿到勳章時心情很好，所以才想送我這個。",
            "Silphir": "這是一個和路德微妙相似的稻草人，她好像想跟我一起練武。",
            "Sist": "據說，這是希瑟圖剛創業時，將硬幣一枚一枚存起來的存錢筒。",
            "Snorky": "她擔心我因為工作奔波而影響健康，特地送來自製的豆漿。她說她每個月都會做給我。",
            "Speaki": "裝滿了南瓜、南瓜花、南瓜石、南瓜糖等與南瓜有關物品的箱子。",
            "Sylla": "她在莫納蒂姆買了這個與風有關的物品，花了不少錢，但感覺像是被騙了。不過心意才是最重要的！",
            "Taida": "這是一個塗有都市迷彩圖案的睡袋。據說躲進教團附近的這個睡袋裡，可以躲避工作、睡個午覺。",
            "Ui": "這是羽伊居住的池塘裡偶爾盛開的美麗蓮花。似乎是因為羽伊的願望，它不會凋謝。",
            "Velvet": "深信著自己未來將會成為某個地方的女王，提前製作的魔女風格王冠。她請我幫忙保管，直到她成為女王為止。",
            "Vivi": "薇薇喝飲料時喜歡用的高級杯子。據說，這是她想著我做成的杯子。",
            "xXionx": "據說，她自費把她發在暗網上的小說出版，這是一本艾利亞斯只有50本的珍貴書籍。",
            "Yomi": "優米用向月花編成的花環。她還說希望我每天都戴著它。",
            "Yumimi": "戴上這個木製面具後，據說不會被野生動物襲擊。建議在森林裡行走時佩戴。",
        },

	"ja": {
            "Alice": "1日に1枚取り出すとその日の運を大体知ることができるというカードブック。魔法のせいか自動でシャッフルしてくれる。",
            "Allet": "美味しくない食事が出た時にかけるソースだそうだ。永久保存なんて可能なのか？",
            "Amelia": "仕事をたくさん任せられるのかと思って気が重かったが、途中に小さいメモに書かれた感謝の手紙が1枚挟まっている。",
            "Ashur": "お腹が空いたらいつでも訪ねてきてと私にこっそり渡してくれたクーポン。エルフィンには絶対見せないようにと言っていた。",
            "Aya": "アヤが氷で作った美しい雪花の彫刻。魔法が込められているのか暑い時も解けない。",
            "Belita": "エルフィンと一緒に持って遊んでいた人形らしい。大事なものだから私に預けたみたいだ。",
            "Beni": "私と一緒に釣りに行くために、一生懸命お小遣いを貯めて買った釣り具セットらしい。",
            "BigWood": "自分を忘れないように、あっちこっちに植えて欲しいともらった苗の種。",
            "Blanchet": "自分が直接庭で育てた青い薔薇を私に送ってくれた。花瓶に入れてしっかり保管しないと。",
            "Butter": "バターが草花を編んで作った王冠。気に入った花々を一週間探し回ったらしい。エシュールの永久保存の魔法もかかっている。",
            "Canna": "カンナの好みがたくさん感じられるカスタムゲーム機。家に行くことよりゲームセンターに行くことの方が多いので私にプレゼントしたようだ。",
            "Carren": "キャロットの庭園で盗んできた種のようだ。教団の庭に植えてほしいというメモがあったがネルが睨みそうにしていたのでやめておいた。",
            "Chloe": "自分が住んでいる妖精王国を刺繍で編んだ大型のタペストリー。世界樹教団も描写されている。",
            "Chopi": "照れながら私のサインをもらいに来たチョッピーが慌てて逃げた時に忘れたサインブック。",
            "Diana": "ディアナが時間がある時に私のために作ったという揺り椅子。疲れた時は、ここに座ってゆったり休もう。",
            "Ed": "イードの夢の中、美しい一つのシーンをナタが印刷してくれた絵。どこかぼんやりするような気分になる。",
            "Elena": "現代のものを思い出すんじゃないかと私にプレゼントしてくれたものだが……盗聴機能はないのかな？",
            "Epica": "エピカが私の歩みを小説として書いた本。少し誇張されてる部分があるが面白い。",
            "Erpin": "エルフィンが私の倉庫のくれよんを隠れて使ってたと言いながら、謝罪とともにぎこちない感じでプレゼントしてくれた、くれよんセット。",
            "Espi": "エスピーが他の人たちの夢を盗み見しながら、特に面白かった夢を記録したノート。",
            "Festa": "昔、他の名前で活動してた当時、自分のベストアルバムに直接フェスタがサインしたレコード。",
            "Fricle": "棘はゴム製なので痛くない。私が見ていない時に、手紙と一緒にそっとポケットに入れておいたようだ。",
            "Gabia": "ガヴィアが精霊の山と湖の近くで入念に集めた綺麗な石。宝石のような見た目。",
            "Haley": "モナティアムの機密地図だと言いながらくれたが、普通の観光用パンフレットみたいだ。ヘイリーが要所であるとして、いくつかの場所に丸がつけてある。",
            "Hilde": "ドクターヒルデと大きく書かれた学位記。エレナに知られないよう、自分の引き出しに隠しておいたみたいだ。",
            "Ifrit": "いつも熱い自分と会う時はこれを着用してくれという。",
            "Jade": "マイナスイオンが出て健康を守ってくれるという翡翠がいっぱい埋め込まれている電気毛布。エーリアスでは効果があるのだろうか？",
            "Jubee": "小さいガラス瓶に入っているが、食べると毎日ジュビーがいつの間にか注ぎ足してくれているみたいだ。思ったより甘くて美味しい。",
            "Kidian": "ギデオンが自ら丹精込めて作った短剣のようだ。仕上げはちょっと荒いが、誠意が感じられる。",
            "Kommy": "頭をあてるとすぐに眠りに落ちるブランドの枕だという。自分が買ったものと同じものをもう一つ買ったという。",
            "Kyarot": "一番大きい農作物大会に出たキャロットが、1位になってもらったトロフィー。",
            "Lazy": "スパナからトーチまで様々な工具が揃っているセット。レイジーの好みがよく分かるプレゼント。",
            "Leets": "護身用で着ろとリッツが自ら作ってくれたアーマー。竜族の基準に合わせて作られていて結構重い。装飾用として使うことにしよう。",
            "Levi": "レヴィがバイトをして集めたお金で購入した人間サイズに合う肌着。何か微笑ましいし、感心した。",
            "MaestroMK2": "私と出会った初回の瞬間から今まで全ての瞬間を記録しておいた映像、写真、録音記録でいっぱいになっている。",
            "Mago": "マーゴが作ってくれた温かいコート。まさか羊毛は自分の毛じゃないよね？",
            "Marie": "エルフたちから変なことを学んで一生懸命に作った爆弾らしい。マリーはネルに長いこと怒られ、爆発物質を自ら取り出さないといけなかった。",
            "Mayo": "私を見ながら一生懸命に作った彫刻みたいだが、マヨの芸術性が高くなくて、ちょっと奇怪な様子だ。",
            "Meluna": "精霊の湖に停泊しているメロナのヨットの始動キー。現在仮押さえ状態なので乗れないらしい……",
            "Momo": "忍法を使って位置を切り替えると、一瞬で私の居場所に来れるという面白い論理でモモがプレゼントしてくれたもの。",
            "Naia": "巨大なイルカ大砲の形をした水鉄砲。水大砲を打ちながら悪戯したいナイアの希望が投影されている。",
            "Ner": "エルフィンはもちろん、べリータを初めて担当して教育し育てていた頃の日誌。ネルらしく細かく内容を書き留めてある。",
            "Picora": "ピコラが直接作ったステッカーブック。色んな感情とエモーションを表現したステッカーでいっぱい。",
            "Posher": "私の健康を考えて送ってくれたブドウジュース。あまりにも頻繁に送ってくるので飲み切れないと思う。",
			"RenewaAwaken": "",
            "Rim": "リムがぎこちない感じで私にプレゼントした茶器セット。私の部屋に来る度これで一緒にお茶を飲みたいという。",
            "Risty": "自分はもう大人だからやらないと言いながらいっぱい持って来たが、今は普通に自分のゲーム機を持って毎日遊びにくる。",
            "Rohne": "エレナに渡そうか悩んだ挙句、私に渡すのだそうだ。本物のトンカツを作ってくれということだけが十数回書かれている。",
            "Rude": "ルードが一緒に運動するメンバーが必要だということで、私に送った定期会員券。行かないといけないのかな？",
            "Rufo": "投げるといつも自分の好きな数字が出せるインチキ用のサイコロ。ティグにバレたら怒られるということで私に預けたみたいだ。",
            "Sari": "サリー手作りのリアクションカード。両手でカードを持ち上げると、カードに書いてある内容に合わせて反応する。",
            "Selline": "全く変な服ではない。言葉通り、セリーネが私を挑発するための勝負貸衣装。",
            "Shady": "綺麗な飾りみたいだが、あれこれ操作するとシェイディが私を見つめている顔が見える。これ絵なのかな？",
            "Shoupan": "シュパンが自ら雑に作った私のための勲章。自分も勲章をもらった時は気分がよかったと言いながら私にプレゼントしてくれた。",
            "Silphir": "ルードと妙に似ているカカシ。私と一緒に武術の修行をしようという意図のようだ。",
            "Sist": "商売を初めてやり出した時、シストがコインを一つ一つ貯めていた貯金箱らしい。",
            "Snorky": "業務で忙しい私の健康を心配して自ら豆を挽いて作った豆乳を送って来た。毎月私だけのために作るということらしい。",
            "Speaki": "かぼちゃ、かぼちゃの花、かぼちゃの石、かぼちゃの水飴など、かぼちゃと関係のあるものがいっぱい入っている箱。",
            "Sylla": "モナティアムで風と関係あるものだと聞いて大金を叩いて買ったらしいが詐欺にあったみたいだ。大事なのは心だよ！",
            "Taida": "アーバンカモフラージュ柄の寝袋。教団の近くでこの寝袋に入っていると仕事をサボって昼寝ができるそうだ。",
            "Ui": "ウイが住んでる蓮池にたまに花咲く綺麗な蓮。ウイの願望で枯れないようだ。",
            "Velvet": "将来、自分がどこかの女王になれると信じ、前もって作っておいた魔女様式の王冠。女王になる前まで預かって欲しいという。",
            "Vivi": "ヴィヴィが飲み物を飲む時よく使う高級なコップ。私を思いながら作ったらしい。",
            "xXionx": "自分がダークネットで書いていた小説を自費で出版するらしい。エーリアスに50部しかない貴重なものだという。",
            "Yomi": "ヨミが向月葵を編んで作った花輪。いつも身につけてほしいという言葉と共に渡してくれた。",
            "Yumimi": "木でできたこの仮面をつけると野生の獣に攻撃されないらしい？森を歩く時におすすめだそう。"
        },
	"en": {
            "Alice": "A card deck that roughly tells you this day's fortune by drawing a card once daily. It seems that its magic automatically shuffles the cards.",
            "Allet": "A sauce she says to pour on meals, when it doesn't taste as good. Can it really be stored forever?",
            "Amelia": "A pile of paperwork that once overwhelmed me, thinking that I had to handle them. But a small note of gratitude was tucked between the documents.",
            "Ashur": "A coupon that she secretly handed to me, telling me to come find her whenever I'm hungry. She also said never to show it to Erpin.",
            "Aya": "A beautiful ice sculpture of a snowflake that Aya made. It never melts, even in summer, perhaps due to her magic.",
            "Belita": "A doll that her and Erpin used to play with. It seems she entrusted it to me, since it's precious to her.",
            "Beni": "A fishing rod set gifted to me by Beni. She diligently saved up money to buy it to go fishing together.",
            "BigWood": "Seeds that she gave me to plant everywhere, asking not to forget her.",
            "Blanchet": "Blue roses that Blanche grew in her garden and gifted to me. I'll take good care of them, putting them in a vase.",
            "Butter": "A flower crown that Butter made from grass flowers. She said that she searched her favorite flowers for a week. It's also enchanted with Ashur's permanent preservation magic.",
            "Canna": "A custom game console that shows Canna's preferences. It seems she gifted it to me, since she has no time to go home and usually visits arcades while on patrol.",
            "Carren": "A seed package that seems to have been stolen from Kyarot's garden. There was a note asking me to plant them in the Order garden, but I couldn't do it under Ner's watchful eyes.",
            "Chloe": "A large tapestry embroidered with the Sprite Kingdom where Chloe lives. The Yggdrasil Order is also depicted.",
            "Chopi": "An autograph book of Chopi. Acting shy, she came to get my autograph earlier, but panicked and ran away, leaving it behind.",
            "Diana": "A rocking chair that Diana worked on for me whenever she had free time. She told me to sit here and relax when I'm tired.",
            "Ed": "A picture capturing a beautiful scene from ED's dream that Nata printed for her. It leaves me with a bittersweet feeling for some reason.",
            "Elena": "A laptop that she gifted to me, saying I probably miss modern products and culture... I hope it hasn't been bugged.",
            "Epica": "An epic novel written by Epica, based on my adventures. It's slightly exaggerated, but still fun to read.",
            "Erpin": "A pastel set that Erpin gifted me hesitantly, apologizing for secretly taking pastels from my storage.",
            "Espi": "A diary that Espi keeps about the dreams of others she has peeked into. She gathered particularly interesting ones.",
            "Festa": "An album Festa recorded when she was in the music scene under another name. It's even signed by her.",
            "Fricle": "A ring with rubber thorns that won't hurt. It seems she slyly slipped it into my pocket with a letter when I wasn't looking.",
            "Gabia": "Beautiful stones that Gabia painstakingly collected near the Elemental Mountain's cave and pond. They look no different from gems.",
            "Haley": "Haley gave this to me, saying that it's a classified map of Monatium, but it looks more like a tourist pamphlet. There are some circles that she marked as important strategic points.",
            "Hilde": "A diploma plaque with 'Doctor Hilde' written in big letters. It seems she secretly hid it in her drawer from Elena.",
            "Ifrit": "A suit that Ifrit asks me to wear whenever I come to see her, as she is always burning.",
            "Jade": "An electronic blanket with jade stone, said to emit anions and protect your health. Does it work in Elias?",
            "Jubee": "A little honey jar, but apparently Jubee refills it every morning without me noticing. It's sweeter and tastier than I expected.",
            "Kidian": "A dagger that Kidian put a lot of effort into welding. The finishing is a bit rough, but I can feel her heart.",
            "Kommy": "A luxury pillow that makes you fall asleep easily. She bought the same pillow as the one she uses.",
            "Kyarot": "The 1st-place trophy that Kyarot won in the largest crop contest.",
            "Lazy": "A toolset with various tools, including a spanner and a torch. I can feel Layze's taste perfectly in this.",
            "Leets": "Armor Leets made for me to wear for protection. But unfortunately, it's incredibly heavy since it's designed based on a dragon's strength. I think I'll just use it for decoration.",
            "Levi": "A human-sized pajama that Levi bought with the money she earned from her part-time job. For some reason, I feel warm and proud.",
            "MaestroMK2": "A drive filled with videos, photos, and audio recordings, saving every moment from the first time we met until now.",
            "Mago": "A warm coat made by Mago. It's not made from her own wool, is it?",
            "Marie": "A bomb that Marie put a lot of effort into making after learning something strange about the Elves. In the end, she had to remove the explosive materials herself though, after being scolded by Ner.",
            "Mayo": "A sculpture of me that Mayo has diligently made. But her artistic skills aren't great, so it looks a bit bizarre.",
            "Meluna": "An ignition key for Meluna's yacht, which is now anchored at the Elemental Lake. Unfortunately it's currently under seizure and can't be used...",
            "Momo": "This is a gift from Momo, who came up with the clever idea that if I use Ninjutsu to swap places, I could be at my place in the blink of an eye.",
            "Naia": "A giant water gun shaped like a dolphin cannon. It reflects Naia's wish to play with water cannons.",
            "Ner": "A diary of the old days when Ner was taking care of and educating Erpin and Belita. As expected of Ner, it is written meticulously.",
            "Picora": "A sticker book that Picora made by herself. It's full of stickers showing various emotions and emojis.",
            "Posher": "Grape juice that Posher sent me, as she worries about my health. She sends it too often, so that I can't finish it all.",
            "RenewaAwaken": "",
            "Rim": "A teacup set that Rim gifted to me shyly. She said she wants to drink tea together every time she visits my room.",
            "Risty": "Risty gave it to me, saying that she's all grown up now and doesn't need it anymore. But now she comes over to play with her game console every day.",
            "Rohne": "A journal that Rohne passed to me, saying she once wondered about handing it to Elena. The only thing written in it are requests for real cutlet.",
            "Rude": "Premium membership access that Rudd sent me, saying that she needs a training buddy. Should I go?",
            "Rufo": "A cheating dice that always shows the number she wants. She probably entrusted it to me, not to be caught and hit by Tig.",
            "Sari": "A reaction card crafted by Sari herself. When I hold up the card with both hands, she reacts according to the card.",
            "Selline": "It's not a weird outfit at all, definitely NOT! It's literally a combat outfit that Selene made to taunt me.",
            "Shady": "A decorative ornament, but if I operate it in a certain way, I can see Shaydi's face watching over me. This is just a painting, right?",
            "Shoupan": "A clumsy medal that Shoupan made herself just for me, but it was crafted with love. She gave it to me, reminiscing about how happy she was when she received her own medal.",
            "Silphir": "A strange scarecrow that uncannily resembles Rudd. It seems that she wants to train martial arts together with me.",
            "Sist": "A coin bank in which Sist had collected coins one by one since she first started her business.",
            "Snorky": "Craft soymilk that Snorky sent me, worrying about my health due to my heavy workload. She said she'd make it for me every month.",
            "Speaki": "A box filled with various pumpkin-related items, such as pumpkins, pumpkin soup, pumpkin spice, and pumpkin bread.",
            "Sylla": "She spent a fortune on a fan in Monatium that she had heard was a wind-related item, but it turns out she was cheated. It's the thought that counts!",
            "Taida": "A sleeping bag with an urban camouflage pattern. Rumor has it that if she crawls inside near the Order, she can sneak in a nap and avoid work.",
            "Ui": "A pretty lotus flower that blooms in Ui's pond from time to time. It seems to never wither, perhaps due to her wish.",
            "Velvet": "A witch-style crown that she made in preparation, as she believed she would become a queen sometime in the future. She asked me to take care of it until she becomes a queen.",
            "Vivi": "Vivi's favorite elegant cup for drinking beverages. She said that she made it while thinking of me.",
            "xXionx": "A self-published bound book of a web novel that Xion released on the Darknet. She said it's a rarity with only 50 copies circulating in Elias.",
            "Yomi": "A wreath made by Yomi weaving moonflowers together. She gave it to me with the request to always wear it.",
            "Yumimi": "A wooden mask said to prevent attacks from wild beasts. But really? However, she recommended me to wear it while wandering in the forest."
        }
};

const LETTER_MAP = {
	"zh-TW": {
            "Alice": "教主，你還記得嗎？之前問過你要不要和鏡子裡的姊姊一起生活的事。我決定取消了。雖然有點可惜，但也沒辦法。因為我已經發現了，讓給姊姊實在是太浪費了，因為你這個傢伙實在是太有趣了。讓我看上可不是件容易的事，所以你應該感到榮幸。下次再來找我占卜塔羅牌吧。我會幫你抽出最好的運勢。不過，至於那運勢對誰來說最好，我可不會告訴你。",
            "Allet": "教主大人，您好！我是莫納蒂姆鎮壓隊的阿萊特。平時總是因公事聯絡，這次用私人的名義寫信，還真有點不習慣呢。其實寫這封信的主要原因是想向教主大人表達感謝。教主在任何事情上都能身先士卒，這一點是我最敬佩的地方！啊，不過康娜隊長也是我最敬佩的人之一……唔，真難抉擇！總之，教主大人，以後如果在莫納蒂姆遇到什麼困難，請一定要找我阿萊特。我將全力以赴，竭誠為您效勞！忠誠！",
            "Amelia": "唉，沒想到我竟然會給人類寫這樣的信。我就不拐彎抹角了。謝謝您，教主。經過長時間的思考，我終於明白無法忽視您恩情的事實。您總是包容我的無禮行為，並持續關照我。身為精靈的我，至今仍無法完全理解您為何這麼做，但我知道，這需要非凡的意志力。這封信就是我對您的回禮。請不要告訴市長，這是我們之間的秘密。",
            "Ashur": "教主大人，您好。這樣給您寫信，感覺有些別扭呢。這段時間，您辛苦了，總是聽我唠叨。不過，那些話可都是為了教主大人著想才說的，您應該能理解吧？畢竟您又不是女王大人，我相信教主大人一定能理解的。嗯……其實，其實我不是想說這些的。我最近試做了一款新麵包，味道還不錯。請品嚐一下，告訴我您的感想。",
            "Aya": "堆積萬年雪的魔靈山雖然安靜，但有時也會讓人感到寂寞。教主認真傾聽我尋找妹妹的故事，還為我擔心，真的讓我心存感激。我真心希望，有一天我們能打破彼此之間的隔閡，心與心真正相通。我會一直等待教主的心。",
            "Belita": "教主，感謝你一直在旁協助艾爾芬。她雖然正直且充滿感情，但偶爾也讓人擔心她的脆弱面。不過有寧琉和教主在她身邊，我就放心了。雖然有些羞於啟齒，但我有時候也會羨慕她。身為魔女女王，我可以依靠芙莉可，但作為魔女貝麗塔，有時會感到孤獨。不過你也別太放在心上，如果有空能來地下找我聊聊，我會很開心的。知道你很忙，就寫到這裡吧。",
            "Beni": "教主大人，您好！這樣寫應該沒問題吧？嘿嘿！我說想向教主表達感謝之情，村長就建議我寫信！啊，現在村長還在前我呢！欸……她說這種小事不用特別寫也行。不過，還是要感謝您每次在宴會廳裡提供好吃的食物，還陪我聊天！下次如果您來獸人森林，我一定會親手做超級好吃的料理款待您！知道吧？",
            "BigWood": "最近大木頭有些煩惱，不對，應該說是曾經有過煩惱。不過現在已經解決了，這都要感謝教主。如果只有我一個人，要在妖精王國生存下去是很困難的。多虧了教主，我才能在這裡紮下根來，這一切都要歸功於教主。因此，我想表達我的心意，為了我珍貴的朋友教主，我準備了一份禮物。希望您能好好照顧它。",
            "Blanchet": "託教主大人的福，我在教團裡認識了很多朋友。和大家快樂相處的過程中，也漸漸習慣露出笑容。雖然您有時候會捏我的臉頰，讓我有點不知所措……但我認為那樣的惡作劇也是教主大人溫柔的一部分。在我還默默無名的時候，曾經收到一位觀眾的來信。當時的我還不習慣做出表情，但我肯定，那時的我一定是笑著的吧。我想將那份情感，與教主大人一同分享。",
            "Butter": "教主大人，您好！我是奶油！今天我玩得超開心！然後、然後我還去散步了！可是，教主大人不在，我覺得好難過。教主大人什麼時候可以陪我一起去散步呢？柯米說最近您很忙。但是我真的很想跟教主大人一起！下次一定要一起跟奶油去散步！約好了喔！",
            "Canna": "教主大人，您好！我是莫納蒂姆機動隊的隊長康娜。難得休假，終於有空寫封信了。其實，從安全角度來說，這種手寫信並不太妥當……但內容也沒什麼機密，應該沒關係吧。大概是這樣的。想藉這封信感謝教主您一直以來的幫助和關照……啊！有緊急召喚了，看來我的休假到此結束了。如果下次還能有休假，我一定會再寫信給您！一定喔！拜託了……！",
            "Carren": "教主您好。我是曾經的「正宗生食家」卡蓮。上次我在您面前失態了吧？最近我已經放下了對ElfTube的執念，過著普通妖精的生活，所以請不用擔心。下次我們一起去卡洛特姊姊的花園玩，喝杯美味的咖啡吧。就像我上次承諾的那樣，我也會買一些美味的蔬菜來。直到我們再次見面的那天……當然。",
            "Chloe": "教主，什麼時候打算再來裁縫店呢？啊，不是有什麼特別的事，只是想讓你再幫忙上次那個玩偶裝的工作罷了。嗯，不對！其實不一定非要玩偶裝的工作，教主幫我的忙，做什麼都好。而且，賽巴斯蒂安說它很想念教主！它好像特別懷念和教主一起共度的時光。等工作結束後，我們不要只去服裝店，也去其他地方玩玩吧。和教主在一起總是特別有趣！",
            "Chopi": "教主大人，您好！感謝您一直為我們村莊的和平付出努力！身為獸人村名副其實的「師父」，我也會為了培養優秀的戰士而努力！還有……如果您見到那位超級將軍、國王、神、皇帝、陛下、強韌眼神、能操縱傳說之劍的獸人村永恆第一劍士提格大人，請告訴她我正在成為一名非常出色的戰士！請繼續關注喬菲的成長吧！再見！",
            "Diana": "我準備了很多美味的料理。以不甜的食物為主，結果菜色稍微單調了一點。不過，比起種類，還是份量更重要，不是嗎？雖然不甜的食物能保存久一些，但最好還是趁新鮮的時候享用，所以才寫了這封信。信應該很快就能送到吧？甜點也準備得很豐富，記得穿輕便一點的衣服過來。",
            "Ed": "像這樣寫幾個字，真的能改變什麼嗎……雖然我現在還是不太明白，但娜塔堅持說這能為夢境賦予重大意義，要我試著寫封信看看。教主大人……我不禁在想，要是與您共度的時光不只是場夢就好了。起初我以為只有娜塔能理解我，但現在不一樣了。我希望您的存在能在這場夢境中永遠延續。請和我還有娜塔一起，繼續做夢吧。",
            "Elena": "喂，人類，對你刮目相看了喔？老實說，我們犯了錯，但我很驚訝你比我想像中還要照顧我們，這就表示我們可以繼續胡搞瞎搞了吧？開玩笑的，我才沒那麼白目。嗯～以後我會克制一下的。雖然我不知道我能不能控制所有莫納蒂姆市民，但我會努力讓大家安分守己的。謝啦，就這樣。",
            "Epica": "教主，今天特別想透過這封信表達我的謝意。教主應該知道小人以說書人自居，四處流浪。曾經有過無數的故事，也有過許多的主角。長久以來，小人一直認為，作為一名讓那些主角更加出色的說書人，已經足夠了。但教主卻不同，您不僅照顧身為說書人的小人，還讓我能夠與您一同書寫您的故事。感謝您，教主。我會一直陪伴著您，直到您的故事結束。",
            "Erpin": "教主好！我是不是常常太笨拙，讓你想逃跑了？寧琉說教主絕對不會這樣，但我一直覺得你可能會離開我。結果我想錯了，感謝你不曾離開。還常常買麵包給我，甚至把自己的份讓給我，真的很感謝你。如果沒有你的幫助，我不可能成為女王，可能會餓著肚子，睡不著，受凍挨餓。艾爾芬上。",
            "Espi": "這封信最早從莫納蒂姆開始傳起，一年裡四處流轉，為收到的人帶來幸運。現在這封信傳到了教主手中，必須在4天內離開教主的身邊。請將這封信連同其內容，一共傳給7個需要幸運的人。可以用複製的方式也可以。或許您會覺得這只是迷信，但其實是真的。為什麼呢？因為如果您不照做，夜裡不只是惡夢……而是我會親自去找您，呵呵呵。",
            "Festa": "【您好！這裡是搖滾節活動主辦單位。恭喜您參加了「按讚搖滾節ElfTube，開心享受搖滾節吧！」活動、並成功抽中獎品搖滾節入場券1人2張！】看到沒？我的中獎運氣怎麼樣？反正我是搖滾節的參加者，不需要入場券～但教主你應該需要吧？你一定會來看我的，對吧？不是嗎？那就搖滾節見囉！",
            "Fricle": "今天肯定又是帶著那副呆萌的表情，埋頭處理那堆積如山的文件吧。你知道在開始處理文件之前，分類是很重要的嗎？先將相同類型的文件分開，然後依據重要性排序處理，這樣可以更快速地完成工作。我才不是因為擔心你忙得焦頭爛額才告訴你這些的。作為教主，這點事情你應該早就想到吧。那麼，今天也請繼續努力工作吧！",
            "Gabia": "以前總是待在洞穴裡，只有地之靈陪我玩，真是無聊得很。還好教主在宴會廳裡給我好吃的，還常常陪我聊天，讓我很開心。和教主一起玩的時候，總會讓我想起以前和希拉、奈雅和伊弗利特感情還很好的那些日子。教主做的料理，有好吃的也有不好吃的，但我都一口不剩地吃完了。有時候還會偷偷帶回去分給地之靈們，她們都很喜歡。下次我們再一起玩吧！",
            "Haley": "親愛的教主，近來可好？托你的福，艾利亞斯今日也和平安穩。說來或許突兀，但你著實是位能幹之人。若在地球時也能遇到像你這般人物，任務執行想必會順遂許多。坦白說，我對地球的朋友們不甚滿意。即便針對待遇提出抗議，他們也從未認真考量。正因如此，我才會對你有這麼高的評價。在此，我要向你的辛勞表達敬意。改日不妨來莫納蒂姆，我必盛情款待。",
            "Hilde": "教主大人，您好。您最近的檢查結果似乎不是很好。該不會因為待在艾利亞斯，就完全放鬆警惕了吧？看來有必要再次進行檢查了。有空的話，務必過來一趟。呵呵，開玩笑的。您的健康檢查結果非常良好！這應該多虧教主大人平時管理得當吧？不過既然到了該檢查的時候，還是請您找時間再來一趟吧！希爾德敬上",
            "Ifrit": "喂，教主！是我，伊弗利特！寫信這件事，為什麼這麼難啊？寫著寫著，紙就一直被燒掉，這已經是第四張了。不過也沒什麼大不了的……只是想感謝你這段時間一直聽我抱怨，還耐心陪我說話。而且，我聽說你對宴會廳裡的初級火之靈也一直很友善，是吧？教主，我覺得你真的值得信賴。所以才說，以後我們也要好好相處啊！",
            "Jade": "教主，感到榮幸吧！這封由本傑德大人親筆寫的信，很快就會被視為艾利亞斯的寶典珍藏呢！嗯，其實我不是要說這個。我是想跟你說聲謝謝。看著每天只會唠叨的教主，我總在想為什麼會這樣……有本書上說，唠叨全～是因為在乎！所以今後也請多多關照。\n——傑德敬上",
            "Jubee": "邀請教主參加茱蜜派對嗡！專屬茱蜜的秘密派對即將舉行嗡！會有鐵茶蜜3項競技、蜂蜜收集大賽、找出錯誤茶蜜等豐富活動，以及豪華蜂蜜自助餐唷！絕對可以期待唷！希望教主一定要來參加，並擔任派對開場的特別演講嘉賓嗡！不用準備參加費或任何物品嗡！總覺得好像漏掉什麼重要的話，但想不起來嗡，就先寫到這裡唷！",
            "Kidian": "自從和達雅吵架後，我就不想再交朋友了。或許是因為害怕再和朋友吵架後，又會變得孤單吧。所以當教主主提來找我說話時，我真的很驚訝。我也很好奇，自己是否還能再次交到朋友。教主總是一步步接近我，努力拉近我們的距離。現在，換我來努力了。我可以稱呼教主為我的朋友嗎？",
            "Kommy": "教主真有用呢。不僅給柯米飯吃，還陪柯米玩得很開心。只要以後繼續這樣，柯米心中的好友排行榜上，你肯定能名列前茅！是不是很好奇柯米為什麼突然寫信？因為柯米在書上看到一句話：「語言的界限就是世界的界限。」也就是說，教主現在已經進入柯米的世界了，恭喜你哦！不過，寫信實在太麻煩了、手好痠。柯米要去睡覺了。就寫到這裡吧，教主。",
            "Kyarot": "嘿、教主!雖然在宴會廳常聊天,但寫信還是第一次呢!能交到像我的植物一樣高大的朋友,我真的超開心的!聽說教主住的世界也有茄子、胡蘿蔔跟南瓜, 我最近常夢到去教主的世界玩呢。以後你一定會帶我去的對吧?我會好好期待喔!在那之前,要常常來我的花園玩喔!",
            "Lazy": "啊，教主大人，您好！我是雷吉。這是我第一次寫信給您。雖然直接見面打招呼會更好，但每次遠遠看到您時，您總是看起來很忙碌的樣子。我自己呢，總是會莫名其妙地被捲進一些事情裡而忙得團團轉，但教主大人您看起來是那種會主動去找事做的類型。啊，不過這絕對不是批評的意思！只是想說，從您身上真的感覺到，您為了艾利亞斯付出了許多努力，也帶來了不少幫助。真的非常感謝您，教主大人。那下次我們就別用信件了，直接見面吧！",
            "Leets": "嗨，教主！您過的好嗎？我今天也完成了一天的鍛鍊，然後努力地四處尋找下一個對手！我絕對不是窩在家裡被路德訓斥才被趕出來的！……所以說啊，教團裡會不會有什麼值得一戰的事情啊？啊，我並不是希望有那種事情才這麼說的！只是覺得突然有點事情發生也不錯……呵呵，總之，有什麼事情一定要找我唷，教主！",
            "Levi": "以前我做過「幸運信」寫作的工讀生……但要說給誰寫信，這還是第一次，或者說真的很久沒寫過了。啊，我之前寫過一封魔女升級審核用的請願書……那麼，這應該是我第一次懷著愉快心情寫的信了吧！多虧教主大人設置了宴會廳，讓我能嘗到各式各樣的料理。也因為這樣，我充滿了力量，甚至多接了兩份兼職呢！\n心懷感謝，萊薇敬上。",
            "MaestroMK2": "#include &lt;stdio.h&gt;int\n main(){printf(\"\\x54\\x68\\x61\\x6E\\x6B\\x20\\x79\\\nx6F\\x75\\x2E\\x20\\x48\\x75\\x6D\\x61\\x6E\\x2E\");\nreturn 0;}",
            "Mago": "教主大人，您那裡還好嗎？我的牧場最近天氣非常好，大樹下總是有涼爽的樹蔭，柔和的微風還帶著花香撲鼻而來。坐在樹蔭下，真的能感受到一種前所未有的平靜。和朋友們一起躺著休息時，我想到了教主大人。大家都說很想見您，我也是。所以寫下這封信，希望能早日見到您。",
            "Marie": "教主大人。我們的回憶總是少不了炸彈呢。我突然想到了一個全新的炸彈點子。我要先去把它做出來，然後再繼續寫。做好了。這顆炸彈被我設計成在教主大人收到並讀完這封信後會爆炸。至於我打算把它裝在哪裡……那是秘密！下次一定要告訴我對這顆炸彈的感想哦？那麼，祝您爆彈愉快！",
            "Mayo": "致教主：最近聽說您到處忙個不停。我可不喜歡我的收藏品有任何刮痕，也不喜歡被其他人染上指紋。包裝損壞更是不行。所以，教主最好乖乖待在教團裡。這也是因為收藏品也需要有社會地位和體面，才特地把你視作教團的一部分。記住，不要到處亂跑，只能待在教團裡。別忘了，教主是我的收藏品。",
            "Meluna": "以我的身份來說，寄出私人的信件其實非常少見。但教主您是特別的存在。您是我們公司的顧問，也是我的朋友。還有……我也不知道該怎麼形容，教主就是教主嘛。莫納蒂姆的一切都變化得非常快，有時候真的讓人感到疲憊。所以教主能不能一直保持您那特別的模樣呢？看完這封信後，請把它燒掉。因為要是筆跡外流，可能會引發一些麻煩事。",
            "Momo": "教主大人！在下在此正式提議！請成為在下的弟子吧！教主大人肯定有成為忍者的才能！莫非……您是在懷疑在下的實力嗎？！在下可是待過反對獸糧業的獸人，這資歷就是實力保證！就算不滿意在下的提議，也請偶爾一起修煉吧！畢竟聯合修煉總是很快樂的嘛！那麼，再會了！",
            "Naia": "教主～！這是我第一次寫信喔？竟然能收到我的第一封信，你要感到光榮喔～！本來在想該寫給誰，但感覺就算寫給希菲爾她也不會看，所以就寫給教主啦！嗯……還有，上次我的惡作劇好像有點太過火了，對不起。其實我是為了道歉才寫信的。你沒有很生氣吧？如果不生氣的話，下次再跟我一起玩吧！跟教主一起玩真的超有趣的！",
            "Ner": "教主大人,您好。\n雖然說這個可能有點突然,但我最近常常覺得,我們世界樹教團的教主不是別人而是您,真是太好了。希望您今後也能繼續留在我和女王大人的身邊。對了, 昨天我沒收到您的修養錄,您應該還在寫對吧?我會等您的。\n寧琉敬上。",
            "Picora": "師父！您好嗎？您永遠的弟子，皮可菈寫信給您！能和師父在一起的每一天，都像在作夢一樣。不但能得到師父變成貼紙、變成髮夾的教誨，還能一起聊些生活瑣事、一起吃好吃的東西，對我來說真的是莫大的幸福！為了成為不給師父添麻煩的帥氣弟子，皮可菈會更加努力的！",
            "Posher": "教主，我這次又製作了一種新藥水，要不要來試試看？我已經說過很多次了，像我的藥水這樣苦口的東西，才是對身體好的，你懂的吧？不過嘛，為了教主，我可以破例考慮一下製作一款味道好一點的藥水。當然，也別抱太高期待，畢竟味道的好壞是很主觀的。呵呵。有空的話，記得來找我玩。我會等著你的。",
            "RenewaAwaken": "",
			"Rim": "在山坡上的偏僻小屋獨自生活的我，自從來到宴會廳後結識了許多朋友。似乎也有喜歡我笑話的朋友，讓我感到欣慰。喜歡檸檬茶的朋友多嗎？希望有一天朋友們也能來我家玩。多虧教主大人在宴會廳讓我認識了這麼多使者，真是太好了。",
            "Risty": "教主嗨嗨~！安妞教主！要是你有登入我玩的遊戲的話，我早就在遊戲裡密你了，可是在遊戲裡老是遇不到你，我才只好用寫信的啦。哎呀，其實也沒什麼大不了的事。就只是想謝謝你上次幫我打掃房間，還有在宴會廳的時候也很照顧我。不過要親自出門去找你實在太遠又太麻煩了，所以我才用寫信的。這樣也 OK吧﹖以後要多登入我玩的遊戲喔。我們一起打一場嘛，我會Carry你的!聽到沒?就這麼說定囉﹖",
            "Rohne": "我是親切的間諜，能力出眾的間諜！且從不浪費食物的間諜，洛涅！能和教主大人聊各種話題，紓解工作的壓力，真的非常開心。不知道教主大人和我聊天，是否也覺得有趣呢？不過我有點擔心，自己會不會不小心把機密內容說漏嘴了！希望教主大人也能非常非常開心！對了，我常去宴會廳這件事，請務必保密，特別是不能讓艾蜜莉雅小姐知道！",
            "Rude": "教主，你好。用文字而不是口頭來交流，對我來說還是挺陌生的。每次在宴會廳總是吃到許多對身體有益的東西，我想藉這個機會向向你表達感謝。最近，你還有在好好鍛鍊嗎？雖然我每次見到你都會問這個問題，可能有點煩，但這是我表達關心的方式。下次來我的訓練室吧，我準備了新的訓練課程。",
            "Rufo": "反對獸糧黨的首腦虛波，向氣象局一等猛將教主寄送了這封信。不過我對如何寫信不太擅長。提格隊長還說要我幫她寫一份，但虛波真的很忙啊！教主，你是怎麼弄到那麼多食材的？要小心別被班尼發現了。我真的很想和你玩一次桌遊。我願意借出精靈的特製裝置，讓教主擲骰子更順手！但一定要對提格隊長保密。",
            "Sari": "你好，教主！好久不見！果然，寫信這件事真的很困難，因為看不到對方的話語或行動。因此我現在正想像著腦海中的教主正在和我說話，一邊把這種想像寫下來！喔，現在腦海裡的教主正在和我聊昨天吃到的焦糖布丁。哇，超棒的！一定很好吃吧！教主你連解說都這麼親切、清楚呢！嗯，不過果然還是和腦海中的教主對話有點彆扭。我好想趕快像平時那樣直接和你見面！快來親自講一些有趣的事情給我聽，教主！知道吧？",
            "Selline": "嗨～整理相簿時發現了教主拍得不錯的照片耶？覺得只有我看太可惜了，就發給你一張。別擔心，不是什麼奇怪的照片。看著照片突然想起跟你下棋的時候。雖然一個人玩也不錯，但果然兩個人一起玩才是最棒的。下次再陪我玩一局吧？我保證不會笑你技術爛的。呵呵，我認真的啦～",
            "Shady": "欸……這是什麼？隨便寫點什麼就行嗎？看別人都寫了，我好像也該寫一封……有點壓力啊。我本來不是這種性格的，真是奇怪。我到底為什麼會做這種事？為什麼把自言自語都寫成文字了？嗯？嗯？喂！你到底對我做了什麼？唉～心裡有點不踏實，但又莫名覺得不壞。總之，我以後還是會繼續來宴會廳鬧的，等著我吧！",
            "Shoupan": "咻咻咻咻！啪啪啪啪啪！修帕！教教教教！主主主主！你好！寫字真的太麻煩了！手都跟不上我想像的速度！總之，下次一起去兜風吧！我會特別讓你坐我的後座喔！要去哪裡好呢？去上次說過的外面世界怎麼樣？我會突擊問你的，你要好好想清楚喔～掰掰～",
            "Silphir": "最近那個路德老是催我去運動。哼，她以為只靠肌力訓練就能解決一切。所以，我希望教主能幫助我進行訓練。嗯……才不是因為想見你才這麼說的！只是因為教主對我最有幫助而已，真的啦！我會告訴你我的訓練時間，到時候一定要準時來喔。",
            "Sist": "教主大人您好。不知您最近過得好嗎？我最近在推廣新產品，所以舉辦了付費體驗活動。看在是教主大人的份上，體驗費就只收您2000金幣。隨信附上商品，請使用一週後務必寫下非常滿意的使用心得寄回。期待您的好評喔！",
            "Snorky": "我是老大永遠的左右手斯諾奇。這個以前只會揮拳頭的斯諾奇，現在也會幫老大辦事、種種豆子，甚至像這樣寫信了。老大，謝謝您讓我體會到平靜的日常。要是能早點追隨老大就好了……我對那些沒能早點認識老大的時光，深感遺憾。今後我也會隨時隨地守在老大身邊。也請老大繼續守護我。",
            "Speaki": "教主大人！昨天和前天，那位名叫斯皮奇的使者拜託寧琉向您傳達問候！寧琉一字不漏地傳達給您了！教主大人！謝謝您那麼重視斯皮奇和南瓜！斯皮奇一直對您滿懷感激！如果您來到幽靈沼澤，斯皮奇的南瓜朋友們會在背後照應，保護您！還會阻止艾斯皮和愛麗絲對您動手！所以，隨時歡迎您來斯皮奇的家玩哦！",
            "Sylla": "教主，信件有順利送到嗎？我是直接用風送出去的，應該能安全送達吧。我一直對教主心懷感謝。不僅是對我，還有您對魔靈們的友善態度，我可是經常看到的。魔靈和其他種族能比以前相處得更融洽，這其中教主您一定功不可沒。作為尊貴風之靈，也是魔靈們的代表之一，我由衷地想向您表達感謝。希望今天也有一陣令人愉快的微風吹向您。",
            "Taida": "教主大人，您好！利用工作時間稍微抽空寫了這封信給您。這絕～對不是因為我想偷懶當「薪水小偷」啦！每次在莫納蒂姆看到您，您總是熱情地跟我打招呼，還會特別關心我，這點我真的都感受到了。不過呀，下班時間的我，可不是那個「公務員泰達」，而是只想吃喝玩樂的泰達。所以……要是能把一些雜事交給其他人處理就好了……咳咳。下次再見囉！",
            "Ui": "教主！真的非常感謝您一直陪伴著羽伊！在遇到教主之前，羽伊的朋友只有耶魯。但現在，多虧了教主，羽伊認識了好多朋友，現在朋友變得非常多了！羽伊真的好喜歡教主！教主對羽伊來說是最棒的朋友☆以後也會像現在一樣，繼續當羽伊的朋友吧？我們永遠都是朋友☆給我最好的朋友教主，羽伊上☆",
            "Velvet": "喂、教主！這次我想到了一個建國的超棒計劃！你也一起來吧？如果成功了，我就把最親近的部下位置讓給你！總覺得交給你會很放心。這次我保證真的不會背叛你，說到做到！我懶得讀信，你就別回信了。下次見面再好好聊吧！",
            "Vivi": "致教主大人：教主，您好嗎？本少女為了表達心意，斗膽寫下這封信。沒想到時間竟已過去這麼久了。本少女一開始對您的態度或許有些怠慢，還請您多多包涵。不過，正所謂高貴之人總能識別同類。就如同您看待我的方式一樣，我也很快便理解並接受了教主您價值的所在。未來也請繼續守護本少女吧！為了教主大人，也為了這個世界，本少女將竭盡全力。薇薇亞·納阿爾根土敬上",
            "xXionx": "如果你正在讀這封信，那就代表我們已經親密到可以共享心象世界了，對吧？現在的時間是凌晨2點，連月亮都顯得寂寞的時刻。這是艾利亞斯所有生命體最孤獨的時分，而我在這個時候寫信，就是因為你這傢伙，教主。你在宴會廳聽到我說話後，居然說了句「真有錫安的風格」，這到底是什麼意思？請快點回覆我。P.S. 這樣不奇怪吧？「心象世界」這個詞是不是很酷？",
            "Yomi": "給教主大人寫信時，雀躍的心情實在難以平復。畢竟用文字傳達，和用言語表達是兩種不同的情感。經過半日的思考，我想以詩歌來表達我的感恩之心，於是寫下這一首。希望您會喜歡。\n迎月花一朵，抬首望明月。\n僅得月光照，恩澤已浩蕩。\n月卻回首望，此生復何求。",
            "Yumimi": "嗯~最近我的別墅都沒有人來，想來是教主您特別留意了吧？謝謝！以後如果在森林裡遇到什麼珍貴的藥草或香菇，我會包裝好寄給您!今後也請多多指教，若是您想享受大自然的生活，隨時都可以到附近來玩。但請您務必一個人來喔?因為我不太喜歡別墅裡太過熱鬧。"
	    },
	"ja": {
            "Alice": "教主、覚えてる？鏡の中のお姉さまと一緒に暮らしたいかって聞いたこと。あれ、なかったことにするわ。残念に思うかもしれないけど仕方ないでしょ？だって気づいたんだもの。お姉さまに譲るにはもったいないくらい面白いやつだってことに。私が気に入るなんてめったにないことなんだから、喜んでいいわよ。いつかタロット占いにいらっしゃい。最高の運勢を占ってあげる。もちろん、誰にとっての最高の運勢なのかは内緒だけどね。",
            "Allet": "こんにちは、教主様！モナティアム鎮圧班のアレットであります。いつも業務連絡ばかりしておりますので、プライベートの手紙を書くのは少し照れくさいであります。こうしてお手紙をしたためましたのは……他でもない、教主様に感謝の気持ちをお伝えするためであります。どんなことにも率先して取り組まれる教主様のお姿は、私が一番尊敬するところであります！で、ですが、カンナ隊長も一番……ウウッ、難しいであります！とにかく、モナティアムで何か困ったことがありましたら、私、アレットをお呼びください。全身全霊を尽くしてお助け申し上げる次第であります！敬礼！",
            "Amelia": "はあ。まさか人間にこのような手紙を送ることになるなんて。単刀直入に言いましょう。ありがとうごさいます、教主様。長い時間考慮した結果、あなたから受けた恩は無視できないことに気づきました。私が無礼な態度をとっていたにもかかわらず、ずっと気遣ってくださっていたんですね？エルフとしては、いまだ理解できませんが、それがどれほどの意志を必要とするかは理解しております。この手紙は、それに対するお礼です。市長様には内緒にしてください。",
            "Ashur": "教主様、こんにちは。こうして手紙を書くのは少し恥ずかしいですね。今まで私の説教をたくさん聞かされて、大変でしたよね？だけどあれは全て教主様のためを思ってのことです。分かりますよね？女王様じゃあるまいし、教主様なら理解してくれると思います。う〜ん……実はこんなことを書きたかったわけじゃないんです。新作のパンを作ってみたんですけど、なかなか美味しくできました。ぜひ食べて、感想を聞かせてください。",
            "Aya": "万年雪が積もった精霊の山の頂上は静かだけど寂しい時もあるの。妹たちを探しているという話を真剣に聞いてくれ、心から心配してくれるあなたには感謝しかないわ。お互いの壁を取り払って、心を寄せ合える仲になれたらいいなと本気で思っているの。教主さん、あなたはどう思ってるの？",
            "Belita": "教主、いつもエルフィンのそばで力を貸してくれて礼を言う。真っ直ぐで情にもろく甘いところがあり心配だが、ネルと教主が一緒なら安心だろう。恥ずかしい話だがそんなエルフィンがときどき羨ましかった。女王としてはフリックルに助けてもらっているが、一人の魔女ベリータとしては孤独を感じているからな。あまり気を遣う必要はないが、たまには地下にも立ち寄ってくれるとうれしく思う。忙しいだろうからこれで失礼する。",
            "Beni": "どうも、教主様！これで大丈夫でしょうか？へへっ！教主様に感謝の気持ちを伝えたいって言ったら、手紙を書けばいいって村長さんに教えてもらいました！実は今も手伝ってもらってます！って……そこまで書く必要はないって言われちゃいました！とにかく、宴会場ではいつも美味しい料理をくれたり、話しかけてくれたりしてありがとうございます！今度、獣人の森に来た時は、美味しい料理でもてなしますからね！",
            "BigWood": "ビッグウッド、最近悩みがある。ううん、あった。でも、解決したの。教主には感謝するわ。あたしだけだと、妖精王国で暮らすのは難しいと思った。教主のおかげで、ここに根を下ろせそう。だから教主に気持ちを伝えたいと思った。あたしの大切な友達、教主のためにプレゼントを用意したの。どうか大事に育てて。",
            "Blanchet": "教主様のおかげで、教団で多くの方と友達になれました。楽しくお付き合いしながら、最近は笑うことにも慣れてきました。たまに頬をつねられる時は少し戸惑いますが……そんな悪戯も教主様の優しいところだと思います。まだ無名だった頃、ある観客から手紙を受け取ったことがあります。あの頃の私は表情が乏しかったけど、きっと笑っていたと思います。その気持ちを教主様と共有したかったんです。",
            "Butter": "こんにちは、教主様！バターです！今日は楽しく遊びました。それから、それから、散歩もしたんです！でも教主様がいなくて寂しかったです。教主様はいつ散歩に行けますか？最近の教主様は忙しいってコミーが言ってました。でも、あたしは教主様と一緒にいたいんです。今度は絶対、一緒に散歩に行きましょう！約束ですからね！",
            "Canna": "こんにちは、教主殿！モナティアム機動隊隊長のカンナです。久しぶりに休暇をもらったので、時間が空いたついでに手紙を書いているであります。本来、セキュリティ上こういう手紙は控えた方がいいのですが……特別な機密情報ではないので問題ないでしょう、たぶん。これまで教主殿に助けていただいたり、気を遣っていただ……えっ、呼び出しが……。今日の休暇はここまでのようであります。また休暇をもらえたら書き直させていただきます！絶対に！本当です……",
            "Carren": "こんにちは、教主様。「元」生食家のカレンです。この前はお見苦しい姿を見せましたね。最近はエルチューブへの未練を捨て、平凡な妖精として元気に過ごしていますので、ご安心ください。今度、キャロット姉さんの庭に遊びに行って、美味しいコーヒーを飲みましょう。この前、約束したとおり美味しい野菜をご馳走します。では、また会うその日まで……ニンジン。",
            "Chloe": "教主、仕立て屋にはいつ来てくれる？実はね、この前やってもらったぬいぐるみのアルバイトをまたお願いしたいの。うん、でも、あちしの仕事を手伝ってくれるなら、ぬいぐるみのアルバイトじゃなくてもいいの！それから、セバスチャンも教主に会いたいんだって！一緒に過ごした時のことが懐かしいみたい。仕事が終わったら服屋以外にも遊びに行こっ！教主と遊ぶのはいつも楽しいから！",
            "Chopi": "こんにちは、教主様！いつも村の平和のために頑張ってくださってありがとうございます！私も獣人の村の立派な「師匠」として、村の優秀な戦士育成のために頑張ります！それから……スーパージェネラルキングゴッドエンペラーマジェスティ強靭な眼差し伝説の剣を操る獣人の村の永遠ナンバーワン剣士ティグ様に会ったら、私は立派な戦士になったと伝えてもらえるとうれしいです！チョッピーの成長を、これからも見守ってください！では！",
            "Diana": "美味しい料理をたくさん作りましたよ。甘くないものを中心に作ったら簡単なメニューになりましたが、種類より量ですからねぇ。長持ちするとは思いますが、やはり出来立てが美味しいから、こうして手紙を書いています。手紙はすぐに届くでしょうかねぇ？デザートもたっぷり用意しましたので、ゆったりした服でいらしてくださいねぇ。",
            "Ed": "たった数文字書くだけで、何か変わるのでしょうか……まだよく分かりませんが、ナタから、夢に大きな意味を持たせられるから、手紙を書くようにと言われました。教主様……あなたと一緒に過ごした時間が、夢でなかったらいいなと思いました。私の理解者はナタだけだと思っていましたが、今は違います。私は教主様が、この夢の中に永遠にいてくれたらいいと思っています。ナタと私と一緒に、夢を見続けましょう。",
            "Elena": "おい、人間。見直したよ！正直、やらかしたのはあたしたちなのに、思ったよりよくしてくれて驚いてるんだ。てことは、これからはもっと暴れてもいいってことだな？なんて、冗談だよ。あたしだって空気くらい読めるぞ？まぁ、これからは控えてみる。モナティアムの全市民をコントロールできるか分からないが、なるべく角をたてないように尽力してみる。ありがとう。まあ、そんなところだ。",
            "Epica": "教主様、今日は特別な感謝の気持ちを伝えるため、手紙を送ります。私が吟遊詩人を名乗り放浪しているのは、教主様もご存知のことでしょう。さまざまな物語があり、たくさんの主人公たちと出会う中で、私は主人公たちを引き立てる詩人で十分だと思っておりました。ですが、あなたは違いました。語り手に過ぎない私を見てくださり、教主様の物語を共に紡いでいけるよう、配慮してくださったのです。ありがとうございます。教主様の物語が幕を下ろすまで、ご一緒させていただきます。",
            "Erpin": "ヤッホー、教主！私がバカばっかりするから逃げたかったでしょ？教主はそんなことしないって、ネルは言ってたけど……私は逃げるって思ってたの。でも、それは間違いだったわ。ずっとそばにいてくれてありがとう。パンをおごってくれたり、自分が食べる分を譲ってくれてありがとう。あなたの助けがなかったら、私、女王できなかったと思う。パンも食べられず、寝ることもできず、腹ペコで寒さに震えてたかも。エルフィンより。",
            "Espi": "この手紙はモナティアムから始まり、一年をかけて巡り、受取人に幸運をもたらしてきたの。今、教主のもとにある手紙を4日以内に、幸運を求める7人に送らないと、悪夢が訪れるわ。迷信だと思うでしょ？でも本当よ。どうしてかって？従わなきゃ……あたしがあんたに会いに行くんだから。クククッ。",
            "Festa": "[こんにちは。ロックフェス運営です。お客様は「ロックフェス公式エルチューブにいいね！をしてロックフェスに行こう！」イベントに当選されたため、ロックフェス入場チケット2枚お送りいたします。]どうよ？おいらの強運は！おいらはロックフェスの参加者だからチケットは要らないけど、教主は要るだろ？このチケットをあげたら、会いに来てくれるか？くれるよな？じゃ、ロックフェスで会おうぜ！",
            "Fricle": "今日もバカみたいな顔して、山積みの書類を片付けているんじゃない？仕事を始める前の大事なポイントは仕分けよ。まず同じ内容ごとに作業を分け、優先順位を決めてやれば、より早く片付けられるの。別にあなたが仕事に追われて大変だから、教えてやってるわけじゃないの。教主なら、これくらい分かってるでしょうからね。それじゃあ今日も頑張りなさい。",
            "Gabia": "洞窟で地の精霊とばかり遊んでるのは退屈だったけど、教主が宴会場でご飯をくれて一緒にお話できるから楽しい。教主と遊んでると、シーラ、ナイア、イフリートと仲良くしてた頃を思い出す。教主が作ってくれる料理は、美味しいのも美味しくないのもあるけど、残さず食べてる。ときどきこっそり持ち帰って、地の精霊たちにもあげるけど、みんな喜んでる。また一緒に遊ぼう。",
            "Haley": "おかげでエーリアスは今日も平和だ。改めて言うが、教主は実に有能な人間だ。地球にいた時、教主のような人間がいたら、もっと楽に任務を遂行できたものを。率直に言って、地球の友人のことは少々気に入らなかった。待遇について抗議しても真剣に受け止めてもらえなかったからな。だからこそ、私は教主を高く評価する他はない。教主の労苦に敬意を表す。いつかモナティアムに来てくれたら、もてなすようにしよう。",
            "Hilde": "こんにちは、教主様。前回の検診結果があまりよくありませんね。まさか、エーリアスにいるからといって、気を抜いているのではありませんか？再検査が必要なようです。時間がある時、ぜひいらしてください。ふふ、冗談ですよ。検診結果はとても良好です。健康管理を怠っていないおかげでしょうか？ですが、そろそろ検診の時期ですので、一度ご訪問ください。ヒルデより",
            "Ifrit": "おい、教主！イフリートだ！手紙ってなんでこんなに難しいんだ？書くたびに紙が燃えちゃって、もう4枚目だぞ。まぁ、大したことじゃねぇけどな……。今まで俺のわがままに付き合ってくれてありがとな。それから、宴会場にいる火の下級精霊から聞いたけど、あいつらにもよくしてくれてるんだってな？やっぱり教主は信頼できるやつだ。これからもよろしくな！",
            "Jade": "教主、光栄に思うんだね。このジェイド様からの手紙はエーリアスの宝として扱われるのさ！まぁ、本当はこんなことを言いたかったわけじゃなくて、感謝を伝えたかったんだ。毎日小言を言っている君が理解できなかったけど、ある本に書いてあったんだ。小言も愛情の表れだってね！だから、これからもよろしくね。ジェイドより。",
            "Jubee": "教主をジュビーパーティーに招待するんだビー。もうすぐシュビーだけが参加できる秘密のジュビーパーティーが開催されるんだビー。ジュビートライアスロン、蜜集め大会、間違いジュビー探しなど、さまざまなイベントと豪華な蜜ビュッフェを用意しているから期待していいんだビー。ぜひ教主にも参加してもらってパーティー開催の挨拶をしてほしいんだビー。参加費も持ち物も必要ないんだビー。何か忘れてる気がするけど、思い出せないからこれで失礼するんだビー。",
            "Kidian": "ダーヤとケンカしてから、友達を作るのが嫌だった。たぶん、また独りになるのが怖かったからだと思う。だから、教主が最初に話しかけてくれた時は、すごく嬉しかったよ。またボクに友達ができるのかなって。教主が頑張って歩み寄ってくれたように、ボクも頑張ってみるね。教主のことを、友達って呼んでもいいかな？",
            "Kommy": "教主は役に立つにゃん。コミーにご飯くれるし、遊んでくれる。この調子で続けてくれれば、コミーの心の中の友達ランキングで上位は間違いにゃいよ。いきなり手紙を書いた理由が気になるかにゃ？本で読んだけど、「言語の限界は世界の限界」って書いてあったにゃん。これで教主はコミーの世界に入ったにゃ。おめでとにゃん。でも文字を書くのはめんどくさいにゃ。手も痛いし、もう寝るにゃん。それじゃあバイバイ。",
            "Kyarot": "こんにちは、教主！宴会場ではよく話したけど、こうして手紙を書くのは初めてだよね？私のサトウキビみたいに大きな友達ができて、すごく嬉しいよ！教主の住んでた世界にもナス、ニンジン、かぼちゃがあるって聞いて、教主の世界に行く夢をよく見るようになったんだ。いつか連れて行ってくれるよね？楽しみにしてるから！それまでは私の庭に遊びに来てね！",
            "Lazy": "教主様、こんにちは。レイジーです。こうして教主様に手紙を書くのは初めてですね。直接お会いしてご挨拶するべきとも思いましたが、いつもお忙しそうなので、手紙で失礼します。私は自分の意思にかかわらず、色々なことに巻き込まれて忙しくなってしまうのですが、教主様は自分から仕事を見つけて忙しくされているようですね。あ、いえ、それが悪いと言っているわけではありません。教主様はエーリアスのために尽くしてくださっているんだな、という話です。いつもありがとうございます。次は手紙ではなく、直接お会いしましょう。",
            "Leets": "こんにちは、教主様！お元気ですか？僕は今日も鍛錬のため、次の相手を捜し回りました！決してゴロゴロしてたところをルード様に叱られて、竜の巣から追い出された訳ではありません！……ところで、教団では戦えるような機会ってありませんか？あっ、別にそういうことが起きてほしいという訳じゃないんです！ただ、起きてくれたら嬉しいっていうか……へへ！とにかく何かあったら絶対に連絡してくださいね！",
            "Levi": "以前「幸運の手紙」書きのアルバイトをやったことはありますが……個人的な手紙を書くのは初めてか、あっても久しぶりな気がします。あっ……魔女昇級審査の嘆願書を書いたことがありましたね……じゃあ、楽しい気持ちで書くのは本当に初めてです。教主様が宴会場に誘ってくれたおかげで、色んな食べ物をバランスよく食べられるようになりました。おかげで、アルバイトを2つも増やせたんですよ！感謝の気持ちを込めて、レヴィより",
            "MaestroMK2": "#include &lt;stdio.h&gt;int\n main(){printf(\"\\x54\\x68\\x61\\x6E\\x6B\\x20\\x79\\\nx6F\\x75\\x2E\\x20\\x48\\x75\\x6D\\x61\\x6E\\x2E\");\nreturn 0;}",
            "Mago": "教主様、そちらはどう？私の牧場は最近とてもいい天気だよ。大きな木は涼しい木陰を、優しい風は花の香りを運んでくれるの。木陰にいると本当に穏やかな気持ちになるなぁ。友達と一緒に寝転んでいたら、教主様のことを思い出したんだ。みんな教主様に会いたがってる。もちろん私も……だからこうして手紙を書いてるの。教主様に会いたいな。",
            "Marie": "教主様。あたしたちの思い出には爆弾が欠かせませんね。急に新しい爆弾のアイデアが頭に浮かんだので、続きはそれを作ってから書きますね。できました！教主様がこの手紙を読み終えたら爆発するように作りました。どこに仕掛けるかって……それは秘密です！今度、ぜひ爆弾の感想を聞かせてくださいね？それじゃ、いい爆弾を〜！",
            "Mayo": "教主に告ぐ。最近、あちこち奔走しているという噂を聞くっす。私はコレクションに傷がついたり、他のやつらの手垢がついたり、外装に傷がついたりするのは嫌っす。だから、教主は教団の中限定。コレクションにも社会的地位や体面があるから教団保管が最適。分かったらウロウロしないで教団内に滞在してるっす。忘れちゃダメっす。教主は私のコレクション。",
            "Meluna": "私の立場上、個人的な手紙を書くのは珍しいことですが、教主様は特別です。弊社の顧問ですし、私の友達でもありますし。それから……なんて言えばいいのかよく分かりませんけど、教主様は教主様ですから。モナティアムはすべてが目まぐるしく変わるから、たまにやり過ぎだって思うこともあります。ですから、教主様はずっと特別な教主様のままでいてくださいね？手紙は読み終えたら燃やしてください。筆跡が流出したら何が起こるか分かりませんから。",
            "Momo": "教主殿！正式に申し上げます！小生の弟子になるのです！教主殿は間違いなくニンジャの才覚をお持ちです！まさか……小生の実力をお疑いですか！？小生は反アニマル缶戦線に身を置いたことのある獣人、その実力は折り紙付きであります！もし、小生の申し出がお気に召されなくても、たまには共に修行をして欲しいであります！合同修行はいつも楽しいものですから！では、さらば！",
            "Naia": "教主〜！実は手紙を書くのって初めてなの！誰に書こうかな〜って悩んだんだけど、シルフィールは読んでくれなさそうだから教主にしたんだ！私の初めての手紙をもらえるんだから、光栄に思ってよね。えーっと……それから、この前は悪戯しすぎてごめんね。実は謝りたくてこの手紙を書いてるの。怒ってないよね？怒ってないなら、また一緒に遊ぼう！教主と遊ぶのすっごく楽しいもん！",
	    	"Ner": "こんにちは、教主様。\n今さらかも知れませんが、私たち世界樹教団の教主様があなたで良かったと思っています。これからも私や女王様のそばにいてくださると嬉しいです。そういえば、昨日の修養録をまだいただいておりませんが、作成中なのでしょうか？お待ちしております。\nネルより。",
            "Picora": "師匠様！こんにちは！師匠様の永遠の弟子、ピコラが手紙を送ります！師匠様との毎日は本当に夢みたいです。師匠様からステッカーや髪飾りの作り方を教えてもらったり、たわいもない話をしたり、それに美味しいものが食べられるなんて！師匠様に恥をかかせない素敵な弟子になれるように、もっと頑張ります！",
            "Posher": "教主、新しいポーションを作ったけど味見しに来る？いつも言ってるけど、私のポーションが「良薬口に苦し」ってのは分かってるわよね？だけど教主のためなら……一度くらいは味を考慮したポーションを作ってもいいわ。でも、あまり期待しないでね。味の基準はそれぞれだから。ふふ。暇になったら、遊びに来てね。待ってるわ。",
            "RenewaAwaken": "",
			"Rim": "丘の上に独りで暮らしていた私にも……宴会場でたくさんの友達ができました。私のギャグを気に入ってくれる友達もいて嬉しいです。レモンティーを好きな人がいたら……いつか私の家に招待したいなと思っています。教主のおかげで、たくさんの使徒と出会えました……ありがとうございます。",
            "Risty": "Hi! 教主! 私がよく遊んでるゲームにログインしてくれたらゲーム内からチャットを送るんだけど、全然ログインしてくれないから手紙を書いてるんだ。まぁ、大したことじゃないんだけど･･････この前は部屋を掃除してくれて、宴会場でも色々気を遣ってくれてありがとう。お礼を言うにも会いに行くのは遠いから手紙にしてみたんだ。いいよね? これからは、ちょいちょいログインしてよね。一緒にやろうよ。手を貸してやるからさ! わかった? 約束だよ!",
            "Rohne": "親切なスパイ、有能なスパイ！出されたものは残さず平らげるスパイ、ローネです！教主さんと色んな話をしていると、職場のストレスが発散できてうれしいです。教主さんも私と話すのは楽しいでしょうか？機密情報をペラペラ喋っていないかなと不安ですが、いっぱい楽しんでもらえたらうれしいです！そうそう！私が頻繁に宴会場へ行っているのはアメリアさんには内緒ですよ！",
            "Rude": "よう、教主。言葉ではなく手紙で伝えるのは初めてだから、少し照れ臭いな。いつも宴会場で体にいいものをごちそうになってるから、礼を言いたかった。最近、体はちゃんと鍛えているか？会う度に聞かれてうんざりするかもしれんが、オレなりの好意だと思ってもらえるとうれしい。次はオレの竜の巣にあるトレーニングルームで会おう。新しいトレーニングコースを用意したからな。",
            "Rufo": "ご機嫌うるわしゅう！反アニマル缶戦線のブレインであるルボから教主に手紙を送るのだ。どうやって書けばいいのかよくわからないのだ。ルボは忙しいのに、ティグ隊長が自分の分まで書けと言うのだ！教主はどこからあんなにたくさんの食材を持ってくるのだ？ベニーにバレないように気をつけなければいけないのだ。教主とボードゲームがしたいのだ。教主がサイコロをうまく振れるようにエルフの特別装置を貸してやろう。ティグ隊長には内緒なのだ。",
            "Sari": "ハロー、教主様！やっと会えたね！手紙って相手の言葉や行動が見えないから難しいよね。だから今はね、サリーの頭の中にいる教主様がお話してくれるのを想像しながら書いてるの！今は、昨日食べたクレームブリュレのお話をしてくれてるの！わぁ〜、すご〜い！おいしそ〜う！教主様ってね、説明がとっても上手なのよ！う〜ん、でも頭の中の教主様とお話するのってやっぱり変な感じ。早く会いに来て、またおもしろいお話を聞かせてね、教主様！約束だからね！",
            "Selline": "元気？アルバムを整理してたら、教主の写真を見つけたの！一人で見るのはもったいないから、教主にも見せてあげる。変な写真じゃないから安心しなさい。写真を見てたら、ふと、教主とチェスをした時のことを思い出したわ。一人もいいけど、やっぱり二人でやるのが一番ね。今度また一緒にやりたいわ。付き合ってくれる？下手くそだって笑ったりしないから。ふふっ、本当よ？",
            "Shady": "えっ……何これ。適当に書いてもいいよね？他のみんなを見てたら、あたいも書かなきゃいけない気がしてね。元々こんな性格じゃなかったのに、変よね。あたい、なんてこんなことしてるんだろ？なんで独り言を書いてるわけ？ねぇ？ちょっと！あたいになんかした？まったく、なんかモヤモヤするけど悪くない気分ね。まぁ、これからも宴会場へ悪戯しに行くから楽しみにしてなさい。",
            "Shoupan": "シュシュシュシュッ！バババババン！シュパン！キョキョキョキョ！教〜主〜！ハ〜ロ〜！字を書くのめんどくさい！手が思ったスピードで動いてくれないんだもん！とにかく、今度、一緒にドライブ行こ〜！特別に後ろに乗せてあげるから〜！どこ行きたい？この前話した外の世界はどう？いきなり誘いに行くから、よく考えといてね〜！バイバーイ！",
            "Silphir": "最近ルードがトレーニングしろってうるさいの。バカみたいに筋トレすればいいと思ってるのかしら。だから教主にトレーニングを手伝ってほしいの。べ……別にあなたに会いたいわけじゃなくて、あなたが一番、役に立つからよ。本当だって。私のトレーニング時間を教えてあげるから、絶対来てよね。",
            "Sist": "ご機嫌よう、教主様。ご無沙汰してますわ。最近、私は新商品の広告を出してまして、多少のお金をいただいて体験できるイベントを実施しているのですが、教主様なら特別に2000ゴールドでいいですわよ。商品を同封しますから、1週間お試しになって、高評価レビューを書いてくださいまし。では、高評価レビュー、お待ちしておりますわ。",
            "Snorky": "ドンの永遠の右腕、スノキーです。手でやることといえば、拳を振るうことだけだった、このスノキーが、ドンのお仕事を手伝い、大豆を植え、こうして手紙を書くようになりました。ドン。私に平穏な日常があることに気づかせてくださり、ありがとうございます。もっと早く、ドンに仕えることができていたら……と思います。これからも、いつでもどこでも、ドンのおそばをお守りいたします。どうぞ、ドンも私を見守っていてください。",
            "Speaki": "教主様！昨日と一昨日、スピッキーという使徒から教主様によろしく伝えて欲しいって頼まれたから、今からネルがお伝えします！教主様！スピッキーとかぼちゃを大切にしてくれてありがとうございます！スピッキーはいつも感謝してます！幽霊の沼に来る時は、エスピーやアリスにいじめられないように、スピッキーのかぼちゃたちが教主様を守ってくれますよ。だから、いつでも安心して遊びに来てくださいね！",
            "Sylla": "教主、手紙は無事に届いたか？風に乗せて飛ばしたんだ、きっと問題ないだろう。教主にはいつも感謝している。私はもちろん他の精霊たちにも親切にしてくれているのをよく見かけるからな。精霊たちと他種族が以前より仲良くなれたのは教主のおかげだろう。風の上位精霊であり、精霊たちの代表として礼を言いたかった。今日もお前に心地よい風が吹きますように。",
            "Taida": "教主様、こんにちは。業務中に手が空いたので手紙を書いています。決して給料泥棒とかサボりが目的ではありませんからね？モナティアムで会う度に、挨拶をしてくださるのは嬉しく思っています。ですが勤務時間外は、公務員としてのタイダーではなく、ただ遊んで暮らしたいだけの一個人として接していただきたいんです。なので……雑用は別の方に頼んでいただきたく……コホン。では、またお会いしましょう。",
            "Ui": "いつもウイと一緒にいてくれてありがとう☆教主ちゃん！教主ちゃんに会うまで、ウイの友達はエルだけだったけど、今は教主ちゃんのおかげで友達がいっぱい！ウイは教主ちゃんがだ〜いすき！教主ちゃんはウイにとってサイコーの友達☆これからもウイと友達でいてくれる？ずぅ〜っと友達だからね☆いつもサイコーの友達の教主ちゃんにウイより☆",
            "Velvet": "おい、教主！王国作りのとっておきの作戦を思いついたんだけどさ、あんたも一緒にどうだ？成功すりゃ、俺の側近にしてやんよ！あんたのことは信用できそうだからな。今度は裏切らないからさ、どうだ？読むのはめんどくさそうだし、返信はいらねぇよ。今度、会って話そうぜ！",
            "Vivi": "教主様へ。ごきげんいかが？わたくしの気持ちを伝えるために手紙を送りますわ。もうこんなに時間が経ちましたのね。初めてお会いした時、冷たい態度を取ったのは謝りますわ。だけど高貴な存在同士は惹かれ合うもの。教主様が親切に接してくださったように、わたくしも教主様の価値を理解し受け入れましたの。これからもわたくしのことをよろしくお願いしますわ。教主様と世界のためにやるべきことをやりますわ。ヴィヴィアーナ・アルゲントゥムより。",
            "xXionx": "この手紙を読んでいるということは、既に我と精神世界を共有するほど親密な関係になったということだろう。現在時刻は午前2時。月すら寂寞を覚え、エーリアスの全生命体が最も孤独になるこの時間にペンを取ったのは、他でもない教主、そなたが原因だ。宴会場で我が話を聞いて「シオンらしい」と言ったのはどういう意味だ？至急返事求む。p.s おかしくないよな？精神世界っていう表現、かっこいいよな？",
            "Yomi": "月様へ。お手紙を書いていると、胸が弾んで落ち着きません。文字で伝えるのは言葉とは違う趣きがありますから。半日悩み、感謝の気持ちを詩に表すのはどうかと思い、一篇、詠ませていただきます。\n月見草一輪、頭を上げて月を見る。\n照らさるるのみで、その恩恵計り知れぬというに顔を向けて見つめてくださる、この上何をや望まん。",
            "Yumimi": "ふ〜ん、最近、誰も私の離れを訪ねて来ないと思ったら、教主様が気を遣ってくれてたのね？ありがとう！今度、森で貴重な薬草とかキノコとかを見つけたら送るね！これからもよろしく。それから、自然の中で過ごしたくなったら、いつでも遊びに来てね！その代わり、一人で来てね。離れが人でガヤガヤするのは嫌だから。"
        },
	"en": {
            "Alice": "Master, remember when I asked if you'd like to live with my sister in the mirror? Yeah, let's forget about that. Disappointed? Well, tough luck, I've realized that you're just way too fun to let go of. You should feel honored... It's not easy to win me over like this. Stop by for a tarot reading soon. I'll make sure it's the best fortune... just don't ask whose it'll be.",
            "Allet": "Master, good day! Allet here from the Monatium Suppression Unit. It feels odd writing you for personal reasons, given that I usually only communicate for official matters. The purpose of my letter is to express my gratitude. Your leadership and willingness to take charge in every situation are qualities I hold in the highest regard. Oh, of course, Chief Canna also is someone I hold in the highest regard... Oh, this is tough! In any case, should anything troublesome occur in Monatium, please let me know. I'll do my best to help, as always! With loyalty, Allet",
            "Amelia": "Geez... Me, writing to a human? Never thought I'd see the day. I'll get straight to the point. Thank you, Master. I've spent a lot of time thinking, and I've realized I can't overlook the kindness you've shown me. Despite my rudeness, you've always looked out for me. I can't fully grasp it as an elf, but I recognize it must take incredible strength. This letter is a small token of gratitude from me. Just don't let the Mayor find out, okay?",
            "Ashur": "Greetings, Master. Well, this is awkward... writing to you. Thank you for putting up with all my nagging up until now. I did it for you, though, you get that, right? You're not Her Majesty, so I think you understand. Hmm... Actually, this is not why I'm writing. I've baked something new, and it turned out pretty tasty. Please give it a taste and let me know what you think.",
            "Aya": "Elemental Mountain's icy peaks can be tranquil, but it can also feel isolating sometimes. Master, I'm always thankful for how seriously you listen to my stories about my search for my siblings and for the genuine care you show. I truly hope we can one day tear down the walls between us and share a true bond. I'll wait for the day your feelings align with mine.",
            "Belita": "Master, thank you for always being there for Erpin. She's upright and kind-hearted, but her gentle nature has always been a concern for me. Knowing that Ner and you are by her side brings me comfort. I'll admit, I sometimes find myself envious of Erpin. As the Witch Queen, I rely on Fricle's support, but as Belita the Witch, I often find myself feeling lonely. Please don't feel pressured, but a visit to the underground now and then would bring me happiness. I'll end this here, as you must have a lot on your plate.",
            "Beni": "Hello there, Master! I hope I'm doing this right, hehe! When I said I wanted to thank you, Chief Diana suggested writing a letter. She's actually helping me write it right now! Uh... now she's telling me not to mention that. Anyway, thank you so much for always giving me delicious things to eat at the Banquet Hall and chatting with me. Next time you visit Werebeast Forest, I'll make something really delicious for you, okay?!",
            "BigWood": "BigWood has concern lately. No, BigWood had concern. Not now, thanks to Master. Sprite Kingdom hard place for BigWood to live alone. But now, BigWood feels like BigWood belongs. Roots are strong here now. All because of Master. BigWood want to show thanks. BigWood make gift for precious friend, Master. BigWood hope you care for it well.",
            "Blanchet": "Thanks to you, Master, I have been able to find so many friends within the Order. I have become accustomed to smiling while having fun with others. I still get a bit flustered when you pull my cheeks sometimes... however, I believe such playful behavior is part of your inherent gentle nature. I was reminded of a letter I received from an audience member when I was still an unknown actress. I wasn't used to expressing emotions back then, but I know for certain I was smiling. I wanted to share that feeling with you, Master.",
            "Butter": "Hi, Master! It's me, Butter! Butter had so much fun today! Butter even went for a walk! But Butter was sad because you weren't there. When can you go for a walk, Master? Kommy said you've been busy lately. But Butter still wants to spend time with you. Next time, please go for a walk with Butter, okay? Promise!",
            "Canna": "Hello, Master! This is Chief Canna of the Monatium Strike Force. I happened to get a rare day off and decided to use the time to write you this letter. Usually, handwritten letters are discouraged for security reasons, but since there's no sensitive information here, it should be fine. Probably. I wanted to take this chance to thank you for all the help and kindness you've... whoops, looks like I'm being summoned again. So much for my time off... If I ever get another day off, I'll be sure to write again! Let's hope that happens sooner rather than later.",
            "Carren": "Hello, Master. This is Carren, the former radical raw foodist. I'm sorry for behaving disgracefully in front of you last time, Master. These days, I'm no longer obsessed with ElfTube and have been living an ordinary life as a sprite. So, no need to worry about me anymore. Let's visit Kyarot's garden for some coffee next time. I'll treat you to those vegetables I promised last time, too. Until we meet again... Yours carrotly, Carren",
            "Chloe": "Master, when do you plan on visiting my tailor shop again? Oh, it's nothing serious... I just thought maybe you could give the animal costume gig another go. Or, actually, forget the animal costume thing! It'd be amazing if you could lend a hand here, no matter the task. Also, Sebastian misses you very much, Master! You did spend all that time with her, after all. Let's make plans to hang out somewhere fun after work! I always enjoy spending time with you!",
            "Chopi": "Hello, Master! As always, thank you for your efforts to keep our village peaceful! As a full-fledged teacher of Werebeast Village, I will work hard to train the best warriors. Also... If you happen to meet the one and only Super-General-King-God-Emperor-Majesty-Fierce-Gaze-Number One-Legendary-Werebeast Blade Master Tig, could you please let her know that I'm becoming a great warrior? I'd really appreciate it! Please keep watching over me as I grow. See you soon!",
            "Diana": "I've prepared plenty of delicious food. I focused on making dishes that were low in sugar, so the selection might be a bit modest. Still, having an abundance should make up for the lack of variety, don't you think? Even though it'll last longer thanks to being low-sugar, it's still best eaten fresh, which is why I'm writing to you now. This should reach you soon, I hope. I have desserts ready, too, so make sure to come in comfortable clothes.",
            "Ed": "I'm not sure if writing a few words like this will make a difference... but Nata says that dreams may carry great meaning and insisted I write this letter to you. Master... I found myself wishing that the time I spent with you wasn't just a dream. At first, I thought only Nata would understand me, but not anymore. I wish that your presence could continue forever within this dream. Please continue to dream with Nata and with me. Always.",
            "Elena": "Hey, human. We meet again, huh? Honestly, considering what we have done, I didn't expect you to take such good care of us. Does that mean we can go even wilder now? Just kidding. I do have some sense, you know? Well, I will try to rein it in a little from now on. I can't promise I will be able to keep all the Monatium Denizens in check, but I will do my best to keep things from getting too chaotic. Thanks. Yeah, that's all.",
            "Epica": "Master, today I wanted to express my gratitude. You already know that I have traveled far and wide, calling myself a storyteller. I have encountered countless stories and countless protagonists. For the longest time, I believed my role was only to make those protagonists shine. But you were different. You saw me, just a mere storyteller. You allowed me to be part of your story, to write it together with you. Thank you, Master. I will stay by your side until the very last page of your story.",
            "Erpin": "Hello, Master! You must have wanted to flee because of all my foolishness, right? Ner said you wouldn't... but I thought you might. Turns out I was wrong. Thank you for not taking off. Thanks for buying me baked goods and sharing your food with me. If it weren't for you, I wouldn't be Queen right now. I'd probably still be without baked goods, sleepless, hungry, and cold. From, Erpin",
            "Espi": "This letter started in Monatium and brings good fortune every year as it does its rounds to those who receive it. Now that it's with you, you must pass it on within FOUR days. Send SEVEN copies, including this one, to those who need some luck. Feel free to make copies. Think it's a superstition? Well, if you don't follow through, prepare for nightmares... or worse, I'll show up in your dreams! Heeheehee.",
            "Festa": "[Hi there! This is the Rockfest Operations Manager. Congratulations! You've won two Rockfest tickets through the \"Like Rockfest ElfTube and Join the Fun!\" event.] Boom! My luck's pretty rockin', right? Since I'm performing, I don't need these tickets, but you'll want them! You're coming to see me bring the house down, right?! Catch ya there!",
            "Fricle": "I can already picture you handling a mountain of paperwork with that stupid look on your face again. You do realize how crucial sorting is before diving into working on those documents, right? Start by grouping similar items together, then prioritize by importance to get through it more quickly. I'm not saying this because I'm worried about you being overwhelmed. I'm sure you've already thought of this, Master. Anyway, keep up the good work today.",
            "Gabia": "Playing only with earth elementals in the cave was starting to feel dull, but the meals you provided me and the conversations you had with me at the Banquet Hall brightened up my days. Being with you brings back memories of when Sylla, Naia, and Ifrit used to get along so well. Your cooking? It's hit and miss, but I always eat every last bite. Sometimes I sneak some back to the earth elementals, and they love it too. Let's spend time together again soon.",
            "Haley": "Dear Master, how are you doing? Thanks to you, Eliash is peaceful today as well. It may sound obvious, but you're quite a capable human. Back when I was on Earth, if there had been humans like you, I could have carried out my missions much more smoothly. To be frank, I wasn't too fond of my Earth friends. Even when I protested our treatment, they didn't take it seriously. That's why I can't help but hold you in high regard. I pay my respects to your hard work. Come visit Monatium sometime and I'll treat you well.",
            "Hilde": "Hello, Master. The results from your recent checkup were not ideal. I trust you're not under the impression that being in Elias gives you the luxury of neglecting your health. It seems we'll need a follow-up exam. Please come by at your earliest convenience. Haha, just kidding. Your health results were excellent. You must be taking great care of yourself! Still, it's about time for another checkup, so please visit soon. Sincerely, Hilde",
            "Ifrit": "Hey, Master! Ifrit here! Writing letters is harder than I thought. The paper keeps catching fire, so this is already my fourth try. Anyway, it's nothing big, but I just wanted to say thanks for listening to me whine and putting up with me all this time. Oh, and I heard from the lesser fire elementals in the Banquet Hall that you've been nice to them, too. Honestly, you seem like someone I can trust. Let's keep this good thing we have going!",
            "Jade": "Master, consider it an honor! A letter penned by me, Jade, will soon be treated as a treasured relic of Elias! ... Well, that's not exactly what I meant to say. I wanted to thank you. Watching you nag every day, I wondered why you do that... But then I read in a book once: nagging... it's just another form of caring. So please continue to take care of me. From Jade.",
            "Jubee": "You are invited to the Jubee Party, Master, bee. This exclusive event is only for Jubees, bee. It will feature fun activities like the Jubee Triathlon, Honey Collection Contest, and Spot the Different Jubee, bee. A variety of fun activities and a luxurious honey buffet will be available, so you're in for a treat, bee! It would be fantastic if you could be the special guest speaker to start the party, bee. There's no entry fee or preparation needed, bee. It feels like I've forgotten to write something, but I can't remember it, so I'll leave it at that, bee.",
            "Kidian": "I was over being friends with anyone after my fight with Daya. I guess I was scared about being lonely again after getting into another argument. So when you reached out to me first, I was really shocked. I wasn't sure if I was capable of making friends again, either. But you kept coming back to me and putting in the effort. Now, I want to put in the effort, too. Can I call you my friend?",
            "Kommy": "You really come in handy, Master. You feed Kommy and play with Kommy. At this rate, you're sure to climb to the top of Kommy's best friends list! Do you want to know why Kommy decided to write you a letter? I read in a book that \"the limits of language are the limits of one's world.\" Master, you have now entered Kommy's world. Welcome. Writing is such a pain, though. Kommy's hand hurts. Kommy is going to sleep now. Bye, for now, Master.",
            "Kyarot": "Hello, Master! We talk all the time at the Banquet Hall, but this is the first time writing you a letter, right? I'm so happy to have made a friend as tall as my plants! When I heard your world also has eggplants, carrots, and pumpkins, I couldn't stop dreaming about going there. You'll take me there someday, right? I'll be looking forward to it! Until then, make sure you drop by my garden lots!",
            "Lazy": "Oh, hello, Master. This is Layze. This is the first time I've written a letter to you. I'd rather greet you face to face, but you always seem so busy whenever I see you. I tend to get dragged into things, even when I don't want to, but you always seem to be actively looking for things to do. Oh, I didn't mean that in a negative way! I just wanted to express that I can truly feel the impact you've had in Elias, and I'm grateful for all that you do. Thank you once again. Next time, let's meet face to face.",
            "Leets": "Hello, Master! Have you been doing well? I finished my daily training as usual and have been wandering around in search of my next opponent! It's absolutely not because Rudd kicked me out of my Roost after nagging at me! So... do you think something worth fighting for will happen in the Order soon? Not that I want anything bad to happen! Just, you know, it would be nice if something exciting came up... Hehe! Anyway, if anything does happen, you have to let me know, Master!",
            "Levi": "I once had a part-time job writing chain letters, but writing something like this feels like a first... or maybe it's just been ages since the last one. Oh, I did write that petition for the witch promotion exam, but writing for fun like this? That's definitely new. Thanks to you opening up the Banquet Hall, I've been able to have a balanced diet. It gave me the energy to pick up two new part-time jobs! Thank you! From, Levi",
            "MaestroMK2": "#include &lt;stdio.h&gt;int\n main(){printf(\"\\x54\\x68\\x61\\x6E\\x6B\\x20\\x79\\\nx6F\\x75\\x2E\\x20\\x48\\x75\\x6D\\x61\\x6E\\x2E\");\nreturn 0;}",
            "Mago": "How are things with you, Master? The weather at my ranch has been lovely lately. The big trees provide cool shade, and the gentle breeze carries the scent of flowers. Resting under the shade feels so peaceful. While relaxing with my friends, I couldn't help but think of you. Everyone here misses you, and so do I. That's why I'm writing this letter. I'd love to see you soon.",
            "Marie": "Master. Our memories just wouldn't be complete without bombs, huh? Out of nowhere, I got this brilliant idea for a brand-new one. Just had to make it real before I could keep writing. All done. I rigged it so it'll go off right after you open and read this letter. As for where I plan to install it... that's a secret! You will tell me what you thought of this one later, right? Well then, enjoy the bomb!",
            "Mayo": "To the Master. Heard you've been busy running around lately. Don't like my collectibles getting scratched or touched by others. The packaging must stay intact. So, stay within the Order. This is a courtesy, considering you have social standing and deserve respect. Understood? So, stop wandering about and stay within the confines of the Order. Never forget. You are my precious.",
            "Meluna": "Sending personal letters is rare for me due to my position. But you're special. You're the company's advisor, my friend, and well... I'm not sure how to say it... you're just you. Things move quickly in Monatium, and sometimes it gets tiring. So, please just remain as the special person you are. Please burn this letter after you read it. I'm worried about what might happen if my handwriting gets out.",
            "Momo": "Master! I hereby make a formal proposal: become my disciple! You clearly have the talent of a ninja! You're not... doubting my skills, are you?! I'm a werebeast who trained as a member of the Chow Rebels. My abilities are backed by that proud experience, I assure you! Even if my offer doesn't quite appeal to you, I'd be honored if you'd at least join me for training from time to time. Joint training is always fun! Well then, farewell!",
            "Naia": "Master! This is my first time writing a letter, you know? Consider it an honor to receive my first letter! I was thinking about who to write to, but Silphir probably wouldn't read it even if I sent one, so I'm writing to you, Master! Um... I'm really sorry for being too rough last time! Actually, I'm writing this letter because I wanted to say sorry. You're not too mad, right? If you're not, let's hang out again! Playing with you is super fun, Master!",
            "Ner": "Hello, Master.\nThis may sound a little out of nowhere, but lately I often find myself thinking how fortunate it is that you, and no one else, are the Master of our Yggdrasil Order. I hope you will continue to remain by my side and by Her Majesty's as well. Oh, and before I forget, I did not receive your diary yesterday. You are still working on it, I assume? I shall be waiting.\nSincerely, Ner.",
            "Picora": "Master! Hello! Your eternal disciple, Picora, is writing you a letter! Every single day with you feels like a dream come true. Your teachings don't just become stickers and hairpins for thought, sharing little everyday stories together, and eating delicious food, it brings such great happiness to me! I'll work even harder to become a wonderful disciple who won't be a burden to you, Master!",
            "Posher": "Hey, Master, I've made a new potion. How about you come and give it a try? I've told you before, just like my potions, things that taste bitter are actually good for you, right? For you, though, I'll try making one that actually tastes pleasant. Don't get your hopes up, though... taste is all relative, after all. Hehe. Drop by when you have time. I'll be waiting.",
            "RenewaAwaken": "",
            "Rim": "I used to live alone in a secluded house on a hill, but coming to the banquet hall has allowed me to make many friends. I'm tickled pink that there seem to be some who like my jokes. Are there more who are about that lemon tea life? I can't wait for my friends to come by my house someday. I'm grateful that the Master allowed me to meet many Apostles at the banquet hall.",
            "Risty": "O/ 07! Sup, Master! I would've just sent you a message through the in-game chat, but you don't hop into my games very often, so I'm writing this as a letter instead. It's nothing big. Just wanted to say thanks for cleaning my room that one time and taking care of me at the Banquet Hall. But going all the way to see you for real is way too far and too much of a hassle, so a letter it is. That's okay, right? Come online more often from now on. Let's get into a match together. I'll carry you! Promise! Got it? That's a promise!",
            "Rohne": "It's me, Rohne, the kind, capable spy who never wastes a crumb! I'm so glad I can de-stress from work by talking about all kinds of things with you. I hope you feel the same even though I worry I might be blurting out classified secrets all the time! All I want is for you to have a great time, Master! Oh, and one more thing, my frequent trips to the Banquet Hall? Let's keep that a secret from Amelia, okay?",
            "Rude": "Hey there, Master. I'm not very used to communicating through letters, so this feels strange. I just wanted to express my thanks for all the healthy meals you've made for me at the Banquet Hall. Have you been keeping up with your training lately? I know I always bring it up, but it's just my way of showing I care. Next time, let's meet in the training room in my roost. I've got a new workout course ready for you.",
            "Rufo": "It's me, Rufo, the brains of the Chow Rebels. I am most eager to believe that this written word finds you amidst circumstances of the most exquisite health and unparalleled joy. Master, I'm not exactly sure how to write this. Captain Tig told me to include hers as well, but I'm busy! Master, where exactly do you manage to get your ingredients? Make sure Beni doesn't find out. I would like to play board games with you. I will lend you a special elven device to help you make good rolls. Just don't tell Captain Tig.",
            "Sari": "Hi there, Master! What a pleasure! Writing letters is so difficult when I can't see your reactions to what I'm saying. But right now, I'm imagining a conversation with you while I write! Oh, now you're talking about that crème brûlée you had yesterday. Wow, amazing! That must have been SO good! You're so good at explaining things. Hmm, still... it is a bit awkward having a conversation with the imaginary version of you. I would much prefer to meet you face to face as usual! Come back soon and share some fun stories, okay?",
            "Selline": "Hey there. I was tidying up my photo album and found a picture where you came out really nicely, Master. It would be a waste to keep to myself, so I'm sending it to you. Don't worry, it's not a weird photo or anything. It suddenly reminded me of the time we played chess together. I don't mind playing by myself, but it's definitely best with someone else. I'd like to do that again with you next time. You will join me, right? I won't laugh at you for being bad at it. Hehe, I promise.",
            "Shady": "Uh... what am I doing here? I just have to write whatever? The others seemed to be doing this, so I thought I should write one too. This feels weird, though. Strange... I was never like this before. Why the heck am I even doing something like this?! Turning my inner thoughts into words? What? Hey, what have you done to me?! Geez... it's strange... this is definitely unsettling, but it's not completely terrible, either. Well, I'll keep dropping by the Banquet Hall to play pranks, so stay on your toes!",
            "Shoupan": "Shou-shou-shou-shou! Pa-pa-pa-pa-pang! Shoupan! Ma-ma-ma-master! He-he-he-hello! Writing is so annoying! My hand won't move as fast as I'm thinking! Anyway, let's go for a drive next time! You can totally ride in my back seat! Where do you wanna go? What about the big outside world we talked about last time? I'm gonna ask you out of the blue, so think about it carefully! Buh-bye",
            "Silphir": "Rudd's been bugging me lately, telling me I should work out more. Hmph. As if just lifting weights is the answer for everything. That's why I want you to help with my training, Master. N-Not because I want to see you or anything, okay? It's just that you're the best fit for this. Seriously! I'll let you know my training schedule, so make sure you're on time.",
            "Sist": "Hello, Master. I wonder if you've been well. I've been promoting a new product lately. So I'm holding an event where you can try it for a small trial fee. Since you're the Master, I'll only charge about 2000 Gold for the trial fee. I'm enclosing the product, so please use it for a week and send me a very positive review. Well then, I'll be waiting for a good review!",
            "Snorky": "Don, it's your eternal right hand, Snorky. I used to be good for nothing but throwing punches, but now I help with your work, plant beans, and I've even written you this letter! Thanks for teaching me how to live a peaceful life. If only I had the honor of serving you earlier... The time I spent not knowing you... That's the part I regret the most. From now on, I will always be by your side, wherever, whenever. Please watch over me, too, Don.",
            "Speaki": "Master! Not sure if it was yesterday or the day before, but an Apostle called Speaki asked Ner to pass along her regards to you! Ner is delivering this message word for word! Master, I am always grateful for how you've taken care of me and my pumpkin friends! If you ever visit Phantom Marsh, my pumpkin friends will look out for you and keep you safe. They'll even make sure Espi and Alice don't mess with you! You're always invited to my home anytime!",
            "Sylla": "Master, I hope you got this letter okay. I entrusted it to the wind, so I trust it found its way safely. I'm always grateful to you, Master. I've often seen how considerate you are toward me and the other elementals. It's clear that your efforts have also helped foster better harmony between elementals and other races. As the noble wind elemental, and a representative of our kind, I wanted to extend my gratitude. May a soothing wind grace you today.",
            "Taida": "Hello, Master! I'm writing this to you during a brief break at work. And no, I'm definitely not avoiding my responsibilities or slacking off, okay? I appreciate how you always greet me and ask about my well-being whenever we run into each other in Monatium. But outside of work, I'd like you to see me as Taida, the one who wants to rest and enjoy some time off, not Taida the civil servant. Basically... ask someone else to take care of your busy work... ahem. See you soon.",
            "Ui": "Master, thank you for always staying by my side! Before I met you, Croakie was my only friend. But now, because of you, I've made so many new friends! I like you so much, Master! You're the best friend I could ever ask for! Will you promise that this will never change and you will always be my friend? We'll be friends forever! Your good friend, Ui✩",
            "Velvet": "Hey, Master! I've cooked up a genius plan to start my kingdom. Wanna join me? If it works, I'll make you my most trusted underling. You seem like someone I can count on. This time, I promise I won't betray you. I swear! Don't waste time replying: it's a pain to read. Catch you face-to-face soon.",
            "Vivi": "Dear Master, How are you? I've mustered the courage to send this letter in an attempt to convey my feelings. How swiftly the time has passed! I must offer my sincerest apologies for my coldness at the beginning. However, noble souls are bound to recognize each other and as such, I soon came to grasp thy true worth, just as thou hast seen mine. Please continue to watch over me, and I shall do my utmost for thee and this world. Yours, Viviana Argentum.",
            "xXionx": "If this letter has reached you, it's undeniable... We are now tethered by a bond so profound that we inhabit the same shared mental realm! The time? 2 a.m., when even the moon gazes down in melancholy as all life in Elias succumbs to the weight of its loneliness. Yet it's YOU, Master, who drives me to write at this hour. At the Banquet Hall, in response to what I said, you uttered, \"That's so like you, Xion.\" Explain yourself at once! P.S. Admit it, the phrase \"mental realm\" is just pure genius, isn't it?",
            "Yomi": "Dear Master, sending you this letter is so exciting, my heart can't be at peace.\nExpressing my feelings in writing is different from expressing them in words. After thinking about it for half a day, I decided to write a poem to express my gratitude. I hope you like it.\nAn evening primrose raises its head to look at the moon.\nJust basking in its light is an immeasurable blessing.\nIt faces the moon, and it can wish for nothing more.",
            "Yumimi": "Hmm, I believe I have you to thank for how I haven't had unwanted visitors at my cabin! If I come across any rare herbs or mushrooms in the forest, I'll make sure to send them your way. And hey, if you ever want to escape to nature for a bit, feel free to drop by. Just one thing... please come alone. I'm not a fan of my cabin getting too crowded."
        }
};
