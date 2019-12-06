import MyLayout from './MyLayout';
import "../styles/index.scss"

export default function Index() {
    const prefix = process.env.NODE_ENV === 'production' ? 'https://powercode14.github.io/portfolio_react' : '';

    return (
        <MyLayout prefix={prefix} />
    )
};