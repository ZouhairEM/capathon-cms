import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { getData } from "./ui/FetchData";
import Navbar from "./ui/Navbar";

export default async function RootLayout({ children }) {
  const data = await getData();
  const { navbar } = data;

  return (
    <html lang="en">
      <PrimeReactProvider>
        <Navbar data={navbar} />
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
