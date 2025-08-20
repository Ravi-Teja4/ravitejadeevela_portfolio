import { useEffect } from 'react';
import ModernNavigation from '@/components/modern/ModernNavigation';
import ModernHero from '@/components/modern/ModernHero';
import ModernAbout from '@/components/modern/ModernAbout';
import ModernExperience from '@/components/modern/ModernExperience';
import ModernSkills from '@/components/modern/ModernSkills';
import ModernProjects from '@/components/modern/ModernProjects';
import ModernContentCreation from '@/components/modern/ModernContentCreation';
import ModernContact from '@/components/modern/ModernContact';
import AOS from 'aos';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen">
      <ModernNavigation />
      <main id="home">
        <ModernHero />
      <ModernAbout />
      <ModernExperience />
      <ModernSkills />
      <ModernProjects />
      <ModernContentCreation />
      <ModernContact />
      </main>
    </div>
  );
};

export default Index;
