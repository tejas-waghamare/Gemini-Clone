import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

   const chats = useSelector(state => state.chats.value)

   return (
      <div className='bg-gray-200 w-1/5 overflow-y-scroll p-5'>
         <div className=''>
            <Link to="/new-chat">
               <div className='hover:bg-gray-300 cursor-pointer text-2xl p-2 font-bold'>New Chat </div>
            </Link>
            {
               chats.map(c => (
                  <Link to={`${c._id}`} key={c._id}>
                     <div className='hover:bg-gray-300 cursor-pointer p-2'>
                        {c.name}
                     </div>
                  </Link>
               ))
            }
         </div>
      </div>
   )
}

export default Sidebar