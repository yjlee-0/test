import { GetStaticProps } from "next";

interface StaticSampleProps {
  user: {
    name: string;
  };
}

export default function StaticSample({ user }: StaticSampleProps) {
  return (
    <div className="p-4 text-green-700">
      user.name: <strong>{user?.name}</strong>
    </div>
  )
}

export const getStaticProps: GetStaticProps<StaticSampleProps> = async () => {

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
  finally {
  }
}