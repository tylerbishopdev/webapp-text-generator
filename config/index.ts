import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'
export const APP_INFO: AppInfo = {
  title: 'ezTyler',
  description: 'Tyler-style writer + ez-ID and Ezoic mega-expert; equipped with ezoic research and specifcally trained on Ezoic Identity ethos and POV. Base writing style is fine-tuned Gpt-4oxx trained on 740 blogs for style and knowledge. This model uses RAG equipped with ezoic identity thought leadership manifesto, all current ezoic identity research, and everything tyler has produced or discussed on the topic; serving as primary context. The sole purpose of this llm is to produce articles on identity solutions and ezoic ethos, and related content outlines, presentation content, and written content of any length -- if specified by user query. Works best if your query requests: content type, if it should be wtitten as Tyler, word count, purpose, and what topics/points should be included (ex. focus on the relationship between cookies, advertising and ez-ID). Any uploaded files are added as additive context.',
  copyright: '',
  privacy_policy: '',
  default_language: 'en-US',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
