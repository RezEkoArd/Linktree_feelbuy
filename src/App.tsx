import "./index.css";
import Logo from "./assets/feelbuy.jpg";

function App() {
  const links = [
    {
      text: "Check Katalog",
      link: "https://drive.google.com/drive/folders/1p8SNXhUZjml5bw-ZXEJ5ZZuXW9nEQtwi?usp=sharing",
    },
    {
      text: "Husni",
      link: "https://api.whatsapp.com/send/?phone=6285817898825&text=Halo,%20saya%20tertarik%20untuk%20membeli%20produk%20LocknLock%20dan%20HanSoul%20dari%20koleksi%20Anda.&type=phone_number&app_absent=0",
    },
    {
      text: "Dwi",
      link: "https://api.whatsapp.com/send/?phone=6281314559903&text=Halo%2C+saya+tertarik+untuk+mengetahui+lebih+banyak+tentang+produk+HanSoul+dan+LocknLock+yang+tersedia.+Bisakah+Anda+berbagi+informasi+tentang+produk+terbaik+di+koleksi+Anda%3F&type=phone_number&app_absent=0",
    },
  ];

  return (
    <>
      <div className="w-full h-screen bg-red-600 pt-4">
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
                    className={`w-4/5 mx-auto bg-slate-100 rounded-lg shadow-custoum hover:shadow-none transition-all`}
                  >
                    <h1 className="text-center text-lg font-medium py-2 text-gray-800">
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
