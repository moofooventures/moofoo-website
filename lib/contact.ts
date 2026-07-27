export const PARTNERSHIP_TYPES = [
  "Affiliate Network",
  "Advertiser",
  "Technology Provider",
  "Business Partnership",
  "General Inquiry",
] as const;

export type PartnershipType = (typeof PARTNERSHIP_TYPES)[number];
