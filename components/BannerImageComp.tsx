import React from 'react';
import { FiEdit } from 'react-icons/fi';

interface AdBannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<AdBannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <div
      className="relative p-4 rounded-lg m-3 text-white bg-cover bg-center shadow-lg h-auto md:h-80 flex items-center border-4 border-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Edit Button */}
      <button
        onClick={() => onEdit(id)}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <FiEdit className="text-black" />
      </button>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-24 h-48 md:w-32 md:h-64 rounded-lg object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="ml-4 md:ml-6 flex-1 min-w-0">
        <h2 className="text-lg md:text-3xl font-bold mb-2 text-black bg-white bg-opacity-75 px-3 py-1 rounded-lg">
          {title}
        </h2>
        <p className="text-xs md:text-lg text-black bg-white bg-opacity-75 px-3 py-1 rounded-lg">
          {description}
        </p>
        <button className="mt-2 bg-black text-xs md:text-base text-white font-semibold px-4 py-2 rounded hover:bg-gray-800 transition">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
