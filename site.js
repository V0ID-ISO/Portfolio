/* Shared rendering helpers used by both index.html and projects.html.
   No need to edit this file — edit data.js instead. */

function el(tag, className, html){
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* Fills in the quick-links row and any [data-profile="field"] elements
   from PROFILE, so name/links only need to be edited once in data.js */
function applyProfile(){
  document.querySelectorAll('[data-profile]').forEach(node => {
    const field = node.getAttribute('data-profile');
    if (!(field in PROFILE)) return;
    if (node.tagName === 'A') {
      node.href = field === 'email' ? `mailto:${PROFILE[field]}` : PROFILE[field];
    } else {
      node.textContent = PROFILE[field];
    }
  });
}

/* Continuous line-number gutter, matched to actual rendered content height */
function renderGutter(){
  const content = document.getElementById('content');
  const gutter = document.getElementById('gutter');
  if (!content || !gutter) return;
  const lineHeight = 24;
  const totalLines = Math.ceil(content.getBoundingClientRect().height / lineHeight) + 2;
  gutter.style.setProperty('--lh', lineHeight + 'px');
  gutter.innerHTML = '';
  for (let i = 1; i <= totalLines; i++){
    gutter.appendChild(el('div', null, i));
  }
}

/* Active tab highlight on scroll, for in-page anchor sections */
function setupScrollSpy(sectionIds){
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const tabs = Array.from(document.querySelectorAll('.tab'));
  if (!sections.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        tabs.forEach(t => {
          const href = t.getAttribute('href') || '';
          t.classList.toggle('active', href === '#' + id || href.endsWith('#' + id));
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
}

function renderProjectCards(container, projects){
  projects.forEach(p => {
    const card = el('div', 'card');
    card.innerHTML = `
      <div class="card-top">
        <h3>${p.name}</h3>
        ${p.impact ? `<span class="impact-badge">${p.impact}</span>` : ''}
      </div>
      <div class="stack">${p.stack}</div>
      <p>${p.description}</p>
      <div class="links">
        ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener">Live demo →</a>` : ''}
        ${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener">Source →</a>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderAchievementItems(container, achievements){
  achievements.forEach(a => {
    const item = el('div', 't-item');
    item.innerHTML = `
      <div class="t-date">${a.date}</div>
      <div class="t-title">${a.title}</div>
      <p class="t-desc">${a.description}</p>
    `;
    container.appendChild(item);
  });
}

window.addEventListener('resize', renderGutter);
window.addEventListener('load', renderGutter);
