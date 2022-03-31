import { ScrollToTop } from "./../components/ScrollToTop";
import HeaderContact from "./../components/HeaderContact";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
function Contact() {
  ScrollToTop();
  return (
    <div className="contact-page">
      <HeaderContact />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
