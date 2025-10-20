import React from "react";

export default function Outreach() {
  const outreachProjects = [
    {
      title: "NextGEN Innovators Club",
      meta: "Founder & President | Sept 2024 – July 2025",
      image: "/images/nextgen.jpg",
      description:
        "Founded and led a club teaching underserved students the engineering design process through hands-on bridge-building projects. Completed a seven-week after-school program with 16 students and expanded to multiple local schools.",
      tags: ["STEM Education", "Mentorship", "Engineering Design"],
      links: [{ label: "Curriculum", href: "/pdfs/NF.pdf" }],
    },
    {
      title: "B-KOA STEM Outreach Nonprofit",
      meta: "Board Member & Treasurer | Apr 2025 – Present",
      image: "/images/bkoa.jpg",
      description:
        "Serve on the Bay Area branch of JKOA to develop accessible STEM curricula for elementary students. Support program design, financial management, and community partnerships to expand outreach across schools.",
      tags: ["STEM Education", "Program Development", "Nonprofit Leadership"],
      links: [
        { label: "Brochure", href: "/pdfs/JKOA-B.pdf" },
        { label: "Origin Doc", href: "/pdfs/JKOA-O.pdf" },
      ],
    },
    {
      title: "Startup Club at Foothill College",
      meta: "Co-Founder & Co-President | Jan 2025 – Jun 2025",
      image: "/images/startupclub.jpg",
      description:
        "Co-founded and led a student startup club connecting technical innovation with entrepreneurship. Organized two major pitch events with 140+ attendees and ran the Startup 101 workshop series guiding students from ideation to MVP.",
      tags: ["Entrepreneurship", "Event Planning", "Student Leadership"],
      links: [{ label: "Workshop Series Flyers", href: "/pdfs/SWS.pdf" }],
    },
    {
      title: "Dolma Ling Soup Kitchen Greenhouse Initiative",
      meta: "Founder & President | 2019 | ISU",
      image: "/images/greenhouse.jpg",
      description:
        "Founded a student club that raised funds for two greenhouses to provide sustainable produce for a local soup kitchen. Coordinated 11 volunteers, 293 donors, and full installation of irrigation and camera systems.",
      tags: ["Community Service", "Sustainability", "Leadership"],
      links: [
        { label: "Publication", href: "/pdfs/GH.pdf" },
      ],
    },
  ];

  return (
    <section className="pt-32 pb-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-800 mb-6 text-center">
        Outreach & Mentorship
      </h2>
      <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
        Sharing knowledge and inspiring the next generation of innovators.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {outreachProjects.map((project, i) => (
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

