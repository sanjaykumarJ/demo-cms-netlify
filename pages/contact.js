import { Navbar } from "@components/navbar";
import { HeadComponent } from "@components/head";

export default function Contact() {
  return (
    <div className="contact-form">
      <HeadComponent />
      <Navbar />
      <h2>Contact us for your queries!</h2>
      <form
        action={`https://submit-form.com/${process.env.NEXT_PUBLIC_FORM_ID}`}
      >
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required=""
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required=""
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
