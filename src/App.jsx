import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDots,
  GoogleLogo,
  PhoneCall,
  Plus,
  Star,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";

const mapsUrl =
  "https://www.google.com/maps/place/Neon+Tattoo+J%C3%BClich/@50.9210564,6.3566355,17.97z/data=!4m8!3m7!1s0x47bf5eab60507c21:0xf0635b4164b19adb!8m2!3d50.9205656!4d6.3576433!9m1!1b1!16s%2Fg%2F11g7np8wxf?entry=ttu";

const whatsappUrl =
  "https://wa.me/4917632070358?text=Hallo%20Neon%20Tattoo%20J%C3%BClich%2C%20ich%20m%C3%B6chte%20eine%20Tattoo-Idee%20besprechen.";

const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;
const route = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const currentPage = () => {
  const lastSegment = window.location.pathname.replace(/\/+$/, "").split("/").pop();
  return ["styles", "artist", "gallery", "hygiene"].includes(lastSegment) ? lastSegment : "home";
};

const portfolio = [
  {
    src: asset("phoenix-blue.jpg"),
    alt: "Blauer Phoenix als farbiges Tattoo am Unterarm",
    label: "COLOR · PHOENIX",
    size: "tall",
  },
  {
    src: asset("black-grey-eagle.jpg"),
    alt: "Black-and-grey Tattoo mit Adler und Rose",
    label: "BLACK & GREY · EAGLE",
    size: "standard",
  },
  {
    src: asset("fine-line-floral.jpg"),
    alt: "Fine-Line Blumenmotiv am Arm",
    label: "FINE LINE · BOTANICAL",
    size: "standard",
  },
  {
    src: asset("ig-1.jpg"),
    alt: "Tattoo-Arbeit aus dem Neon Tattoo Jülich Instagram",
    label: "PORTFOLIO · NEON TATTOO",
    size: "wide",
  },
  {
    src: asset("black-grey-leg.jpg"),
    alt: "Großes Black-and-grey Bein-Tattoo",
    label: "BLACK & GREY · LEG PIECE",
    size: "standard",
  },
  {
    src: asset("fine-line-lotus.jpg"),
    alt: "Feines Lotus-Tattoo während der Heilung",
    label: "FINE LINE · LOTUS",
    size: "tall",
  },
  {
    src: asset("black-grey-detail.jpg"),
    alt: "Schwarz-graues Tattoo-Detail",
    label: "REALISTIC · DETAIL",
    size: "standard",
  },
  {
    src: asset("black-grey-portrait.jpg"),
    alt: "Schwarz-graues Portrait-Tattoo",
    label: "PORTRAIT · BLACK & GREY",
    size: "wide",
  },
];

const faqs = [
  [
    "Wie entsteht der Preis für ein Tattoo?",
    "Der Preis richtet sich nach Größe, Körperstelle, Stil und Zeitaufwand. Nach deiner Anfrage bekommst du eine klare Einschätzung für dein Motiv.",
  ],
  [
    "Wie läuft die Beratung ab?",
    "Wir besprechen Motiv, Platzierung, Größe und Referenzen persönlich oder per WhatsApp. Erst danach wird dein Termin verbindlich geplant.",
  ],
  [
    "Welche Stile bietet Neon Tattoo an?",
    "Unser Portfolio zeigt vor allem Black & Grey, Realistic, Portrait, Fine Line und farbige Arbeiten. Bei neuen Ideen klären wir gemeinsam, was am besten passt.",
  ],
  [
    "Kann ich ein kleines oder Fine-Line Tattoo buchen?",
    "Ja. Schick uns einfach deine Idee, die gewünschte Körperstelle und ungefähr die Größe. So können wir Aufwand und Termin realistisch einschätzen.",
  ],
  [
    "Wie vereinbare ich einen Termin?",
    "Am schnellsten geht es über WhatsApp unter +49 176 32070358. Alternativ kannst du das Formular unten nutzen oder direkt anrufen.",
  ],
];

