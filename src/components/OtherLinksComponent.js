import React from 'react';
import '../cssfiles/otherlinks.css';


const OtherLinksComponent = ({pathlinkone, pathlinktwo, pathlinkthree, pathlinkfour, heading, linkone, linktwo, linkthree, linkfour}) => {
  return (
    <div className='other-links'>
        <h2>{heading}</h2>
        <ul className='sublinks'>
            <li><a href={pathlinkone} target='_blank' rel="noreferrer">{linkone}</a></li>
            <li><a href={pathlinktwo} target='_blank' rel="noreferrer">{linktwo}</a></li>
            <li><a href={pathlinkthree} target='_blank' rel="noreferrer">{linkthree}</a></li>
            <li><a href={pathlinkfour} target='_blank' rel="noreferrer">{linkfour}</a></li>
        </ul>
    </div>
  )
}

export default OtherLinksComponent