import Head from 'next/head'
import Layout, { siteTile } from '../components/layout'
import styles from '../styles/Home.module.css'

//Widgets
import Sessions from '../components/widgets/sessions'

export async function getServerSideProps() {
  const [lastResultRes, nextRaceRes] = await Promise.all([
    fetch('https://ergast.com/api/f1/current/last/results.json'), 
    fetch('http://ergast.com/api/f1/current/next/races.json')
  ]);
  const [lastResult, nextRace] = await Promise.all([
    lastResultRes.json(), 
    nextRaceRes.json()
  ]);
  return { props: { lastResult, nextRace } };
}

export default function Home({ lastResult, nextRace }) {
  const nextRaceData = nextRace['MRData']['RaceTable']['Races'][0]
  
  return (
    <Layout>
      <Head>
        <title>{siteTile}</title>
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 col-xl-3'><Sessions data={nextRaceData}/></div>
        </div>  
      </div>
    </Layout>
  )
}
