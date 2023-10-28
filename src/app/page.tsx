import Image from "next/image";
import Navbar from "./home/Navbar";
import Header from "./home/Header";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  );
}
