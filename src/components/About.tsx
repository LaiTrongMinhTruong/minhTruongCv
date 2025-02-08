import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import { Avatar } from "@mui/material";
import ServiceChild from "./ServiceChild";

const About = () => {
  return (
    <div className="absolute left-1/3 right-0 bg-white rounded-2xl overflow-y-scroll p-4 h-full">
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
            <p className="bg-green-600 text-white font-medium px-1 text-sm">
              Age
            </p>
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
      <div className="flex gap-4 flex-row justify-evenly">
        <ServiceChild
          title="Web Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero qui quaerat sit quasi, inventore deleniti dignissimos laboriosam."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" r="14" fill="#193e63"></circle>
            <path
              fill="#add1ea"
              d="m10.777 22.742l-1.434-1.394l3.386-3.483l-3.383-3.448l1.428-1.4l4.751 4.842zm10.643-3.641l1.434-1.395l-3.386-3.482l3.383-3.448l-1.428-1.4l-4.751 4.842z"
            ></path>
          </svg>
        </ServiceChild>
        <ServiceChild
          title="Web Fullstack"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero qui quaerat sit quasi, inventore deleniti dignissimos laboriosam."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 32 32"
          >
            <path
              fill="#002bb5"
              d="M16.018 30A14 14 0 1 1 30 16.2A14 14 0 0 1 16.018 30"
            ></path>
            <path
              fill="#fff"
              d="M9.17 22.63c.026.061.046.124.077.183c2.215 4.206 7.738 4.616 10.756 2.454a6.017 6.017 0 0 0 1.731-8.583a16 16 0 0 0-1.318-1.731c-.881-1.067-1.755-2.14-2.636-3.207c-.366-.443-.767-.835-1.416-.683a1.393 1.393 0 0 0-.816 2.311c.888 1.106 1.819 2.177 2.7 3.286a3.87 3.87 0 0 1 .589 4.4a5.42 5.42 0 0 1-5 3.134A6.6 6.6 0 0 1 9.17 22.63"
            ></path>
            <path
              fill="#fff"
              d="M22.494 9.609c.08-.248-.066-.37-.141-.509A7.477 7.477 0 0 0 12.6 6.237c-3.3 1.63-5.1 5.352-2.637 9.147a57 57 0 0 0 4.135 5.12a1 1 0 0 0 .709.345a1.38 1.38 0 0 0 1.428-.765a1.25 1.25 0 0 0-.173-1.507c-.876-1.051-1.769-2.088-2.615-3.162a4.13 4.13 0 0 1 .323-5.771a6.05 6.05 0 0 1 6.214-1.514a5.2 5.2 0 0 1 2.51 1.479"
            ></path>
          </svg>
        </ServiceChild>
      </div>
      <h3 className="my-4 font-medium text-xl">
        <span className="text-green-500">My</span>
        <span className="text-gray-500"> Archive</span>
      </h3>
      <ul className="flex flex-row gap-4 justify-evenly">
        <li className="flex flex-col gap-2 items-center my-2">
          <div className="text-green-500">
            <WebStoriesIcon />
          </div>
          <p className="text-gray-500">5+ Web project</p>
        </li>
        <li className="flex flex-col gap-2 items-center my-2">
          <div className="text-green-500">
            <FmdGoodIcon />
          </div>
          <p className="text-gray-500">Travel for 2 countries</p>
        </li>
        <li className="flex flex-col gap-2 items-center my-2">
          <div className="text-green-500">
            <AutoStoriesIcon />
          </div>
          <p className="text-gray-500">700+ Toeic point</p>
        </li>
        <li className="flex flex-col gap-2 items-center my-2">
          <div className="text-green-500">
            <EmojiEventsIcon />
          </div>
          <p className="text-gray-500">5+ Awards won</p>
        </li>
      </ul>
      <h3 className="my-4 font-medium text-xl text-green-500">Quote</h3>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-gray-500 font-light text-md italic w-3/4 text-center">
          <span className="font-bold text-2xl">"</span>Code is poetry—every line
          tells a story, and every function solves a problem. I strive to write
          clean, efficient, and impactful code that makes a difference.
          <span className="font-bold text-2xl">"</span>
        </p>
        <Avatar alt="Lai Trong Minh Truong" src="/src/assets/avt.png" />
        <p className="font-bold text-lg italic">Lai Trong Minh Truong</p>
        <p className="font-light italic text-base text-gray-500">
          Web developer
        </p>
      </div>
    </div>
  );
};

export default About;
