import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import BannerImageComp from './BannerImageComp'; // Import the banner component for preview

interface AdBannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  availableImages: string[];
}

interface EditBannerTemplateBsProps {
  banner: AdBannerProps;
  onSave: (banner: AdBannerProps) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ banner, onSave, onClose }) => {
  const [editBanner, setEditBanner] = useState<AdBannerProps>(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditBanner({ ...editBanner, [name]: value });
  };

  const handleSave = () => {
    onSave(editBanner);
    onClose();
  };

  const handleImageSelect = (image: string) => {
    setEditBanner({ ...editBanner, image });
  };

  useEffect(() => {
    setEditBanner(banner);
  }, [banner]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FiX className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold mb-5">Edit Banner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                value={editBanner.title}
                onChange={handleChange}
                placeholder="Title"
                className="mt-1 block w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={editBanner.description}
                onChange={handleChange}
                placeholder="Description"
                className="mt-1 block w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cta" className="block text-sm font-medium text-gray-700">
                Button Text
              </label>
              <input
                id="cta"
                name="cta"
                value={editBanner.cta}
                onChange={handleChange}
                placeholder="Call-to-Action"
                className="mt-1 block w-full p-2 border rounded text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Select Image</label>
              <div className="flex space-x-2 mt-2 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300">
                {editBanner.availableImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => handleImageSelect(img)}
                    alt="thumbnail"
                    className={`w-16 h-16 rounded-full object-cover cursor-pointer border-2 ${
                      editBanner.image === img ? 'border-blue-500' : 'border-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded mr-2"
              >
                Save
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Preview</h3>
            <BannerImageComp {...editBanner} onEdit={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
