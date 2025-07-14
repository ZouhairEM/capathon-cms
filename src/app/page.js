import CountdownSection from './ui/CountdownSection';
import CtaSection from './ui/CtaSection';
import FaqSection from './ui/FaqSection.jsx';
import SignupSection from './ui/SignupSection';
import Navbar from './ui/Navbar';
import HeroSection from './ui/HeroSection';
import { getData } from './service/FetchData/FetchData';

export default async function Home() {
  const data = await getData();
  const [heroData, pastEventsData, ctaData, faqSection, countdownData, signUpData] = data.sections;
  const { navbar } = data;

  return (
    <>
      <Navbar data={navbar} />
      <main>
        <HeroSection data={heroData.hero} />
        <CtaSection data={ctaData.cta} />
        <FaqSection data={faqSection.faqs} />
        <CountdownSection data={countdownData.countdown} />
        <SignupSection data={signUpData.signUp} />
      </main>
    </>
  );
}
