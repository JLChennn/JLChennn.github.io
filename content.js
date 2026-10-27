// Edit your information here. Every text field has an English and Chinese version.
// Empty photo means the neutral portrait placeholder will be displayed.
window.PROFILE = {
  name: { en: 'Junlin Chen', zh: 'Junlin Chen' },
  nativeName: { en: '', zh: '' },
  role: { en: 'Master’s Student', zh: '计算机科学与技术 · 硕士研究生' },
  affiliation: { en: 'Sichuan University', zh: '四川大学' },
  email: 'junlinchenjlc@163.com',
  photo: 'assets/portrait.jpg',
  about: {
    en: ['I am a master’s student in Computer Science and Technology at Sichuan University and a member of IDs Lab. My research interests lie in AI agents and reinforcement learning.', 'Previously, I studied Artificial Intelligence at Southeast University from September 2022 to June 2026.'],
    zh: ['我目前在四川大学攻读计算机科学与技术专业硕士学位，是 IDs Lab 的成员，研究兴趣主要是智能体（Agent）与强化学习（RL）。', '此前，我于 2022 年 9 月至 2026 年 6 月在东南大学人工智能专业学习。']
  },
  interests: [
    { symbol: '⌘', title: { en: 'AI Agents', zh: '智能体（Agent）' }, description: { en: 'Agent', zh: 'Agent' } },
    { symbol: '↗', title: { en: 'Reinforcement Learning', zh: '强化学习（RL）' }, description: { en: 'RL', zh: 'RL' } }
  ],
  education: [
    { title: { en: 'Sichuan University', zh: '四川大学' }, logo: 'assets/scu-emblem.jpg', date: { en: '2026.09 — Present', zh: '2026.09 — 至今' }, role: { en: 'Master’s · Computer Science and Technology', zh: '硕士 · 计算机科学与技术' }, lab: { name: 'IDs Lab', url: 'https://ids-lab-asia.github.io/' } },
    { title: { en: 'Southeast University', zh: '东南大学' }, logo: 'assets/seu-emblem.png', date: { en: '2022.09 — 2026.06', zh: '2022.09 — 2026.06' }, role: { en: 'Undergraduate · Artificial Intelligence', zh: '本科 · 人工智能' } }
  ],
  experience: [
    { title: { en: 'Tencent', zh: '腾讯科技有限公司' }, date: { en: '2026.07 — 2026.09', zh: '2026.07 — 2026.09' }, role: { en: 'Algorithm Intern', zh: '算法实习生' } }
  ],
  news: [
    { date: '2026-09', text: { en: 'Joined Sichuan University and IDs Lab to pursue a master’s degree in Computer Science and Technology.', zh: '加入四川大学 IDs Lab，攻读计算机科学与技术专业硕士。' } },
    { date: '2026-07', text: { en: 'Joined Tencent as an algorithm intern.', zh: '进入腾讯科技有限公司，担任算法实习生。' } },
    { date: '2022-09', text: { en: 'Enrolled at Southeast University to study Artificial Intelligence.', zh: '进入东南大学人工智能专业学习。' } }
  ],
  hobbies: [
    { icon: 'tennis', label: { en: 'Tennis', zh: '网球' } },
    { icon: 'badminton', label: { en: 'Badminton', zh: '羽毛球' } },
    { icon: 'swimming', label: { en: 'Swimming', zh: '游泳' } },
    { icon: 'fitness', label: { en: 'Fitness', zh: '健身' } },
    { icon: 'hiking', label: { en: 'Hiking', zh: '徒步' } },
    { icon: 'movies', label: { en: 'Movies', zh: '电影' } },
    { icon: 'sparkles', label: { en: 'Anything interesting', zh: '一切有趣的事' } }
  ]
};

window.TRANSLATIONS = {
  en: {
    siteLabel: 'Academic homepage', photoLabel: 'YOUR PORTRAIT', email: 'Email', profileNote: 'In the age of freedom, be a blazing soul.',
    eyebrow: 'Computer science & intelligent systems', heroTitle: 'Curiosity, built into systems.', heroSubtitle: 'Exploring intelligence. Making ideas work.', sayHello: 'Get in touch',
    interestsTitle: 'Research interests', educationTitle: 'Education', experienceTitle: 'Internship experience', researchTitle: 'Research & projects', publicationsTitle: 'Publications', moreTitle: 'A little more', newsTitle: 'News',
    toBeAdded: 'To be added', publicationNote: 'Space for selected publications and preprints. Add paper titles, authors, venues, and links when ready.',
    moreCopy: 'Beyond research, this is a space for the things that make you, you — interests, reading, hobbies, or a thought you would like to share. To be personalized.', closing: 'Stay curious. Build thoughtfully. Keep learning.',
    onThisPage: 'On this page', draftLabel: 'First design · Content draft', footerNote: 'A space for research & ideas.', backTop: 'Back to top ↑',
    nav: ['About', 'Research interests', 'Education', 'Internships', 'Research & projects', 'Publications', 'A little more', 'News']
  },
  zh: {
    siteLabel: '学术个人主页', photoLabel: '证件照待添加', email: '电子邮箱', profileNote: 'In the age of freedom, be a blazing soul.',
    eyebrow: '计算机科学与智能系统', heroTitle: '保持好奇，让想法落地。', heroSubtitle: '探索智能，也构建真实可用的系统。', sayHello: '与我联系',
    interestsTitle: '研究兴趣', educationTitle: '教育背景', experienceTitle: '实习经历', researchTitle: '科研与项目', publicationsTitle: '学术发表', moreTitle: '研究之外', newsTitle: '最新动态',
    toBeAdded: '待补充', publicationNote: '预留给代表性论文与预印本。后续可填写标题、作者、会议或期刊，以及论文与代码链接。',
    moreCopy: '除了研究，这里也可以记录让你成为你的那些事：兴趣、阅读、生活爱好，或想与访客分享的思考。内容待你补充。', closing: '保持好奇，认真构建，持续学习。',
    onThisPage: '本页目录', draftLabel: '设计初版 · 内容待完善', footerNote: '记录研究，也记录想法。', backTop: '回到顶部 ↑',
    nav: ['关于我', '研究兴趣', '教育背景', '实习经历', '科研与项目', '学术发表', '研究之外', '最新动态']
  }
};
