const PRESENT_MAP = {
    "Alice": { 
        url: "https://i.postimg.cc/NMq3VZL4/Present-List-Alice.png",
        name: { "zh-TW": "愛麗絲的卡片冊", "ja": "アリスのカードブック" }
    },
    "Allet": { 
        url: "https://i.postimg.cc/B69ryRtC/Present-List-Allet.png",
        name: { "zh-TW": "無限保存拌飯醬", "ja": "永久保存可能ソース" }
    },
    "Amelia": { 
        url: "https://i.postimg.cc/cHypjP6h/Present-List-Amelia.png",
        name: { "zh-TW": "莫納蒂姆的待審文件堆", "ja": "決裁待ち書類の山" }
    },
    "Ashur": { 
        url: "https://i.postimg.cc/3R5s6zWL/Present-List-Ashur.png",
        name: { "zh-TW": "艾心堂全年免費自由使用劵", "ja": "エーカリー年間無料パス" }
    },
    "Aya": { 
        url: "https://i.postimg.cc/JnVfgStg/Present-List-Aya.png",
        name: { "zh-TW": "雪花雕像", "ja": "雪花の彫像" }
    },
    "Belita": { 
        url: "https://i.postimg.cc/DZk9DR8h/Present-List-Belita.png",
        name: { "zh-TW": "老舊的木雕玩偶", "ja": "古びた木彫り人形" }
    },
    "Beni": { 
        url: "https://i.postimg.cc/ZR8GhjyQ/Present-List-Beni.png",
        name: { "zh-TW": "高級釣魚包", "ja": "高級釣り具カバン" }
    },
    "BigWood": { 
        url: "https://i.postimg.cc/RF7kzGny/Present-List-Big-Wood.png",
        name: { "zh-TW": "大木頭的種子", "ja": "ビッグウッドの種" }
    },
    "Blanchet": { 
        url: "https://i.postimg.cc/50BhMpFZ/Present-List-Blanchet.png",
        name: { "zh-TW": "藍玫瑰花束", "ja": "青い薔薇の花束" }
    },
    "Butter": { 
        url: "https://i.postimg.cc/fLcGh59Q/Present-List-Butter.png",
        name: { "zh-TW": "花草花冠", "ja": "草花の花冠" }
    },
    "Canna": { 
        url: "https://i.postimg.cc/wvXCdFmz/Present-List-Canna.png",
        name: { "zh-TW": "客製化遊戲機", "ja": "カスタムゲーム機" }
    },
    "Carren": { 
        url: "https://i.postimg.cc/V6qxc4C1/Present-List-Carren.png",
        name: { "zh-TW": "胡蘿蔔幼苗種子包", "ja": "ニンジンの苗の種袋" }
    },
    "Chloe": { 
        url: "https://i.postimg.cc/ZR8GhjdY/Present-List-Chloe.png",
        name: { "zh-TW": "王國風景掛毯", "ja": "王国風景のタペストリー" }
    },
    "Chopi": { 
        url: "https://i.postimg.cc/vBrJdXVm/Present-List-Chopi.png",
        name: { "zh-TW": "教主簽名簿", "ja": "教主のサインブック" }
    },
    "Diana": { 
        url: "https://i.postimg.cc/RF7kzGH6/Present-List-Diana.png",
        name: { "zh-TW": "橡樹實木搖椅", "ja": "オーク無垢材のロッキングチェア" }
    },
    "Ed": { 
        url: "https://i.postimg.cc/d3JzQd2V/Present-List-Ed.png",
        name: { "zh-TW": "夢中的姐妹畫作", "ja": "夢の中の姉妹たちの絵" }
    },
    "Elena": { 
        url: "https://i.postimg.cc/mkT0ZMYt/Present-List-Elena.png",
        name: { "zh-TW": "精靈製最新型筆記型電腦", "ja": "エルフ製最新型ノートパソコン" }
    },
    "Epica": { 
        url: "https://i.postimg.cc/tJ9LRP3x/Present-List-Epica.png",
        name: { "zh-TW": "教主史詩抄本", "ja": "教主叙事詩の写本" }
    },
    "Erpin": { 
        url: "https://i.postimg.cc/Kks9J1sx/Present-List-Erpin.png",
        name: { "zh-TW": "昨晚的蠟筆", "ja": "昨晩のクレヨン" }
    },
    "Espi": { 
        url: "https://i.postimg.cc/mkT0ZMYF/Present-List-Espi.png",
        name: { "zh-TW": "夢境筆記", "ja": "ドリームノート" }
    },
    "Festa": { 
        url: "https://i.postimg.cc/GtbZ3YFF/Present-List-Festa.png",
        name: { "zh-TW": "全盛時期簽名專輯", "ja": "全盛期のサイン入りアルバム" }
    },
    "Fricle": { 
        url: "https://i.postimg.cc/wM9SxJXV/Present-List-Fricle.png",
        name: { "zh-TW": "友情荊棘戒指", "ja": "友情の茨の指輪" }
    },
    "Gabia": { 
        url: "https://i.postimg.cc/Y0tJ2g6x/Present-List-Gabia.png",
        name: { "zh-TW": "高級奇石套裝", "ja": "高級奇石セット" }
    },
    "Haley": { 
        url: "https://i.postimg.cc/5yfZ9vB7/Present-List-Haley.png",
        name: { "zh-TW": "莫納蒂姆戰略圖", "ja": "モナティアム戦略地図" }
    },
    "Hilde": { 
        url: "https://i.postimg.cc/d3ngh16R/Present-List-Hilde.png",
        name: { "zh-TW": "專業學位證書", "ja": "専門学位証書" }
    },
    "Ifrit": { 
        url: "https://i.postimg.cc/wM9SxJXb/Present-List-Ifrit.png",
        name: { "zh-TW": "銀箔套裝", "ja": "銀箔のスーツ" }
    },
    "Jade": { 
        url: "https://i.postimg.cc/rsg7Dmj1/Present-List-Jade.png",
        name: { "zh-TW": "高級玉石地板", "ja": "高級翡翠マット" }
    },
    "Jubee": { 
        url: "https://i.postimg.cc/901sDMbL/Present-List-Jubee.png",
        name: { "zh-TW": "皇家蜂蜜", "ja": "ロイヤルハニー" }
    },
    "Kidian": { 
        url: "https://i.postimg.cc/zvp4yB70/Present-List-Kidian.png",
        name: { "zh-TW": "黑曜石短劍", "ja": "黒曜石の短剣" }
    },
    "Kommy": { 
        url: "https://i.postimg.cc/XqxtrJLt/Present-List-Kommy.png",
        name: { "zh-TW": "名牌枕頭", "ja": "高級ブランド枕" }
    },
    "Kyarot": { 
        url: "https://i.postimg.cc/RhG2WFdy/Present-List-Kyarot.png",
        name: { "zh-TW": "優良農業獎盃", "ja": "優良農業トロフィー" }
    },
    "Lazy": { 
        url: "https://i.postimg.cc/Gtz642zn/Present-List-Lazy.png",
        name: { "zh-TW": "最先進工具組", "ja": "最先端の工具セット" }
    },
    "Leets": { 
        url: "https://i.postimg.cc/vTXC4BXb/Present-List-Leets.png",
        name: { "zh-TW": "超重鋼鐵盔甲", "ja": "超重量級の鋼鉄アーマー" }
    },
    "Levi": { 
        url: "https://i.postimg.cc/QCSvFtSj/Present-List-Levi.png",
        name: { "zh-TW": "超大尺寸保暖內衣", "ja": "特大サイズの保温インナー" }
    },
    "MaestroMK2": { 
        url: "https://i.postimg.cc/mZSvXX4z/Present-List-Maestro-MK2.png",
        name: { "zh-TW": "充滿回憶的硬碟", "ja": "思い出のハードディスク" }
    },
    "Mago": { 
        url: "https://i.postimg.cc/kMy011Ct/Present-List-Mago.png",
        name: { "zh-TW": "羊毛大衣", "ja": "羊毛のコート" }
    },
    "Marie": { 
        url: "https://i.postimg.cc/7PNFss47/Present-List-Marie.png",
        name: { "zh-TW": "反物質中子炸彈", "ja": "反物質中性子爆弾" }
    },
    "Mayo": { 
        url: "https://i.postimg.cc/zDksttN7/Present-List-Mayo.png",
        name: { "zh-TW": "奇怪的石膏像", "ja": "奇妙な石膏像" }
    },
    "Meluna": { 
        url: "https://i.postimg.cc/ry9BnnTC/Present-List-Meluna.png",
        name: { "zh-TW": "遊艇啟動匙", "ja": "ヨットのエンジンキー" }
    },
    "Momo": { 
        url: "https://i.postimg.cc/zDksttNF/Present-List-Momo.png",
        name: { "zh-TW": "忍術替身木", "ja": "忍術の変わり身の丸太" }
    },
    "Naia": { 
        url: "https://i.postimg.cc/sfJk66zw/Present-List-Naia.png",
        name: { "zh-TW": "海豚大砲", "ja": "イルカ大砲" }
    },
    "Ner": { 
        url: "https://i.postimg.cc/8PPqqRkZ/Present-List-Ner.png",
        name: { "zh-TW": "女王育兒日記", "ja": "女王の育児日記" }
    },
    "Picora": { 
        url: "https://i.postimg.cc/dQ9bHHFz/Present-List-Picora.png",
        name: { "zh-TW": "精緻的時尚貼紙簿", "ja": "おしゃれなステッカーブック" }
    },
    "Posher": { 
        url: "https://i.postimg.cc/7YYpp3Pt/Present-List-Posher.png",
        name: { "zh-TW": "健康防禦葡萄汁", "ja": "健康防御ブドウジュース" }
    },
    "Rim": { 
        url: "https://i.postimg.cc/hPPHHL4k/Present-List-Rim.png",
        name: { "zh-TW": "高級茶杯套裝", "ja": "高級ティーカップセット" }
    },
    "Risty": { 
        url: "https://i.postimg.cc/bNNKKxNc/Present-List-Risty.png",
        name: { "zh-TW": "", "ja": "" }
    },
    "Rohne": { 
        url: "https://i.postimg.cc/fTT66cTs/Present-List-Rohne.png",
        name: { "zh-TW": "教主觀察日記", "ja": "教主観察日誌" }
    },
    "Rude": { 
        url: "https://i.postimg.cc/yYYwwmY6/Present-List-Rude.png",
        name: { "zh-TW": "莫納蒂姆健身房高級會員卡", "ja": "モナティアムジムのプレミアム会員券" }
    },
    "Rufo": { 
        url: "https://i.postimg.cc/SNNww6Nx/Present-List-Rufo.png",
        name: { "zh-TW": "作弊骰子", "ja": "イカサマダイス" }
    },
    "Sari": { 
        url: "https://i.postimg.cc/4NNrr6Nd/Present-List-Sari.png",
        name: { "zh-TW": "反應卡片", "ja": "リアクションカード" }
    },
    "Selline": { 
        url: "https://i.postimg.cc/fTT66cTJ/Present-List-Selline.png",
        name: { "zh-TW": "挑釁用的比賽服", "ja": "挑発用の勝負服" }
    },
    "Shady": { 
        url: "https://i.postimg.cc/DyjtFS8F/Present-List-Shady.png",
        name: { "zh-TW": "魔法水晶珠", "ja": "魔法の水晶玉" }
    },
    "Shoupan": { 
        url: "https://i.postimg.cc/J469msG4/Present-List-Shoupan.png",
        name: { "zh-TW": "艾利亞斯英雄勳章", "ja": "エリアス英雄勲章" }
    },
    "Silphir": { 
        url: "https://i.postimg.cc/4NLrZYmy/Present-List-Silphir.png",
        name: { "zh-TW": "對練用稻草人", "ja": "訓練用のカカシ" }
    },
    "Sist": { 
        url: "https://i.postimg.cc/hPyHgXfh/Present-List-Sist.png",
        name: { "zh-TW": "紫水晶存錢筒", "ja": "アメジストの貯金箱" }
    },
    "Snorky": { 
        url: "https://i.postimg.cc/TY7ZGKpW/Present-List-Snorky.png",
        name: { "zh-TW": "手工豆漿48包", "ja": "手作り豆乳48パック" }
    },
    "Speaki": { 
        url: "https://i.postimg.cc/xTxWYXcK/Present-List-Speaki.png",
        name: { "zh-TW": "南瓜南瓜套裝", "ja": "かぼちゃかぼちゃセット" }
    },
    "Sylla": { 
        url: "https://i.postimg.cc/nhXNLnD7/Present-List-Sylla.png",
        name: { "zh-TW": "攜帶型電風扇", "ja": "携帯用扇風機" }
    },
    "Taida": { 
        url: "https://i.postimg.cc/tCSLysY2/Present-List-Taida.png",
        name: { "zh-TW": "偷懶專用睡袋", "ja": "サボり用の寝袋" }
    },
    "Ui": { 
        url: "https://i.postimg.cc/y8D2N7ZT/Present-List-Ui.png",
        name: { "zh-TW": "魔靈池塘的蓮花", "ja": "精霊蓮池の蓮の花" }
    },
    "Velvet": { 
        url: "https://i.postimg.cc/T3KBPTDk/Present-List-Velvet.png",
        name: { "zh-TW": "黃金荊棘王冠", "ja": "黄金の茨の王冠" }
    },
    "Vivi": { 
        url: "https://i.postimg.cc/9QDsfc7K/Present-List-Vivi.png",
        name: { "zh-TW": "銀製高腳杯", "ja": "銀のゴブレット" }
    },
    "xXionx": { 
        url: "https://i.postimg.cc/MpngGzQF/Present-List-x-Xionx.png",
        name: { "zh-TW": "網絡小說單行本", "ja": "ネット小説の単行本" }
    },
    "Yomi": { 
        url: "https://i.postimg.cc/T3KBPTbv/Present-List-Yomi.png",
        name: { "zh-TW": "向月花花環", "ja": "向月花の花冠" }
    },
    "Yumimi": { 
        url: "https://i.postimg.cc/mgPKrT9f/Present-List-Yumimi.png",
        name: { "zh-TW": "偽裝用木製面具", "ja": "変装用の木製仮面" }
    }
};