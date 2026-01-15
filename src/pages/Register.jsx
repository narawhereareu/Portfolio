import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Eye,EyeClosed,ArrowLeft } from "lucide-react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    FNAME: '',
    LNAME: '',
    EMAIL: '',
    TEL: '',
    PASS: ''
  });
  const [showPassword,setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
  const { FNAME, LNAME, EMAIL, TEL, PASS } = formData;

  if (!FNAME || !LNAME || !EMAIL || !TEL || !PASS) {
    Swal.fire({
      title: "Error",
      text: "Please fill all data",
      icon: "error",
    });
    return;
  }

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      {
        FNAME,
        LNAME,
        EMAIL,
        TEL,
        PASS,
      }
    );

    Swal.fire({
      title: "Success!",
      text: res.data?.message || "Account created successfully!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      setFormData({
        FNAME: "",
        LNAME: "",
        EMAIL: "",
        TEL: "",
        PASS: "",
      });
      navigate("/login");
    });

  } catch (err) {
    const message =
      err?.response?.data?.error ||
      err?.response?.data?.message ||
      "Register failed";

    Swal.fire({
      title: "Error",
      text: message,
      icon: "error",
    });
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 w-auto">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <button
          type="button"
          onClick={() => navigate('/login')}
          className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} className="mr-1" /> Back
        </button>
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h1>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              name="FNAME"
              value={formData.FNAME}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              name="LNAME"
              value={formData.LNAME}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <input
            type="email"
            name="EMAIL"
            value={formData.EMAIL}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            type="tel"
            name="TEL"
            value={formData.TEL}
            onChange={handleChange}
            placeholder="Telephone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

           <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                name="PASS"
                value={formData.PASS}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
            {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
            </button>
            </div>

          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 shadow-md transition-colors duration-200"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
