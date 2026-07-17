import './styles.css';

export const metadata = {
  title: 'Varonex | Enterprise IT, Built to Hold',
  description: 'Security-first infrastructure, virtualization, automation, and operational leadership for systems that cannot afford guesswork.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
