import React from 'react';

interface FooterProps {
  currentFolder: string;
  pendingChangesCount: number;
  onViewStagedPlan?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentFolder,
  pendingChangesCount,
  onViewStagedPlan,
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-9 z-50 bg-surface-container-lowest border-t border-outline-variant/30 flex items-center justify-between px-space-md font-code-sm text-code-sm text-on-surface-variant select-none">
      {/* Left Telemetry */}
      <div className="flex items-center gap-space-md min-w-0">
        <div className="flex items-center gap-1.5 truncate">
          <span className="w-2 h-2 rounded-full bg-tertiary shrink-0"></span>
          <span className="truncate">
            Monitored: <strong className="text-on-surface font-semibold">{currentFolder}</strong> (Active)
          </span>
        </div>
        <span className="text-outline-variant hidden sm:inline">•</span>
        <div className="hidden md:flex items-center gap-1.5 text-secondary-fixed-dim shrink-0">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          <span>Local Privacy: 100% On-Device / No Cloud Sync</span>
        </div>
      </div>

      {/* Right Pending & Guarantee */}
      <div className="flex items-center gap-space-md shrink-0">
        <div
          onClick={onViewStagedPlan}
          className={`flex items-center gap-1.5 cursor-pointer ${
            pendingChangesCount > 0 ? 'text-primary' : 'text-on-surface-variant'
          }`}
          title="Click to view staged migration / reorganization preview"
        >
          <span className={`px-1.5 py-0.2 rounded font-semibold ${
            pendingChangesCount > 0
              ? 'bg-primary-container text-on-primary-container animate-pulse'
              : 'bg-surface-container-high text-on-surface'
          }`}>
            {pendingChangesCount} unapproved
          </span>
          <span>Changes Pending</span>
        </div>
        <span className="text-outline-variant hidden sm:inline">•</span>
        <div className="hidden lg:flex items-center gap-1 text-primary font-medium">
          <span className="material-symbols-outlined text-[14px] text-tertiary">verified</span>
          <span className="text-on-surface-variant">Nothing changes without your explicit approval</span>
        </div>
      </div>
    </footer>
  );
};
