import axios from "axios";
import { useState } from "react";

const Login = () => {

     const [msg, setmsg] = useState();
    
      const [user, setUser] = useState({
        username: "",
        password: "",
        
      });
    
      const handleInputChange = (e) => {
        const value = e.target.value;
    
        setUser({ ...user, [e.target.name]: value });
        // console.log(value)
      };
    
      const UserLogin = async (e) => {
        e.preventDefault();

        try {
            axios.post("http://localhost:8090/user/login", user).then((response) => {
                // console.log(response.data)
             if(response.ok){
                setmsg("User Login Successfully!");
        
                setUser({
                  username: "",
                  password: "",
                 
                });
                console.log("Logged in")
            }
            else{
                console.log("Somethig went wrong")
            }
            });
        } catch (error) {
            setmsg("Unable to Login User.");
            console.log(error);
        }
      }



  return (
    <>
      <div className="w-screen p-5">
        <div className="bg-gray-200 p-5 w-fit place-self-center ">
          <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">
            Login
          </h1>
          {msg && <p className="text-green-700 font-semibold text-xl text-center m-5">{msg}</p>}
          <form className="flex flex-col gap-3" onSubmit={UserLogin} >
            <table className="w-auto border-collapse">
              <tbody>
               
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Username:</label>
                  </td>
                  <td className="p-4">
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>

                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Password:</label>
                  </td>
                  <td className="p-4">
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
               
                

                <tr className="border-b-2 border-b-gray-300">
                  <td className="text-center">
                    <button
                      className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl"
                      type="submit"
                    >
                      LOGIN
                    </button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
