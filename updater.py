import re

# 1. UPDATE STYLE.CSS
with open('style.css', 'r') as f:
    css = f.read()

# Update Body background
css = re.sub(
    r'body\s*\{\s*background:\s*var\(--navy\);\s*(.*?)\s*\}',
    r'body {\n            background: radial-gradient(circle at top right, #102A43, var(--navy) 60%);\n            background-attachment: fixed;\n            \1\n        }',
    css, flags=re.DOTALL
)

# Remove Cursor CSS
css = re.sub(r'/\* 1\. Cursor Glow \*/.*?/\* Expanded state for hover \*/[^{]+\{[^}]+\}', '', css, flags=re.DOTALL)

# Append Scroll To Top & Social CSS
css += '''

/* ═══════════════════════════════
   FOOTER SOCIAL & SCROLL TOP
═══════════════════════════════ */
.footer-social {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
}
.footer-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border);
    border-radius: 50%;
    color: var(--gray);
    transition: all 0.2s;
}
.footer-social a:hover {
    color: var(--teal);
    border-color: var(--teal);
    background: rgba(0, 196, 168, 0.1);
    transform: translateY(-3px);
}
.footer-social svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
}
.footer-bottom-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.scroll-top {
    position: fixed;
    bottom: -60px;
    right: 32px;
    width: 48px;
    height: 48px;
    background: rgba(11, 22, 34, 0.7);
    backdrop-filter: blur(8px);
    border: 1px solid var(--teal);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--teal);
    font-size: 20px;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
    cursor: pointer;
}
.scroll-top.visible {
    bottom: 32px;
    opacity: 1;
    visibility: visible;
}
.scroll-top:hover {
    background: var(--teal);
    color: var(--navy);
    transform: translateY(-5px);
}
'''
with open('style.css', 'w') as f:
    f.write(css)


# 2. UPDATE SCRIPT.JS
with open('script.js', 'r') as f:
    js = f.read()

# Remove Cursor JS
js = re.sub(
    r'// 1\. Custom Cursor.*?(?=// 2\. Setup 3D Tilt Glare)',
    '', js, flags=re.DOTALL
)

# Append Scroll Top Logic inside DOMContentLoaded
js = js.replace('// 3. Scroll Reveal Intersection Observer', '''
    // Scroll To Top Button Logic
    const scrollBtn = document.getElementById('scrollTopBtn');
    if(scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Scroll Reveal Intersection Observer
''')

with open('script.js', 'w') as f:
    f.write(js)

# 3. UPDATE INDEX.HTML
with open('index.html', 'r') as f:
    html = f.read()

# Social HTML
social_html = '''
        <div class="footer-bottom-inner">
            <div>&copy; 2025 Jiangsu Flower Smart Technology Co., Ltd. All rights reserved.</div>
            <div class="footer-social">
                <a href="https://baidu.com" target="_blank" aria-label="Facebook">
                    <svg viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="https://baidu.com" target="_blank" aria-label="Instagram">
                    <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://baidu.com" target="_blank" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
            </div>
        </div>
'''

html = html.replace('&copy; 2025 Jiangsu Flower Smart Technology Co., Ltd. All rights reserved.', social_html)

# Scroll to top button near end
html = html.replace('</body>', '    <a href="#home" id="scrollTopBtn" class="scroll-top" aria-label="Scroll to top">&#8593;</a>\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Update completed successfully!")
