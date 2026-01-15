import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function MainPage() {
  return (
    <div className="max-w-2xl w-full" data-aos="fade-up">
      <p className="text-sm font-medium text-gray-500 mb-3">Hi, I'm</p>
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
        Nara Developer
      </h1>
      <p className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">
        Full-stack developer specializing in modern web applications, 
        APIs, and cloud deployments.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
        >
          View Projects
          <ArrowRight size={18} />
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          Contact Me
        </button>
      </div>

      <div className="flex gap-3">
        <a href="#" className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Github size={20} className="text-gray-700" />
        </a>
        <a href="#" className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Linkedin size={20} className="text-gray-700" />
        </a>
        <a href="#" className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Mail size={20} className="text-gray-700" />
        </a>
      </div>
    </div>
  );
}