/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const showSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  const projects = [
    {
      title: "Bio-Inspired Robotic Hand",
      meta: "Research Project | 2024",
      description: "Developed a bio-inspired robotic hand that mimics human finger movements and grip patterns. The project involved biomechanical analysis, actuator design, and control system implementation using machine learning algorithms for adaptive grasping.",
      tags: ["Robotics", "Bio-inspired Design", "CAD and 3D Printing", "MuJoCo Simulation"],
      links: [
        { label: "Paper"},
        { label: "Research Process"},
        { label: "Demo Video"},
        { label: "Code"}
      ]
    },
    {
      title: "Smart Gait Detection System",
      meta: "Health Technology | 2024",
      description: "Designed and implemented a wearable sensor system for real-time gait analysis and movement pattern detection. The system uses IoT sensors and machine learning to provide insights for rehabilitation and health monitoring applications.",
      tags: ["Health Tech", "IoT", "Signal Processing", "Wearable Sensors"],
      links: [
        { label: "Publication"},
        { label: "Dataset"},
        { label: "GitHub"}
      ]
    }
  ];

  const outreachProjects = [
    {
      title: "NextGEN Innovators Club",
      meta: "Founder & President | Sept 2024 – July 2025",
      description: [
        "Founded and lead a club dedicated to teaching underrepresented students the engineering design process through hands-on bridge-building projects. Successfully completed a 7-week after-school program with 16 students at Gabriela Mistral Elementary School.",
        "Impact & Growth: Recruited new leadership team and officers, currently expanding to additional local schools to reach more underserved youth and inspire the next generation of engineers and innovators."
      ],
      tags: ["STEM Education", "Community Outreach", "Engineering Design", "Program Development"],
      links: [
        { label: "Photos"},
        { label: "Curriculum"}
      ]
    },
    {
      title: "Startup Club at Foothill College",
      meta: "Co-Founder & Co-President | Jan 2025 – June 2025",
      description: [
        "Co-founded and lead a startup club to help students transform technical ideas into viable ventures. Organized two major pitch events featuring startup founders and venture capitalists, attracting 140+ attendees and creating valuable networking opportunities.",
        "Programs & Impact: Lead comprehensive Startup Workshop series guiding students from initial ideation through MVP development. Actively support Innovation Challenge outreach through presentations, campus tabling, and classroom engagement."
      ],
      tags: ["Entrepreneurship", "Event Planning", "Workshop Development", "Student Leadership"],
      links: [
        { label: "Event Photos"},
        { label: "Workshop Materials"}
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
          <div 
            className="text-xl font-bold text-slate-700 cursor-pointer"
            onClick={() => showSection('home')}
          >
            Devi Amarsaikhan
          </div>
          <ul className="flex gap-8">
            {['home', 'research', 'outreach'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => showSection(section)}
                  className={`font-medium transition-colors duration-300 capitalize ${
                    activeSection === section 
                      ? 'text-blue-500' 
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-8">
          <div className="max-w-5xl w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[70vh] max-w-4xl mx-auto">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img 
                  src="/Devi_Headshot.jpg" 
                  alt="Devi's headshot" 
                  className="w-44 h-44 rounded-full object-cover border-4 border-gray-200 shadow-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-left lg:text-left text-center">
                <h1 className="text-4xl font-bold text-slate-700 mb-1 leading-tight">
                  Devi Amarsaikhan
                </h1>
                <p className="text-lg text-blue-500 mb-5 font-medium">
                  Robotics Researcher & Entrepreneur
                </p>
                
                {/* Social Icons */}
                <div className="flex gap-4 mb-8 justify-center lg:justify-start">
                  <a 
                    href="mailto:devamar@ucdavis.edu" 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/devi-amarsaikhan/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                {/* Description */}
                <div className="space-y-6 text-lg leading-relaxed text-gray-600 mb-4">
                  <p>
                    Undergraduate student passionate about robotics research, entrepreneurship, and building real-world tools that improve lives.
                  </p>
                  <p>
                    Over the past year, I've led projects like a bio-inspired robotic hand and a smart cane attachment that analyzes gait, earning a Judges Award at my college's research symposium. These projects challenged me to figure out the research and development process from the ground up: identifying meaningful problems, designing and prototyping solutions, integrating sensors, and iterating based on user needs. Along the way, I learned how to build connections, find mentors, and take initiative even without formal lab affiliation.
                  </p>
                  <p>
                    I'm currently diving deeper into computer vision and dexterous manipulation, and I'm eager to collaborate with research labs, faculty, or startups at the intersection of robotics, healthcare, and embedded systems.
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                  <button
                    onClick={() => showSection('research')}
                    className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    View Research
                  </button>
                  <button
                    onClick={() => showSection('outreach')}
                    className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
                  >
                    My Outreach
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Research Section */}
      {activeSection === 'research' && (
        <section className="min-h-screen pt-24 pb-12 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-700 mb-4">Research Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Exploring the intersection of biology, robotics, and technology
              </p>
            </div>
            
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl max-w-3xl mx-auto">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-700 mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{project.meta}</p>
                  </div>
                  <p className="leading-relaxed mb-6 text-left">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, linkIndex) => (
                      <a key={linkIndex} href={link.href} className="text-blue-500 font-semibold text-sm hover:underline">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outreach Section */}
      {activeSection === 'outreach' && (
        <section className="min-h-screen pt-24 pb-12 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-700 mb-4">Outreach & Mentorship</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sharing knowledge and inspiring the next generation of innovators
              </p>
            </div>
            
            <div className="space-y-8">
              {outreachProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl max-w-3xl mx-auto">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-700 mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{project.meta}</p>
                  </div>
                  <div className="space-y-4 mb-6 text-left">
                    {project.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, linkIndex) => (
                      <a key={linkIndex} href={link.href} className="text-blue-500 font-semibold text-sm hover:underline">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default App;
