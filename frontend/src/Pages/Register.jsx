import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
        <form>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

          <label className="block mb-1 text-gray-600 font-medium">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <label className="block mb-1 text-gray-600 font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <label className="block mb-1 text-gray-600 font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-red-500 hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
