import Header from "./Header";
import Main from "./Main";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import React from 'react';

export default function MyLayout ({prefix}) {
    const refs = Array.from({length: 5}, () => React.useRef(null));

    return (
        <div className="All">
            <div className="Home">
                <Header refs={refs} />
                <Main ref={refs[0]} />
                <About ref={refs[1]}/>
                <Skills ref={refs[2]} prefix={prefix}/>
                <Projects ref={refs[3]} prefix={prefix}/>
                <Contact ref={refs[4]} prefix={prefix}/>
            </div>
        </div>
    )
}