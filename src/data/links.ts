export interface LinkItem {
  name: string;
  url: string;
  desc: string;
  /** Name of a hand-drawn icon in Icon.astro. Only own services use this. */
  iconKey?: string;
  /** simple-icons key (e.g. "siAnthropic"), resolved server-side by BrandTile. */
  brandIcon?: string;
  /** Curated tile color, used as fallback when there's no brandIcon match. */
  color?: string;
}

const MONOGRAM_COLORS = [
  '#2563eb',
  '#7c3aed',
  '#0891b2',
  '#059669',
  '#d97706',
  '#dc2626',
  '#db2777',
  '#4f46e5',
];

/** Hash-based color for user-generated content (custom links, recent visits) where we can't curate. */
export function monogram(name: string): { letter: string; color: string } {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return {
    letter: name.trim().slice(0, 1).toUpperCase(),
    color: MONOGRAM_COLORS[hash % MONOGRAM_COLORS.length],
  };
}

export const searchEngines: LinkItem[] = [
  { name: 'Google', url: 'https://www.google.com/search?q=', desc: '' },
  { name: '百度', url: 'https://www.baidu.com/s?wd=', desc: '' },
  { name: 'Bing', url: 'https://www.bing.com/search?q=', desc: '' },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=', desc: '' },
];

export const aiTools: LinkItem[] = [
  { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI 对话助手', color: '#10A37F' },
  { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic 对话助手', brandIcon: 'siAnthropic' },
  { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google 多模态助手', brandIcon: 'siGooglegemini' },
  { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI 搜索引擎', brandIcon: 'siPerplexity' },
  { name: 'Grok', url: 'https://grok.com', desc: 'xAI 对话助手', color: '#0B0B0B' },
  { name: 'DeepSeek', url: 'https://chat.deepseek.com', desc: '深度求索', brandIcon: 'siDeepseek' },
  { name: '豆包', url: 'https://www.doubao.com', desc: '字节跳动 AI 助手', color: '#3C8CFF' },
  { name: 'Kimi', url: 'https://kimi.moonshot.cn', desc: '月之暗面', brandIcon: 'siKimi' },
  { name: '通义千问', url: 'https://tongyi.aliyun.com', desc: '阿里云', color: '#7C3AED' },
  { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度', color: '#2932E1' },
  { name: '智谱清言', url: 'https://chatglm.cn', desc: '智谱 AI', color: '#0E9F6E' },
];

export const imageTools: LinkItem[] = [
  { name: 'Midjourney', url: 'https://www.midjourney.com', desc: 'AI 图片生成', color: '#0B0B0B' },
  { name: 'DALL·E', url: 'https://openai.com/dall-e-3', desc: 'OpenAI 图片生成', color: '#10A37F' },
  { name: 'Stable Diffusion', url: 'https://stability.ai', desc: '开源图片生成', color: '#7C3AED' },
];

export const translateTools: LinkItem[] = [
  { name: 'Google 翻译', url: 'https://translate.google.com', desc: '', brandIcon: 'siGoogletranslate' },
  { name: 'DeepL', url: 'https://www.deepl.com/translator', desc: '', brandIcon: 'siDeepl' },
  { name: '有道翻译', url: 'https://fanyi.youdao.com', desc: '', color: '#E60012' },
];

export const adPlatforms: LinkItem[] = [
  { name: 'Google Ads', url: 'https://ads.google.com', desc: '', brandIcon: 'siGoogleads' },
  { name: 'Meta Ads', url: 'https://www.facebook.com/business/ads', desc: '', brandIcon: 'siMeta' },
  { name: 'Microsoft Ads', url: 'https://ads.microsoft.com', desc: '', color: '#00A4EF' },
  { name: '百度推广', url: 'https://e.baidu.com', desc: '', brandIcon: 'siBaidu' },
  { name: '巨量引擎', url: 'https://www.oceanengine.com', desc: '字节跳动', brandIcon: 'siBytedance' },
  { name: '腾讯广告', url: 'https://e.qq.com', desc: '', color: '#0052D9' },
  { name: '阿里妈妈', url: 'https://www.alimama.com', desc: '', brandIcon: 'siAlibabacloud' },
];

export const myServices: LinkItem[] = [
  { name: 'IP 出口检测', url: 'https://ip.ie8.net', desc: '查看当前网络出口 IP 信息', iconKey: 'ip', color: '#0891B2' },
  { name: 'Headless CMS', url: 'https://pub.ie8.net', desc: '内容管理服务', iconKey: 'cms', color: '#4F46E5' },
  { name: '图床服务', url: 'https://hub.ie8.net', desc: '图片托管与分发', iconKey: 'hub', color: '#DB2777' },
  { name: '短网址', url: 'https://1115.eu.org', desc: '链接缩短服务', iconKey: 'shorturl', color: '#059669' },
];
