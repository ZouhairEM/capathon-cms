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
  const data = await getData(); // array of entries with sectionName

  return (
    <>
      <main>
        <HeroSection data={data.heroSection} />
        <PastEventsSection data={data.pastEventsSection} />
        <CtaSection data={data.ctaSection} />
        <OrganiserSection data={data.organiserSection} />
        <FaqSection data={data.faqSection} />
        <CountdownSection data={data.countdownSection} />
        <SignupSection data={data.signupSection} />
      </main>
    </>
  );
}
