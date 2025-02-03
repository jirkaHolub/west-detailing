import Footer from "@/components/footer";
import '.././globals.css';
import { Inter } from 'next/font/google';
import Navigation from "@/components/navigation/navigation";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.className}>
      <body>
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
