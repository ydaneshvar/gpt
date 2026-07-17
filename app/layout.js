import './styles.css';

export const metadata = {
  title: 'Varonex | Enterprise Infrastructure & Operations',
  description: 'Enterprise infrastructure, Linux, VMware, security, automation, and technical leadership built for reliable operations.',
  openGraph: {
    title: 'Varonex | Infrastructure That Earns Your Trust',
    description: 'Security-first enterprise infrastructure and operations from Rocklin, California.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
