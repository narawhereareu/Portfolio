import { useState } from "react";
import { X, BookOpen, Code, Rocket } from "lucide-react";


export default function About() {
  const [showModal, setShowModal] = useState(false);
  
  const skills = ['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Express', 'Docker', 'AWS'];

  return (
    <>
      <div className="max-w-6xl w-full" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I'm a self-taught full-stack developer passionate about creating beautiful and functional web applications. 
            My journey into programming started from curiosity and turned into a deep love for solving problems through code.
          </p>
          
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2.5 border-2 border-gray-900 text-gray-900 
            rounded-lg hover:bg-gray-900 hover:text-white transition-all font-medium inline-flex items-center gap-2 mb-6"
          >
            <BookOpen size={18} />
            Read My Full Story
          </button>
          
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {skills.map((skill) => (
              <div key={skill} className="border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Introduction */}
              <div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">From Curiosity to Code</h4>
                <p className="text-gray-700 leading-relaxed">
                  I didn't start with a Computer Science degree, but that never stopped me. My background is in [Your Original Field], 
                  but I discovered programming through [how you discovered it - online course/friend/project]. 
                  What started as a simple curiosity quickly became an obsession.
                </p>
              </div>

              {/* Learning Journey */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <BookOpen size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Self-Learning Path</h4>
                    <p className="text-gray-700 leading-relaxed">
                      I taught myself through online courses, documentation, and countless hours of building projects. 
                      Platforms like YouTube, freeCodeCamp, and official docs became my university. 
                      Every error message was a lesson, every bug was a teacher.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Development */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <Code size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Building Real Projects</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Instead of just following tutorials, I challenged myself with real-world projects:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>Built my first website after 3 months of learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>Created a full-stack e-commerce platform as a learning project</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>Contributed to open-source projects to learn from experienced developers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg border border-gray-200">
                    <Rocket size={24} className="text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Where I Am Now</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Today, I'm proud to call myself a full-stack developer. I've worked on [number] projects, 
                      learned [number] technologies, and I'm constantly pushing myself to grow. 
                      My non-traditional background gives me a unique perspective - I solve problems differently, 
                      and I never take my skills for granted.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="border-l-4 border-black pl-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "You don't need a degree to code. You need curiosity, dedication, and the willingness to fail and learn. 
                  Every day, I prove that to myself."
                </p>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <p className="text-gray-600 mb-4">Want to work together?</p>
                <button
                  onClick={() => {
                    setShowModal(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


// export default function About() {
//   const skills = ['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Express', 'Docker', 'AWS'];

//   return (
//     <div className="max-w-6xl w-full" data-aos="fade-up">
//       <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
//       <div className="bg-white rounded-xl border border-gray-200 p-8">
//         <p className="text-gray-700 text-lg leading-relaxed mb-6">
//           I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. 
//           I love turning complex problems into simple, beautiful, and intuitive solutions.
//         </p>
        
//         <h3 className="text-lg font-semibold mb-4 text-gray-900">Skills</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
//           {skills.map((skill) => (
//             <div key={skill} className="border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }