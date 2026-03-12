// Partners — real partner and media logos
import livemintLogo from "../assets/imgi_70_livemint02.jpg";
import toiLogo from "../assets/imgi_67_toi02.jpg";
import inc42Logo from "../assets/imgi_68_inc4202.jpg";
import etLogo from "../assets/imgi_69_et02.jpg";

import futuraLogo from "../assets/imgi_93_Futura.png";
import frankeLogo from "../assets/imgi_94_Franke.png";
import jaquarLogo from "../assets/imgi_95_Jaguar.png";
import ruheLogo from "../assets/imgi_96_Ruhe.png";
import philipsLogo from "../assets/imgi_97_Philips.png";
import wiproLogo from "../assets/imgi_98_Wipro.png";

const newsLogos = [
  { img: livemintLogo, name: "Livemint" },
  { img: toiLogo, name: "Times of India" },
  { img: inc42Logo, name: "Inc42" },
  { img: etLogo, name: "ET Realty" },
];

const partnerLogos = [
  { img: futuraLogo, name: "Futura" },
  { img: frankeLogo, name: "Franke" },
  { img: jaquarLogo, name: "Jaquar" },
  { img: ruheLogo, name: "Ruhe" },
  { img: philipsLogo, name: "Philips" },
  { img: wiproLogo, name: "Wipro" },
];

const Partners = () => (
  <section
    className="bg-white py-14 px-4"
    style={{ borderTop: "1px solid #f0f0f0" }}
  >
    <div className="max-w-[1400px] mx-auto overflow-hidden">
      {/* News */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#212529] capitalize text-center mb-8 mt-2">
        We're making news
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 md:gap-6 mb-14 flex-wrap">
        {newsLogos.map((m, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-white rounded-[4px] border border-[#f0f0f0] overflow-hidden hover:shadow-md transition-shadow duration-300"
            style={{ width: 220, height: 80 }}
          >
            <img
              src={m.img}
              alt={m.name}
              title={m.name}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              style={{ maxHeight: 60, maxWidth: 160 }}
            />
          </div>
        ))}
      </div>

      <div className="h-px mb-14" style={{ background: "#f0f0f0" }} />

      {/* Partners */}
      <h3 className="text-2xl md:text-3xl font-bold text-[#212529] capitalize text-center mb-10">
        Our trusted partners
      </h3>
      <div
        className="w-full overflow-x-auto mb-10 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex flex-row justify-between items-center gap-12 md:gap-16 min-w-max mx-auto px-4"
          style={{ maxWidth: 1200 }}
        >
          {partnerLogos.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 150, height: 80 }}
            >
              <img
                src={p.img}
                alt={p.name}
                title={p.name}
                className="object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{
                  maxHeight: i === 5 ? "80px" : "60px",
                  maxWidth: "100%",
                }} // Make Stylam larger
              />
            </div>
          ))}
        </div>
      </div>
      {/* Pagination dots */}
      <div className="flex justify-center items-center gap-[6px] mb-4">
        {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full ${idx === 1 ? "bg-[#e71c24] scale-110" : "bg-[#c4c4c4]"}`}
            style={{ opacity: idx === 1 ? 1 : 0.6 }}
          />
        ))}
      </div>
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  </section>
);

export default Partners;
