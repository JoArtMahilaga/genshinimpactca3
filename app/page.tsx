"use client";

import Head from 'next/head';
import Navbar from "./navbar/page";

const Home: React.FC = () => {
  return (
    <><Navbar />

      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mb-4">Welcome to Genshin Impact</h1>
        <p className="text-xl mb-8">Join us in the world of Teyvat, where seven kinds of elemental powers surge.</p>
        <button className=" bg-amber-300 hover:bg-lime-200 text-white font-bold py-2 px-4 rounded duration-300">
          Start Adventure
        </button>
      </div>
    </>
  );
}

export default Home;