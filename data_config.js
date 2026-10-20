// ==========================================
// 嘟嘟臉金蠟筆記事本 - 核心資料庫 (data_core.js)
// 負責：首頁與詳細頁共用的基礎資料、圖片映射、多語系字典
// ==========================================

// ------------------------------------------
// 多語系字典與翻譯系統
// ------------------------------------------
const LANG_DICT = {
    "zh-TW": {
        app_title: "嘟嘟臉金蠟筆記事本", app_subtitle: "祝各位教主日日出金蠟筆", stats_title: "📊 統計與加成資訊",
        stats_stat: "統計", stats_character: "坨坨", stats_attack: "攻", stats_defence: "防", stats_hp: "血",
        stats_critical: "爆", stats_resist: "抗", stats_personality: "🔮 性格：", stats_race: "🧬 種族：",
        stats_position: "🗺️ 站位：", stats_job: "⚔️ 職業：", stats_cell: "🖍️ 金蠟筆格：", stats_crayon: "金蠟筆",
        stats_level: "指定層數:", cell_kind: "格子種類:", level_1st: "第一層", level_2nd: "第二層", level_3rd: "第三層",
        total_owned: "已擁有坨坨", crayon_used: "蠟筆消耗量", crayon_needed: "蠟筆需求量",
        crayon_attack: "攻擊", crayon_defence: "防禦", crayon_hp: "血量", crayon_critical: "爆擊", crayon_resist: "爆抗",
        personality_naive: "天真", personality_calm: "冷靜", personality_mad: "狂亂", personality_vivid: "活潑", personality_gloomy: "憂鬱", personality_resonance: "共鳴", personality_multifaceted: "雙面",
        race_witch: "魔女", race_beast: "獸人", race_dragon: "龍族", race_spirit: "魔靈", race_fairy: "妖精", race_elf: "精靈", race_ghost: "幽靈", race_unknown: "???",
        position_front: "前排", position_middle: "中排", position_back: "後排", position_all: "所有排", job_attacker: "輸出", job_defender: "肉盾", job_supporter: "輔助",
		sort_title: "↕️ 排序：", sort_personality: "預設", sort_releaseDate: "實裝日期", sort_name: "名字", sort_race: "種族", sort_position: "站位", sort_job: "職業", sort_order_desc: "⬇️ 逆排", sort_order_asc: "⬆️ 順排", "所有坨坨": "所有坨坨",
        visit_count_prefix: "累計利用回數", maintenance_msg: "🔧 維護更新中...", event_title: "🎪 今期活動",
        auth_offline_title: "當前狀態：單機模式", auth_offline_desc: "紀錄保存在此裝置", auth_online_title: "🟢 ", auth_logout: "登出",
        filter_title: "🔍 篩選器", filter_search_placeholder: "搜尋坨坨...", filter_reset: "重置全部篩選", filter_display_mode: "👁️ 版面顯示：",
        filter_btn_all: "全部", filter_btn_show_all: "顯示全部", filter_btn_show_1: "僅第一層", filter_btn_show_2: "僅第二層", filter_btn_show_3: "僅第三層",
		grid_status: "格子狀態", filter_btn_opened: "已開啟", filter_btn_unopened: "未開啟",
        stats_toggle_hint: "點擊展開 / 收起", stats_layer_1_title: "🥇 第一層統計", stats_layer_2_title: "🥈 第二層統計", stats_layer_3_title: "🥉 第三層統計",
        stats_layer_1_rule: "(每格+3%, 蠟筆×2)", stats_layer_2_rule: "(每格+4%, 蠟筆×4)", stats_layer_3_rule: "(每格+5%, 蠟筆×6)",
        stats_global_bonus: "📊 全體屬性加成", stats_need_more_prefix: "尚要 ", stats_need_more_suffix: " 根蠟筆",
		menu_system_title: "系統選單", menu_gacha: "招募模擬器", menu_viewer: "動態展示器", menu_tier_maker: "排行榜生成器", menu_checklist: "自訂角色清單", menu_toggle_anim: "開關頂部跑酷動畫",
		quick_action_title: "⚡ 快捷操作", quick_action_all_chars: "全體坨坨:", quick_action_own_all: "一鍵全部擁有", quick_action_cancel_all: "一鍵全部取消", quick_action_fill_crayons: "填滿蠟筆:", quick_action_clear_crayons: "清空蠟筆:", quick_action_fill_all: "填滿全層", quick_action_clear_all: "清空全層", quick_action_layer_1: "第一層", quick_action_layer_2: "第二層", quick_action_layer_3: "第三層", quick_action_own: "擁有", quick_action_cancel: "取消擁有", quick_action_fill: "填滿", quick_action_clear: "清空", quick_action_all_layers: "所有層數", quick_action_layer_n: "第 {n} 層", quick_action_confirm_chars: "確定要一鍵「{action}」所有坨坨嗎？\n(此操作會覆蓋所有坨坨的擁有狀態！)", quick_action_confirm_grids: "確定要「{action}」全體坨坨【{layer}】的蠟筆格子嗎？\n(⚠️ 警告：此操作會直接覆蓋目前的紀錄，且無法復原！)",
		path_image_hint: "查看路徑圖",
		info_job_reward: "💰 打工獎勵", info_food: "🍲 喜好料理", aside_title: "願像", aside_loading: "看起來思念還不夠深",
		stats_attribute: "攻擊類型", 物理: "物理", 魔法: "魔法", 艾爾丁: "艾爾丁", 普通坨坨: "普通坨坨", 身份: "身份",
		x_label: "台港澳服官方X", official_x_url: "https://x.com/trickcal_TW",
        footer_author: "📝 記事本製作者: 冷笑話幽靈", footer_copyright: "© 遊戲版權: EpidGames & Bilibili", footer_lastupdate: "最後更新日期：10/09/2026",
        "天真": "天真", "冷靜": "冷靜", "狂亂": "狂亂", "活潑": "活潑", "憂鬱": "憂鬱", "共鳴": "共鳴", "雙面": "雙面",
        "魔女": "魔女", "獸人": "獸人", "龍族": "龍族", "魔靈": "魔靈", "妖精": "妖精", "精靈": "精靈", "幽靈": "幽靈", "???": "???",
        "前排": "前排", "中排": "中排", "後排": "後排", "所有排": "所有排", "輸出": "輸出", "肉盾": "肉盾", "輔助": "輔助",
        "攻擊": "攻擊", "防禦": "防禦", "血量": "血量", "爆擊": "爆擊", "爆抗": "爆抗", "全部": "全部",
		"克魯布魯斯": "克魯布魯斯", "蠟筆勇士": "蠟筆勇士", "R41雷內瓦": "R41雷內瓦", "莉1莉": "莉1莉", "M.E.O.W.": "M.E.O.W.", "雷內瓦(NPC)": "雷內瓦", "榮春": "榮春", "高蒂": "高蒂", "可麗餅": "可麗餅",
        page_title_char_detail: "坨坨詳細資料", btn_close_page: "⬅️ 關閉此頁", loading: "載入中...", release_date_label: "實裝日期",
        crayon_detail_title: "🖍️ 金蠟筆分佈詳情", layer_1_stats: "🥇 第一層屬性", layer_2_stats: "🥈 第二層屬性", layer_3_stats: "🥉 第三層屬性",
        present_title: "坨坨珍藏品", present_loading: "寶箱開啟中...", btn_letter: "坨坨情信", btn_thought: "教主感想",
        present_select_hint: "請選擇顯示內容...", no_letter_hint: "（這隻坨坨好像還沒寫信給你呢...）", no_thought_hint: "（教主目前還沒寫下對這個珍藏品的感想呢...）",
        present_delivering: "珍藏品正在送遞中...", present_suffix: "的珍藏品", present_error: "⚠️ 珍藏品載入錯誤",
        skill_detail_title: "⚔️ 技能詳細資料", skill_loading: "技能載入中...", skill_normal_attack: "普通攻擊",
        skill_basic: "【基本】", skill_enhanced: "【強化】", skill_passive: "被動技能", skill_admission: "普通技能", skill_graduate: "高級技能",
        costume_default: "預設", costume_prefix: "服裝",
        comment_title: "💬 玩家評價與心得", comment_author_placeholder: "您的暱稱 (留白將以匿名顯示)", comment_content_placeholder: "寫下您對這位坨坨的評價、組隊心得或是發廚發言...",
        btn_submit_comment: "送出評價 🚀", btn_submitting: "傳送中... ⏳", comment_loading: "連線至留言板中...",
        no_comment_hint: "目前還沒有評價，來搶頭香吧！ 🐾", time_just_now: "剛剛", anonymous_leader: "匿名教主#",
        error_no_char: "❌ 未指定坨坨，請從主頁點擊坨坨按鈕進入。", error_no_data: "❌ 載入失敗：找不到 INITIAL_DATA。",
        error_char_not_found: "❌ 找不到該坨坨資料。", error_no_skill_data: "❌ 找不到 skill.js 資料，請確認檔案存在。",
        error_char_skill_not_found: "⚠️ 找不到該坨坨的技能資料。", alert_empty_comment: "請輸入評價內容！",
        alert_comment_too_long: "評價內容太長囉，請縮減至 500 字以內！", alert_comment_failed: "留言失敗，請稍後再試！", error_load_comment: "讀取留言失敗，請確認資料庫權限設定。",
		ui_title: "坨坨動態展示器", ui_back: "⬅️ 返回", ui_select_char: "👥 選擇坨坨", ui_show_all: "顯示全部", ui_hide_all: "隱藏全部", ui_please_select: "請先選擇坨坨", ui_camera: "🔄 重置", ui_waiting: "等待載入...", ui_mode_lobby: "🔄 模式: 大廳", ui_mode_battle: "⚔️ 模式: 戰鬥", ui_ar_open: "📷 開啟AR", ui_ar_close: "❌ 關閉AR", ui_ar_panel: "📷 相機面板", ui_ar_flip: "🔄 翻轉鏡頭", ui_ar_capture: "📸 拍照儲存", ui_costume: "服裝", ui_default_costume: "預設服裝", ui_default_model: "預設模型", ui_select_anim: "選擇動作", ui_slots: "🧩 外觀插槽", ui_show_slots: "全顯", ui_hide_slots: "全隱", ui_loading_data: "讀取資料中...",
		gacha_simulator: "嘟嘟臉角色招募模擬器", gacha_select_pool: "📍 選擇招募池", gacha_personality_hint: "🔮 指定性格：", gacha_1_pull: "1次招募", gacha_10_pull: "10次招募", gacha_waiting: "等待招募中...", gacha_history: "📜 招募紀錄", gacha_rate_up: "🎯 特選招募", gacha_normal: "🌟 普通招募", gacha_personality_pool: "🔮 性格選擇招募", gacha_result_title: "🎉 招募結果 🎉", gacha_prev_page: "上一頁", gacha_next_page: "下一頁", gacha_page: "第 {current} / {total} 頁", gacha_unknown_time: "未知時間", gacha_unknown_pool: "未知招募",
		ui_tier_title: "排行榜生成器", ui_tier_add_row: "新增級別", ui_tier_reset: "全部重置", ui_tier_export: "輸出圖片", ui_tier_pool_title: "選擇角色 (拖曳至上方排行榜)", ui_tier_default_title: "我的最愛排行榜", ui_tier_reset_confirm: "確定要重置整個排行榜並將所有角色放回角色池嗎？", ui_tier_export_error: "匯出圖片失敗",
    },
    "ja": {
        app_title: "トリッカル特級クレヨンノート", app_subtitle: "教主が毎日特級クレヨンを受け取れますように", stats_title: "📊 統計とボーナス情報",
        stats_stat: "統計", stats_character: "使徒", stats_attack: "攻撃", stats_defence: "防御", stats_hp: "HP",
        stats_critical: "会心", stats_resist: "抵抗", stats_personality: "🔮 性格：", stats_race: "🧬 種族：",
        stats_position: "🗺️ 配置：", stats_job: "⚔️ 職業：", stats_cell: "🖍️ 特級クレヨン：", stats_crayon: "特級クレヨン",
        stats_level: "特定ボード:", cell_kind: "ステータス:", level_1st: "1段階目", level_2nd: "2段階目", level_3rd: "3段階目",
        total_owned: "所有使徒", crayon_used: "消費クレヨン数", crayon_needed: "必要クレヨン数",
        crayon_attack: "攻撃力", crayon_defence: "防御力", crayon_hp: "HP", crayon_critical: "会心", crayon_resist: "会心抵抗",
        personality_naive: "純粋", personality_calm: "冷静", personality_mad: "狂気", personality_vivid: "活発", personality_gloomy: "憂鬱", personality_resonance: "共振", personality_multifaceted: "裏面",
        race_witch: "魔女", race_beast: "獣人", race_dragon: "竜族", race_spirit: "精霊", race_fairy: "妖精", race_elf: "エルフ", race_ghost: "幽霊", race_unknown: "???",
        position_front: "前列", position_middle: "中列", position_back: "後列", position_all: "全ての列", job_attacker: "攻撃", job_defender: "守備", job_supporter: "支援",
		sort_title: "↕️ 並べ替え：", sort_personality: "デフォルト", sort_releaseDate: "実装日", sort_name: "名前", sort_race: "種族", sort_position: "配置", sort_job: "職業", sort_order_desc: "⬇️ 降順", sort_order_asc: "⬆️ 昇順", "所有坨坨": "すべての使徒",
        visit_count_prefix: "総閲覧数", maintenance_msg: "🔧 メンテナンス中...", event_title: "🎪 開催中のイベント",
        auth_offline_title: "現在の状態：オフラインモード", auth_offline_desc: "データはこの端末に保存されます", auth_online_title: "🟢 ", auth_logout: "ログアウト",
        filter_title: "🔍 フィルター", filter_search_placeholder: "使徒を検索...", filter_reset: "すべてのフィルターをリセット", filter_display_mode: "👁️ ボード表示：",
        filter_btn_all: "すべて", filter_btn_show_all: "すべて表示", filter_btn_show_1: "1段階目のみ", filter_btn_show_2: "2段階目のみ", filter_btn_show_3: "3段階目のみ",
		grid_status: "状態", filter_btn_opened: "解放済み",filter_btn_unopened: "未解放",
        stats_toggle_hint: "クリックで展開 / 折りたたみ", stats_layer_1_title: "🥇 1段階目の統計", stats_layer_2_title: "🥈 2段階目の統計", stats_layer_3_title: "🥉 3段階目の統計",
        stats_layer_1_rule: "(各マス+3%, クレヨン×2)", stats_layer_2_rule: "(各マス+4%, クレヨン×4)", stats_layer_3_rule: "(各マス+5%, クレヨン×6)",
        stats_global_bonus: "📊 全体ステータスバフ", stats_need_more_prefix: "必要クレヨン数: ", stats_need_more_suffix: " 本",
		menu_system_title: "システムメニュー", menu_gacha: "ガチャシミュレーター", menu_viewer: "アニメーション展示", menu_tier_maker: "ティアメーカー", menu_checklist: "マイカスタムリスト", menu_toggle_anim: "ランニングアニメーション切替",
		quick_action_title: "⚡ クイック操作", quick_action_all_chars: "全使徒:", quick_action_own_all: "一括所有する", quick_action_cancel_all: "一括解除する", quick_action_fill_crayons: "クレヨンを埋める:", quick_action_clear_crayons: "クレヨンをクリア:", quick_action_fill_all: "全層を埋める", quick_action_clear_all: "全層をクリア", quick_action_layer_1: "1段階目", quick_action_layer_2: "2段階目", quick_action_layer_3: "3段階目", quick_action_own: "所有する", quick_action_cancel: "所有を解除", quick_action_fill: "埋める", quick_action_clear: "クリア", quick_action_all_layers: "すべての層", quick_action_layer_n: "{n} 段階目", quick_action_confirm_chars: "全使徒を「{action}」してもよろしいですか？\n(この操作はすべての使徒の所有状態を上書きします！)", quick_action_confirm_grids: "全使徒の【{layer}】のクレヨンマスを「{action}」してもよろしいですか？\n(⚠️ 警告: この操作は現在の記録を上書きし、元に戻すことはできません！)",
		path_image_hint: "ルート図を見る",
		info_job_reward: "💰 獲得報酬", info_food: "🍲 食べ物の好み", aside_title: "アサイド", aside_loading: "まだ思念が深くなさそう",
		stats_attribute: "攻撃タイプ", 物理: "物理", 魔法: "魔法", 艾爾丁: "エルダイン", 普通坨坨: "ノーマル使徒", 身份: "身分",
        x_label: "公式 X", official_x_url: "https://x.com/trickcal_jp",
        footer_author: "📝 ノート作成者: 冷笑話幽靈", footer_copyright: "© ゲーム著作権: EpidGames & Bilibili", footer_lastupdate: "最終更新日：10/09/2026",
        "天真": "純粋", "冷靜": "冷静", "狂亂": "狂気", "活潑": "活発", "憂鬱": "憂鬱", "共鳴": "共振", "雙面": "裏面",
        "魔女": "魔女", "獸人": "獣人", "龍族": "竜族", "魔靈": "精霊", "妖精": "妖精", "精靈": "エルフ", "幽靈": "幽霊", "???": "???",
        "前排": "前列", "中排": "中列", "後排": "後列", "所有排": "全ての列", "輸出": "攻撃", "肉盾": "守備", "輔助": "支援",
        "攻擊": "攻撃", "防禦": "防御", "血量": "HP", "爆擊": "会心", "爆抗": "会心抵抗", "全部": "すべて",
		"克魯布魯斯": "ケルベロス", "蠟筆勇士": "イサムレヨン", "R41雷內瓦": "R41 リニュア", "莉1莉": "リリー", "M.E.O.W.": "M.E.O.W.", "雷內瓦(NPC)": "リニュア", "榮春": "ブルミ", "高蒂": "ゴールディ", "可麗餅": "クレープ",
        page_title_char_detail: "使徒詳細データ", btn_close_page: "⬅️ 閉じる", loading: "読み込み中...", release_date_label: "実装日",
        crayon_detail_title: "🖍️ 特級クレヨン分布詳細", layer_1_stats: "🥇 1段階目ステータス", layer_2_stats: "🥈 2段階目ステータス", layer_3_stats: "🥉 3段階目ステータス",
        present_title: "使徒の愛用品", present_loading: "宝箱を開封中...", btn_letter: "使徒からの手紙", btn_thought: "教主の感想",
        present_select_hint: "表示内容を選択してください...", no_letter_hint: "（この使徒はまだ手紙を書いていないようです...）", no_thought_hint: "（教主はまだこの愛用品に対する感想を書いていないようです...）",
        present_delivering: "愛用品を配達中...", present_suffix: "の愛用品", present_error: "⚠️ 愛用品読み込みエラー",
        skill_detail_title: "⚔️ スキル詳細", skill_loading: "スキル読み込み中...", skill_normal_attack: "普通攻撃",
        skill_basic: "【基本】", skill_enhanced: "【強化】", skill_passive: "パッシブスキル", skill_admission: "低学年スキル", skill_graduate: "高学年スキル",
        costume_default: "デフォルト", costume_prefix: "衣装",
        comment_title: "💬 教主の評価と感想", comment_author_placeholder: "ニックネーム (空欄の場合は匿名表示)", comment_content_placeholder: "この使徒に対する評価、編成の感想、または愛の叫びを書いてください...",
        btn_submit_comment: "評価を送信 🚀", btn_submitting: "送信中... ⏳", comment_loading: "掲示板に接続中...",
        no_comment_hint: "まだ評価がありません。最初の評価を書きましょう！ 🐾", time_just_now: "たった今", anonymous_leader: "匿名教主#",
        error_no_char: "❌ 使徒が指定されていません。ホーム画面からキャラクターボタンをタップしてください。", error_no_data: "❌ 読み込み失敗：INITIAL_DATAが見つかりません。",
        error_char_not_found: "❌ 該当する使徒データが見つかりません。", error_no_skill_data: "❌ skill.jsのデータが見つかりません。ファイルが存在するか確認してください。",
        error_char_skill_not_found: "⚠️ 該当する使徒のスキルデータが見つかりません。", alert_empty_comment: "評価内容を入力してください！",
        alert_comment_too_long: "評価内容が長すぎます。500文字以内に短縮してください！", alert_comment_failed: "送信に失敗しました。後でもう一度お試しください！", error_load_comment: "コメントの読み込みに失敗しました。データベースの権限設定を確認してください。",
		ui_title: "使徒ビューアー", ui_back: "⬅️ 戻る", ui_select_char: "👥 使徒選択", ui_show_all: "全て表示", ui_hide_all: "全て隠す", ui_please_select: "先に選択してください", ui_camera: "🔄 リセット", ui_waiting: "ロード中...", ui_mode_lobby: "🔄 モード: ロビー", ui_mode_battle: "⚔️ モード: バトル", ui_ar_open: "📷 ARオン", ui_ar_close: "❌ ARオフ", ui_ar_panel: "📷 カメラパネル", ui_ar_flip: "🔄 反転", ui_ar_capture: "📸 撮影", ui_costume: "衣装", ui_default_costume: "デフォルト", ui_default_model: "基本モデル", ui_select_anim: "モーション", ui_slots: "🧩 スロット", ui_show_slots: "全表示", ui_hide_slots: "全非表示", ui_loading_data: "読み込み中...",
		gacha_simulator: "使徒ガチャシミュレーター", gacha_select_pool: "📍 ガチャ選択", gacha_personality_hint: "🔮 指定性格：", gacha_1_pull: "1回募集", gacha_10_pull: "10回募集", gacha_waiting: "結果待ち...", gacha_history: "📜 ガチャ履歴", gacha_rate_up: "🎯 ピックアップ募集", gacha_normal: "🌟 一般募集", gacha_personality_pool: "🔮 性格選択募集", gacha_result_title: "🎉 ガチャ結果 🎉", gacha_prev_page: "前へ", gacha_next_page: "次へ", gacha_page: "{current} / {total} ページ", gacha_unknown_time: "不明な時間", gacha_unknown_pool: "不明なガチャ",
		ui_tier_title: "ティアメーカー", ui_tier_add_row: "ランク追加", ui_tier_reset: "すべてリセット", ui_tier_export: "画像として保存", ui_tier_pool_title: "キャラクター一覧 (上のランクへドラッグ)", ui_tier_default_title: "私の最強ランキング", ui_tier_reset_confirm: "本当にすべてリセットしてキャラクターを一覧に戻しますか？", ui_tier_export_error: "画像の出力に失敗しました。",
    },
    "en": {
        app_title: "Trickcal Crayon Notepad", app_subtitle: "May the Master get Ultra Crayons daily", stats_title: "📊 Stats & Bonus Info",
        stats_stat: "Stats", stats_character: " Apostle", stats_attack: "ATK", stats_defence: "DEF", stats_hp: "HP",
        stats_critical: "CRIT", stats_resist: "RES", stats_personality: "🔮 Personality:", stats_race: "🧬 Race:",
        stats_position: "🗺️ Position:", stats_job: "⚔️ Class:", stats_cell: "🖍️ Crayon Node:", stats_crayon: "Ultra Crayon",
        stats_level: "Target Board:", cell_kind: "Node Type:", level_1st: "Board 1", level_2nd: "Board 2", level_3rd: "Board 3",
        total_owned: "Owned Apostles", crayon_used: "Crayons Used", crayon_needed: "Crayons Needed",
        crayon_attack: "ATK", crayon_defence: "DEF", crayon_hp: "HP", crayon_critical: "CRIT", crayon_resist: "CRIT RES",
        personality_naive: "Pure", personality_calm: "Calm", personality_mad: "Mad", personality_vivid: "Vivid", personality_gloomy: "Gloomy", personality_resonance: "Resonance", personality_multifaceted: "Multifaceted",
        race_witch: "Witch", race_beast: "Beast", race_dragon: "Dragon", race_spirit: "Spirit", race_fairy: "Fairy", race_elf: "Elf", race_ghost: "Ghost", race_unknown: "???",
        position_front: "Front", position_middle: "Mid", position_back: "Back", position_all: "All Columns", job_attacker: "Attacker", job_defender: "Tank", job_supporter: "Support",
		sort_title: "↕️ Sort by:", sort_personality: "Default", sort_releaseDate: "Release Date", sort_name: "Name", sort_race: "Race", sort_position: "Position", sort_job: "Class", sort_order_desc: "⬇️ Desc", sort_order_asc: "⬆️ Asc", "所有坨坨": "All Apostles",
        visit_count_prefix: "Total Visits", maintenance_msg: "🔧 Under Maintenance...", event_title: "🎪 Current Event",
        auth_offline_title: "Status: Offline Mode", auth_offline_desc: "Data saved locally", auth_online_title: "🟢 ", auth_logout: "Logout",
        filter_title: "🔍 Filter", filter_search_placeholder: "Search Apostle...", filter_reset: "Reset All", filter_display_mode: "👁️ View Mode:",
        filter_btn_all: "All", filter_btn_show_all: "Show All", filter_btn_show_1: "Board 1 Only", filter_btn_show_2: "Board 2 Only", filter_btn_show_3: "Board 3 Only",
		grid_status: "Status", filter_btn_opened: "Opened", filter_btn_unopened: "Unopened",
        stats_toggle_hint: "Click to Expand / Collapse", stats_layer_1_title: "🥇 Board 1 Stats", stats_layer_2_title: "🥈 Board 2 Stats", stats_layer_3_title: "🥉 Board 3 Stats",
        stats_layer_1_rule: "(Node+3%, Crayon×2)", stats_layer_2_rule: "(Node+4%, Crayon×4)", stats_layer_3_rule: "(Node+5%, Crayon×6)",
        stats_global_bonus: "📊 Global Stat Bonus", stats_need_more_prefix: "Need ", stats_need_more_suffix: " Crayons",
		menu_system_title: "System Menu", menu_gacha: "Gacha Simulator", menu_viewer: "Apostle Viewer", menu_tier_maker: "Tier List Maker", menu_checklist: "Custom Checklist", menu_toggle_anim: "Toggle Running Animation",
		quick_action_title: "⚡ Quick Actions", quick_action_all_chars: "All Apostles:", quick_action_own_all: "Own All", quick_action_cancel_all: "Cancel All", quick_action_fill_crayons: "Fill Crayons:", quick_action_clear_crayons: "Clear Crayons:", quick_action_fill_all: "Fill All Layers", quick_action_clear_all: "Clear All Layers", quick_action_layer_1: "Layer 1", quick_action_layer_2: "Layer 2", quick_action_layer_3: "Layer 3", quick_action_own: "Own", quick_action_cancel: "Cancel", quick_action_fill: "Fill", quick_action_clear: "Clear", quick_action_all_layers: "All Layers", quick_action_layer_n: "Layer {n}", quick_action_confirm_chars: "Are you sure you want to '{action}' all Apostles?\n(This will overwrite the ownership status of all Apostles!)", quick_action_confirm_grids: "Are you sure you want to '{action}' the crayon grids for all Apostles in [{layer}]?\n(⚠️ Warning: This will overwrite current records and cannot be undone!)",
		path_image_hint: "View Path Chart",
		info_job_reward: "💰 Acquired Rewards", info_food: "🍲 Favorite Food", aside_title: "Yearning", aside_loading: "The thoughts don't seem deep enough yet",
		stats_attribute: "Attack Type", 物理: "Physical", 魔法: "Magical", 艾爾丁: "Eldain", 普通坨坨: "Normal Apostle", 身份: "Identity",
        x_label: "Official Global X", official_x_url: "https://x.com/trickcal_en",
        footer_author: "📝 Author: 冷笑話幽靈", footer_copyright: "© Copyright: EpidGames & Bilibili", footer_lastupdate: "last updated on: 10/09/2026",
        "天真": "Innocence", "冷靜": "Composed", "狂亂": "Madness", "活潑": "Vivacious", "憂鬱": "Depressed", "共鳴": "Resonance", "雙面": "Multifaceted",
        "魔女": "Witch", "獸人": "Werebeast", "龍族": "Dragon", "魔靈": "Elemental", "妖精": "Sprite", "精靈": "Elf", "幽靈": "Phantom", "???": "???",
        "前排": "Front", "中排": "Middle", "後排": "Back", "所有排": "All Columns", "輸出": "DPS", "肉盾": "Tank", "輔助": "Support",
        "攻擊": "ATK", "防禦": "DEF", "血量": "HP", "爆擊": "CRIT", "爆抗": "CRIT RES", "全部": "All",
		"克魯布魯斯": "Cerberus", "蠟筆勇士": "Super Crayon", "R41雷內瓦": "R41 Renewa", "莉1莉": "L1ly", "M.E.O.W.": "M.E.O.W.", "雷內瓦(NPC)": "Renewa", "榮春": "Youngchun", "高蒂": "Goldy", "可麗餅": "Crepe",
		page_title_char_detail: "Apostle Details", btn_close_page: "⬅️ Close", loading: "Loading...",  release_date_label: "Release Date",
        crayon_detail_title: "🖍️ Ultra Crayon Details", layer_1_stats: "🥇 Board 1 Stats", layer_2_stats: "🥈 Board 2 Stats", layer_3_stats: "🥉 Board 3 Stats",
        present_title: "Apostle's Cherished Items", present_loading: "Opening chest...", btn_letter: "Apostle's Letter", btn_thought: "Master's Thoughts",
        present_select_hint: "Please select content to display...", no_letter_hint: "(This Apostle hasn't written a letter to you yet...)", no_thought_hint: "(The Master hasn't shared their thoughts on this item yet...)",
        present_delivering: "Cherished item is being delivered...", present_suffix: "'s Cherished Item", present_error: "⚠️ Cherished Item Load Error",
        skill_detail_title: "⚔️ Skill Details", skill_loading: "Loading skills...", skill_normal_attack: "Normal ATK",
        skill_basic: "[Basic]", skill_enhanced: "[Enhance]", skill_passive: "Passive Skill", costume_default: "Default", costume_prefix: "Outfit ",
        skill_admission: "Freshman Skill", skill_graduate: "Senior Skill",
        comment_title: "💬 Master Reviews & Thoughts", comment_author_placeholder: "Your Nickname (Leave blank for anonymous)", comment_content_placeholder: "Write your review, team comp tips, or share your love for this Apostle...",
        btn_submit_comment: "Submit Review 🚀", btn_submitting: "Submitting... ⏳", comment_loading: "Connecting to message board...",
        no_comment_hint: "No reviews yet. Be the first to leave one! 🐾", time_just_now: "Just now", anonymous_leader: "Anon Leader #",
        error_no_char: "❌ Apostle not specified. Please enter via the home page.", error_no_data: "❌ Load Failed: INITIAL_DATA not found.",
        error_char_not_found: "❌ Apostle data not found.", error_no_skill_data: "❌ skill.js not found. Please check if the file exists.",
        error_char_skill_not_found: "⚠️ Skill data for this Apostle not found.", alert_empty_comment: "Please enter your review content!",
        alert_comment_too_long: "Review content is too long. Please keep it under 500 characters!", alert_comment_failed: "Failed to submit. Please try again later!", error_load_comment: "Failed to load comments. Please check database permissions.",
		ui_title: "Apostle Viewer", ui_back: "⬅️ Back", ui_select_char: "👥 Select Apostle", ui_show_all: "Show All", ui_hide_all: "Hide All", ui_please_select: "Please select first", ui_camera: "🔄 Reset", ui_waiting: "Loading...", ui_mode_lobby: "🔄 Mode: Lobby", ui_mode_battle: "⚔️ Mode: Battle", ui_ar_open: "📷 AR On", ui_ar_close: "❌ AR Off", ui_ar_panel: "📷 Camera UI", ui_ar_flip: "🔄 Flip", ui_ar_capture: "📸 Capture", ui_costume: "Costume", ui_default_costume: "Default", ui_default_model: "Base Model", ui_select_anim: "Animation", ui_slots: "🧩 Slots", ui_show_slots: "Show All", ui_hide_slots: "Hide All", ui_loading_data: "Loading...",
		gacha_simulator: "Apostle Gacha Simulator", gacha_select_pool: "📍 Select Pool", gacha_personality_hint: "🔮 Personality:", gacha_1_pull: "1 Pull", gacha_10_pull: "10 Pulls", gacha_waiting: "Waiting...", gacha_history: "📜 Gacha History", gacha_rate_up: "🎯 Rate Up", gacha_normal: "🌟 Normal Gacha", gacha_personality_pool: "🔮 Personality Gacha", gacha_result_title: "🎉 Gacha Results 🎉", gacha_prev_page: "Prev", gacha_next_page: "Next", gacha_page: "Page {current} / {total}", gacha_unknown_time: "Unknown Time", gacha_unknown_pool: "Unknown Pool",
		ui_tier_title: "Tier List Maker", ui_tier_add_row: "Add Rank", ui_tier_reset: "Reset All", ui_tier_export: "Export Image", ui_tier_pool_title: "Character Pool (Drag to Rank)", ui_tier_default_title: "My Ultimate Tier List", ui_tier_reset_confirm: "Are you sure you want to reset the board and return all characters to the pool?", ui_tier_export_error: "Failed to export image.",
    }
};

const currentLang = localStorage.getItem('user_lang') || 'zh-TW';
function t(key) { return LANG_DICT[currentLang][key] || key; }

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
        start: "2026-09-10T17:00:00+09:00",
        end: "2026-09-17T03:59:59+09:00",
        chars: ["雪蘭"],
        note: "Sherum"
    },
	{
        start: "2026-10-08T17:00:00+09:00",
        end: "2026-10-22T10:59:59+09:00",
        chars: ["瓊安", "優米", "海莉"],
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
        start: "2026-08-28T12:00:00+09:00",
        end: "2026-08-30T03:59:59+09:00",
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
        start: "2026-09-24T04:00:00+09:00",
        end: "2026-10-22T10:59:59+09:00",
        id: "Rune58",
        type: "Rune"
    },
	{
        start: "2026-09-17T04:00:00+09:00",
        end: "2026-09-24T10:59:59+09:00",
        id: "Artifact92",
        type: "Artifact"
    }
];
console.log("LANG_DICT 內容:", LANG_DICT);
