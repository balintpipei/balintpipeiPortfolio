import React from 'react';
import './AboutMe.css';
import timelinedata from "./timelinedata";
import Fade from 'react-reveal/Fade';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//import pdf document from
import balintpdf from './Resume/Balintcv.pdf';

//import images
import { ReactComponent as WorkIcon } from "./Images/ProjectImages/work.svg";
import { ReactComponent as SchoolIcon } from "./Images/ProjectImages/school.svg";


//Function AboutMe component
function AboutMe() {
    let iconStyle = { background: "rgb(102,102,102)" };
  
    return (
      <div className='about' id='about'>
          <Fade top>
        <h1 className="title">Resume</h1>
        </Fade>
        <p className='aboutme-intro'>Here is my resume. If you would like to download as pdf please <a href={balintpdf} target='_blank'>Click here</a>.</p>
        <VerticalTimeline>
          {timelinedata.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
  
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={iconStyle}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={'button'}
                    href={element.href} target="_blank"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    );
  }

export default AboutMe;