import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'zh';

export interface DomainItem {
  name: string;
  tld: string;
  tags: string[];
  featured?: boolean;
  price?: number;
}

export interface ProjectItem {
  id: string;
  name: string;
  url: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  iconUrl?: string;
  tags: string[];
}

export interface Content {
  nickname: string;
  title: string;
  role: string;
  nav: {
    collections: string;
    projects: string;
    contact: string;
  };
  sections: {
    assets: {
      title: string;
      subtitle: string;
    };
    projects: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      emailLabel: string;
      wechatLabel: string;
    };
  };
  footer: {
    contact: string;
    terms: string;
    privacy: string;
    rights: string;
  };
}