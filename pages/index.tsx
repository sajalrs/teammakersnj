import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Team Makers of North Jersey">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div style={{height: "1000px"}}></div>
    </p>
  </Layout>
)

export default IndexPage
