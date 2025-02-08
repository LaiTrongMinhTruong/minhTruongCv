import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import FlagIcon from "@mui/icons-material/Flag";
import SchoolIcon from "@mui/icons-material/School";
import Slider from "@mui/material/Slider";
const Skill = () => {
  return (
    <div className="absolute left-96 right-0 bg-white rounded-2xl overflow-y-scroll p-4">
      <h3 className="my-4 font-medium text-xl text-green-500">Resume</h3>
      <div className="flex flex-row gap-4">
        <section className="flex flex-col gap-4 items-center">
          <div className="flex flex-row gap-4 text-green-500">
            <CardTravelIcon />
            <h2 className="font-medium text-lg tracking-wider text-gray-500">
              EXPERIENCE
            </h2>
          </div>

          <div className="flex flex-col gap-1 items-left w-4/5 border-2 border-green-500 rounded-2xl p-4">
            <h3 className="px-2 border border-green-500 font-light rounded-md w-fit text-sm">
              2013 – Present
            </h3>
            <p className="text-base font-medium tracking-wider">Art Director</p>
            <p className="font-light text-base tracking-wide text-gray-500">
              Facebook Inc.
            </p>
            <p className="text-base font-normal tracking-wide text-gray-700">
              Collaborate with creative and development teams on the execution
              of ideas.
            </p>
          </div>

          <div className="flex flex-col gap-1 items-left w-4/5 border-2 border-green-500 rounded-2xl p-4">
            <h3 className="px-2 border border-gray-500 font-light rounded-md w-fit text-sm">
              2011 – 2012
            </h3>
            <p className="text-base font-medium tracking-wider">
              Front-end Developer
            </p>
            <p className="font-light text-base tracking-wide text-gray-500">
              Google Inc.
            </p>
            <p className="text-base font-normal tracking-wide text-gray-700">
              Monitored technical aspects of the front-end delivery for several
              projects.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4 items-center">
          <div className="flex flex-row gap-4 text-green-500">
            <SchoolIcon />
            <h2 className="font-medium text-lg tracking-wider text-gray-500">
              EDUCATION
            </h2>
          </div>

          <div className="flex flex-col gap-1 items-left w-4/5 border-2 border-green-500 rounded-2xl p-4">
            <h3 className="px-2 border border-gray-500 font-light rounded-md w-fit text-sm">
              2006 – 2008
            </h3>
            <p className="text-base font-medium tracking-wider">
              Art University
            </p>
            <p className="font-light text-base tracking-wide text-gray-500">
              New York
            </p>
            <p className="text-base font-normal tracking-wide text-gray-700">
              Bachelor’s Degree in Computer Science ABC Technical Institute,
              Jefferson, Missouri
            </p>
          </div>

          <div className="flex flex-col gap-1 items-left w-4/5 border-2 border-green-500 rounded-2xl p-4">
            <h3 className="px-2 border border-gray-500 font-light rounded-md w-fit text-sm">
              2005 – 2006
            </h3>
            <p className="text-base font-medium tracking-wider">
              Programming Course
            </p>
            <p className="font-light text-base tracking-wide text-gray-500">
              Paris
            </p>
            <p className="text-base font-normal tracking-wide text-gray-700">
              Coursework – Git, WordPress, Javascript, iOS, Android.
            </p>
          </div>
        </section>
      </div>
      <h3 className="my-4 font-medium text-xl">
        <span className="text-green-500">My</span>
        <span className="text-gray-500"> Skill</span>
      </h3>
      <div className="flex flex-row gap-4">
        <section className="w-1/2 flex flex-col gap-4 justify-center">
          <div className="flex flex-row gap-4 text-green-500 justify-center">
            <AutoFixHighIcon />
            <h5 className="text-xl font-medium text-gray-700 uppercase text-center">
              Design
            </h5>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-700">Web design</p>
            <div className="w-4/5">
              <Slider
                defaultValue={70}
                step={10}
                marks
                min={10}
                max={110}
                disabled
                size="medium"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-700">Photoshop</p>
            <div className="w-4/5">
              <Slider
                defaultValue={80}
                step={10}
                marks
                min={10}
                max={110}
                disabled
                size="medium"
              />
            </div>
          </div>
        </section>
        <section className="w-1/2 flex flex-col gap-4 justify-center">
          <div className="flex flex-row gap-4 text-green-500 justify-center">
            <FlagIcon />
            <h5 className="text-xl font-medium text-gray-700 uppercase text-center">
              Languages
            </h5>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-700">English</p>
            <div className="w-4/5">
              <Slider
                defaultValue={80}
                step={10}
                marks
                min={10}
                max={110}
                disabled
                size="medium"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-700">VietNamese</p>
            <div className="w-4/5">
              <Slider
                defaultValue={100}
                step={10}
                marks
                min={10}
                max={110}
                disabled
                size="medium"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skill;
