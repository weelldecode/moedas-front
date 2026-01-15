export function svgDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeXml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function productThumbSvg({
  title,
  price,
  tone = "silver",
}: {
  title: string;
  price: string;
  tone?: "silver" | "gold" | "blue";
}) {
  const palette =
    tone === "gold"
      ? { bg1: "#fff1c9", bg2: "#b88a2a", ring: "#7a5b1f" }
      : tone === "blue"
      ? { bg1: "#d7ecff", bg2: "#0a3161", ring: "#0a3161" }
      : { bg1: "#f4f5f7", bg2: "#a3adb8", ring: "#6b7280" };

  const svg = `
  <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="${palette.bg1}"/>
        <stop offset="1" stop-color="${palette.bg2}"/>
      </linearGradient>
      <radialGradient id="r" cx="35%" cy="30%" r="70%">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".85"/>
        <stop offset="1" stop-color="#000000" stop-opacity=".18"/>
      </radialGradient>
      <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity=".25"/>
      </filter>
    </defs>

    <rect width="240" height="240" rx="18" fill="url(#g)"/>
    <rect width="240" height="240" rx="18" fill="url(#r)"/>

    <g filter="url(#s)">
      <circle cx="120" cy="112" r="72" fill="#f8fafc"/>
      <circle cx="120" cy="112" r="66" fill="#ffffff"/>
      <circle cx="120" cy="112" r="58" fill="#eef2f7" stroke="${palette.ring}" stroke-width="6"/>
      <circle cx="120" cy="112" r="38" fill="#ffffff" opacity=".55"/>
      <text x="120" y="110" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="800" fill="#111827">
        SAMPLE
      </text>
      <text x="120" y="130" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="800" fill="#374151" letter-spacing="1">
        ${tone.toUpperCase()}
      </text>
    </g>

    <rect x="14" y="182" width="212" height="44" rx="10" fill="#0b0f1a" opacity=".86"/>
    <text x="26" y="202" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="800" fill="#ffffff">
      ${escapeXml(title).slice(0, 24)}
    </text>
    <text x="26" y="220" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="800" fill="#d1b27a">
      ${escapeXml(price)}
    </text>
  </svg>`;

  return svgDataUri(svg);
}

export function coinHeroSvg({
  labelTop = "UNITED STATES",
  labelBottom = "SAMPLE COIN",
  year = "2026",
  tone = "silver",
  tilt = 0,
}: {
  labelTop?: string;
  labelBottom?: string;
  year?: string;
  tone?: "silver" | "gold" | "platinum";
  tilt?: number;
}) {
  const p =
    tone === "gold"
      ? { rim1: "#f6d67f", rim2: "#b8862a", face: "#fff3cd", shadow: "rgba(0,0,0,0.35)" }
      : tone === "platinum"
      ? { rim1: "#dfe7ef", rim2: "#7b8794", face: "#f7fafc", shadow: "rgba(0,0,0,0.38)" }
      : { rim1: "#e9eef5", rim2: "#7a8796", face: "#f8fafc", shadow: "rgba(0,0,0,0.38)" };

  const svg = `
  <svg width="560" height="560" viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rim" cx="35%" cy="28%" r="70%">
        <stop offset="0" stop-color="${p.rim1}" stop-opacity="1"/>
        <stop offset="1" stop-color="${p.rim2}" stop-opacity="1"/>
      </radialGradient>
      <radialGradient id="face" cx="35%" cy="30%" r="70%">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".95"/>
        <stop offset="1" stop-color="${p.face}" stop-opacity="1"/>
      </radialGradient>
      <radialGradient id="spec" cx="30%" cy="25%" r="55%">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".75"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <filter id="ds" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="26" stdDeviation="18" flood-color="${p.shadow}"/>
      </filter>
    </defs>

    <g filter="url(#ds)" transform="translate(280 280) rotate(${tilt}) translate(-280 -280)">
      <circle cx="280" cy="280" r="210" fill="url(#rim)"/>
      <circle cx="280" cy="280" r="194" fill="#ffffff" opacity=".85"/>
      <circle cx="280" cy="280" r="182" fill="url(#face)"/>
      <circle cx="280" cy="280" r="170" fill="#ffffff" opacity=".35"/>
      <circle cx="280" cy="280" r="154" fill="#000000" opacity=".05"/>

      <g opacity=".18">
        ${Array.from({ length: 22 })
          .map((_, i) => {
            const y = 160 + i * 10;
            return `<path d="M140 ${y} C 210 ${y - 8}, 350 ${y + 8}, 420 ${y}" stroke="#111827" stroke-width="2" fill="none" opacity=".25"/>`;
          })
          .join("\n")}
      </g>

      <ellipse cx="230" cy="220" rx="150" ry="120" fill="url(#spec)" opacity=".75"/>

      <text x="280" y="138" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#111827" opacity=".9" letter-spacing="2">
        ${escapeXml(labelTop).toUpperCase()}
      </text>
      <text x="280" y="425" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="800" fill="#111827" opacity=".85" letter-spacing="2">
        ${escapeXml(labelBottom).toUpperCase()}
      </text>

      <text x="280" y="295" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="900" fill="#0b0f1a" opacity=".85">
        ${escapeXml(year)}
      </text>
      <text x="280" y="332" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="900" fill="#374151" letter-spacing="4" opacity=".9">
        .999 FINE
      </text>
    </g>
  </svg>`;

  return svgDataUri(svg);
}

