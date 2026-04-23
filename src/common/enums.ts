export const BanffCategory = ['NORMAL', 'BORDERLINE', 'REJECTION'] as const;
export type BanffCategory = (typeof BanffCategory)[number];

export const BiopsyIndication = ['PROTOCOL', 'SUSPECTED_REJECTION'] as const;
export type BiopsyIndication = (typeof BiopsyIndication)[number];

export const ComplicationType = ['INFECTIOUS', 'VASCULAR', 'UROLOGICAL', 'OTHER'] as const;
export type ComplicationType = (typeof ComplicationType)[number];

export const ComplicationStatus = ['ACTIVE', 'RESOLVED'] as const;
export type ComplicationStatus = (typeof ComplicationStatus)[number];

export const CrossMatchResult = ['POSITIVE', 'NEGATIVE'] as const;
export type CrossMatchResult = (typeof CrossMatchResult)[number];

export const DonorType = ['LIVING', 'DECEASED'] as const;
export type DonorType = (typeof DonorType)[number];

export const DrugName = ['TACROLIMUS', 'CYCLOSPORINE', 'MMF', 'PREDNISONE'] as const;
export type DrugName = (typeof DrugName)[number];

export const GraftStatus = ['ACTIVE', 'REJECTED', 'LOST'] as const;
export type GraftStatus = (typeof GraftStatus)[number];

export const LevelStatus = ['IN_RANGE', 'BELOW', 'ABOVE'] as const;
export type LevelStatus = (typeof LevelStatus)[number];

export const RejectionStatus = ['SUSPECTED', 'CONFIRMED', 'RESOLVED'] as const;
export type RejectionStatus = (typeof RejectionStatus)[number];

export const RejectionType = ['ACUTE', 'CHRONIC'] as const;
export type RejectionType = (typeof RejectionType)[number];

export const Severity = ['MILD', 'MODERATE', 'SEVERE'] as const;
export type Severity = (typeof Severity)[number];

export const SurveillancePhase = ['IMMEDIATE', 'EARLY', 'LONG_TERM'] as const;
export type SurveillancePhase = (typeof SurveillancePhase)[number];
