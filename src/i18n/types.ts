export type Language = 'ko' | 'en' | 'ja';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    story: string;
    dreams: string;
    action: string;
    records: string;
    connect: string;
    menuOpen: string;
    menuClose: string;
    langSelectLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    aiImageBadge: string;
  };
  story: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    valuesTitle: string;
    values: {
      title: string;
      desc: string;
    }[];
  };
  dreams: {
    tag: string;
    title: string;
    subtitle: string;
    aiBadge: string;
    cards: {
      id: string;
      title: string;
      body: string;
      image: string;
      imageAlt: string;
      category: string;
    }[];
  };
  action: {
    tag: string;
    title: string;
    notice: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  roadmap: {
    tag: string;
    title: string;
    subtitle: string;
    notice: string;
    years: {
      yearLabel: string;
      title: string;
      desc: string;
    }[];
  };
  records: {
    tag: string;
    title: string;
    subtitle: string;
    statusScheduled: string;
    preparingNotice: string;
    readArticle: string;
    articles: {
      part: string;
      title: string;
      summary: string;
      url?: string;
    }[];
  };
  gallery: {
    tag: string;
    title: string;
    subtitle: string;
    aiBadge: string;
    expandHint: string;
    closeModal: string;
    items: {
      id: string;
      title: string;
      desc: string;
      filename: string;
      alt: string;
    }[];
  };
  video: {
    tag: string;
    title: string;
    desc: string;
    notAvailable: string;
  };
  connect: {
    tag: string;
    title: string;
    desc: string;
    instagramCta: string;
    instagramHandle: string;
    blogCta: string;
    blogHandle: string;
  };
  footer: {
    brand: string;
    motto: string;
    copyright: string;
    backToTop: string;
  };
  common: {
    loading: string;
    imagePlaceholderHint: string;
  };
}
