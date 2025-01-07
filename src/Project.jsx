export default function Project() {
  const projects = [
    {
      title: 'DryoPro',
      description:
        'DryoPro proyek utama melibatkan yang melibatkan beberapa stakeholder utama. Aplikasi bertema besar agroindustry, DryoPro merupakan proyek pengembangan aplikasi Internet of Things (IoT). Terintegrasi dengan ESP32 dan sensor DHT22 untuk deteksi suhu dan kelembabanyang .',
      tech: 'Tailwind CSS, Laravel, MySQL, Arduino IDE',
      github: '#',
    },
    {
      title: 'DryoPro',
      description:
        'DryoPro proyek utama melibatkan yang melibatkan beberapa stakeholder utama. Aplikasi bertema besar agroindustry, DryoPro merupakan proyek pengembangan aplikasi Internet of Things (IoT). Terintegrasi dengan ESP32 dan sensor DHT22 untuk deteksi suhu dan kelembaban.',
      tech: 'Tailwind CSS, Laravel, MySQL, Arduino IDE, kska, aoskaosj, kjasojas,jsapokp',
      github: '#',
    },
    {
      title: 'DryoPro',
      description:
        'DryoPro proyek utama melibatkan yang melibatkan beberapa stakeholder utama. Aplikasi bertema besar agroindustry, DryoPro merupakan proyek pengembangan aplikasi Internet of Things (IoT). Terintegrasi dengan ESP32 dan sensor DHT22 untuk deteksi suhu dan kelembaban.',
      tech: 'Tailwind CSS, Laravel, MySQL, Arduino IDE',
      github: '#',
    },
    {
      title: 'DryoPro',
      description:
        'DryoPro proyek utama melibatkan yang melibatkan beberapa stakeholder utama. Aplikasi bertema besar agroindustry, DryoPro merupakan proyek pengembangan aplikasi Internet of Things (IoT). Terintegrasi dengan ESP32 dan sensor DHT22 untuk deteksi suhu dan kelembaban.',
      tech: 'Tailwind CSS, Laravel, MySQL, Arduino IDE',
      github: '#',
    },
    {
      title: 'DryoPro',
      description:
        'DryoPro proyek utama melibatkan yang melibatkan beberapa stakeholder utama. Aplikasi bertema besar agroindustry, DryoPro merupakan proyek pengembangan aplikasi Internet of Things (IoT). Terintegrasi dengan ESP32 dan sensor DHT22 untuk deteksi suhu dan kelembaban.',
      tech: 'Tailwind CSS, Laravel, MySQL, Arduino IDE',
      github: '#',
    },
  ]
  return (
    <section className="py-16 bg-gray-200 mt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold text-orange-600">Portofolio</h2>
        <h1 className="text-4xl font-bold mt-2">Project Saya</h1>
        <p className="text-gray-600 mt-4">
          Project yang sedang berjalan atau yang telah selesai
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 cursor-pointer xl:px-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 m-6"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-800 font-semibold mb-4">
                Tech used: {project.tech}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
