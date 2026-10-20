import React from 'react';

interface NewFolderToastProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDetails: () => void;
  onOrganize: () => void;
}

export const NewFolderToast: React.FC<NewFolderToastProps> = ({
  isOpen,
  onClose,
  onAddDetails,
  onOrganize,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-12 right-space-md w-96 bg-surface-container-high border border-outline-variant/40 rounded-xl p-space-md shadow-[0_12px_32px_rgba(0,0,0,0.5)] z-40 flex flex-col gap-space-sm animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-center justify-between">
        <span className="font-label-caps text-label-caps text-primary tracking-wider uppercase font-semibold">
          New Folder Detected
        </span>
        <button
          onClick={onClose}
          className="text-outline hover:text-on-surface transition-colors cursor-pointer"
          title="Dismiss toast"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>

      <div>
        <p className="font-title-sm text-title-sm font-bold text-on-surface truncate">
          Deep Learning Project
        </p>
        <p className="font-code-sm text-code-sm text-outline truncate">
          D:\Projects\Deep Learning Project
        </p>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant">
        VORQEN can help you organize it without touching your files.
      </p>

      <div className="flex items-center gap-space-sm pt-space-xs">
        <button
          onClick={onAddDetails}
          className="flex-1 py-1.5 px-space-sm bg-surface-container text-on-surface hover:bg-surface-bright font-body-sm text-body-sm rounded-lg transition-colors cursor-pointer"
          type="button"
        >
          Add Details
        </button>
        <button
          onClick={onOrganize}
          className="flex-1 py-1.5 px-space-sm bg-primary-container text-on-primary-container hover:bg-primary font-body-sm text-body-sm rounded-lg font-body-bold transition-colors cursor-pointer"
          type="button"
        >
          Organize
        </button>
        <button
          onClick={onClose}
          className="py-1.5 px-space-sm text-outline hover:text-on-surface font-body-sm text-body-sm transition-colors cursor-pointer"
          type="button"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
