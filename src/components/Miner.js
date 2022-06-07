import React, { useState , useEffect} from 'react'
import './Miner.css';
import axios from 'axios';

const client = axios.create({
    baseURL: "https://webminepool.com/api/PK_2PGLhDlGlFRnh4ZqokENE" 
  });

const Miner = () => {
    const [balance, setBalance] = useState({});
    const [wmc, setWmc] = useState({});
    const [amount, setAmount] = useState(10000);
    useEffect(() => {
        async function getBalance() {
            const response = await client.get("/balance");
            setBalance(response.data)
        }
        getBalance();
      }, []);
      useEffect(() => {
        async function convertWmc() {
            const response = await client.get(`/wmc_rate/${amount}`);
            setWmc(response.data)
        }
        convertWmc();
      }, []);

  return (
    <div>
        <div id="wmp-container"
        wmp-site-key="SK_MQcAsOtSxt6JoLG5a4G3y"
        wmp-username="<username>"
        wmp-threads="2"
        wmp-throttle="0.1"
        wmp-autostart="false"
    >
        </div>
        <h3>balance : {balance.balance}</h3>
        <h3>Conversion : {wmc.satoshi}</h3>
    </div>
  )
}

export default Miner