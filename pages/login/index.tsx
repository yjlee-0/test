import React, { useState } from "react";

type User = {
  id?: string | '';
  accessToken?: string | undefined;
  username: string;
};

type Props = {
  user: User;
  setUser: (User: User) => void;
};

const Login = ({ user, setUser }: Props) => {
  const [inputUserId, setInputUserId] = useState('');
  const [inputUserPwd, setInputUserPwd] = useState('');

  const chkLogin = (userId: string, userPwd: string) => {
    if (!userId || !userPwd) return setUser({ ...user, id: '', accessToken: '', username: '입력 필요' });

    if (userId === "test" && userPwd === "1234")
      setUser({ ...user, id: 'test', accessToken: 'accessToken', username: '이유진' });
    else
      setUser({ ...user, id: '', accessToken: 'fail', username: '틀림' });
  };


  return (
    <>
      <div className="w-[200px]">
        <input type="text" value={inputUserId} onChange={(e) => setInputUserId(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="id"></input>
        <input type="text" value={inputUserPwd} onChange={(e) => setInputUserPwd(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="password"></input>

      </div>
      <div className="pt-[40px]">
        <button onClick={() => chkLogin(inputUserId, inputUserPwd)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
          로그인
        </button>
      </div>
      {!!user && (<div className="pt-[40px]">
        <p>id : {user.id}</p>
        <p>accessToken : {user.accessToken}</p>
        <p>username : {user.username}</p>
      </div>)}
    </>
  )
}

export default Login
