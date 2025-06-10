import CountdownSection from './ui/CountdownSection';
import FaqSection from './ui/FaqSection.jsx';
import SignupSection from './ui/SignupSection';
import Navbar from './ui/Navbar';
import HeroSection from './ui/HeroSection';
import { getData } from './service/FetchData/FetchData';
import PastEventsSection from './ui/PastEventsSection';

export default async function Home() {
  const data = await getData();
  const [heroData, pastEventsData, faqSection, countdownData, signUpData] =
    data.sections;
  const { navbar } = data;

  return (
    <>
      <Navbar data={navbar} />
      <main>
        <HeroSection data={heroData.hero} />
        <PastEventsSection data={pastEventsData.pastEvents} />
        <FaqSection data={faqSection.faqs} />
        <CountdownSection data={countdownData.countdown} />
        <SignupSection data={signUpData.signUp} />
      </main>
    </>
  );
}
