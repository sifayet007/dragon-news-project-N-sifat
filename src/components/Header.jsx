import logo from "../assets/logo.png";

const Header = () => {
  const date = new Date();
  return (
    <div className="flex justify-center items-center flex-col py-5 space-y-3">
      <div className="">
        <img width={300} src={logo} alt="" />
      </div>
      <p className="text-gray-400">Journalism Without Fear or Favour</p>
      <h1>{date.toString()}</h1>
    </div>
  );
};

export default Header;
