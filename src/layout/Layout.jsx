import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (

    <>
      <Header/>
        <main className="relative h-full">{children}</main>
      <Footer/>
    </>
  );
};
