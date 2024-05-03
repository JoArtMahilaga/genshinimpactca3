import Head from 'next/head';
import Navbar from "../navbar/page";

export default function Services() {
  const services = [
    {
      name: 'Character Build Guides',
      description: 'Dive deep into the world of character mastery with our comprehensive guides! From selecting the ultimate weapon and artifact sets that resonate with your character\'s unique powers, to strategizing the perfect talent upgrade path, we\'ve got you covered. And it doesn\'t stop there! We\'ll help you craft the dream team that complements your champion\'s abilities, ensuring you\'re unbeatable in any battle. Join us, and let\'s bring out the best in your favorite characters together!'
    }
    ,
    {
      name: 'Event Guides',
      description: 'Get ready to conquer every in-game event with our meticulously crafted event guides! Whether it\'s mastering the trickiest of challenges or uncovering the secrets to scooping up all the rewards, we\'re here to guide you every step of the way. Our strategies are designed to not only help you succeed but to enhance the fun and excitement of each event. Let\'s embark on this adventure together and make every event a triumphant celebration!'
    }
    ,    
    {
      name: 'News and Updates',
      description: 'Never miss a beat in the gaming world with our up-to-the-minute news and updates! From the latest game-changing updates and thrilling event announcements to exclusive insights from the developers themselves, we\'re your ultimate source for staying in the know. Let\'s keep the excitement alive and the community buzzing with anticipation for what\'s next. Stay tuned, and let\'s ride the wave of game updates and news together!'
    }
    
  ];

  return (
    <> <Navbar />
      <Head>
        <title>Services Page</title>

      </Head>
      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mb-4">  </h1>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white bg-opacity-50 p-5 rounded-md">
              <h2 className="text-xl mb-4">{service.name}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        <button className=" bg-amber-300 hover:bg-lime-200 text-white font-bold py-2 px-4 rounded duration-300 mt-4">
          Explore Services
        </button>
      </div>
    </>
  );
}