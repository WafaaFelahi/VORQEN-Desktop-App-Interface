export type ViewPath =
  | 'overview'
  | 'my-files'
  | 'ai-organizer'
  | 'project-detective'
  | 'duplicates'
  | 'migration-advisor'
  | 'backup-safety'
  | 'ask-your-files'
  | 'ai-assistant'
  | 'new-items-inbox'
  | 'script-runner-and-terminal'
  | 'activity-log'
  | 'settings-and-privacy';

export type Language = 'EN' | 'FR' | 'AR';

export interface FileItem {
  id: string;
  name: string;
  extension: string;
  category: string;
  sizeBytes: number;
  sizeFormatted: string;
  modified: string;
  path: string;
  fullPath: string;
  sha256: string;
  permissions: string;
  created: string;
  semanticClassifier: string;
  semanticMatchRate: string;
  status: 'clean' | 'indexed' | 'duplicate' | 'warning' | 'script-fix' | 'safe';
  statusLabel: string;
  statusBadgeColor?: string;
  description?: string;
  matchedTerms?: string[];
  tokens?: string[];
}

export interface DuplicateCluster {
  id: string;
  title: string;
  type: string;
  typeBadge: string;
  sizePerInstance: string;
  totalPoolSize: string;
  recoverableSize: string;
  sha256: string;
  exactBytes: number;
  byteMatch: string;
  matchType: 'identical' | 'content-similar';
  recommendationNote?: string;
  primaryFile: {
    path: string;
    modified: string;
    tags: string[];
    actionChoice: 'keep-primary' | 'keep-alt' | 'keep-both';
  };
  secondaryFile: {
    path: string;
    downloaded?: string;
    modified?: string;
    tags: string[];
    actionChoice: 'keep-primary' | 'keep-alt' | 'keep-both';
  };
  selectedOption: 'primary' | 'secondary' | 'both';
  diffRowsCount?: number;
}

export interface MigrationItem {
  id: string;
  sourceWindowsPath: string;
  proposedLinuxPath: string;
  operationType: string;
  operationBadge: string;
  risk: 'safe' | 'medium' | 'high';
  riskLabel: string;
  fileDetails: string;
  status: 'pending' | 'approved' | 'excluded';
  reason: string;
  checked: boolean;
}

export interface IngestedItem {
  id: string;
  name: string;
  type: 'Directory' | 'File';
  sizeFormatted?: string;
  path: string;
  timestamp: string;
  provenance: string;
  category: string;
  operationalState: 'Pending Details' | 'Reviewed';
  isReviewed: boolean;
  description?: string;
  importance?: 'High' | 'Normal' | 'Low';
  preferredHandling?: 'Keep in Project' | 'Archive Later' | 'Review';
  tags?: string[];
}

export interface ActivityLogEntry {
  id: string;
  timestamp: string;
  type: 'scan' | 'flag' | 'verify' | 'stage' | 'approval';
  title: string;
  details: string;
  dotColor: string;
}
