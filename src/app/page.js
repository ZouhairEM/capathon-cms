import CountdownSection from './ui/CountdownSection';
import CtaSection from './ui/CtaSection';
import FaqSection from './ui/FaqSection.jsx';
import SignupSection from './ui/SignupSection';
import Navbar from './ui/Navbar';
import HeroSection from './ui/HeroSection';
import OrganiserSection from './ui/OrganiserSection';
import { getData } from './service/FetchData/FetchData';
import PastEventsSection from './ui/PastEventsSection';

export default async function Home() {
  const {
    heroSection,
    pastEventsSection,
    ctaSection,
    organiserSection,
    faqSection,
    countdownSection,
    signupSection,
    navbar,
  } = (await getData()) ?? {};

  return (
    <>
      <Navbar data={navbar} />
      <main>
        <HeroSection data={heroSection} />
        <PastEventsSection data={pastEventsSection} />
        <CtaSection data={ctaSection} />
        <OrganiserSection data={organiserSection} />
        <FaqSection data={faqSection} />
        <CountdownSection data={countdownSection} />
        <SignupSection data={signupSection} />
      </main>
    </>
  );
}
