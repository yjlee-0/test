import React from "react";

interface ServerSideSampleProps {
  user: {
    name: string;
  };
}

export default function ServerSideSample({ user }: ServerSideSampleProps) {
  return (
    <div className="p-4 text-blue-700">
      user.name: <strong>{user?.name}</strong>
    </div>
  )
}

export async function getServerSideProps() {
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