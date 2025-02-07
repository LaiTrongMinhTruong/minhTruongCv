import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import ServiceChild from "./ServiceChild";

const About = () => {
  return (
    <div className="absolute left-96 right-0  bg-white rounded-2xl overflow-scroll">
      <h3>
        <span>About</span>
        <span>Me</span>
      </h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero
          qui quaerat sit quasi, inventore deleniti dignissimos laboriosam. Eos
          numquam possimus cupiditate aut rerum consectetur libero adipisci
          tempore explicabo tempora.
        </p>
        <ul>
          <li>
            <p>Age</p>
            <p>22</p>
          </li>
          <li>
            <p>Residence</p>
            <p>VietNam</p>
          </li>
          <li>
            <p>Freelance</p>
            <p>Avail</p>
          </li>
          <li>
            <p>Address</p>
            <p>HCM City</p>
          </li>
        </ul>
      </div>
      <h3>
        <span>My</span>
        <span>Services</span>
      </h3>
      <ServiceChild
        title="Web Design"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero qui quaerat sit quasi, inventore deleniti dignissimos laboriosam."
      >
        <div>Web Design Icon</div>
      </ServiceChild>
      <ServiceChild
        title="Web Fullstack"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero qui quaerat sit quasi, inventore deleniti dignissimos laboriosam."
      >
        <div>Web Coding Icon</div>
      </ServiceChild>
      <h3>
        <span>My</span>
        <span>Archive</span>
      </h3>
      <ul>
        <li>
          <WebStoriesIcon />
          <p>5+ Web project</p>
        </li>
        <li>
          <FmdGoodIcon />
          <p>Travel for 2 countries</p>
        </li>
        <li>
          <AutoStoriesIcon />
          <p>700+ Toeic point</p>
        </li>
        <li>
          <EmojiEventsIcon />
          <p>5+ Awards won</p>
        </li>
      </ul>
      <h3>Quote</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
          commodi est voluptatum adipisci, nulla odio dignissimos error amet
          facilis aperiam neque corporis repellendus asperiores odit illo ullam
          eaque sapiente laboriosam!
        </p>
        <div>avt</div>
        <p>Minh Truong</p>
        <p>Description</p>
      </div>
    </div>
  );
};

export default About;
