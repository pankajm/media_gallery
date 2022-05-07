import Dashboard from "../components/dashboard";
import { getMedia } from "../lib/api";

export default function Home({ data }) {
  return <Dashboard mediaData={data} />;
}

export async function getServerSideProps() {
  const data = await getMedia();
  return {
    props: {
      data,
    },
  };
}
