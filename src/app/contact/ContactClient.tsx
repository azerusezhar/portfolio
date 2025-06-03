"use client";
import ContactDetails from "@/components/contact-details";
import Footer from "@/components/footer";
import ContactForm from "@/components/form-contact";

export default function ContactClient() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#121212] overflow-hidden">
      <main className="flex-1 overflow-y-auto w-full">
        <section className="w-full bg-[#121212] p-6 md:p-10 lg:p-22">
          {/* Contact Section */}
          <section id="Contact-Section" className="w-full w-full pt-20 md:pt-22 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 font-satoshi">
              Contact Me
            </h1>
            <p className="text-gray-400 mb-4 font-sans max-w-xl">
              If you have any questions or inquiries, feel free to reach out to
              me through the contact form below. I will get back to you as soon
              as possible.
            </p>
            <div className="w-full border-t border-gray-700 my-6 md:my-8"></div>
            <div>
              <h2 className="text-xl md:text-2xl text-white font-medium mb-4 font-satoshi">
                Contact Details
              </h2>
              <div>
                <ContactDetails />
              </div>
              <div className="w-full border-t border-gray-700 my-6 md:my-8"></div>
            </div>
            <div>
              <ContactForm />
            </div>
          </section>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}