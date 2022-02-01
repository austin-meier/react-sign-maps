import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

interface CardProps {
  exploreData: Array<ExploreData>;
}

export default function Home({ exploreData }: CardProps) {
  return (
    <div className="">
      <Head>
        <title>Maps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from the server - API endpoints */}
          {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData: CardProps = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    }
  }
}
