import MyLayout from './MyLayout';
//import Link from 'next/link';
import "../styles/index.scss"

/*function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ]
}

const PostLink = ({post}) => (
    <li key={post.id}>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
    </li>
)*/

export default function Index() {
    return (
        <MyLayout>
            <h1>My Blog</h1>
        </MyLayout>
    )
};