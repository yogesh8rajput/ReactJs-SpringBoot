// import React from 'react';
// import heroImage from '../images/hero4.png'; // Add your hero image here
// import serviceImage1 from '../images/4.svg'; // Add service images
// import serviceImage2 from '../images/2.svg'; // Add service images
// import serviceImage3 from '../images/1.svg'; // Add service images
// import clientbridge from '../images/h.png';

// function Start() {
//   return (
//     <div className="font-sans bg-gray-200 text-gray-900  ">
//       {/* Navbar */}
//       <nav className="bg-slate-900 text-white p-4 shadow-lg ">
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//           <div><img src={clientbridge} alt="CRM Hero" width="200" /></div>
//           <ul className="flex space-x-6 ">
//             {/* <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li> */}
//             <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
//             <li><a href="#features" className="hover:text-yellow-400 transition">Features</a></li>
//             <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
//             <li><a href="/login" className="hover:text-yellow-400 transition">Login</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-slate-900 text-white py-20" id="home">
//         <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
//           <div className="text-left max-w-xl">
//             <h1 className="text-4xl font-bold mb-4">Transform Your Business with Our CRM Solution</h1>
//             <p className="text-lg mb-8">Manage your customer relationships with ease and efficiency using our CRM platform. Perfect for businesses of all sizes.</p>
//             <button className="bg-yellow-400 text-black py-2 px-6 rounded-full text-xl hover:bg-yellow-500 transition duration-300">Get Started</button>
//           </div>
//           <div>
//             <img src={heroImage} alt="CRM Hero" width="1300" className=''/>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20" id="services">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-semibold">Our Services</h2>
//           <p className="text-lg text-gray-600 mt-4">We offer a range of services to enhance your business efficiency.</p>
//         </div>
//         <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
//           {/* Service 1 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
//             <img src={serviceImage1} alt="Service 1" className=" h-72 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Software Creation & Development</h3>
//             <p className="text-gray-500">We build custom CRM solutions to fit your business needs, from software development to implementation.</p>
//           </div>

//           {/* Service 2 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
//             <img src={serviceImage2} alt="Service 2" className=" h-72 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Product Sales Management</h3>
//             <p className="text-gray-500">Manage and track your sales pipeline, customer interactions, and transactions seamlessly.</p>
//           </div>

//          {/* Service 3 */}
// <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
//   <img src={serviceImage3} alt="Customer Management" className="h-72 mx-auto mb-4" />
//   <h3 className="text-xl font-semibold mb-2">Customer Management</h3>
//   <p className="text-gray-500">We help you manage and maintain your customer relationships, ensuring optimal satisfaction and retention.</p>
// </div>

//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="bg-gray-50 py-20" id="features">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-semibold">Key Features</h2>
//           <p className="text-lg text-gray-600 mt-4">Explore the features that make our CRM solution the best in the industry.</p>
//         </div>
//         <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
//           <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
//             <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
//             <p className="text-gray-500">Get detailed insights into your business performance with our powerful analytics and reporting tools.</p>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
//             <h3 className="text-xl font-semibold mb-2">Customizable Dashboards</h3>
//             <p className="text-gray-500">Personalize your CRM dashboard to track what's most important to your business.</p>
//           </div>

//           <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-100">
//             <h3 className="text-xl font-semibold mb-2">Mobile Access</h3>
//             <p className="text-gray-500">Access your CRM on the go with our mobile-friendly platform, perfect for teams on the move.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-8">
//         <div className="max-w-screen-xl mx-auto text-center">
//           <p>&copy; 2025 CRM Solution. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Start;



///////////////////dashboard

import { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import axios from 'axios';
// import {
//   UsersIcon,
//   ShoppingBagIcon,
//   CubeIcon,
//   CurrencyDollarIcon,
//   ArrowUpIcon,
//   ArrowDownIcon,
//   SunIcon,
//   MoonIcon
// } from '@heroicons/react/24/outline';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Mock API service
const mockApi = {
  getDashboardData: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          userGrowth: [50, 100, 200, 300, 400, 500, 600],
          userCount: 1254,
          productCount: 342,
          orderCount: 892,
          revenue: 45231,
          userList: [
            { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', lastLogin: '2 hours ago' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', lastLogin: '1 day ago' },
            { id: 3, name: 'Robert Johnson', email: 'robert@example.com', status: 'Inactive', lastLogin: '1 week ago' },
            { id: 4, name: 'Emily Davis', email: 'emily@example.com', status: 'Active', lastLogin: '3 hours ago' },
            { id: 5, name: 'Michael Brown', email: 'michael@example.com', status: 'Active', lastLogin: '30 minutes ago' },
          ],
          inventory: [
            { id: 1, name: 'Premium Widget', category: 'Widgets', stock: 142, price: 29.99 },
            { id: 2, name: 'Standard Gadget', category: 'Gadgets', stock: 87, price: 19.99 },
            { id: 3, name: 'Deluxe Gizmo', category: 'Gizmos', stock: 54, price: 49.99 },
            { id: 4, name: 'Basic Thingamajig', category: 'Thingamajigs', stock: 231, price: 9.99 },
            { id: 5, name: 'Ultra Doodad', category: 'Doodads', stock: 32, price: 39.99 },
          ],
          orderStatus: {
            completed: 65,
            processing: 15,
            cancelled: 10,
            pending: 10
          }
        });
      }, 500);
    });
  }
};

