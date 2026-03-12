import { Link } from "react-router-dom";
import { allCities } from "../data/cityData";

export default function AllCities() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2 text-[#212529]">
        Interior Designers Across India
      </h1>
      <p className="text-[15px] text-[#7b7b7b] mb-10">
        Find the best interior designers in your city
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allCities.map((city) => (
          <Link
            key={city}
            to={`/cities/interior-designers-${city.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-[15px] text-[#4a4a4a] hover:text-[#e71c24] py-2 px-3 rounded hover:bg-red-50 transition-colors"
          >
            {city}
          </Link>
        ))}
      </div>
    </div>
  );
}
