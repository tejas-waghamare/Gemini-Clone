// import { useState, useEffect } from 'react';
// import { FaGem, FaBrain, FaRocket, FaShieldAlt, FaUsers, FaGlobe, FaCode, FaLightbulb, FaStar, FaChevronRight } from 'react-icons/fa';
// import { HiOutlineSparkles, HiOutlineChatAlt2, HiOutlineLightningBolt } from 'react-icons/hi';
// import { motion, AnimatePresence } from 'framer-motion';

// const AboutPage = ({ onClose }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

//   const features = [
//     {
//       icon: <FaBrain className="text-3xl" />,
//       title: "Advanced AI",
//       description: "Powered by state-of-the-art language models for intelligent conversations",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: <HiOutlineChatAlt2 className="text-3xl" />,
//       title: "Smart Chats",
//       description: "Context-aware conversations with memory across sessions",
//       color: "from-cyan-500 to-blue-500"
//     },
//     {
//       icon: <FaShieldAlt className="text-3xl" />,
//       title: "Secure & Private",
//       description: "End-to-end encryption and privacy-focused design",
//       color: "from-emerald-500 to-green-500"
//     },
//     {
//       icon: <HiOutlineLightningBolt className="text-3xl" />,
//       title: "Lightning Fast",
//       description: "Ultra-fast responses with optimized performance",
//       color: "from-amber-500 to-orange-500"
//     },
//     {
//       icon: <FaGlobe className="text-3xl" />,
//       title: "Multi-language",
//       description: "Supports conversations in multiple languages",
//       color: "from-blue-500 to-indigo-500"
//     },
//     {
//       icon: <FaCode className="text-3xl" />,
//       title: "Developer Friendly",
//       description: "APIs and tools for developers to build upon",
//       color: "from-violet-500 to-purple-500"
//     }
//   ];

//   const teamMembers = [
//     {
//       name: "Alex Chen",
//       role: "Lead AI Engineer",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
//       bio: "AI/ML specialist with 8+ years experience"
//     },
//     {
//       name: "Sarah Johnson",
//       role: "Product Designer",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-400",
//       bio: "UI/UX expert focused on user experience"
//     },
//     {
//       name: "Marcus Rivera",
//       role: "Backend Architect",
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
//       bio: "Scalable systems and infrastructure"
//     },
//     {
//       name: "Priya Sharma",
//       role: "Frontend Lead",
//       avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
//       bio: "React and modern web technologies"
//     }
//   ];

//   const stats = [
//     { value: "10M+", label: "Conversations", icon: "💬" },
//     { value: "50+", label: "Languages", icon: "🌐" },
//     { value: "99.9%", label: "Uptime", icon: "⚡" },
//     { value: "24/7", label: "Support", icon: "🛡️" }
//   ];

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(() => onClose(), 300);
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <AnimatePresence>
//         {isVisible && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center p-4"
//             onClick={handleClose}
//           >
//             {/* Modal Container */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800/50 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Background Effects */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl"></div>
//               </div>

//               {/* Close Button */}
//               <button
//                 onClick={handleClose}
//                 className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 group"
//               >
//                 <span className="text-xl font-bold group-hover:scale-110 transition-transform">×</span>
//               </button>

//               {/* Header */}
//               <div className="relative pt-12 pb-8 px-8 md:px-12 border-b border-gray-800/50">
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//                   <div className="flex items-center gap-4">
//                     <div className="relative">
//                       <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
//                       <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
//                         <FaGem className="text-white text-2xl" />
//                         <HiOutlineSparkles className="absolute -top-2 -right-2 text-yellow-300 animate-pulse" />
//                       </div>
//                     </div>
//                     <div>
//                       <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                         Gemini AI
//                       </h1>
//                       <p className="text-gray-400 mt-2">Intelligent Conversations, Redefined</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
//                       <span className="text-cyan-300 font-medium">v2.0.1</span>
//                     </div>
//                     <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full border border-emerald-500/30">
//                       <span className="text-emerald-300 font-medium flex items-center gap-2">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
//                         Online
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Tabs */}
//               <div className="flex border-b border-gray-800/50 px-8">
//                 {['overview', 'features', 'team', 'stats'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-4 font-medium text-sm uppercase tracking-wider transition-all duration-300 relative ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     {activeTab === tab && (
//                       <motion.div
//                         layoutId="activeTab"
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
//                       />
//                     )}
//                   </button>
//                 ))}
//               </div>

