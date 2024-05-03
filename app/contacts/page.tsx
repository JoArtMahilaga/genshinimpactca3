import Head from 'next/head';
import Navbar from "../navbar/page";

export default function Contacts() {
  const contacts = [
    'hanzo@gmail.com',
    'hanabi@gmail.com',
    'hayabusa@gmail.com.com',
    'kei@gmail.com',
  ];

  return (
    <>   <Navbar />
      <Head>
        <title>Contacts Page</title>
  
      </Head>
      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
     
        <h1 className="text-4xl mb-4">Contacts</h1>
        <div className="bg-white bg-opacity-50 p-5 rounded-md">
          <p className="text-lg">
            For any inquiries or support, please contact us at:
          </p>
          {contacts.map((contact, index) => (
            <p key={index} className="text-lg">
              Contact {index + 1}: {contact}
            </p>
          ))}
        </div>
        <button className=" bg-amber-300 hover:bg-lime-200 text-white font-bold py-2 px-4 rounded duration-300 mt-4">
          Get in Touch
        </button>
      </div>
    </>
  );
}