import html from "./assets/skills/html.png"

const skills = [
    { src: {html}, alt: 'HTML' },
    { src: {html}, alt: 'CSS3' },
  ];
// export default function Skills(){

//     return (
//         <div className="bg-gray-800 text-white p-10">
//           <h1 className="text-center text-3xl font-bold mb-4">Keahlian</h1>
//           <p className="text-center mb-8">Pemahaman dan pengalaman</p>
//           <div className="flex flex-wrap justify-center">
//             {skills.map((skill, index) => (
//               <div key={index} className="m-4">
//                 <img src={skill.src} alt={skill.alt} className="h-16 w-16" />
//               </div>
//             ))}
//           </div>
//         </div>
//       );
// }

const SkillsSection = () => {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-700">
      <div className="container mx-auto">
        {/* Header */}
        <div className="w-full px-4 text-center mb-16">
          <h4 className="font-semibold text-lg text-primary mb-2">Skill</h4>
          <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Keahlian</h2>
          <p className="font-medium text-md text-secondary md:text-lg">
            Pernah menggunakan dan mengoperasikan
          </p>
        </div>
        {/* Skills */}
        <div className="w-full px-4">
          <div className="flex flex-wrap items-start justify-center">
            {skills.map((skill, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-16 h-8 md:w-32 md:h-16 lg:w-48 lg:h-24"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;