import { NewsItem, TabCategory, VideoItem } from './types';

export const CATEGORIES: TabCategory[] = [
  { id: 'all', label: '全部' },
  { id: 'party', label: '党建落实' },
  { id: 'reform', label: '国企改革' },
  { id: 'finance', label: '财管运行' },
  { id: 'capital', label: '资本运营' },
  { id: 'tech', label: '科技创新' },
  { id: 'social', label: '社会责任' },
  { id: 'rights', label: '产权管理' },
  { id: 'intl', label: '国际合作' },
  { id: 'assess', label: '考核分配' },
  { id: 'monitor', label: '监督巡视' },
];

export const HEADLINE_NEWS: NewsItem = {
  id: 'h1',
  title: '集团公司在国资委能源监管专题会议上作经验交流',
  summary: '集团公司分享了在新能源监管、碳排放监测及数字化监管平台建设方面的经验做法，得到国资委领导高度评价。',
  date: '2025-03-25',
  category: 'reform',
  imageUrl: 'https://picsum.photos/800/450', // Fallback if gray placeholder logic isn't used
  isHeadline: true,
};

export const HOT_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: '集团公司深化国资监管数字化转型 构建"智慧监管"新格局',
    summary: '集团公司全面推进监管平台3.0建设，实现从"静态监管"向"动态监管"、从"事后追溯"向"事前预警"的转变。',
    date: '2025-03-28',
    category: 'tech',
  },
  {
    id: 'n2',
    title: '从速度规模模型转向质量效率型 新一轮国企改革深化提升行动将实施',
    summary: '国资委部署新一轮国企改革深化提升行动，重点聚焦能源领域国有企业高质量发展，强化国资监管效能。',
    date: '2025-03-26',
    category: 'reform',
  },
  {
    id: 'n3',
    title: '集团公司发布2025年度国资监管重点工作任务',
    summary: '明确六大类28项重点任务，涵盖新能源资产监管、碳排放监测、安全生产监管等关键领域。',
    date: '2025-03-22',
    category: 'manage',
  },
  {
    id: 'n4',
    title: '国资委：加快推进能源类国企数字化监管体系建设',
    summary: '要求各能源央企2025年底前完成监管数据标准化建设，实现与国资委在线监管系统无缝对接。',
    date: '2025-03-19',
    category: 'tech',
  },
  {
    id: 'n5',
    title: '集团公司新能源资产监管平台上线 实现全生命周期管理',
    summary: '覆盖风电、光伏等新能源资产的投资、建设、运营全流程监管，提升资产运营效率15%以上。',
    date: '2025-03-17',
    category: 'capital',
  },
];

export const TOPIC_NEWS: NewsItem[] = [
  {
    id: 't1',
    title: '集团公司强化新能源项目投资监管',
    summary: '建立新能源项目投资"红黄蓝"三色预警机制，全年避免低效投资超50亿元。',
    date: '2025-03-24',
    tag: '科技创新',
    category: 'tech',
  },
  {
    id: 't2',
    title: '集团公司发布2025年度财务监管要点',
    summary: '聚焦资金管理、成本控制、风险防控三大领域，强化财务实时监管能力。',
    date: '2025-03-21',
    tag: '财管运行',
    category: 'finance',
  },
  {
    id: 't3',
    title: '集团公司完成智慧安全监管系统升级',
    summary: '实现300余个生产单位实时监控，安全隐患识别响应时间缩短60%。',
    date: '2025-03-18',
    tag: '监督巡视',
    category: 'monitor',
  },
];

export const VIDEO_NEWS: VideoItem[] = [
  {
    id: 'v1',
    title: '“十四五”网络安全和信息化规划解读',
    date: '2025-06-15',
    duration: '05:32',
  },
  {
    id: 'v2',
    title: '“数字大唐”建设方案介绍',
    date: '2025-04-22',
    duration: '08:15',
  },
  {
    id: 'v3',
    title: '“十五五”数字化专题规划展望',
    date: '2025-03-18',
    duration: '06:48',
  },
];