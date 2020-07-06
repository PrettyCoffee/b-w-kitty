import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import "../_styles/dockbar.css"

import { weblinks } from '../_data/data'

export function Settings(){
    let icons:JSX.Element[] = []
    weblinks.forEach(weblink => {
        icons.push(
            <a href={weblink.url}>
                <FontAwesomeIcon icon={
                    (fas[weblink.icon] !== undefined)
                    ? fas[weblink.icon] 
                    : fab[weblink.icon]
                } />
            </a>
        )
    });


    return(
        <div className="dockbar">
            {icons}
        </div>
    )
}
export default Settings