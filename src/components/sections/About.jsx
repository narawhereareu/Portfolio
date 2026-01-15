export default function About() {
  const skills = ['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Express', 'Docker', 'AWS'];

  return (
    <div className="max-w-2xl w-full" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <p className="text-gray-700 leading-relaxed mb-6">
          I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. 
          I love turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
        
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {skills.map((skill) => (
            <div key={skill} className="border border-gray-200 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}