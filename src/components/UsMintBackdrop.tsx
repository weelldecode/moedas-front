import { motion } from "framer-motion";

function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function UsMintBackdrop() {
  const paper = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="520" height="520" viewBox="0 0 520 520">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="
        0 0 0 0 0.62
        0 0 0 0 0.64
        0 0 0 0 0.68
        0 0 0 0.06 0"/>
    </filter>
    <rect width="520" height="520" filter="url(#n)" opacity="0.35"/>
  </svg>`);

  const stripesA = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="260" viewBox="0 0 1400 260">
    <path d="M0 120 C 180 70, 320 170, 500 120 S 820 70, 1000 120 S 1220 170, 1400 120"
      fill="none" stroke="rgba(179,25,66,0.08)" stroke-width="2"/>
    <path d="M0 160 C 200 110, 340 210, 540 160 S 860 110, 1060 160 S 1200 210, 1400 160"
      fill="none" stroke="rgba(10,49,97,0.08)" stroke-width="2"/>
    <path d="M0 200 C 180 150, 320 250, 520 200 S 840 150, 1040 200 S 1220 250, 1400 200"
      fill="none" stroke="rgba(17,24,39,0.06)" stroke-width="2"/>
  </svg>`);

  const stripesB = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="320" viewBox="0 0 1600 320">
    <path d="M0 140 C 220 90, 360 190, 580 140 S 940 90, 1160 140 S 1380 190, 1600 140"
      fill="none" stroke="rgba(179,25,66,0.06)" stroke-width="1.8"/>
    <path d="M0 190 C 220 140, 380 240, 600 190 S 980 140, 1200 190 S 1420 240, 1600 190"
      fill="none" stroke="rgba(10,49,97,0.06)" stroke-width="1.8"/>
  </svg>`);

  const stars = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280">
    <defs>
      <path id="s" d="M10 0 L12.4 6.8 L19.7 7.3 L14 11.9 L15.8 19 L10 15.2 L4.2 19 L6 11.9 L0.3 7.3 L7.6 6.8 Z"/>
    </defs>
    <rect width="280" height="280" fill="transparent"/>
    <g fill="rgba(10,49,97,0.06)">
      ${Array.from({ length: 18 }).map((_, i) => {
        const x = (i % 6) * 46 + 18;
        const y = Math.floor(i / 6) * 56 + 18;
        return `<use href="#s" transform="translate(${x} ${y}) scale(2.2)"/>`;
      }).join("")}
    </g>
  </svg>`);

  const coin = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
    <defs>
      <radialGradient id="g" cx="35%" cy="30%" r="70%">
        <stop offset="0" stop-color="rgba(255,255,255,0.95)"/>
        <stop offset="1" stop-color="rgba(0,0,0,0.08)"/>
      </radialGradient>
    </defs>
    <circle cx="320" cy="320" r="250" fill="url(#g)" opacity="0.7"/>
    <circle cx="320" cy="320" r="232" fill="transparent" stroke="rgba(17,24,39,0.12)" stroke-width="10"/>
    <circle cx="320" cy="320" r="196" fill="transparent" stroke="rgba(10,49,97,0.10)" stroke-width="6" stroke-dasharray="3 14"/>
    <circle cx="320" cy="320" r="150" fill="transparent" stroke="rgba(179,25,66,0.08)" stroke-width="6"/>
    <text x="320" y="260" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
      font-size="22" font-weight="800" fill="rgba(17,24,39,0.16)" letter-spacing="3">
      UNITED STATES
    </text>
    <text x="320" y="392" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
      font-size="18" font-weight="800" fill="rgba(17,24,39,0.14)" letter-spacing="4">
      MINT • COLLECTOR
    </text>
    <text x="320" y="332" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
      font-size="64" font-weight="900" fill="rgba(11,15,26,0.10)">
      1921
    </text>
  </svg>`);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("${paper}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "520px 520px",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url("${stars}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "280px 280px",
          backgroundPosition: "0px 0px",
        }}
        animate={{ backgroundPositionX: ["0px", "-280px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${stripesA}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "1400px 260px",
          backgroundPosition: "0px 48px",
        }}
        animate={{ backgroundPositionX: ["0px", "-1400px"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${stripesB}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "1600px 320px",
          backgroundPosition: "0px 140px",
        }}
        animate={{ backgroundPositionX: ["0px", "-1600px"] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute -left-24 top-10 h-[520px] w-[520px] opacity-[0.10]"
        style={{
          backgroundImage: `url("${coin}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        animate={{ rotate: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-28 bottom-[-40px] h-[560px] w-[560px] opacity-[0.08]"
        style={{
          backgroundImage: `url("${coin}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.05)_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-black/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />
    </div>
  );
}
