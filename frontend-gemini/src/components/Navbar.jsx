



// import { FaUser } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { logout } from "../features/authSlice";

// const Navbar = () => {
//   const { chatId } = useParams();
//   const chats = useSelector((state) => state.chats.value);
//   const chat = chats.find((c) => c._id === chatId);
//   const loggedInUser = useSelector((state) => state.auth.user);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutUser = () => {
//     dispatch(logout());
//     navigate("/login");
//   };

//   return (
//     <nav className="flex justify-between items-center bg-black px-4 md:px-6 py-4 shadow-md border-b border-gray-800 min-h-[4rem] relative z-50"> {/* Increased z-index */}
//       <span className="text-xl md:text-3xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 font-mono truncate max-w-[40%]">
//         GeminiClone
//       </span>

//       {loggedInUser ? (
//         <div className="flex items-center gap-2 text-sm md:text-lg bg-white text-black px-3 md:px-4 py-1 md:py-2 rounded-full shadow hover:bg-gray-100 transition duration-200">
//           <FaUser className="text-blue-600 flex-shrink-0" size={14} />
//           <span className="truncate max-w-[80px] md:max-w-none">
//             {loggedInUser.name || "User"}
//           </span>
//           <button
//             onClick={logoutUser}
//             className="ml-1 md:ml-2 px-2 md:px-3 py-1 cursor-pointer bg-red-500 text-white text-xs md:text-sm rounded hover:bg-red-600 transition duration-150 flex-shrink-0"
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <button
//           onClick={() => navigate("/login")}
//           className="bg-red-500 text-black px-3 md:px-4 py-1 md:py-2 rounded-full shadow hover:bg-red-300 transition duration-200 text-sm md:text-lg cursor-pointer flex-shrink-0"
//         >
//           Sign In
//         </button>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import { FaUser, FaSignOutAlt, FaSignInAlt, FaCrown, FaGem } from "react-icons/fa";
// import { HiOutlineSparkles } from "react-icons/hi";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { logout } from "../features/authSlice";
// import { useState } from "react";

// const Navbar = () => {
//   const { chatId } = useParams();
//   const chats = useSelector((state) => state.chats.value);
//   const chat = chats.find((c) => c._id === chatId);
//   const loggedInUser = useSelector((state) => state.auth.user);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutUser = () => {
//     showToast("👋 Logged out successfully!", "success");
//     dispatch(logout());
//     navigate("/login");
//   };

//   const showToast = (message, type) => {
//     // You can integrate the same toast system here
//     console.log(`${type}: ${message}`);
//   };

//   return (
//     <>
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-5px); }
//         }
//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
//           50% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.8), 0 0 40px rgba(168, 85, 247, 0.5); }
//         }
//         @keyframes shimmer {
//           0% { background-position: -1000px 0; }
//           100% { background-position: 1000px 0; }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-glow {
//           animation: glow 2s ease-in-out infinite;
//         }
//         .shimmer-text {
//           background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite linear;
//         }
//       `}</style>

//       <nav className="sticky top-0 flex justify-between items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-4 shadow-2xl border-b border-gray-800/50 backdrop-blur-lg min-h-[5rem] z-50">
//         {/* Left side - Logo */}
//         <div 
//           className="flex items-center gap-3 cursor-pointer group" 
//           onClick={() => navigate("/")}
//         >
//           <div className="relative">
//             <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-500"></div>
//             <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center animate-glow">
//               <FaGem className="text-white text-xl" />
//               <HiOutlineSparkles className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse" />
//             </div>
//           </div>
          
//           <div className="flex flex-col">
//             <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-300">
//               Gemini AI
//             </span>
//             <span className="text-xs text-gray-400 font-mono tracking-wider">Powered by GeminiClone</span>
//           </div>
//         </div>

//         {/* Center - Chat Title (if available) */}
//         {chat && (
//           <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
//             <div className="flex items-center gap-3 px-6 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-gray-200 font-medium max-w-xs truncate">
//                 {chat.title || "Untitled Chat"}
//               </span>
//               <div className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full">
//                 Active
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Right side - User/Auth */}
//         {loggedInUser ? (
//           <div className="relative">
//             {/* User Profile Button */}
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="flex items-center gap-3 group relative"
//             >
//               <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              
//               <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full overflow-hidden border-2 border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
//                 {loggedInUser.profilePic ? (
//                   <img src={loggedInUser.profilePic} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-700">
//                     <FaUser className="text-white text-lg" />
//                   </div>
//                 )}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
              
//               <div className="text-left hidden md:block">
//                 <div className="flex items-center gap-2">
//                   <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors duration-200">
//                     {loggedInUser.name || "User"}
//                   </span>
//                   <FaCrown className="text-yellow-400 text-xs animate-pulse" />
//                 </div>
//                 <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
//                   {loggedInUser.email || "Premium User"}
//                 </span>
//               </div>
              