//               {/* Content */}
//               <div className="overflow-y-auto max-h-[60vh] p-8 md:p-12">
//                 <AnimatePresence mode="wait">
//                   {activeTab === 'overview' && (
//                     <motion.div
//                       key="overview"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       className="space-y-8"
//                     >
//                       <div className="grid md:grid-cols-2 gap-8">
//                         <div className="space-y-6">
//                           <h2 className="text-2xl font-bold text-white">Our Mission</h2>
//                           <p className="text-gray-300 leading-relaxed">
//                             Gemini AI is redefining human-computer interaction through advanced 
//                             artificial intelligence. We believe in creating intelligent systems 
//                             that understand, assist, and empower users in their daily lives.
//                           </p>
//                           <div className="flex items-center gap-2 text-cyan-300">
//                             <FaLightbulb />
//                             <span className="font-medium">Innovating since 2023</span>
//                           </div>
//                         </div>
//                         <div className="space-y-6">
//                           <h2 className="text-2xl font-bold text-white">Technology</h2>
//                           <p className="text-gray-300 leading-relaxed">
//                             Built on cutting-edge machine learning models, our platform combines 
//                             natural language processing, contextual understanding, and real-time 
//                             adaptation to provide truly intelligent conversations.
//                           </p>
//                           <div className="flex items-center gap-2 text-purple-300">
//                             <FaRocket />
//                             <span className="font-medium">Powered by Advanced AI</span>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}

//                   {activeTab === 'features' && (
//                     <motion.div
//                       key="features"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                     >
//                       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {features.map((feature, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: index * 0.1 }}
//                             whileHover={{ y: -5 }}
//                             className={`bg-gradient-to-br ${feature.color}/10 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-gray-700/50 transition-all duration-300 group cursor-pointer`}
//                           >
//                             <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                               <div className="text-white">{feature.icon}</div>
//                             </div>
//                             <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
//                             <p className="text-gray-400">{feature.description}</p>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}

//                   {activeTab === 'team' && (
//                     <motion.div
//                       key="team"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                     >
//                       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {teamMembers.map((member, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
//                           >
//                             <div className="relative">
//                               <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-800 mx-auto mb-4 group-hover:border-cyan-500/50 transition-colors duration-300">
//                                 <img 
//                                   src={member.avatar} 
//                                   alt={member.name}
//                                   className="w-full h-full object-cover"
//                                 />
//                               </div>
//                               <div className="absolute bottom-6 right-1/2 translate-x-1/2 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900"></div>
//                             </div>
//                             <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
//                             <p className="text-cyan-300 text-center text-sm mb-3">{member.role}</p>
//                             <p className="text-gray-400 text-center text-sm">{member.bio}</p>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}

//                   {activeTab === 'stats' && (
//                     <motion.div
//                       key="stats"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                     >
//                       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                         {stats.map((stat, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center"
//                           >
//                             <div className="text-4xl mb-2">{stat.icon}</div>
//                             <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                               {stat.value}
//                             </div>
//                             <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
//                           </motion.div>
//                         ))}
//                       </div>
                      
//                       <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
//                         <h3 className="text-xl font-bold text-white mb-6">Our Journey</h3>
//                         <div className="space-y-4">
//                           {[
//                             { year: "2023", event: "Gemini AI Founded", milestone: "First prototype" },
//                             { year: "2024", event: "Public Launch", milestone: "10k+ users" },
//                             { year: "2024", event: "v2.0 Release", milestone: "Advanced features" },
//                             { year: "2025", event: "Global Expansion", milestone: "Multi-language support" }
//                           ].map((item, index) => (
//                             <div key={index} className="flex items-start gap-4 group cursor-pointer">
//                               <div className="w-16 flex-shrink-0">
//                                 <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-center">
//                                   <span className="text-cyan-300 text-sm font-medium">{item.year}</span>
//                                 </div>
//                               </div>
//                               <div className="flex-1 pb-4 border-b border-gray-800/50 group-hover:border-gray-700/50 transition-colors duration-300">
//                                 <div className="flex items-center justify-between">
//                                   <h4 className="text-white font-medium">{item.event}</h4>
//                                   <FaChevronRight className="text-gray-500 group-hover:text-cyan-300 transition-colors duration-300" />
//                                 </div>
//                                 <p className="text-gray-400 text-sm mt-1">{item.milestone}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Footer */}
//               <div className="px-8 py-6 border-t border-gray-800/50 bg-black/30 backdrop-blur-sm">
//                 <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//                   <div className="flex items-center gap-6">
//                     <button className="text-gray-400 hover:text-white transition-colors duration-200">
//                       Privacy Policy
//                     </button>
//                     <button className="text-gray-400 hover:text-white transition-colors duration-200">
//                       Terms of Service
//                     </button>
//                     <button className="text-gray-400 hover:text-white transition-colors duration-200">
//                       Contact Us
//                     </button>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <span className="text-gray-400 text-sm">Follow us:</span>
//                     <div className="flex gap-3">
//                       {['🐦', '📘', '💼', '📷'].map((icon, index) => (
//                         <button
//                           key={index}
//                           className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 hover:scale-110"
//                         >
//                           {icon}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-center text-gray-500 text-sm mt-4">
//                   © 2024 Gemini AI. All rights reserved. Made with ❤️ for the AI community.
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AboutPage;

