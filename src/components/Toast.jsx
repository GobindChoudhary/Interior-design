import { useEffect } from "react";

export default function Toast({ message, visible, onClose, type = "success" }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-lg shadow-lg text-white text-[14px] font-medium flex items-center gap-3 transition-all duration-300 ${
        type === "success" ? "bg-green-600" : "bg-red-500"
      }`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white ml-2 text-lg leading-none"
      >
        &times;
      </button>
    </div>
  );
}