const reviewCards = [
  {
    name: "Anja Bopp",
    avatar: "A",
    color: "blue",
    text: "Wir haben uns vom ersten Moment an rundum wohl und gut aufgehoben gefühlt. Das gesamte Team ist unglaublich freundlich und professionell.",
  },
  {
    name: "Nadja Becker",
    avatar: "N",
    color: "coral",
    text: "Tolles Studio, super nette Leute. Man nimmt sich viel Zeit für die Kunden und man fühlt sich super aufgehoben.",
  },
  {
    name: "Noemi",
    avatar: "N",
    color: "green",
    text: "Super freundlich und liebe Atmosphäre. Ich habe mich spontan mit meiner Schwester tätowieren lassen.",
  },
];

const styleCards = [
  ["Black & Grey", "Kontrastreich, weich und zeitlos", "black-grey-eagle.jpg"],
  ["Realistic", "Details, Tiefe und Ausdruck", "black-grey-detail.jpg"],
  ["Fine Line", "Feine Linien mit klarer Haltung", "fine-line-floral.jpg"],
  ["Color", "Farbe, die lebendig bleibt", "phoenix-blue.jpg"],
  ["Portrait", "Gesichter mit Charakter", "portrait-purple.jpg"],
  ["Cover Up", "Neue Geschichten über alten Linien", "black-grey-work.jpg"],
];

function Arrow() {
  return <ArrowUpRight aria-hidden="true" className="link-arrow" size={15} weight="bold" />;
}

function StylesPage() {
  return (
    <div className="styles-page site-shell">
      <SubpageHeader />
      <main className="styles-page-main">
        <div className="section-marker">Neon Tattoo · Jülich</div>
        <h1>Dein Stil.<br /><em>Deine</em> Geschichte.</h1>
        <p className="styles-page-intro">Jedes Motiv beginnt mit einer Idee. Entdecke die Stilrichtungen, die wir bei Neon Tattoo mit Ruhe, Präzision und eigener Handschrift umsetzen.</p>
        <div className="styles-card-grid">
          {styleCards.map(([title, description, image]) => (
            <a className="styles-card" href={route("/#booking")} key={title}>
              <img src={asset(image)} alt={`${title} Tattoo aus dem Neon Portfolio`} loading="eager" />
              <div><b>{title}</b><span>{description}</span><Arrow /></div>
            </a>
          ))}
        </div>
        <div className="styles-page-footer">
          <a className="button button-accent" href={route("/#booking")}>Termin anfragen <Arrow /></a>
          <a className="text-link" href={route("/")}>Zur Startseite <Arrow /></a>
        </div>
      </main>
    </div>
  );
}

function SubpageHeader() {
  return <header className="site-header"><div className="header-inner"><nav className="desktop-nav nav-left"><a href={route("/")}>Home</a><a href={route("/artist")}>Tätowierer</a><a href={route("/#hygiene")}>Tattoo Hygiene</a></nav><a className="wordmark" href={route("/")} aria-label="Neon Tattoo Jülich Startseite"><span>NEON</span><span>TATTOO</span><i aria-hidden="true" /><small>JÜLICH</small></a><nav className="desktop-nav nav-right"><a href={route("/gallery")}>Galerie</a><a href={route("/#booking")}>Kontakt</a><a className="nav-cta" href={route("/#booking")}>Termin anfragen</a></nav></div></header>;
}

