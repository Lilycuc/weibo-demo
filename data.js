// Mock data for Weibo Lite
const postsData = [
    {
        id: 4,
        nickname: "莉莉an",
        avatar: "assets/img/avatar-lilian.jpg",
        time: "刚刚",
        content: "谢谢光临～",
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

const mcpDataSets = {
    hot: [
        { title: "女子因幼犬轻咬未处理引发狂犬病", tag: "热" },
        { title: "缅甸出现一处3000人新诈骗园区" },
        { title: "中国牌晶体刷新3项世界纪录", tag: "新", tagColor: "#ff9400" },
        { title: "Turbo5Max今晚19点见" },
        { title: "神仙肉 虞书欣" },
        { title: "俄军首次公开宣布使用美国星链" }
    ],
    sentiment: [
        { title: "积极：这条内容情绪正向（0.86）", tag: "正" },
        { title: "中性：信息陈述类内容（0.64）" },
        { title: "消极：含负面情绪表达（0.78）", tag: "负", tagColor: "#6b7280" },
        { title: "积极：用户互动意愿较强（0.73）" },
        { title: "中性：客观描述，无明显情绪（0.59）" },
        { title: "消极：可能引发争议（0.68）" }
    ],
    recommend: [
        { title: "为你推荐：校园生活日常" },
        { title: "为你推荐：AI 前沿资讯", tag: "新", tagColor: "#ff9400" },
        { title: "为你推荐：实习面试经验" },
        { title: "为你推荐：效率工具分享" },
        { title: "为你推荐：摄影与旅行" },
        { title: "为你推荐：美食探店合集" }
    ],
    audit: [
        { title: "审核通过：内容正常", tag: "过", tagColor: "#16a34a" },
        { title: "提示：疑似广告，建议修改", tag: "审", tagColor: "#f59e0b" },
        { title: "提示：包含敏感词，需替换", tag: "审", tagColor: "#f59e0b" },
        { title: "审核通过：可发布", tag: "过", tagColor: "#16a34a" },
        { title: "提示：情绪较激烈，注意措辞", tag: "审", tagColor: "#f59e0b" },
        { title: "审核未通过：需重新编辑", tag: "拒", tagColor: "#dc2626" }
    ]
};

const skillDataSets = {
    headline: [
        "【热搜标题】今天的热搜，用一句话看懂",
        "【标题生成】一条微博也能有新闻感",
        "【趋势标题】大家都在聊的 3 个方向"
    ],
    summary: [
        "【热点摘要】热搜聚焦：AI 提效、求职面试、校园生活三大主题。",
        "【内容摘要】今天最值得关注的 5 条信息已整理完毕。",
        "【要点总结】这波讨论的核心是效率、情绪和选择。"
    ],
    marketing: [
        "【活动文案】开学季福利上线，快来参与！",
        "【运营文案】转发抽奖送福利，评论区见～",
        "【品牌文案】轻量，但足够有力。"
    ],
    empathy: [
        "【情绪文案】被理解很重要，我们也在努力。",
        "【共情表达】你的感受我懂，抱抱。",
        "【安慰语句】别急，慢慢来，一切都会好起来。"
    ]
};
