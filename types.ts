export interface NewsItem {
  id: string;
  title: string;
  summary?: string;
  date: string;
  category: string;
  isHeadline?: boolean;
  tag?: string;
  imageUrl?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  date: string;
  duration: string;
  imageUrl?: string;
}

export interface TabCategory {
  id: string;
  label: string;
}