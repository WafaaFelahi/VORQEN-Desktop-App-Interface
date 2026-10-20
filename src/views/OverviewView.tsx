import React, { useState } from 'react';
import { ViewPath } from '../types';

interface OverviewViewProps {
  onNavigate: (path: ViewPath) => void;
  onOpenNewFolderModal: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onNavigate, onOpenNewFolderModal }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [dryRunDone, setDryRunDone] = useState(false);

  const handleStartScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setTimeout(() => setScanComplete(false), 3000);
    }, 1200);
  };

  const handleDryRunAll = () => {
    setDryRunDone(true);
    setTimeout(() => setDryRunDone(false), 4000);
  };

  return (
    <div className="flex flex-col w-full gap-space-lg pb-12 animate-in fade-in duration-200">
      {/* Top Command & Status Bar */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl border border-outline-variant/30">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          {/* Selection & Scope Info */}
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded bg-surface-container-highest text-tertiary font-code-sm text-code-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
                ENGINE READY
              </span>
              <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-secondary-container/40 text-on-secondary-container font-label-caps text-label-caps tracking-wider">
                SIMULATED DEMO DATA
              </span>
              <span className="text-on-surface-variant font-code-sm text-code-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">device_hub</span>
                Recursive Depth: 8 Levels Deep
              </span>
            </div>
            <div className="flex items-baseline gap-space-sm">
              <span className="font-headline-md text-headline-md text-on-surface tracking-tight">
                Academic_Projects
              </span>
              <span className="font-code-base text-code-base text-on-surface-variant truncate">
                D:\Workspace\Academic_Projects
              </span>
            </div>
          </div>

          {/* Action Panel */}
          <div className="flex items-center gap-space-sm self-start md:self-auto">
            <button
              onClick={() => onNavigate('settings-and-privacy')}
              className="group flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shadow-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">
                tune
              </span>
              <span className="font-body-base text-body-base">Audit Rules</span>
            </button>
            <button
              onClick={handleStartScan}
              disabled={isScanning}
              className="flex items-center gap-space-sm px-space-xl py-space-sm rounded-lg bg-primary-container text-on-primary-container font-body-bold text-body-bold hover:bg-primary hover:text-on-primary transition-all duration-200 shadow-[0_0_20px_rgba(86,214,255,0.25)] hover:shadow-[0_0_28px_rgba(86,214,255,0.4)] active:scale-[0.98] cursor-pointer"
              type="button"
            >
              {isScanning ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                  <span>Simulating Scan...</span>
                </>
              ) : scanComplete ? (
                <>
                  <span className="material-symbols-outlined text-[20px] text-tertiary">check_circle</span>
                  <span>Scan Verified (0 Writes)</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">manage_search</span>
                  <span>Start Safe Scan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Metric Deck (Key Vitals) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {/* 1. Total Files */}
        <div
          onClick={() => onNavigate('my-files')}
          className="group relative rounded-xl bg-surface-container p-space-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-outline-variant/30 cursor-pointer"
        >
          <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary">
              Volume Inventory
            </span>
            <span className="material-symbols-outlined text-[20px] text-primary/70">layers</span>
          </div>
          <div className="flex items-baseline gap-space-xs">
            <span className="font-display-lg text-display-lg text-on-surface">14,280</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">files</span>
          </div>
          <div className="mt-space-xs flex items-center gap-1.5 text-on-surface-variant font-code-sm text-code-sm">
            <span className="material-symbols-outlined text-[15px] text-tertiary">folder_open</span>
            <span>Mapped across <strong className="text-on-surface font-medium">842</strong> subfolders</span>
          </div>
        </div>

        {/* 2. Storage Used */}
        <div className="group relative rounded-xl bg-surface-container p-space-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-outline-variant/30">
          <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary">
              Disk Allocated
            </span>
            <span className="material-symbols-outlined text-[20px] text-primary/70">hard_drive</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-display-lg text-display-lg text-on-surface">128.4</span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">GB</span>
              </div>
              <p className="font-code-sm text-code-sm text-on-surface-variant mt-0.5">
                of 512 GB Target Volume
              </p>
            </div>
            {/* Ring Graphic */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-surface-container-highest stroke-current"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  strokeWidth="3.5"
                ></path>
                <path
                  className="text-primary-container stroke-current"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  strokeDasharray="25, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                ></path>
              </svg>
              <span className="absolute font-code-sm text-code-sm text-on-surface font-semibold">25%</span>
            </div>
          </div>
        </div>

        {/* 3. Space Recovery */}
        <div
          onClick={() => onNavigate('duplicates')}
          className="group relative rounded-xl bg-surface-container p-space-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden border border-outline-variant/30 cursor-pointer"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-tertiary"></div>
          <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-tertiary">
              Potential Recovery
            </span>
            <span className="material-symbols-outlined text-[20px] text-tertiary">cleaning_services</span>
          </div>
          <div className="flex items-baseline gap-space-xs">
            <span className="font-display-lg text-display-lg text-tertiary">42.1</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">GB</span>
          </div>
          <p className="font-code-sm text-code-sm text-on-surface-variant mt-space-xs leading-tight">
            Simulated based on verified duplicates & cache files
          </p>
        </div>

        {/* 4. Unreviewed Items */}
        <div
          onClick={() => onNavigate('ai-organizer')}
          className="group relative rounded-xl bg-surface-container p-space-lg shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden border border-outline-variant/30 cursor-pointer"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-secondary"></div>
          <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
              Triage Queue
            </span>
            <span className="material-symbols-outlined text-[20px] text-secondary">pending_actions</span>
          </div>
          <div className="flex items-baseline gap-space-xs">
            <span className="font-display-lg text-display-lg text-on-surface">38</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">files</span>
          </div>
          <p className="font-code-sm text-code-sm text-on-surface-variant mt-space-xs leading-tight">
            Requiring your manual classification approval
          </p>
        </div>
      </div>

      {/* Interactive Storage Breakdown Section */}
      <div className="rounded-xl bg-surface-container-low p-space-lg shadow-lg flex flex-col gap-space-md border border-outline-variant/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-title-sm text-title-sm text-on-surface">Volume Footprint Breakdown</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Computed byte allocations categorized by machine role
            </p>
          </div>
          <div className="flex items-center gap-space-sm text-on-surface-variant font-code-sm text-code-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container"></span>
            <span>128.4 GB Total Allocated</span>
          </div>
        </div>

        {/* Segmented Bar */}
        <div className="h-4 w-full rounded-full bg-surface-container flex overflow-hidden p-0.5 gap-0.5">
          <div
            className="h-full rounded-l-full bg-amber-400 hover:opacity-90 transition-all cursor-pointer relative group"
            style={{ width: '32.7%' }}
            title="Python .venv / node_modules: 42 GB (32.7%)"
          ></div>
          <div
            className="h-full bg-primary-container hover:opacity-90 transition-all cursor-pointer relative group"
            style={{ width: '29.6%' }}
            title="Datasets & CSVs: 38 GB (29.6%)"
          ></div>
          <div
            className="h-full bg-secondary hover:opacity-90 transition-all cursor-pointer relative group"
            style={{ width: '17.1%' }}
            title="Recorded Media: 22 GB (17.1%)"
          ></div>
          <div
            className="h-full bg-secondary-container hover:opacity-90 transition-all cursor-pointer relative group"
            style={{ width: '10.9%' }}
            title="Zip & Tar Archives: 14 GB (10.9%)"
          ></div>
          <div
            className="h-full rounded-r-full bg-tertiary-container hover:opacity-90 transition-all cursor-pointer relative group"
            style={{ width: '9.7%' }}
            title="Code & Configs: 12.4 GB (9.7%)"
          ></div>
        </div>

        {/* Legend Items */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-space-sm pt-space-xs font-code-sm text-code-sm">
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-on-surface truncate">Python .venv / node</span>
              <span className="text-on-surface-variant">42 GB</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-on-surface truncate">Datasets & CSVs</span>
              <span className="text-on-surface-variant">38 GB</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-on-surface truncate">Lectures & Media</span>
              <span className="text-on-surface-variant">22 GB</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-on-surface truncate">Zip & Tarballs</span>
              <span className="text-on-surface-variant">14 GB</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-on-surface truncate">Code & Configs</span>
              <span className="text-on-surface-variant">12.4 GB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Automated Detective Insights Grid */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Automated Detective Insights</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              High-impact anomalies ready for simulated dry-run inspection
            </p>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-space-sm py-1 rounded">
            4 CRITICAL FINDINGS DETECTED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/* Card 1: Verified Duplicate Clusters */}
          <div className="rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 border border-outline-variant/30">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-surface-container-highest text-primary">
                  <span className="material-symbols-outlined text-[20px]">difference</span>
                </span>
                <span className="font-label-caps text-label-caps bg-tertiary/10 text-tertiary px-space-xs py-0.5 rounded">
                  8.4 GB SAVING
                </span>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Duplicate Clusters</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Found 14 binary-identical clusters matching heavy assets & builds.
                </p>
              </div>
            </div>
            <div className="pt-space-md mt-space-sm">
              <button
                onClick={() => onNavigate('duplicates')}
                className="w-full flex items-center justify-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-body-bold text-body-bold transition-colors cursor-pointer"
                type="button"
              >
                <span>Review Duplicates</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 2: Dormant Virtual Envs */}
          <div className="rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 border border-outline-variant/30">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-surface-container-highest text-amber-300">
                  <span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
                </span>
                <span className="font-label-caps text-label-caps bg-amber-400/10 text-amber-300 px-space-xs py-0.5 rounded">
                  32.1 GB DORMANT
                </span>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Dormant Virtual Envs</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  6 virtual environments have seen zero package changes in &gt;90 days.
                </p>
              </div>
            </div>
            <div className="pt-space-md mt-space-sm">
              <button
                onClick={() => onNavigate('my-files')}
                className="w-full flex items-center justify-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-bold text-body-bold transition-colors cursor-pointer"
                type="button"
              >
                <span>Inspect Environments</span>
                <span className="material-symbols-outlined text-[16px]">visibility</span>
              </button>
            </div>
          </div>

          {/* Card 3: Windows Path Incompatibilities */}
          <div className="rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 border border-outline-variant/30">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-surface-container-highest text-secondary">
                  <span className="material-symbols-outlined text-[20px]">alt_route</span>
                </span>
                <span className="font-label-caps text-label-caps bg-secondary/10 text-secondary px-space-xs py-0.5 rounded">
                  24 HARDCODED
                </span>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Path Incompatibilities</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  24 scripts contain rigid <code className="font-code-sm text-code-sm bg-surface-container-lowest px-1 rounded text-primary">C:\...</code> paths that break in Linux/Mac.
                </p>
              </div>
            </div>
            <div className="pt-space-md mt-space-sm">
              <button
                onClick={() => onNavigate('migration-advisor')}
                className="w-full flex items-center justify-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-secondary-container hover:text-on-secondary-container text-on-surface font-body-bold text-body-bold transition-colors cursor-pointer"
                type="button"
              >
                <span>Launch Advisor</span>
                <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
              </button>
            </div>
          </div>

          {/* Card 4: Uncategorized New Items */}
          <div className="rounded-xl bg-surface-container p-space-lg flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 border border-outline-variant/30">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-surface-container-highest text-tertiary">
                  <span className="material-symbols-outlined text-[20px]">markunread_mailbox</span>
                </span>
                <span className="font-label-caps text-label-caps bg-tertiary/10 text-tertiary px-space-xs py-0.5 rounded">
                  3 NEW IN MONITORED
                </span>
              </div>
              <div>
                <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Uncategorized Inbox</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Recently downloaded files in the folder need automated labeling.
                </p>
              </div>
            </div>
            <div className="pt-space-md mt-space-sm">
              <button
                onClick={() => onNavigate('new-items-inbox')}
                className="w-full flex items-center justify-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-bold text-body-bold transition-colors cursor-pointer"
                type="button"
              >
                <span>Open Inbox</span>
                <span className="material-symbols-outlined text-[16px]">inbox</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Decision Preview Table */}
      <div className="rounded-xl bg-surface-container-low shadow-lg overflow-hidden flex flex-col border border-outline-variant/30">
        <div className="p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-surface-container-low border-b border-outline-variant/20">
          <div>
            <h2 className="font-title-sm text-title-sm text-on-surface">Category Decision Preview</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              AI-suggested classifications pending your batch dry-run review
            </p>
          </div>
          <div className="flex items-center gap-space-xs">
            <button
              onClick={() => alert('Exporting full category matrix to vorqen_category_matrix.csv')}
              className="px-space-sm py-1 rounded bg-surface-container text-on-surface font-code-sm text-code-sm hover:bg-surface-container-high transition-colors cursor-pointer"
              type="button"
            >
              Export Matrix
            </button>
            <button
              onClick={handleDryRunAll}
              className="px-space-sm py-1 rounded bg-primary-container text-on-primary-container font-code-sm text-code-sm font-semibold hover:bg-primary transition-colors cursor-pointer"
              type="button"
            >
              {dryRunDone ? 'Dry-Run Complete ✓' : 'Dry-Run All'}
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-base text-body-base">
            <thead className="bg-surface-container-lowest text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
              <tr>
                <th className="py-space-sm px-space-lg">Category</th>
                <th className="py-space-sm px-space-md">File Count</th>
                <th className="py-space-sm px-space-md">Total Size</th>
                <th className="py-space-sm px-space-md">Suggested Action</th>
                <th className="py-space-sm px-space-md">Confidence Score</th>
                <th className="py-space-sm px-space-lg text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container/30 text-on-surface font-body-sm">
              <tr
                onClick={() => onNavigate('ai-organizer')}
                className="hover:bg-surface-container/60 transition-colors cursor-pointer"
              >
                <td className="py-space-md px-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px] text-primary">school</span>
                    <span className="font-body-bold text-on-surface">University & Education</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md font-code-base text-code-base text-on-surface-variant">4,120 files</td>
                <td className="py-space-md px-space-md font-code-base text-code-base font-semibold">18.2 GB</td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1 font-label-caps text-label-caps px-space-xs py-0.5 rounded bg-tertiary-container/20 text-tertiary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Keep
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-16 h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                      <div className="h-full bg-tertiary rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">98%</span>
                  </div>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <span className="font-code-sm text-code-sm text-tertiary bg-surface-container px-space-xs py-0.5 rounded">
                    Simulated
                  </span>
                </td>
              </tr>

              <tr
                onClick={() => onNavigate('ai-organizer')}
                className="bg-surface-container/20 hover:bg-surface-container/60 transition-colors cursor-pointer"
              >
                <td className="py-space-md px-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">terminal</span>
                    <span className="font-body-bold text-on-surface">Development Projects</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md font-code-base text-code-base text-on-surface-variant">6,840 files</td>
                <td className="py-space-md px-space-md font-code-base text-code-base font-semibold">54.1 GB</td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1 font-label-caps text-label-caps px-space-xs py-0.5 rounded bg-tertiary-container/20 text-tertiary font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Keep
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-16 h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                      <div className="h-full bg-tertiary rounded-full" style={{ width: '96%' }}></div>
                    </div>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">96%</span>
                  </div>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <span className="font-code-sm text-code-sm text-tertiary bg-surface-container px-space-xs py-0.5 rounded">
                    Simulated
                  </span>
                </td>
              </tr>

              <tr
                onClick={() => onNavigate('ai-organizer')}
                className="hover:bg-surface-container/60 transition-colors cursor-pointer"
              >
                <td className="py-space-md px-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px] text-secondary">archive</span>
                    <span className="font-body-bold text-on-surface">Archives & Installers</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md font-code-base text-code-base text-on-surface-variant">82 files</td>
                <td className="py-space-md px-space-md font-code-base text-code-base font-semibold">14.0 GB</td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1 font-label-caps text-label-caps px-space-xs py-0.5 rounded bg-secondary-container/30 text-on-secondary-container font-semibold">
                    <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                    Archive
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-16 h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '89%' }}></div>
                    </div>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">89%</span>
                  </div>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <span className="font-code-sm text-code-sm text-secondary bg-surface-container px-space-xs py-0.5 rounded">
                    Ready for Review
                  </span>
                </td>
              </tr>

              <tr
                onClick={() => onNavigate('ai-organizer')}
                className="bg-surface-container/20 hover:bg-surface-container/60 transition-colors cursor-pointer"
              >
                <td className="py-space-md px-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px] text-amber-300">warning</span>
                    <span className="font-body-bold text-on-surface">Temporary & Virtual Envs</span>
                  </div>
                </td>
                <td className="py-space-md px-space-md font-code-base text-code-base text-on-surface-variant">2,140 files</td>
                <td className="py-space-md px-space-md font-code-base text-code-base font-semibold">38.5 GB</td>
                <td className="py-space-md px-space-md">
                  <span className="inline-flex items-center gap-1 font-label-caps text-label-caps px-space-xs py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold">
                    <span className="material-symbols-outlined text-[14px]">flag</span>
                    Review
                  </span>
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-16 h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">94%</span>
                  </div>
                </td>
                <td className="py-space-md px-space-lg text-right">
                  <span className="font-code-sm text-code-sm text-amber-300 bg-surface-container px-space-xs py-0.5 rounded">
                    Action Suggested
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Safety Guarantee Callout */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl border border-outline-variant/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-start gap-space-md">
            <div className="p-2.5 rounded-xl bg-tertiary/10 text-tertiary shrink-0">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <div>
              <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                Safe Execution Guarantee
                <span className="font-code-sm text-code-sm px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary font-semibold">
                  Zero Loss Policy
                </span>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 max-w-3xl">
                VORQEN will <strong className="text-on-surface">NEVER</strong> move, delete, or rename files
                without your explicit confirmation. All recommendations are dry-run simulations until individually
                inspected and authorized.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-xs shrink-0 self-end sm:self-auto">
            <span className="inline-flex items-center gap-1 font-code-sm text-code-sm text-on-surface-variant bg-surface-container px-space-sm py-1.5 rounded border border-outline-variant/30">
              <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
              Read-Only Inspection Mode
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
