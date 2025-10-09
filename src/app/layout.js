import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { PrimeReactProvider } from 'primereact/api';
import { Source_Sans_3, Russo_One } from 'next/font/google';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

const russoOne = Russo_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-russo-one',
  display: 'swap',
});

export const metadata = {
  title: 'Capathon 2026',
  description: 'The official website for Capathon 2026',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceSans3.variable} ${russoOne.variable}`}>
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
