import React from "react";

export default function Awards() {
  const awards = [
    {
      title: "AI Coding Agents Hackathon @ Y Combinator",
      meta: "Finalist & Track Winner | 2025",
      image: "/images/yc-hackathon-team.jpg",
      description:
        "Built FitForm Fitness — a wearable + computer vision system that provides real-time form feedback to improve athletic performance and prevent injury. Pitched live at Y Combinator and won Best Use of Same.new.",
      tags: ["Computer Vision", "Wearable Tech", "Arduino", "Hackathon"],
      links: [
        {
          label: "LinkedIn Recap",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7360747136486944768/",
        },
      ],
    },
    {
      title: "Elder Ally – Judges Award (Top 5 / 164 Projects)",
      meta: "Assistive Technology | 2024-25",
      image: "/images/elder-ally.jpg",
      description:
        "Smart mobility attachment for canes and walkers recognized for innovation at Foothill’s Research & Service Leadership Symposium. Combines LiDAR and IMU sensing for gait analysis and obstacle detection.",
      tags: [
        "Assistive Tech",
        "Embedded Systems",
        "Sensor Integration",
        "Human-Centered Design",
      ],
      links: [{ label: "Website", href: "https://elder-ally.org" }],
    },
    {
      title: "Research & Service Leadership Symposium Finalist",
      meta: "Research Project | 2024-25",
      image: "/images/rsls.jpg",
      description:
        "Recognized for the Bio-Inspired Robotic Hand project, exploring simplified yet capable underactuated designs through CAD and MuJoCo simulation.",
      tags: ["Robotics", "Bio-Inspired Design", "Simulation"],
      links: [
        { label: "Paper", href: "/pdfs/BiRH.pdf" },
        { label: "GitHub", href: "https://github.com/deviamar/BiRH" },
      ],
    },
  ];

  return (
    <section className="pt-32 pb-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-800 mb-6 text-center">
        Awards & Recognition
      </h2>
      <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
        Celebrating milestones that highlight innovation and impact.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {awards.map((award, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border hover:-translate-y-1 transition-all"
          >
            <img
              src={award.image}
              alt={award.title}
              className="h-56 w-full object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-1">
                {award.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{award.meta}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {award.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {award.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {award.links.map((link) => (
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

