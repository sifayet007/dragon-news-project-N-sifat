import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { login, setUser } = useContext(AuthContext);
  // const[error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handelLogInForm = (e) => {
    e.preventDefault();
    // get form data
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successfully!");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err}`);
      });
  };
  return (
    <div className=" flex justify-center items-center px-[345px] mb-[194px] mt-14">
      <div className="bg-white px-20 py-16 w-[552px] shadow-md hover:scale-105 duration-300 rounded-3xl">
        <h1 className="text-4xl text-center font-bold">Login your account </h1>
        <hr className="my-10" />
        <form onSubmit={handelLogInForm} className="space-y-3 " action="">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="">
              Email address
            </label>
            <input
              className="bg-[#F3F3F3] w-full  p-3 border border-gray-400 rounded-md shadow  "
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              id=""
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Password</label>
            <input
              className="bg-[#F3F3F3] w-full  p-3 border border-gray-400 rounded-md shadow  "
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <button className="w-full py-2 mt-8   p-3 border  rounded-md shadow  bg-[#403F3F] text-white">
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-3">
          <h1>
            Don't Have An Account ?
            <Link
              to="/auth/register"
              className="text-red-500 hover:underline font-bold"
              title="Register your account"
            >
              Register
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
