import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Register from "./Register";

export default function Login() {
  const navigate = useNavigate();
  const MOCK_USER = {
    email:'nara@gmail.com',
    password:'1234'
  }
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState('');

   const handleLogin = (e) => {
    e.preventDefault(); 

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      {
        navigate("/home");
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "ข้อมมูลไม่ถูกต้อง",
        icon: "error",
        confirmButtonText: "Retry"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
             {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
            onChange={(e)=> setEmail(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition"
            onChange={(e)=> setPassword(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Continue
          </button>
        </form>
        <div className="text-center mt-4">
            Do you want to see?{"  "}
            <Link to="/register" className="text-indigo-500 hover:text-indigo-400 font-semibold">
                Register 
            </Link> {" "}
            Here.
            </div>
      </div>
    </div>
  );
}