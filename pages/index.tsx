import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Smallcard from '../components/Smallcard';
import { CardProps } from './store';

export default function Home({exploreData}: CardProps) {
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
            <Smallcard
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
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
