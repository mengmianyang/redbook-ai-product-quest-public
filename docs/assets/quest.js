const levels = [
  {
    day: 1,
    stage: "入场",
    title: "理解虚拟产品闭环",
    learn: "读教程第一到三章，先理解小红书虚拟产品的生意闭环。",
    action: "列出你的身份、技能、经历、资源，不急着做产品。",
    deliverable: "10个候选方向",
    pass: "每个方向都要写清楚服务谁、解决什么问题、为什么可能付费。",
    checks: ["写出10个候选方向", "每个方向标注目标人群", "删掉明显没有付费动机的方向", "选出3个最想验证的方向"],
    tip: "第一天不要追求灵感惊艳。你要先把可验证的方向摆出来，后面用搜索和销量筛掉。"
  },
  {
    day: 2,
    stage: "入场",
    title: "赛道判断",
    learn: "学习赛道判断的五个标准：需求、付费、竞争、复制难度、AI提效空间。",
    action: "用小红书搜索候选方向，记录销量、笔记、评论和同行。",
    deliverable: "3个候选赛道评分表",
    pass: "至少完成3个方向的评分，并能说出每个方向最大的机会和风险。",
    checks: ["搜索3个候选方向", "记录同行商品和笔记", "补充评论区真实需求", "完成赛道评分"],
    tip: "不要只看点赞。虚拟产品更该看商品访问、销量迹象、评论里的购买意图。"
  },
  {
    day: 3,
    stage: "入场",
    title: "确定主赛道",
    learn: "在课件/PPT、面试题/求职资料、垂直知识库/模板工具中选择一条主线。",
    action: "从评分最高、自己最能持续产出的方向里，确定第一个主赛道。",
    deliverable: "1个主赛道+3个产品题目",
    pass: "主赛道足够具体，3个产品题目都能在7天内做出1.0。",
    checks: ["确定一个主赛道", "写出3个产品题目", "判断每个题目的交付形式", "选出第一个要做的题目"],
    tip: "新手不要做大而全。第一款产品越小，越容易做完、上架、拿数据。"
  },
  {
    day: 4,
    stage: "侦察",
    title: "对标方法",
    learn: "学习核心词、长尾词、场景词三种搜索方式。",
    action: "围绕你的主赛道搜索笔记和商品，先收集，不急着模仿。",
    deliverable: "15篇对标笔记+5个对标商品",
    pass: "对标对象必须和你的目标人群、场景、商品形态有关。",
    checks: ["列出10个搜索词", "收藏15篇对标笔记", "记录5个对标商品", "标注每个对标的可学点"],
    tip: "对标不是抄。你要拆的是选题、标题、封面、评论需求和商品承接。"
  },
  {
    day: 5,
    stage: "侦察",
    title: "对标拆解",
    learn: "拆封面、标题、正文、商品页、评论区，形成自己的对标库。",
    action: "把昨天的样本扩充到30篇笔记和10个商品。",
    deliverable: "30篇对标笔记+10个对标商品",
    pass: "对标库里至少沉淀10条可复用标题、5种封面方向、10个用户问题。",
    checks: ["补齐30篇对标笔记", "补齐10个对标商品", "拆出标题和封面套路", "整理评论区高频问题"],
    tip: "这一关决定后面内容能不能持续写。样本太少，后面会很快枯竭。"
  },
  {
    day: 6,
    stage: "锻造",
    title: "产品设计",
    learn: "使用产品1.0模板，明确用户、场景、痛点、交付形式和边界。",
    action: "把第一款产品定义成一个小而具体的可交付方案。",
    deliverable: "产品定义表",
    pass: "别人看完定义表，能立刻知道这个产品买来能解决什么问题。",
    checks: ["写清目标用户", "写清使用场景", "写清核心痛点", "写清交付清单和不包含什么"],
    tip: "产品定义表要能限制欲望。边界清楚，产品才做得完。"
  },
  {
    day: 7,
    stage: "锻造",
    title: "AI生成流程",
    learn: "学习把任务拆给AI：先目录，再模块，再样章，再校对。",
    action: "用AI生成产品目录和第一版样章/样页。",
    deliverable: "产品目录+样章/样页",
    pass: "样章能代表最终产品质量，且没有明显空话、错漏和违规承诺。",
    checks: ["拆出产品目录", "生成一个样章或样页", "人工检查事实和表达", "记录需要重写的问题"],
    tip: "AI是生产助手，不是产品负责人。你必须亲自判断内容是否可卖、可用、可交付。"
  },
  {
    day: 8,
    stage: "锻造",
    title: "完成产品1.0",
    learn: "学习产品审稿、排版、格式输出和交付体验。",
    action: "完成第一版可交付文件，控制范围，保证能上架。",
    deliverable: "产品1.0文件",
    pass: "文件能被用户直接打开使用，标题、目录、页面、说明都完整。",
    checks: ["完成全部核心内容", "统一格式和排版", "补充使用说明", "导出最终交付文件"],
    tip: "这是第一个Boss关。只要能真实交付，就先过关，不要在这里无限美化。",
    boss: true
  },
  {
    day: 9,
    stage: "上架",
    title: "商品页",
    learn: "学习商品标题、主图文案、详情页、FAQ、发货说明和售后说明。",
    action: "把产品包装成用户能看懂、愿意点击、敢下单的商品页。",
    deliverable: "商品页素材包",
    pass: "商品页能回答用户最关心的适用人群、包含内容、使用方式和售后问题。",
    checks: ["写商品标题", "写主图文案", "写详情页结构", "补齐FAQ和发货说明"],
    tip: "商品页不是介绍你多努力，而是降低用户下单前的不确定感。"
  },
  {
    day: 10,
    stage: "上架",
    title: "笔记结构",
    learn: "学习痛点型、结果展示型、问答型三类基础商品笔记。",
    action: "围绕同一个产品，写出6篇不同角度的笔记草稿。",
    deliverable: "6篇笔记草稿",
    pass: "每篇笔记都和商品强相关，不能让用户看完就走。",
    checks: ["写2篇痛点型", "写2篇结果展示型", "写2篇问答型", "每篇都加入商品承接"],
    tip: "小红书笔记的目的不是炫技，是把精准人群带到商品页。"
  },
  {
    day: 11,
    stage: "上架",
    title: "发第一批笔记",
    learn: "学习发布时间、关键词记录和首批样本观察方式。",
    action: "发布2到3篇笔记，记录关键词、发布时间和初始反馈。",
    deliverable: "2到3篇已发布笔记",
    pass: "每篇发布记录都可追踪，后面复盘时知道变量是什么。",
    checks: ["发布2到3篇笔记", "记录发布时间", "记录标题和关键词", "截图或保存初始数据"],
    tip: "第一批不是为了爆，是为了开始拿真实反馈。没有发布，就没有复盘。"
  },
  {
    day: 12,
    stage: "上架",
    title: "优化封面标题",
    learn: "学习从对标库里改封面、标题和开头，不重复发同质内容。",
    action: "根据对标库改封面和标题，再发2到3篇。",
    deliverable: "累计5到6篇",
    pass: "新笔记和第一批有明显角度差异，不是简单换词。",
    checks: ["复看对标封面", "改出2个新标题方向", "发布2到3篇新笔记", "记录新旧差异"],
    tip: "优化不是玄学，要把每次改动记下来，否则数据回来也看不懂。"
  },
  {
    day: 13,
    stage: "上架",
    title: "评论区和私信",
    learn: "学习把评论、私信和用户问题变成商品页FAQ和新笔记选题。",
    action: "整理用户问题，补充商品页和自动回复素材。",
    deliverable: "用户问题清单",
    pass: "至少整理出10个真实或对标评论区里的用户问题。",
    checks: ["整理评论和私信", "补充对标评论区问题", "归类购买前疑问", "更新FAQ草稿"],
    tip: "评论区往往比正文更接近购买动机。用户问什么，你就补什么。"
  },
  {
    day: 14,
    stage: "上架",
    title: "第二批笔记",
    learn: "学习用问题清单写问答型笔记，强化搜索和购买承接。",
    action: "继续发布问答型和场景型笔记。",
    deliverable: "累计10到12篇",
    pass: "笔记覆盖至少5个不同痛点或使用场景。",
    checks: ["从问题清单选5个选题", "写问答型笔记", "发布到累计10到12篇", "记录每篇对应痛点"],
    tip: "数量不是目的，但没有足够样本，就很难判断哪个角度有效。"
  },
  {
    day: 15,
    stage: "上架",
    title: "产品页微调",
    learn: "学习看点击、加购、咨询，把高频疑问写进商品详情页。",
    action: "根据前14天反馈，把商品页升级到2.0。",
    deliverable: "商品页2.0",
    pass: "详情页比1.0更清楚、更具体、更能处理下单前疑虑。",
    checks: ["检查商品点击和咨询", "补充预览和适用场景", "更新FAQ", "保存商品页2.0版本"],
    tip: "这是第二个Boss关。商品页承接弱，笔记流量再多也容易浪费。",
    boss: true
  },
  {
    day: 16,
    stage: "复盘",
    title: "初次复盘",
    learn: "学习复盘表字段和核心公式，不只看点赞收藏。",
    action: "建立复盘表，标记阅读高、点击高、转化高的笔记。",
    deliverable: "复盘表1.0",
    pass: "你能看出哪些笔记只带阅读，哪些笔记更接近成交。",
    checks: ["建立复盘表", "录入已发笔记数据", "标记高阅读笔记", "标记高点击或高转化笔记"],
    tip: "复盘时先看链路：笔记阅读、商品点击、加购、下单。点赞收藏只是辅助信号。"
  },
  {
    day: 17,
    stage: "复盘",
    title: "放大有效方向",
    learn: "学习围绕表现好的角度写同主题变体，而不是随机追热点。",
    action: "对表现较好的角度写同主题笔记。",
    deliverable: "累计16到18篇",
    pass: "新增笔记都来自已验证角度的变体，而不是重新开坑。",
    checks: ["找出表现较好的角度", "写3到6篇变体笔记", "发布到累计16到18篇", "记录变体假设"],
    tip: "一条有效角度出现后，要先吃透它。别太快跳到下一个方向。"
  },
  {
    day: 18,
    stage: "复盘",
    title: "补产品体系",
    learn: "学习关联品、组合包、升级版和热点款的设计方式。",
    action: "根据用户反馈，思考后续产品组合。",
    deliverable: "2个后续产品想法",
    pass: "后续产品和第一款有关联，能提升客单价或覆盖新场景。",
    checks: ["整理用户未被满足的需求", "设计关联品", "设计升级版或组合包", "选出2个后续产品想法"],
    tip: "先用第一款产品验证需求，再考虑产品矩阵。不要一开始就搭巨大的知识库。"
  },
  {
    day: 19,
    stage: "复盘",
    title: "投流判断",
    learn: "学习投流前提：投流是放大器，不是救命稻草。",
    action: "判断是否已有自然转化、商品承接和明确人群。",
    deliverable: "投流条件检查表",
    pass: "只有自然转化和商品页承接成立，才允许进入小预算测试。",
    checks: ["检查自然访问", "检查加购或咨询", "检查商品页承接", "判断是否具备投流条件"],
    tip: "自然流量0转化时不要急着投流。先回到选品、商品页和笔记。"
  },
  {
    day: 20,
    stage: "复盘",
    title: "决策优化",
    learn: "学习继续、优化、换品三种决策标准。",
    action: "根据数据和交付体验，确定下一轮动作。",
    deliverable: "下一轮动作清单",
    pass: "动作清单必须具体到下一批笔记、商品页修改或新产品验证。",
    checks: ["判断继续/优化/换品", "列出下一轮3个动作", "标明每个动作的验证指标", "安排下一轮发布时间"],
    tip: "决策不要凭感觉。把问题落到点击低、转化低、加购低、内容写不动中的一个。"
  },
  {
    day: 21,
    stage: "复盘",
    title: "总复盘",
    learn: "学习把21天数据、经验、卡点和下一步沉淀成可复用流程。",
    action: "完成21天总复盘，决定下一轮项目路线。",
    deliverable: "21天复盘报告",
    pass: "复盘报告能回答：做了什么、数据如何、问题在哪、下一步怎么改。",
    checks: ["汇总21天交付物", "整理笔记和商品数据", "写出成功和失败原因", "确定下一轮路线"],
    tip: "这是最终Boss关。目标不是证明自己很努力，而是拿到一套下次更快跑通的打法。",
    boss: true
  }
];

