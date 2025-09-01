import { GetStaticProps } from "next";

interface ProfileInfoProps {
  user: {
    name?: any;
  };
}

export default function ProfileInfo({ user }: ProfileInfoProps) {
  return (
    <div>api 결과값 노출 : {user.name}</div>
  )
}

export const getStaticProps: GetStaticProps<ProfileInfoProps> = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
    const user = data.user;
    return {
      props: {
        user,
      }
    }
  }
  catch (error) {
    return {
      notFound: true,
    }
  }
}