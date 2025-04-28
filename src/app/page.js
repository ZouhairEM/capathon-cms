import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import { getData } from "./ui/FetchData";

export default async function Home() {
  const data = await getData();
  const [countdownData] = data.sections;
  return (
    <div>
      <FaqSection />
      <Countdown data={countdownData.countdown} />
    </div>
  );
}
