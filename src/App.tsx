import React, { useState, useEffect } from 'react';
import {Toastify, toastAction} from "./Toastify/Toastify"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './_styles/animations.css';
import './_styles/variables.css';
import './_styles/main.css';

import Pic from "./_data/pic.png"
import Settings from "./Settings/Settings"
import Dockbar from "./Dockbar/Dockbar"
import Searchbar from "./Searchbar/Searchbar"
import { welcome } from './_data/data'

type colors = {
	[key:string]:string
	'bg-color':string,
	'default-color':string,
	'accent-color':string,
	'accent-color2':string,
}
const defaultColors:colors = {
	'bg-color': "rgba(46,46,46,255)",
	'default-color': "rgba(230,230,230,255)",
	'accent-color': "rgba(50,200,150,.3)",
	'accent-color2': "rgba(200, 50, 50, 0.3)",
}

function App() {
	const [time, setTime] = useState(new Date())
	let tick = () => {
		setTime(new Date())
	}
	useEffect(() => {
		setInterval(
			() => tick(),
			1000
		  );
	}, [])

	//Prepare colors
	let root = document.documentElement;
	Object.keys(defaultColors).forEach(key => {
		let c = localStorage.getItem(key)
		if (c) {
			root.style.setProperty("--"+key, c)
		}
	});

	let handleColorChange = (key:string, color:string) => {
		root.style.setProperty("--"+key, color)
		localStorage.setItem(key, color)
		toastAction(key+' changed to '+color)
	}
	
	return (
		<>
			<Toastify />

			<div className="settings">
				<Settings handleColorChange={handleColorChange} />
			</div>
			<div className="main-wrapper">
				<div>
					<div className="pic-cover" />
					<img src={Pic} alt="" onClick={()=>toastAction("test")}/>
					<div className="text">
						<h2>{welcome}</h2>
					</div>
					<Dockbar />
					<div className="time">
						<h2>{time.toLocaleTimeString("de-De").slice(0, 5)}</h2>
					</div>
				</div>
				<Searchbar />
			</div>
		</>
	);
}

export default App;