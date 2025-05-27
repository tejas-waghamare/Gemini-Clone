import { FaUser } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { logout } from "../features/authSlice";

const Navbar = () => {

  const { chatId } = useParams();
  const chats = useSelector(state => state.chats.value)
  const chat = chats.find(c => c.id == chatId)
  const loggedInUser = useSelector(state => state.auth.user);

  const disoatch = useDispatch();
  const Navigate = useNavigate()
  const logoutUser = () => {
    disoatch(logout);
    Navigate('/login')

  }

  return (
    <nav className="flex justify-between items-center text-2xl bg-black p-2">
      <span className="ml-10 font-bold font-serif text-red-300 text-4xl underline decoration-pink-400">ReactBot</span>

      {/* <div  className="text-white font-mono"> {chat?.name} </div> */}
      {
        loggedInUser ?
        <div className="text-3xl flex bg-amber-50 p-1 rounded-lg">
          <FaUser />
          <button type="button" onClick={logoutUser} className="cursor-pointer mx-3">Logout</button>
        </div>
        : ''
      }
    </nav>
  )
}

export default Navbar