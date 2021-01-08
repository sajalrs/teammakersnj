import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";
import { TextPosition } from "../components/ImageCard";
import EventCard from "../components/EventCard";

const IndexPage = () => (
  <Layout title="Team Makers of North Jersey" isNavbarTransparent={true}>
    <ImageCard
      textPosition={TextPosition.BottomCenter}
      imgSrc="/TEAM-MAKERS-PHOTO-2-1.jpg"
      title="AFTER SCHOOL PROGRAMS"
      subtitle="Active, Fun and Unique!"
    />
    <EventCard 
      title={"AFTER-SCHOOL PROGRAMS"}
      icon={"fas fa-history"}
      description={"Team Makers after school programs are designed to teach children to think out of the box, solve problems, gain new perspectives, while playing games with other children. Our fun, interesting and active games have children working together to solve problems and finish games while working cooperatively, learning respect for one another, and gaining leadership skills."}
      />
      </Layout>
);

export default IndexPage;
