import Image from "next/image";

export default function Hero(){
    return(
        <section className="bg-gray-200 flex flex-col md:flex-row justify-between items-center px-8 py-16 md:px-16 lg:px-24">
      <div className="w-full md:w-1/2 md:text-left text-center mb-8 md:mb-0">
        <h1 className="text-2xl lg:text-4xl font-semi-bold text-gray-900 mb-4">
          Welcome to the Content House
        </h1>
        <p className="text-md lg:text-xl text-gray-600 mb-6">
            Explore the finest solutions for your problems and needs, with professional's support.
        </p>
        <button className="bg-yellow-800 text-white px-6 py-3 font-medium rounded-lg hover:bg-yellow-600">
          Let's Get Started!
        </button>
      </div>

      <div className="w-full md:w-1/2 px-4">
        <Image
          src="/Content.png"
          alt="Hero-section Image"
          width={600}
          height={400}
          className="shadow-lg rounded-lg"
        />
      </div>
    </section>
  );
}
