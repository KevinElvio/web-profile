import kevin from "./assets/Kevin.png"

export default function Biodata() {
    return (
        <section className="bg-white px-4 top-0">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                    <img
                        src={kevin}
                        alt="Kevin Elvio Chrisselin"
                        className="w-80 sm:w-96 "
                    />
                </div>

                <div className="text-center md:text-left">
                    <p className="text-orange-600 text-lg font-semibold">Hai Semua 👋, Saya</p>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Kevin Elvio Chrisselin P
                    </h1>
                    <h2 className="text-lg text-gray-600">Student of Jember University</h2>
                    <p className="text-gray-700 mt-4">
                        Mahasiswa aktif Universitas Jember Fakultas Ilmu Komputer Prodi Teknologi Informasi.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500">
                        Hubungi Saya
                    </button>
                </div>
            </div>

            <div className="mt-16 mx-10 sm:mx-10 md:mx-20 lg:mr-80 xl:w-1/2 xl:ml-48 text-justify">
                <h2 className="text-xl font-bold text-orange-600">TENTANG SAYA</h2>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">Kevin</h3>
                <p className="text-gray-700 mt-4 leading-relaxed">
                    Mahasiswa aktif Universitas Jember Fakultas Ilmu Komputer Prodi Teknologi Informasi.
                    Saat ini saya sedang fokus belajar di bidang pengembangan perangkat lunak,
                    khususnya aplikasi web dan mobile. Untuk pengembangan web, biasanya saya menggunakan framework Laravel,
                    sedangkan untuk pengembangan mobile saya biasanya menggunakan Flutter Dart.
                    Menulis kode pemrograman merupakan hobi saya, dan saya sangat bersemangat untuk belajar hal-hal baru.
                </p>
            </div>
        </section>
    );
}