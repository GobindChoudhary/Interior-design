import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-[#212529]">Privacy Policy</h1>
      <p className="text-[15px] text-[#7b7b7b] mb-8">
        This page is under construction. Our privacy policy will be available
        here soon.
      </p>
      <Link to="/" className="text-[#e71c24] hover:underline font-medium">
        &larr; Back to Home
      </Link>
    </div>
  );
}
