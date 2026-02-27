// ==========================================
// 功能一：深色/浅色模式切换与记忆功能
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. 页面加载时，读取本地存储的主题设置
const savedTheme = localStorage.getItem('blog-theme');

// 2. 如果记录是深色，则应用深色模式
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggleBtn) { 
        themeToggleBtn.textContent = '☀️ 浅色模式';
    }
}

// 3. 监听切换按钮点击事件
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ 浅色模式';
            localStorage.setItem('blog-theme', 'dark'); 
        } else {
            themeToggleBtn.textContent = '🌙 深色模式';
            localStorage.setItem('blog-theme', 'light'); 
        }
    });
}

// ==========================================
// 功能二：平滑返回顶部悬浮按钮
// ==========================================
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    // 1. 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // 2. 监听点击事件，平滑回到顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}