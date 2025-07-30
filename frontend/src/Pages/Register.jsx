import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = form.username.trim();
    const email = form.email.trim();
    const password = form.password.trim();
    let avatar = form.avatar.trim();

    if (!username || !email || !password) {
      alert("Please fill in all required field");
      return;
    }

    // Auto-generate avatar if blank
    if (!avatar) {
      const initial = username.charAt(0).toUpperCase();
      avatar = `https://placehold.co/40x40.png?text=${initial}`; // username's first letter (intials)
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/register",
        { username, email, password, avatar },
        { headers: { "Content-Type": "application/json" } }
      );
      alert("User is Registered");
      navigate("/login");
    } catch (err) {
      console.error(
        "❌ Registration failed:",
        err.response?.data?.message || err.message
      );
      alert(
        "Registration failed: " +
          (err.response?.data?.message || "Something went wrong")
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
        <form>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Register
          </h2>

          <label className="block mb-1 text-gray-600 font-medium">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block mb-1 text-gray-600 font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block mb-1 text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block mb-1 text-gray-600 font-medium">Avatar</label>
          <input
            type="text"
            placeholder="Avatar"
            name="avatar"
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
