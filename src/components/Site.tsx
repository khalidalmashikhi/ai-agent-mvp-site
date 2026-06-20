'use client';

import { useMemo, useState } from 'react';
import { content, Lang } from '@/data/content';
import AIAssistant from './AIAssistant';

export default function Site() {
  const [lang, setLang] = useState<Lang>('ar');
  const t = content[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const isAr = lang === 'ar';

  const navAnchors = useMemo(() => ['#home', '#program', '#journey', '#governorates', '#experts', '#faq'], []);

  return (
    <main className="site" dir={dir} lang={lang}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="navbar">
        <a className="brand" href="#home" aria-label="AI Agent-MVP Home">
          <img
  src="/logos/logo.png"
  alt="AI Agent-MVP"
  className="brand-logo"
/>
          <span>
            <strong>AI Agent-MVP</strong>
            <small>{isAr ? 'النموذج الأولي لتطوير AI Agent-MVP' : 'Prototype Development Program'}</small>
          </span>
        </a>
        <div className="navlinks">
          {t.nav.map((item, index) => (
            <a key={item} href={navAnchors[index]}>{item}</a>
          ))}
        </div>
        <div className="actions">
          <button className="lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label="Switch language">
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <a className="button button-small" href="#register">{t.register}</a>
        </div>
      </nav>

    <section id="home" className="hero section">
  <div className="mesh" />

  <div className="hero-content">
    <p className="eyebrow">{t.heroEyebrow}</p>

    <img
      src="/logos/logo.png"
      alt="AI Agent-MVP"
      className="hero-logo"
    />

    <h1>{t.title}</h1>

    <h2>{t.subtitle}</h2>

    <p className="hero-text">{t.hero}</p>

    <div className="partner-branding">
      <span className="partners-label">
        {isAr
          ? 'بالتعاون مع هيئة تنمية المؤسسات الصغيرة والمتوسطة ومركز الشباب'
          : 'In collaboration with SMEs Development Authority & Youth Center'}
      </span>

      <img
        src="/logos/MVP%20LOGO%20RM.png"
        alt="هيئة تنمية المؤسسات الصغيرة والمتوسطة ومركز الشباب"
        className="official-logos"
      />
    </div>

    <div className="hero-actions">
      <a className="button" href="#program">{t.explore}</a>
      <a className="button button-ghost" href="#register">{t.register}</a>
    </div>
  </div>
</section>

      <section className="stats wrap" aria-label="Program statistics">
        {t.stats.map(([number, label]) => (
          <article className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section id="program" className="section wrap split">
        <div>
          <p className="eyebrow">{isAr ? 'عن البرنامج' : 'Program'}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <p className="lead">{t.about}</p>
      </section>

      <section className="wrap two-columns">
        <Panel title={t.goalsTitle} items={t.goals} />
        <Panel title={t.outcomesTitle} items={t.outcomes} />
      </section>

      <section id="journey" className="section wrap">
        <div className="section-head">
          <p className="eyebrow">{isAr ? 'من الفكرة إلى النموذج الأولي' : 'From Idea to MVP'}</p>
          <h2>{t.journeyTitle}</h2>
        </div>
        <div className="timeline">
          {t.journey.map(([num, title, text]) => (
            <article className="timeline-card" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap platform">
        <div className="platform-copy">
          <p className="eyebrow">Digital Program Platform</p>
          <h2>{t.platformTitle}</h2>
          <p>{t.platform}</p>
        </div>
        <div className="platform-grid">
          {t.platformItems.map((item, index) => (
            <div className="platform-item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="governorates" className="section wrap governorates">
        <div className="section-head">
          <p className="eyebrow">Oman</p>
          <h2>{t.governoratesTitle}</h2>
          <p>{t.governoratesText}</p>
        </div>
        <div className="gov-layout">
          <div className="oman-map" aria-hidden="true">
            <div className="map-line" />
            <span>11</span>
            <small>{isAr ? 'محافظة' : 'Governorates'}</small>
          </div>
          <div className="gov-list">
            {t.governorates.map((g, i) => <span key={g}>{String(i + 1).padStart(2, '0')} · {g}</span>)}
          </div>
        </div>
      </section>

      <section id="experts" className="section wrap">
        <div className="section-head">
          <p className="eyebrow">{isAr ? 'الخبراء والموجهون' : 'Experts & Mentors'}</p>
          <h2>{t.expertsTitle}</h2>
          <p>{t.expertsText}</p>
        </div>
        <div className="experts-grid">
          {t.experts.map(([id, field, detail], index) => (
            <article className="expert-card" key={id}>
              <div
  className={`expert-avatar avatar-${index % 2 === 0 ? 'male' : 'female'}`}
  aria-hidden="true"
/>
              <span>{id}</span>
              <h3>{field}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section wrap faq">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="register" className="section wrap cta">
        <p className="eyebrow">Registration</p>
        <h2>{t.finalCtaTitle}</h2>
        <p>{t.finalCtaText}</p>
        <a className="button" href="mailto:Tenders@yc.om?subject=AI Agent-MVP">{t.register}</a>
      </section>

      <footer className="footer wrap">
        <img
  src="/logos/logo.png"
  alt="AI Agent-MVP"
  className="brand-logo"
/>
        <strong>AI Agent-MVP</strong>
        <p>{t.footer}</p>
        <small>© 2026</small>
      </footer>
      <AIAssistant />
    </main>
  );
}

function Panel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="panel">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 64 64" role="img" aria-label="AI Agent-MVP logo mark">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M32 5 56 18.8v26.4L32 59 8 45.2V18.8L32 5Z" fill="none" stroke="url(#g)" strokeWidth="3" />
      <path d="M20 41 31.5 16 44 41M25 32h14" fill="none" stroke="url(#g)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="48" cy="22" r="3" fill="#06B6D4" />
      <circle cx="16" cy="44" r="3" fill="#7C3AED" />
    </svg>
  );
}