const stageMeta = [
  { name: "全部", range: "Day 1-21", summary: "完整路线" },
  { name: "入场", range: "Day 1-3", summary: "选定第一条可做赛道" },
  { name: "侦察", range: "Day 4-5", summary: "建立对标库" },
  { name: "锻造", range: "Day 6-8", summary: "做出产品1.0" },
  { name: "上架", range: "Day 9-15", summary: "商品页和第一批笔记" },
  { name: "复盘", range: "Day 16-21", summary: "用数据决定下一步" }
];

const milestones = [
  { day: 3, title: "赛道确定", text: "主赛道、3个产品题目、第一款产品方向。" },
  { day: 5, title: "对标库完成", text: "30篇笔记、10个商品、标题封面和评论需求。" },
  { day: 8, title: "产品1.0", text: "可打开、可使用、可交付的第一版产品。" },
  { day: 15, title: "商品页2.0", text: "带FAQ、预览、售后说明和用户疑问承接。" },
  { day: 21, title: "项目复盘", text: "继续、优化或换品的下一轮动作清单。" }
];

const sourceCatalog = {
  core: { title: "主教程：虚拟产品闭环", href: "materials.html#source-core" },
  routes: { title: "主教程：三条新手路线", href: "materials.html#source-routes" },
  lane: { title: "主教程：赛道判断", href: "materials.html#source-lane" },
  benchmark: { title: "主教程：对标库", href: "materials.html#source-benchmark" },
  product: { title: "主教程：产品1.0", href: "materials.html#source-product" },
  ai: { title: "主教程：AI工作流", href: "materials.html#source-ai" },
  listing: { title: "主教程：商品页和上架", href: "materials.html#source-listing" },
  notes: { title: "主教程：商品笔记", href: "materials.html#source-notes" },
  review: { title: "主教程：数据复盘", href: "materials.html#source-review" },
  ads: { title: "主教程：投流判断", href: "materials.html#source-ads" },
  cases: { title: "案例：5W复盘和心想事陈分享", href: "materials.html#source-cases" },
  april: { title: "4月项目课文字稿", href: "materials.html#source-april" },
  march: { title: "3月AI工作流文字稿", href: "materials.html#source-march" }
};

