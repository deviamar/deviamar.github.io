import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';


export default function Home() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-8 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src="/Devi_Headshot.jpg"
              alt="Devi"
              className="w-50 h-50 rounded-full border-2 border-gray-200 shadow-lg"
            />
          </div>

          <div className="text-left">
            <h1 className="text-3xl font-bold tracking-wider text-slate-700 mb-4">
              Hello!
            </h1>
            <div className="text-gray-700 max-w-xl">
              <p className="leading-7 text-base text-justify">
                I am Devi, a junior at UC Davis majoring in Computer Science and Engineering, planning to pursue a PhD in
                Robotics focused on perception, manipulation, and learning-based control.
              </p>
              <p className="leading-7 text-base mt-4 text-justify">
                My experience spans machine learning, computer vision, and simulation, centered on developing
                robotic systems that perceive and act in the real world.
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="mailto:devamar@ucdavis.edu"
                className="bg-gradient-to-br from-purple-500 to-purple-700 text-white w-11 h-11 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/devi-amarsaikhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-11 h-11 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/deviamar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-800 to-gray-900 text-white w-11 h-11 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Research & Featured Projects */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Research</h2>

          <div className="space-y-14">
            <ResearchRow
              image="/images/home/ALOHA.png"
              title="Laboratory for AI, Robotics, and Automation (LARA)"
              role="Undergraduate Researcher"
              org="UC Davis"
              dates="2025–present"
              links={[{ label: "", to: "/research" }]}
              desc="Contributing to the ALOHA bimanual manipulation and active vision platform by improving kinematics and low-latency WebRTC streaming, while supporting development of learning-based world models for mobile manipulation."
            />

            <ResearchRow
              image="/images/home/BiRH.png"
              title="Bio-Inspired Robotic Hand (BiRH)"
              role="Independent Research Project"
              org="Foothill College"
              dates="2024–25"
              award="Finalist (Top 20), Research & Service Leadership Symposium (RSLS)"
              links={[{ label: "Project Overview", to: "/research/birh" }, { label: "GitHub", to: "https://github.com/deviamar/BiRH" }]}
              desc="Conducted ablation studies on hand kinematics to quantify how reduced degrees of freedom constrain grasp feasibility, using MuJoCo simulation on a UR10e arm and an AHAP-inspired grasp taxonomy."
            />

            <ResearchRow
              image="/images/home/SCA.jpg"
              title="Elder Ally — Smart Gait Detection System"
              role="Health Technology Research Project"
              org="Foothill College"
              dates="2024–25"
              award="Judges Award (Top 5/164), Research & Service Leadership Symposium (RSLS)"
              links={[{ label: "Project Overview", to: "/research/pga" }, { label: "GitHub", to: "https://github.com/deviamar/predictive-gait-analysis/tree/main"}]}
              desc="Developed an IMU-based gait evaluation system to extract clinically meaningful mobility features, informed by clinical shadowing in acute rehabilitation."
            />
          </div>
        </section>

        {/* Current Involvements */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Technical Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <MiniCard
              title="Cyclone RoboSub: Vision Subteam Lead"
              desc="Implement vision-based perception pipelines for autonomous underwater navigation and build Unreal Engine-based synthetic data pipelines to evaluate robustness and support sim-to-real transfer in collaboration with the controls subteam."
              link="/research/cyclone.tsx"
            />
            <MiniCard
              title="NeuroTech: Project Manager"
              desc="Led design of an EEG-based control pipeline for navigation of a wheeled mobile robotic platform using SSVEP decoding and ML-based motor intent inference under real-time constraints."
              link="/research/neurotech.tsx"
            />
          </div>
        </section>

      </div>
    </div>
  );
}

function ResearchRow({image, title, role, org, dates, award, desc, links = [],}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
      {/* Image */}
      <div className="flex justify-start">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[220px] rounded-md object-cover"
        />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-slate-800 leading-snug">
          {title}
        </h3>

        {(role || org || dates) && (
          <p className="mt-1 text-sm text-gray-700">
            {role && <span className="font-medium">{role}</span>}
            {role && (org || dates) ? <span className="text-gray-400"> · </span> : null}
            {org && <span>{org}</span>}
            {org && dates ? <span className="text-gray-400"> · </span> : null}
            {dates && <span>{dates}</span>}
          </p>
        )}

        {/* Award highlight */}
        {award && (
          <p className="mt-2 text-sm font-medium text-amber-600">
            ⭐ {award}
          </p>
        )}

        {/* Links */}
        {links.length > 0 && (
          <p className="mt-2 text-sm text-blue-500">
            {links.map((l, i) => (
              <span key={`${l.label}-${i}`}>
                <Link to={l.to} className="hover:underline">
                  {l.label}
                </Link>
                {i < links.length - 1 && <span className="text-gray-400"> / </span>}
              </span>
            ))}
          </p>
        )}

        <p className="mt-3 text-sm text-gray-700 leading-relaxed max-w-2xl">
          {desc}
        </p>
      </div>
    </div>
  );
}



function MiniCard({ title, desc, link, linkLabel }) {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">{desc}</p>
      {link && (
        <div className="mt-4">
          {/* <Link to={link} className="text-blue-500 font-semibold hover:underline">
            {linkLabel || 'Learn more →'}
          </Link> */}
        </div>
      )}
    </div>
  );
}
