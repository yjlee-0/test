
import { useUser } from '../../context/UserContext';

const MypageUserInfoComponent = () => {
  const { user } = useUser();

  return (<div className='border border-gray-300 rounded focus:outline-none focus:ring-2 h-[80px]'>
    {user.username}
  </div>)
}

export default MypageUserInfoComponent