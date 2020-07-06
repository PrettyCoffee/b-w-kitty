import React, {useState, useEffect} from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {toastAction} from "../Toastify/Toastify"
import Colorpicker from "./Colorpicker"
import "../_styles/settings.css"

import { searchEngines } from "../_data/data"

type props = {
    handleColorChange: (key: string, color: string) => void,
}

export function Settings(props:props){
    const [showSettings, setShowSettings] = useState(false)
    const [currSearchEngine, setCurrSearchEngine] = useState(searchEngines[0].url)

    useEffect(()=>{
        let lsEngine = localStorage.getItem("search-engine")
        if (lsEngine !== null) {
            setCurrSearchEngine(lsEngine)
        }
    }, [])

    let handleEngineChange = (url:string) => {
        setCurrSearchEngine(url)
        localStorage.setItem("search-engine", url)
        toastAction("Changed searchengine to "+url)
    }
    
    let engines:JSX.Element[] = []
    searchEngines.forEach(engine => {
        engines.push(
            <div>
                <label>
                    <input 
                        type="radio" 
                        value={engine.url} 
                        checked={currSearchEngine === engine.url} 
                        onChange={(e)=>handleEngineChange(e.currentTarget.value)} 
                    />
                    {engine.label}
                </label>
            </div>
        )
    });

    return(
        <>
            <FontAwesomeIcon icon={fas["faPaintRoller"]} onClick={()=>setShowSettings(!showSettings)}/>
            { (showSettings) 
            ? <div>
                <FontAwesomeIcon icon={fas["faTimes"]} onClick={()=>setShowSettings(!showSettings)}/>
                <div className="settings-cover" onClick={()=>setShowSettings(!showSettings)}/>
                <div className="settings-section">
                    <Colorpicker
                        handleColorChange={props.handleColorChange}
                        var="bg-color"
                        />
                    <Colorpicker
                        handleColorChange={props.handleColorChange}
                        var="default-color"
                        />
                    <Colorpicker
                        handleColorChange={props.handleColorChange}
                        var="accent-color"
                        />
                    <Colorpicker
                        handleColorChange={props.handleColorChange}
                        var="accent-color2"
                        />
                </div>
                <div className="settings-section">
                    {engines}
                </div>
            </div>
            : ""
            }
        </>
    )
}
export default Settings