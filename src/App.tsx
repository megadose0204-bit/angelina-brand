/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { MyStory } from './components/MyStory.tsx';
import { ThreeDreams } from './components/ThreeDreams.tsx';
import { ActionPlan } from './components/ActionPlan.tsx';
import { Roadmap } from './components/Roadmap.tsx';
import { BlogTrilogy } from './components/BlogTrilogy.tsx';
import { Gallery } from './components/Gallery.tsx';
import { VideoSection } from './components/VideoSection.tsx';
import { Connect } from './components/Connect.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FFF9F0] text-[#333333] flex flex-col selection:bg-[#E58B72]/20 selection:text-[#234B3C]">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <MyStory />
          <ThreeDreams />
          <ActionPlan />
          <Roadmap />
          <BlogTrilogy />
          <Gallery />
          <VideoSection />
          <Connect />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
