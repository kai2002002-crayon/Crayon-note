const STORY_DATA = {
    // 主線劇情
    main: [
        {
            id: "main_s1_1",
            chapterNumber: "001",
            name: "至少幫我塗點果醬",
            episodes: [
                { epNumber: "第1節", title: "序章", youtubeId: "_azTVTZ6XhU" },
                { epNumber: "第2節", title: "女王與教主", youtubeId: "Dc1X7qcqgFg" },
                { epNumber: "第3節", title: "修養錄揭露", youtubeId: "yLeRVGUOWZM" },
                { epNumber: "第4節", title: "魔法(?)師艾舒爾", youtubeId: "lkNL--QusJM" },
                { epNumber: "第5節", title: "探險家瑪麗", youtubeId: "OaQ40Cb7jYs" },
                { epNumber: "第6節", title: "收藏家瑪約", youtubeId: "hkpQ4A-pYEg" },
                { epNumber: "第7節", title: "逆轉叛亂", youtubeId: "AEcXWfWRqmk" },
                { epNumber: "第8節", title: "被叛亂逆轉", youtubeId: "a3gqSM0RHgI" }
            ]
        },
        {
            id: "main_s1_2",
            chapterNumber: "002",
            name: "獸糧大團結",
            episodes: [
                { epNumber: "第1節", title: "冷酷的開罐器", youtubeId: "FcU9N7orymo" },
                { epNumber: "第2節", title: "班尼，所向披靡", youtubeId: "VM0u38gJoDQ" },
                { epNumber: "第3節", title: "世界上沒有壞奶油", youtubeId: "aUZ9wkogy3k" },
                { epNumber: "第4節", title: "藥物女王", youtubeId: "zT0wEV_XB0M" },
                { epNumber: "第5節", title: "反對獸糧黨的反擊", youtubeId: "XYHm4ouJ9nM" },
                { epNumber: "第6節", title: "固執與偏見", youtubeId: "77ayeAgGCyE" },
                { epNumber: "第7節", title: "暴風後的喧鬧", youtubeId: "U53URCynXsc" }
            ]
        },
        {
            id: "main_s1_3",
            chapterNumber: "003",
            name: "慘劇的教訓",
            episodes: [
                { epNumber: "第1節", title: "教科書式入場方法", youtubeId: "Wlgev9XaXno" },
                { epNumber: "第2節", title: "結巴指南", youtubeId: "8EjW9jQh7ms" },
                { epNumber: "第3節", title: "市長、秘書、士兵、間諜", youtubeId: "wSYa53u9D2Y" },
                { epNumber: "第4節", title: "自由交流", youtubeId: "NBKRDm4s3UA" },
                { epNumber: "第5節", title: "D-Day零時", youtubeId: "Dy5f5n2g84w" },
                { epNumber: "第6節", title: "大姐姐", youtubeId: "vJNOxGzPlQ0" },
                { epNumber: "第7節", title: "正義將至", youtubeId: "spToMD9_ZV0" }
            ]
        },
        {
            id: "main_s1_4",
            chapterNumber: "004",
            name: "王國爆炸前5分鐘",
            episodes: [
                { epNumber: "第1節", title: "苦澀的同伴", youtubeId: "SjeYQ64bOMU" },
                { epNumber: "第2節", title: "魔女的巫術", youtubeId: "NyzPNp6ZcKo" },
                { epNumber: "第3節", title: "佩佩的祕密活動", youtubeId: "VWSWPtjKj3k" },
                { epNumber: "第4節", title: "真誠的計畫", youtubeId: "EHDMeSSav3I" },
                { epNumber: "第5節", title: "破曉的號角聲", youtubeId: "xIO6TPuvXUA" },
                { epNumber: "第6節", title: "單挑是過時的想法", youtubeId: "yy3aapFtK_c" },
                { epNumber: "第7節", title: "暫時找回的和平", youtubeId: "iWH79_FSkxA" }
            ]
        },
        {
            id: "main_s1_5",
            chapterNumber: "005",
            name: "圍觀隔離火災",
            episodes: [
                { epNumber: "第1節", title: "精靈會騙你兩次", youtubeId: "dQZ2hctRnoM" },
                { epNumber: "第2節", title: "不安的同盟", youtubeId: "0TOV5sa_4yU" },
                { epNumber: "第3節", title: "無風不起浪", youtubeId: "nIIlUIZkVn0" },
                { epNumber: "第4節", title: "一半是真心的", youtubeId: "nwvwA79y_Hg" },
                { epNumber: "第5節", title: "滅火隊", youtubeId: "9QsVa4xc71g" },
                { epNumber: "第6節", title: "尾聲", youtubeId: "eDSGBAFahJk" }
            ]
        },
        {
            id: "main_s1_6",
            chapterNumber: "006",
            name: "三拜九叩",
            episodes: [
                { epNumber: "第1節", title: "再次迎來的春天", youtubeId: "06onN-6zZGQ" },
                { epNumber: "第2節", title: "不怎麼樣的謎團", youtubeId: "8ZdA9LYMovc" },
                { epNumber: "第3節", title: "名為艾利亞斯的巨大密室", youtubeId: "_74VuvXpAL0" },
                { epNumber: "第4節", title: "水印水上樂園", youtubeId: "junnfHcdxCU" },
                { epNumber: "第5節", title: "深陷地底", youtubeId: "tkDdNZxRgL8" },
                { epNumber: "第6節", title: "如火的關係", youtubeId: "6AQGj5646-A" },
                { epNumber: "第7節", title: "秘密保鏢", youtubeId: "pcHl_nnBy8U" },
                { epNumber: "第8節", title: "風的力量", youtubeId: "lBIRtJkgZ54" },
                { epNumber: "第9節", title: "捕風者", youtubeId: "4K0e89rI3rc" },
                { epNumber: "第10節", title: "靈感應", youtubeId: "3pn0OY7xDDA" }
            ]
        },
        {
            id: "main_s1_7",
            chapterNumber: "007",
            name: "藤條是最好的解方",
            episodes: [
                { epNumber: "第1節", title: "沒有夢的夢想隊", youtubeId: "ZqGvMys3KEQ" },
                { epNumber: "第2節", title: "命運的沼澤", youtubeId: "-CrtMuGNesA" },
                { epNumber: "第3節", title: "身分認同危機", youtubeId: "TM60yQq862E" },
                { epNumber: "第4節", title: "南瓜教主", youtubeId: "YDmzGujUmd4" },
                { epNumber: "第5節", title: "間諜行動", youtubeId: "NnogREG5lkQ" },
                { epNumber: "第6節", title: "真正的冰冷者", youtubeId: "k_W7-FfHncI" },
                { epNumber: "第7節", title: "琳的世界", youtubeId: "GpLNdSjgYAA" },
                { epNumber: "第8節", title: "主人影子的世界", youtubeId: "-UecomYhWhs" },
                { epNumber: "第9節", title: "影子遊戲", youtubeId: "QKmW_wgQ6LU" },
                { epNumber: "第10節", title: "該忘記的和忘記的", youtubeId: "XE9UbLho2jU" }
            ]
        },
        {
            id: "main_s1_8",
            chapterNumber: "008",
            name: "發‧電‧廠",
            episodes: [
                { epNumber: "第1節", title: "地底下的頹廢音樂", youtubeId: "aSZQyemUA-U" },
                { epNumber: "第2節", title: "見風轉舵的商人", youtubeId: "XshdOtFLFp4" },
                { epNumber: "第3節", title: "翡翠螺栓", youtubeId: "tqkvGDwljEQ" },
                { epNumber: "第4節", title: "鍛鍊過的寶石", youtubeId: "PE6prIxqK0s" },
                { epNumber: "第5節", title: "逆行排名", youtubeId: "LKtLUfvV50M" },
                { epNumber: "第6節", title: "奔跑吧，社畜", youtubeId: "OYnoMb0sSZE" },
                { epNumber: "第7節", title: "鑽石切割機", youtubeId: "HmgE0seC8zY" },
                { epNumber: "第8節", title: "唯一的真王", youtubeId: "6rLsgEDJiaM" }
            ]
        },
        {
            id: "main_s1_9",
            chapterNumber: "009",
            name: "最後一刻的逆轉",
            episodes: [
                { epNumber: "第1節", title: "強襲魔女", youtubeId: "JrW0l6TFFA8" },
                { epNumber: "第2節", title: "叛徒的叛徒", youtubeId: "nfCV7jtw6aQ" },
                { epNumber: "第3節", title: "腹黑的攝政王", youtubeId: "HZZCugLPA2s" },
                { epNumber: "第4節", title: "反突擊症候群", youtubeId: "N25D_XsaGXM" },
                { epNumber: "第5節", title: "可可的樂園", youtubeId: "lLcXqk3G5jw" },
                { epNumber: "第6節", title: "宮殿的秘密", youtubeId: "VvbyurB1s2E" },
                { epNumber: "第7節", title: "叛徒的叛徒的叛徒", youtubeId: "8WaSShhsKyA" },
                { epNumber: "第8節", title: "魔女童話", youtubeId: "bOS51EalqAg" },
                { epNumber: "第9節", title: "真正的和平", youtubeId: "EHsICkCrSMY" }
            ]
        },
                {
            id: "main_s1_sp1",
            chapterNumber: "SP1",
            name: "回顧與祈禱",
            episodes: [
                { epNumber: "第1節", title: "回憶錄：同病相憐", youtubeId: "XN1AmmWiCAs" },
                { epNumber: "第2節", title: "回憶錄：糖果流氓", youtubeId: "VN3xTNtLgHs" },
                { epNumber: "第3節", title: "回憶錄：信仰的一擊", youtubeId: "luJ6S1CLrKo" },
                { epNumber: "第4節", title: "回憶錄：淺眠", youtubeId: "l3J2hGfI_cY" },
                { epNumber: "第5節", title: "回憶錄：心靈的恩師", youtubeId: "9SbEwwPHRKU" },
                { epNumber: "第6節", title: "夢中的祈禱：午睡", youtubeId: "0ZTivuMdia4" },
                { epNumber: "第7節", title: "夢中的祈禱：新綻之花", youtubeId: "pAYiCBMB5bc" },
                { epNumber: "第8節", title: "夢中的祈禱：敷衍的日記", youtubeId: "znLtbYn7N50" },
                { epNumber: "第9節", title: "夢中的祈禱：祭司修行錄", youtubeId: "GWi23w_4Jcw" },
                { epNumber: "第10節", title: "夢中的祈禱：我可愛的命運", youtubeId: "0yPTOSv6Lv0" }
            ]
        },
                        {
            id: "main_s1_sp2",
            chapterNumber: "SP2",
            name: "學園鬧翻天",
            episodes: [
                { epNumber: "第1節", title: "求學之地", youtubeId: "5boY6VBtSss" },
                { epNumber: "第2節", title: "表現自然", youtubeId: "3MXVHM1kEnI" },
                { epNumber: "第3節", title: "我要學壞了", youtubeId: "NLGrUpjfnyE" },
                { epNumber: "第4節", title: "催淚課堂", youtubeId: "iwJP2A74Dpc" },
                { epNumber: "第5節", title: "校鐘響起的傍晚", youtubeId: "q1dtw3o0K4w" }
            ]
        }
    ],
    // 活動劇情
    event: [

        {
            id: "event_028",
            chapterNumber: "028",
            name: "乘浪而來的企鵝人",
            episodes: [
                { epNumber: "第0節", title: "官方PV", youtubeId: "K-NtiLSm8Ow" },
                { epNumber: "第1節", title: "艾利亞斯冒險", youtubeId: "1WwKqjvxYq4" },
                { epNumber: "第2節", title: "疑點重重的冒險", youtubeId: "rBoyt-5LtPA" },
                { epNumber: "第3節", title: "管制區冒險", youtubeId: "POy2tFe5HVY" },
                { epNumber: "第4節", title: "憂鬱的冒險", youtubeId: "B7o4EYAGUX0" },
                { epNumber: "第5節", title: "半露營冒險", youtubeId: "yjdim9ki9a4" },
                { epNumber: "第6節", title: "問題滿滿的冒險", youtubeId: "fVldW7pIgBA" },
                { epNumber: "第7節", title: "友情中的冒險    ", youtubeId: "jIIHKMn-d-s" }
            ]
        },
        {
            id: "event_027",
            chapterNumber: "027",
            name: "妄想狂大騷動",
            episodes: [
                { epNumber: "第0節", title: "官方PV", youtubeId: "DO3gvA002gs" },
                { epNumber: "第1節", title: "海莉與異形怪物", youtubeId: "QHIzkjJFoX8" },
                { epNumber: "第2節", title: "海莉與非法實驗", youtubeId: "RvqtuNezbjs" },
                { epNumber: "第3節", title: "海莉與緊急廣播", youtubeId: "c9NLXpcdlwA" },
                { epNumber: "第4節", title: "海莉與治療劑", youtubeId: "Ir4ITLTdzSo" },
                { epNumber: "第5節", title: "海莉與殭屍女王", youtubeId: "WWO6xlAFcjk" },
                { epNumber: "第6節", title: "海莉與失憶", youtubeId: "trTwNR86Xcw" },
                { epNumber: "第7節", title: "海莉與雷射療法", youtubeId: "WH-Aw1rX0wc" }
            ]
        },
        {
            id: "event_026",
            chapterNumber: "026",
            name: "為誰祈禱",
            episodes: [
                { epNumber: "第0節", title: "官方PV", youtubeId: "Odz_0FRWgRI" },
                { epNumber: "第1節", title: "從地下醒來", youtubeId: "2LrXGvhUCk0" },
                { epNumber: "第2節", title: "甦醒的信仰", youtubeId: "2BKmlv6ryv8" },
                { epNumber: "第3節", title: "主人與信仰", youtubeId: "wAtoyXpYbU0" },
                { epNumber: "第4節", title: "受考驗的信仰", youtubeId: "OpP2j8qg1eE" },
                { epNumber: "第5節", title: "受傷的信仰", youtubeId: "bRoug1YYj5I" },
                { epNumber: "第6節", title: "迷惘中的信仰", youtubeId: "gZ0YwRvMSLY" },
                { epNumber: "第7節", title: "你一路累積的信仰", youtubeId: "OHbxfI6ZBsE" },
                { epNumber: "第8節", title: "準備好的信仰", youtubeId: "tKRLblgWbHo" },
                { epNumber: "第9節", title: "動搖的信仰", youtubeId: "jXhTFPuU-wI" },
                { epNumber: "第10節", title: "盲目的信仰", youtubeId: "NaVlBvAISjQ" },
                { epNumber: "第11節", title: "並肩同行的信仰", youtubeId: "0ViL3Kyfxig" },
                { epNumber: "第12節", title: "失控的信仰", youtubeId: "FmPGTVcmdgI" },
                { epNumber: "第13節", title: "錯誤的信仰", youtubeId: "oBDrwsfDBSw" },
                { epNumber: "第14節", title: "重生的信仰", youtubeId: "ZkJeqaAdb2g" }
            ]
        },
        {
            id: "event_025",
            chapterNumber: "025",
            name: "無處可去的書籤",
            episodes: [
                { epNumber: "第0節", title: "官方PV", youtubeId: "v6-Zhe4qM6c" },
                { epNumber: "第1節", title: "被抓到把柄的紀錄", youtubeId: "AMCdfejk34g" },
                { epNumber: "第2節", title: "幽靈的紀錄", youtubeId: "YsrGl9jTRvA" },
                { epNumber: "第3節", title: "獸人的紀錄", youtubeId: "31PiPUP4zVs" },
                { epNumber: "第4節", title: "妖精的紀錄", youtubeId: "h_IMoq879zk" },
                { epNumber: "第5節", title: "錯誤的紀錄", youtubeId: "LDPejz0jl4o" },
                { epNumber: "第6節", title: "教主的紀錄", youtubeId: "XCx-bE8fNiQ" },
                { epNumber: "第7節", title: "提問的紀錄", youtubeId: "GQ0Yptxa8AQ" },
                { epNumber: "第8節", title: "我的紀錄", youtubeId: "495rUi8IM3Y" },
                { epNumber: "第9節", title: "告白的紀錄", youtubeId: "0rBMRMXFcA8" },
                { epNumber: "第10節", title: "日記本的紀錄", youtubeId: "ZA4li2LJ8bM" }
                
            ]
        },
        {
            id: "event_003",
            chapterNumber: "003",
            name: "卡片簿裡跳舞的命運",
            episodes: [
                { epNumber: "第0節", title: "官方PV", youtubeId: "KPQqyliXlDc" },
                { epNumber: "第1節", title: "命運的捉弄者，愛麗絲", youtubeId: "1Dce3vxU3DE" },
                { epNumber: "第2節", title: "窺莉之眼與愛麗絲", youtubeId: "4iX7IfuZUoA" },
                { epNumber: "第3節", title: "規則強迫症與愛麗絲", youtubeId: "k85Dnpc7tio" },
                { epNumber: "第4節", title: "愛麗絲暢遊地下", youtubeId: "TBJic5Zhun4" },
                { epNumber: "第5節", title: "引發危機的愛麗絲", youtubeId: "fd-3louz-VQ" },
                { epNumber: "第6節", title: "提示的占卜與愛麗絲", youtubeId: "NhERb0p3_4s" },
                { epNumber: "第7節", title: "放鬆警惕的愛麗絲", youtubeId: "ylaeB9TVyxE" }
                
            ]
        },
        {
            id: "event_002",
            chapterNumber: "002",
            name: "被融化的奶油",
            episodes: [
                { epNumber: "第0節", title: "官方PV", youtubeId: "P9sifql-AE4" },
                { epNumber: "第1節", title: "奶油與免費勞工", youtubeId: "id2IMqEpXlg" },
                { epNumber: "第2節", title: "奶油與學校", youtubeId: "iVBZch2InfY" },
                { epNumber: "第3節", title: "奶油與贓物", youtubeId: "yqiSM2_-WgM" },
                { epNumber: "第4節", title: "奶油與憤怒", youtubeId: "-mph5496U1s" },
                { epNumber: "第5節", title: "奶油與報復", youtubeId: "bCfAzjzS7r0" },
                { epNumber: "第6節", title: "奶油與失憶", youtubeId: "0jACLXGpwEU" },
                { epNumber: "第7節", title: "奶油與心理諮商", youtubeId: "dVTKIQ7B5HA" }
                
            ]
        },
        {
            id: "event_001",
            chapterNumber: "001",
            name: "注視著月光的花",
            episodes: [
                { epNumber: "第0節", title: "官方PV", youtubeId: "8TroQFA15tg" },
                { epNumber: "第1節", title: "沒有記憶的月亮", youtubeId: "5rikUni2fEY" },
                { epNumber: "第2節", title: "記憶中的月亮", youtubeId: "qQ2xO2aTOpE" },
                { epNumber: "第3節", title: "凝視的月亮", youtubeId: "LoP8wf9hiDg" },
                { epNumber: "第4節", title: "看不見的月亮", youtubeId: "f61TqMH2IBQ" },
                { epNumber: "第5節", title: "滿月", youtubeId: "bXFgVhzDVjk" },
                { epNumber: "第6節", title: "堅定心志的月亮", youtubeId: "vn3qbv8Da4k" },
                { epNumber: "第7節", title: "信仰中的月亮", youtubeId: "Z2DQXJNC3uE" }
                
            ]
        }
    ]
};