function Start() {
  const [darkMode, setDarkMode] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await mockApi.getDashboardData();
        setDashboardData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="text-2xl font-semibold">Loading Dashboard...</div>
      </div>
    );
  }

  // Chart data configurations
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'User Growth',
        data: dashboardData.userGrowth,
        borderColor: darkMode ? '#3B82F6' : '#2563EB',
        backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const orderStatusData = {
    labels: ['Completed', 'Processing', 'Cancelled', 'Pending'],
    datasets: [
      {
        data: Object.values(dashboardData.orderStatus),
        backgroundColor: [
          darkMode ? '#10B981' : '#059669',
          darkMode ? '#F59E0B' : '#D97706',
          darkMode ? '#EF4444' : '#DC2626',
          darkMode ? '#64748B' : '#475569'
        ],
        borderColor: darkMode ? '#1E293B' : '#F8FAFC',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CRM Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          >
            {/* {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />} */}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value={dashboardData.userCount}
            // icon={<UsersIcon className="h-6 w-6" />}
            change="+12%"
            isIncrease={true}
            darkMode={darkMode}
          />
          <StatCard
            title="Total Products"
            value={dashboardData.productCount}
            // icon={<CubeIcon className="h-6 w-6" />}
            change="+5%"
            isIncrease={true}
            darkMode={darkMode}
          />
          <StatCard
            title="Total Orders"
            value={dashboardData.orderCount}
            // icon={<ShoppingBagIcon className="h-6 w-6" />}
            change="+23%"
            isIncrease={true}
            darkMode={darkMode}
          />
          <StatCard
            title="Total Revenue"
            value={`$${dashboardData.revenue.toLocaleString()}`}
            // icon={<CurrencyDollarIcon className="h-6 w-6" />}
            change="+18%"
            isIncrease={true}
            darkMode={darkMode}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-4">User Growth</h2>
            <div className="h-80">
              <Line
                data={userGrowthData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        color: darkMode ? '#E5E7EB' : '#111827'
                      }
                    }
                  },
                  scales: {
                    x: {
                      grid: {
                        color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                      },
                      ticks: {
                        color: darkMode ? '#9CA3AF' : '#6B7280'
                      }
                    },
                    y: {
                      grid: {
                        color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                      },
                      ticks: {
                        color: darkMode ? '#9CA3AF' : '#6B7280'
                      }
                    }
                  }
                }}
              />
            </div>
          </div>

          <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-4">Order Status</h2>
            <div className="h-80">
              <Pie
                data={orderStatusData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        color: darkMode ? '#E5E7EB' : '#111827'
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <TableHeader darkMode={darkMode}>Name</TableHeader>
                    <TableHeader darkMode={darkMode}>Email</TableHeader>
                    <TableHeader darkMode={darkMode}>Status</TableHeader>
                    <TableHeader darkMode={darkMode}>Last Login</TableHeader>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {dashboardData.userList.map(user => (
                    <tr key={user.id}>
                      <TableCell darkMode={darkMode}>{user.name}</TableCell>
                      <TableCell darkMode={darkMode}>{user.email}</TableCell>
                      <TableCell darkMode={darkMode}>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'Active' 
                            ? (darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800')
                            : (darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800')
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell darkMode={darkMode}>{user.lastLogin}</TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-4">Product Inventory</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <TableHeader darkMode={darkMode}>Product</TableHeader>
                    <TableHeader darkMode={darkMode}>Category</TableHeader>
                    <TableHeader darkMode={darkMode}>Stock</TableHeader>
                    <TableHeader darkMode={darkMode}>Price</TableHeader>
                  </tr>
                </thead>
                <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {dashboardData.inventory.map(product => (
                    <tr key={product.id}>
                      <TableCell darkMode={darkMode}>{product.name}</TableCell>
                      <TableCell darkMode={darkMode}>{product.category}</TableCell>
                      <TableCell darkMode={darkMode}>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.stock < 50 
                            ? (darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800')
                            : product.stock < 100
                              ? (darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800')
                              : (darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800')
                        }`}>
                          {product.stock}
                        </span>
                      </TableCell>
                      <TableCell darkMode={darkMode}>${product.price.toFixed(2)}</TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`p-4 border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
        <div className="container mx-auto text-center">
          <p>CRM Dashboard &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

// Reusable components
function StatCard({ title, value, icon, change, isIncrease, darkMode }) {
  return (
    <div className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          {icon}
        </div>
      </div>
      <div className={`mt-4 flex items-center ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
        {/* {isIncrease ? (
          // <ArrowUpIcon className="h-4 w-4" />
        ) : (
          // <ArrowDownIcon className="h-4 w-4" />
        )} */}
        <span className="ml-1 text-sm font-medium">{change}</span>
        <span className={`ml-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>vs last month</span>
      </div>
    </div>
  );
}

function TableHeader({ children, darkMode }) {
  return (
    <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-500'
    }`}>
      {children}
    </th>
  );
}

function TableCell({ children, darkMode }) {
  return (
    <td className={`px-6 py-4 whitespace-nowrap text-sm ${
      darkMode ? 'text-gray-300' : 'text-gray-700'
    }`}>
      {children}
    </td>
  );
}

export default Start;
