/* Shared rendering helpers used by both index.html and projects.html.
   No need to edit this file — edit data.jsinstead. */

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

function slugify(text){
  return String(text).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderProjectCards(container, projects){
  projects.forEach(p => {
    const card = el('div', 'card');
    card.id = slugify(p.name);
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

function renderBlogPosts(container, posts){
  posts.forEach(post => {
    const details = el('details', 'post-card');
    const tags = (post.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
    const steps = (post.steps || []).map(s => `
      <div class="step">
        <h4>${s.title}</h4>
        ${s.image ? `<img class="step-img" src="${s.image}" alt="${s.title}" loading="lazy">` : ''}
        <p>${s.description}</p>
      </div>
    `).join('');
    details.innerHTML = `
      <img class="cover-img" src="${post.coverImage}" alt="${post.title}" loading="lazy">
      <summary>
        <div class="post-heading">
          <h3>${post.title}</h3>
          <span class="post-date">${post.date}</span>
        </div>
        <div class="tag-cloud">${tags}</div>
        <p class="post-summary">${post.summary}</p>
        <span class="expand-hint">View full walkthrough ▸</span>
      </summary>
      <div class="steps">${steps}</div>
    `;
    container.appendChild(details);
  });
}

function renderCapstones(container, capstones){
  capstones.forEach(c => {
    const card = el('div', 'capstone-card');
    const highlights = (c.highlights || []).map(h => `<li>${h}</li>`).join('');
    const gallery = (c.gallery || []).map(src => `<img src="${src}" alt="${c.title} screenshot" loading="lazy">`).join('');
    const links = [];
    if (c.links && c.links.writeup) links.push(`<a href="${c.links.writeup}" target="_blank" rel="noopener">Write-up →</a>`);
    if (c.links && c.links.code) links.push(`<a href="${c.links.code}" target="_blank" rel="noopener">Source →</a>`);
    card.innerHTML = `
      <img class="cover-img" src="${c.coverImage}" alt="${c.title}" loading="lazy">
      <div class="post-heading">
        <h3>${c.title}</h3>
        <span class="post-date">${c.date}</span>
      </div>
      <div class="stack">${c.stack}</div>
      <p>${c.summary}</p>
      ${highlights ? `<ul class="highlight-list">${highlights}</ul>` : ''}
      ${gallery ? `<div class="gallery">${gallery}</div>` : ''}
      ${links.length ? `<div class="links">${links.join('')}</div>` : ''}
    `;
    container.appendChild(card);
  });
}

function renderExperience(container, items){
  items.forEach(job => {
    const item = el('div', 't-item exp-item');
    const points = (job.points || []).map(p => `<li>${p}</li>`).join('');
    item.innerHTML = `
      <div class="t-date">${job.dates}</div>
      <div class="t-title">${job.role} · ${job.company}</div>
      <ul>${points}</ul>
    `;
    container.appendChild(item);
  });
}

function renderCertifications(container, certs){
  certs.forEach(cert => {
    const card = el('div', 'cert-card');
    card.innerHTML = `
      <h3>${cert.name}</h3>
      <div class="stack">${cert.issuer} · ${cert.date}</div>
      ${cert.credentialUrl && cert.credentialUrl !== '#' ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener">View credential →</a>` : ''}
    `;
    container.appendChild(card);
  });
}

function renderProjectsByCategory(container, projects){
  const groups = {};
  projects.forEach(p => {
    const cat = p.category || 'Other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(p);
  });
  Object.keys(groups).forEach(cat => {
    const block = el('div', 'category-block');
    const links = groups[cat].map(p =>
      `<a href="projects.html#${slugify(p.name)}">${p.name}</a>`
    ).join('');
    block.innerHTML = `
      <div class="category-title">${cat}</div>
      <div class="project-link-list">${links}</div>
    `;
    container.appendChild(block);
  });
}

window.addEventListener('resize', renderGutter);
window.addEventListener('load', renderGutter);
