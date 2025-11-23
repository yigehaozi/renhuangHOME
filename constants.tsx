import { Code2, Search, Home } from 'lucide-react';
import { DomainItem, ProjectItem, Content, Language } from './types';

export const DOMAIN_NAME = "ssss.ss";

export const CONTACT_INFO = {
  email: "yigehaozi@gmail.com",
  wechat: "YiQunShi"
};

export const DOMAINS: DomainItem[] = [
  { name: '6', tld: 'ke', tags: ['single_char', 'short'], featured: true, price: 28888 },
  { name: '14', tld: 'cx', tags: ['2_digit', 'premium'], featured: true, price: 1500 },
  { name: 'jie', tld: 'ge', tags: ['pattern', 'brand'], featured: true, price: 800 },
  { name: 'ssss', tld: 'ss', tags: ['aaaa', 'brand'], featured: true, price: 68888 },
  { name: 'zjs', tld: 'net', tags: ['acronym', '3_letter'], featured: true, price: 56000 },
  { name: 'aigc', tld: 'ge', tags: ['acronym', 'brand'], featured: true, price: 6321 },
  { name: 'astralis', tld: 'cn', tags: ['latin', 'brand'], featured: true, price: 1688 },
];

export const TAG_TRANSLATIONS: Record<string, { en: string; zh: string }> = {
  '2_digit': { en: '2 Digit', zh: '双数字' },
  'premium': { en: 'Premium', zh: '精品' },
  'aaaa': { en: 'AAAA', zh: '全A' },
  'pattern': { en: 'Pattern', zh: '叠拼' },
  'brand': { en: 'Brand', zh: '品牌' },
  'single_char': { en: 'Single Char', zh: '单字符' },
  'short': { en: 'Short', zh: '短域名' },
  'acronym': { en: 'Acronym', zh: '缩写' },
  '3_letter': { en: '3 Letter', zh: '三字母' },
  'latin': { en: 'Latin Word', zh: '拉丁词' },
};

export const CONTENT: Record<Language, Content> = {
  en: {
    nickname: "Ren Huang",
    title: "Ren Huang",
    role: "Indie Developer · Domain Collector · Tech Blogger",
    nav: {
      collections: "COLLECTIONS",
      projects: "PROJECTS",
      contact: "CONTACT"
    },
    sections: {
      assets: {
        title: "Digital Assets",
        subtitle: "Premium Domains Collection"
      },
      projects: {
        title: "Featured Works",
        subtitle: "Projects & Tools"
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Let's Start a Conversation",
        emailLabel: "Send an Email",
        wechatLabel: "Add on WeChat"
      }
    },
    footer: {
      contact: "Contact",
      terms: "Terms",
      privacy: "Privacy",
      rights: "All rights reserved."
    }
  },
  zh: {
    nickname: "人皇",
    title: "人皇",
    role: "独立开发者 · 域名收藏家 · 技术博主",
    nav: {
      collections: "域名收藏",
      projects: "项目展示",
      contact: "联系方式"
    },
    sections: {
      assets: {
        title: "数字资产",
        subtitle: "精选数字资产收藏"
      },
      projects: {
        title: "精选作品",
        subtitle: "个人开发项目与工具"
      },
      contact: {
        title: "联系方式",
        subtitle: "期待与您的交流",
        emailLabel: "发送邮件",
        wechatLabel: "添加微信"
      }
    },
    footer: {
      contact: "联系方式",
      terms: "服务条款",
      privacy: "隐私政策",
      rights: "保留所有权利"
    }
  }
};

export const PROJECTS_DATA: Record<Language, ProjectItem[]> = {
  en: [
    {
      id: 'zjs',
      name: 'Zhi Jian Shan',
      url: 'https://zjs.net',
      description: 'Focuses on sharing plugin development tutorials, technical architecture analysis, and developer community resources.',
      details: [
        'Original Plugin Dev Tutorials',
        'WordPress Architecture Analysis',
        'Developer Community Resources',
        'Practical Code Sharing & Optimization'
      ],
      icon: Code2,
      iconUrl: 'https://www.zjs.net/wp-content/uploads/2025/11/知见山-www.zjs_.net-1763470552-tb.svg',
      tags: ['Knowledge', 'Dev', 'Tutorials']
    },
    {
      id: 'onefour',
      name: 'OneFour',
      url: 'https://14.cx',
      description: 'Comprehensive network toolbox providing professional domain and network infrastructure query services.',
      details: [
        'Domain WHOIS Lookup',
        'IP Real-time Geolocation',
        'DNS Propagation Check',
        'ICP Filing Information'
      ],
      icon: Search,
      iconUrl: 'https://14.cx/favicon.ico',
      tags: ['Toolbox', 'Whois', 'Network']
    },
    {
      id: 'astralis',
      name: 'Astralis',
      url: 'https://www.astralis.cn',
      description: 'Minimalist browser dashboard for focused web experience. All data stored locally with complete privacy protection.',
      details: [
        'Bookmark & Category Management',
        'Custom Search Engine Settings',
        'Local Storage Only (No Tracking)',
        'Theme & Layout Customization'
      ],
      icon: Home,
      iconUrl: 'https://www.astralis.cn/assets/favicon-tJzvH3r_.svg',
      tags: ['Dashboard', 'Privacy', 'Minimalist']
    }
  ],
  zh: [
    {
      id: 'zjs',
      name: '知见山',
      url: 'https://zjs.net',
      description: '专注于分享插件开发教程、技术架构分析及开发者社区资源。',
      details: [
        '原创插件开发深度教程',
        'WordPress 技术架构解析',
        '开发者社区资源共享',
        '实战代码分享与优化'
      ],
      icon: Code2,
      iconUrl: 'https://www.zjs.net/wp-content/uploads/2025/11/知见山-www.zjs_.net-1763470552-tb.svg',
      tags: ['知识库', '插件开发', '教程']
    },
    {
      id: 'onefour',
      name: 'OneFour',
      url: 'https://14.cx',
      description: '综合性网络工具箱，提供专业的域名及网络基础设施查询服务。',
      details: [
        '域名 WHOIS 信息查询',
        'IP 地址实时地理定位',
        'DNS 解析与传播检测',
        'ICP 备案信息快速查询'
      ],
      icon: Search,
      iconUrl: 'https://14.cx/favicon.ico',
      tags: ['工具箱', 'Whois', '网络']
    },
    {
      id: 'astralis',
      name: 'Astralis',
      url: 'https://www.astralis.cn',
      description: '极简主义浏览器仪表盘，带来专注的网络体验。所有数据本地存储，完全保护隐私。',
      details: [
        '书签与分类管理',
        '自定义搜索引擎设置',
        '本地存储无追踪',
        '主题与布局个性化'
      ],
      icon: Home,
      iconUrl: 'https://www.astralis.cn/assets/favicon-tJzvH3r_.svg',
      tags: ['导航页', '隐私保护', '极简主义']
    }
  ]
};