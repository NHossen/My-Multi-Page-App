import React from 'react';

function LoginForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Log In</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-dark-green text-white py-2 rounded-md hover:bg-gray-100 hover:text-black"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
