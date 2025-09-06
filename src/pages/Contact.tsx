
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactAddress from "./ContactAddress";
import Faq from "../components/Faq";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(true); // Initially open, can be toggled

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="py-8 flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center justify-center content-center">
        {isFormOpen && <ContactForm onCancel={handleCancel} />}
        <ContactAddress />
      </div>
      <Faq/>
    </div>
  );
};

export default Contact;