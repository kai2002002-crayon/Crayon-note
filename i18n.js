        const LANG_DICT = {
            "zh-TW": {
                app_title: "嘟嘟臉金蠟筆記事本", app_subtitle: "祝各位教主日日出金蠟筆", stats_title: "📊 統計與加成資訊",
                stats_stat: "統計", stats_character: "坨坨", stats_attack: "攻", stats_defence: "防", stats_hp: "血",
                stats_critical: "爆", stats_resist: "抗", stats_personality: "🔮 性格：", stats_race: "🧬 種族：",
                stats_position: "🗺️ 站位：", stats_job: "⚔️ 職業：", stats_cell: "🖍️ 金蠟筆格：", stats_crayon: "金蠟筆",
                stats_level: "指定層數:", cell_kind: "格子種類:", level_1st: "第一層", level_2nd: "第二層", level_3st: "第三層",
                total_owned: "已擁有坨坨", crayon_used: "蠟筆消耗量", crayon_needed: "蠟筆需求量",
                crayon_attack: "攻擊", crayon_defence: "防禦", crayon_hp: "血量", crayon_critical: "爆擊", crayon_resist: "爆抗",
                personality_naive: "天真", personality_calm: "冷靜", personality_mad: "狂亂", personality_vivid: "活潑", personality_gloomy: "憂鬱",
                race_witch: "魔女", race_beast: "獸人", race_dragon: "龍族", race_spirit: "魔靈", race_fairy: "妖精", race_elf: "精靈", race_ghost: "幽靈", race_unknown: "???",
                position_front: "前排", position_middle: "中排", position_back: "後排", job_attacker: "輸出", job_defender: "肉盾", job_supporter: "輔助",
                visit_count_prefix: "累計利用回数",
                auth_offline_title: "當前狀態：單機模式", auth_offline_desc: "紀錄保存在此裝置", auth_online_title: "🟢 已連線雲端", auth_logout: "登出",
                filter_title: "🔍 篩選器", filter_search_placeholder: "搜尋坨坨...", filter_reset: "重置全部篩選", filter_display_mode: "👁️ 版面顯示：",
                filter_btn_all: "全部", filter_btn_show_all: "顯示全部", filter_btn_show_1: "僅第一層", filter_btn_show_2: "僅第二層", filter_btn_show_3: "僅第三層",
                stats_toggle_hint: "點擊展開 / 收起", stats_layer_1_title: "🥇 第一層統計", stats_layer_2_title: "🥈 第二層統計", stats_layer_3_title: "🥉 第三層統計",
                stats_layer_1_rule: "(每格+3%, 蠟筆×2)", stats_layer_2_rule: "(每格+4%, 蠟筆×4)", stats_layer_3_rule: "(每格+5%, 蠟筆×6)",
                stats_global_bonus: "📊 全體屬性加成", stats_need_more_prefix: "尚要 ", stats_need_more_suffix: " 根蠟筆",
                x_label: "台港澳服官方X", official_x_url: "https://x.com/trickcal_TW",
                footer_author: "📝 記事本製作者: 冷笑話幽靈", footer_copyright: "© 遊戲版權: EpidGames & Bilibili", footer_lastupdate: "最後更新日期：26/05/2026",
                
                "天真": "天真", "冷靜": "冷靜", "狂亂": "狂亂", "活潑": "活潑", "憂鬱": "憂鬱",
                "魔女": "魔女", "獸人": "獸人", "龍族": "龍族", "魔靈": "魔靈", "妖精": "妖精", "精靈": "精靈", "幽靈": "幽靈", "???": "???",
                "前排": "前排", "中排": "中排", "後排": "後排", "輸出": "輸出", "肉盾": "肉盾", "輔助": "輔助",
                "攻擊": "攻擊", "防禦": "防禦", "血量": "血量", "爆擊": "爆擊", "爆抗": "爆抗", "全部": "全部",
                "洛涅": "洛涅", "薇薇": "薇薇", "艾爾芬": "艾爾芬", "錫安": "錫安", "伊弗利特": "伊弗利特", "伊德": "伊德", "佩佩": "佩佩", "佩斯塔": "佩斯塔",
                "修帕": "修帕", "傑德": "傑德", "優米": "優米", "劉美美": "劉美美", "加薇雅": "加薇雅", "卡洛特": "卡洛特", "卡蓮": "卡蓮", "喬菲": "喬菲",
                "基狄恩": "基狄恩", "大師2號": "大師2號", "大木頭": "大木頭", "奈雅": "奈雅", "奶油": "奶油", "布蘭切": "布蘭切", "希拉": "希拉", "希爾德": "希爾德",
                "希瑟圖": "希瑟圖", "希菲爾": "希菲爾", "帕特拉": "帕特拉", "庫洛艾": "庫洛艾", "康娜": "康娜", "愛麗絲": "愛麗絲", "斑尼": "斑尼", "斯皮奇": "斯皮奇",
                "斯諾奇": "斯諾奇", "柯米": "柯米", "桃桃": "桃桃", "梅森": "梅森", "梅露娜": "梅露娜", "海莉": "海莉", "珀榭": "珀榭", "琳": "琳",
                "瑟琳娜": "瑟琳娜", "瑪約": "瑪約", "瑪麗": "瑪麗", "皮可菈": "皮可菈", "盧波": "盧波", "米雪": "米雪", "綾": "綾", "羽伊": "羽伊",
                "艾斯皮": "艾斯皮", "艾琳娜": "艾琳娜", "艾皮卡": "艾皮卡", "艾舒爾": "艾舒爾", "艾蜜莉雅": "艾蜜莉雅", "芙莉可": "芙莉可", "茱蜜": "茱蜜", "莉茲": "莉茲",
                "莎莉": "莎莉", "萊薇": "萊薇", "蒂亞娜": "蒂亞娜", "謝蒂": "謝蒂", "貝魯": "貝魯", "貝麗塔": "貝麗塔", "路德": "路德", "路易": "路易",
                "阿萊特": "阿萊特", "雷吉": "雷吉", "馬爾": "馬爾", "泰達": "泰達", "寧琉": "寧琉", "莉絲蒂": "莉絲蒂",
		// 頁面與基本按鈕
        	page_title_char_detail: "角色詳細資料", btn_close_page: "⬅️ 關閉此頁", loading: "載入中...",
        
        	// 蠟筆分佈
        	crayon_detail_title: "🖍️ 金蠟筆分佈詳情",
		layer_1_stats: "🥇 第一層屬性",
		layer_2_stats: "🥈 第二層屬性",
		layer_3_stats: "🥉 第三層屬性",

        	// 珍藏品區塊
        	present_title: "🎁 坨坨珍藏品",
		present_loading: "寶箱開啟中...",
		btn_letter: "坨坨情信",
		btn_thought: "教主感想",
		present_select_hint: "請選擇顯示內容...",
		no_letter_hint: "（這隻坨坨好像還沒寫信給你呢...）",
		no_thought_hint: "（教主目前還沒寫下對這個珍藏品的感想呢...）",
		present_delivering: "珍藏品正在送遞中...",
		present_suffix: "的珍藏品",
		present_error: "⚠️ 珍藏品載入錯誤",

        	// 技能區塊
        	skill_detail_title: "⚔️ 技能詳細資料",
		skill_loading: "技能載入中...",
		skill_normal_attack: "普通攻擊",
		skill_basic: "【基本】", skill_enhanced: "【強化】",
		skill_passive: "被動技能",
		skill_admission: "普通技能",
		skill_graduate: "高級技能",
		costume_default: "預設",
		costume_prefix: "服裝",

        	// 留言板區塊
        	comment_title: "💬 玩家評價與心得",
		comment_author_placeholder: "您的暱稱 (留白將以匿名顯示)",
		comment_content_placeholder: "寫下您對這位坨坨的評價、組隊心得或是發廚發言...",
		btn_submit_comment: "送出評價 🚀",
		btn_submitting: "傳送中... ⏳",
		comment_loading: "連線至留言板中...",
		no_comment_hint: "目前還沒有評價，來搶頭香吧！ 🐾",
		time_just_now: "剛剛",
		anonymous_leader: "匿名教主#",

        	// 系統報錯與提示 (Alerts & Errors)
        	error_no_char: "❌ 未指定角色，請從主頁點擊角色按鈕進入。",
		error_no_data: "❌ 載入失敗：找不到 INITIAL_DATA。",
		error_char_not_found: "❌ 找不到該角色資料。",
		error_no_skill_data: "❌ 找不到 skill.js 資料，請確認檔案存在。",
		error_char_skill_not_found: "⚠️ 找不到該角色的技能資料。",
		alert_empty_comment: "請輸入評價內容！",
		alert_comment_too_long: "評價內容太長囉，請縮減至 500 字以內！",
		alert_comment_failed: "留言失敗，請稍後再試！",
		error_load_comment: "讀取留言失敗，請確認資料庫權限設定。",
            },

            "ja": {
                app_title: "トリッカル特級クレヨンノート", app_subtitle: "教主が毎日特級クレヨンを受け取れますように", stats_title: "📊 統計とボーナス情報",
                stats_stat: "統計", stats_character: "使徒", stats_attack: "攻撃", stats_defence: "防御", stats_hp: "HP",
                stats_critical: "会心", stats_resist: "抵抗", stats_personality: "🔮 性格：", stats_race: "🧬 種族：",
                stats_position: "🗺️ 配置：", stats_job: "⚔️ 職業：", stats_cell: "🖍️ 特級クレヨン：", stats_crayon: "特級クレヨン",
                stats_level: "特定ボード:", cell_kind: "ステータス:", level_1st: "1段階目", level_2nd: "2段階目", level_3st: "3段階目",
                total_owned: "所有使徒", crayon_used: "消費クレヨン数", crayon_needed: "必要クレヨン数",
                crayon_attack: "攻撃力", crayon_defence: "防御力", crayon_hp: "HP", crayon_critical: "会心", crayon_resist: "会心抵抗",
                personality_naive: "純粋", personality_calm: "冷静", personality_mad: "狂気", personality_vivid: "活発", personality_gloomy: "憂鬱",
                race_witch: "魔女", race_beast: "獣人", race_dragon: "竜族", race_spirit: "精霊", race_fairy: "妖精", race_elf: "エルフ", race_ghost: "幽霊", race_unknown: "???",
                position_front: "前列", position_middle: "中列", position_back: "後列", job_attacker: "攻撃", job_defender: "守備", job_supporter: "支援",
                visit_count_prefix: "総閲覧数",
                auth_offline_title: "現在の状態：オフラインモード", auth_offline_desc: "データはこの端末に保存されます", auth_online_title: "🟢 クラウドに接続中", auth_logout: "ログアウト",
                filter_title: "🔍 フィルター", filter_search_placeholder: "使徒を検索...", filter_reset: "すべてのフィルターをリセット", filter_display_mode: "👁️ ボード表示：",
                filter_btn_all: "すべて", filter_btn_show_all: "すべて表示", filter_btn_show_1: "1段階目のみ", filter_btn_show_2: "2段階目のみ", filter_btn_show_3: "3段階目のみ",
                stats_toggle_hint: "クリックで展開 / 折りたたみ", stats_layer_1_title: "🥇 1段階目の統計", stats_layer_2_title: "🥈 2段階目の統計", stats_layer_3_title: "🥉 3段階目の統計",
                stats_layer_1_rule: "(各マス+3%, クレヨン×2)", stats_layer_2_rule: "(各マス+4%, クレヨン×4)", stats_layer_3_rule: "(各マス+5%, クレヨン×6)",
                stats_global_bonus: "📊 全体ステータスバフ", stats_need_more_prefix: "必要クレヨン数: ", stats_need_more_suffix: " 本",
                x_label: "公式 X", official_x_url: "https://x.com/trickcal_jp",
                footer_author: "📝 ノート作成者: 冷笑話幽靈", footer_copyright: "© ゲーム著作権: EpidGames & Bilibili", footer_lastupdate: "最終更新日：26/05/2026",
                
                "天真": "純粋", "冷靜": "冷静", "狂亂": "狂気", "活潑": "活発", "憂鬱": "憂鬱",
                "魔女": "魔女", "獸人": "獣人", "龍族": "竜族", "魔靈": "精霊", "妖精": "妖精", "精靈": "エルフ", "幽靈": "幽霊", "???": "???",
                "前排": "前列", "中排": "中列", "後排": "後列", "輸出": "攻撃", "肉盾": "守備", "輔助": "支援",
                "攻擊": "攻撃", "防禦": "防御", "血量": "HP", "爆擊": "会心", "爆抗": "会心抵抗", "全部": "すべて",
                "洛涅": "ローネ", "薇薇": "ヴィヴィ", "艾爾芬": "エルフィン", "錫安": "シオン・ザ・DB", "伊弗利特": "イフリート", "伊德": "イード", "佩佩": "ベルベット", "佩斯塔": "フェスタ",
                "修帕": "シュパン", "傑德": "ジェイド", "優米": "ヨミ", "劉美美": "ユミミ", "加薇雅": "ガヴィア", "卡洛特": "キャロット", "卡蓮": "カレン", "喬菲": "チョッピー",
                "基狄恩": "ギデオン", "大師2號": "マエストロMK2", "大木頭": "ビッグウッド", "奈雅": "ナイア", "奶油": "バター", "布蘭切": "ブランセ", "希拉": "シーラ", "希爾德": "ヒルデ",
                "希瑟圖": "シスト", "希菲爾": "シルフィール", "帕特拉": "パトラ", "庫洛艾": "クロエ", "康娜": "カンナ", "愛麗絲": "アリス", "斑尼": "ベニー", "斯皮奇": "スピッキー",
                "斯諾奇": "スノキー", "柯米": "コミー", "桃桃": "モモ", "梅森": "メゾン", "梅露娜": "メロナ", "海莉": "ヘイリー", "珀榭": "ポーシャー", "琳": "リム",
                "瑟琳娜": "セリーネ", "瑪約": "マヨ", "瑪麗": "マリー", "皮可菈": "ピコラ", "盧波": "ルポ", "米雪": "ミンス", "綾": "アヤ", "羽伊": "ウイ",
                "艾斯皮": "エスピー", "艾琳娜": "エレナ", "艾皮卡": "エピカ", "艾舒爾": "エシュール", "艾蜜莉雅": "アメリア", "芙莉可": "フリックル", "茱蜜": "ジュビー", "莉茲": "リッツ",
                "莎莉": "サリー", "萊薇": "レヴィ", "蒂亞娜": "ディアナ", "謝蒂": "シェイディ", "貝魯": "ベル", "貝麗塔": "ベリータ", "路德": "ルード", "路易": "キュウイ",
                "阿萊特": "アレット", "雷吉": "レイジー", "馬爾": "マーゴ", "泰達": "タイダー", "寧琉": "ネル", "莉絲蒂": "リスティ",
		// ---------------- char_detail.html 專屬 UI 文字 ----------------
        	// 頁面與基本按鈕
        	page_title_char_detail: "使徒詳細データ", btn_close_page: "⬅️ 閉じる", loading: "読み込み中...",
        
        	// 蠟筆分佈
        	crayon_detail_title: "🖍️ 特級クレヨン分布詳細",
		layer_1_stats: "🥇 1段階目ステータス",
		layer_2_stats: "🥈 2段階目ステータス",
		layer_3_stats: "🥉 3段階目ステータス",

        	// 珍藏品區塊
        	present_title: "🎁 使徒の愛用品",
		present_loading: "宝箱を開封中...",
		btn_letter: "使徒からの手紙", btn_thought:
		"教主の感想",
		present_select_hint: "表示内容を選択してください...",
		no_letter_hint: "（この使徒はまだ手紙を書いていないようです...）",
		no_thought_hint: "（教主はまだこの愛用品に対する感想を書いていないようです...）",
		present_delivering: "愛用品を配達中...",
		present_suffix: "の愛用品",
		present_error: "⚠️ 愛用品読み込みエラー",

        	// 技能區塊
		skill_detail_title: "⚔️ スキル詳細",
		skill_loading: "スキル読み込み中...",
		skill_normal_attack: "普通攻撃",
		skill_basic: "【基本】", skill_enhanced: "【強化】",
		skill_passive: "パッシブスキル",
		skill_admission: "低学年スキル",
		skill_graduate: "高学年スキル",
		costume_default: "デフォルト",
		costume_prefix: "衣装",

        	// 留言板區塊
        	comment_title: "💬 教主の評価と感想",
		comment_author_placeholder: "ニックネーム (空欄の場合は匿名表示)",
		comment_content_placeholder: "この使徒に対する評価、編成の感想、または愛の叫びを書いてください...",
		btn_submit_comment: "評価を送信 🚀", btn_submitting: "送信中... ⏳",
		comment_loading: "掲示板に接続中...",
		no_comment_hint: "まだ評価がありません。最初の評価を書きましょう！ 🐾",
		time_just_now: "たった今",
		anonymous_leader: "匿名教主#",

        	// 系統報錯與提示 (Alerts & Errors)
        	error_no_char: "❌ 使徒が指定されていません。ホーム画面からキャラクターボタンをタップしてください。",
        	error_no_data: "❌ 読み込み失敗：INITIAL_DATAが見つかりません。",
        	error_char_not_found: "❌ 該当する使徒データが見つかりません。",
        	error_no_skill_data: "❌ skill.jsのデータが見つかりません。ファイルが存在するか確認してください。",
        	error_char_skill_not_found: "⚠️ 該当する使徒のスキルデータが見つかりません。",
        	alert_empty_comment: "評価内容を入力してください！",
        	alert_comment_too_long: "評価内容が長すぎます。500文字以内に短縮してください！",
        	alert_comment_failed: "送信に失敗しました。後でもう一度お試しください！",
        	error_load_comment: "コメントの読み込みに失敗しました。データベースの権限設定を確認してください。",
            },

            "en": {
                app_title: "Trickcal Crayon Notepad", app_subtitle: "May the Master get Ultra Crayons daily", stats_title: "📊 Stats & Bonus Info",
                stats_stat: "Stats", stats_character: " Apostle", stats_attack: "ATK", stats_defence: "DEF", stats_hp: "HP",
                stats_critical: "CRIT", stats_resist: "RES", stats_personality: "🔮 Personality:", stats_race: "🧬 Race:",
                stats_position: "🗺️ Position:", stats_job: "⚔️ Class:", stats_cell: "🖍️ Crayon Node:", stats_crayon: "Ultra Crayon",
                stats_level: "Target Board:", cell_kind: "Node Type:", level_1st: "Board 1", level_2nd: "Board 2", level_3st: "Board 3",
                total_owned: "Owned Apostles", crayon_used: "Crayons Used", crayon_needed: "Crayons Needed",
                crayon_attack: "ATK", crayon_defence: "DEF", crayon_hp: "HP", crayon_critical: "CRIT", crayon_resist: "CRIT RES",
                personality_naive: "Pure", personality_calm: "Calm", personality_mad: "Mad", personality_vivid: "Vivid", personality_gloomy: "Gloomy",
                race_witch: "Witch", race_beast: "Beast", race_dragon: "Dragon", race_spirit: "Spirit", race_fairy: "Fairy", race_elf: "Elf", race_ghost: "Ghost", race_unknown: "???",
                position_front: "Front", position_middle: "Mid", position_back: "Back", job_attacker: "Attacker", job_defender: "Tank", job_supporter: "Support",
                visit_count_prefix: "Total Visits",
                auth_offline_title: "Status: Offline Mode", auth_offline_desc: "Data saved locally", auth_online_title: "🟢 Connected to Cloud", auth_logout: "Logout",
                filter_title: "🔍 Filter", filter_search_placeholder: "Search Apostle...", filter_reset: "Reset All", filter_display_mode: "👁️ View Mode:",
                filter_btn_all: "All", filter_btn_show_all: "Show All", filter_btn_show_1: "Board 1 Only", filter_btn_show_2: "Board 2 Only", filter_btn_show_3: "Board 3 Only",
                stats_toggle_hint: "Click to Expand / Collapse", stats_layer_1_title: "🥇 Board 1 Stats", stats_layer_2_title: "🥈 Board 2 Stats", stats_layer_3_title: "🥉 Board 3 Stats",
                stats_layer_1_rule: "(Node+3%, Crayon×2)", stats_layer_2_rule: "(Node+4%, Crayon×4)", stats_layer_3_rule: "(Node+5%, Crayon×6)",
                stats_global_bonus: "📊 Global Stat Bonus", stats_need_more_prefix: "Need ", stats_need_more_suffix: " Crayons",
                x_label: "Official Global X", official_x_url: "https://x.com/trickcal_en",
                footer_author: "📝 Author: 冷笑話幽靈", footer_copyright: "© Copyright: EpidGames & Bilibili", footer_lastupdate: "last updated on: 26/05/2026",

                "天真": "Innocence", "冷靜": "Composed", "狂亂": "Madness", "活潑": "Vivacious", "憂鬱": "Depressed",
                "魔女": "Witch", "獸人": "Werebeast", "龍族": "Dragon", "魔靈": "Elemental", "妖精": "Sprite", "精靈": "Elf", "幽靈": "Phantom", "???": "???",
                
                // ⚔️ 職業對應
                "前排": "Front", "中排": "Middle", "後排": "Back", "輸出": "DPS", "肉盾": "Tank", "輔助": "Support",
                
                // 📊 屬性對應
                "攻擊": "ATK", "防禦": "DEF", "血量": "HP", "爆擊": "CRIT", "爆抗": "CRIT RES", "全部": "All",
                
                "洛涅": "Rohne", "薇薇": "Vivi", "艾爾芬": "Erpin", "錫安": "xXionx", "伊弗利特": "Ifrit", "伊德": "ED", "佩佩": "Velvet", "佩斯塔": "Festa",
                "修帕": "Shoupan", "傑德": "Jade", "優米": "Yomi", "劉美美": "Yumimi", "加薇雅": "Gabia", "卡洛特": "Kyarot", "卡蓮": "Carren", "喬菲": "Chopi",
                "基狄恩": "Kidian", "大師2號": "Maestro Mk.2", "大木頭": "Big Wood", "奈雅": "Naia", "奶油": "Butter", "布蘭切": "Blanchet", "希拉": "Sylla", "希爾德": "Hilde",
                "希瑟圖": "Sist", "希菲爾": "Silphir", "帕特拉": "Patula", "庫洛艾": "Chloe", "康娜": "Canna", "愛麗絲": "Alice", "斑尼": "Beni", "斯皮奇": "Speaki",
                "斯諾奇": "Snorky", "柯米": "Kommy", "桃桃": "Momo", "梅森": "Maison", "梅露娜": "Meluna", "海莉": "Haley", "珀榭": "Posher", "琳": "Rim",
                "瑟琳娜": "Selene", "瑪約": "Mayo", "瑪麗": "Marie", "皮可菈": "Picora", "盧波": "Rufo", "米雪": "Mynx", "綾": "Aya", "羽伊": "Ui",
                "艾斯皮": "Espi", "艾琳娜": "Elena", "艾皮卡": "Epica", "艾舒爾": "Ashur", "艾蜜莉雅": "Amelia", "芙莉可": "Fricle", "茱蜜": "Jubee", "莉茲": "Leets",
                "莎莉": "Sari", "萊薇": "Levi", "蒂亞娜": "Diana", "謝蒂": "Shaydi", "貝魯": "Veroo", "貝麗塔": "Belita", "路德": "Rudd", "路易": "Kyuri",
                "阿萊特": "Allet", "雷吉": "Layze", "馬爾": "Mago", "泰達": "Taida", "寧琉": "Ner", "莉絲蒂": "Risty",

		// ---------------- char_detail.html 專屬 UI 文字 ----------------
        	// 頁面與基本按鈕
        	page_title_char_detail: "Apostle Details",
        	btn_close_page: "⬅️ Close",
        	loading: "Loading...",
        
        	// 蠟筆分佈
        	crayon_detail_title: "🖍️ Ultra Crayon Details",
        	layer_1_stats: "🥇 Board 1 Stats",
        	layer_2_stats: "🥈 Board 2 Stats",
        	layer_3_stats: "🥉 Board 3 Stats",

        	// 珍藏品區塊
        	present_title: "🎁 Apostle's Cherished Items",
        	present_loading: "Opening chest...",
        	btn_letter: "Apostle's Letter",
        	btn_thought: "Master's Thoughts",
        	present_select_hint: "Please select content to display...",
        	no_letter_hint: "(This Apostle hasn't written a letter to you yet...)",
        	no_thought_hint: "(The Master hasn't shared their thoughts on this item yet...)",
        	present_delivering: "Cherished item is being delivered...",
        	present_suffix: "'s Cherished Item",
        	present_error: "⚠️ Cherished Item Load Error",

        	// 技能區塊
        	skill_detail_title: "⚔️ Skill Details",
        	skill_loading: "Loading skills...",
        	skill_normal_attack: "Normal ATK",
        	skill_basic: "[Basic]",
        	skill_enhanced: "[Enhance]",
        	skill_passive: "Passive Skill",
        	costume_default: "Default",
        	costume_prefix: "Outfit ",
		skill_admission: "Freshman Skill", skill_graduate: "Senior Skill",

        	// 留言板區塊
        	comment_title: "💬 Master Reviews & Thoughts",
        	comment_author_placeholder: "Your Nickname (Leave blank for anonymous)",
        	comment_content_placeholder: "Write your review, team comp tips, or share your love for this Apostle...",
        	btn_submit_comment: "Submit Review 🚀",
        	btn_submitting: "Submitting... ⏳",
        	comment_loading: "Connecting to message board...",
        	no_comment_hint: "No reviews yet. Be the first to leave one! 🐾",
        	time_just_now: "Just now",
        	anonymous_leader: "Anon Leader #",

        	// 系統報錯與提示 (Alerts & Errors)
        	error_no_char: "❌ Apostle not specified. Please enter via the home page.",
        	error_no_data: "❌ Load Failed: INITIAL_DATA not found.",
        	error_char_not_found: "❌ Apostle data not found.",
        	error_no_skill_data: "❌ skill.js not found. Please check if the file exists.",
        	error_char_skill_not_found: "⚠️ Skill data for this Apostle not found.",
        	alert_empty_comment: "Please enter your review content!",
        	alert_comment_too_long: "Review content is too long. Please keep it under 500 characters!",
        	alert_comment_failed: "Failed to submit. Please try again later!",
        	error_load_comment: "Failed to load comments. Please check database permissions.",
            }
        };



// 取得使用者設定的語言，預設為 "zh-TW"
const currentLang = localStorage.getItem('app_lang') || 'zh-TW';

// 🌟 建立一個翻譯小工具函式 (超級好用)
// 以後只要呼叫 t("洛涅")，它就會自動根據當前語言給你對應的翻譯！
function t(key) {
    // 如果該語言的字典裡有這個 key，就回傳翻譯；如果沒有，就退回原本的字(防呆)
    return LANG_DICT[currentLang][key] || key; 
}