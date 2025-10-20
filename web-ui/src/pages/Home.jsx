import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Home() {
  return (
    <section className="pt-32 pb-24 px-8 text-gray-700">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src="/Devi_Headshot.jpg"
          alt="Devi"
          className="w-40 h-40 mx-auto rounded-full border-4 border-gray-200 shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-slate-800">Devi Amarsaikhan</h1>
        <p className="text-lg text-blue-500 font-semibold mb-8">
          Robotics Researcher & Entrepreneur
        </p>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
          My favorite childhood activity was exploring the world around me — whether marveling at
          the rainbow patterns of a crystal swan figurine or observing ants to decipher their
          navigational techniques. Through classes, I discovered physics as my way to understand
          how the world works, and mathematics as my framework to define and communicate those
          ideas precisely.
        </p>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
          I’m fascinated by how we can quantitatively express concepts that seem to defy numerical
          representation. A picture becomes an array of RGB values, an object becomes a 3D point
          cloud, and a person’s risk of falling becomes variations in their gait parameters. After
          years of learning to model the world through math and physics, I’m now exploring how these
          principles converge in <span className="font-semibold">robotic manipulation, perception,
          simulation, and embedded systems</span> — to design and control intelligent robotic
          systems that interact with the real world.
        </p>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-14">
          <a
            href="mailto:devamar@ucdavis.edu"
            className="bg-gradient-to-br from-purple-500 to-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/devi-amarsaikhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/deviamar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Snapshot Sections */}
        <SnapshotSection
          title="Research Highlights"
          items={[
            { title: 'Bio-Inspired Robotic Hand', desc: 'Designing a tendon-driven hand for adaptive manipulation.' },
            { title: '3D Vision Reconstruction', desc: 'Exploring how perception enables robot grasping.' },
            { title: 'Elder Ally', desc: 'Smart mobility device for early gait anomaly detection.' },
          ]}
          link="/research"
        />
        <SnapshotSection
          title="Outreach & Mentorship"
          items={[
            { title: 'NextGEN Innovators Club', desc: 'Teaching underrepresented students engineering through design.' },
            { title: 'B-KOA Nonprofit', desc: 'Developing STEM programs for Bay Area youth.' },
          ]}
          link="/outreach"
        />
        <SnapshotSection
          title="Awards"
          items={[
            { title: 'AI Coding Agents Finalist', desc: 'YC Hackathon finalist for AI-powered wearable system.' },
            { title: 'Judges Award — Elder Ally', desc: 'Top 5 / 164 projects at Foothill Research Symposium.' },
          ]}
          link="/awards"
        />
      </div>
    </section>
  );
}

function SnapshotSection({ title, items, link }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
      <Link to={link} className="text-blue-500 font-semibold hover:underline">
        View more →
      </Link>
    </div>
  );
}

