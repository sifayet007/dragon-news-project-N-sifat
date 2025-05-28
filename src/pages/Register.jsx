import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photoUrl, email, password });
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            // profile update successful
            setUser({ ...result.user, displayName: name, photoURL: photoUrl }); // manually update local state
            navigate("/");
            toast.success("Register Successfully!");
          })
          .catch(() => {
            // console.log("Profile update error: ", err);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log("ErrorCode: ", errorCode, "ErrorMessage: ", errorMessage);

        toast.error(`${errorMessage}`);
      });
  };
  return (
    <div className=" flex justify-center items-center lg:px-[345px] mb-[194px] mt-5">
      <div className="bg-white xl:px-20 md:px-15 px-10 py-8 lg:w-[552px] shadow-md hover:scale-105 duration-300 rounded-3xl">
        <h1 className="text-4xl font-bold text-center">
          Register your account{" "}
        </h1>
        <hr className="my-5" />
        <form onSubmit={handleSubmit} className="space-y-2 " action="">
          {/* Your name container */}
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="">
              Your Name
            </label>
            <input
              className="bg-[#F3F3F3] w-full  p-3 border border-gray-400 rounded-md shadow  "
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
              id=""
            />
          </div>
          {/* Your photo url container */}
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="">
              Photo URL
            </label>
            <input
              className="bg-[#F3F3F3] w-full  p-3 border border-gray-400 rounded-md shadow  "
              type="text"
              name="photoUrl"
              placeholder="Photo-Url"
              required
              id=""
            />
          </div>
          {/* your email address */}
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
          {/* your password  */}
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
          {/* register button */}
          <div>
            <button className="w-full py-2 mt-5   p-3 border  rounded-md shadow  bg-[#403F3F] text-white">
              Register
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-3">
          <h1>
            Don't Have An Account?
            <Link
              to="/auth/login"
              className="text-red-500 hover:underline font-bold"
              title="Login your account"
            >
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
