
import React from 'react'
import '../../../styles/sidebarRow.css';

function SidebarRow({ ImageLink, title, dropdown, avatar }) {
    return (
        <div className={`sidebarRow`}>
            <img src={ImageLink} alt="" className={`sidebarRow__icon ${avatar && "avatar"} ${dropdown && 'vanish'}`} />
            <div className={`dropdownDiv ${dropdown && "display"}`}>
                <i className={`dropdown ${dropdown && "display"}`} />
            </div>
            <h2 className={`sidebarRow__title`}><b>{title}</b></h2>
        </div>
    )
}

export default SidebarRow