export function classicSidebarBannerSvg({
  title = "ENTREGA GARANTIDA",
  subtitle = "Para todo Brasil",
}: {
  title?: string;
  subtitle?: string;
}) {
  const svg = `
  <svg width="720" height="980" viewBox="0 0 720 980" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#0b2a3a"/>
        <stop offset="1" stop-color="#0b0f1a"/>
      </linearGradient>
      <linearGradient id="bar" x1="0" x2="1">
        <stop offset="0" stop-color="#f3c623"/>
        <stop offset="1" stop-color="#f3c623"/>
      </linearGradient>
      <filter id="sh" x="-20%" y="-20%" width="160%" height="160%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity=".35"/>
      </filter>
    </defs>

    <rect width="720" height="980" rx="24" fill="url(#bg)"/>
    <rect x="0" y="0" width="720" height="12" fill="#b31942"/>
    <rect x="0" y="12" width="720" height="12" fill="#0a3161"/>

    <g filter="url(#sh)">
      <rect x="70" y="140" width="580" height="260" rx="22" fill="#06111a" opacity=".75"/>
      <text x="360" y="235" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="2">
        ${escapeXml(title).toUpperCase()}
      </text>
      <text x="360" y="285" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#ffffff" opacity=".9" letter-spacing="2">
        ${escapeXml(subtitle).toUpperCase()}
      </text>

      <rect x="140" y="320" width="440" height="56" rx="14" fill="url(#bar)"/>
      <text x="360" y="358" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="900" fill="#0b0f1a">
        PAC • SEDEX
      </text>
    </g>

    <g opacity=".9">
      <text x="360" y="520" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="900" fill="#ffffff">
        Correios
      </text>
      <path d="M220 580 L260 560 L280 585 L320 550" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" opacity=".9"/>
      <rect x="150" y="640" width="420" height="220" rx="24" fill="#ffffff" opacity=".06"/>
      <text x="360" y="735" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#ffffff" opacity=".85" letter-spacing="3">
        RASTREIO + SEGURANÇA
      </text>
    </g>
  </svg>`;

  return svgDataUri(svg);
}

export function metalCoinBannerSvg({
  metal = "gold",
  label = "UNITED STATES",
}: {
  metal?: "gold" | "silver" | "cobre";
  label?: string;
}) {
  const palette =
    metal === "gold"
      ? { a: "#f6d67f", b: "#b8862a", rim: "#7a5b1f" }
      : metal === "cobre"
      ? { a: "#f0b08f", b: "#8a3f2a", rim: "#6b2a1f" }
      : { a: "#e6edf5", b: "#7b8794", rim: "#5b6570" };

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="680" height="680" viewBox="0 0 680 680">
    <defs>
      <radialGradient id="rim" cx="35%" cy="28%" r="70%">
        <stop offset="0" stop-color="${palette.a}"/>
        <stop offset="1" stop-color="${palette.b}"/>
      </radialGradient>
      <radialGradient id="face" cx="30%" cy="25%" r="70%">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
        <stop offset="1" stop-color="${palette.a}" stop-opacity="0.55"/>
      </radialGradient>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="18" stdDeviation="16" flood-opacity="0.35"/>
      </filter>
    </defs>

    <g filter="url(#shadow)">
      <circle cx="340" cy="340" r="280" fill="url(#rim)"/>
      <circle cx="340" cy="340" r="255" fill="#ffffff" opacity="0.55"/>
      <circle cx="340" cy="340" r="238" fill="url(#face)"/>
      <circle cx="340" cy="340" r="210" fill="none" stroke="${palette.rim}" stroke-width="12" opacity="0.55"/>
      <circle cx="340" cy="340" r="190" fill="none" stroke="${palette.rim}" stroke-width="6" stroke-dasharray="3 16" opacity="0.35"/>

      <text x="340" y="250" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="26" font-weight="900" fill="rgba(0,0,0,0.35)" letter-spacing="5">
        ${escapeXml(label)}
      </text>
      <text x="340" y="380" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="82" font-weight="900" fill="rgba(0,0,0,0.22)">
        1921
      </text>
      <text x="340" y="420" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="16" font-weight="900" fill="rgba(0,0,0,0.35)" letter-spacing="6">
        FINE • ${metal.toUpperCase()}
      </text>
    </g>
  </svg>`;

  return svgDataUri(svg);
}
