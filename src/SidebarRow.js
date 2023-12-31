import React from 'react';
import "./sidebarRow.css";


function SidebarRow({ selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="siderbarRow__icon"/>
            <h2 className='sidebarRow__title'>{title}</h2>
        </div>
    );
}

export default SidebarRow;