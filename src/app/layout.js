import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import './globals.css';
import '@/styles/fonts.css';

const metadata = {
  title: 'PRN Navigation Demo',
  description:
    'A prototype for PRN navigation to gather feedback and demo UI patterns',
  icons: {
    icon: '/prn-icon.svg',
    shortcut: '/prn-icon.svg',
    apple: '/prn-icon.svg',
  },
  openGraph: {
    title: 'PRN Navigation Demo',
    description:
      'A prototype for PRN navigation to gather feedback and demo UI patterns',
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'PRN Navigation Demo',
      },
    ],
  },
};

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
