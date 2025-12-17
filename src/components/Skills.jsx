import { motion } from "framer-motion";
import Logo from "./Logo";
export default function Skills({ skillsRef }) {
  const skills = [
    { domain: <Logo domain="react.dev" alt="React" />, name: "React" },
    { domain: <Logo domain="vuejs.org" alt="Vue.js" />, name: "Vue.js" },
    { domain: <Logo domain="angular.io" alt="Angular" />, name: "Angular" },
    { domain: <Logo domain="nodejs.org" alt="Node.js" />, name: "Node.js" },
    { domain: <Logo domain="deno.land" alt="Deno" />, name: "Deno" },

    // Frameworks (pakai brand owner)
    { domain: <Logo domain="vercel.com" alt="Next.js" />, name: "Next.js" },
    { domain: <Logo domain="svelte.dev" alt="Svelte" />, name: "Svelte" },
    { domain: <Logo domain="vitejs.dev" alt="Vite" />, name: "Vite" },

    // UI
    { domain: <Logo domain="tailwindcss.com" alt="Tailwind CSS" />, name: "Tailwind CSS" },
    { domain: <Logo domain="getbootstrap.com" alt="Bootstrap" />, name: "Bootstrap" },
    { domain: <Logo domain="mui.com" alt="Material UI" />, name: "Material UI" },
    { domain: <Logo domain="antgroup.com" alt="Ant Design" />, name: "Ant Design" },

    // DevOps
    { domain: <Logo domain="docker.com" alt="Docker" />, name: "Docker" },
    { domain: <Logo domain="kubernetes.io" alt="Kubernetes" />, name: "Kubernetes" },

    // Cloud (WAJIB pakai brand)
    { domain: <Logo domain="amazon.com" alt="AWS" />, name: "AWS" },
    { domain: <Logo domain="google.com" alt="Google Cloud" />, name: "Google Cloud" },
    { domain: <Logo domain="microsoft.com" alt="Azure" />, name: "Azure" },

    // Database
    { domain: <Logo domain="mongodb.com" alt="MongoDB" />, name: "MongoDB" },
    { domain: <Logo domain="postgresql.org" alt="PostgreSQL" />, name: "PostgreSQL" },
    { domain: <Logo domain="mysql.com" alt="MySQL" />, name: "MySQL" },
    { domain: <Logo domain="redis.io" alt="Redis" />, name: "Redis" },
    { domain: <Logo domain="graphql.org" alt="GraphQL" />, name: "GraphQL" },

    // Tools
    { domain: <Logo domain="github.com" alt="GitHub" />, name: "GitHub" },
    { domain: <Logo domain="gitlab.com" alt="GitLab" />, name: "GitLab" },
    { domain: <Logo domain="figma.com" alt="Figma" />, name: "Figma" },


  ];
  return (
    <section ref={skillsRef} className="py-20 px-6 my-40">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Technical <span className="text-yellow-400">Skills</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-4 sm:grid-cols-6 grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-6">

              <div className="flex justify-between items-center mb-2">
                <span>{skill.domain}</span>
              </div>
              <div className="">
                <motion.div />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

