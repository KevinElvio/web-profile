import { useEffect, useState } from 'react';
// import portofolio2 from './assets/portofolio/2.jpg'
// import portofolio3 from './assets/portofolio/3.jpg'
// import portofolio4 from './assets/portofolio/4.jpg'
// import portofolio5 from '../public/portofolio/5.jpeg'
import { getExperience } from './services/experience.service';

// const experiences = [
//   {
//     imgSrc: portofolio2,
//     imgAlt: "Login Register_Info Event",
//     title: "Kelompok MKWU MOISHI",
//     description:
//       "Saya sebagai CFO dari kelompok MKWU ini. Kami menjual aneka macam sushi yang dikemas dan diberi nama MOISHI. Kami sangat senang sekali mendapatkan untung dari mata kuliah MKWU.",
//   },
//   {
//     imgSrc: portofolio3,
//     imgAlt: "Home Page_Pocalories",
//     title: "Asisten Praktikum Mata Kuliah Sistem Operasi",
//     description:
//       "Menjadi asisten praktikum untuk mata kuliah sistem operasi sangat banyak tantangan yang dihadapi. Tetapi saya bersyukur karena semuanya berjalan dengan sangat baik dan luar biasa.",
//   },
//   {
//     imgSrc: portofolio4,
//     imgAlt: "Login Register_Pocalories",
//     title: "Kelompok Pengembangan Perangkat Lunak (DryoPro)",
//     description:
//       "Tim pengembang DryoPro, saya sebagai programmer sangat bersyukur karena pengalaman pertama saya mencoba membuat sebuah produk berbasis website yang terintegrasi dengan IoT. Saya mengembangkan website ini menggunakan Laravel dan Tailwind CSS, dan untuk perangkat IoT-nya saya menggunakan ESP32.",
//   },
//   {
//     imgSrc: portofolio5,
//     imgAlt: "Portofolio",
//     title: "Juara 1 Lomba TIC 5.0",
//     description:
//       "Lomba TIC adalah perlombaan karya tulis ilmiah dengan topik SDGs. Syukur kepada Tuhan saya dan tim dapat memenangkan kompetisi ini dengan sangat baik.",
//   },
// ];



const ExperienceSection = () => {
  const [experience, setExperience] = useState([])

  useEffect(()=>{
    getExperience((data) => {
      console.log(data.data[0].title)
      setExperience(data.data);
    });
  }, [])
  return (
    <section id="blog" className="pt-36 pb-16 bg-slate-100">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-orange-600 mb-2">Pengalaman</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Pengalaman Saya
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Berikut merupakan pengalaman saya selama menjadi mahasiswa di Universitas Jember
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center">
          {experience.map((experience, index) => (
            <div key={index} className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={experience.image} className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">{experience.title}</h3>
              <p className="font-medium text-base text-secondary">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
