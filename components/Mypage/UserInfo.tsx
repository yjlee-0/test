
import { setUser } from '../../context/UserContext';

const MypageUserInfoComponent = () => {
  const { user } = setUser();

  return (<div className='border border-gray-300 rounded focus:outline-none focus:ring-2 h-[80px]'>
    {user.username}
  </div>)
}

export default MypageUserInfoComponent