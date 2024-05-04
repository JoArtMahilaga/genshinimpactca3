import Head from 'next/head';
import Navbar from "../navbar/page";


export default function Contacts() {
  const contacts = [
    { email: 'hanzo@gmail.com', name: 'Hanzo', phone: '123-456-7890', image: '/images/hanzo.png' },
    { email: 'hanabi@gmail.com', name: 'Hanabi', phone: '234-567-8901', image: '/images/hanabi.png' },
        { email: 'hayabusa@gmail.com', name: 'Hayabusa', phone: '345-678-9012', image: '/images/hayabusa.png' },
    { email: 'kei@gmail.com', name: 'Kei', phone: '456-789-0123', image: '/images/kei.png' },
  ];

  return (
    <>   
      <Navbar />
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
            <details key={index} className="text-lg mt-4 bg-black bg-opacity-30 p-5 rounded-md">
              <summary>Contact {index + 1}: {contact.name}</summary>
              <img src={contact.image} alt={contact.name} className="w-20 h-20 rounded-full" />
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
            </details>
          ))}
        </div>
        <button className=" bg-amber-300 hover:bg-lime-200 text-white font-bold py-2 px-4 rounded duration-300 mt-4">
          Get in Touch
        </button>
      </div>
    </>
  );
}