const lessonContent = {
  1: {
    body: [
      "小红书虚拟产品不是把资料打包丢出去，而是把一个具体人群的具体问题，包装成可购买、可交付、可传播的解决方案。用户买的不是文件本身，而是省时间、降低焦虑、信息差、执行路径和你的判断。",
      "第一天只做理解和盘点，不急着开店、不急着做图。先把自己能服务的人群、你熟悉的场景、你能交付的资料类型都列出来。后面所有动作都围绕一个闭环：需求、产品、商品页、笔记、数据、迭代。",
      "今天最重要的避坑是不要看到别人卖什么就直接复制。别人能卖，是因为他抓住了某个场景和人群；你要先找到自己能理解、能持续产出、能交付质量的方向。"
    ],
    steps: [
      "写下你的身份、经验、技能、资源和可接触的人群。",
      "把每个优势翻译成一个可能的用户问题，比如老师备课、求职面试、妈妈请月嫂。",
      "为每个方向补一句用户为什么现在就需要解决。",
      "删掉你完全不了解、也没有办法交付质量的方向。"
    ],
    template: [
      "候选方向：",
      "目标用户：",
      "具体场景：",
      "用户痛点：",
      "我能交付什么：",
      "为什么可能付费：",
      "我有什么优势：",
      "风险或不确定："
    ].join("\n"),
    sources: ["core", "routes"]
  },
  2: {
    body: [
      "赛道判断不是凭感觉选一个喜欢的方向，而是看它有没有真实付费证据。红海不一定坏，红海说明有需求；你要找的是红海里的细分切口。",
      "今天用五个标准筛方向：用户是否明确、痛点是否急迫、小红书是否有人卖有人买、你是否有一点优势、这个方向能不能连续写出内容。任何方向如果只能写一篇介绍笔记，后面很容易断掉。",
      "搜索时不要只看点赞收藏。虚拟产品更重要的是商品入口、评论区购买意图、同行是否持续更新、商品标题和销量迹象。"
    ],
    steps: [
      "从 Day 1 选出3个最像生意的方向。",
      "每个方向在小红书搜核心词、长尾词和场景词。",
      "记录同行商品、价格、销量迹象、评论区问题和笔记数量。",
      "按评分表给每个方向打分，低于18分先不做。"
    ],
    template: [
      "赛道名称：",
      "用户明确度 1-5：",
      "痛点急迫度 1-5：",
      "付费证据 1-5：",
      "我的优势 1-5：",
      "内容延展 1-5：",
      "AI提效 1-5：",
      "总分：",
      "最大机会：",
      "最大风险："
    ].join("\n"),
    sources: ["lane", "cases"]
  },
  3: {
    body: [
      "新手第一轮不要同时做三条路线。21天只选一个主赛道、一个主产品，目标是跑完闭环，而不是证明自己什么都能做。",
      "最容易起步的三类是课件/PPT、面试题/求职资料、垂直知识库/模板工具。没有明显专业经验，可以优先做单场景课件；有行业经验，优先做细分面试题；有长期积累，再考虑知识库。",
      "产品题目要具体到用户和场景。不要写教师资料大礼包，要写七年级数学开学第一课PPT加教案；不要写运营求职资料，要写京东采销岗位20道高频面试题。"
    ],
    steps: [
      "选出评分最高且自己最能持续交付的主赛道。",
      "写3个具体产品题目，每个题目都带人群和场景。",
      "判断每个题目的交付形式：PPT、PDF、Word、表格、知识库或网页。",
      "选一个7天内能做完1.0的题目作为第一款产品。"
    ],
    template: [
      "主赛道：",
      "为什么选它：",
      "产品题目1：",
      "目标用户：",
      "交付形式：",
      "7天内能否做完：",
      "",
      "产品题目2：",
      "产品题目3：",
      "最终选择："
    ].join("\n"),
    sources: ["routes", "lane"]
  },
  4: {
    body: [
      "对标不是抄袭，而是学习市场已经验证过的表达方式、商品结构和转化路径。你要拆的是元素，不是复制原文。",
      "今天先收集样本。搜索词要分三类：核心词、长尾词、场景词。比如开学第一课PPT是核心词，七年级数学开学第一课是长尾词，新老师第一周备课是场景词。",
      "对标样本要和你的目标用户、场景和产品形态有关。只收藏爆款没用，你要找的是能带商品点击、咨询和购买动机的笔记。"
    ],
    steps: [
      "围绕主赛道写出10个搜索词。",
      "在小红书分别搜索核心词、长尾词和场景词。",
      "收藏15篇对标笔记，优先选有商品入口或评论购买意图的。",
      "记录5个对标商品的标题、价格、卖点和详情页结构。"
    ],
    template: [
      "搜索词：",
      "对标笔记链接或标题：",
      "目标用户：",
      "使用场景：",
      "封面吸引点：",
      "标题关键词：",
      "商品卖什么：",
      "评论区高频问题：",
      "我能借鉴什么："
    ].join("\n"),
    sources: ["benchmark", "cases"]
  },
  5: {
    body: [
      "第五天要把对标库从收藏夹变成可复用资产。只收藏不拆解，后面写笔记时仍然会卡住；拆完封面、标题、正文、商品页和评论区，才知道该怎么写自己的内容。",
      "重点看异常值。同一个账号里数据明显高于其他内容的笔记，往往说明某个痛点、标题、封面或场景被验证过。你要把这些异常值拆成自己的标题结构和封面方向。",
      "今天完成后，你应该有30篇笔记、10个商品、至少10条可复用标题结构、5种封面方向和10个用户问题。"
    ],
    steps: [
      "把样本补到30篇笔记和10个商品。",
      "逐条拆封面、标题、开头、商品承接和评论问题。",
      "把可借鉴元素和不能照搬的风险分开记录。",
      "整理出后面能直接用的标题、封面和用户问题。"
    ],
    template: [
      "对标编号：",
      "笔记类型：痛点型 / 展示型 / 问答型 / 背书型",
      "封面结构：",
      "标题结构：",
      "正文钩子：",
      "商品承接方式：",
      "评论区问题：",
      "可借鉴元素：",
      "不可照搬风险："
    ].join("\n"),
    sources: ["benchmark", "april"]
  },
  6: {
    body: [
      "很多人能发现需求，但缺乏把需求包装成产品的能力。一个好产品不是我有一堆资料，而是我帮你在某个场景下更快解决某个问题。",
      "产品1.0要小而具体。新手最容易失败在范围太大：想做大礼包、大全、终极知识库，最后做不完、讲不清、也不好卖。",
      "今天的目标是写清楚产品边界。别人看完你的定义表，应该立刻知道它卖给谁、什么时候用、买到什么、怎么使用、为什么值这个价。"
    ],
    steps: [
      "用一句话写清产品名：谁在什么场景下使用的什么资料。",
      "写目标用户、使用场景、核心痛点和交付形式。",
      "列出目录结构和差异化，不要写空泛卖点。",
      "写清楚不包含什么，避免产品范围无限扩大。"
    ],
    template: [
      "产品名：",
      "目标用户：",
      "使用场景：",
      "核心痛点：",
      "交付形式：",
      "目录结构：",
      "差异化：",
      "价格设想：",
      "售后说明：",
      "合规风险：",
      "不包含什么："
    ].join("\n"),
    sources: ["product", "routes"]
  },
  7: {
    body: [
      "AI工作流的关键不是神奇提示词，而是上下文工程：在正确的时间给AI正确的信息、样本、目标和限制。你负责判断方向，AI负责提高生产效率。",
      "复杂任务要拆开。不要一次让AI生成完整产品、商品页和笔记。先让它生成目录，再处理一个模块或一页内容，最后由你审稿、补经验、删空话。",
      "高质量对标比一句万能提示词更重要。把3到5个好样本的结构给AI，它才知道你要的不是普通百科式内容。"
    ],
    steps: [
      "把产品拆成目录、模块、样章、审稿、包装五步。",
      "先让AI生成目录，再只处理第一章或第一页。",
      "把对标样本结构和你的产品定义一起给AI。",
      "人工检查事实、版权、平台敏感词和交付质量。"
    ],
    template: [
      "我的产品：",
      "目标用户：",
      "使用场景：",
      "解决问题：",
      "交付形式：",
      "",
      "请先只生成产品目录。",
      "要求：先解决最急迫的问题；每个模块都能交付；不要泛泛而谈；给出每个模块的用户价值。"
    ].join("\n"),
    sources: ["ai", "march"]
  },
  8: {
    body: [
      "第八天是第一个Boss关。今天不要继续加需求，而是把产品1.0做完。完成比完美重要，能打开、能使用、能交付，才有资格进入上架和发布。",
      "产品1.0至少要有清楚目录、可打开文件、可编辑版本或可使用版本、使用说明。知识库和模板类产品尤其要避免只堆材料，要让用户知道先看什么、怎么用、用完得到什么。",
      "人工审稿是必要环节。AI会重复、编造、漏掉关键场景，也可能写出违规承诺。你要删掉虚假承诺，补上真实经验和使用边界。"
    ],
    steps: [
      "锁定产品范围，只完成核心模块。",
      "统一标题、目录、格式、文件命名和阅读顺序。",
      "补充使用说明、FAQ和交付边界。",
      "导出最终文件，并模拟用户从购买到打开的流程。"
    ],
    template: [
      "产品1.0验收：",
      "- 文件能打开：",
      "- 目录清楚：",
      "- 用户知道怎么用：",
      "- 核心内容完整：",
      "- 没有侵权或夸大承诺：",
      "- 有可编辑或可复用版本：",
      "- 有售后和使用说明："
    ].join("\n"),
    sources: ["product", "ai"]
  },
  9: {
    body: [
      "商品页是转化的第二战场。用户从笔记点进来后，会看商品名、主图、详情页、价格、评论、发货方式和售后说明。商品页不清楚，笔记流量会被浪费。",
      "商品标题要包含核心搜索词，但不要堆砌。主图要让用户一眼看懂给谁用、解决什么问题、买到后长什么样。",
      "详情页至少回答：适合谁、解决什么问题、包含什么、怎么使用、为什么值这个价、预览图、常见问题和售后说明。"
    ],
    steps: [
      "写一个包含人群、场景、资料和卖点的商品标题。",
      "设计3张主图文案：痛点、内容预览、使用结果。",
      "写详情页结构，补目录、格式、使用方式和FAQ。",
      "检查合规：不写包过、稳赚、官方内部资料等承诺。"
    ],
    template: [
      "商品标题：",
      "主图1文案：",
      "主图2文案：",
      "主图3文案：",
      "适合谁：",
      "解决什么问题：",
      "包含内容：",
      "怎么使用：",
      "为什么值这个价：",
      "FAQ：",
      "发货和售后说明："
    ].join("\n"),
    sources: ["listing", "cases"]
  },
  10: {
    body: [
      "商品笔记的目的不是单纯分享干货，而是让合适的人看到你的产品，并愿意点进商品页。笔记要像试吃，让用户感到有价值，同时知道完整版在商品里。",
      "今天先写三类基础笔记：痛点型、结果展示型、问答型。痛点型负责击中需求，展示型负责证明产品真实存在，问答型负责承接评论区和搜索问题。",
      "每篇笔记都要和商品强相关。不要把完整答案一次性给完，否则用户看完就走；要展示结构、预览和部分价值，再引导到商品页。"
    ],
    steps: [
      "从对标库里选3个痛点、2个展示角度、1个问答角度。",
      "每篇写封面文案、标题、正文、话题词和置顶评论。",
      "在正文里展示产品目录、预览或完整资料的价值。",
      "检查每篇是否能自然引导到商品。"
    ],
    template: [
      "笔记类型：痛点型 / 展示型 / 问答型",
      "封面大字：",
      "标题：",
      "正文开头：",
      "中段价值展示：",
      "商品承接：",
      "话题词：",
      "置顶评论："
    ].join("\n"),
    sources: ["notes", "benchmark"]
  },
  11: {
    body: [
      "第十一天开始发布。第一批不是为了爆，而是为了拿真实反馈。没有发布，就没有商品点击、评论、咨询和复盘。",
      "发布时要记录变量：标题、封面、关键词、发布时间、笔记类型、商品承接方式。否则数据回来之后，你不知道到底是哪一处起作用。",
      "早期不要因为一两篇数据差就否定方向。样本太少时，判断通常不准。先把第一批发出去，建立记录习惯。"
    ],
    steps: [
      "从6篇草稿里选2到3篇发布。",
      "记录发布时间、标题、关键词、笔记类型和商品链接。",
      "发布后截图保存初始状态，方便后续对比。",
      "24小时内只观察，不急着大改方向。"
    ],
    template: [
      "发布日期：",
      "笔记标题：",
      "笔记类型：",
      "核心关键词：",
      "发布时间：",
      "商品承接方式：",
      "发布后1小时数据：",
      "发布后24小时数据：",
      "评论或私信问题："
    ].join("\n"),
    sources: ["notes", "review"]
  },
  12: {
    body: [
      "优化封面标题不是换几个词，而是基于对标和数据做变量测试。你要知道这次改的是人群、场景、痛点、结果展示，还是关键词。",
      "封面负责让用户停下来，标题负责让用户知道和自己有关。对搜索流量来说，标题和正文前100字里的关键词尤其重要。",
      "不要重复发同质内容。第二批笔记要和第一批有明显角度差异，否则即使发得更多，也很难知道市场到底对什么有反应。"
    ],
    steps: [
      "回看对标库，选2种封面结构和2种标题结构。",
      "把第一批笔记改成不同角度，不只是同义替换。",
      "再发布2到3篇，记录这次改动的变量。",
      "把新旧标题、封面和开头放在一起对比。"
    ],
    template: [
      "原笔记角度：",
      "本次优化变量：封面 / 标题 / 开头 / 关键词 / 商品承接",
      "新封面文案：",
      "新标题：",
      "新开头：",
      "预期提升什么：",
      "发布后观察指标："
    ].join("\n"),
    sources: ["notes", "benchmark"]
  },
  13: {
    body: [
      "评论区和私信是最接近购买动机的地方。用户问能不能编辑、适合几年级吗、有没有答案、怎么买，说明他已经在评估你的产品。",
      "今天不要只回复问题，要把问题沉淀成FAQ、商品页补充和新笔记选题。一个真实问题，往往可以变成一篇问答型笔记。",
      "如果你自己的评论还少，就去对标评论区补样本。同行评论里的高频问题，就是这个赛道用户最关心的购买前疑虑。"
    ],
    steps: [
      "整理自己笔记评论、私信和收藏里的问题。",
      "从对标评论区补充同类高频问题。",
      "把问题按购买前疑虑、使用疑虑、版本疑虑、价格疑虑分类。",
      "把高频问题写进商品页FAQ和后续笔记选题。"
    ],
    template: [
      "用户问题：",
      "问题来源：自己评论 / 私信 / 对标评论",
      "问题类型：适用人群 / 文件格式 / 使用方式 / 售后 / 价格",
      "标准回答：",
      "是否需要补到商品页：",
      "是否可以写成笔记：",
      "对应笔记标题："
    ].join("\n"),
    sources: ["notes", "listing"]
  },
  14: {
    body: [
      "第二批笔记要用问题清单来写，重点覆盖不同痛点和使用场景。不要一直写产品介绍，用户真正搜索的是自己的问题。",
      "问答型笔记适合拿搜索流量，也适合处理购买前疑虑。比如家长会PPT要不要写学生表现、京东采销面试怎么答、月嫂合同哪些条款最关键。",
      "到今天结束，你应该累计10到12篇笔记。数量不是目的，但没有足够样本，就很难判断哪个角度有效。"
    ],
    steps: [
      "从问题清单里挑5个最有购买动机的问题。",
      "每个问题写成一篇问答型或场景型笔记。",
      "继续发布到累计10到12篇。",
      "记录每篇对应的痛点、关键词和商品承接方式。"
    ],
    template: [
      "问题型选题：",
      "用户搜索词：",
      "一句话答案：",
      "为什么这个问题重要：",
      "我的产品如何解决：",
      "正文结构：",
      "商品承接：",
      "发布记录："
    ].join("\n"),
    sources: ["notes", "review"]
  },
  15: {
    body: [
      "第十五天是第二个Boss关：商品页2.0。前面发笔记拿到的所有问题，都要回流到商品页，否则用户点进来仍然会犹豫。",
      "如果阅读高但商品点击低，说明笔记和商品关系弱；如果点击高但支付转化低，说明商品页没有讲清楚价值、预览、适用人群或售后。",
      "商品页2.0的核心是降低不确定感。补目录、预览、FAQ、使用说明和发货方式，比继续写空泛卖点更重要。"
    ],
    steps: [
      "检查前14天的商品点击、加购、评论和私信。",
      "把高频疑问补进详情页和主图。",
      "增加真实预览、目录、适用人群和不适合人群。",
      "保存商品页2.0版本，记录修改原因。"
    ],
    template: [
      "商品页2.0修改记录：",
      "发现的问题：点击低 / 转化低 / 加购不下单 / 咨询重复",
      "新增预览：",
      "新增FAQ：",
      "新增使用说明：",
      "新增售后说明：",
      "这次修改想提升的指标："
    ].join("\n"),
    sources: ["listing", "review"]
  },
  16: {
    body: [
      "复盘不要只看点赞、收藏、评论。对虚拟产品来说，更重要的是从笔记到商品到成交的路径：阅读、商品点击、加购、下单、收入。",
      "GMV等于流量、单价、数量和转化率的组合，但不要误解为流量越大越好。精准流量比泛流量更重要，100个真想买的人比1万个随手收藏的人更有价值。",
      "今天建立复盘表，先把已发笔记录进去。你要能分清哪些只是虚荣指标，哪些真的更接近成交。"
    ],
    steps: [
      "建立笔记复盘表，字段包括标题、类型、关键词、阅读、互动、点击、加购、下单。",
      "录入所有已发布笔记的数据。",
      "标记阅读高、点击高、转化高的笔记。",
      "写出每篇的初步结论：继续、改标题、改商品页或停发。"
    ],
    template: [
      "日期：",
      "笔记标题：",
      "笔记类型：",
      "关键词：",
      "阅读：",
      "点赞/收藏/评论：",
      "商品点击率：",
      "支付转化率：",
      "加购：",
      "下单：",
      "单篇收入：",
      "结论："
    ].join("\n"),
    sources: ["review", "notes"]
  },
  17: {
    body: [
      "出现有效角度后，先放大，不要马上换方向。有效角度可能是一个关键词、一类封面、一个痛点、一个场景，或者一种商品承接方式。",
      "放大不是复制粘贴，而是同主题变体。比如一篇京东采销面试题有效，可以继续写一面、群面、压力面、案例题、避坑回答。",
      "今天新增内容都要来自已验证假设，而不是随机追热点。你要知道每篇变体在验证什么。"
    ],
    steps: [
      "从复盘表里选出表现最好的1到2个角度。",
      "围绕每个角度写3个变体标题。",
      "发布3到6篇同主题变体。",
      "记录每篇变体和原有效笔记的关系。"
    ],
    template: [
      "有效角度：",
      "原始笔记：",
      "有效原因猜测：",
      "变体1标题：",
      "变体2标题：",
      "变体3标题：",
      "每篇验证什么：",
      "观察指标："
    ].join("\n"),
    sources: ["review", "notes"]
  },
  18: {
    body: [
      "产品体系不是一开始就做大礼包，而是在第一款产品验证需求后，顺着用户反馈做关联品、组合包、升级版或热点款。",
      "关联品要和第一款产品有关联，能提升客单价或覆盖新场景。比如开学第一课PPT后面可以做家长会、期中总结、主题班会；面试题后面可以做简历检查清单和群面题库。",
      "今天只设计，不急着开做。先看用户未被满足的问题，再判断哪个产品最值得下一轮验证。"
    ],
    steps: [
      "整理用户评论、私信和复盘里没被满足的需求。",
      "设计一个关联品、一个升级版、一个组合包或热点款。",
      "判断每个想法和第一款产品的关系。",
      "选出2个最值得下一轮验证的后续产品。"
    ],
    template: [
      "后续产品想法：",
      "来自哪个用户问题：",
      "和第一款产品的关系：",
      "交付形式：",
      "预计价格：",
      "需要多久做出1.0：",
      "优先级：",
      "验证方式："
    ].join("\n"),
    sources: ["product", "cases"]
  },
  19: {
    body: [
      "先不要急着投流。课程里对投流的判断非常一致：投流是放大器，不是救命稻草。自然流量0转化、商品页粗糙时，投流只会放大亏损。",
      "可以考虑投流的前提是：已经有自然下单或强咨询，某篇笔记明显优于其他笔记，商品页能承接，且你知道关键词、人群和转化逻辑。",
      "21天内，你最多做到判断是否具备投流条件。如果没有自然转化，把精力放回选品、商品页和笔记。"
    ],
    steps: [
      "检查是否已有自然下单、加购或高意向咨询。",
      "找出是否有明显优于其他笔记的内容。",
      "检查商品利润是否能覆盖测试成本。",
      "决定：暂不投流、继续自然优化，或小预算测试。"
    ],
    template: [
      "投流条件检查：",
      "是否有自然下单：",
      "是否有高意向咨询：",
      "是否有明显优质笔记：",
      "商品页是否能承接：",
      "是否知道目标人群和关键词：",
      "利润是否覆盖测试成本：",
      "结论："
    ].join("\n"),
    sources: ["ads", "review"]
  },
  20: {
    body: [
      "第二十天要做决策：继续、优化还是换品。不要凭感觉，也不要因为辛苦就继续。把问题落到阅读低、点击低、转化低、加购不下单、内容写不动中的一个。",
      "继续做的信号是有自然下单、商品访问、加购或真实咨询，同行也持续更新并有销量。优化再做的信号是有阅读但点击低，或有点击但转化低。",
      "考虑换品的信号是发到足够样本仍没有有效商品访问，同行也没有销量，你完全写不出后续内容，或者产品交付痛苦且没有长期更新能力。"
    ],
    steps: [
      "根据复盘表判断当前最大问题。",
      "在继续、优化、换品里选一个决策。",
      "把决策拆成下一轮3个具体动作。",
      "为每个动作写清验证指标和执行时间。"
    ],
    template: [
      "当前结论：继续 / 优化 / 换品",
      "依据数据：",
      "最大问题：阅读低 / 点击低 / 转化低 / 加购不下单 / 写不动",
      "下一步动作1：",
      "验证指标：",
      "下一步动作2：",
      "验证指标：",
      "下一步动作3：",
      "验证指标："
    ].join("\n"),
    sources: ["review", "ads"]
  },
  21: {
    body: [
      "最终Boss关不是写一篇漂亮总结，而是把21天的数据、经验、卡点和下一步沉淀成可复用流程。你要知道下次如何更快选品、更快做产品、更快判断是否值得继续。",
      "复盘报告要回答四个问题：做了什么，数据如何，问题在哪，下一步怎么改。不要只写感受，要把交付物、笔记、商品页、数据和决策放在一起看。",
      "21天的目标不是学完所有资料，而是完成一次从想法到上架、发布、复盘的闭环。很多问题不是想出来的，是发出去、卖起来、被数据打回来之后才知道怎么改。"
    ],
    steps: [
      "汇总21天所有交付物和发布时间线。",
      "整理笔记、商品页、点击、加购、下单和收入数据。",
      "写出成功原因、失败原因和下次要保留的动作。",
      "确定下一轮路线：深挖、优化重发、做关联品或换品。"
    ],
    template: [
      "21天复盘报告",
      "一、我做了什么：",
      "二、核心数据：",
      "三、最有效的笔记或角度：",
      "四、最大卡点：",
      "五、商品页和产品需要怎么改：",
      "六、下一轮决策：继续 / 优化 / 换品",
      "七、未来7天动作清单："
    ].join("\n"),
    sources: ["review", "cases", "core"]
  }
};

