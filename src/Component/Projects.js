import React from 'react';
import './Projects.css';

import ProjectBox from './ProjectBox';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

//import images from './'

import mustang from './Images/ProjectImages/mustang.jpeg';
import counter from './Images/ProjectImages/counter.jpeg';
import bookstore from './Images/ProjectImages/bookstore.jpeg';
import basiccalculator from './Images/ProjectImages/basiccalculator.jpeg';
import reactcalculator from './Images/ProjectImages/reactcalculator.jpeg';
import drummachine from './Images/ProjectImages/drummachine.jpeg';
import randomquote from './Images/ProjectImages/randomquote.jpeg';
import surveyform from './Images/ProjectImages/surveyform.jpeg';
import quoteapi from './Images/ProjectImages/quoteapi.jpeg';
import jamming from './Images/ProjectImages/jamming.jpeg';
import lawyer from './Images/ProjectImages/lawyer.jpeg';


class Projects extends React.Component {
    render() {
        return(
        <div className='project-container' id='project'>
            <Fade top>
            <p className='project-intro'><span>&#10077;</span>When we strive to become better than we are, everything around us becomes better too<span>&#10078;</span> - Paulo Coelho</p>
            </Fade>
            <div className="project">
                <Zoom>
                <ProjectBox
                    name="Mustang Testimonial"
                    details='HTML, CSS, JavaScript'
                    code='https://github.com/balintpipei/MustangTestimonial'
                    full='https://codepen.io/b-lint-pipei/full/oNWLmOe'
                    img={mustang}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Basic Counter"
                    details='HTML, CSS, JavaScript'
                    code='https://github.com/balintpipei/basicCounter'
                    full='https://codepen.io/b-lint-pipei/full/wvdWQYa'
                    img={counter}
                    />
                </Zoom>
                <Zoom>
               <ProjectBox
                    name="Book Store"
                    details='HTML, CSS, JavaScript'
                    code='https://github.com/balintpipei/BookStore'
                    full='https://codepen.io/b-lint-pipei/full/WNjGRdN'
                    img={bookstore}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Basic Calculator"
                    details='HTML, CSS, JavaScript'
                    code='https://codepen.io/b-lint-pipei/pen/rNmWwrM?editors=0110'
                    full='https://codepen.io/b-lint-pipei/full/rNmWwrM'
                    img={basiccalculator}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="React Calculator"
                    details='HTML, CSS, JavaScript, React'
                    code='https://codepen.io/b-lint-pipei/pen/YzZXoEd?editors=0010'
                    full='https://codepen.io/b-lint-pipei/full/YzZXoEd'
                    img={reactcalculator}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Chilled Drum Machine"
                    details='HTML, CSS, JavaScript'
                    code='https://codepen.io/b-lint-pipei/pen/abJbrpW'
                    full='https://codepen.io/b-lint-pipei/full/abJbrpW'
                    img={drummachine}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Random Quote Machine"
                    details='HTML, CSS, JavaScript'
                    code='https://codepen.io/b-lint-pipei/pen/qBrWaOa'
                    full='https://codepen.io/b-lint-pipei/full/qBrWaOa'
                    img={randomquote}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Survey Form"
                    details='HTML, CSS, JavaScript'
                    code='https://codepen.io/b-lint-pipei/pen/NWbGYMp'
                    full='https://codepen.io/b-lint-pipei/full/NWbGYMp'
                    img={surveyform}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Quote API"
                    details='HTML, CSS, JavaScript, API'
                    code='https://github.com/balintpipei/QuoteAPI'
                    full=''
                    img={quoteapi}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Jamming"
                    details='HTML, CSS, JavaScript, React, Spotify API, Node, Express'
                    code='https://github.com/balintpipei/Jamming'
                    full=''
                    img={jamming}
                    />
                </Zoom>
                <Zoom>
                <ProjectBox
                    name="Landing Page"
                    details='Wix.com'
                    code=''
                    full='https://balintpipei1120.wixsite.com/drkerekeszsolt?fbclid=IwAR3SD8Vmcg6ogbz-qR3ZNaIlNIY6go3i9zEH1LzrzH39cgqsF7_6lnuqsx8'
                    img={lawyer}
                    />
                </Zoom>
            </div>
        </div>
        )
    }
}

export default Projects;