// Partners — real partner and media logos
import asianLogo from "../assets/imgi_76_Asian.png";
import ebcoLogo from "../assets/imgi_77_Ebco.png";
import rehauLogo from "../assets/imgi_83_Rehau.png";
import heritageLogo from "../assets/imgi_80_Heritage.png";
import merinoLogo from "../assets/imgi_82_Merino.png";
import stylamLogo from "../assets/imgi_85_Stylam.png";
import nipponLogo from "../assets/imgi_71_nippon_paint_logo-1668690725659656321db4e39.png";
import cromtponLogo from "../assets/imgi_91_Crompton.png";
import boschLogo from "../assets/imgi_92_Bosch.png";
import philipsLogo from "../assets/imgi_97_Philips.png";
import wiproLogo from "../assets/imgi_98_Wipro.png";
import livemintLogo from "../assets/imgi_70_livemint02.jpg";
import toiLogo from "../assets/imgi_67_toi02.jpg";
import inc42Logo from "../assets/imgi_68_inc4202.jpg";
import etLogo from "../assets/imgi_69_et02.jpg";
import fevLogo from "../assets/imgi_74_fev02.jpg";

const newsLogos = [
  { img: livemintLogo, name: "Livemint" },
  { img: toiLogo, name: "Times of India" },
  { img: inc42Logo, name: "Inc42" },
  { img: etLogo, name: "ET Realty" },
  { img: fevLogo, name: "Fevicol" },
];

const partnerLogos = [
  { img: asianLogo, name: "Asian Paints" },
  { img: ebcoLogo, name: "Ebco" },
  { img: rehauLogo, name: "Rehau" },
  { img: heritageLogo, name: "Heritage" },
  { img: merinoLogo, name: "Merino" },
  { img: stylamLogo, name: "Stylam" },
  { img: nipponLogo, name: "Nippon Paint" },
  { img: cromtponLogo, name: "Crompton" },
  { img: boschLogo, name: "Bosch" },
  { img: philipsLogo, name: "Philips" },
  { img: wiproLogo, name: "Wipro" },
];

const Partners = () => (
  <section
    className="bg-white py-14 px-4"
    style={{ borderTop: "1px solid #f0f0f0" }}
  >
    <div className="max-w-[1400px] mx-auto">
      {/* News */}
      <h2 className="text-2xl font-bold capitalize text-center mb-8 mt-2">
        We're making news
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
        {newsLogos.slice(0, 4).map((m, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-white rounded-xl shadow-md border border-[#e0e0e0]"
            style={{ width: 210, height: 90 }}
          >
            <img
              src={m.img}
              alt={m.name}
              title={m.name}
              className="object-contain"
              style={{ maxHeight: 60, maxWidth: 160 }}
            />
          </div>
        ))}
      </div>

      <div className="h-px mb-14" style={{ background: "#f0f0f0" }} />

      {/* Partners */}
      <h3 className="text-2xl font-bold capitalize text-center mb-8">
        Our trusted partners
      </h3>
      <style>{`
        @keyframes marquee-partners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="overflow-hidden w-full relative"
        style={{ minHeight: 44 }}
      >
        {/* Left blur overlay */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 80,
            height: "100%",
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, #fff 70%, rgba(255,255,255,0))",
          }}
        />
        {/* Right blur overlay */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 80,
            height: "100%",
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(to left, #fff 70%, rgba(255,255,255,0))",
          }}
        />
        <div
          className="whitespace-nowrap flex min-w-max"
          style={{
            width: "200%",
            animation: "marquee-partners 22s linear infinite",
            alignItems: "center",
            gap: "clamp(18px, 6vw, 56px)",
          }}
        >
          {[...partnerLogos, ...partnerLogos].map((p, i) => (
            <img
              key={i}
              src={p.img}
              alt={p.name}
              title={p.name}
              className="object-contain transition-all cursor-pointer"
              style={{
                height: "clamp(22px, 5vw, 38px)",
                maxWidth: "clamp(60px, 18vw, 120px)",
                margin: "0 8px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
