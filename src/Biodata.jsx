import kevin from "./assets/Kevin.png"

export default function Biodata() {
    return (
        <section id="home" className="">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-10 lg:mt-0 lg:right-0 ">
                  <img
                    src={kevin}
                    alt="Kevin Elvio Chrisselin"
                    className="w-96 mx-auto"
                  />
                  <span className="absolute -bottom-0 -z-10 left-1/2 top-0 -translate-x-1/2"></span>
                </div>
              </div>
    
              <div className="w-full self-center px-4 lg:w-1/2">
                <h1 className="text-base font-semibold text-orange-600 md:text-xl">
                  Hai Semua 👋, Saya{" "}
                  <span className="block font-bold text-black text-4xl mt-1 lg:text-5xl">
                    Kevin Elvio Chrisselin P
                  </span>
                </h1>
                <h2 className="font-medium text-secondary text-lg mb-5">
                  Student of{" "}
                  <span className="text-black lg:text-2xl">
                    <a
                      href="https://unej.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jember University
                    </a>
                  </span>
                </h2>
                <p className="font-medium text-secondary mb-10 leading-relaxed">
                  Mahasiswa aktif Universitas Jember Fakultas Ilmu Komputer Prodi
                  Teknologi Informasi
                </p>
    
                <a
                  href="#footer"
                  className="text-base font-semibold text-white bg-orange-600 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
          </div>
        </section>
      );
}

  