const progressKey = "xhs-ai-product-quest-progress-v1";
const checklistKey = "xhs-ai-product-quest-checklist-v1";
const currentKey = "xhs-ai-product-quest-current-v1";

let selectedStage = "全部";
let currentDay = Number(localStorage.getItem(currentKey)) || 1;
let progress = readState(progressKey);
let checklistState = readState(checklistKey);

function readState(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    return {};
  }
}

function writeState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function isComplete(day) {
  return progress[String(day)] === true;
}

function isUnlocked(day) {
  return day === 1 || isComplete(day - 1);
}

function getLevel(day) {
  return levels.find((level) => level.day === day) || levels[0];
}

function getLesson(day) {
  return lessonContent[String(day)] || lessonContent[day] || lessonContent[1];
}

function getCompletedCount() {
  return levels.filter((level) => isComplete(level.day)).length;
}

function selectDay(day) {
  if (!isUnlocked(day)) {
    alert(`Day ${day} 还未解锁。先完成 Day ${day - 1} 的交付物。`);
    return;
  }
  currentDay = day;
  localStorage.setItem(currentKey, String(day));
  render();
  document.getElementById("current").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleStage(stage) {
  selectedStage = stage;
  renderMap();
}

function toggleCheck(day, index, checked) {
  const key = String(day);
  checklistState[key] = checklistState[key] || {};
  checklistState[key][String(index)] = checked;
  writeState(checklistKey, checklistState);
  renderLevel();
}

function areAllChecksDone(day) {
  const level = getLevel(day);
  const saved = checklistState[String(day)] || {};
  return level.checks.every((_, index) => saved[String(index)] === true);
}

function completeCurrentLevel() {
  if (!areAllChecksDone(currentDay)) {
    alert("先把通关清单全部勾选，再标记完成。");
    return;
  }
  progress[String(currentDay)] = true;
  writeState(progressKey, progress);
  if (currentDay < levels.length) {
    currentDay += 1;
    localStorage.setItem(currentKey, String(currentDay));
  }
  render();
}

function copyDeliverableTemplate() {
  const level = getLevel(currentDay);
  const lesson = getLesson(currentDay);
  const text = [
    `Day ${level.day}：${level.title}`,
    "",
    `今日交付：${level.deliverable}`,
    "",
    "交付模板：",
    lesson.template,
    "",
    "完成记录：",
    ...level.checks.map((check) => `- [ ] ${check}`),
    "",
    "复盘：",
    "- 我今天完成了什么？",
    "- 哪一步卡住了？",
    "- 明天要验证什么？"
  ].join("\n");

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert("已复制今日交付模板。"));
    return;
  }
  alert(text);
}

