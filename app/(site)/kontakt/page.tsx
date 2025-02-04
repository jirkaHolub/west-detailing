import Form from "@/components/form";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className="pt-20 bg-[url('/Web-55.jpg')] bg-cover bg-top py-20 text-white relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-h2 font-extrabold py-8">Kontakt</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-dark">
          {/* Phone */}
          <div className="bg-dark text-white p-6 shadow-lg text-center">
            <FaPhone className="text-3xl text-ferrariYellow mx-auto mb-4" />
            <h3 className=" text-h3 font-semibold">Telefon</h3>
            <p>+420 606 300 500</p>
          </div>

          {/* Email */}
          <div className="bg-dark text-white p-6 shadow-lg text-center">
            <FaEnvelope className="text-3xl text-ferrariYellow mx-auto mb-4" />
            <h3 className="text-h3 font-semibold">E-mail</h3>
            <p>info@westdetailing.cz</p>
          </div>
        </div>
        {/* Address */}
        <div className=" bg-dark text-white mt-6 p-8 shadow-xl text-center">
          <FaMapMarkerAlt className="text-3xl text-ferrariYellow mx-auto mb-4" />
          <h3 className="text-h3 font-semibold">Adresa</h3>
          <p>Rokycanská 2656/2, 301 00 Plzeň - Východní Předměstí <br />  Po - Pá: 9-18</p>
        </div>
      </div>
    </div>
    <Form/>
    </>
  );
}

export default Contact;
