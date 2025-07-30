/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showPhotos, setShowPhotos] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  
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
        { label: "Paper", href: null },
        { label: "Research Process", href: null },
        { label: "Demo Video", href: null },
        { label: "Code", href: null }
      ]
    },
    {
      title: "Smart Gait Detection System",
      meta: "Health Technology | 2024",
      description: "Designed and implemented a wearable sensor system for real-time gait analysis and movement pattern detection. The system uses IoT sensors and machine learning to provide insights for rehabilitation and health monitoring applications.",
      tags: ["Health Tech", "IoT", "Signal Processing", "Wearable Sensors"],
      links: [
        { label: "Website", href: "https://superb-squirrel-498e3c.netlify.app/#features" }
      ]
    },
    {
      title: "Exploring Lattice Point Geometry",
      meta: "Advanced Math Seminar | 2023 | Stanford Online High School",
      description: "In this seminar style mathematics class (now called the Geometry of Numbers), we explored foundational properties of lattice point geometry using tools from linear algebra, number theory, graph theory, and abstract algebra. I wrote rigorous proofs for theorems such as Pick’s Theorem (using three distinct methods), Blichfeldt’s Theorem, and Minkowski’s Theorem, and more. This work deepened my appreciation for the surprising ways seemingly disparate fields of mathematics intersect. My portfolio includes original proofs and solutions developed throughout the course.",
      tags: ["Mathematics", "Writing Rigorous Proofs", "Latex"],
      links: [
        { label: "Portfolio", href: "/pdfs/LPG.pdf" }
      ]
    },
    {
      title: "Mathematical Modeling of the Outer Ear",
      meta: "IB Mathematics HL Internal Assessment | 2020 | ISU",
      description: "For my IB Internal Assessment, I investigated how effectively the outer ear reflects sound waves into the ear canal. I designed my own methodology by sculpting a clay model of my ear, slicing it into horizontal and vertical cross sections, and graphing its surface to approximate the geometry. I modeled sound as planar waves and applied the Law of Reflection to analyze their paths. Since the focus of the project was mathematics, I completed all calculations by hand, limiting the scope to 12 rays at two incident angles. At the time, I was in 9th grade and had studied math up to Calculus I. To extend the analysis, I independently learned concepts from linear algebra and multivariable calculus through YouTube and Khan Academy.",
      tags: ["Math modeling"],
      links: [
        { label: "Paper", href: "/pdfs/IA.pdf" }
      ]
    },
    {
      title: "Quantum Physics: My First Dive into Physics",
      meta: "Genius Hour Project | 2017 | ISU",
      description: "I independently researched and wrote a 16-page paper exploring some of the most fascinating ideas in physics, from wave–particle duality and entanglement to time travel and the multiverse. While there were fundamental misunderstandings I’ve since corrected, the excitement of diving into these concepts and finding real-world analogies to make sense of them stayed with me. This project sparked a lifelong curiosity about physics and gave me early practice in reading scientific material and communicating complex ideas through writing.",
      tags: ["Quantum Physics", "Independent Learning", "Science Communication"],
      links: [
        { label: "Paper", href: "/pdfs/QP.pdf" },
        { label: "Special Relativity HW", href: "/pdfs/SR.pdf" },
        { label: "Quantum Mechanics HW", href: "/pdfs/QM.pdf" }
      ]
    }
  ];

  const outreachProjects = [
    {
      title: "BKOA: STEM Outreach Nonprofit",
      meta: "Board Member & Treasurer | Apr 2025 – Present",
      description: [
        "We are the Bay Area branch of JKOA, a nonprofit dedicated to empowering students from underrepresented backgrounds to pursue and thrive in STEM. Building on my experience as founder and president of NextGEN Innovators, I serve on B-Koa’s board to help shape its outreach strategy, develop engaging curriculum for elementary students, and plan community events. I’ve worked closely with the team to design this year’s plan, create fun, accessible STEM activities, and expand B-Koa’s network by connecting it with educators and mentors I met through my earlier outreach efforts. In addition to my board responsibilities, I support the organization as treasurer by maintaining accurate records of all expenses and purchases.",
      ],
      tags: ["STEM Education", "Community Outreach", "Program Development"],
      links: [
        { label: "JKOA Origin", href: "/pdfs/JKOA-O.pdf" },
        { label: "Brochure", href: "/pdfs/JKOA-B.pdf" }
      ]
    },
    {
      title: "NextGEN Innovators Club",
      meta: "Founder & President | Sept 2024 – July 2025",
      description: [
        "Founded and lead a club dedicated to teaching underrepresented students the engineering design process through hands-on bridge-building projects. Successfully completed a 7-week after-school program with 16 students at Gabriela Mistral Elementary School.",
        "Impact & Growth: Recruited new leadership team and officers, currently expanding to additional local schools to reach more underserved youth and inspire the next generation of engineers and innovators."
      ],
      tags: ["STEM Education", "Community Outreach", "Engineering Design", "Program Development"],
      photoGroups: [
        {
          title: "Bridges Designed and Built by BEC Club Members",
          images: [
            {
              src: "/images/nextgen/BEC/B0.JPG",
              caption: "Design 1"
            },
            {
              src: "/images/nextgen/BEC/B1.JPG",
              caption: "Bridge 1"
            },
            {
              src: "/images/nextgen/BEC/B2.JPG",
              caption: "Design 2"
            },
            {
              src: "/images/nextgen/BEC/B3.JPG",
              caption: "Bridge 2"
            },
            {
              src: "/images/nextgen/BEC/B4.JPG",
              caption: "Design 3"
            },
            {
              src: "/images/nextgen/BEC/B5.JPG",
              caption: "Bridge 3"
            },
            {
              src: "/images/nextgen/BEC/B6.JPG",
              caption: "Design 4"
            },
            {
              src: "/images/nextgen/BEC/B7.JPG",
              caption: "Bridge 4"
            }
          ]
        },
        {
          title: "Bridges Designed and Built by Children",
          images: [
            {
              src: "/images/nextgen/ChT/C0.jpg",
              caption: "Design 1"
            },
            {
              src: "/images/nextgen/ChT/C1.jpg",
              caption: "Bridge 1"
            },
            {
              src: "/images/nextgen/ChT/C2.jpg",
              caption: "Test 1"
            },
            {
              src: "/images/nextgen/ChT/C3.jpg",
              caption: "Design and Bridge 2"
            },
            {
              src: "/images/nextgen/ChT/C4.JPG",
              caption: "Design and Bridge 3"
            }
          ]
        },
        {
          title: "Program",
          images: [
            {
              src: "/images/nextgen/program/ID0.JPG",
              caption: "Initial Design 1"
            },
            {
              src: "/images/nextgen/program/ID1.JPG",
              caption: "Initial Design 2"
            },
            {
              src: "/images/nextgen/program/ID2.JPG",
              caption: "Initial Design 3"
            },
            {
              src: "/images/nextgen/program/ID3.JPG",
              caption: "Initial Design 4"
            },
            {
              src: "/images/nextgen/program/IB1.JPG",
              caption: "Building Bridge 1"
            },
            {
              src: "/images/nextgen/program/IB2.JPG",
              caption: "Building Bridge 2"
            },
            {
              src: "/images/nextgen/program/IB3.JPG",
              caption: "Building Bridge 3"
            },
            {
              src: "/images/nextgen/program/IB4.JPG",
              caption: "Building Bridge 4"
            },
            {
              src: "/images/nextgen/program/B1.JPG",
              caption: "First Bridge 1"
            },
            {
              src: "/images/nextgen/program/B2.JPG",
              caption: "First Bridge 2"
            },
            {
              src: "/images/nextgen/program/B3.JPG",
              caption: "First Bridge 3"
            },
            {
              src: "/images/nextgen/program/B4.JPG",
              caption: "First Bridge 4"
            },
            {
              src: "/images/nextgen/program/BK0.png",
              caption: "Building Bridge Kit 1"
            },
            {
              src: "/images/nextgen/program/BK1.png",
              caption: "Building Bridge Kit 2"
            },
            {
              src: "/images/nextgen/program/BK2.png",
              caption: "Building Bridge Kit 3"
            },
            {
              src: "/images/nextgen/program/BK3.png",
              caption: "Building Bridge Kit 4"
            },
            {
              src: "/images/nextgen/program/SB0.JPG",
              caption: "Second Bridge 1"
            },
            {
              src: "/images/nextgen/program/SB1.JPG",
              caption: "Second Bridge 2"
            },
            {
              src: "/images/nextgen/program/SB2.JPG",
              caption: "Second Bridge 3"
            },
            {
              src: "/images/nextgen/program/SB3.JPG",
              caption: "Second Bridge 4"
            },
            {
              src: "/images/nextgen/program/SB4.JPG",
              caption: "Second Bridge 3"
            },
            {
              src: "/images/nextgen/program/SB5.JPG",
              caption: "Second Bridge 4"
            },
            {
              src: "/images/nextgen/program/BT0.JPG",
              caption: "Testing Final Bridge 1"
            },
            {
              src: "/images/nextgen/program/BT1.JPG",
              caption: "Testing Final Bridge 1"
            },
            {
              src: "/images/nextgen/program/BT2.JPG",
              caption: "Testing Final Bridge 2"
            },
            {
              src: "/images/nextgen/program/BT3.JPG",
              caption: "Testing Final Bridge 2"
            },
            {
              src: "/images/nextgen/program/BT4.JPG",
              caption: "Testing Final Bridge 3"
            },
            {
              src: "/images/nextgen/program/BT5.JPG",
              caption: "Testing Final Bridge 3"
            },
            {
              src: "/images/nextgen/program/BT6.JPG",
              caption: "Testing Final Bridge 3"
            },
            {
              src: "/images/nextgen/program/BT7.JPG",
              caption: "Testing Final Bridge 3"
            },
            {
              src: "/images/nextgen/program/BT8.JPG",
              caption: "Testing Final Bridge 4"
            },
            {
              src: "/images/nextgen/program/BT9.JPG",
              caption: "Testing Final Bridge 4"
            },
            {
              src: "/images/nextgen/program/BT10.JPG",
              caption: "Testing Final Bridge 4"
            },
            {
              src: "/images/nextgen/program/BT11.JPG",
              caption: "Testing Final Bridge 4"
            },
            {
              src: "/images/nextgen/program/BT12.JPG",
              caption: "Handing out Snacks :)"
            },
            {
              src: "/images/nextgen/program/BT13.JPG",
              caption: "Watching Sticker Making Process"
            }
          ]
        }
      ],
      links: [
        { label: "Curriculum", href: "/pdfs/NF.pdf" },
        { label: "Photos", href: "toggle-photos" }
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
      photoGroups: [
        {
          title: "Flyers and Events Organized by the Startup Club",
          images: [
            {
              src: "/images/startupclub/BAP.JPG",
              caption: "Startup Club and Business and Entrepreneurship Club Leaders at the Bay Angels Pitch Event"
            },
            {
              src: "/images/startupclub/BAP.png",
              caption: "Live startup pitches to Bay Area investors"
            },
            {
              src: "/images/startupclub/AGS.png",
              caption: "Student Founder Guest Speaker on their Educational System for Students with Autism"
            },
            {
              src: "/images/startupclub/LM.png",
              caption: "Collaboration with student-led venture builder"
            },
            {
              src: "/images/startupclub/S101.PNG",
              caption: "Startup 101 Workshop Series"
            }
          ]
        }
      ],
      links: [
        { label: "Startup Workshop Series Flyers", href: "/pdfs/SWS.pdf" },
        { label: "Photos", href: "toggle-photos" }
      ]
    },
    {
      title: "Dolma Ling Soup Kitchen Greenhouse Initiative",
      meta: "Founder & President | 2019 | ISU",
      description: [
        "Volunteered weekly at Dolma Ling Soup Kitchen (DLSK), which provides warm meals six days a week, free medical checkups, winter clothing, and holiday gifts for the homeless community. Moved by the stories I heard, I wanted to offer more lasting support. I founded a school club and led 11 members in making handmade jewelry to sell at school events. With the support of 293 donors, we raised enough in six months to purchase two greenhouses, a water system, camera, seedlings, and all necessary equipment—providing DLSK with a sustainable source of vegetables and income to increase their self-sufficiency year-round.",
        "See photos of our club members, the equipment we funded, the greenhouse installation, and the vegetables grown."
      ],
      tags: ["Fundraising", "Community Service", "Sustainability", "Student Leadership"],
      photoGroups: [
        {
          title: "Fundraising and Club",
          images: [
            {
              src: "/images/greenhouse/fundraising/C0.jpg",
              caption: "Club members creating handmade jewelry for fundraising"
            },
            {
              src: "/images/greenhouse/fundraising/C1.JPG",
              caption: "Jewelry materials"
            },
            {
              src: "/images/greenhouse/fundraising/C2.JPG",
              caption: "Sample receipt"
            },
            {
              src: "/images/greenhouse/fundraising/C4.JPG",
              caption: "Group photo with DLSK staff, school faculty, and our club members celebrating first harvest!"
            }
          ]
        },
        {
          title: "Building the Greenhouse",
          images: [
            {
              src: "/images/greenhouse/building/B0.jpg"
            },
            {
              src: "/images/greenhouse/building/B1.jpg"
            },
            {
              src: "/images/greenhouse/building/B2.jpg"
            }
          ]
        },
        {
          title: "Equipment",
          images: [
            {
              src: "/images/greenhouse/equipment/E0.jpg",
              caption: "Equipment to Plant Vegetables"
            },
            {
              src: "/images/greenhouse/equipment/E1.jpg",
              caption: "Camera for Security"
            },
            {
              src: "/images/greenhouse/equipment/E2.jpg",
              caption: "Camera System"
            },
            {
              src: "/images/greenhouse/equipment/E3.jpg",
              caption: "Watering System"
            }
          ]
        },
        {
          title: "Harvest",
          images: [
            {
              src: "/images/greenhouse/harvest/H1.jpeg"
            },
            {
              src: "/images/greenhouse/harvest/H2.jpeg"
            },
            {
              src: "/images/greenhouse/harvest/H3.jpeg"
            },
            {
              src: "/images/greenhouse/harvest/H4.jpeg"
            },
            {
              src: "/images/greenhouse/harvest/H5.jpeg"
            },
            {
              src: "/images/greenhouse/harvest/H6.jpg"
            },
            {
              src: "/images/greenhouse/harvest/H7.jpg"
            }
          ]
        },
        {
          title: "Serving",
          images: [
            {
              src: "/images/greenhouse/serving/S0.jpg",
              caption: "Vegetables"
            },
            {
              src: "/images/greenhouse/serving/S1.jpg",
              caption: "Salad"
            },
            {
              src: "/images/greenhouse/serving/S2.jpg",
              caption: "Serving the Food!"
            }
          ]
        }
      ],
      links: [
        { label: "Journal Publication", href: "/pdfs/GH.pdf" },
        { label: "Photos", href: "toggle-photos" }
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
                    href="https://github.com/deviamar"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                      link.href ? (
                        <a key={linkIndex} href={link.href} className="text-blue-500 font-semibold text-sm hover:underline">
                          {link.label}
                        </a>
                      ) : (
                        <span key={linkIndex} className="text-gray-400 font-semibold text-sm">
                          {link.label}
                        </span>
                      )
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
                      link.href === "toggle-photos" ? (
                        <button
                          key={linkIndex}
                          onClick={() => setShowPhotos(prev => ({
                            ...prev,
                            [index]: !prev[index]
                          }))}
                          className="text-blue-500 font-semibold text-sm hover:underline cursor-pointer"
                        >
                      {showPhotos[index] ? "Hide Photos" : "Show Photos"}
                      </button>
                    ) : link.href ? (
                      <a key={linkIndex} href={link.href} className="text-blue-500 font-semibold text-sm hover:underline">
                        {link.label}
                      </a>
                    ) : (
                      <span key={linkIndex} className="text-gray-400 font-semibold text-sm">
                        {link.label}
                      </span>
                    )
                    ))}
                  </div>

                {/* Add photo gallery display */}
                {showPhotos[index] && project.photoGroups && (
                  <div className="mt-6 space-y-6">
                    {project.photoGroups.map((group, groupIndex) => (
                      <div key={groupIndex}>
                        <h4 className="text-lg font-semibold text-slate-700 mb-3">{group.title}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {group.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="bg-gray-50 rounded-lg p-4">
                              <img 
                                src={image.src} 
                                alt={image.caption}
                                className="w-full h-48 object-cover rounded-lg mb-2 cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() => setSelectedImage(image)}
                              />
                              <p className="text-sm text-gray-600 text-center">{image.caption}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                  {/* Image Modal */}
                  {selectedImage && (
                    <div 
                      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                      onClick={() => setSelectedImage(null)}
                    >
                      <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
                        <img 
                          src={selectedImage.src} 
                          alt={selectedImage.caption}
                          className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <div className="p-4">
                          <p className="text-center text-gray-700">{selectedImage.caption}</p>
                          <button 
                            onClick={() => setSelectedImage(null)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                    
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
