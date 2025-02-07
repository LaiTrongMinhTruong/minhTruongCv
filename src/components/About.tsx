import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import ServiceChild from "./ServiceChild";

const About = () => {
  return (
    <div className="absolute left-96 right-0 bg-white rounded-2xl overflow-y-scroll p-4">
      <h3 className="my-4 font-medium text-xl">
        <span className="text-green-500">About</span>
        <span className="text-gray-500"> Me</span>
      </h3>
      <div className="flex gap-4 flex-row">
        <p className="text-gray-500 font-light text-md w-2/3">
          I am a passionate and detail-oriented software developer with a strong
          foundation in programming and problem-solving. With experience in
          developing efficient and scalable applications, I thrive in dynamic
          environments where I can leverage my technical skills to deliver
          innovative solutions.
        </p>
        <ul className="w-1/3">
          <li className="flex flex-row gap-4 justify-between my-1 border-b">
            <p className="bg-green-600 text-white font-medium px-1 text-sm">Age</p>
            <p className="text-gray font-light text-md">22</p>
          </li>
          <li className="flex flex-row gap-4 justify-between my-1 border-b">
            <p className="bg-green-600 text-white font-medium px-1 text-sm">
              Residence
            </p>
            <p className="text-gray font-light text-md">VietNam</p>
          </li>
          <li className="flex flex-row gap-4 justify-between my-1 border-b">
            <p className="bg-green-600 text-white font-medium px-1 text-sm">
              Freelance
            </p>
            <p className="text-gray font-light text-md">Avail</p>
          </li>
          <li className="flex flex-row gap-4 justify-between my-1 border-b">
            <p className="bg-green-600 text-white font-medium px-1 text-sm">
              Address
            </p>
            <p className="text-gray font-light text-md">HCM City</p>
          </li>
        </ul>
      </div>
      <h3 className="my-4 font-medium text-xl">
        <span className="text-green-500">My</span>
        <span className="text-gray-500"> Services</span>
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
