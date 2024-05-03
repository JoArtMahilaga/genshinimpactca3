import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../navbar/page";

import character1Image from '../images/yelan.png';
import character2Image from '../images/eula.png';
import character3Image from '../images/raiden.png';
import character4Image from '../images/yaemiko.png';

const Characters: React.FC = () => {
  const characters = [
    { image: character1Image },
    { image: character2Image },
    { image: character3Image },
    { image: character4Image },
  ];

  return (
    <> <Navbar />
      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
        <div className="grid grid-cols-3 gap-4">
          {characters.map((character, index) => (
            <div key={index} className="bg-black bg-opacity-50 p-5 rounded-md">
              <Image src={character.image} alt={`Character ${index + 1}`} width={500} height={300} />
            </div>
          ))}
        </div>
        <button className=" bg-amber-300 hover:bg-lime-200 text-white font-bold py-2 px-4 rounded duration-300 mt-4">
          Explore Characters
        </button>
      </div>
    </>
  );
}

export default Characters;