function resetProgress() {
  if (!confirm("确认清空所有关卡进度和勾选记录吗？")) return;
  progress = {};
  checklistState = {};
  currentDay = 1;
  localStorage.removeItem(progressKey);
  localStorage.removeItem(checklistKey);
  localStorage.setItem(currentKey, "1");
  render();
}

function renderStageTabs() {
  const container = document.getElementById("stageTabs");
  container.innerHTML = "";
  stageMeta.forEach((stage) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = stage.name;
    button.className = stage.name === selectedStage ? "active" : "";
    button.addEventListener("click", () => toggleStage(stage.name));
    container.appendChild(button);
  });
}

function renderMap() {
  renderStageTabs();
  const container = document.getElementById("levelList");
  container.innerHTML = "";
  const shownLevels = selectedStage === "全部" ? levels : levels.filter((level) => level.stage === selectedStage);

  shownLevels.forEach((level) => {
    const button = document.createElement("button");
    button.type = "button";
    const locked = !isUnlocked(level.day);
    button.className = [
      "level-item",
      level.day === currentDay ? "active" : "",
      isComplete(level.day) ? "done" : "",
      locked ? "locked" : ""
    ]
      .filter(Boolean)
      .join(" ");
    button.innerHTML = `
      <span class="day">${level.day}</span>
      <span>
        <strong>${level.title}</strong>
        <small>${level.deliverable}</small>
      </span>
      <span class="state">${isComplete(level.day) ? "完成" : locked ? "锁定" : "进行"}</span>
    `;
    button.addEventListener("click", () => selectDay(level.day));
    container.appendChild(button);
  });
}

