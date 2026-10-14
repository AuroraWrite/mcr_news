"use client";

import { useState, use } from "react";
import Link from "next/link";
import { getArticleBySlug, getOtherArticles, articles } from "@/data/articles";
import styles from "@/app/page.module.css";

export default function ArticleDetail({ params }) {
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;
  const article = getArticleBySlug(slug) || articles[0];
  const otherArticles = getOtherArticles(article.slug);

  const [isLoading, setIsLoading] = useState(false);

  const handleCryptoClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://www.criptovaluta.it";
    }, 5000);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header (Fanpage.it style with MCR NEWS Logo) */}
      <header className={styles.header} role="banner">
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <button className={styles.menuBtn} aria-label="Menu di navigazione" type="button">
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
            </button>
            <Link href="/" className={styles.logoLink} aria-label="MCR NEWS Home">
              <img
                src="/images/logo-white.png"
                alt="MCR NEWS Logo"
                className={styles.logoImg}
              />
            </Link>
          </div>

          <div className={styles.headerRight}>
            <button className={styles.abbonatiBtn} type="button">
              Abbonati
            </button>
            <button className={styles.bellBtn} aria-label="Notifiche" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className={styles.bellBadge}></span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Article Content Container */}
      <main className={styles.mainContainer} role="main">
        <article>
          {/* Breadcrumb / Back button */}
          <div style={{ padding: "0 16px 12px 16px" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#ff5500",
                textDecoration: "none"
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Torna alla Home</span>
            </Link>
          </div>

          {/* Article Category & Title */}
          <div style={{ padding: "0 16px 4px 16px" }}>
            <span style={{
              display: "inline-block",
              backgroundColor: "#ff5500",
              color: "#ffffff",
              fontSize: "11px",
              fontWeight: 800,
              padding: "3px 8px",
              borderRadius: "4px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: "10px"
            }}>
              {article.category || "CRONACA"}
            </span>
          </div>

          <h1 className={styles.articleTitle}>
            {article.title}
          </h1>

          {/* Date & Update info */}
          <div className={styles.dateRow}>
            <span>{article.date}</span>
            <span>·</span>
            <span>Aggiornato alle 20:15</span>
          </div>

          {/* Author info & Share Actions */}
          <div className={styles.authorRow}>
            <div className={styles.authorInfo}>
              <img
                src="/images/author-alessia.jpg"
                alt={article.author || "Redazione"}
                className={styles.authorAvatar}
              />
              <div className={styles.authorText}>
                <span className={styles.authorName}>Di {article.author || "Redazione"}</span>
              </div>
            </div>

            <div className={styles.shareActions}>
              <button className={styles.actionBtn} aria-label="Condividi articolo" type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
              <button className={styles.actionBtn} aria-label="Salva articolo" type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className={styles.featuredMedia}>
            <img
              src={article.image || article.thumb}
              alt={article.title}
              className={styles.featuredImg}
            />
          </div>

          {/* Lead Paragraph */}
          {article.lead && (
            <p className={styles.leadParagraph}>
              {article.lead}
            </p>
          )}

          {/* Body Paragraphs & Quotes */}
          {article.paragraphs?.map((p, idx) => {
            if (p.startsWith('«') || p.startsWith('"')) {
              return (
                <div key={idx} className={styles.quoteBox}>
                  {p}
                </div>
              );
            }
            return (
              <p key={idx} className={styles.bodyParagraph}>
                {p}
              </p>
            );
          })}

          {/* Notizie che non hai ancora letto Section */}
          <section className={styles.unreadSection} aria-label="Notizie che non hai ancora letto">
            <h2 className={styles.unreadHeading}>
              <span className={styles.unreadBadge}>
                <span className={styles.unreadBadgeTop}></span>
                <span className={styles.unreadBadgeBottom}></span>
              </span>
              NOTIZIE CHE NON HAI ANCORA LETTO
            </h2>

            <div className={styles.unreadList}>
              {articles.map((item) => (
                <Link
                  key={item.id}
                  href={`/articles/${item.slug}`}
                  className={styles.unreadCard}
                >
                  <div className={styles.unreadThumbWrap}>
                    <img
                      src={item.thumb}
                      alt={item.listTitle || item.title}
                      className={styles.unreadThumb}
                    />
                  </div>
                  <h3 className={`${styles.unreadTitle} ${item.isRed ? styles.unreadTitleRed : ""}`.trim()}>
                    {item.listTitle || item.title}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Pulsante altre notizie sulle criptovalute */}
            <div className={styles.cryptoBtnWrap}>
              <button
                type="button"
                onClick={handleCryptoClick}
                disabled={isLoading}
                className={styles.cryptoBtn}
              >
                {isLoading && <span className={styles.spinner}></span>}
                <span>
                  {isLoading ? "Caricamento in corso..." : "altre notizie sulle criptovalute"}
                </span>
              </button>
            </div>
          </section>
        </article>
      </main>

      {/* 3. Footer (Fanpage.it High-Fidelity Dark Footer) */}
      <footer className={styles.footer} role="contentinfo">
        <div className={styles.footerInner}>
          {/* Social Circle Icons */}
          <div className={styles.socialRow}>
            {/* Facebook */}
            <button className={styles.socialBtn} aria-label="Facebook" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            {/* Instagram */}
            <button className={styles.socialBtn} aria-label="Instagram" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </button>

            {/* X / Twitter */}
            <button className={styles.socialBtn} aria-label="X" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>

            {/* YouTube */}
            <button className={styles.socialBtn} aria-label="YouTube" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </button>

            {/* Telegram */}
            <button className={styles.socialBtn} aria-label="Telegram" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <img
            src="/images/logo-white.png"
            alt="MCR NEWS"
            className={styles.footerLogo}
          />

          {/* Contact / Segnalazioni Box */}
          <div className={styles.contactCard}>
            <p className={styles.contactTitle}>
              Per inviarci segnalazioni, foto e video puoi contattarci tramite:
            </p>
            <div className={styles.contactBtnRow}>
              <button type="button" className={styles.contactBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                MAIL
              </button>
              <button type="button" className={styles.contactBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.909 1.455 5.518 3.736 7.204v3.538l3.39-1.862c.908.252 1.874.388 2.874.388 5.523 0 10-4.145 10-9.268C22 6.145 17.523 2 12 2zm1.034 12.448l-2.617-2.793-5.105 2.793 5.613-5.957 2.682 2.793 5.04-2.793-5.613 5.957z"/>
                </svg>
                FACEBOOK
              </button>
            </div>
          </div>

          {/* Editorial / Court Registration Notice */}
          <p className={styles.legalText}>
            MCR News è una testata giornalistica registrata presso il Tribunale di Roma n. 142 del 18/09/2021.
          </p>

          <p className={styles.issnText}>
            ISSN <span className={styles.issnLink}>3035-3475</span>
          </p>

          <p className={styles.photoRightsText}>
            Ove non espressamente indicato, tutti i diritti di sfruttamento ed utilizzazione economica del materiale fotografico presente sul sito MCR News sono da intendersi di proprietà dei fornitori, LaPresse e Getty Images.
          </p>

          {/* App Store & Google Play Buttons */}
          <div className={styles.appBadgeRow}>
            <button type="button" className={styles.appStoreBtn}>
              <svg width="20" height="24" viewBox="0 0 170 170" fill="currentColor">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.1-9.46-10.9-20.24-14.39-32.33-3.48-12.09-5.23-23.77-5.23-35.04 0-14.34 3.75-26.32 11.26-35.94 7.5-9.62 17.07-14.54 28.7-14.76 4.79 0 10.33 1.34 16.63 4.02 6.3 2.68 10.37 4.08 12.21 4.19 1.57-.11 5.96-1.57 13.16-4.38 7.21-2.82 13.38-4.08 18.52-3.78 13.92.76 25.07 5.75 33.45 14.97-12.18 7.39-18.17 17.51-17.96 30.34.22 10.11 4.13 18.57 11.75 25.37 7.61 6.8 16.59 10.74 26.92 11.82-2.17 6.74-4.89 13.91-8.15 21.51zM119.22 33.09c0-7.39 2.66-14.28 7.97-20.67 5.32-6.39 11.84-10.66 19.57-12.82.33 1.3.49 2.61.49 3.91 0 7.39-2.78 14.24-8.33 20.55-5.55 6.31-12.18 10.33-19.89 12.07-.11-.98-.17-1.99-.17-3.04z"/>
              </svg>
              <span>App Store</span>
            </button>

            <button type="button" className={styles.appStoreBtn}>
              <svg width="18" height="20" viewBox="0 0 512 512" fill="none">
                <path d="M48.7 18.2C45.3 22 43.4 27.6 43.4 34.9v442.2c0 7.3 1.9 12.9 5.3 16.7l2.5 2.5 247.9-247.9v-5.8L51.2 15.7l-2.5 2.5z" fill="#00E676"/>
                <path d="M381.8 321.4l-82.7-82.7v-5.8l82.7-82.7 1.9 1.1 98 55.7c27.9 15.9 27.9 41.8 0 57.7l-98 55.7-1.9 1z" fill="#FFD600"/>
                <path d="M299.1 238.7L51.2 496.3c9.1 9.6 24.2 10.7 41.3 1.1l289.3-164.4-82.7-94.3z" fill="#FF1744"/>
                <path d="M299.1 273.3l82.7-94.3L92.5 14.6C75.4 5 60.3 6.1 51.2 15.7l247.9 257.6z" fill="#00B0FF"/>
              </svg>
              <span>Google Play</span>
            </button>
          </div>

          {/* Thin Divider */}
          <div className={styles.footerDivider}></div>

          {/* Publisher Network Brand */}
          <div className={styles.networkBrand}>
            <span>ciaopeople</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.18-1.31C8.61 21.53 10.25 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
            </svg>
          </div>
        </div>
      </footer>

      {/* 4. Loading Overlay (5 Secondi) */}
      {isLoading && (
        <div className={styles.loadingOverlay} aria-live="assertive">
          <div className={styles.loadingBox}>
            <div className={styles.globalSpinner}></div>
            <span className={styles.loadingText}>Caricamento ultimi aggiornamenti...</span>
          </div>
        </div>
      )}
    </div>
  );
}
