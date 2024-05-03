import Head from 'next/head';
import Navbar from "../navbar/page";
import Image from 'next/image';
import { fetchWeapons } from '../lib/data';


export default async function Weapons() {
const weapons = await fetchWeapons();
console.log(weapons);



  return (
    <>
      <Navbar />
      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white pt-20">
    {/* Start of Weapon Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
        {/* Weapon Cards Loop */}
        {(weapons as { weapon_id: number, description: string, attack: string, type: string, rarity: string, image_path: string }[]).map((weapon, index) => (

            <div key={weapon.weapon_id} style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}} className="bg-white text-black rounded-lg shadow-md p-4">
              <img src={`/images/${weapon.image_path}`} alt={weapon.description} className="w-full h-64 object-cover rounded-t-lg" />
                <h2 className="mt-2 font-bold">{weapon.type}</h2>
                <p className="text-sm">{weapon.description}</p>
                <p className="mt-2"><strong>Attack:</strong> {weapon.attack}</p>
                <p><strong>Rarity:</strong> {weapon.rarity}</p>
            </div>
        ))}
    </div>
</div>
    </>
  );
}