function renderLevel() {
  const level = getLevel(currentDay);
  const lesson = getLesson(currentDay);
  document.getElementById("levelStage").textContent = level.stage;
  document.getElementById("levelDifficulty").textContent = level.boss ? "关键Boss关" : "基础关";
  document.getElementById("levelNumber").textContent = `Day ${level.day}`;
  document.getElementById("levelTitle").textContent = level.title;
  document.getElementById("levelLearn").textContent = level.learn;
  document.getElementById("levelDo").textContent = level.action;
  document.getElementById("levelDeliverable").textContent = level.deliverable;
  document.getElementById("levelPass").textContent = level.pass;
  document.getElementById("mentorTip").textContent = level.tip;
  document.getElementById("bossBadge").hidden = !level.boss;

  const lessonBody = document.getElementById("lessonBody");
  lessonBody.innerHTML = "";
  lesson.body.forEach((paragraph) => {
    const item = document.createElement("p");
    item.textContent = paragraph;
    lessonBody.appendChild(item);
  });

  const lessonSteps = document.getElementById("lessonSteps");
  lessonSteps.innerHTML = "";
  lesson.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    lessonSteps.appendChild(item);
  });

  document.getElementById("lessonTemplate").textContent = lesson.template;

  const sourceLinks = document.getElementById("levelSources");
  sourceLinks.innerHTML = "";
  lesson.sources.forEach((sourceId) => {
    const source = sourceCatalog[sourceId];
    if (!source) return;
    const link = document.createElement("a");
    link.href = source.href;
    link.textContent = source.title;
    sourceLinks.appendChild(link);
  });

  const checklist = document.getElementById("checklist");
  checklist.innerHTML = "";
  const saved = checklistState[String(level.day)] || {};
  level.checks.forEach((check, index) => {
    const label = document.createElement("label");
    label.className = "checkline";
    label.innerHTML = `
      <input type="checkbox" ${saved[String(index)] ? "checked" : ""} />
      <span>${check}</span>
    `;
    label.querySelector("input").addEventListener("change", (event) => {
      toggleCheck(level.day, index, event.target.checked);
    });
    checklist.appendChild(label);
  });

  const completeButton = document.getElementById("completeButton");
  completeButton.disabled = !areAllChecksDone(level.day);
  completeButton.textContent = isComplete(level.day) ? "本关已完成" : "标记本关完成";
}

