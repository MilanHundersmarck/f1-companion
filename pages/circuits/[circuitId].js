import Layout, { siteTile } from '../../components/layout'
import Image from 'next/image';
import { useState } from 'react';
const axios = require("axios");

export default function Circuit({ circuitData }) {
    const [source, setSource] = useState(`/images/circuits/${circuitData.id}.png`)

    return <Layout>
        <div className='container d-flex flex-row'>
            <Image src={source} onError={() => setSource('/images/placeholder.png')} alt={circuitData.name} height={144} width={144}/>
            <div className='my-auto'>
                <div className='h2 text-light'>{circuitData.name}</div>
                <div className='h3 text-light'>{circuitData.locality}, {circuitData.country}</div>
            </div>
        </div>
    </Layout>
}

export async function getStaticPaths() {
    const url = `http://ergast.com/api/f1/current/circuits.json`;
    let { data } = await axios.get(url);
    data = data['MRData']['CircuitTable']['Circuits'];

    // const paths = data.map((e) => ({
    //     params: {circuitId: e.circuitId}
    // }))
    let paths = [];
    data.forEach(element => {
        paths.push(`/circuits/${element.circuitId}`)
    });

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const url = `http://ergast.com/api/f1/current/circuits/${params.circuitId}.json`;
    let { data } = await axios.get(url);
    data = data['MRData']['CircuitTable']['Circuits'][0];
    const circuitData = {id: data.circuitId, name: data.circuitName, locality: data.Location.locality, country: data.Location.country};
    return {
        props: {
            circuitData,
        },
    };
}
