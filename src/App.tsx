import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { WelcomeHeader } from './components/WelcomeHeader';
import { MasterProductCard } from './components/MasterProductCard';
import { BonusGrid } from './components/BonusGrid';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import { MiniAppModal } from './components/modals/MiniAppModal';
import { ProfileModal } from './components/modals/ProfileModal';
import { DisclaimerModal } from './components/modals/DisclaimerModal';
import { NamePromptModal } from './components/modals/NamePromptModal';
import { TermsPrivacyModal } from './components/modals/TermsPrivacyModal';
import { AppId } from './types';

const STORAGE_KEYS = {
  NAME: 'pv42_user_name',
  DISCLAIMER: 'pv42_disclaimer_accepted',
  THEME: 'pv42_theme',
};

export default function App() {
  // Theme state: defaults to light if not explicitly set to 'dark'
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme) return savedTheme === 'dark';
      return false;
    } catch {
      return false;
    }
  });

  // Student name state (asks on first visit if null)
  const [studentName, setStudentName] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.NAME) || '';
    } catch {
      return '';
    }
  });

  // Safety notice acceptance state
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.DISCLAIMER) === 'true';
    } catch {
      return false;
    }
  });

  // Modals state
  const [activeAppModal, setActiveAppModal] = useState<AppId | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [termsPrivacyType, setTermsPrivacyType] = useState<'terms' | 'privacy' | null>(null);

  // Apply dark mode directly to HTML, Body, and meta theme-color
  useEffect(() => {
    try {
      const root = document.documentElement;
      const body = document.body;
      const themeMeta = document.querySelector('meta[name="theme-color"]');

      if (isDarkMode) {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
        body.classList.add('dark');
        body.setAttribute('data-theme', 'dark');
        if (themeMeta) themeMeta.setAttribute('content', '#0B0F19');
        localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
      } else {
        root.classList.remove('dark');
        root.setAttribute('data-theme', 'light');
        body.classList.remove('dark');
        body.setAttribute('data-theme', 'light');
        if (themeMeta) themeMeta.setAttribute('content', '#FF6B6B');
        localStorage.setItem(STORAGE_KEYS.THEME, 'light');
      }
    } catch (err) {
      console.error('Theme sync error:', err);
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Handle saving student name
  const handleSaveName = (name: string) => {
    setStudentName(name);
    try {
      localStorage.setItem(STORAGE_KEYS.NAME, name);
    } catch {}
  };

  // Handle accepting safety disclaimer
  const handleAcceptDisclaimer = () => {
    setHasAcceptedDisclaimer(true);
    setIsDisclaimerOpen(false);
    try {
      localStorage.setItem(STORAGE_KEYS.DISCLAIMER, 'true');
    } catch {}
  };

  const handleOpenApp = (appId: AppId) => {
    setActiveAppModal(appId);
  };

  // Flow control: First ask for name if empty, then ask for disclaimer if not accepted yet
  const showNamePrompt = !studentName;
  const showInitialDisclaimer = !showNamePrompt && !hasAcceptedDisclaimer;

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-200 ${
        isDarkMode ? 'dark bg-[#0B0F19] text-[#F8FAFC]' : 'bg-[#F8F9FA] text-[#2B2D42]'
      }`}
    >
      {/* Centered Mobile App Shell (375px–430px smartphone ergonomics) */}
      <div
        className={`max-w-md mx-auto min-h-screen flex flex-col shadow-2xl relative transition-colors duration-200 ${
          isDarkMode
            ? 'bg-[#111827] border-x border-slate-800 text-[#F8FAFC]'
            : 'bg-white border-x border-slate-200/80 text-[#2B2D42]'
        }`}
      >
        {/* Header (with theme toggle, student profile, VIP badge) */}
        <Header
          studentName={studentName}
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
          onOpenProfile={() => setIsProfileOpen(true)}
          onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        />

        {/* Mobile App Scrollable Feed (Fully Centered) */}
        <main className="flex-1 px-4 py-4 space-y-6">
          {/* Welcome Header (Clean, centered, zero emojis) */}
          <WelcomeHeader
            studentName={studentName}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />

          {/* Master Product Card (Protocolo Verão 42 — Método CASA) */}
          <MasterProductCard />

          {/* Bonus Grid (2 columns on mobile, direct links, zero emojis) */}
          <BonusGrid />

          {/* Support Section (WhatsApp button with exact link) */}
          <SupportSection />
        </main>

        {/* Footer (Centered) */}
        <Footer
          onOpenTerms={() => setTermsPrivacyType('terms')}
          onOpenPrivacy={() => setTermsPrivacyType('privacy')}
          onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        />
      </div>

      {/* Onboarding Name Prompt Modal */}
      <NamePromptModal
        isOpen={showNamePrompt}
        onSaveName={handleSaveName}
      />

      {/* Mandatory Safety Notice Modal (Initial or on-demand) */}
      <DisclaimerModal
        isOpen={showInitialDisclaimer || isDisclaimerOpen}
        onAccept={handleAcceptDisclaimer}
        canDismiss={hasAcceptedDisclaimer}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Mini-App Interactive Modal */}
      <MiniAppModal
        appId={activeAppModal}
        onClose={() => setActiveAppModal(null)}
        studentName={studentName}
      />

      {/* Profile Name Edit Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        currentName={studentName}
        onSaveName={handleSaveName}
      />

      {/* Terms and Privacy Modal */}
      <TermsPrivacyModal
        type={termsPrivacyType}
        onClose={() => setTermsPrivacyType(null)}
      />
    </div>
  );
}
