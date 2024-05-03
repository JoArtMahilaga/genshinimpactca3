import Head from 'next/head';
import Navbar from "../navbar/page";
import { fetchCharacters } from '../lib/data'; // Ensure this function is implemented

export default async function Characters() {
  const characters = await fetchCharacters();

console.log(characters);



return (
  <>
    <Navbar />
    <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white pt-20">
  {/* Start of Weapon Cards */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
      {/* Weapon Cards Loop */}
      {(characters as { character_id: number, name: string, gender: string, element: string, region: string, image_path: string }[]).map((character, index) => (
          <div key={character.character_id} className="bg-white text-black rounded-lg shadow-md p-4">
            <img src={`/images/${character.image_path}`} alt={character.name} className="w-full h-64 object-cover rounded-t-lg" />
              <h2 className="mt-2 font-bold">{character.element}</h2>
              <p className="text-sm">{character.region}</p>
              <p className="mt-2"><strong>gender:</strong> {character.gender}</p>
          
          </div>
      ))}
  </div>
</div>
  </>
);
}
