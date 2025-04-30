import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import SignupSection from "./ui/SignupSection";
import Navbar from "./ui/Navbar";
import { getData } from "./service/FetchData";


// export default async function Home() {
//   const data = await getData();
//   const countdown = data[0];
//   const { signUpPossible } = data[1].signUp;

//   return (
//     <main>
//       <FaqSection />
//       <Countdown data={countdown} />
//       <SignupSection signUpPossible={signUpPossible} />
//     </main>

export default async function Home() {
  const data = await getData();
  const [countdownData, signupData] = data.sections;
  const { navbar } = data;

  return (
    <div>
      <Navbar data={navbar} />
      <main>
        <FaqSection />
        <Countdown data={countdownData.countdown} />
        <SignupSection data={signupData} />
      </main>
    </div>
  );
}
