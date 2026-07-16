export interface LinkItem {
  name: string;
  url: string;
  desc: string;
  icon?: string;
}

export const searchEngines: LinkItem[] = [
  { name: 'Google', url: 'https://www.google.com/search?q=', desc: '', icon: 'G' },
  { name: '百度', url: 'https://www.baidu.com/s?wd=', desc: '', icon: '百' },
  { name: 'Bing', url: 'https://www.bing.com/search?q=', desc: '', icon: 'B' },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=', desc: '', icon: 'D' },
];

export const aiTools: LinkItem[] = [
  { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI 对话助手', icon: '🤖' },
  { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic 对话助手', icon: '✳️' },
  { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google 多模态助手', icon: '✦' },
  { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI 搜索引擎', icon: '❖' },
  { name: 'Grok', url: 'https://grok.com', desc: 'xAI 对话助手', icon: '𝕏' },
  { name: 'DeepSeek', url: 'https://chat.deepseek.com', desc: '深度求索', icon: '🐳' },
  { name: '豆包', url: 'https://www.doubao.com', desc: '字节跳动 AI 助手', icon: '🫘' },
  { name: 'Kimi', url: 'https://kimi.moonshot.cn', desc: '月之暗面', icon: '🌙' },
  { name: '通义千问', url: 'https://tongyi.aliyun.com', desc: '阿里云', icon: '☁️' },
  { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度', icon: '💬' },
  { name: '智谱清言', url: 'https://chatglm.cn', desc: '智谱 AI', icon: '🧠' },
];

export const imageTools: LinkItem[] = [
  { name: 'Midjourney', url: 'https://www.midjourney.com', desc: 'AI 图片生成', icon: '🎨' },
  { name: 'DALL·E', url: 'https://openai.com/dall-e-3', desc: 'OpenAI 图片生成', icon: '🖼️' },
  { name: 'Stable Diffusion', url: 'https://stability.ai', desc: '开源图片生成', icon: '🌀' },
];

export const translateTools: LinkItem[] = [
  { name: 'Google 翻译', url: 'https://translate.google.com', desc: '', icon: '🌐' },
  { name: 'DeepL', url: 'https://www.deepl.com/translator', desc: '', icon: '🔤' },
  { name: '有道翻译', url: 'https://fanyi.youdao.com', desc: '', icon: '📖' },
];

export const adPlatforms: LinkItem[] = [
  { name: 'Google Ads', url: 'https://ads.google.com', desc: '', icon: 'G' },
  { name: 'Meta Ads', url: 'https://www.facebook.com/business/ads', desc: '', icon: 'M' },
  { name: 'Microsoft Ads', url: 'https://ads.microsoft.com', desc: '', icon: 'M' },
  { name: '百度推广', url: 'https://e.baidu.com', desc: '', icon: '百' },
  { name: '巨量引擎', url: 'https://www.oceanengine.com', desc: '字节跳动', icon: '巨' },
  { name: '腾讯广告', url: 'https://e.qq.com', desc: '', icon: '腾' },
  { name: '阿里妈妈', url: 'https://www.alimama.com', desc: '', icon: '阿' },
];

export const myServices: LinkItem[] = [
  { name: 'IP 出口检测', url: 'https://ip.ie8.net', desc: '查看当前网络出口 IP 信息', icon: '📡' },
  { name: 'Headless CMS', url: 'https://pub.ie8.net', desc: '内容管理服务', icon: '📝' },
  { name: '图床服务', url: 'https://hub.ie8.net', desc: '图片托管与分发', icon: '🖇️' },
  { name: '短网址', url: 'https://1115.eu.org', desc: '链接缩短服务', icon: '🔗' },
];
