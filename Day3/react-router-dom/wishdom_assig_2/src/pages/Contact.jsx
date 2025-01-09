import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        Have questions? Email us at{' '}
        <a href="mailto:contact@mywebsite.com" className="text-indigo-400 underline">
          contact@mywebsite.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
