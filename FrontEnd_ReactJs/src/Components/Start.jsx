import React from 'react';
import heroImage from '../images/hero4.png'; // Add your hero image here
import serviceImage1 from '../images/4.svg'; // Add service images
import serviceImage2 from '../images/2.svg'; // Add service images
import serviceImage3 from '../images/1.svg'; // Add service images
import clientbridge from '../images/h.png';

function Start() {
  return (
    <div className="font-sans bg-gray-200 text-gray-900  ">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white p-4 shadow-lg ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div><img src={clientbridge} alt="CRM Hero" width="200" /></div>
          <ul className="flex space-x-6">
            {/* <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li> */}
            <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#features" className="hover:text-yellow-400 transition">Features</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="/login" className="hover:text-yellow-400 transition">Login</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20" id="home">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
          <div className="text-left max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Transform Your Business with Our CRM Solution</h1>
            <p className="text-lg mb-8">Manage your customer relationships with ease and efficiency using our CRM platform. Perfect for businesses of all sizes.</p>
            <button className="bg-yellow-400 text-black py-2 px-6 rounded-full text-xl hover:bg-yellow-500 transition duration-300">Get Started</button>
          </div>
          <div>
            <img src={heroImage} alt="CRM Hero" width="1300"/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4">We offer a range of services to enhance your business efficiency.</p>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
            <img src={serviceImage1} alt="Service 1" className=" h-72 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Software Creation & Development</h3>
            <p className="text-gray-500">We build custom CRM solutions to fit your business needs, from software development to implementation.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
            <img src={serviceImage2} alt="Service 2" className=" h-72 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product Sales Management</h3>
            <p className="text-gray-500">Manage and track your sales pipeline, customer interactions, and transactions seamlessly.</p>
          </div>

         {/* Service 3 */}
<div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
  <img src={serviceImage3} alt="Customer Management" className="h-72 mx-auto mb-4" />
  <h3 className="text-xl font-semibold mb-2">Customer Management</h3>
  <p className="text-gray-500">We help you manage and maintain your customer relationships, ensuring optimal satisfaction and retention.</p>
</div>

        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20" id="features">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Key Features</h2>
          <p className="text-lg text-gray-600 mt-4">Explore the features that make our CRM solution the best in the industry.</p>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
            <p className="text-gray-500">Get detailed insights into your business performance with our powerful analytics and reporting tools.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Customizable Dashboards</h3>
            <p className="text-gray-500">Personalize your CRM dashboard to track what's most important to your business.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">Mobile Access</h3>
            <p className="text-gray-500">Access your CRM on the go with our mobile-friendly platform, perfect for teams on the move.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 CRM Solution. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Start;
