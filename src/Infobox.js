import axios from "axios";
import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import './Infobox.css'

const numeral = require('numeral');

export default function InfoBox() {
  const [total, setTotal] = useState('');
  const [recovered, setRecovered] = useState('');
  const [deaths, setDeaths] = useState('');
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://disease.sh/v3/covid-19/all',
    }).then(({
      data
    }) => {
      setTotal(data.cases)
      setRecovered(data.recovered)
      setDeaths(data.deaths)
    })
      .catch(err => console.log(err))
  }, []);

  return (<div className='info-box'>
    <InfoCard color='	#00688B' title='Total Cases' total={numeral(total).format("0,0")}  />
    <InfoCard  title='Recovered' color='#70DC70' total={numeral(recovered).format("0,0")} />
    <InfoCard title='Deaths' color='#FF030D' total={numeral(deaths).format("0,0")}/>
  </div>)
}