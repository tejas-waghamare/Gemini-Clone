import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineChatAlt2, HiOutlinePlusCircle, HiMenu, HiX, HiTrash } from "react-icons/hi";
import { removeChat } from "../features/chatSlice"; // Replace with actual action if different

const Sidebar = () => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chats.value);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(removeChat(id));
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-black text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-black text-white w-64
          transform transition-transform duration-300 ease-in-out
          shadow-lg border-r border-gray-800 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex-shrink-0
          flex flex-col p-6
        `}
      >
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide select-none">
          ReactBot
        </h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search chats..."
          className="mb-4 p-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <nav className="flex flex-col space-y-3 overflow-y-auto">
          <Link
            to="/new-chat"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition ${
              location.pathname === "/new-chat" ? "bg-green-700" : ""
            }`}
          >
            <HiOutlinePlusCircle size={24} />
            New Chat
          </Link>

          <div className="mt-4 flex-grow overflow-y-auto space-y-2">
            {filteredChats.length === 0 ? (
              <p className="px-4 py-3 text-gray-400 text-sm">No chats available</p>
            ) : (
              filteredChats.map(chat => (
                <div
                  key={chat._id}
                  className="group flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <Link
                    to={`/${chat._id}`}
                    className={`flex items-center gap-3 truncate w-full ${
                      location.pathname === `/${chat._id}` ? "text-white" : "text-gray-300"
                    }`}
                  >
                    <HiOutlineChatAlt2 size={20} />
                    <span className="truncate">{chat.name}</span>
                  </Link>
                  {/* Delete Icon on Hover */}
                  <button
                    onClick={() => handleDelete(chat._id)}
                    className="text-red-500 opacity-0 group-hover:opacity-100 transition"
                    title="Delete Chat"
                  >
                    <HiTrash size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;






// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {

//    const chats = useSelector(state => state.chats.value)

//    return (
//       <div className='bg-black w-1/5 overflow-y-scroll p-5 text-white'>
//          <div className=''>
//             <Link to="/new-chat">
//                <div className='hover:bg-gray-700 cursor-pointer rounded-2xl text-2xl p-2 font-bold'>New Chat </div>
//             </Link>
//             {
//                chats.map(c => (
//                   <Link to={`${c._id}`} key={c._id}>
//                      <div className='hover:bg-gray-700 rounded-2xl cursor-pointer p-2'>
//                         {c.name}
//                      </div>
//                   </Link>
//                ))
//             }
//          </div>
//       </div>
//    )
// }

// export default Sidebar