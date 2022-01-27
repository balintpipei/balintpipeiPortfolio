import React, {useEffect, useState} from "react";
import './ProjectBox.css';

function ProjectBox(props) {

    const [style, setStyle] = useState('ProjectBox');
    const [hide, setHide] = useState('projectbox-button-box')


    function changeBlur() {
            setStyle('blur');
            setHide('hide');
      }
      function changeBlurBack() {
          setStyle('ProjectBox');
          setHide('projectbox-button-box');
      }

    return(
<div>
    <div className='test' onMouseEnter={changeBlur} onMouseLeave={changeBlurBack}>
        <div className={style}>
            <div className='projectbox-img-box'>
                <img className='projectbox-img'src={props.img} alt='project img' />
            </div>
            <div className='projectbox-name-box'>
                <h3 className='projectbox-name'>{props.name}</h3>
            </div>
            <div className='projectbox-details-box'>
                <p className='details'>{props.details}</p>
            </div>
        </div>
        <div className={hide}>
            <div className='projectbox-button-parent'>
                <a href={props.code} target='_blank' ><button className='projectbox-button'>Code</button></a>
            </div>
            <div className='projectbox-button-parent'>
                <a href={props.full} target='_blank' ><button className='projectbox-button'>Full Page</button></a>
            </div>
        </div>
    </div>
</div>
    )
}
export default ProjectBox;