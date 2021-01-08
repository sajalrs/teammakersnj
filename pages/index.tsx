import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";
import {TextPosition} from "../components/ImageCard"
const IndexPage = () => (
  <Layout title="Team Makers of North Jersey" isNavbarTransparent={true}>
      <ImageCard textPosition={TextPosition.BottomCenter} imgSrc="/TEAM-MAKERS-PHOTO-2-1.jpg" title="AFTER SCHOOL PROGRAMS" subtitle="Active, Fun and Unique!"/>

    

        
  </Layout>
);

export default IndexPage;
