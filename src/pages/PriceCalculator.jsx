import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import FAQ from "../components/FAQ";
import Toast from "../components/Toast";
import bannerBg from "../assets/wardrobe designs.webp";
import { allCities } from "../data/cityData";

import {
  dummyFaqs,
  homeDummyFaqs,
  initialAccessories,
  homeRooms,
  shapes,
  configs,
  renderShapeIcon,
} from "../data/priceCalculatorData";

const PriceCalculator = () => {
  const { type } = useParams();
  
  const [activeTab, setActiveTab] = useState(
    type === "home-interior" ? "home" : "kitchen",
  );

  React.useEffect(() => {
    if (type === "home-interior") {
      setActiveTab("home");
    } else {
      setActiveTab("kitchen");
    }
  }, [type]);

  // Calculator states
  const [city, setCity] = useState("Ahmedabad");
  const [config, setConfig] = useState("3 BHK");
  const [shape, setShape] = useState("Parallel");
  const [material, setMaterial] = useState("Particle Board");

  // Form states
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState(true);
  const [possession, setPossession] = useState("");
  const [propertyCity, setPropertyCity] = useState("");

  // Kitchen specific states
  const [shutterFinish, setShutterFinish] = useState(
    "Particle Board Matte Laminate",
  );
  const [accessories, setAccessories] = useState(initialAccessories);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const [estimate, setEstimate] = useState(null);

  const handleAccessoryChange = (id, delta) => {
    setAccessories((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(0, item.count + delta) }
          : item,
      ),
    );
  };

  // Home Interior specific states
  const [selectedRooms, setSelectedRooms] = useState([
    "Kitchen",
    "Master Bedroom",
    "Living Room",
  ]);
  const toggleRoom = (room) => {
    setSelectedRooms((prev) =>
      prev.includes(room) ? prev.filter((r) => r !== room) : [...prev, room],
    );
  };

  // Dimension states
  const [dimensions, setDimensions] = useState({
    WallA: { feet: 5, inch: 0 },
    WallB: { feet: 5, inch: 0 },
    WallC: { feet: 5, inch: 0 },
  });

  const handleDimensionChange = (wall, type, value) => {
    setDimensions((prev) => ({
      ...prev,
      [wall]: { ...prev[wall], [type]: parseInt(value) },
    }));
  };

  // Backend Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobile || !propertyCity || !possession) {
      setToast({
        visible: true,
        message: "Please fill in all required fields (Name, Mobile, City, and Possession).",
        type: "error",
      });
      return;
    }

    // Simple price estimation logic
    const basePrices = {
      "1 BHK": 150000,
      "1.5 BHK": 200000,
      "2 BHK": 300000,
      "2.5 BHK": 400000,
      "3 BHK": 500000,
      "3.5 BHK": 600000,
      "4 BHK": 750000,
      "4+ BHK": 1000000,
    };
    const materialMultiplier = {
      "Particle Board": 1,
      MDF: 1.2,
      HDF: 1.3,
      Plywood: 1.5,
      "Essential (Standard Finishes)": 1,
      "Premium (High-end Finishes)": 1.4,
      "Luxe (Custom & Elite)": 1.8,
    };
    let base = basePrices[config] || 300000;
    let mult = materialMultiplier[material] || 1;
    if (activeTab === "home") {
      base = base * (selectedRooms.length / 3);
    }
    const estimatedPrice = Math.round(base * mult);
    setEstimate(estimatedPrice);

    // Final structured object
    const payload = {
      calculatorType: activeTab,
      customerDetails: { name, mobile, whatsapp, possession, propertyCity },
      estimateData: { city, config, material },
      estimatedPrice,
    };

    if (activeTab === "kitchen") {
      payload.estimateData.shape = shape;
      payload.estimateData.shutterFinish = shutterFinish;
      payload.estimateData.dimensions = dimensions;
      payload.estimateData.accessories = accessories
        .filter((a) => a.count > 0)
        .map((a) => ({ id: a.id, name: a.name, count: a.count }));
    } else {
      payload.estimateData.selectedRooms = selectedRooms;
    }

    const submissions = JSON.parse(
      localStorage.getItem("homelane_estimates") || "[]",
    );
    submissions.push({ ...payload, timestamp: new Date().toISOString() });
    localStorage.setItem("homelane_estimates", JSON.stringify(submissions));
    setToast({
      visible: true,
      message: `Your estimated cost: ₹${estimatedPrice.toLocaleString("en-IN")}. We'll contact you soon!`,
      type: "success",
    });
  };

  const renderDimensions = () => {
    if (activeTab === "home") return null;

    const WallInput = ({ label, wallKey }) => (
      <div className="flex items-center gap-4 mb-3">
        <span className="text-[14px] text-gray-700 w-16">{label}</span>
        <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 rounded px-2 py-1 text-[14px]"
            value={dimensions[wallKey]?.feet || 5}
            onChange={(e) =>
              handleDimensionChange(wallKey, "feet", e.target.value)
            }
          >
            {[...Array(20).keys()].map((i) => (
              <option key={i + 5} value={i + 5}>
                {i + 5} Feet
              </option>
            ))}
          </select>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-[14px]"
            value={dimensions[wallKey]?.inch || 0}
            onChange={(e) =>
              handleDimensionChange(wallKey, "inch", e.target.value)
            }
          >
            {[...Array(12).keys()].map((i) => (
              <option key={i} value={i}>
                {i} Inch
              </option>
            ))}
          </select>
        </div>
      </div>
    );

    return (
      <div className="mt-8 ml-4">
        {shape === "L-Shape" && (
          <>
            <WallInput label="Wall A" wallKey="WallA" />
            <WallInput label="Wall B" wallKey="WallB" />
          </>
        )}
        {shape === "U-Shape" && (
          <>
            <WallInput label="Wall A" wallKey="WallA" />
            <WallInput label="Wall B" wallKey="WallB" />
            <WallInput label="Wall C" wallKey="WallC" />
          </>
        )}
        {shape === "Parallel" && (
          <>
            <WallInput label="Wall A" wallKey="WallA" />
            <WallInput label="Wall B" wallKey="WallB" />
          </>
        )}
        {shape === "Straight" && (
          <>
            <WallInput label="Wall A" wallKey="WallA" />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="pt-[70px] bg-[#f9f9f9]">
      {/* Search Header Banner */}
      <div className="relative bg-[#e6ecef] flex flex-col md:flex-row h-auto md:h-[300px] overflow-hidden">
        {/* Left Side text */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-10 z-10 relative">
          <h1 className="text-3xl md:text-4xl font-normal text-[#212529] mb-4">
            {activeTab === "kitchen"
              ? "Modular Kitchen Cost Calculator"
              : "Home Interior Cost Calculator"}
          </h1>
          <p className="text-[18px] text-[#4a4a4a]">Simple. Quick. Easy.</p>
        </div>
        {/* Right Side Image (Abstracted) */}
        <div
          className="flex-1 right-img bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerBg})`, opacity: 0.8 }}
        >
          {/* Fallback pattern or image */}
          <div className="w-full h-full bg-gradient-to-r from-[#e6ecef] to-transparent absolute inset-0"></div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="text-[12px] text-gray-500 mb-6 font-medium">
          <Link to="/" className="text-[#e71c24] hover:underline">
            Home
          </Link>{" "}
          <span className="mx-1">/</span> Cost Calculator
        </div>

        {/* Option Tabs Navigation */}
        <div className="flex gap-4 mb-8">
          <Link
            to="/price-calculator/kitchen"
            className={`px-6 py-2 rounded-full font-medium text-[14px] transition-colors border ${activeTab === "kitchen" ? "bg-[#e71c24] text-white border-[#e71c24]" : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"}`}
          >
            Kitchen Price Calculator
          </Link>
          <Link
            to="/price-calculator/home-interior"
            className={`px-6 py-2 rounded-full font-medium text-[14px] transition-colors border ${activeTab === "home" ? "bg-[#e71c24] text-white border-[#e71c24]" : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"}`}
          >
            Home Interior Price Calculator
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16 relative">
          {/* LEFT: Steps */}
          <div className="flex-1 space-y-6">
            {/* Step 1 */}
            <div className="bg-white p-6 border border-gray-200 rounded-[4px] shadow-sm">
              <h3 className="text-[16px] font-semibold text-[#212529] mb-6">
                Step 1 : Select Your City
              </h3>
              <select
                className="w-full md:w-1/2 border-b border-gray-300 pb-2 text-[14px] text-gray-700 focus:outline-none focus:border-[#e71c24]"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {allCities.slice(0, 50).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 border border-gray-200 rounded-[4px] shadow-sm">
              <h3 className="text-[16px] font-semibold text-[#212529] mb-6">
                Step 2 : Home Configuration
              </h3>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {configs.map((c) => (
                  <label
                    key={c}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${config === c ? "border-[#e71c24]" : "border-gray-400 group-hover:border-gray-600"}`}
                    >
                      {config === c && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#e71c24]"></div>
                      )}
                    </div>
                    <span className="text-[14px] text-gray-700">{c}</span>
                    <input
                      type="radio"
                      className="hidden"
                      name="config"
                      value={c}
                      checked={config === c}
                      onChange={() => setConfig(c)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3 (Only for Kitchen right now, or adaptable for Home if requested) */}
            {activeTab === "kitchen" && (
              <div className="bg-white p-6 border border-gray-200 rounded-[4px] shadow-sm">
                <h3 className="text-[16px] font-semibold text-[#212529] mb-8">
                  Step 3 : Kitchen Shape
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {shapes.map((s) => (
                    <label
                      key={s}
                      className="flex flex-col items-center cursor-pointer group"
                    >
                      <div
                        className={`mb-4 pb-4 border-b-2 transition-colors w-full flex items-center justify-center ${shape === s ? "border-transparent" : "border-transparent"}`}
                      >
                        <div
                          className={`transition-all duration-300 ${shape === s ? "scale-110 text-[#e71c24]" : "text-gray-400 grayscale"}`}
                        >
                          {renderShapeIcon(s)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${shape === s ? "border-[#e71c24]" : "border-gray-400 group-hover:border-gray-600"}`}
                        >
                          {shape === s && (
                            <div className="w-2 h-2 rounded-full bg-[#e71c24]"></div>
                          )}
                        </div>
                        <span className="text-[14px] text-gray-800 font-medium">
                          {s}
                        </span>
                        <input
                          type="radio"
                          className="hidden"
                          name="shape"
                          value={s}
                          checked={shape === s}
                          onChange={() => setShape(s)}
                        />
                      </div>
                    </label>
                  ))}
                </div>

                {renderDimensions()}
              </div>
            )}

            {/* Step 3 for Home */}
            {activeTab === "home" && (
              <div className="bg-white p-6 border border-gray-200 rounded-[4px] shadow-sm">
                <h3 className="text-[16px] font-semibold text-[#212529] mb-6">
                  Step 3 : Rooms to Furnish
                </h3>
                <div className="flex flex-wrap gap-3">
                  {homeRooms.map((room) => (
                    <button
                      key={room}
                      onClick={() => toggleRoom(room)}
                      className={`px-4 py-2 rounded-full border text-[13px] transition-colors ${selectedRooms.includes(room) ? "bg-[#e71c24] text-white border-[#e71c24]" : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"}`}
                    >
                      {room}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4 */}
            <div className="bg-white p-6 border border-gray-200 rounded-[4px] shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-full">
                <h3 className="text-[16px] font-semibold text-[#212529] mb-4">
                  {activeTab === "kitchen"
                    ? "Step 4 : Cabinet Material"
                    : "Step 4 : Specific Requirements"}
                </h3>
                <select
                  className="w-full md:w-1/2 border-b border-gray-300 pb-2 text-[14px] text-gray-700 focus:outline-none focus:border-[#e71c24] bg-transparent"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                >
                  {activeTab === "kitchen" ? (
                    <>
                      <option>Particle Board</option>
                      <option>MDF</option>
                      <option>HDF</option>
                      <option>Plywood</option>
                    </>
                  ) : (
                    <>
                      <option>Essential (Standard Finishes)</option>
                      <option>Premium (High-end Finishes)</option>
                      <option>Luxe (Custom & Elite)</option>
                    </>
                  )}
                </select>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#e71c24] text-white flex items-center justify-center text-[12px] font-bold">
                i
              </div>
            </div>

            {/* Step 5 */}
            {activeTab === "kitchen" && (
              <div className="bg-white p-6 border border-gray-200 rounded-[4px] shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-full">
                  <h3 className="text-[16px] font-semibold text-[#212529] mb-4">
                    Step 5 : Shutter Material & Finish
                  </h3>
                  <select
                    className="w-full md:w-1/2 border-b border-gray-300 pb-2 text-[14px] text-gray-700 focus:outline-none focus:border-[#e71c24] bg-transparent"
                    value={shutterFinish}
                    onChange={(e) => setShutterFinish(e.target.value)}
                  >
                    <option>Particle Board Matte Laminate</option>
                    <option>MDF High Gloss Laminate</option>
                    <option>Acrylic Finish</option>
                    <option>PU Paint Finish</option>
                  </select>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#e71c24] text-white flex items-center justify-center text-[12px] font-bold">
                  i
                </div>
              </div>
            )}

            {/* Step 6 */}
            {activeTab === "kitchen" && (
              <div className="bg-white p-6 border border-gray-200 rounded-[4px] shadow-sm overflow-hidden">
                <h3 className="text-[16px] font-semibold text-[#212529] mb-6">
                  Step 6 : Accessories
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-4 items-start">
                  {accessories.map((acc) => (
                    <div
                      key={acc.id}
                      className="min-w-[160px] w-[160px] flex flex-col items-center flex-shrink-0"
                    >
                      <div className="bg-gray-50 w-full aspect-square mb-3 flex items-center justify-center p-2 rounded-[2px] overflow-hidden border border-gray-200">
                        <img
                          src={acc.img}
                          alt={acc.name}
                          className="object-cover w-full h-full mix-blend-multiply rounded-[2px]"
                        />
                      </div>
                      <p className="text-[12px] text-center text-gray-700 mb-3 leading-tight min-h-[36px]">
                        {acc.name}
                      </p>
                      <div className="flex items-center border border-red-200 rounded-[2px] overflow-hidden">
                        <button
                          onClick={() => handleAccessoryChange(acc.id, -1)}
                          className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-100 font-medium"
                        >
                          -
                        </button>
                        <div className="w-8 h-7 flex items-center justify-center bg-[#e71c24] text-white text-[13px] font-medium">
                          {acc.count}
                        </div>
                        <button
                          onClick={() => handleAccessoryChange(acc.id, 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-100 font-medium"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Estimate Form (Sticky) */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-8 rounded-[4px] sticky top-[100px]">
              <div className="text-center mb-6">
                <h2 className="text-[22px] font-bold text-[#212529] mb-1">
                  Your Estimate Is Almost Ready
                </h2>
                <p className="text-[14px] text-gray-600">
                  Fill in your details to view estimate
                </p>
              </div>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-gray-300 pb-2 text-[14px] focus:outline-none focus:border-[#e71c24]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
                  <div className="flex items-center gap-1 shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt="IN"
                      className="w-5 h-auto border border-gray-200"
                    />
                    <span className="text-[14px] text-gray-600 text-[10px]">
                      &#9662;
                    </span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full text-[14px] focus:outline-none"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-[13px] text-gray-700">
                    Send me updates on WhatsApp
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={whatsapp}
                      onChange={() => setWhatsapp(!whatsapp)}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#e71c24]"></div>
                  </label>
                </div>

                <select
                  className="w-full border-b border-gray-300 pb-2 text-[14px] text-gray-600 focus:outline-none focus:border-[#e71c24] bg-transparent"
                  value={possession}
                  onChange={(e) => setPossession(e.target.value)}
                >
                  <option value="" disabled>
                    Possession in
                  </option>
                  <option>Less than 3 months</option>
                  <option>3 to 6 months</option>
                  <option>More than 6 months</option>
                </select>

                <select
                  className="w-full border-b border-gray-300 pb-2 text-[14px] text-gray-600 focus:outline-none focus:border-[#e71c24] bg-transparent"
                  value={propertyCity}
                  onChange={(e) => setPropertyCity(e.target.value)}
                >
                  <option value="" disabled>
                    Select your property city
                  </option>
                  {allCities.slice(0, 50).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#e71c24] hover:bg-[#c41920] text-white font-bold py-3 rounded-[4px] transition-colors mt-4 text-[15px]"
                >
                  Get Free Estimate
                </button>

                {estimate && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded text-center">
                    <p className="text-[14px] font-bold text-green-700">
                      Estimated Cost
                    </p>
                    <p className="text-[28px] font-bold text-[#212529]">
                      ₹{estimate.toLocaleString("en-IN")}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      *Approximate estimate. Actual cost may vary.
                    </p>
                  </div>
                )}

                <p className="text-[10px] text-gray-500 text-center leading-tight mt-4 px-2">
                  By submitting, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#e71c24] hover:underline"
                  >
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#e71c24] hover:underline"
                  >
                    terms of use
                  </a>
                  , allowing us to use your Information as outlined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Data rendering for FAQ */}
      <FAQ
        items={activeTab === "kitchen" ? dummyFaqs : homeDummyFaqs}
        title={`Frequently asked questions about ${activeTab === "kitchen" ? "modular kitchen" : "home interior"} cost calculation`}
      />

      <Toast message={toast.message} visible={toast.visible} type={toast.type} onClose={() => setToast({ ...toast, visible: false })} />
    </div>
  );
};

export default PriceCalculator;
