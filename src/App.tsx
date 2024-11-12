import "./index.css";
import Logo from "./assets/feelbuy.jpg";

function App() {
  const links = [
    {
      text: "Check Katalog Terbaru kami",
      link: "https://github.com",
    },
    {
      text: "Pesan Sekarang",
      link: "https://github.com",
    },
    {
      text: "Tanya Lebih Lanjut",
      link: "https://github.com",
    },
  ];

  return (
    <>
      <div className="w-full h-screen bg-red-600">
        <div className="max-w-xl mx-auto h-screen flex flex-col gap-5">
          <div className="h-48 w-48 mx-auto ">
            <div className="aspect-w-1 aspect-h-1 ">
              <img src={Logo} className=" object-cover object-center" />
            </div>{" "}
          </div>
          <div className="text-center mt-5">
            <h1 className="text-4xl  text-white font-semibold">
              Feelbuy Indonesia
            </h1>
            <p className="text-md mt-3 text-white px-5">
              Jl. Ciater Raya Kp. Maruga No No.103-105, Ciater, Kec. Serpong,
              Kota Tangerang Selatan, Banten 15317
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {links.map(({ text, link }, index) => {
              return (
                <a href={link} key={index} className="">
                  <div
                    className={`w-96 mx-auto bg-slate-100 rounded-lg shadow-custoum hover:shadow-none transition-all`}
                  >
                    <h1 className="text-center text-lg font-semibold py-2 text-gray-950 border-black">
                      {text}
                    </h1>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
