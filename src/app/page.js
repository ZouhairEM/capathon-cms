import CountdownSection from "./ui/CountdownSection";
import FaqSection from "./ui/FaqSection.jsx";
import SignupSection from "./ui/SignupSection";
import Navbar from "./ui/Navbar";
import HeroSection from "./ui/HeroSection";
import OrganiserSection from "./ui/OrganiserSection";
import { getData } from "./service/FetchData";

export default async function Home() {
  const data = await getData();
  const [heroData, faqSection, countdownData, signUpData, organisersSection] =
    data.sections;
  const { navbar } = data;

  return (
    <>
      <Navbar data={navbar} />
      <div>
        <Navbar data={data.navbar} />
        <main>
          <HeroSection data={heroData.hero} />
          <FaqSection data={faqSection.faqs} />
          <CountdownSection data={countdownData.countdown} />
          <SignupSection data={signUpData.signUp} />
          <OrganiserSection data={organisersSection.organisers} />
        </main>
      </div>
    </>
  );
}
