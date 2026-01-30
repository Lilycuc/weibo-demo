// Mock data for Weibo Lite
const postsData = [
    {
        id: 4,
        nickname: "莉莉an",
        avatar: "assets/img/avatar-lilian.jpg",
        time: "刚刚",
        content: "很荣幸能参加新华社面试。",
        images: ["assets/img/wo.jpg"],
        likes: 0,
        comments: 0,
        shares: 0,
        isVerified: false
    },
    {
        id: 1,
        nickname: "科技前沿观察",
        avatar: "assets/img/avatar-felix.svg",
        time: "10分钟前 来自 iPhone 15 Pro",
        content: "今天发布的新一代 AI 模型简直太惊艳了！处理速度提升了300%，生成的代码质量也非常高。这就是未来吗？🤖 #AI #科技新闻",
        images: [
            "assets/img/ai1.jpg",
            "assets/img/ai2.jpg",
            "assets/img/ai3.jpg"
        ],
        likes: 888,
        comments: 45,
        shares: 120,
        isVerified: true
    },
    {
        id: 2,
        nickname: "中国传媒大学",
        avatar: "assets/img/cuc.png",
        time: "刚刚",
        content: "校园网公示：2025年研究生国家奖学金拟获奖名单已发布 https://xsc.cuc.edu.cn/2025/1024/c2874a261445/page.htm",
        images: [],
        likes: "9999+",
        comments: "9999+",
        shares: "9999+",
        isVerified: true
    },
    {
        id: 3,
        nickname: "每日美食日记",
        avatar: "assets/img/avatar-annie.svg",
        time: "30分钟前",
        content: "周末在家做了顿大餐，红烧肉真的太好吃了！肥而不腻，入口即化。大家周末都吃什么了呀？😋",
        images: [],
        likes: 666,
        comments: 8,
        shares: 12,
        isVerified: false
    }
];

const mcpHotData = [
    { title: "女子因幼犬轻咬未处理引发狂犬病", tag: "热" },
    { title: "缅甸出现一处3000人新诈骗园区" },
    { title: "中国牌晶体刷新3项世界纪录", tag: "新", tagColor: "#ff9400" },
    { title: "Turbo5Max今晚19点见" },
    { title: "神仙肉 虞书欣" },
    { title: "俄军首次公开宣布使用美国星链" }
];

const skillPostTemplates = [
    "【一键生成】今天用 Weibo Lite 做了个前端演示：登录、发帖、点赞、评论全走通。",
    "【技能卡】把需求拆成“能跑/能演示/能截图/能讲故事”，交付感直接拉满。",
    "【MCP 想象力】热搜、内容审核、情绪分析都可以作为可插拔能力。"
];
