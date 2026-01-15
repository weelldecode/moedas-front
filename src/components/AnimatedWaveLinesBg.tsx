import { motion } from "framer-motion";

function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function AnimatedWaveLinesBg() {
  const wave1 = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="220" viewBox="0 0 1200 220">
    <path d="M0 120 C 140 70, 260 170, 400 120 S 660 70, 800 120 S 1060 170, 1200 120"
      fill="none" stroke="rgba(17,24,39,0.05)" stroke-width="1.5" />
    <path d="M0 160 C 160 110, 260 210, 420 160 S 700 110, 860 160 S 1040 210, 1200 160"
      fill="none" stroke="rgba(17,24,39,0.04)" stroke-width="1.5" />
    <path d="M0 80 C 150 30, 280 130, 430 80 S 680 30, 840 80 S 1040 130, 1200 80"
      fill="none" stroke="rgba(10,49,97,0.04)" stroke-width="1.5" />
  </svg>`);

  const wave2 = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="260" viewBox="0 0 1400 260">
    <path d="M0 140 C 180 90, 320 190, 500 140 S 820 90, 1000 140 S 1220 190, 1400 140"
      fill="none" stroke="rgba(179,25,66,0.04)" stroke-width="1.5" />
    <path d="M0 200 C 200 150, 340 250, 540 200 S 860 150, 1060 200 S 1200 250, 1400 200"
      fill="none" stroke="rgba(17,24,39,0.03)" stroke-width="1.5" />
  </svg>`);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <motion.div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url("${wave1}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "1200px 220px",
          backgroundPosition: "0px 40px",
        }}
        animate={{
          backgroundPositionX: ["0px", "-1200px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url("${wave2}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "1400px 260px",
          backgroundPosition: "0px 120px",
        }}
        animate={{
          backgroundPositionX: ["0px", "-1400px"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.04)_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-black/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10" />
    </div>
  );
}
