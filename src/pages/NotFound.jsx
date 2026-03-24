import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[120px] font-bold text-gray-200 leading-none">404</h1>
      <h2 className="text-[28px] font-bold text-[#212529] mb-4">
        Page Not Found
      </h2>
      <p className="text-[16px] text-[#7b7b7b] mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#e0b855] hover:bg-[#c4a14a] text-white font-bold px-8 py-3 rounded-[4px] transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
