import {
    Routes,
    Route,
    } from "react-router-dom";
import React from 'react'
import Login from "./Login";
import User from "./User";
import Miner from "./Miner";

const Routing = () => {
  return (
    <>
		<Routes>
			
			<Route path="/miner" element={<Miner/>} />
    		<Route path="/" element={<Login/>} />
			<Route path="/user" element={<User/>} />

		</Routes>
	</>
  )
}

export default Routing