function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 rounded bg-gray-700" />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded bg-gray-700" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-gray-700" />
        <button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">Register</button>
      </form>
    </div>
  );
}

export default Register;