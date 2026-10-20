import React, { useState } from 'react';
import { ViewPath, Language } from '../types';

interface HeaderProps {
  currentPath: ViewPath;
  onNavigate: (path: ViewPath) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currentFolder: string;
  onChangeFolder: () => void;
  onOpenNewFolderModal: () => void;
  pendingChangesCount: number;
  safeModeEnabled: boolean;
  onToggleSafeMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  language,
  onLanguageChange,
  currentFolder,
  onChangeFolder,
  onOpenNewFolderModal,
  safeModeEnabled,
  onToggleSafeMode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [windowState, setWindowState] = useState<'normal' | 'maximized'>('normal');

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      onNavigate('ask-your-files');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)] flex items-center justify-between px-space-md select-none border-b border-outline-variant/30">
      {/* Left Branding */}
      <div className="flex items-center gap-space-md">
        <div
          className="flex items-center gap-space-xs cursor-pointer group"
          onClick={() => onNavigate('overview')}
        >
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary group-hover:border-primary-container/60 transition-all">
            <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
          </div>
          <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold group-hover:text-primary-container transition-colors">
            VORQEN
          </span>
          <span className="font-code-sm text-code-sm px-space-xs py-0.5 rounded bg-surface-container-high text-secondary border border-outline-variant/30">
            v1.4.0
          </span>
        </div>
        <div className="hidden xl:flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
          <span className="text-outline-variant">|</span>
          <span>Know your files. Keep what matters.</span>
        </div>
      </div>

      {/* Center Target Folder & Safe Mode Indicator */}
      <div className="hidden md:flex items-center gap-space-sm">
        <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-lg border border-outline-variant/40 shadow-inner">
          <span className="material-symbols-outlined text-primary text-[16px]">folder</span>
          <span className="font-code-sm text-code-sm text-on-surface truncate max-w-[220px] lg:max-w-[320px]">
            {currentFolder}
          </span>
          <button
            onClick={onChangeFolder}
            className="font-label-caps text-label-caps uppercase px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface hover:bg-surface-bright hover:text-primary transition-colors cursor-pointer"
            type="button"
          >
            Change Folder
          </button>
        </div>

        <button
          onClick={onToggleSafeMode}
          title={safeModeEnabled ? 'Safe Mode is ON: No disk changes without manual approval' : 'Safe Mode is OFF'}
          className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high/60 border border-tertiary-container/30 hover:bg-surface-container-high transition-colors cursor-pointer"
          type="button"
        >
          <span className={`w-1.5 h-1.5 rounded-full ${safeModeEnabled ? 'bg-tertiary animate-pulse' : 'bg-amber-400'}`}></span>
          <span className="font-code-sm text-code-sm text-tertiary font-medium">
            {safeModeEnabled ? 'Safe Mode: Approval Required' : 'Audit Simulation Mode'}
          </span>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-space-sm">
        {/* Quick Search */}
        <div className="relative hidden lg:block">
          <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
          <input
            className="w-48 xl:w-56 bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm font-body-sm pl-8 pr-3 py-1 rounded-lg border border-outline-variant/50 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
            placeholder="Quick search files, scripts..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
          />
        </div>

        {/* Quick Ask AI button */}
        <button
          onClick={() => onNavigate('ai-assistant')}
          className="hidden sm:flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-high/70 border border-primary-container/40 text-primary hover:bg-surface-bright hover:text-on-surface transition-all cursor-pointer"
          title="Open AI Assistant (Ctrl+Space)"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
          <span className="font-body-sm text-body-sm hidden xl:inline font-semibold">Ask AI</span>
          <kbd className="font-code-sm text-[10px] px-1 py-0.2 rounded bg-surface-container-low text-on-surface-variant border border-outline-variant/30">
            Ctrl+␣
          </kbd>
        </button>

        {/* Language Switcher */}
        <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 border border-outline-variant/40 font-code-sm text-code-sm">
          <button
            onClick={() => onLanguageChange('EN')}
            className={`px-1.5 py-0.5 rounded transition-colors ${language === 'EN' ? 'bg-surface-container-high text-on-surface font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            type="button"
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange('FR')}
            className={`px-1.5 py-0.5 rounded transition-colors ${language === 'FR' ? 'bg-surface-container-high text-on-surface font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            type="button"
          >
            FR
          </button>
          <button
            onClick={() => onLanguageChange('AR')}
            className={`px-1.5 py-0.5 rounded font-sans transition-colors ${language === 'AR' ? 'bg-surface-container-high text-secondary font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            type="button"
            title="Arabic (العربية) with RTL Layout"
          >
            العربية
          </button>
        </div>

        {/* Notifications & Detection Alert */}
        <div className="relative">
          <button
            onClick={() => setShowNotificationPopup(!showNotificationPopup)}
            className="relative p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            title="New folder alert: Deep Learning Project"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">notifications</span>
            <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-secondary-container text-on-secondary-container font-code-sm text-[9px] flex items-center justify-center font-bold">
              1
            </span>
          </button>

          {showNotificationPopup && (
            <div className="absolute right-0 top-10 w-80 bg-surface-container-high border border-outline-variant/50 rounded-xl p-space-md shadow-2xl z-50 flex flex-col gap-2">
              <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                <span className="font-label-caps text-label-caps text-primary uppercase font-bold">
                  Ingestion Event
                </span>
                <button
                  onClick={() => setShowNotificationPopup(false)}
                  className="text-outline hover:text-on-surface"
                >
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">create_new_folder</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-title-sm text-title-sm text-on-surface font-semibold truncate">
                    Deep Learning Project
                  </span>
                  <span className="font-code-sm text-code-sm text-outline truncate">
                    D:\Workspace\Academic_Projects\Deep Learning Project
                  </span>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-snug">
                    New folder detected via Background Watcher. VORQEN can help organize it without moving files.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => {
                    setShowNotificationPopup(false);
                    onOpenNewFolderModal();
                  }}
                  className="flex-1 py-1 px-2 rounded-lg bg-primary-container text-on-primary-container font-body-bold text-body-sm hover:brightness-110 transition-colors"
                >
                  Add Details
                </button>
                <button
                  onClick={() => {
                    setShowNotificationPopup(false);
                    onNavigate('new-items-inbox');
                  }}
                  className="py-1 px-2 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm hover:bg-surface-bright transition-colors"
                >
                  View Inbox
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar */}
        <div
          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-sm hover:brightness-110 transition-all"
          title="Account: Alex (Local Admin)"
          onClick={() => onNavigate('settings-and-privacy')}
        >
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>

        {/* Window controls (Electron-style) */}
        <div className="flex items-center ml-space-xs pl-space-xs border-l border-outline-variant/40">
          <button
            className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-colors cursor-pointer"
            title="Minimize Window"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">minimize</span>
          </button>
          <button
            onClick={() => setWindowState(windowState === 'normal' ? 'maximized' : 'normal')}
            className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded transition-colors cursor-pointer"
            title={windowState === 'normal' ? 'Maximize Window' : 'Restore Window'}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">
              {windowState === 'normal' ? 'crop_square' : 'fullscreen_exit'}
            </span>
          </button>
          <button
            className="p-1 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded transition-colors cursor-pointer"
            title="Close Window (Preserves Background State)"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      </div>
    </header>
  );
};
