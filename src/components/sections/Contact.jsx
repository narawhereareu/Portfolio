import { useState } from "react";
import Swal from "sweetalert2";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

export default function Contact() {
  const [formMessage, setFormMessage] = useState({
    FULLNAME: "",
    EMAIL: "",
    Text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormMessage((prev) => ({ ...prev, [name]: value }));
  };

  const sendText = async () => {
    const { FULLNAME, EMAIL, Text } = formMessage;

    if (!FULLNAME || !EMAIL || !Text) {
      Swal.fire({
        title: "Error",
        text: "Please fill all fields",
        icon: "error",
      });
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/messages/sendmessage`,
        { FULLNAME, EMAIL, Text }
      );

      Swal.fire({
        title: "Success!",
        text: res.data?.message || "Message sent successfully",
        icon: "success",
      });

      setFormMessage({
        FULLNAME: "",
        EMAIL: "",
        Text: "",
      });
    } catch (err) {
      const msg =
        err?.response?.data?.err ||
        err?.response?.data?.error ||
        err.message ||
        "Send message failed";

      Swal.fire({
        title: "Error!",
        text: msg,
        icon: "error",
      });
    }
  };

  return (
    <div className="max-w-6xl w-full" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <p className="text-gray-600 mb-6">
            Have a project in mind? Let's talk.
          </p>

          <div className="space-y-4">
            <input
              name="FULLNAME"
              value={formMessage.FULLNAME}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              name="EMAIL"
              type="email"
              value={formMessage.EMAIL}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <textarea
              name="Text"
              value={formMessage.Text}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button
              onClick={sendText}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Info icon={<Mail />} title="Email" value="narathipj42@gmail.com" />
          <Info icon={<Phone />} title="Phone" value="+66 925416850" />
          <Info icon={<MapPin />} title="Location" value="Bangkok, Thailand" />
        </div>
      </div>
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="bg-white rounded-xl border p-6 flex gap-4">
      <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
