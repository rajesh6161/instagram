import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Home({ data: { results } }) {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed suggestions={results} />
      <Modal />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://randomuser.me/api/?results=20');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
