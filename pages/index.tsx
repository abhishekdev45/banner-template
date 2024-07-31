import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import adData from '../data/ads.json';

interface AdBanner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  availableImages: string[];
}

const HomePage: React.FC = () => {
  const [ads, setAds] = useState<AdBanner[]>(adData);
  const [editBanner, setEditBanner] = useState<AdBanner | null>(null);

  const handleEdit = (id: number) => {
    const bannerToEdit = ads.find(ad => ad.id === id);
    if (bannerToEdit) {
      setEditBanner(bannerToEdit);
    }
  };

  const handleSave = (updatedBanner: AdBanner) => {
    const updatedAds = ads.map(ad =>
      ad.id === updatedBanner.id ? updatedBanner : ad
    );
    setAds(updatedAds);
  };

  const handleClose = () => {
    setEditBanner(null);
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ads.map(ad => (
        <BannerImageComp key={ad.id} {...ad} onEdit={handleEdit} />
      ))}
      {editBanner && (
        <EditBannerTemplateBs
          banner={editBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default HomePage;
