import Head from 'next/head';
import Navbar from "../navbar/page";
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Navbar />

      <Head>
        <title>Login Page</title>
      </Head>
      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mb-4">Login</h1>
        <div className="bg-black bg-opacity-50 p-5 rounded-md">
          <p className="text-lg">
            Please enter your credentials to login:
          </p>
          <form className="flex flex-col space-y-4">
     <input type="text" placeholder="Username" className="text-lg p-2 w-64 rounded-md text-black" />
       <input type="password" placeholder="Password" className="text-lg p-2 w-64 rounded-md text-black" 
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" 
    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
  />
        <button type="submit" className="text-white font-bold py-2 px-4 rounded duration-300 mt-4">
    Login
  </button>
     </form>
          <div className="mt-4">
            <p className="text-lg">Don't have an account?</p>
            <Link href="/signup"> 
              <a className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-300 mt-4">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}