//               <div className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
//                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//             </button>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <>
//                 <div 
//                   className="fixed inset-0 z-40" 
//                   onClick={() => setIsDropdownOpen(false)}
//                 ></div>
//                 <div className="absolute right-0 mt-3 w-64 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden z-50 animate-fade-in">
//                   <div className="p-5 border-b border-gray-800/50">
//                     <div className="flex items-center gap-3">
//                       <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
//                         <FaUser className="text-white text-xl" />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-white">{loggedInUser.name || "User"}</h3>
//                         <p className="text-sm text-gray-400 truncate">{loggedInUser.email || "user@example.com"}</p>
//                         <div className="flex items-center gap-1 mt-1">
//                           <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                           <span className="text-xs text-gray-400">Online</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="p-2">
//                     <button 
//                       onClick={() => {
//                         navigate("/profile");
//                         setIsDropdownOpen(false);
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
//                     >
//                       <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
//                         <FaUser className="text-gray-400 group-hover:text-cyan-300" />
//                       </div>
//                       <span>Profile Settings</span>
//                     </button>
                    
//                     <button 
//                       onClick={() => {
//                         navigate("/chats");
//                         setIsDropdownOpen(false);
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
//                     >
//                       <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-200">
//                         <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                         </svg>
//                       </div>
//                       <span>My Chats</span>
//                     </button>
//                   </div>
                  
//                   <div className="p-2 border-t border-gray-800/50">
//                     <button 
//                       onClick={logoutUser}
//                       className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200 group"
//                     >
//                       <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-200">
//                         <FaSignOutAlt className="text-red-400 group-hover:text-red-300" />
//                       </div>
//                       <span>Logout</span>
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         ) : (
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => navigate("/register")}
//               className="hidden md:block px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-800/50"
//             >
//               Sign Up
//             </button>
            
//             <button
//               onClick={() => navigate("/login")}
//               className="group relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <span className="relative z-10 text-white font-medium flex items-center gap-2">
//                 <FaSignInAlt className="text-sm" />
//                 Sign In
//               </span>
//             </button>
//           </div>
//         )}

//         {/* Background Effects */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
//           <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
//         </div>
//       </nav>

