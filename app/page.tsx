import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import AboutUs from "./components/about_us/AboutUs";
import Customers from "./components/customers/Customers";
import ContactForm from "./components/contact_form/ContactForm";
import "./globals.css";
export default function Home() {
  return (
    // <main className="text-center">
    <main className="flex flex-col items-center">
      <Hero />
      <Services />
      <AboutUs />
      {/* <Customers /> */}
      <ContactForm />
    </main>
  );
}
