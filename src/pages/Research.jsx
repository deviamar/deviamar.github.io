import React from "react";

export default function Research() {
  const projects = [
    {
      title: "Bio-Inspired Robotic Hand",
      meta: "Research Project | 2024-25",
      image: "/images/home/BiRH.png",
      description:
        "Designing a tendon-driven robotic hand inspired by human biomechanics. Explored grasp stability, reachability, and tendon routing using MuJoCo simulation and 3D-printed prototypes.",
      tags: [
        "Robotics",
        "Bio-inspired Design",
        "CAD & 3D Printing",
        "MuJoCo Simulation",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/deviamar/BiRH" },
      ],
    },
    {
      title: "3D Object Reconstruction for Robot Grasping",
      meta: "Literature Review | 2025",
      image: "/images/home/3D.png",
      description:
        "Studied how computer vision can infer 3D shape and position for grasping tasks. Compared single-view, multi-view, and transfer-learning approaches to evaluate accuracy and shape fidelity.",
      tags: ["Computer Vision", "Literature Review"],
      links: [
        { label: "SSG Presentation", href: "/pdfs/SSG_CV.pdf" },
      ],
    },
    {
      title: "Elder Ally – Smart Gait Detection System",
      meta: "Health Technology | 2024-25",
      image: "/images/home/SCA.jpg",
      description:
        "Developed an Arduino- and IMU-based cane attachment to monitor gait parameters for early mobility-decline detection. Honored with Judges Award (Top 5) at Foothill’s Research Symposium.",
      tags: ["Health Tech", "Wearable Sensors", "IoT"],
      links: [
        { label: "Website", href: "https://elder-ally.org" },
      ],
    },
    {
      title: "Exploring Lattice-Point Geometry",
      meta: "Advanced Math Seminar | 2023",
      image: "/images/LPG.png",
      description:
        "Proved theorems such as Pick’s, Blichfeldt’s, and Minkowski’s using techniques from linear algebra and number theory, deepening understanding of geometry of numbers.",
      tags: ["Mathematics", "Proof Writing", "LaTeX"],
      links: [{ label: "Portfolio", href: "/pdfs/LPG.pdf" }],
    },
  ];

  return (
    <section className="pt-32 pb-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-800 mb-6 text-center">
        Research Projects
      </h2>
      <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
        These projects have taught me to identify meaningful problems, build on
        existing research, and design and test solutions through iterative
        experimentation. They’ve also strengthened my ability to seek mentorship,
        collaborate across disciplines, and navigate ambiguity through hands-on
        research and innovation.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border hover:-translate-y-1 transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{project.meta}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-blue-500 text-sm font-semibold hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

