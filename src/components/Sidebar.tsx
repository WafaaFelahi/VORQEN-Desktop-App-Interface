import React from 'react';
import { ViewPath } from '../types';

interface SidebarProps {
  currentPath: ViewPath;
  onNavigate: (path: ViewPath) => void;
  unreviewedInboxCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPath,
  onNavigate,
  unreviewedInboxCount,
}) => {
  const isItemActive = (path: ViewPath) => currentPath === path;

  return (
    <aside className="fixed left-0 top-14 bottom-9 w-60 z-40 bg-surface-container-low/95 backdrop-blur-md border-r border-outline-variant/30 flex flex-col justify-between overflow-y-auto select-none">
      <div className="py-space-md px-space-sm space-y-space-md">
        {/* Section 1: Workspace */}
        <div className="space-y-1">
          <div className="px-space-sm pb-1 font-label-caps text-label-caps text-outline uppercase tracking-wider">
            Workspace
          </div>
          <nav className="space-y-0.5">
            <button
              onClick={() => onNavigate('overview')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('overview')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span>Overview</span>
            </button>

            <button
              onClick={() => onNavigate('my-files')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('my-files')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">folder</span>
              <span>My Files</span>
            </button>

            <button
              onClick={() => onNavigate('ai-organizer')}
              className={`w-full flex items-center justify-between px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('ai-organizer')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>AI Organizer</span>
              </div>
              <span className="font-code-sm text-[10px] bg-secondary-container/40 text-on-secondary-container px-1.5 py-0.2 rounded-full">
                3 to review
              </span>
            </button>

            <button
              onClick={() => onNavigate('project-detective')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('project-detective')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">account_tree</span>
              <span>Project Detective</span>
            </button>
          </nav>
        </div>

        {/* Section 2: Migration & Protection */}
        <div className="space-y-1">
          <div className="px-space-sm pb-1 font-label-caps text-label-caps text-outline uppercase tracking-wider">
            Migration & Protection
          </div>
          <nav className="space-y-0.5">
            <button
              onClick={() => onNavigate('duplicates')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('duplicates')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
              <span>Duplicates</span>
            </button>

            <button
              onClick={() => onNavigate('migration-advisor')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('migration-advisor')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
              <span>Migration Advisor</span>
            </button>

            <button
              onClick={() => onNavigate('backup-safety')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('backup-safety')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Backup Safety</span>
            </button>
          </nav>
        </div>

        {/* Section 3: Assistant & Inbox */}
        <div className="space-y-1">
          <div className="px-space-sm pb-1 font-label-caps text-label-caps text-outline uppercase tracking-wider">
            Assistant & Inbox
          </div>
          <nav className="space-y-0.5">
            <button
              onClick={() => onNavigate('ask-your-files')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('ask-your-files')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Ask Your Files</span>
            </button>

            <button
              onClick={() => onNavigate('ai-assistant')}
              className={`w-full flex items-center justify-between px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('ai-assistant')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
                <span>AI Assistant</span>
              </div>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                <span className="font-code-sm text-[10px] px-1.5 py-0.2 rounded-full bg-tertiary-container/20 text-tertiary font-semibold">
                  Ready
                </span>
              </span>
            </button>

            <button
              onClick={() => onNavigate('new-items-inbox')}
              className={`w-full flex items-center justify-between px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('new-items-inbox')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[18px]">inbox</span>
                <span>New Items Inbox</span>
              </div>
              {unreviewedInboxCount > 0 && (
                <span className="font-code-sm text-code-sm px-1.5 py-0.2 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                  {unreviewedInboxCount} New
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* Section 4: Tools & Scripts */}
        <div className="space-y-1">
          <div className="px-space-sm pb-1 font-label-caps text-label-caps text-outline uppercase tracking-wider">
            Tools & Scripts
          </div>
          <nav className="space-y-0.5">
            <button
              onClick={() => onNavigate('script-runner-and-terminal')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('script-runner-and-terminal')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>Script Runner & Terminal</span>
            </button>
          </nav>
        </div>

        {/* Section 5: Activity & Settings */}
        <div className="space-y-1">
          <div className="px-space-sm pb-1 font-label-caps text-label-caps text-outline uppercase tracking-wider">
            Activity & Settings
          </div>
          <nav className="space-y-0.5">
            <button
              onClick={() => onNavigate('activity-log')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('activity-log')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">history</span>
              <span>Activity Log</span>
            </button>

            <button
              onClick={() => onNavigate('settings-and-privacy')}
              className={`w-full flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-left transition-colors cursor-pointer ${
                isItemActive('settings-and-privacy')
                  ? 'bg-secondary-container text-on-secondary-container font-body-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-body-base'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">settings</span>
              <span>Settings & Privacy</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Trust Guarantee card pinned at bottom of sidebar */}
      <div className="p-space-sm m-space-sm rounded-xl bg-surface-container border border-outline-variant/30 flex items-start gap-space-sm shadow-sm">
        <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
          verified_user
        </span>
        <p className="font-body-sm text-[11.5px] text-on-surface-variant leading-snug">
          VORQEN never changes your files without your approval.
        </p>
      </div>
    </aside>
  );
};
