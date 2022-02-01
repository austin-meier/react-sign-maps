import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Smallcard from '../components/Smallcard';
import { CardProps } from './store';

const Home = ({exploreData}: CardProps) => {
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

          {/* Pull and show card data - API endpoint */}
          {exploreData?.map(({img, distance, location}) => (
            <Smallcard
              key={img} //Use a back-end key in prod
              img={img}
              location={location}
              distance={distance}
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

export default Home;
