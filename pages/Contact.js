import React from 'react';

const Contact = React.forwardRef((props, ref) => {
    return (
        <section className="Contact" ref={ref}>
            <div className="title">
                <p>Contact</p>
            </div>
            <div className="desc">
                <p>E-mail</p>
                <span id="clipboard-email">sehoane@gmail.com</span>
                <input className="clipboard" type="button" title="클립보드에 복사"/>
                <p>Github</p>
                <span>powercode14</span>
                <input className="github" type="button" title="Github로 이동"
                       onClick={() => window.open('https://github.com/powercode14?utf8=%E2%9C%93&tab=repositories&q=&type=public&language=')}/>
                <p>Blog</p><a href="https://powercode.tistory.com" target="_blank">https://powercode.tistory.com</a>
                <input className="blog" type="button" title="Tistory 블로그로 이동"
                       onClick={() => window.open('https://powercode.tistory.com/')}/>
            </div>
            <div className="end">
                <p>Thank you</p>
            </div>
        </section>
    )
});

export default Contact;