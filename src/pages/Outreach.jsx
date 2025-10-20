import React, { useState } from "react";

export default function Outreach() {
  const [openGroup, setOpenGroup] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const outreachProjects = [
    {
      title: "NextGEN Innovators Club",
      meta: "Founder & President | Sept 2024 – July 2025",
      image: "/images/nextgen/polaroid.jpg",
      description:
        "Founded and led a club teaching underserved students the engineering design process through hands-on bridge-building projects. Completed a seven-week after-school program with 16 students and expanded to multiple local schools.",
      tags: ["STEM Education", "Mentorship", "Engineering Design"],
      links: [{ label: "Curriculum", href: "/pdfs/NF.pdf" }],
      photoGroups: [
        {
          title: "Bridges Designed and Built by BEC Club Members",
          images: [
            { src: "/images/nextgen/BEC/B0.JPG", caption: "Design 1" },
            { src: "/images/nextgen/BEC/B1.JPG", caption: "Bridge 1" },
            { src: "/images/nextgen/BEC/B2.JPG", caption: "Design 2" },
            { src: "/images/nextgen/BEC/B3.JPG", caption: "Bridge 2" },
            { src: "/images/nextgen/BEC/B4.JPG", caption: "Design 3" },
            { src: "/images/nextgen/BEC/B5.JPG", caption: "Bridge 3" },
            { src: "/images/nextgen/BEC/B6.JPG", caption: "Design 4" },
            { src: "/images/nextgen/BEC/B7.JPG", caption: "Bridge 4" },
          ],
        },
        {
          title: "Bridges Designed and Built by Children",
          images: [
            { src: "/images/nextgen/ChT/C0.jpg", caption: "Design 1" },
            { src: "/images/nextgen/ChT/C1.jpg", caption: "Bridge 1" },
            { src: "/images/nextgen/ChT/C2.jpg", caption: "Test 1" },
            { src: "/images/nextgen/ChT/C3.jpg", caption: "Design and Bridge 2" },
            { src: "/images/nextgen/ChT/C4.JPG", caption: "Design and Bridge 3" },
          ],
        },
        {
          title: "Program Progress",
          images: [
            { src: "/images/nextgen/program/ID0.JPG", caption: "Initial Design 1" },
            { src: "/images/nextgen/program/IB1.JPG", caption: "Building Bridge 1" },
            { src: "/images/nextgen/program/B1.JPG", caption: "First Bridge 1" },
            { src: "/images/nextgen/program/BK0.png", caption: "Building Kit 1" },
            { src: "/images/nextgen/program/SB0.JPG", caption: "Second Bridge 1" },
            { src: "/images/nextgen/program/BT0.JPG", caption: "Testing Final Bridge 1" },
            { src: "/images/nextgen/program/BT12.JPG", caption: "Handing out Snacks :)" },
            { src: "/images/nextgen/program/BT13.JPG", caption: "Watching Sticker Making" },
          ],
        },
      ],
    },
    {
  title: "Startup Club at Foothill College",
  meta: "Co-Founder & Co-President | Jan 2025 – Jun 2025",
  image: "/images/startupclub/BAP.JPG",
  description:
    "Taught students the fundamentals of startups and innovation through workshops, founder talks, and pitch events. Organized two major events with 140+ attendees and led the Startup 101 workshop series guiding students from idea to MVP.",
  tags: ["Entrepreneurship", "Event Planning", "Student Leadership"],
  links: [{ label: "Workshop Series Flyers", href: "/pdfs/SWS.pdf" }],
  photoGroups: [
    {
      title: "Flyers and Events Organized by the Startup Club",
      images: [
        {
          src: "/images/startupclub/BAP.JPG",
          caption:
            "Startup Club and Business and Entrepreneurship Club Leaders at the Bay Angels Pitch Event",
        },
        {
          src: "/images/startupclub/BAP.png",
          caption: "Live startup pitches to Bay Area investors",
        },
        {
          src: "/images/startupclub/AGS.png",
          caption:
            "Student Founder Guest Speaker on their Educational System for Students with Autism",
        },
        {
          src: "/images/startupclub/LM.png",
          caption: "Collaboration with student-led venture builder",
        },
        {
          src: "/images/startupclub/S101.PNG",
          caption: "Startup 101 Workshop Series",
        },
      ],
    },
  ],
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
      title: "Dolma Ling Soup Kitchen Greenhouse Initiative",
      meta: "Founder & President | 2019 | ISU",
      image: "/images/greenhouse/fundraising/C0.jpg",
      description:
        "Founded a student club that raised funds for two greenhouses to provide sustainable produce for a local soup kitchen. Coordinated 11 volunteers, 293 donors, and full installation of irrigation and camera systems.",
      tags: ["Community Service", "Sustainability", "Leadership"],
      links: [
        { label: "Publication", href: "/pdfs/GH.pdf" },
      ],
      photoGroups: [
  {
    title: "Fundraising and Club",
    images: [
      {
        src: "/images/greenhouse/fundraising/C0.jpg",
        caption: "Club members creating handmade jewelry for fundraising",
      },
      {
        src: "/images/greenhouse/fundraising/C1.JPG",
        caption: "Jewelry materials",
      },
      {
        src: "/images/greenhouse/fundraising/C2.JPG",
        caption: "Sample receipt",
      },
      {
        src: "/images/greenhouse/fundraising/C4.JPG",
        caption:
          "Group photo with DLSK staff, school faculty, and our club members celebrating first harvest!",
      },
    ],
  },
  {
    title: "Building the Greenhouse",
    images: [
      { src: "/images/greenhouse/building/B0.jpg" },
      { src: "/images/greenhouse/building/B1.jpg" },
      { src: "/images/greenhouse/building/B2.jpg" },
    ],
  },
  {
    title: "Equipment",
    images: [
      {
        src: "/images/greenhouse/equipment/E0.jpg",
        caption: "Equipment to Plant Vegetables",
      },
      {
        src: "/images/greenhouse/equipment/E1.jpg",
        caption: "Camera for Security",
      },
      {
        src: "/images/greenhouse/equipment/E2.jpg",
        caption: "Camera System",
      },
      {
        src: "/images/greenhouse/equipment/E3.jpg",
        caption: "Watering System",
      },
    ],
  },
  {
    title: "Harvest",
    images: [
      { src: "/images/greenhouse/harvest/H1.jpeg" },
      { src: "/images/greenhouse/harvest/H2.jpeg" },
      { src: "/images/greenhouse/harvest/H3.jpeg" },
      { src: "/images/greenhouse/harvest/H4.jpeg" },
      { src: "/images/greenhouse/harvest/H5.jpeg" },
      { src: "/images/greenhouse/harvest/H6.jpg" },
      { src: "/images/greenhouse/harvest/H7.jpg" },
    ],
  },
  {
    title: "Serving",
    images: [
      {
        src: "/images/greenhouse/serving/S0.jpg",
        caption: "Vegetables",
      },
      {
        src: "/images/greenhouse/serving/S1.jpg",
        caption: "Salad",
      },
      {
        src: "/images/greenhouse/serving/S2.jpg",
        caption: "Serving the Food!",
      },
    ],
  },
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

            {/* Tags */}
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

            {/* Links */}
            <div className="flex flex-wrap gap-3 mb-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm font-semibold hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Optional Photo Groups (Only for NextGEN) */}
            {project.photoGroups && (
              <div>
                <button
                  onClick={() =>
                    setOpenGroup(openGroup === i ? null : i)
                  }
                  className="text-sm text-blue-600 font-semibold hover:underline mb-4"
                >
                  {openGroup === i ? "Hide Photos ▲" : "Show Photos ▼"}
                </button>

                {openGroup === i && (
                  <div className="space-y-8 mt-4">
                    {project.photoGroups.map((group, gIdx) => (
                      <div key={gIdx}>
                        <h4 className="text-lg font-semibold text-slate-700 mb-2">
                          {group.title}
                        </h4>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {group.images.map((img, j) => (
                            <figure key={j} className="text-center">
                              <img
                                src={img.src}
                                alt={img.caption}
                                onClick={() => setSelectedImage(img.src)} // 👈 open fullscreen
                                className="rounded-lg shadow-sm object-cover w-full h-48 cursor-pointer hover:opacity-80 transition"
                              />
                              <figcaption className="text-xs text-gray-500 mt-1">
                                {img.caption}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Fullscreen overlay viewer */}
    {selectedImage && (
      <div
        onClick={() => setSelectedImage(null)} // click anywhere to close
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
      >
        <img
          src={selectedImage}
          alt="Enlarged view"
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
        />
      </div>
    )}
  </section>
);

}