function renderProgress() {
  const completed = getCompletedCount();
  const current = getLevel(currentDay);
  const next = levels.find((level) => !isComplete(level.day)) || levels[levels.length - 1];
  const percent = Math.round((completed / levels.length) * 100);
  const ring = document.getElementById("progressRing");
  ring.style.setProperty("--progress", `${percent}%`);
  document.getElementById("progressNumber").textContent = String(completed);
  document.getElementById("currentStage").textContent = current.stage;
  document.getElementById("nextDeliverable").textContent = next.deliverable;
}

function renderMilestones() {
  const container = document.getElementById("milestones");
  container.innerHTML = "";
  milestones.forEach((milestone) => {
    const reached = isComplete(milestone.day);
    const block = document.createElement("div");
    block.className = "milestone";
    block.innerHTML = `
      <strong>${milestone.title}<span class="pill">${reached ? "已达成" : `Day ${milestone.day}`}</span></strong>
      <span>${milestone.text}</span>
    `;
    container.appendChild(block);
  });
}

function render() {
  renderMap();
  renderLevel();
  renderProgress();
  renderMilestones();
}

document.getElementById("completeButton").addEventListener("click", completeCurrentLevel);
document.getElementById("copyTemplate").addEventListener("click", copyDeliverableTemplate);
document.getElementById("resetProgress").addEventListener("click", resetProgress);
document.getElementById("continueButton").addEventListener("click", () => selectDay(currentDay));
document.getElementById("nextButton").addEventListener("click", () => {
  const nextDay = Math.min(currentDay + 1, levels.length);
  selectDay(nextDay);
});

render();
