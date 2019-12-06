import React from 'react';


const Skills = React.forwardRef((props, ref) => {
    /*String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }*/

    const imageFiles = {
        Language: [{java: '중'}, {c: '하'}, {cpp: '하'}],
        Front: [{html: '중'}, {css: '하'}, {js: '중'}, {jquery: '중'}, {jsp: '하'}, {react: '하'}],
        DB: [{oracle: '중'}],
        OS: [{windows: '중'}, {linux: '하'}],
        VCS: [{git: '-'}, {svn: '-'}]
    }

    return (
        <section className="Skills" ref={ref}>
            <div className="title hide">
                <p>Skills</p>
            </div>
            <div className="desc">
                {Object.keys(imageFiles).map((key, i) =>
                    <div className="panel" key={i} >
                        <div className="panel-heading">
                            <p>{key}</p>
                        </div>
                        <div className="panel-body">
                            {imageFiles[key].map((item, i) =>
                                <div key={i} className="item" style={{backgroundImage: `url(${props.prefix}/images/icon-${Object.keys(item)}.png)`}}>
                                    <div className="label">
                                        <p>{Object.keys(item)}</p>
                                        <p>{Object.values(item)}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
});

export default Skills;