
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from '../Component/Navbar';
function Error() {
  const [state, handleSubmit] = useForm("mpwyvnyk");

  if (state.succeeded) {
    return (
      <div>
        <Navbar />
        <div className="max-w-xl mx-auto my-10 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Thanks for your message!</h2>
          <p>I'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10 p-8 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              disabled={state.submitting}
              className="text-center bg-green-500 text-white px-10 rounded-2xl mt-2 mb-8 py-2 font-semibold hover:bg-green-600 disabled:bg-gray-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// The default export also matches your filename
export default Error;