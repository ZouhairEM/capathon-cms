import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import { getData } from "./service/FetchData";
import Navbar from "./ui/Navbar";

export default async function Home() {
  const data = await getData();
  const [countdownData] = data.sections;
  const { navbar } = data;

  return (
    <div>
      <Navbar data={navbar} />
      <FaqSection />
      <Countdown data={countdownData.countdown} />
    </div>
  );
}
