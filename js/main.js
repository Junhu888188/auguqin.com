// 澳大利亚琴会 · 共享交互脚本

document.addEventListener('DOMContentLoaded', () => {
  // 移动端导航开关
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navList.classList.contains('open'));
    });
    navList.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => navList.classList.remove('open'));
    });
  }

  // 滚动淡入 + 弦线徽位动画
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal, .string-divider').forEach((el) => observer.observe(el));

  // 雅集 / 视频页 筛选标签
  const tabs = document.querySelectorAll('.tab');
  if (tabs.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        document.querySelectorAll('[data-category]').forEach((item) => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }
});
