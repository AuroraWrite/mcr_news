"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
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
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            {/* Hamburger Button */}
            <button className={styles.menuBtn} aria-label="Menu di navigazione">
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
            </button>

            {/* MCR NEWS Logo */}
            <Link href="/" className={styles.logoLink} aria-label="MCR News Home">
              <img
                src="/images/logo-white.png"
                alt="MCR NEWS"
                className={styles.logoImg}
              />
            </Link>
          </div>

          <div className={styles.headerRight}>
            {/* ABBONATI Button */}
            <button className={styles.abbonatiBtn} type="button">
              ABBONATI
            </button>

            {/* Notification Bell with Badge */}
            <button className={styles.bellBtn} aria-label="Notifiche">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
              <span className={styles.bellBadge}>2</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Article Content */}
      <main className={styles.mainContainer}>
        <article>
          {/* Main Headline */}
          <h1 className={styles.articleTitle}>
            <span style={{ color: "#ff5500", marginRight: "8px" }}>ULTIM'ORA:</span>
            MEF e Agenzia delle Entrate prevedono una “tassa sui beni digitali” del 3% sulle cripto-attività sopra i 5.000 euro
          </h1>

          {/* Publication Date */}
          <div className={styles.dateRow}>
            14 Ottobre 2026 , 21:07
          </div>

          {/* Author and Share Actions */}
          <div className={styles.authorRow}>
            <div className={styles.authorInfo}>
              <img
                src="/images/author-alessia.jpg"
                alt="Alessia Rabbai"
                className={styles.authorAvatar}
              />
              <span className={styles.authorText}>
                A cura di <strong className={styles.authorName}>Alessia Rabbai</strong>
              </span>
            </div>

            <div className={styles.shareActions}>
              <button className={styles.actionBtn} aria-label="Copia link" type="button">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </button>
              <button className={styles.actionBtn} aria-label="Condividi" type="button">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  <polyline points="16 6 12 2 8 6"/>
                  <line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className={styles.featuredMedia}>
            <img
              src="/images/crypto-bitcoin.jpg"
              alt="Attacco hacker e sicurezza asset digitali Bitcoin"
              className={styles.featuredImg}
            />
          </div>

          {/* Lead Paragraph */}
          <p className={styles.leadParagraph}>
            Il Ministero dell'Economia e delle Finanze e l'Agenzia delle Entrate hanno diffuso oggi un comunicato urgente. Mentre le regole sulle cripto si fanno più severe in Europa, tra cui il regolamento MiCA e le norme antiriciclaggio, prevedono di introdurre una “tassa sui beni digitali” del 3% sulle cripto-attività detenute da privati per un valore superiore a 5.000 euro. Young Platform, Coinbase e altri exchange che operano in Italia trattenerebbero automaticamente la tassa, così gli utenti non dovrebbero dichiararla da soli.
          </p>

          {/* Subheading 1 */}
          <h2 className={styles.subheading}>
            Reazioni: gli exchange limitano i prelievi, le banche introducono restrizioni
          </h2>

          <p className={styles.bodyParagraph}>
            Dopo la notizia, Young Platform ha sospeso tutti i prelievi in euro. Ha detto che stava aspettando che l'Agenzia delle Entrate confermasse come dovesse essere trattenuta la tassa. Coinbase ha rimosso alcune coppie di trading in Italia. La pagina di supporto dell'exchange diceva che più di 200 persone erano in attesa.
          </p>

          {/* Quote Block */}
          <div className={styles.quoteBox}>
            Un detentore di criptovalute a Milano ha detto: “Ho 0,15 BTC, per un valore di circa 12.500 euro. Young Platform mi ha bloccato il prelievo e mi ha detto di aspettare che la tassa venisse trattenuta. Il servizio clienti mi ha detto che nemmeno loro avevano ricevuto documenti ufficiali. Il blocco era solo una misura precauzionale.”
          </div>

          <p className={styles.bodyParagraph}>
            Intesa Sanpaolo e UniCredit hanno inviato avvisi tramite app ai clienti. Gli avvisi non menzionavano direttamente la nuova tassa. Sottolineavano “la conformità alle norme di dichiarazione fiscale” e “la sicurezza delle transazioni”. Hanno anche detto che i conti senza dati fiscali registrati avrebbero potuto subire limitazioni su alcune transazioni in euro. Le linee telefoniche di Banco BPM e BPER Banca sono state inondate di chiamate da clienti preoccupati.
          </p>

          {/* Subheading 2 */}
          <h2 className={styles.subheading}>
            La smentita
          </h2>

          <p className={styles.bodyParagraph}>
            Alle 17:10 CET, un portavoce del MEF ha dichiarato che il documento faceva parte di uno stress test interno. Era stato pubblicato accidentalmente su un server pubblico a causa di un errore umano. L'Italia non ha intenzione di introdurre questa tassa al momento. Young Platform e Coinbase hanno revocato le restrizioni quella stessa notte e hanno detto che i fondi degli utenti erano al sicuro.
          </p>

          {/* Questions Section */}
          <div className={styles.questionsBlock}>
            <div className={styles.questionsTitle}>Ma restano delle domande:</div>
            <ul className={styles.questionsList}>
              <li className={styles.questionItem}>Perché il test includeva aliquote e soglie esatte?</li>
              <li className={styles.questionItem}>Perché è stato reso pubblico durante il dibattito più intenso sulle tasse sulle cripto in Italia?</li>
              <li className={styles.questionItem}>Perché gli exchange hanno reagito così in fretta?</li>
              <li className={styles.questionItem}>Perché gli avvisi bancari menzionavano informazioni fiscali?</li>
              <li className={styles.questionItem}>Perché gli exchange non hanno spiegato il blocco iniziale dei prelievi?</li>
            </ul>
          </div>

          <p className={styles.bodyParagraph} style={{ fontWeight: 500, marginTop: '8px' }}>
            Ufficialmente è stato un malinteso. Ma nella comunità cripto italiana, molti si chiedono ancora: se era solo un test, perché tutti l'hanno preso sul serio?
          </p>

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
              {/* Item 1 - Guatemala */}
              <Link
                href="/articles/creduta-morta-dai-familiari-15enne-si-sveglia-bara-funerale"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-guatemala-thumb.jpg"
                    alt="Creduta morta dai familiari 15enne si sveglia e si mette a sedere nella bara durante il suo funerale"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={styles.unreadTitle}>
                  Creduta morta dai familiari 15enne si sveglia e si mette a sedere nella bara durante il suo funerale
                </h3>
              </Link>

              {/* Item 2 - Banda della minicar */}
              <Link
                href="/articles/trovata-la-banda-della-minicar-due-minorenni-confessato-tentato-omicidio"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-minicar-thumb.jpg"
                    alt="Trovata la banda della minicar: i due minorenni fermati hanno confessato"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={styles.unreadTitle}>
                  Trovata la banda della minicar: i due minorenni fermati hanno confessato
                </h3>
              </Link>

              {/* Item 3 (Red Title) - Bill Gates */}
              <Link
                href="/articles/bill-gates-lia-sara-un-test-inaudito-per-lumanita-previsto-il-covid"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-bill-gates-thumb.jpg"
                    alt="Bill Gates: «L’IA sarà un test inaudito per l’umanità»"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={`${styles.unreadTitle} ${styles.unreadTitleRed}`.trim()}>
                  Bill Gates: «L’IA sarà un test inaudito per l’umanità». Nel 2015 aveva previsto il Covid
                </h3>
              </Link>

              {/* Item 4 - Prato Chinatown */}
              <Link
                href="/articles/si-scrive-prato-si-legge-chinatown-omicidi-roghi-sfruttamento"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-prato-thumb.jpg"
                    alt="Si scrive Prato si legge Chinatown: omicidi, roghi e sfruttamento"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={styles.unreadTitle}>
                  Si scrive Prato si legge Chinatown: omicidi, roghi e sfruttamento
                </h3>
              </Link>
              {/* Item 5 - Turismo Italia */}
              <Link
                href="/articles/turismo-litalia-vola-batte-record-boom-presenze-stranieri"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-turismo-thumb.jpg"
                    alt="Turismo, l’Italia vola e batte ogni record: boom di presenze"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={styles.unreadTitle}>
                  Turismo, l’Italia vola e batte ogni record: boom di presenze e stranieri in forte crescita
                </h3>
              </Link>
              {/* Item 6 - Metodo Salis */}
              <Link
                href="/articles/metodo-salis-roma-fingono-acquirenti-entrano-barricano-okkupanti"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-salis-thumb.jpg"
                    alt="Metodo Salis a Roma: si fingono acquirenti, entrano e si barricano"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={styles.unreadTitle}>
                  Metodo Salis a Roma: si fingono acquirenti, entrano e si barricano
                </h3>
              </Link>
              {/* Item 7 - Ravenna Liceo */}
              <Link
                href="/articles/foto-oscene-prof-chat-studenti-scioperano-liceo-ravenna"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-ravenna-thumb.png"
                    alt="Foto oscene del prof inviate nelle chat: sciopero al liceo di Ravenna"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={styles.unreadTitle}>
                  Foto oscene del prof inviate nelle chat: sciopero al liceo di Ravenna
                </h3>
              </Link>
              {/* Item 8 - Olbia Migranti */}
              <Link
                href="/articles/olbia-migranti-allassalto-traghetti-senza-documenti-modello-albania"
                className={styles.unreadCard}
              >
                <div className={styles.unreadThumbWrap}>
                  <img
                    src="/images/article-olbia-thumb.jpg"
                    alt="Olbia, migranti all'assalto dei traghetti: tentano l'imbarco senza documenti"
                    className={styles.unreadThumb}
                  />
                </div>
                <h3 className={styles.unreadTitle}>
                  Olbia, migranti all'assalto dei traghetti: tentano l'imbarco senza documenti
                </h3>
              </Link>
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

      {/* 3. Italian Fanpage Style Footer */}
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

      {/* 4. Full-Screen Loading Overlay (5 Secondi) */}
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