function ArtistPage() {
  return (
    <div className="subpage site-shell">
      <SubpageHeader />
      <main className="subpage-main section-pad">
        <div className="section-marker">Neon Tattoo · Jülich</div>
        <div className="subpage-hero-grid"><div><h1>Tätowierer<br /><em>in Jülich.</em></h1><p className="lead">Zwei Handschriften. Dein Motiv. Persönlich begleitet.</p><p>Bei Neon Tattoo arbeiten zwei Artists mit eigener Handschrift und Fokus auf präzise, individuelle Tattoos. Lerne unser Team kennen und finde den Stil, der zu deiner Idee passt.</p><a className="button button-accent" href={route("/#booking")}>Termin anfragen <Arrow /></a></div><img src={asset("black-grey-portrait.jpg")} alt="Tattoo-Portfolio von Neon Tattoo Jülich" /></div>
        <section className="artist-profile-block"><div className="artist-profile-meta"><span>01 / Artistin</span><strong>Resident Artist</strong><small>Black &amp; Grey · Fine Line · Realistic</small><img src={asset("artist-lina.png")} alt="Artistin von Neon Tattoo Jülich bei der Arbeit" /></div><div><h2>Ruhige Hand.<br /><em>Klare Linie.</em></h2><p>Mit einem Auge für Details und einer persönlichen Beratung entwickelt sie Motive, die sich natürlich in deine Geschichte und deine Haut einfügen.</p><p>Von filigranen Fine-Line-Arbeiten bis zu ausdrucksstarken Black-&amp;-Grey-Projekten: jedes Tattoo entsteht mit Zeit, Präzision und sauberer Vorbereitung.</p></div></section>
        <section className="artist-profile-block artist-profile-block-reverse"><img src={asset("artist-raoul.png")} alt="Artist von Neon Tattoo Jülich bei der Arbeit" /><div><div className="section-marker">02 / Artist</div><h2>Eigene Handschrift.<br /><em>Dein Motiv.</em></h2><p>Unser zweiter Artist bringt seine eigene Perspektive, Erfahrung und Ruhe in jedes Projekt. Gemeinsam findet ihr die Bildsprache, die zu deiner Idee passt.</p><p>Realistic, Black &amp; Grey und individuelle Einzelstücke entstehen mit klarer Kommunikation – vom ersten Gespräch bis zur Pflege danach.</p><a className="text-link" href="https://www.instagram.com/neon_tattoo_juelich/" target="_blank" rel="noreferrer">Arbeiten auf Instagram <Arrow /></a></div></section>
        <div className="artist-booking-cta"><div className="section-marker">03 / Termin</div><h2>Bereit für<br /><em>deine Idee?</em></h2><a className="button button-accent" href={route("/#booking")}>Kostenlose Beratung <Arrow /></a></div>
      </main>
    </div>
  );
}

function GalleryPage() {
  const examples = [...portfolio, { src: asset("ig-post-1.jpg"), label: "INSTAGRAM · POST", alt: "Neon Tattoo Instagram Post" }, { src: asset("ig-post-2.jpg"), label: "INSTAGRAM · POST", alt: "Neon Tattoo Instagram Post" }, { src: asset("ig-post-3.jpg"), label: "INSTAGRAM · POST", alt: "Neon Tattoo Instagram Post" }, { src: asset("ig-0.jpg"), label: "INSTAGRAM · REEL", alt: "Neon Tattoo Instagram Reel" }, { src: asset("artist-lina.png"), label: "ARTISTIN · STUDIO", alt: "Artistin im Neon Tattoo Studio" }, { src: asset("artist-raoul.png"), label: "ARTIST · STUDIO", alt: "Artist im Neon Tattoo Studio" }];
  return (
    <div className="subpage site-shell">
      <SubpageHeader />
      <main className="subpage-main section-pad"><div className="section-marker">Neon Tattoo · Jülich</div><div className="instagram-profile-head"><div className="instagram-avatar">N</div><div><h1>Unsere<br /><em>Arbeiten.</em></h1><p>@neon_tattoo_juelich · Black &amp; Grey · Fine Line · Realistic</p></div><a className="button button-outline" href="https://www.instagram.com/neon_tattoo_juelich/" target="_blank" rel="noreferrer">Instagram öffnen <Arrow /></a></div><p className="styles-page-intro">Eine Auswahl im Look unseres Instagram-Feeds. Noch mehr aktuelle Beispiele findest du direkt auf unserem <a className="inline-link" href="https://www.instagram.com/neon_tattoo_juelich/" target="_blank" rel="noreferrer">Instagram-Kanal</a>.</p><div className="instagram-grid">{examples.map((item, index) => <a className="instagram-post" href="https://www.instagram.com/neon_tattoo_juelich/" target="_blank" rel="noreferrer" key={`${item.src}-${index}`}><img src={item.src} alt={`${item.label} Beispiel ${index + 1}`} loading="eager" /><span>{item.label}</span></a>)}</div></main>
    </div>
  );
}

