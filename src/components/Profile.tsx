import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router";
const Profile = () => {
  return (
    <div className="absolute left-24 w-1/4 bg-white rounded-2xl h-full flex flex-col justify-between">
      <img
        src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/469382877_610839621437839_8111982572644297805_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2RE-pyZVL5AQ7kNvgGRfnFJ&_nc_oc=Adg6Jh3Mqbv3ex28IqqX5AAqc1Hwnyc_5Cyhc06YsRy7j5ALM661LROsw7w_gOLtXFDqh2Mg-soAAhQEJYtcQ6xG&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=ApdERlfNUNgiAZFaByOTUZV&oh=00_AYDW8pfz8YkCShDnLHXI9MrViZa0OXczxw1_FKLZzUmVUA&oe=67ACE122"
        alt="Lai Trong Minh Truong"
        className=" w-full rounded-t-2xl"
      />

      <h1 className="text-black text-3xl font-medium tracking-wider text-center block w-3/4 mx-auto">
        Lai Trong Minh Truong
      </h1>
      <p className="font-light tracking-wider text-md text-green-600 text-center">
        Web designer - developer
      </p>
      <ul className="flex gap-4 flex-row justify-center">
        <li>
          <FacebookOutlinedIcon />
        </li>
        <li>
          <GitHubIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
      <div className="uppercase text-xl font-medium tracking-tight text-center mx-auto p-4 bg-green-600 w-full mt-4 text-white rounded-b-2xl hover:text-black">
        <Link to="/contact" className="w-full h-full">Contact me</Link>
      </div>
    </div>
  );
};

export default Profile;
