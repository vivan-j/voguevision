import React, { useState } from 'react';
import { Search, Heart, User, Home, ArrowLeft } from 'lucide-react';

const VogueVisoApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const Header = ({ showBack = false, title }) => (
    <div className="px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {showBack && (
          <button onClick={() => setCurrentScreen('home')} className="p-1">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
        )}
        <div className="w-10 h-10 bg-orange-300 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">V</span>
        </div>
        <span className="text-xl font-bold">Vogue Viso</span>
      </div>
    </div>
  );

  const NavigationBar = () => (
    <div className="flex justify-center items-center space-x-12 py-4 border-t border-gray-100 bg-white">
      <button 
        onClick={() => setCurrentScreen('home')}
        className={`p-2 ${currentScreen === 'home' ? 'text-orange-500' : 'text-gray-600'}`}
      >
        <Home size={24} />
      </button>
      <button 
        onClick={() => setCurrentScreen('search')}
        className={`p-2 ${currentScreen === 'search' ? 'text-orange-500' : 'text-gray-600'}`}
      >
        <Search size={24} />
      </button>
      <button 
        onClick={() => setCurrentScreen('favorites')}
        className={`p-2 ${currentScreen === 'favorites' ? 'text-orange-500' : 'text-gray-600'}`}
      >
        <Heart size={24} />
      </button>
      <button 
        onClick={() => setCurrentScreen('profile')}
        className={`p-2 ${currentScreen === 'profile' ? 'text-orange-500' : 'text-gray-600'}`}
      >
        <User size={24} />
      </button>
    </div>
  );

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold leading-tight">Create Outfits</h1>
            </div>
            <div className="flex-1 bg-gray-100 rounded-3xl mx-4 mb-6 relative overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Cg transform='translate(50,80)'%3E%3Crect x='50' y='0' width='100' height='200' rx='50' fill='%23d1d5db'/%3E%3Crect x='75' y='220' width='50' height='100' rx='25' fill='%23d1d5db'/%3E%3Cpath d='M75,50 Q100,30 125,50 Q125,70 100,80 Q75,70 75,50' fill='%236b7280'/%3E%3Crect x='40' y='120' width='120' height='80' rx='8' fill='%23374151'/%3E%3Crect x='85' y='130' width='30' height='60' rx='4' fill='%23e5e7eb'/%3E%3C/g%3E%3C/svg%3E"
                alt="Model"
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              onClick={() => setCurrentScreen('style')}
              className="mx-4 mb-8 bg-orange-300 text-black font-semibold py-4 rounded-full text-lg"
            >
              SHOP SIMILAR
            </button>
          </div>
        );

      case 'style':
        return (
          <div className="flex-1 flex flex-col">
            <Header showBack={true} />
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold leading-tight">Find your style</h1>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-100 rounded-full mb-8 mt-8 relative overflow-hidden">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23f3f4f6'/%3E%3Cg transform='translate(50,30)'%3E%3Crect x='25' y='50' width='50' height='100' rx='25' fill='%23d1d5db'/%3E%3Cpath d='M35,70 Q50,60 65,70 Q65,85 50,90 Q35,85 35,70' fill='%236b7280'/%3E%3Cpath d='M25,20 Q50,5 75,20 Q75,45 50,50 Q25,45 25,20' fill='%23a78bfa'/%3E%3C/g%3E%3C/svg%3E"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1"></div>
              <button 
                onClick={() => setCurrentScreen('similar')}
                className="mx-4 mb-8 bg-orange-300 text-black font-semibold py-4 px-12 rounded-full text-lg w-full max-w-xs"
              >
                CONTINUE
              </button>
            </div>
          </div>
        );

      case 'similar':
        return (
          <div className="flex-1 flex flex-col">
            <Header showBack={true} />
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold leading-tight">Similar Items</h1>
            </div>
            <div className="flex-1 px-4">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-2xl p-4 mb-2 aspect-square flex items-center justify-center">
                    <div className="w-16 h-20 bg-orange-200 rounded-lg"></div>
                  </div>
                  <p className="font-medium text-sm">Crew Neck</p>
                  <p className="text-gray-600 text-sm">$80</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-2xl p-4 mb-2 aspect-square flex items-center justify-center">
                    <div className="w-12 h-20 bg-gray-300 rounded-sm"></div>
                  </div>
                  <p className="font-medium text-sm">Trousers</p>
                  <p className="text-gray-600 text-sm">$120</p>
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="bg-gray-100 rounded-2xl p-4 mb-2 mx-auto w-32 aspect-square flex items-center justify-center">
                  <div className="w-20 h-24 bg-gray-700 rounded-lg"></div>
                </div>
                <p className="font-medium text-sm">Blazer</p>
                <p className="text-gray-600 text-sm">$150</p>
              </div>
              <button 
                onClick={() => setCurrentScreen('outfits')}
                className="mx-4 mb-8 bg-orange-300 text-black font-semibold py-4 rounded-full text-lg w-full"
              >
                VIEW OUTFITS
              </button>
            </div>
          </div>
        );

      case 'outfits':
        return (
          <div className="flex-1 flex flex-col">
            <Header showBack={true} />
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold leading-tight">Suggested Outfits</h1>
            </div>
            <div className="flex-1 px-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-orange-100 rounded-2xl p-3 aspect-square flex items-center justify-center">
                  <div className="w-12 h-16 bg-orange-200 rounded-lg"></div>
                </div>
                <div className="bg-gray-700 rounded-2xl p-3 aspect-square flex items-center justify-center">
                  <div className="w-12 h-16 bg-gray-800 rounded-lg"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-100 rounded-2xl p-3 aspect-square flex items-center justify-center">
                  <div className="w-10 h-16 bg-gray-300 rounded-sm"></div>
                </div>
                <div className="bg-orange-200 rounded-2xl p-3 aspect-square flex items-center justify-center">
                  <div className="w-12 h-16 bg-orange-300 rounded-lg"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-100 rounded-2xl p-3 aspect-[4/3] flex items-center justify-center">
                  <div className="w-16 h-6 bg-gray-300 rounded-full"></div>
                </div>
                <div className="bg-blue-100 rounded-2xl p-3 aspect-square flex items-center justify-center">
                  <div className="w-10 h-16 bg-blue-800 rounded-sm"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-2xl p-3 aspect-[4/3] flex items-center justify-center">
                  <div className="w-16 h-6 bg-gray-300 rounded-full"></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold leading-tight">Search</h1>
            </div>
            <div className="flex-1 px-4 flex items-center justify-center">
              <p className="text-gray-500 text-center">Search for fashion items and outfits</p>
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold leading-tight">Favorites</h1>
            </div>
            <div className="flex-1 px-4 flex items-center justify-center">
              <p className="text-gray-500 text-center">Your favorite items will appear here</p>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold leading-tight">Profile</h1>
            </div>
            <div className="flex-1 px-4 flex items-center justify-center">
              <p className="text-gray-500 text-center">Your profile and settings</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
      {renderScreen()}
      <NavigationBar />
    </div>
  );
};

export default VogueVisoApp;
