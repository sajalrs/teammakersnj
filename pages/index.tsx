import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";
import { TextPosition } from "../components/ImageCard";
import indexPageStyles from "./indexPage.module.css";
import EventCard from "../components/EventCard";

const IndexPage = () => (
  <Layout title="Team Makers of North Jersey" isNavbarTransparent={true}>
    <ImageCard
      textPosition={TextPosition.BottomCenter}
      imgSrc="/DSC00736-Med.jpg"
      title="AFTER SCHOOL PROGRAMS"
      subtitle="Active, Fun and Unique!"
    />
    <div className={indexPageStyles["events"]}>
      <div className={indexPageStyles["event-cards"]}>
        <EventCard
          title={"AFTER-SCHOOL PROGRAMS"}
          icon={"fas fa-history"}
          description={
            "Team Makers after school programs are designed to teach children to think out of the box, solve problems, gain new perspectives, while playing games with other children. Our fun, interesting and active games have children working together to solve problems and finish games while working cooperatively, learning respect for one another, and gaining leadership skills."
          }
        />
        <EventCard
          title={"BIRTHDAY PARTIES"}
          icon={"fas fa-exclamation"}
          description={
            "Did you ever wish you could have a birthday party for your child that was fun, exciting, active, and even educational?      You provide the kids, we provide the fun. Team Makers birthday parties bring Team Makers games and instruction to children ages 4-13."
          }
        />
        <EventCard
          title={"CAMPS"}
          icon={"fas fa-sun"}
          description={
            "Team Makers’ Camp Adventures are simply AMAZING! Your campers and staff will love the variety of activities, challenges, games and more only offered by Team Makers. As in all Team Makers experiences, teams will work and play together and -without even knowing it- learn what leadership, sportsmanship and team spirit are all about."
          }
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
