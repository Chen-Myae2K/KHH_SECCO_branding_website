import React from "react";
import Container from "../../../components/Container";

const ContactSection = () => {
  return (
    <section className="font-instrument my-32 text-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="col-span-1 me-28 flex flex-col justify-between">
            <p className="text-5xl lg:text-6xl text-clean font-medium tracking-tighter">
              contact <span className="text-black">with us</span>
            </p>
            <p className="md:text-3xl text-lg py-10">
              WANT TO <span className="text-clean">GET IN TOUCH</span> OR{" "}
              <span className="font-serif italic">work together</span> ON YOUR
              PROJECT?{" "}
              <span className="text-clean font-serif italic ">reach out</span>
            </p>
          </div>
          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="col-span-1 space-y-10"
          >
            {/* Hidden Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="4707ec97-f32a-4e30-98f5-515e757b2908"
            />

            {/* To Field */}
            <div>
              <label className="lg:text-xl text-base">To:</label>
              <p className="lg:text-xl text-base py-2.5 border-b border-black">
                KHH COMPANY
              </p>
            </div>

            {/* Name Field */}
            <div>
              <label className="lg:text-xl text-base">From:</label>
              <input
                type="text"
                name="name"
                required
                className="block w-full py-2.5 px-0 text-base text-gray-900 bg-transparent border-b border-black focus:outline-none focus:border-blue-600"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="lg:text-xl text-base">Your Email:</label>
              <input
                type="email"
                name="email"
                required
                className="block w-full py-2.5 px-0 text-base text-gray-900 bg-transparent border-b border-black focus:outline-none focus:border-blue-600"
                placeholder="Your email"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="lg:text-xl text-base">Subject:</label>
              <input
                type="text"
                name="subject"
                required
                className="block w-full py-2.5 px-0 text-base text-gray-900 bg-transparent border-b border-black focus:outline-none focus:border-blue-600"
                placeholder="Subject here"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="lg:text-xl text-base">Message:</label>
              <textarea
                name="message"
                required
                className="block w-full py-2.5 px-0 text-base text-gray-900 bg-transparent border-b border-black focus:outline-none focus:border-blue-600"
                placeholder="Your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-sm lg:text-lg text-white bg-clean py-2 px-4 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
