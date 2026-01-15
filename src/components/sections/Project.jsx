import { ExternalLink, Github } from "lucide-react";

export default function Project() {
  const projects = [
    { 
      title: "E-Commerce Platform", 
      desc: "Full-stack shopping application with payment integration", 
      tech: "React, Node.js, MongoDB",
      github: "#",
      demo: "#"
    },
    { 
      title: "Task Manager Pro", 
      desc: "Collaborative task management with real-time updates", 
      tech: "Vue, Firebase, Tailwind",
      github: "#",
      demo: "#"
    },
    { 
      title: "Weather Dashboard", 
      desc: "Real-time weather data visualization", 
      tech: "React, D3.js, API",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="max-w-4xl w-full" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-all" 
            data-aos="fade-up" 
            data-aos-delay={i * 100}
          >
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{project.title}</h3>
            <p className="text-gray-600 mb-3 text-sm">{project.desc}</p>
            <p className="text-xs text-gray-500 mb-4">{project.tech}</p>
            
            <div className="flex gap-3">
              <a 
                href={project.github} 
                className="flex items-center gap-1.5 text-gray-700 hover:text-black font-medium text-sm transition-colors"
              >
                <Github size={16} /> Code
              </a>
              <a 
                href={project.demo} 
                className="flex items-center gap-1.5 text-gray-700 hover:text-black font-medium text-sm transition-colors"
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}