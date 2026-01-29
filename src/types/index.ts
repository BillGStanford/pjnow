// src/types/index.ts

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Section {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface FeaturedImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Source {
  title: string;
  author: string;
  year: number;
  publisher?: string;
  url?: string;
}

export interface EmbeddedLink {
  text: string;
  url: string;
}

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[]; ordered?: boolean };

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  section: string;
  tags: string[];
  authorId: string;
  editorId?: string;
  publishedAt: string;
  updatedAt?: string | null;
  status: 'published' | 'draft';
  featured: boolean;
  lead: boolean;
  excerpt: string;
  content: ContentBlock[];
  featuredImage: FeaturedImage;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  sources?: Source[];
  embeddedLinks?: EmbeddedLink[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  twitter?: string;
}