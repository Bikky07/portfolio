import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u8gkm97",
        "template_5gwc3gi",
        form.current,
        "_GlvvBmSn6qsnlyFb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-white/5
              border
              border-white/10
              outline-none
            "
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-white/5
              border
              border-white/10
              outline-none
            "
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-white/5
              border
              border-white/10
              outline-none
            "
          />

          <button
            type="submit"
            className="
              bg-blue-600
              px-8
              py-4
              rounded-xl
              hover:bg-blue-700
              transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;