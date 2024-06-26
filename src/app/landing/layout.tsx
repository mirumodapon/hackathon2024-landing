import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      {children}
      <Footer />
    </ThemeProvider>
  );
}
