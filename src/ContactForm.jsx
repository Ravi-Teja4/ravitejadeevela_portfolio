import React, { useState } from "react";
import './ContactForm.css'; // optional if you want styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile_number: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://ct1zxva4jk.execute-api.us-west-1.amazonaws.com/mnb/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", mobile_number: "", message: "" }); // clear form
      } else {
        setStatus("Error sending message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Try again.");
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobile_number"
          placeholder="Mobile Number"
          value={formData.mobile_number}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default ContactForm;
