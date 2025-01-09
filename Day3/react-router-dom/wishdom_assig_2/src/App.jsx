import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';
import Component6 from './Components/Component6';
import Component7 from './Components/Component7';
import Component8 from './Components/Component8';
import Component9 from './Components/Component9';
import Component10 from './Components/Component10';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-wrap gap-8 justify-center p-6">
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component1 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component2 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component3 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component4 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component5 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component6 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component7 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component8 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-orange-400 via-yellow-500 to-green-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component9 />
        </div>
        <div className="w-64 h-80 p-4 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 text-white border border-gray-200 rounded-lg shadow-xl">
          <Component10 />
        </div>
      </div>
    </Router>
  );
};

export default App;
