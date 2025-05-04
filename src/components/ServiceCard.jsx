import { FaCheckCircle } from "react-icons/fa";

export default function ServiceCard({ title, description, features }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 flex flex-col gap-3 sm:gap-4 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-base text-gray-900 mb-3">{description}</p>
      <ul className="space-y-1 sm:space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-800 text-sm">
            <FaCheckCircle className="text-green-500" /> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
