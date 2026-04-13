/* NAV SCROLL */
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 60);
        });

        /* HAMBURGER */
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
        function closeMobile() {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        }

        /* FORM SUBMIT */
        function submitForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            if (!name || !email) { alert('Please enter your name and email address.'); return; }
            alert('Thank you, ' + name + '! We\'ve received your enquiry and will reply within 24 hours.');
            ['name', 'email', 'product', 'units', 'message'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
        }

        /* PRODUCT DATA */
        const products = {
            e3: {
                model: 'E3', name: 'Orbit Cabin — 2 Floor Flagship',
                img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80',
                specs: [
                    ['Floor 1 Size', 'L 11,500 × W 3,300 × H 3,200 mm'],
                    ['Floor 2 Size', 'L 8,500 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '50 ㎡'], ['Floors', '2'], ['Guests', '3–4 people'], ['Weight', '9,000 kg']
                ]
            },
            e5: {
                model: 'E5', name: 'Nova Pod — Compact Single Floor',
                img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80',
                specs: [
                    ['Size', 'L 8,500 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '28 ㎡'], ['Floors', '1'], ['Guests', '2 people'], ['Weight', '6,000 kg']
                ]
            },
            e7: {
                model: 'E7', name: 'Stellar Lodge — Spacious Single',
                img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&q=80',
                specs: [
                    ['Size', 'L 11,500 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '38 ㎡'], ['Floors', '1'], ['Guests', '2–4 people'], ['Weight', '7,000 kg']
                ]
            },
            f5: {
                model: 'F5', name: 'Dune Pod — Desert Edition',
                img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80',
                specs: [
                    ['Size', 'L 8,500 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '28 ㎡'], ['Floors', '1'], ['Guests', '2 people'], ['Weight', '6,000 kg']
                ]
            },
            f7: {
                model: 'F7', name: 'Ridge Cabin — Mountain Edition',
                img: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
                specs: [
                    ['Size', 'L 11,500 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '38 ㎡'], ['Floors', '1'], ['Guests', '2–4 people'], ['Weight', '7,000 kg']
                ]
            },
            dbl: {
                model: 'ZENITH', name: 'Zenith Twin — Double Layer Cluster',
                img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80',
                specs: [
                    ['Configuration', '3×3 units'],
                    ['Size per unit', 'L 11,500×3 × W 3,200×3 × H 3,200×3 mm'],
                    ['Floors', '2'], ['Guests', '4 people'], ['Weight', '7,000 kg']
                ]
            },
            n7: {
                model: 'N7', name: 'Forest Cabin — Apple Series',
                img: 'https://images.unsplash.com/photo-1544015759-237f4042a8e5?w=900&q=80',
                specs: [
                    ['Size', 'L 11,500 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '38 ㎡'], ['Guests', '2–4 people'], ['Weight', '7,000 kg'],
                    ['Customisable', 'Layout, exterior & interior']
                ]
            },
            h7: {
                model: 'H7', name: 'Meadow Pod — Apple Series',
                img: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=900&q=80',
                specs: [
                    ['Size', 'L 11,500 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '38 ㎡'], ['Guests', '2–4 people'], ['Weight', '7,500 kg'],
                    ['Customisable', 'Layout, exterior & interior']
                ]
            },
            h3: {
                model: 'H3', name: 'Steam Pod — Sauna Edition',
                img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80',
                specs: [
                    ['Size', 'L 5,800 × W 3,300 × H 3,200 mm'],
                    ['Floor Area', '20 ㎡'], ['Guests', '2 people'], ['Weight', '4,500 kg'],
                    ['Use Case', 'Sauna · Wellness · Spa']
                ]
            }
        };

        function openModal(key) {
            const p = products[key];
            if (!p) return;
            document.getElementById('modalImg').style.background = `url('${p.img}') center/cover`;
            document.getElementById('modalModel').textContent = p.model;
            document.getElementById('modalName').textContent = p.name;
            document.getElementById('modalSpecs').innerHTML = p.specs.map(([k, v]) =>
                `<div class="modal-spec-item"><div class="modal-spec-label">${k}</div><div class="modal-spec-val">${v}</div></div>`
            ).join('');
            document.getElementById('modalOverlay').classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('open');
            document.body.style.overflow = '';
        }
        function closeModalOutside(e) {
            if (e.target === document.getElementById('modalOverlay')) closeModal();
        }
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
// --- Translation Logic ---
const zhTranslations = {
    "Products": "产品展示",
    "Customize": "定制服务",
    "About Us": "关于我们",
    "Blog": "博客资讯",
    "Contact": "联系我们",
    "Get a Quote": "获取报价",
    "Smart Modular Living · Changzhou, China": "智能模块化居住 · 中国常州",
    "Capsule Homes": "太空舱房屋",
    "Delivered Ready": "成品交付",
    "to Live In.": "即刻入住。",
    "Factory-finished capsule houses for resorts, glamping, residential, and commercial projects. Smart controls built in. Shipped anywhere.": "为度假村、奢华露营、住宅和商业项目提供工厂定制太空舱房屋。内置智能控制，全球配送。",
    "Explore Products": "探索产品",
    "Scroll": "滚动",
    "Capsule Models": "太空舱型号",
    "Factory Finished": "工厂完工",
    "Smart": "智能",
    "Home Built-In": "全屋智能",
    "Full": "全套",
    "Interior Fit-Out": "精装交付",
    "Global": "全球",
    "Shipping": "物流配送",
    "Our Products": "我们的产品",
    "Space Capsule House Lineup": "太空舱房屋系列",
    "Every model ships fully furnished with smart controls, panoramic glass, and a complete interior. Click any card to see full specs.": "全系产品标配智能控制、全景玻璃和全套内饰。点击卡片查看详细配置。",
    "Orbit Cabin — 2 Floor Flagship": "星轨舱 — 双层旗舰款",
    "Floor area": "建筑面积",
    "Floors": "楼层",
    "Guests": "入住人数",
    "Weight": "重量",
    "View Details →": "查看详情 →",
    "Nova Pod — Compact Single Floor": "新星舱 — 紧凑平层款",
    "Stellar Lodge — Spacious Single": "星光舱 — 宽敞平层款",
    "Dune Pod — Desert Edition": "沙丘舱 — 沙漠特装版",
    "Ridge Cabin — Mountain Edition": "山峦舱 — 极地山岳版",
    "Zenith Twin — Double Layer Cluster": "极点双子 — 双层聚合体",
    "Configuration": "模块配置",
    "Also Available": "更多选择",
    "Apple Cabin & Specialty Models": "苹果舱及特色型号",
    "Forest Cabin — Apple Series": "森林舱 — 苹果系列",
    "Meadow Pod — Apple Series": "星野舱 — 苹果系列",
    "Steam Pod — Sauna Edition": "蒸汽舱 — 桑拿专版",
    "Included in every unit": "全系标配",
    "What You See Is What You Get": "所见即所得",
    "Full Interior": "精装内饰",
    "Eco wood floors, marble bathroom, custom vanity, bar area — completely finished.": "环保木地板、大理石卫浴、定制洗漱台、吧台区域 —— 完全精装。",
    "Smart Home": "智能家居",
    "Card-access power, voice control, app door lock, multi-scene lighting — all standard.": "插卡取电、语音控制、APP门锁、多场景照明 —— 全系标配。",
    "Ready in Days": "快速交付",
    "Factory finished and shipped ready. No on-site construction. Move in immediately.": "工厂预制，成品发货。无需现场施工，落地即住。",
    "Weather-Proof": "全天候无忧",
    "Galvanised steel frame, fluorocarbon aluminium shell, tempered glass — built to last outdoors.": "镀锌钢骨架、氟碳铝合金外壳、钢化玻璃 —— 专为户外长久使用打造。",
    "Customization": "专属定制",
    "Built to": "量身",
    "Your Brief": "打造",
    "Our standard models are the starting point. We adjust the layout, exterior finish, interior configuration, and use case to match your project — from a resort glamping pod to a branded tea room.": "标准化产品只是起点。我们可以根据您的项目需求调整布局、外观、内饰及使用场景——从度假露营舱到品牌茶室均可定制。",
    "Layout & Floor Plan": "空间布局",
    "Room divisions, open-plan vs. partitioned, double-layer clusters — all adjustable.": "房间分隔、开放式或独立空间、双层组合 —— 均可灵活调整。",
    "Exterior Design": "外观设计",
    "Custom colours, branded shell panels, themed shapes (Shark Capsule, Apple Cabin, and more).": "定制颜色、品牌外壳面板、主题造型（鲨鱼舱、苹果舱等）。",
    "Interior Fit-Out": "内饰精装",
    "Flooring, tile selection, vanity style, lighting packages, furniture layout — your choice.": "地板、瓷砖、洗漱台样式、照明包、家具布局 —— 由您定义。",
    "Use Case": "应用场景",
    "Glamping · Residential · Commercial · Sauna & Wellness · Tea Room · Pop-up Retail.": "奢华露营 · 住宅 · 商业 · 桑拿康养 · 茶室 · 快闪零售。",
    "Discuss Your Project →": "探讨您的项目 →",
    "Custom — Shark Capsule & Tea Room builds available": "定制 — 支持鲨鱼舱与茶室建造",
    "Jiangsu Flower Smart Technology Co., Ltd": "江苏花儿智能科技有限公司",
    "We design, manufacture, and deliver fully finished capsule homes from our factory in Changzhou, Jiangsu, China. Every unit leaves our facility complete, furnished, and ready to live in the moment it arrives on site.": "我们位于中国江苏常州的工厂，集设计、制造、交付为一体。每一台太空舱房屋出厂时均为成品，内置家具及配套设施，落地即可居住。",
    "Our team covers the full pipeline — research & development, precision manufacturing, and both domestic and international sales networks. We work with resort developers, glamping operators, residential buyers, and commercial clients worldwide.": "从研发设计、精密制造到覆盖国内外的销售网络，我们团队提供全流程服务。我们的客户遍布全球，包括度假村开发商、露营地运营商、个人买家及各类商业客户。",
    "Factory-finished quality.": "工厂级品质。",
    "No on-site construction surprises — what you see in the showroom is what arrives.": "告别施工现场的不确定性 —— 展厅所见即最终所得。",
    "Smart by default.": "标配智能控制。",
    "Smart home technology is standard on every model, not an add-on.": "智能家居科技全系标配，而非选装。",
    "Fully customisable.": "支持深度定制。",
    "From a standard shell to a fully themed bespoke build — we match your brief.": "从标准外壳到全套主题深度定制 —— 我们精准匹配您的需求。",
    "Global export ready.": "全球出口保障。",
    "We ship internationally and support international clients end to end.": "提供国际物流配送，提供端到端的国际客户服务支持。",
    "Get in Touch": "联系我们",
    "From the Founders": "创始人视点",
    "Honest writing about why we build this way, what problem we're solving, and where modular living is headed.": "真实分享我们的建造理念、致力于解决的行业痛点，以及模块化居住的未来走向。",
    "Founder's Note · Vision": "创始人手记 · 愿景",
    "Why we build in a factory, not on a construction site": "为什么我们选择在工厂造房，而不是建筑工地",
    "Traditional construction is slow and impossible to scale. We asked: what if a quality home could be manufactured like a precision product?": "传统建筑耗时长且难以规模化。我们在想：如果能像制造精密工业品一样制造优质住宅呢？",
    "Read more →": "阅读全文 →",
    "Industry · Hospitality": "行业 · 文旅",
    "The demand for resort accommodation is growing faster than builders can supply it": "度假住宿需求正以超越传统建造速度的速度爆发",
    "Tourism is recovering globally. Capsule homes deploy in days — here's why that changes everything for resort developers.": "全球旅游业加速复苏。太空舱能实现数日内落地 —— 这正是其颠覆度假村开发的原因。",
    "Design Story · Custom": "设计故事 · 定制",
    "From standard shell to shark capsule — how a custom build works": "从标准框架到专属鲨鱼舱 —— 揭秘定制建造全流程",
    "A client brief becomes a finished themed capsule home. Walk through a real project from concept to delivery.": "从客户诉求到落成的主题太空舱房屋。带您走过一个真实项目从概念到交付的每一环。",
    "Product enquiries, custom project briefs, or general questions — we aim to reply within 24 hours.": "产品咨询、定制项目需求或一般疑问 —— 我们承诺在24小时内给予答复。",
    "Email": "电子邮箱",
    "Phone / WhatsApp": "电话 / WhatsApp",
    "Address": "公司地址",
    "Changzhou, Jiangsu, China": "中国，江苏，常州",
    "Send an Enquiry": "发送询价",
    "Your Name": "您的姓名",
    "Email Address": "邮箱地址",
    "Product Interest": "意向产品",
    "Number of Units": "需求数量",
    "Tell us about your project": "告诉我们您的项目需求",
    "Send Enquiry →": "发送询价 →",
    "We reply within 24 hours · All enquiries are confidential": "我们将在24小时内回复 · 所有询价信息将严格保密",
    "More Models": "更多型号",
    "Company": "公司",
    "Jiangsu Flower Smart Technology Co., Ltd — modular capsule homes manufactured in Changzhou, Jiangsu, China.": "江苏花儿智能科技有限公司 —— 源自中国常州的模块化太空舱智造专家。",
    "© 2025 Jiangsu Flower Smart Technology Co., Ltd. All rights reserved.": "© 2025 江苏花儿智能科技有限公司 版权所有。",
    "3–4 people": "3–4 人",
    "2 people": "2 人",
    "2–4 people": "2–4 人",
    "4 people": "4 人"
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    
    // Update button text
    const btn = document.getElementById('langToggle');
    const mobileBtn = document.getElementById('langToggleMobile');
    const text = currentLang === 'en' ? '中文' : 'EN';
    if (btn) btn.textContent = text;
    if (mobileBtn) mobileBtn.textContent = text;

    // Traverse all text nodes and replace
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while(node = walker.nextNode()) {
        if(node.parentElement && (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE')) continue;
        
        let textVal = node.nodeValue;
        let trimText = textVal.trim();
        if(!trimText) continue;

        // Store original text
        if(currentLang === 'zh') {
            if(!node.originalText) {
                node.originalText = textVal;
            }
            if(zhTranslations[trimText]) {
                node.nodeValue = textVal.replace(trimText, zhTranslations[trimText]);
            }
        } else {
            // Revert to English
            if(node.originalText) {
                node.nodeValue = node.originalText;
            }
        }
    }

    // Special handlers for placeholders
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
        let ph = input.getAttribute('placeholder');
        if (currentLang === 'zh') {
            if (!input.dataset.origPh) input.dataset.origPh = ph;
            if (ph === 'Full name') input.setAttribute('placeholder', '全名');
            if (ph === 'you@email.com') input.setAttribute('placeholder', 'you@email.com');
            if (ph === 'e.g. 5–10') input.setAttribute('placeholder', '例如：5–10套');
            if (ph.startsWith('Location, use case')) input.setAttribute('placeholder', '项目地点、使用场景（度假村、露营、住宅等）、时间规划、预算范围以及其他特殊要求...');
        } else {
            if (input.dataset.origPh) input.setAttribute('placeholder', input.dataset.origPh);
        }
    });

    // Special handler for <select> options
    const selectOptions = document.querySelectorAll('select option');
    selectOptions.forEach(opt => {
        let textVal = opt.textContent.trim();
        if (currentLang === 'zh') {
            if (!opt.dataset.origText) opt.dataset.origText = textVal;
            if (textVal === 'Select a model...') opt.textContent = '请选择型号...';
            if (textVal === 'Custom / Bespoke Build') opt.textContent = '个性化定制 / 商业定制';
        } else {
            if (opt.dataset.origText) opt.textContent = opt.dataset.origText;
        }
    });
}


/* ═══════════════════════════════
   PREMIUM INTERACTIONS
═══════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
    
    // 2. Setup 3D Tilt Glare Dynamically
    document.querySelectorAll('.product-card').forEach(card => {
        const glareContainer = document.createElement('div');
        glareContainer.className = 'glare-container';
        const glare = document.createElement('div');
        glare.className = 'glare';
        glareContainer.appendChild(glare);
        card.appendChild(glareContainer);
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8; // max 8 deg tilt
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Move glare
            glare.style.transform = `translate(${x - rect.width}px, ${y - rect.height}px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            glare.style.transform = `translate(0px, 0px)`;
        });
    });

    
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

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});
