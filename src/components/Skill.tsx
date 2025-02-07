import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import FlagIcon from "@mui/icons-material/Flag";
import SchoolIcon from "@mui/icons-material/School";
import Slider from "@mui/material/Slider";
const Skill = () => {
  return (
    <div>
      <h3>Resume</h3>

      <section>
        <h2>
          <CardTravelIcon />
          EXPERIENCE
        </h2>

        <div>
          <h3>2013 – Present</h3>
          <p>Art Director</p>
          <p>Facebook Inc.</p>
          <p>
            Collaborate with creative and development teams on the execution of
            ideas.
          </p>
        </div>

        <div>
          <h3>2011 – 2012</h3>
          <p>Front-end Developer</p>
          <p>Google Inc.</p>
          <p>
            Monitored technical aspects of the front-end delivery for several
            projects.
          </p>
        </div>
      </section>

      <section>
        <h2>
          <SchoolIcon />
          EDUCATION
        </h2>

        <div>
          <h3>2006 – 2008</h3>
          <p>Art University</p>
          <p>New York</p>
          <p>
            Bachelor’s Degree in Computer Science ABC Technical Institute,
            Jefferson, Missouri
          </p>
        </div>

        <div>
          <h3>2005 – 2006</h3>
          <p>Programming Course</p>
          <p>Paris</p>
          <p>Coursework – Git, WordPress, Javascript, iOS, Android.</p>
        </div>
      </section>
      <h3>
        <span>My</span>
        <span>Skill</span>
      </h3>
      <section>
        <AutoFixHighIcon />
        <h5>Design</h5>
        <p>Web design</p>
        <div>
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={10}
            max={110}
            disabled
            size="small"
          />
        </div>
        <p>Photoshop</p>
        <div>
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={10}
            max={110}
            disabled
            size="small"
          />
        </div>
      </section>
      <section>
        <FlagIcon />
        <h5>Languages</h5>
        <p>English</p>
        <div>
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={10}
            max={110}
            disabled
            size="small"
          />
        </div>
        <p>VietNamese</p>
        <div>
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={10}
            max={110}
            disabled
            size="small"
          />
        </div>
      </section>
    </div>
  );
};

export default Skill;
