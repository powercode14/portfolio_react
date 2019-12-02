import React from 'react';

const Main = React.forwardRef((props, ref) => {
    const txt = "Welcome to KSH's portfolio";
    const [word, setWord] = React.useState('');

    React.useEffect(() => {
        typing();
    }, []);

    function typing(){
        if(word.length <= txt.length){
            setWord(prev => txt.substring(0, prev.length + 1));
            setTimeout(() => typing(), 200);
        }
    }

    return (
        <section className="Main" ref={ref}>
            <h1>{word}</h1>
        </section>
    )
})

export default Main;

