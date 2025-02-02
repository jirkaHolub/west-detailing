import Footer from "@/components/footer";
import Navigation from "@/components/navigation/navigation";
import '.././globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
