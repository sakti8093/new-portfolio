import myimage from "../../assets/myimage.jpg";

const ProfileSideBar = () => {
  return (
    <div className="w-full pt-5 pb-5 text-center profile absolute z-10">
    <img src={myimage} className=" w-20 h-20 m-auto rounded-full" />
    <h2 className="text-white font-semibold mt-2 text-xl">Sakti Prasad</h2>
    <p className=" text-text-1 mt-1 text-sm">Full Stack Developer</p>
    <p className=" text-text-1 text-sm">MERN</p>
  </div>
  )
}

export default ProfileSideBar