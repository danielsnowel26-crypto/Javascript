/* uni.js - Global University: ONE script for all 14 pages.
   Every feature checks that its elements exist, so it is safe on every page. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];


/* 1. Header: mobile menu, sticky shadow, active link, back-to-top */
const menu = $('.burger');
const nav = $('nav');

if (menu) {
    menu.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', open);
    });
}

const here = location.pathname.split('/').pop() || 'index.html';
$$('nav a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
});

const toTop = $('#up');
addEventListener('scroll', () => {
    $('.head').classList.toggle('scrolled', scrollY > 10);
    if (toTop) toTop.classList.toggle('show', scrollY > 400);
});
if (toTop) toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));


/* 2. Scroll reveal: elements with class "reveal" fade in when seen */
const seen = new IntersectionObserver(list => {
    list.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            seen.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
$$('.rise').forEach(el => seen.observe(el));

/* cards in the same grid appear one after another */
$$('.duo, .trio, .quad, .menu, .trip, .don').forEach(g => {
    [...g.children].forEach((c, i) => c.style.setProperty('--d', (i * 0.08) + 's'));
});


/* 3. Number counters (data-count="25000" data-suffix="+") */
$$('[data-count]').forEach(el => {
    const end = +el.dataset.count;
    const watch = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        watch.disconnect();
        let start;
        const step = t => {
            if (start === undefined) start = t;
            const p = Math.min((t - start) / 1400, 1);
            el.textContent = Math.floor(end * p).toLocaleString() + (el.dataset.suffix || '');
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    });
    watch.observe(el);
});


/* 4. Tabs: a button with data-tab="x" shows the pane with id="x" */
$$('[data-tabs]').forEach(box => {
    const tabs = $$('.pick', box);
    const panes = $$('.view', box);
    tabs.forEach(t => {
        t.addEventListener('click', () => {
            tabs.forEach(x => x.classList.toggle('on', x === t));
            panes.forEach(p => p.classList.toggle('on', p.id === t.dataset.tab));
        });
    });
});


/* 5. departments.html: click a department to load its overview */
const dept = {
    cs:   ['Computer Science', 'Software, AI, data science and cybersecurity for careers in technology.', 'Prof. A. Okafor', 'cs@globaluniversity.edu'],
    ee:   ['Electrical & Electronics Eng.', 'Power systems, electronics, control and telecommunications.', 'Dr. K. Bello', 'ee@globaluniversity.edu'],
    me:   ['Mechanical Engineering', 'Design, manufacturing, thermofluids and robotics.', 'Prof. L. Daniels', 'me@globaluniversity.edu'],
    ce:   ['Civil Engineering', 'Structures, transport, water and sustainable construction.', 'Dr. S. Musa', 'ce@globaluniversity.edu'],
    bio:  ['Biology', 'Cell biology, ecology, genetics and biomedical research.', 'Dr. E. Johnson', 'bio@globaluniversity.edu'],
    chem: ['Chemistry', 'Organic, analytical and materials chemistry.', 'Prof. S. Williams', 'chem@globaluniversity.edu'],
    math: ['Mathematics', 'Pure and applied mathematics and statistics.', 'Dr. T. Adeyemi', 'math@globaluniversity.edu'],
    eng:  ['English & Literature', 'Literature, linguistics and creative writing.', 'Dr. L. Davis', 'english@globaluniversity.edu']
};

$$('.dept button').forEach(b => {
    b.addEventListener('click', () => {
        const d = dept[b.dataset.d];
        if (!d) return;
        $$('.dept button').forEach(x => x.classList.toggle('on', x === b));
        $('#dname').textContent = d[0];
        $('#dinfo').textContent = d[1];
        $('#dchief').textContent = d[2];
        $('#dmail').textContent = d[3];
        $('#dmail').href = 'mailto:' + d[3];
        const card = $('#dbox');
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'fadeUp .5s both';
    });
});


/* 6. Live search and filters: faculty, library, gallery */
function liveSearch(input, items) {
    if (!input) return;
    input.addEventListener('input', () => {
        const q = input.value.toLowerCase();
        let found = 0;
        items.forEach(i => {
            const match = i.textContent.toLowerCase().includes(q);
            i.hidden = !match;
            if (match) found++;
        });
        const empty = $('#empty');
        if (empty) empty.style.display = found ? 'none' : 'block';
    });
}
liveSearch($('#fsearch'), $$('.crew'));
liveSearch($('#lsearch'), $$('.volume'));

/* faculty.html: click a staff member to read the profile */
$$('.crew').forEach(s => {
    s.addEventListener('click', () => {
        if (!$('#fname')) return;
        $$('.crew').forEach(x => x.classList.toggle('on', x === s));
        $('#fname').textContent = s.dataset.name;
        $('#frole').textContent = s.dataset.role;
        $('#fbio').textContent = s.dataset.bio;
    });
});

/* gallery.html: filter buttons */
$$('.sort .pick').forEach(t => {
    t.addEventListener('click', () => {
        $$('.sort .pick').forEach(x => x.classList.toggle('on', x === t));
        $$('.snap').forEach(s => {
            s.hidden = t.dataset.f !== 'all' && s.dataset.c !== t.dataset.f;
        });
    });
});


/* 7. gallery.html: lightbox (click a photo to enlarge, Esc or click to close) */
const box = $('#lightbox');
$$('.snap').forEach(s => {
    s.addEventListener('click', () => {
        const pic = s.querySelector('img');
        const loaded = pic && pic.complete && pic.naturalWidth;
        $('#lbpic').style.background = loaded
            ? `center / cover url("${pic.src}")`
            : 'linear-gradient(135deg, #1d4ed8, #7c4dff)';
        $('#lbtext').textContent = s.textContent.trim();
        box.classList.add('open');
    });
});
if (box) box.addEventListener('click', () => box.classList.remove('open'));
addEventListener('keydown', e => {
    if (e.key === 'Escape' && box) box.classList.remove('open');
});


/* 8. admission.html / contact.html: FAQ accordion */
$$('.ask button').forEach(b => {
    b.addEventListener('click', () => {
        const answer = b.nextElementSibling;
        const open = answer.classList.toggle('open');
        b.querySelector('i').className = open ? 'fa-solid fa-minus' : 'fa-solid fa-plus';
    });
});


/* 9. Forms: contact, alumni, newsletter (a form with data-form="success message") */
function showOk(form, text) {
    const ok = form.querySelector('.sent');
    ok.textContent = text;
    ok.style.display = 'block';
    form.reset();
    setTimeout(() => ok.style.display = 'none', 5000);
}

$$('form[data-form]').forEach(f => {
    f.addEventListener('submit', e => {
        e.preventDefault();
        let good = true;
        $$('[required]', f).forEach(i => {
            const err = i.parentElement.querySelector('.warn');
            let msg = '';
            if (!i.value.trim()) msg = 'This field is required.';
            else if (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value)) msg = 'Enter a valid email address.';
            if (err) err.textContent = msg;
            if (msg) good = false;
        });
        if (good) showOk(f, f.dataset.form);
    });
});

