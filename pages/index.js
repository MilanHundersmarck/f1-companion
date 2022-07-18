import Head from 'next/head'
import Layout, { siteTile } from '../components/layout'
import styles from '../styles/Home.module.css'

//Widgets
import Sessions from '../components/widgets/sessions'

export async function getServerSideProps() {
    const res = await fetch('https://ergast.com/api/f1/current/last/results.json')
    const data = await res.json()
    return {
        props: {
            data
        }
      }
}

export default function Home({ data }) {
  const APIdata = data['MRData']['RaceTable']['Races'][0];
  const results = APIdata['Results'];
  return (
    <Layout>
      <Head>
        <title>{siteTile}</title>
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3'><Sessions/></div>
        </div>  
      </div>
      {/* <div>
        {results.map(result => (
          <div className={styles.leaderboarditem} key={result['number']}>
            <h2>{result['position']}</h2>
            <h3>{result['Driver']['code']}</h3>
            <h3>{result['Driver']['givenName']} {result['Driver']['familyName']}</h3>
            <h4>{result['status']}</h4>
          </div>
        ))}
      </div> */}

    </Layout>
  )
}