import { useState, useEffect } from 'react';
import { FaGem, FaBrain, FaRocket, FaShieldAlt, FaUsers, FaGlobe, FaCode, FaLaptopCode, FaLightbulb, FaStar, FaChevronRight, FaUser } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineChatAlt2, HiOutlineLightningBolt } from 'react-icons/hi';
import mypic from '../assets/mypic.jpg'
import { motion, AnimatePresence } from 'framer-motion';

const AboutPage = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const features = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Advanced AI",
      description: "Powered by state-of-the-art language models for intelligent conversations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <HiOutlineChatAlt2 className="text-3xl" />,
      title: "Smart Chats",
      description: "Context-aware conversations with memory across sessions",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure & Private",
      description: "End-to-end encryption and privacy-focused design",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <HiOutlineLightningBolt className="text-3xl" />,
      title: "Lightning Fast",
      description: "Ultra-fast responses with optimized performance",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Multi-language",
      description: "Supports conversations in multiple languages",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Developer Friendly",
      description: "Built with modern technologies and clean code",
      color: "from-violet-500 to-purple-500"
    }
  ];

  // Updated team members with your information
  const teamMembers = [
    {
      name: "Tejas D. Waghamare", // Replace with your name
      role: "Full Stack Developer & Creator",
      avatar: mypic, // Add your photo path here
      bio: "Solo developer who built this entire project from scratch",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      isCreator: true
    }
  ];

  const stats = [
    { value: "100%", label: "Solo Built", icon: "👨‍💻" },
    { value: "Full Stack", label: "Development", icon: "🚀" },
    { value: "Modern", label: "Tech Stack", icon: "⚡" },
    { value: "Passion", label: "Driven", icon: "❤️" }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", color: "bg-blue-500/10" },
    { name: "Node.js", icon: "🟢", color: "bg-green-500/10" },
    { name: "MongoDB", icon: "🍃", color: "bg-emerald-500/10" },
    { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500/10" },
    { name: "Redux", icon: "🔄", color: "bg-purple-500/10" },
    { name: "Axios", icon: "📡", color: "bg-indigo-500/10" },
    { name: "Framer Motion", icon: "✨", color: "bg-pink-500/10" },
    { name: "React Router", icon: "🛣️", color: "bg-red-500/10" }
  ];

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl"></div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 group"
              >
                <span className="text-xl font-bold group-hover:scale-110 transition-transform">×</span>
              </button>

              {/* Header */}
              <div className="relative pt-12 pb-8 px-8 md:px-12 border-b border-gray-800/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <FaGem className="text-white text-2xl" />
                        <HiOutlineSparkles className="absolute -top-2 -right-2 text-yellow-300 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Gemini AI
                      </h1>
                      <p className="text-gray-400 mt-2">A Solo Developer's Masterpiece</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
                      <span className="text-cyan-300 font-medium">v2.0.1</span>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full border border-emerald-500/30">
                      <span className="text-emerald-300 font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        Solo Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-800/50 px-8 overflow-x-auto">
                {['overview', 'features', 'creator', 'tech'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-medium text-sm uppercase tracking-wider transition-all duration-300 relative flex-shrink-0 ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    {tab === 'creator' ? 'The Creator' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[60vh] p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-8"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <h2 className="text-2xl font-bold text-white">The Story</h2>
                          <p className="text-gray-300 leading-relaxed">
                            Gemini AI was built from the ground up by a single passionate developer. 
                            This project represents the culmination of dedication, skill, and a deep 
                            understanding of modern web technologies.
                          </p>
                          <div className="flex items-center gap-2 text-cyan-300">
                            <FaLightbulb />
                            <span className="font-medium">Built with passion and precision</span>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <h2 className="text-2xl font-bold text-white">The Vision</h2>
                          <p className="text-gray-300 leading-relaxed">
                            To create an intelligent, user-friendly AI chat application that demonstrates 
                            the power of modern web development and showcases what one developer can 
                            achieve with dedication and the right tools.
                          </p>
                          <div className="flex items-center gap-2 text-purple-300">
                            <FaRocket />
                            <span className="font-medium">From concept to completion</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <FaLaptopCode className="text-3xl text-cyan-400" />
                          <h3 className="text-xl font-bold text-white">Solo Development Journey</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-gray-300">What makes this special:</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <HiOutlineSparkles className="text-cyan-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">100% solo development from design to deployment</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <HiOutlineSparkles className="text-cyan-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">Modern, responsive design with smooth animations</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <HiOutlineSparkles className="text-cyan-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">Full-stack implementation with robust features</span>
                              </li>
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="font-semibold text-gray-300">Key Achievements:</h4>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <FaStar className="text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">Complete authentication system</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <FaStar className="text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">Real-time chat functionality</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <FaStar className="text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">State management with Redux</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-gradient-to-br ${feature.color}/10 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-gray-700/50 transition-all duration-300 group cursor-pointer`}
                          >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <div className="text-white">{feature.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'creator' && (
                    <motion.div
                      key="creator"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="max-w-4xl mx-auto">
                        {/* Creator Card */}
                        <div className="relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm mb-8">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
                          
                          <div className="relative p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                              {/* Profile Image */}
                              <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800/50">
                                  {/* Replace with your photo */}
                                  <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center text-white">
                                    {/* <FaUser className="text-6xl" /> */}
                                    <img src={teamMembers[0].avatar} alt="Creator" className="w-full h-full object-cover" />
                                  </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                                  <FaStar className="text-white text-sm" />
                                </div>
                              </div>
                              
                              {/* Creator Info */}
                              <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-4">
                                  <HiOutlineSparkles className="text-yellow-300" />
                                  <span className="text-cyan-300 font-medium">Solo Developer</span>
                                </div>
                                
                                <h2 className="text-3xl font-bold text-white mb-2">
                                  {/* Replace with your name */}
                                  {teamMembers[0].name}
                                </h2>
                                <p className="text-xl text-cyan-300 mb-4">{teamMembers[0].role}</p>
                                <p className="text-gray-300 mb-6">{teamMembers[0].bio}</p>
                                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {teamMembers[0].tech.map((tech, index) => (
                                    <span 
                                      key={index}
                                      className="px-3 py-1 bg-gray-800/50 text-cyan-300 text-sm rounded-full border border-cyan-500/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                
                                {/* Quote */}
                                <div className="relative p-4 bg-gray-900/30 rounded-xl border-l-4 border-cyan-500/50">
                                  <p className="text-gray-300 italic">
                                    "This project represents months of dedication, learning, and problem-solving. 
                                    Every line of code, every design decision, and every feature was crafted 
                                    with care and attention to detail."
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Development Philosophy */}
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              title: "Clean Code",
                              description: "Focus on maintainable, readable, and efficient code",
                              icon: "📝"
                            },
                            {
                              title: "User First",
                              description: "Design decisions centered around user experience",
                              icon: "👤"
                            },
                            {
                              title: "Continuous Learning",
                              description: "Embracing new technologies and best practices",
                              icon: "🎓"
                            }
                          ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center">
                              <div className="text-4xl mb-4">{item.icon}</div>
                              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'tech' && (
                    <motion.div
                      key="tech"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {/* Stats */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center"
                          >
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                              {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Technology Stack */}
                      <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 mb-8">
                        <h3 className="text-xl font-bold text-white mb-6">Technology Stack</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                          {technologies.map((tech, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className={`${tech.color} backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 text-center hover:border-gray-700/50 transition-all duration-300`}
                            >
                              <div className="text-2xl mb-2">{tech.icon}</div>
                              <div className="text-sm text-gray-300">{tech.name}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Timeline */}
                      <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Development Timeline</h3>
                        <div className="space-y-4">
                          {[
                            { phase: "Planning", duration: "2 weeks", description: "Architecture & Design" },
                            { phase: "Frontend", duration: "3 weeks", description: "React & UI Components" },
                            { phase: "Backend", duration: "2 weeks", description: "API & Database" },
                            { phase: "Integration", duration: "1 week", description: "Testing & Deployment" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 group cursor-pointer">
                              <div className="w-24 flex-shrink-0">
                                <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-center">
                                  <span className="text-cyan-300 text-sm font-medium">{item.duration}</span>
                                </div>
                              </div>
                              <div className="flex-1 pb-4 border-b border-gray-800/50 group-hover:border-gray-700/50 transition-colors duration-300">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-white font-medium">{item.phase}</h4>
                                  <FaChevronRight className="text-gray-500 group-hover:text-cyan-300 transition-colors duration-300" />
                                </div>
                                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 border-t border-gray-800/50 bg-black/30 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                      Built with passion and dedication by a single developer
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      This project demonstrates the power of focused effort and modern web technologies
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-colors duration-200">
                      View Source Code
                    </button>
                  </div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-4">
                  © {new Date().getFullYear()} Gemini AI. A solo developer project. Made with ❤️ and ☕
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutPage;