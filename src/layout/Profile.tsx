import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Profile = () => {
  return (
    <div className="fixed left-24 w-1/5 bg-white rounded-2xl">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/locket-img/o/users%2FqPy3HLZ6AeZlzXBkj05ofMhsQyn1%2Fpublic%2Fprofile_pic.webp?alt=media&token=6fcf71a3-f0fb-49e4-bb5c-3ec6072a73b8"
          alt="Bé này người yêu em"
          className=" w-full rounded-t-2xl"
        />

      <h1 className="text-black text-3xl font-medium tracking-wider text-center m-4 block w-2/3 mx-auto">
        Lai Trong Minh Truong
      </h1>
      <p className="font-light tracking-wider text-md text-green-600 text-center m-4">
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
      <button className="uppercase text-xl font-light tracking-tight text-center mx-auto p-4 bg-green-600 w-full mt-4 text-white rounded-b-2xl hover:text-black">Contact me</button>
    </div>
  );
};

export default Profile;
