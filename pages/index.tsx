import Link from "next/link";
import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";
import {TextPosition} from "../components/ImageCard"
const IndexPage = () => (
  <Layout title="Team Makers of North Jersey" isNavbarTransparent={true}>
      <ImageCard textPosition={TextPosition.BottomCenter} imgSrc="/TEAM-MAKERS-PHOTO-2-1.jpg" title="CAMP ADVENTURES" subtitle="Bring Teamwork to you Camp"/>
      <div style={{ height: "1000px" }}></div>
    

        
  </Layout>
);

export default IndexPage;
