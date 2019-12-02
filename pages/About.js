import React from 'react';

const About = React.forwardRef((props, ref) => {


    return (
        <section className="About" ref={ref}>
            <div className="desc {/*hide*/}">
                <h1>abcde</h1>
                <section className="desc-right">
                    <p>aaa<br/>
                        aaa<br/>
                        aaa<br/>
                    </p>
                    <b>bbb</b>bbb<br/>
                    <p>ccc<br/>
                        ccc<b>ddd</b>eee
                    </p>
                </section>
            </div>
            <div className="title {/*hide*/}">
                <p>About</p>
            </div>
        </section>
    )
});


export default About;