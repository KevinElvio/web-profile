import { useEffect, useState } from "react";
import { getProject } from "./services/project.service";

export default function Project() {
  const [project, setProject] = useState([])

  useEffect(()=>{
    getProject((data) => {
      console.log(data.data[0].title)
      setProject(data.data);
    });
  }, [])
  return (
    <section className="py-16 bg-gray-200 mt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold text-orange-600">Portofolio</h2>
        <h1 className="text-4xl font-bold mt-2">Project Saya</h1>
        <p className="text-gray-600 mt-4">
          Project yang sedang berjalan atau yang telah selesai
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 cursor-pointer xl:px-20">
          {project.length > 0 && project.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 m-6"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-800 font-semibold mb-4">
                Tech used: {project.tech_used}
              </p>
              <a
                href={project.github_link}
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