function HygienePage() {
  const hygieneFaqs = [
    ["Wie wird im Studio gereinigt?", "Nach jeder Session reinigen und desinfizieren wir Arbeitsflächen und Geräte gründlich. Einwegmaterialien werden für jeden Termin neu geöffnet."],
    ["Welche Nadeln und Handschuhe werden verwendet?", "Wir arbeiten mit sterilisierten, einzeln verpackten Einwegnadeln. Während der gesamten Session trägt der Artist frische Einweghandschuhe."],
    ["Was muss ich vor dem Termin beachten?", "Komm ausgeschlafen, gegessen und mit sauberer, nicht eingeölter Haut. Verzichte vorher auf Alkohol und bringe Referenzen oder deine Idee mit."],
    ["Wie pflege ich mein frisches Tattoo?", "Die Schutzfolie bleibt nach Absprache mehrere Tage auf der Haut. Danach vorsichtig mit lauwarmem Wasser reinigen und dünn mit der empfohlenen Pflege eincremen."],
    ["Darf ich eine Begleitung mitbringen?", "Eine erwachsene Begleitperson ist nach Absprache willkommen. Kinder und Tiere dürfen aus Hygiene- und Sicherheitsgründen nicht in den Tätowierbereich."],
    ["Ab welchem Alter tätowiert ihr?", "Wir tätowieren ausschließlich volljährige Personen ab 18 Jahren – ohne Ausnahme."],
  ];
  return <div className="subpage site-shell"><SubpageHeader /><main className="hygiene-page-main"><section className="hygiene-intro section-pad"><div className="section-marker">Neon Tattoo · Jülich</div><h1>Tattoo<br /><em>Hygiene.</em></h1><p className="lead">Sauberkeit, Aufklärung und Vertrauen gehören zu jedem Termin.</p><p>Hygiene wird bei Neon Tattoo großgeschrieben. Im Tätowierbereich sind Nahrungsmittel, Getränke und Haustiere nicht gestattet – damit wir konzentriert und sicher arbeiten können.</p></section><section className="hygiene-standards section-pad section-dark"><div><div className="section-marker">01 / Unsere Standards</div><h2>Sauber von<br /><em>der ersten Sekunde.</em></h2></div><div className="hygiene-standard-grid"><article><b>01</b><h3>Einweg &amp; steril</h3><p>Einzeln verpackte Nadeln, frische Handschuhe und Kunststoffschutz für jede neue Session.</p></article><article><b>02</b><h3>Desinfiziert</h3><p>Arbeitsflächen und Geräte werden vor und nach jedem Termin gründlich gereinigt und desinfiziert.</p></article><article><b>03</b><h3>Aftercare</h3><p>Du bekommst klare Pflegehinweise und alle wichtigen Tipps für eine ruhige Heilung mit nach Hause.</p></article></div></section><section className="hygiene-faq section-pad"><div className="section-marker">02 / Fragen &amp; Antworten</div><div className="faq-layout"><h2>Deine Fragen.<br /><em>Unsere</em> Antworten.</h2><div className="faq-list">{hygieneFaqs.map(([q,a])=><details key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></div></section></main></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [selectedDay, setSelectedDay] = useState(31);
  const [selectedTime, setSelectedTime] = useState("12:00 - 12:30");
  const [bookingStep, setBookingStep] = useState(1);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        setMenuOpen(false);
      }
      if (event.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex + 1) % portfolio.length);
      }
      if (event.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex - 1 + portfolio.length) % portfolio.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("modal-open", lightboxIndex !== null);
    const onPopState = () => setPage(currentPage());
    window.addEventListener("popstate", onPopState);
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
      document.body.classList.remove("modal-open");
      revealObserver.disconnect();
    };
  }, [lightboxIndex]);

  const closeMenu = () => setMenuOpen(false);

  if (page === "styles") return <StylesPage />;
  if (page === "artist") return <ArtistPage />;
  if (page === "gallery") return <GalleryPage />;
  if (page === "hygiene") return <HygienePage />;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>

      <header className={`site-header ${menuOpen ? "is-open" : ""}`}>
        <div className="header-inner">
          <nav className="desktop-nav nav-left" aria-label="Hauptnavigation links">
            <a href="#home">Home</a>
            <a href={route("/artist")}>Tätowierer</a>
            <a href={route("/hygiene")}>Tattoo Hygiene</a>
          </nav>

          <a className="wordmark" href="#home" aria-label="Neon Tattoo Jülich Startseite">
            <span>NEON</span>
            <span>TATTOO</span>
            <i aria-hidden="true" />
            <small>JÜLICH</small>
          </a>

          <nav className="desktop-nav nav-right" aria-label="Hauptnavigation rechts">
            <a href={route("/gallery")}>Galerie</a>
            <a href="#booking">Kontakt</a>
            <a className="nav-cta" href="#booking">Termin anfragen</a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>

        <div className="mobile-menu" aria-hidden={!menuOpen}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href={route("/artist")} onClick={closeMenu}>Tätowierer</a>
          <a href={route("/hygiene")} onClick={closeMenu}>Tattoo Hygiene</a>
          <a href={route("/gallery")} onClick={closeMenu}>Galerie</a>
          <a href="#gallery" onClick={closeMenu}>Galerie</a>
          <a href="#booking" onClick={closeMenu}>Kontakt</a>
          <a className="mobile-menu-cta" href="#booking" onClick={closeMenu}>Termin anfragen</a>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero reveal">
          <div className="hero-image" style={{ backgroundImage: `url(${asset("ig-0.jpg")})` }} role="img" aria-label="Backpiece-Tattoo aus dem Neon Tattoo Jülich Portfolio" />
          <div className="hero-scrim" />
          <div className="hero-content">
            <p className="eyebrow">Neon Tattoo · Jülich</p>
            <h1>Deine Idee.<br /><span>Unsere Linie.</span></h1>
            <p className="hero-subline">Präzise gestochen, persönlich begleitet und für immer auf deiner Haut.</p>
            <a className="button button-accent" href="#booking">Jetzt Termin anfragen <Arrow /></a>
          </div>
          <a className="hero-scroll" href="#intro" aria-label="Weiter zum Inhalt">Scroll <ArrowDown aria-hidden="true" size={16} weight="bold" /></a>
        </section>

        <section id="intro" className="intro section-pad reveal">
          <div className="section-marker">01 / Studio</div>
          <div className="intro-grid">
            <div>
              <h2>Tattoo Studio Jülich<br /><em>deine Idee.</em></h2>
              <p className="lead">Neon Tattoo ist dein Tattoo Studio in der Nähe von Düren, Aachen und Eschweiler.</p>
            </div>
            <div className="intro-copy">
              <p>Hallo, Hi, Salut und Hello! Du fragst dich, warum viele Menschen aus der Region nach Jülich für ihr Tattoo kommen? Weil du hier persönliche Beratung, präzise Planung und eine klare Handschrift findest.</p>
              <p>Ob Black &amp; Grey, Realistic, Fine Line, Cover-Up oder farbige Einzelstücke: Wir nehmen uns Zeit für dein Motiv und begleiten dich vom ersten Gespräch bis zur Pflege danach.</p>
              <p>Dein Tattoo Studio in der Nähe von Düren, Aachen, Eschweiler, Linnich und Aldenhoven – mit Ruhe, Hygiene und echter Aufmerksamkeit.</p>
              <a className="text-link" href="#artist">Den Artist kennenlernen <Arrow /></a>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section section-pad section-dark reveal">
          <div className="section-head">
            <div>
              <div className="section-marker">02 / Portfolio</div>
              <h2>Arbeiten, die bleiben.</h2>
            </div>
          <a className="text-link" href="https://www.instagram.com/neon_tattoo_juelich/" target="_blank" rel="noreferrer">Mehr auf Instagram <Arrow /></a>
          </div>
          <div className="gallery-grid">
            {portfolio.map((item, index) => (
              <button
                className={`gallery-item ${item.size}`}
                key={item.src}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`${item.label} vergrößern`}
              >
                <img src={item.src} alt={item.alt} loading="eager" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="artist" className="artist-section section-pad reveal">
          <div className="artist-layout">
            <div className="artist-photo-wrap">
              <img src={asset("artist-lina.png")} alt="Tattoo-Artistin bei der Arbeit in Jülich" loading="eager" />
              <span className="image-note">Neon Tattoo / Jülich</span>
            </div>
            <div className="artist-copy">
              <div className="section-marker">03 / Unsere Tattoo-Künstler</div>
              <h2>Tätowierer in<br /><em>Jülich.</em></h2>
              <p className="lead">Bei Neon Tattoo arbeitet aktuell ein Resident Artist mit Fokus auf Black &amp; Grey, Realistic und farbige Einzelstücke.</p>
              <p>Jedes Motiv entsteht mit Zeit, Ruhe und einer Beratung, die wirklich zuhört. Von der ersten Idee bis zur Pflege danach begleiten wir dich persönlich und mit demselben hohen Qualitätsanspruch.</p>
              <p>Wir stechen <a className="inline-link" href={route("/styles")}>Black &amp; Grey</a>, Fine Line, Realistic und Cover-Ups. Entdecke unsere Arbeiten auf <a className="inline-link" href="https://www.instagram.com/neon_tattoo_juelich/" target="_blank" rel="noreferrer">Instagram</a> und vereinbare <a className="inline-link" href="#booking">jetzt deinen Termin</a> in Jülich.</p>
              <a className="button button-outline" href="#booking">Termin anfragen <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="review-section section-dark section-pad reveal">
          <div className="section-marker">04 / Stimmen aus Jülich</div>
          <div className="review-layout">
            <div className="review-copy">
              <h2>Gute Arbeit spricht sich herum.</h2>
              <p>Die Stimmen aus Jülich nennen immer wieder freundliche Beratung, saubere Arbeit und eine entspannte Atmosphäre.</p>
              <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">Alle Bewertungen ansehen <Arrow /></a>
            </div>
          </div>
          <div className="review-marquee" aria-label="Ausgewählte Google-Bewertungen">
            <div className="review-track">
              {[...reviewCards, ...reviewCards].map((review, index) => (
                <article className="review-card" key={`${review.name}-${index}`}>
                  <div className="review-card-head"><span className={`review-avatar ${review.color}`}>{review.avatar}</span><div><b>{review.name}</b><small>Google Bewertung</small></div><GoogleLogo aria-hidden="true" size={17} weight="bold" /></div>
                  <div className="review-card-stars">{Array.from({ length: 5 }, (_, starIndex) => <Star key={starIndex} aria-hidden="true" size={14} weight="fill" />)}</div>
                  <p>“{review.text}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="styles" className="styles-section section-pad reveal">
          <div className="section-marker">05 / Styles</div>
          <div className="styles-grid">
            <div>
              <h2>Welcher Stil<br /><em>passt</em> zu dir?</h2>
              <p className="lead">Ein gutes Tattoo beginnt mit einem Stil, der deine Idee trägt.</p>
            </div>
            <div className="style-list" role="list">
              {[
                ["Black & Grey", "Kontrastreich, weich und zeitlos"],
                ["Realistic", "Details, Tiefe und Ausdruck"],
                ["Fine Line", "Feine Linien mit klarer Haltung"],
                ["Color", "Farbe, die lebendig bleibt"],
              ].map(([title, subtitle]) => (
                <a href={route("/styles")} className="style-row" key={title} role="listitem">
                  <span><b>{title}</b><small>{subtitle}</small></span><Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="hygiene" className="hygiene-section section-dark section-pad reveal">
          <div className="hygiene-layout">
            <div className="hygiene-copy">
              <div className="section-marker">06 / Haltung</div>
              <h2>Sauberkeit ist<br /><em>kein</em> Extra.</h2>
              <p className="lead">Hygiene, Aufklärung und eine ehrliche Beratung gehören für uns zu jedem Termin.</p>
              <p>Wir arbeiten mit professioneller Ausstattung und klaren Abläufen. Vor dem Stechen besprechen wir Pflege, Heilung und alle Fragen, die dir wichtig sind.</p>
              <a className="text-link" href="#booking">Beratung anfragen <Arrow /></a>
            </div>
            <div className="hygiene-image">
              <img src={asset("fine-line-lotus.jpg")} alt="Fine-Line Tattoo bei der Pflege" loading="eager" />
              <span>Präzision / Pflege / Vertrauen</span>
            </div>
          </div>
        </section>

        <section id="booking" className="booking-section section-pad section-dark reveal">
          <div className="booking-heading">
            <div className="section-marker">07 / Kostenlose 30-minütige Beratung</div>
            <h2>Wie man sich anmeldet</h2>
          </div>
          {bookingStep === 1 && <div className="booking-widget">
            <div className="booking-calendar-column">
              <div className="booking-labels"><span>Select date*</span><span>Select Time*</span></div>
              <div className="booking-controls">
                <div className="calendar-card">
                  <div className="calendar-month"><b>August 2026</b><ArrowRight aria-hidden="true" size={18} weight="bold" /></div>
                  <div className="calendar-weekdays">{["MO", "DI", "MI", "DO", "FR", "SA", "SO"].map((day) => <span key={day}>{day}</span>)}</div>
                  <div className="calendar-grid">{Array.from({ length: 35 }, (_, index) => { const day = index - 4; return day > 0 && day <= 31 ? <button type="button" className={selectedDay === day ? "is-selected" : ""} onClick={() => setSelectedDay(day)} key={day}>{day}</button> : <span key={`empty-${index}`} />; })}</div>
                  <small>Powered by booking calendar</small>
                </div>
                <div className="time-grid">{["12:00 - 12:30", "12:30 - 13:00", "13:00 - 13:30", "13:30 - 14:00", "14:00 - 14:30", "14:30 - 15:00", "15:00 - 15:30", "15:30 - 16:00", "16:00 - 16:30", "16:30 - 17:00", "17:00 - 17:30", "17:30 - 18:00"].map((time) => <button type="button" className={selectedTime === time ? "is-selected" : ""} onClick={() => setSelectedTime(time)} key={time}>{time}</button>)}</div>
              </div>
              <div className="calendar-legend"><span><i className="available" /> Available</span><span><i className="booked" /> Booked</span><span><i className="pending" /> Pending</span><span><i className="partial" /> Partially booked</span></div>
              <button className="button button-accent booking-next" type="button" onClick={() => setBookingStep(2)}>Weiter <Arrow /></button>
            </div>
            <div className="booking-methods">
              <h3>3 Wege zu deinem<br />Tattoo</h3>
              <a href="tel:+4917632070358"><PhoneCall aria-hidden="true" size={35} weight="bold" /><span><b>Ruf uns an: +49 176 32070358</b><small>Gemeinsam finden wir einen passenden Termin für dich.</small></span></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsappLogo aria-hidden="true" size={35} weight="fill" /><span><b>Schreib uns auf WhatsApp</b><small>Schreib uns auf WhatsApp und wir finden deinen passenden Termin.</small></span></a>
              <a href="#contact"><CalendarDots aria-hidden="true" size={35} weight="bold" /><span><b>Wähle dir einen passenden Termin</b><small>Wähle im Kalender deinen Termin für ein kostenloses Beratungsgespräch vor Ort.</small></span></a>
            </div>
          </div>}
          {bookingStep === 2 && <div id="contact" className="booking-request">
            <div className="booking-copy">
              <div className="section-marker">Deine Idee</div>
              <h3>Erzähl uns, was du vorhast.</h3>
              <p>Wir melden uns mit den nächsten Schritten für deinen Termin am {selectedDay}. August um {selectedTime}.</p>
            </div>
            <form className="booking-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}>
              {formSent ? (
                <div className="form-success" role="status">
                  <strong>Danke für deine Anfrage.</strong>
                  <p>Wir melden uns so schnell wie möglich über deine angegebene Kontaktmöglichkeit.</p>
                  <button type="button" className="button button-outline" onClick={() => setFormSent(false)}>Neue Anfrage</button>
                </div>
              ) : (
                <>
                  <div className="form-head"><span>Unverbindlich</span><b>30 Min. Beratung</b></div>
                  <label>Dein Name<input required name="name" type="text" placeholder="Vor- und Nachname" /></label>
                  <label>E-Mail<input required name="email" type="email" placeholder="E-Mail-Adresse" /></label>
                  <label>Telefon<input required name="phone" type="tel" placeholder="Telefonnummer" /></label>
                  <label className="booking-details">Details<textarea required name="idea" rows="4" placeholder="Motiv, Körperstelle, Größe, Stil ..." /></label>
                  <button className="button button-accent" type="submit">Anfrage senden <Arrow /></button>
                  <small className="form-note">Mit dem Absenden stimmst du der Kontaktaufnahme zu. Keine automatische Terminbuchung.</small>
                </>
              )}
            </form>
            <button className="button button-outline booking-back" type="button" onClick={() => setBookingStep(1)}>Zurück</button>
          </div>}
        </section>

        <section className="faq-section section-dark section-pad">
          <div className="section-marker">08 / Fragen</div>
          <div className="faq-layout">
            <h2>Deine Fragen.<br /><em>Unsere</em> Antworten.</h2>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary><span>{question}</span><b aria-hidden="true"><Plus size={20} weight="bold" /></b></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="wordmark footer-wordmark" href="#home" aria-label="Neon Tattoo Jülich Startseite"><span>NEON</span><span>TATTOO</span><i aria-hidden="true" /><small>JÜLICH</small></a>
            <p>Tattoos mit Haltung.<br />In Jülich, für immer.</p>
          </div>
          <div className="footer-column"><b>Studio</b><a href={route("/artist")}>Tätowierer</a><a href={route("/gallery")}>Galerie</a><a href="#hygiene">Hygiene</a><a href={route("/styles")}>Styles</a></div>
          <div className="footer-column"><b>Kontakt</b><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="tel:+4917632070358">+49 176 32070358</a><a href={mapsUrl} target="_blank" rel="noreferrer">Jülich / Google Maps</a></div>
          <div className="footer-column"><b>Folgen</b><a href="https://www.instagram.com/neon_tattoo_juelich/" target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href="#booking">Termin anfragen <Arrow /></a></div>
        </div>
        <div className="footer-map"><div><b>NEON TATTOO JÜLICH</b><span>Besuche uns in der Innenstadt.</span></div><iframe title="Neon Tattoo Jülich auf Google Maps" src="https://www.google.com/maps?q=50.9205656,6.3576433&z=16&output=embed" loading="lazy" /></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Neon Tattoo Jülich</span><div><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">Cookie-Einstellungen</a></div><span>Design / Development</span></div>
      </footer>

      <div className="floating-actions" aria-label="Schnellkontakt">
        <a className="float-action float-phone" href="tel:+4917632070358" aria-label="Neon Tattoo anrufen"><PhoneCall aria-hidden="true" size={20} weight="bold" /></a>
        <a className="float-action float-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Neon Tattoo über WhatsApp kontaktieren"><WhatsappLogo aria-hidden="true" size={22} weight="fill" /></a>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio Bildansicht" onClick={() => setLightboxIndex(null)}>
          <button type="button" className="lightbox-close" aria-label="Bildansicht schließen" onClick={() => setLightboxIndex(null)}>Schließen <X aria-hidden="true" size={15} weight="bold" /></button>
          <button type="button" className="lightbox-nav lightbox-prev" aria-label="Vorheriges Bild" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + portfolio.length) % portfolio.length); }}><ArrowLeft aria-hidden="true" size={21} /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={portfolio[lightboxIndex].src} alt={portfolio[lightboxIndex].alt} />
            <figcaption>{portfolio[lightboxIndex].label}</figcaption>
          </figure>
          <button type="button" className="lightbox-nav lightbox-next" aria-label="Nächstes Bild" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % portfolio.length); }}><ArrowRight aria-hidden="true" size={21} /></button>
        </div>
      )}
    </div>
  );
}

export { App };
