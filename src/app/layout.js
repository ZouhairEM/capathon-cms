import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { getData } from "./ui/FetchData";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
