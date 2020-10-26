import React from 'react'
import '../../../styles/sidebar2row.css';
import { Avatar } from '@material-ui/core';

function Sidebar2Row({ ImageURL, title }) {
    return (
        <div className="sidebar2Row">
            <Avatar className="avatar" src={ImageURL} alt={title} />
            <h1><b>{title}</b></h1>
        </div>
    )
}

export default Sidebar2Row