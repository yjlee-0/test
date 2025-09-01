import { GetStaticProps } from "next";

interface Props {
  name: string;
}

export default function Test({ name }: Props) {
  return { name };
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {

    const response = await fetch('/api/hello');
    const name = await response.json();

    return {
      props: {
        name,
      }
    }
  }
  catch (error) {
    return {
      notFound: true,
    }
  }
}