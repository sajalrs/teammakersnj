import Link from "next/link";
import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";

const IndexPage = () => (
  <Layout title="Team Makers of North Jersey" isNavbarTransparent={true}>
      <ImageCard/>
      <div style={{ height: "1000px" }}></div>
    
  </Layout>
);

export default IndexPage;
