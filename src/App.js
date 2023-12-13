import './App.css';
import Header from './components/Header';
import HeroSection1 from './components/HeroSection1';
import BannerSection from './components/BannerSection';
import ContentSection from './components/ContentSection';
import FeaturesSection from './components/FeaturesSection';
import ContentSection2 from './components/ContentSection2';
import CompaniesLogoSection from './components/CompaniesLogoSection';
import ContentSection3 from './components/ContentSection3';

function App() {
  return (
    <div>
      <Header />
      <HeroSection1 />
      <BannerSection />
      <ContentSection />
      <FeaturesSection />
      <ContentSection2 />
      <CompaniesLogoSection />
      <ContentSection3 />
      <BannerSection />
    </div>
  );
}

export default App;
