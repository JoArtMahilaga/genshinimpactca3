"use client";

import Head from 'next/head';
import Navbar from "./navbar/page";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mb-4">Welcome to Genshin Impact</h1>
        <p className="text-xl mb-8">Join us in the world of Teyvat, where seven kinds of elemental powers surge.</p>
        <button className="bg-amber-300 hover:bg-lime-200 text-white font-bold py-2 px-4 rounded duration-300">
          Start Adventure
        </button>
      </div>

      <div className="bg-gray-900 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white mb-4">Discover the World of Teyvat</h2>
          <p className="text-lg text-gray-300 mb-6">Explore vast landscapes, uncover hidden treasures, and encounter mysterious creatures.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-2">Adventure</h3>
              <p className="text-gray-300">Embark on thrilling quests and challenges across the seven regions of Teyvat.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-2">Combat</h3>
              <p className="text-gray-300">Master the elements and engage in dynamic combat against formidable foes.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-2">Co-op</h3>
              <p className="text-gray-300">Team up with friends to conquer dungeons and bosses together.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white mb-4">Join the Adventure Today</h2>
          <p className="text-lg text-gray-300 mb-6">Experience the excitement of Genshin Impact now!</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded duration-300">
            Play Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