/* alumni.html: donate amount buttons */
$$('.gift .pick').forEach(t => {
    t.addEventListener('click', () => {
        $$('.gift .pick').forEach(x => x.classList.toggle('on', x === t));
        const give = $('#give');
        if (give) give.textContent = 'Donate ' + t.textContent;
    });
});


/* 10. admission.html: application tracker */
const track = $('#track');
if (track) {
    track.addEventListener('click', () => {
        const id = $('#trackid').value.trim();
        $('#tracked').textContent = id
            ? `Application ${id.toUpperCase()}: documents received, under review.`
            : 'Enter your application number first.';
    });
}


/* 11. index.html: rotating headline word and "who are you?" filter */
const swap = $('.swap');
if (swap) {
    const words = swap.dataset.words.split('|');
    let n = 0;
    setInterval(() => {
        swap.classList.add('out');
        setTimeout(() => {
            n = (n + 1) % words.length;
            swap.textContent = words[n];
            swap.classList.remove('out');
        }, 350);
    }, 2200);
}

$$('.quick .pick').forEach(c => {
    c.addEventListener('click', () => {
        $$('.quick .pick').forEach(x => x.classList.toggle('on', x === c));
        $$('.door').forEach(t => {
            t.hidden = c.dataset.a !== 'all' && t.dataset.a !== c.dataset.a;
        });
    });
});


/* 12. Every page: preloader, scroll progress bar, cookie notice */
addEventListener('load', () => {
    const loader = $('#loader');
    if (loader) setTimeout(() => loader.classList.add('done'), 350);
});

addEventListener('scroll', () => {
    const bar = $('#progress');
    if (!bar) return;
    const total = document.documentElement.scrollHeight - innerHeight || 1;
    bar.style.width = (scrollY / total * 100) + '%';
});

const cookie = $('#cookie');
if (cookie) {
    let agreed = false;
    try { agreed = localStorage.getItem('gu-cookie'); } catch (e) {}
    if (!agreed) setTimeout(() => cookie.classList.add('show'), 1500);
    $('#agree').addEventListener('click', () => {
        cookie.classList.remove('show');
        try { localStorage.setItem('gu-cookie', '1'); } catch (e) {}
    });
}


/* 13. portal.html: demo sign-in and sign-out */
const login = $('#login');
if (login) {
    login.addEventListener('submit', e => {
        e.preventDefault();
        let good = true;
        $$('[required]', login).forEach(i => {
            const err = i.parentElement.querySelector('.warn');
            const msg = i.value.trim() ? '' : 'This field is required.';
            err.textContent = msg;
            if (msg) good = false;
        });
        if (!good) return;
        $('#who').textContent = $('#sid').value.trim().toUpperCase();
        const dash = $('#dash');
        dash.hidden = false;
        dash.scrollIntoView({ behavior: 'smooth' });
    });
}
const logout = $('#logout');
if (logout) {
    logout.addEventListener('click', () => {
        $('#dash').hidden = true;
        login.reset();
        scrollTo({ top: 0, behavior: 'smooth' });
    });
}


/* 14. Every page: image slots. If a picture is missing, show the dashed
       "Add image" box (see section 22 in uni.css) so you know what to add. */
$$('.slot img').forEach(img => {
    const slot = img.parentElement;
    const missing = () => slot.classList.add('empty');
    img.addEventListener('error', missing);
    if (img.complete && !img.naturalWidth) missing();
});
