/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Site Content & Configuration
 * Edit this file to easily customize brand info, links, blog URLs, and media settings.
 */

export interface BlogArticleConfig {
  id: string;
  partKey: string;
  url: string; // If empty string, links remain disabled with "연재 예정 / 준비 중" status
}

export interface SiteConfig {
  brand: {
    name: string;
    subname: string;
  };
  social: {
    instagram: {
      url: string;
      handle: string;
    };
    blog: {
      url: string;
      handle: string;
      platform: string;
    };
  };
  blogTrilogy: BlogArticleConfig[];
  video: {
    showVideo: boolean; // Set to true when /public/videos/dream-intro.mp4 is provided
    src: string;
    subtitles: {
      ko?: string;
      en?: string;
      ja?: string;
    };
  };
  imageFiles: {
    dream: string;
    creator: string;
    teaching: string;
    learning: string;
    journey: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: '안졸리나',
    subname: '꿈을 기록하는 일상',
  },
  social: {
    instagram: {
      url: 'https://www.instagram.com/heeya_reviewer/',
      handle: '@heeya_reviewer',
    },
    blog: {
      url: 'https://blog.naver.com/chaos716',
      handle: 'blog.naver.com/chaos716',
      platform: 'Naver Blog',
    },
  },
  blogTrilogy: [
    {
      id: 'part-1',
      partKey: 'part1',
      // Enter actual blog post URL below to activate the link button (e.g., 'https://blog.naver.com/...')
      url: '', 
    },
    {
      id: 'part-2',
      partKey: 'part2',
      url: '', 
    },
    {
      id: 'part-3',
      partKey: 'part3',
      url: '', 
    },
  ],
  video: {
    // Currently no video file is provided, so it is hidden by default.
    // To enable, place video in /public/videos/dream-intro.mp4 and change showVideo to true.
    showVideo: false,
    src: '/videos/dream-intro.mp4',
    subtitles: {
      ko: '/videos/subtitles-ko.vtt',
      en: '/videos/subtitles-en.vtt',
      ja: '/videos/subtitles-ja.vtt',
    },
  },
  imageFiles: {
    dream: '/images/01-dream.png',
    creator: '/images/02-creator.png',
    teaching: '/images/03-teaching.png',
    learning: '/images/04-learning.png',
    journey: '/images/05-journey.png',
  },
};
