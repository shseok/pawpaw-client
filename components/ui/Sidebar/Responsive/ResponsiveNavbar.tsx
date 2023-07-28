import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function ResponsiveNavbar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
