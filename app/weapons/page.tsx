import Head from 'next/head';
import Navbar from "../navbar/page";
import Image from 'next/image';

import image1 from '../images/aquila favonia.jpg';
import image2 from '../images/black sword.jpg';
import image3 from '../images/primordial jade cutter.jpg';
import image4 from '../images/festering desire.jpg';
import image5 from '../images/splendor of tranquil waters.png';

const Weapons: React.FC = () => {
  const weapons = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white pt-20"> {/* Added pt-20 for padding */}
        <div className="grid grid-cols-3 gap-4">
          {weapons.map((weapon, index) => (
            <div key={index} className="bg-black bg-opacity-50 p-5 rounded-md">
              <Image src={weapon.image} alt={`Weapon ${index + 1}`} width={500} height={300} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Weapons;
