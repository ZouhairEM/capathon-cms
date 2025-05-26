import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import SignupSection from "./ui/SignupSection";
import Navbar from "./ui/Navbar";
import OrganiserSection from "./ui/OrganiserSection";
import { getData } from "./service/FetchData";

export default async function Home() {
  const data = await getData();
  const [heroData, faqSection, countdownData, signUpData, organisersSection] =
    data.sections;
  const { navbar } = data;

  return (
    <div>
      <Navbar data={data.navbar} />
      <main>
        <FaqSection data={faqSection.faqs} />
        <Countdown data={countdownData.countdown} />
        <SignupSection data={signUpData.signUp} />
        <OrganiserSection data={organisersSection.organisers} />
      </main>
    </div>
  );
}
