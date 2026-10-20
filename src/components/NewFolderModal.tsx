import React, { useState } from 'react';
import { IngestedItem } from '../types';

interface NewFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Partial<IngestedItem>) => void;
  item?: IngestedItem;
}

export const NewFolderModal: React.FC<NewFolderModalProps> = ({
  isOpen,
  onClose,
  onSave,
  item,
}) => {
  const [folderName, setFolderName] = useState(item?.name || 'Deep Learning Project');
  const [purpose, setPurpose] = useState(
    item?.description ||
      'Final year research code comparing transformer OCR architectures and synthetic benchmark datasets'
  );
  const [category, setCategory] = useState(item?.category || 'Development Projects');
  const [importance, setImportance] = useState<'High' | 'Normal' | 'Low'>(
    item?.importance || 'High'
  );
  const [preferredHandling, setPreferredHandling] = useState<'Keep in Project' | 'Archive Later' | 'Review'>(
    item?.preferredHandling || 'Keep in Project'
  );
  const [tags, setTags] = useState<string[]>(item?.tags || ['#pytorch', '#ocr', '#thesis-2024']);
  const [newTagInput, setNewTagInput] = useState('');
  const [useContextForFuture, setUseContextForFuture] = useState(true);

  if (!isOpen) return null;

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTagInput.trim()) {
      e.preventDefault();
      const formatted = newTagInput.startsWith('#') ? newTagInput.trim() : `#${newTagInput.trim()}`;
      if (!tags.includes(formatted)) {
        setTags([...tags, formatted]);
      }
      setNewTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSubmit = () => {
    onSave({
      name: folderName,
      description: purpose,
      category,
      importance,
      preferredHandling,
      tags,
      operationalState: 'Reviewed',
      isReviewed: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-surface-container-low border border-outline-variant/40 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-space-xl pt-space-lg pb-space-md bg-surface-container flex items-start justify-between border-b border-outline-variant/30">
          <div>
            <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[15px] text-secondary">auto_awesome</span>
              <span>Folder Ingestion Assessment</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Tell VORQEN about this folder
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Help VORQEN understand what this folder contains so it can suggest smart organization without touching your files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-lg transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Target Folder Hero Card */}
        <div className="px-space-xl py-space-md bg-surface-container-high/60 flex items-center gap-space-md border-b border-outline-variant/20">
          <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">create_new_folder</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-space-sm">
              <span className="font-title-sm text-title-sm text-on-surface font-semibold truncate">
                {folderName}
              </span>
              <span className="font-code-sm text-code-sm text-tertiary bg-tertiary-container/20 px-2 py-0.2 rounded-full font-medium">
                New Detection
              </span>
            </div>
            <span className="font-code-sm text-code-sm text-on-surface-variant truncate">
              D:\Workspace\Academic_Projects\Deep Learning Project
            </span>
            <span className="font-code-sm text-code-sm text-outline mt-0.5">
              Detected 14 minutes ago via Background Monitor
            </span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="px-space-xl py-space-lg space-y-space-md overflow-y-auto">
          {/* Field 1: Folder Name */}
          <div className="flex flex-col gap-1">
            <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
              Folder Name
            </label>
            <input
              className="w-full bg-surface-container text-on-surface font-body-base text-body-base px-space-md py-2 rounded-lg border border-outline-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </div>

          {/* Field 2: Purpose */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                What is this folder for?
              </label>
              <span className="font-code-sm text-code-sm text-outline">Natural Language Context</span>
            </div>
            <textarea
              className="w-full bg-surface-container text-on-surface font-body-base text-body-base p-space-md rounded-lg border border-outline-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container resize-none leading-relaxed transition-all"
              rows={2}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>

          {/* Field 3: Category */}
          <div className="flex flex-col gap-1">
            <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
              Category
            </label>
            <div className="relative">
              <select
                className="w-full bg-surface-container text-on-surface font-body-base text-body-base px-space-md py-2 rounded-lg appearance-none border border-outline-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container cursor-pointer pr-10"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Development Projects</option>
                <option>University & Education</option>
                <option>Research & Documents</option>
                <option>Personal</option>
                <option>Work</option>
                <option>Archives</option>
                <option>Needs Review</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Field 4 & 5: Importance & Preferred Handling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {/* Importance */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                Importance
              </label>
              <div className="flex items-center gap-1.5 bg-surface-container p-1 rounded-lg border border-outline-variant/30">
                {(['High', 'Normal', 'Low'] as const).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setImportance(level)}
                    className={`flex-1 py-1 px-2 rounded font-body-bold text-body-sm transition-all text-center cursor-pointer ${
                      importance === level
                        ? 'bg-secondary-container text-on-secondary-container shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Handling */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                Preferred Handling
              </label>
              <div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg border border-outline-variant/30">
                {(['Keep in Project', 'Archive Later', 'Review'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setPreferredHandling(mode)}
                    className={`flex-1 py-1 px-1.5 rounded font-body-bold text-body-sm transition-all text-center truncate cursor-pointer ${
                      preferredHandling === mode
                        ? 'bg-surface-bright text-on-surface shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Field 6: Tags */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
              Tags (Optional)
            </label>
            <div className="flex flex-wrap items-center gap-1.5 bg-surface-container px-space-md py-2 rounded-lg border border-outline-variant/40">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-secondary-fixed font-code-sm text-code-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-error cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[12px]">close</span>
                  </button>
                </span>
              ))}
              <input
                className="bg-transparent text-on-surface font-code-sm text-code-sm outline-none w-28 placeholder:text-outline"
                placeholder="Add tag (Enter)..."
                type="text"
                value={newTagInput}
                onChange={(e) => setNewTagInput(e.target.value)}
                onKeyDown={handleAddTag}
              />
            </div>
          </div>

          {/* Context Confirmation Checkbox */}
          <label className="flex items-start gap-space-sm cursor-pointer group pt-1 select-none">
            <input
              type="checkbox"
              className="mt-0.5 rounded bg-surface-container border-outline text-secondary focus:ring-0 cursor-pointer"
              checked={useContextForFuture}
              onChange={(e) => setUseContextForFuture(e.target.checked)}
            />
            <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
              Use this context to help organize related files and future downloads in this folder.
            </span>
          </label>

          {/* Dry-Run Strategy Preview */}
          <div className="p-space-md rounded-lg bg-surface-container-high/40 border border-outline-variant/30 flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-secondary-fixed-dim text-[18px] shrink-0 mt-0.5">
              lightbulb
            </span>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-wider mb-0.5">
                VORQEN Dry-Run Strategy
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Based on your description, VORQEN will associate this directory with the{' '}
                <strong className="text-on-surface font-body-bold">Thesis 2024</strong> workspace and flag
                hardcoded backslashes in any new scripts.{' '}
                <span className="text-tertiary font-medium">No files will be moved.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="px-space-xl py-space-md bg-surface-container border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <button
            onClick={onClose}
            className="font-body-sm text-body-sm text-on-surface-variant hover:text-error transition-colors order-2 sm:order-1 cursor-pointer"
            type="button"
          >
            Don't Ask Again for This Item
          </button>
          <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end order-1 sm:order-2">
            <button
              onClick={onClose}
              className="px-space-lg py-2 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface font-body-bold text-body-base transition-colors cursor-pointer"
              type="button"
            >
              Skip for Now
            </button>
            <button
              onClick={handleSubmit}
              className="px-space-xl py-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-body-bold text-body-base hover:bg-secondary transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">bookmark_added</span>
              <span>Save Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
