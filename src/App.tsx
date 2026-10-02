/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { COFFEE_LOTS, CoffeeLot } from './data/coffeeLots';
import { Language } from './data/translations';
import { HomeView } from './components/HomeView';
import { CollectionView } from './components/CollectionView';
import { DetailView } from './components/DetailView';

type ViewMode = 'home' | 'collection' | 'detail';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedLot, setSelectedLot] = useState<CoffeeLot | null>(null);
  const [currentLang, setCurrentLang] = useState<Language>('EN');

  // Sync with browser URL hash for friendly share links and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('lot/')) {
        const lotId = hash.replace('lot/', '').toLowerCase();
        const found = COFFEE_LOTS.find(
          (l) => l.id.toLowerCase() === lotId
        );
        if (found) {
          setSelectedLot(found);
          setCurrentView('detail');
          return;
        }
      }
      if (hash === 'collection') {
        setCurrentView('collection');
        return;
      }
      if (hash === 'home' || !hash) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = 'home';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCollection = () => {
    window.location.hash = 'collection';
    setCurrentView('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDetail = (lot: CoffeeLot) => {
    setSelectedLot(lot);
    window.location.hash = `lot/${lot.id.toLowerCase()}`;
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F2EB] selection:bg-[#E2A748] selection:text-[#1F2927]">
      {currentView === 'home' && (
        <HomeView
          onNavigateToCollection={navigateToCollection}
          currentLang={currentLang}
          onSelectLang={setCurrentLang}
        />
      )}

      {currentView === 'collection' && (
        <CollectionView
          lots={COFFEE_LOTS}
          onSelectLot={navigateToDetail}
          onNavigateHome={navigateToHome}
          currentLang={currentLang}
          onSelectLang={setCurrentLang}
        />
      )}

      {currentView === 'detail' && selectedLot && (
        <DetailView
          lot={selectedLot}
          allLots={COFFEE_LOTS}
          onBackToCollection={navigateToCollection}
          onSelectLot={navigateToDetail}
          currentLang={currentLang}
        />
      )}
    </div>
  );
}
