import CountdownSection from './ui/CountdownSection';
import FaqSection from './ui/FaqSection.jsx';
import SignupSection from './ui/SignupSection';
import Navbar from './ui/Navbar';
import { getData } from './service/FetchData';

export default async function Home() {
  const data = await getData();
  const [faqSection, countdownData, signUpData] = data.sections;
  const { navbar } = data;

  return (
    <>
      <Navbar data={navbar} />
      <main>
        <FaqSection data={faqSection.faqs} />
        <CountdownSection data={countdownData.countdown} />
        <SignupSection data={signUpData.signUp} />
      </main>
    </>
  );
}
