const skills = [
    { src: './assets/skills/html.png', alt: 'HTML' },
    { src: './assets/skills/html.png', alt: 'CSS3' },
  ];
export default function Skills(){
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
}

