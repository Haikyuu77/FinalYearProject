import {
    Routes,
    Route,
    } from "react-router-dom";
import React , {useState} from 'react'
import Login from "./Login";
import User from "./User";
import Miner from "./Miner";

const Routing = () => {
	const [token, setToken] = useState(false);
  return (
    <>
		<Routes>
			
    		<Route path="/" element={<Login authed = {token} setAuth = {setToken} />} />
			<Route path="/miner" element={<Miner/>} />
			<Route path="/user" element={<User/>} />

		</Routes>
	</>
  )
}

export default Routing