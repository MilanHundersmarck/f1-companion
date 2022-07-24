import Layout, { siteTile } from '../components/layout'
import Link from 'next/link'

export async function getServerSideProps() {
    const [circuitsRes] = await Promise.all([
      fetch('http://ergast.com/api/f1/current/circuits.json')
    ]);
    const [allCircuits] = await Promise.all([
        circuitsRes.json(), 
    ]);
    return { props: { allCircuits } };
  }

export default function Circuits({ allCircuits }) {
    const circuits = allCircuits['MRData']['CircuitTable']['Circuits']
    console.log(circuits)
    return (
      <Layout>
        {circuits.map((item) => <div className='text-light' key={item.circuitId}>
            <Link href={`/circuits/${item.circuitId}`}>{item.circuitName}</Link>
        </div>)}
      </Layout>
    )
  }