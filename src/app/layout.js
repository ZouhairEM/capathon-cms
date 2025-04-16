// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import { PrimeReactProvider } from "primereact/api";
// import "./styles.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { PrimeReactProvider } from "primereact/api";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
