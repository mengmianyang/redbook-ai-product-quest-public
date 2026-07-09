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
  const text = [
    `Day ${level.day}：${level.title}`,
    "",
    `今日交付：${level.deliverable}`,
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
