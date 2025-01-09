export default function About(){
    return(
        <div className="container mx-auto px-4 mt-40">
          <div className="flex flex-wrap">
            {/* Content Section */}
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-orange-500 text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 lg:text-4xl">
                Kevin
              </h2>
              <p className="font-medium text-base text-secondary lg:text-lg leading-relaxed">
                Mahasiswa aktif Universitas Jember Fakultas Ilmu Komputer Prodi
                Teknologi Informasi. Saat ini saya sedang fokus belajar di bidang
                pengembangan perangkat lunak, khususnya aplikasi web dan mobile.
                Untuk pengembangan web biasanya saya menggunakan framework
                Laravel, sedangkan untuk pengembangan mobile saya biasanya
                menggunakan Flutter Dart. Menulis kode pemrograman merupakan hobi
                saya, dan saya sangat bersemangat untuk belajar sebuah teknologi
                baru yang populer.
              </p>
            </div>
          </div>
        </div>
    )
}