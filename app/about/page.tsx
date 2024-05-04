import Navbar from "../navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
        <main className="p-10 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <details className="mt-4 bg-black bg-opacity-30 p-5 rounded-md">
            <p className="text-lg">
              We are a company dedicated to providing the best quality products and services. Our team is composed of highly skilled professionals who are passionate about what they do. We strive to exceed our customers&apos; expectations and ensure their satisfaction.
            </p>
          </details>

          <a href="https://genshin.mihoyo.com/" target="_blank" rel="noopener noreferrer">
            <button className=" bg-amber-300 hover:bg-lime-200 text-white font-bold py-2 px-4 rounded duration-300 mt-4">
              Learn More
            </button>
          </a>


        </main>
      </div>
    </>
  );
}