//       {/* Active Chat Indicator for Mobile */}
//       {chat && (
//         <div className="md:hidden bg-gradient-to-r from-gray-900 to-black px-4 py-2 border-b border-gray-800/30">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-sm text-gray-300 truncate max-w-[200px]">
//                 {chat.title || "Untitled Chat"}
//               </span>
//             </div>
//             <div className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full">
//               Active
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { FaUser, FaSignOutAlt, FaSignInAlt, FaCrown, FaGem, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../features/authSlice";
import AboutPage from './AboutPage'; // Make sure to import the AboutPage component

const Navbar = () => {
  const { chatId } = useParams();
  const chats = useSelector((state) => state.chats.value);
  const chat = chats.find((c) => c._id === chatId);
  const loggedInUser = useSelector((state) => state.auth.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    // Custom toast for logout
    showCustomToast("👋 Logged out successfully!", "success");
    dispatch(logout());
    navigate("/login");
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const showCustomToast = (message, type) => {
    // You can integrate the same toast system from login/register
    console.log(`${type}: ${message}`);
    // For now, using console.log. You can replace with your toast implementation
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
          50% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.8), 0 0 40px rgba(168, 85, 247, 0.5); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite linear;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      <nav className="sticky top-0 flex justify-between items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 md:px-6 lg:px-8 py-4 shadow-2xl border-b border-gray-800/50 backdrop-blur-lg min-h-[5rem] z-50">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Left side - Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group flex-1 lg:flex-none justify-center lg:justify-start"
          onClick={() => setShowAbout(true)}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center animate-glow">
              <FaGem className="text-white text-lg md:text-xl" />
              <HiOutlineSparkles className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-300">
              Gemini AI
            </span>
            <span className="text-xs text-gray-400 font-mono tracking-wider group-hover:text-gray-300 transition-colors hidden md:block">
              Click to learn more
            </span>
          </div>
        </div>

        {/* Center - Chat Title (if available) */}
        {chat && (
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
            <div className="flex items-center gap-3 px-6 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-200 font-medium max-w-xs truncate">
                {chat.title || "Untitled Chat"}
              </span>
              <div className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full">
                Active
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {loggedInUser ? (
            <>
              {/* Navigation Links */}
              <button
                onClick={() => handleNavigation("/new-chat")}
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline text-sm font-medium"
              >
                New Chat
              </button>
              <button
                onClick={() => handleNavigation("/chats")}
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline text-sm font-medium"
              >
                My Chats
              </button>
              
              {/* User Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full overflow-hidden border-2 border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
                    {loggedInUser.profilePic ? (
                      <img src={loggedInUser.profilePic} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-700">
                        <FaUser className="text-white text-sm" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors duration-200">
                        {loggedInUser.name?.split(' ')[0] || "User"}
                      </span>
                      <FaCrown className="text-yellow-400 text-xs animate-pulse" />
                    </div>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-3 w-64 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden z-50 animate-slide-down">
                      <div className="p-5 border-b border-gray-800/50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                            <FaUser className="text-white text-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-sm">{loggedInUser.name || "User"}</h3>
                            <p className="text-xs text-gray-400 truncate">{loggedInUser.email || "user@example.com"}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-gray-400">Online</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2">
                        <button 
                          onClick={() => handleNavigation("/profile")}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
                        >
                          <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                            <FaUser className="text-gray-400 group-hover:text-cyan-300 text-sm" />
                          </div>
                          <span className="text-sm">Profile Settings</span>
                        </button>
                        
                        <button 
                          onClick={() => handleNavigation("/chats")}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
                        >
                          <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-200">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <span className="text-sm">My Chats</span>
                        </button>
                      </div>
                      
                      <div className="p-2 border-t border-gray-800/50">
                        <button 
                          onClick={logoutUser}
                          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200 group"
                        >
                          <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-200">
                            <FaSignOutAlt className="text-red-400 group-hover:text-red-300 text-sm" />
                          </div>
                          <span className="text-sm">Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavigation("/register")}
                className="hidden md:block px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-800/50"
              >
                Sign Up
              </button>
              
              <button
                onClick={() => handleNavigation("/login")}
                className="group relative px-5 md:px-6 py-2.5 md:py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-white font-medium flex items-center gap-2 text-sm">
                  <FaSignInAlt className="text-xs" />
                  Sign In
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile User Icon for logged in users */}
        {loggedInUser && (
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 overflow-hidden border-2 border-gray-700/50"
            >
              {loggedInUser.profilePic ? (
                <img src={loggedInUser.profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaUser className="text-white text-sm" />
                </div>
              )}
            </button>
          </div>
        )}

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-20 left-4 right-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden z-40 lg:hidden animate-slide-down">
            <div className="p-4">
              {loggedInUser ? (
                <>
                  <div className="p-4 mb-4 bg-gradient-to-r from-gray-800/50 to-black/50 rounded-xl border border-gray-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                        <FaUser className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{loggedInUser.name || "User"}</h3>
                        <p className="text-sm text-gray-400">{loggedInUser.email || "user@example.com"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-400">Online</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button 
                      onClick={() => handleNavigation("/new-chat")}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <span>New Chat</span>
                    </button>

                    <button 
                      onClick={() => handleNavigation("/chats")}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span>My Chats</span>
                    </button>

                    <button 
                      onClick={() => handleNavigation("/profile")}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                        <FaUser className="text-gray-400 text-sm" />
                      </div>
                      <span>Profile Settings</span>
                    </button>

                    <div className="pt-4 border-t border-gray-800/50">
                      <button 
                        onClick={logoutUser}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200"
                      >
                        <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                          <FaSignOutAlt className="text-red-400 text-sm" />
                        </div>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={() => handleNavigation("/login")}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity duration-200"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleNavigation("/register")}
                    className="w-full py-3 bg-gray-800/50 text-white font-medium rounded-xl border border-gray-700/50 hover:bg-gray-800/70 transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && loggedInUser && (
        <>
          <div 
            className="fixed inset-0 z-40 lg:hidden" 
            onClick={() => setIsDropdownOpen(false)}
          ></div>
          <div className="fixed top-20 right-4 w-48 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden z-40 lg:hidden animate-slide-down">
            <div className="p-2">
              <button 
                onClick={() => handleNavigation("/profile")}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
              >
                <FaUser className="text-gray-400 text-sm" />
                <span className="text-sm">Profile</span>
              </button>
              
              <button 
                onClick={logoutUser}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200"
              >
                <FaSignOutAlt className="text-red-400 text-sm" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Active Chat Indicator for Mobile */}
      {chat && (
        <div className="lg:hidden bg-gradient-to-r from-gray-900 to-black px-4 py-3 border-b border-gray-800/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-sm text-gray-300 truncate">
                {chat.title || "Untitled Chat"}
              </span>
            </div>
            <div className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full flex-shrink-0 ml-2">
              Active
            </div>
          </div>
        </div>
      )}

      {/* Render About Page Modal */}
      {showAbout && <AboutPage onClose={() => setShowAbout(false)} />}
    </>
  );
};

export default Navbar;