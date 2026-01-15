import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'Success!',
      text: 'Message sent successfully!',
      icon: 'success',
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-xl w-full" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <p className="text-gray-600 mb-6">
          Have a project in mind? Let's talk.
        </p>
        
        <div className="space-y-4">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition" 
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition" 
          />
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            rows="5" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
          ></textarea>
          <button 
            onClick={handleSubmit} 
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}