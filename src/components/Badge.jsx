import { FaShoppingCart } from "react-icons/fa";

const Badge = () => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center px-3 h-10 text-sm font-medium text-center text-white bg-gray-700 rounded-lg"
    >
      <FaShoppingCart className="w-5 h-5" />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
        20
      </div>
    </button>
  );
};

export default Badge;
