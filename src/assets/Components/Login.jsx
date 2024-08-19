import React , {useState} from "react";
import bblogo from "../../assets/BB-Logo.svg";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const [username , setUserName] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
  

 const handleSubmit = async (e) => {
   e.preventDefault();
   const apiResponse = await axios.get(`https://thebookbazaar-backend.onrender.com/login/${username}/${password}` 
);
if(apiResponse.data && apiResponse.data != "Login Failed"){
  localStorage.setItem("Login" , apiResponse.data)
  alert("Login Successful");
  navigate('/')
  setUserName("")
  setPassword("")
  return;
}
 }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={bblogo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-lg font-semibold leading-6 text-cyan-800"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-semibold leading-6 text-cyan-800"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onSubmit={() =>{handleSubmit()}}
              >
                {/* <Link to={'/'}> */}
                Login
                {/* </Link> */}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            New User?
            <Link
              to={`/registration`}
              className="ml-2 font-semibold leading-6 text-cyan-500 hover:text-cyan-400"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
