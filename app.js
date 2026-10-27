(() => {
  'use strict';
  const profile = window.PROFILE;
  const sectionIds = ['about', 'interests', 'education', 'experience', 'research', 'publications', 'more', 'news'];
  let language = 'en';
  let activeId = 'about';
  const translated = value => typeof value === 'object' ? value[language] : value;
  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = translated(text);
    return element;
  };
  const hobbyPaths = {
    tennis: ['M14 13l-8 8m-1-1 2 2', 'M19.5 4.5c3 3 2.5 7-.5 10s-7 3.5-10 .5-2.5-7 .5-10 7-3.5 10-.5Z', 'm10 5 9 9M8 9l7 7m-3-1 6-9m-9 6 7-8'],
    badminton: ['m4 20 4-4m-1-3 4 4m-4-4 3-10 11 11-10 3Z', 'm10 3 1 10 10 1m-6-9-4 8 8-4'],
    swimming: ['M2 20c2-2 3 2 5 0s3 2 5 0 3 2 5 0 3 2 5 0M2 16c2-2 3 2 5 0s3 2 5 0 3 2 5 0 3 2 5 0', 'm5 12 5-4 5 5m-5-5L6 4 3 6', 'M18 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z'],
    fitness: ['M7 12h10M3 9v6m4-8v10M17 7v10m4-8v6M3 12h4m10 0h4'],
    hiking: ['m2 20 7-12 4 6 3-4 6 10H2Z', 'm7 11 2 3 2-3M16 10l2-5m-3 0 3-2 3 2'],
    movies: ['M3 8h18v13H3V8Zm0 0L2 3l18-2 1 5L3 8Z', 'm6 3 3 4m3-5 3 4m3-5 3 4', 'm10 12 5 3-5 3v-6Z'],
    sparkles: ['m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z', 'M20 2v4m-2-2h4']
  };
  function hobbyIcon(name) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    for (const [key, value] of Object.entries({viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true'})) svg.setAttribute(key, value);
    for (const d of hobbyPaths[name]) { const path = document.createElementNS(ns, 'path'); path.setAttribute('d', d); svg.append(path); }
    return svg;
  }
  function markActive(id) {
    activeId = id;
    document.querySelectorAll('#toc a').forEach(link => {
      const active = link.hash === '#' + id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function renderTimeline(id, entries) {
    document.getElementById(id).replaceChildren(...entries.map(entry => {
      const article = create('article', 'timeline-item');
      if (entry.logo) {
        article.classList.add('with-logo');
        const logo = create('img', 'university-logo');
        logo.src = entry.logo; logo.alt = translated(entry.title) + (language === 'zh' ? '校徽' : ' emblem');
        logo.width = 44; logo.height = 44;
        article.append(logo);
      }
      const top = create('div', 'entry-top');
      top.append(create('h3', '', entry.title), create('span', 'date', entry.date));
      article.append(top, create('p', 'entry-role', entry.role));
      if (entry.description && translated(entry.description)) article.append(create('p', 'entry-description', entry.description));
      if (entry.lab) {
        const lab = create('a', 'entry-lab', entry.lab.name + ' ↗');
        lab.href = entry.lab.url; lab.target = '_blank'; lab.rel = 'noopener noreferrer'; article.append(lab);
      }
      return article;
    }));
  }
  function render(lang) {
    language = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
    document.title = lang === 'zh' ? `${profile.name.zh} · 学术主页` : `${profile.name.en} · Academic Homepage`;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = window.TRANSLATIONS[lang][el.dataset.i18n]; });
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    for (const [id, value] of Object.entries({ 'profile-name': profile.name, 'native-name': profile.nativeName, 'profile-role': profile.role, affiliation: profile.affiliation })) document.getElementById(id).textContent = translated(value);
    document.getElementById('about-copy').replaceChildren(...profile.about[lang].map(p => create('p', '', p)));
    document.getElementById('interest-list').replaceChildren(...profile.interests.map(item => {
      const card = create('article', 'interest');
      const symbol = create('div', 'interest-symbol', item.symbol);
      symbol.setAttribute('aria-hidden', 'true');
      card.append(symbol, create('h3', '', item.title), create('p', '', item.description));
      return card;
    }));
    renderTimeline('education-list', profile.education);
    renderTimeline('experience-list', profile.experience);
    document.getElementById('news-list').replaceChildren(...[...profile.news].sort((a, b) => b.date.localeCompare(a.date)).map(item => {
      const row = create('article', 'news-item');
      const date = create('time', 'news-date', item.date.replace('-', '.'));
      date.dateTime = item.date;
      row.append(date, create('p', '', item.text));
      return row;
    }));
    document.getElementById('hobby-list').replaceChildren(...profile.hobbies.map(item => {
      const hobby = create('li', 'hobby');
      hobby.append(hobbyIcon(item.icon), create('span', '', item.label));
      return hobby;
    }));
    document.getElementById('toc').replaceChildren(...sectionIds.map((id, index) => {
      const link = create('a');
      link.href = '#' + id;
      link.append(create('span', 'nav-number', index === 0 ? '—' : String(index).padStart(2, '0')), document.createTextNode(window.TRANSLATIONS[lang].nav[index]));
      return link;
    }));
    markActive(activeId);
  }
  document.getElementById('email-link').href = 'mailto:' + profile.email;
  document.getElementById('hello-link').href = 'mailto:' + profile.email;
  document.getElementById('email-link').title = profile.email;
  if (profile.photo) {
    const photo = create('img'); photo.src = profile.photo; photo.alt = 'Portrait / 个人照片';
    document.getElementById('portrait').replaceChildren(photo);
  }
  document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => render(button.dataset.lang)));
  render('en');
  let scheduled = false;
  function updateSection() {
    const threshold = Math.min(window.innerHeight * 0.32, 220);
    let current = sectionIds[0];
    for (const id of sectionIds) if (document.getElementById(id).getBoundingClientRect().top <= threshold) current = id;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = sectionIds.at(-1);
    markActive(current); scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateSection); } }, { passive: true });
  window.addEventListener('resize', updateSection);
  updateSection();
})();
