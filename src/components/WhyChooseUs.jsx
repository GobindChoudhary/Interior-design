/**
 * WhyChooseUs — matches HomeLane's icon strip with centered title
 *
 * Layout (from screenshot):
 *  - White background
 *  - Centered bold title "Why Choose Us"
 *  - Single row of large colored icons from assets with label underneath
 *  - Items: 55000+ Homes Delivered, 74 Studios, 42 Cities,
 *           Delivery in 45 days*, No Hidden Costs, Flat 10 Year Warranty
 */
import homesCompletedIcon  from '../assets/imgi_202_homes_completed.svg';
import warrantyIcon        from '../assets/imgi_200_material_warranty.svg';
import designExpertsIcon   from '../assets/imgi_201_design_experts.svg';
import installationDaysIcon from '../assets/imgi_203_installation_days.svg';

// Additional icon for Studios — inline SVG (matches HomeLane's building illustration style)
const StudiosIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="32" width="60" height="40" rx="2" fill="none" stroke="#515050" strokeWidth="3"/>
    {/* door */}
    <rect x="34" y="50" width="12" height="22" rx="1" fill="none" stroke="#E22029" strokeWidth="2.5"/>
    {/* windows */}
    <rect x="14" y="38" width="12" height="10" rx="1" fill="none" stroke="#515050" strokeWidth="2"/>
    <rect x="54" y="38" width="12" height="10" rx="1" fill="none" stroke="#515050" strokeWidth="2"/>
    {/* roof */}
    <path d="M5 34L40 8L75 34" stroke="#515050" strokeWidth="3" strokeLinejoin="round" fill="none"/>
    {/* storefront stripe */}
    <rect x="10" y="38" width="60" height="3" rx="0" fill="#E22029" opacity="0.18"/>
    {/* sign */}
    <rect x="26" y="34" width="28" height="6" rx="1" fill="#E22029" opacity="0.55"/>
  </svg>
);

// Cities icon — building silhouette
const CitiesIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* left building */}
    <rect x="8" y="28" width="22" height="44" rx="1" fill="none" stroke="#515050" strokeWidth="2.5"/>
    <rect x="12" y="34" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="22" y="34" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="12" y="44" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="22" y="44" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="12" y="54" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="22" y="54" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    {/* center tall building */}
    <rect x="30" y="14" width="20" height="58" rx="1" fill="none" stroke="#E22029" strokeWidth="2.5"/>
    <rect x="34" y="20" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    <rect x="41" y="20" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    <rect x="34" y="30" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    <rect x="41" y="30" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    <rect x="34" y="40" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    <rect x="41" y="40" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    <rect x="34" y="50" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    <rect x="41" y="50" width="5" height="5" rx="0.5" fill="#E22029" opacity="0.3"/>
    {/* right building */}
    <rect x="50" y="28" width="22" height="44" rx="1" fill="none" stroke="#515050" strokeWidth="2.5"/>
    <rect x="54" y="34" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="62" y="34" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="54" y="44" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    <rect x="62" y="44" width="6" height="6" rx="0.5" fill="#515050" opacity="0.25"/>
    {/* ground */}
    <line x1="4" y1="72" x2="76" y2="72" stroke="#515050" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// No Hidden Costs — rupee eye icon
const NoCostIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* eye outline */}
    <path d="M8 40C8 40 20 16 40 16C60 16 72 40 72 40C72 40 60 64 40 64C20 64 8 40 8 40Z"
      fill="none" stroke="#515050" strokeWidth="3" strokeLinejoin="round"/>
    {/* iris */}
    <circle cx="40" cy="40" r="14" fill="#E22029"/>
    <circle cx="40" cy="40" r="8" fill="white"/>
    {/* rupee */}
    <text x="40" y="45" textAnchor="middle" fontSize="12" fontWeight="900" fill="#E22029" fontFamily="Lato, sans-serif">₹</text>
  </svg>
);

const items = [
  { img: homesCompletedIcon,   label: '55000+\nHomes Delivered' },
  { Icon: StudiosIcon,         label: '74 Studios' },
  { Icon: CitiesIcon,          label: '42 Cities' },
  { img: installationDaysIcon, label: 'Delivery in 45 days*' },
  { Icon: NoCostIcon,          label: 'No Hidden Costs' },
  { img: warrantyIcon,         label: 'Flat 10 Year Warranty' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-10 px-6" style={{ borderBottom: '1px solid #f0f0f0' }}>
      <h2 className="text-[22px] font-bold text-center text-[#212529] mb-10">
        Why Choose Us
      </h2>

      <div className="max-w-[1100px] mx-auto flex flex-wrap items-start justify-center gap-8 md:gap-12 lg:gap-16">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 cursor-pointer group"
            style={{ minWidth: 100, maxWidth: 120 }}
          >
            {/* icon */}
            <div className="w-20 h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.label.replace('\n', ' ')}
                  className="w-[72px] h-[72px] object-contain"
                />
              ) : (
                <item.Icon />
              )}
            </div>
            {/* label — support multi-line via \n */}
            <p className="text-[12px] font-semibold text-[#212529] text-center leading-snug">
              {item.label.split('\n').map((line, j) => (
                <span key={j} className="block">{line}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
