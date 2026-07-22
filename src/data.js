export const capabilities = [
  { title: '小游戏开发', detail: 'H5 / Web', icon: 'game' },
  { title: 'AI应用原型', detail: 'GPT / Codex / Claude', icon: 'ai' },
  { title: '产品MVP验证', detail: '', icon: 'launch' },
  { title: '交互式Web应用', detail: '', icon: 'web' },
]

export const projectCategories = [
  { id: 'all', label: '全部项目' },
  { id: 'game', label: '游戏类' },
  { id: 'ai-tool', label: 'AI工具类' },
  { id: 'validation', label: '创业验证类' },
]

export const projects = [
  {
    number: '01',
    title: 'OPC创业红绿灯',
    category: 'validation',
    categoryLabel: '创业验证类',
    type: 'AI创业路径验证系统',
    points: ['拆解创业想法、风险和行动路线', '用红绿灯机制判断是否继续推进'],
    url: 'https://startup-traffic-light.cjmai.top/',
    image: '/assets/startup-traffic-light.png',
    alt: 'OPC创业红绿灯首页预览',
  },
  {
    number: '02',
    title: '今天也要守住',
    category: 'game',
    categoryLabel: '游戏类',
    type: '打工人精神值防守小游戏',
    points: ['情绪表达 + 战报传播系统', 'AI辅助快速开发'],
    url: 'https://guard.cjmai.top',
    image: '/assets/guard.png',
    alt: '今天也要守住游戏预览',
  },
  {
    number: '03',
    title: '今天也要出牌',
    category: 'game',
    categoryLabel: '游戏类',
    type: '扑克牌消除 + 职场主题游戏',
    points: ['轻策略 + 技能系统', 'AI辅助玩法实现'],
    url: 'https://chupai.cjmai.top',
    image: '/assets/cards.png',
    alt: '今天也要出牌游戏预览',
  },
  {
    number: '04',
    title: '吃得明白',
    category: 'ai-tool',
    categoryLabel: 'AI工具类',
    type: 'AI饮食分析工具',
    points: ['面向老人 / 慢病家庭', '图像识别 + 营养分析'],
    url: 'https://chidemingbai.cjmai.top',
    image: '/assets/nutrition.png',
    alt: '吃得明白营养分析工具预览',
  },
]

export const process = [
  ['01', '提供需求'],
  ['02', '1天方案确认'],
  ['03', '1–3天交付Demo'],
  ['04', '可迭代优化'],
]
