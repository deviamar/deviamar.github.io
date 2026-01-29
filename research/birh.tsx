// src/research/birh.tsx
import React from "react";

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  id?: string;
  right?: string;
}> = ({ title, children, id, right }) => (
  <section id={id} style={{ marginTop: "3rem", marginBottom: "3rem" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: "1rem",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>{title}</h2>
      {right && <span style={{ fontSize: "0.85rem", color: "#666" }}>{right}</span>}
    </div>

    <div
      style={{
        lineHeight: 1.65,
        fontSize: "1.02rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  </section>
);

const Subsection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div style={{ marginTop: "1.5rem" }}>
    <h3 style={{ fontSize: "1.18rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h3>
    <div style={{ lineHeight: 1.65 }}>{children}</div>
  </div>
);

const Figure: React.FC<{
  src: string;
  alt: string;
  caption?: string;
}> = ({ src, alt, caption }) => (
  <figure style={{ margin: "1.25rem 0 0 0" }}>
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      loading="lazy"
    />

    {caption && (
      <figcaption
        style={{
          marginTop: "0.6rem",
          fontSize: "1.2rem",
          color: "rgba(0,0,0,0.65)",
          textAlign: "center",
        }}
      >
        {caption}
      </figcaption>
    )}
  </figure>
);


const BulletList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul style={{ paddingLeft: "1.2rem", marginTop: "0.75rem" }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: "0.4rem" }}>
        {item}
      </li>
    ))}
  </ul>
);

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote
    style={{
      margin: "1rem 0",
      padding: "0.9rem 1rem",
      borderLeft: "4px solid rgba(255,255,255,0.25)",
      background: "rgba(255,255,255,0.06)",
      borderRadius: 10,
    }}
  >
    {children}
  </blockquote>
);

export default function BiRHPage() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "3rem 1.25rem",
      }}
    >
      {/* Title */}
      <header style={{ marginBottom: "1.75rem" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Bio-Inspired Robotic Hand (BiRH)
        </h1>
        <p style={{ fontSize: "1.05rem", opacity: 0.9, lineHeight: 1.6 }}>
          A personal research project exploring how simplified hand designs can still achieve robust,
          versatile grasping.
        </p>
      </header>

      {/* Overview */}
      <Section title="Overview" id="overview">
        <p>
          Inspired by the effectiveness of the human hand, this project began with a central question:
        </p>

        <Quote>
          <strong>
            How is the human hand so effective at grasping a wide range of objects, and how can we
            design a robotic hand that is significantly simpler while remaining functionally effective?
          </strong>
        </Quote>

        <p>
          Rather than attempting to replicate the full complexity of the human hand, this work focuses
          on identifying the <em>minimum mechanical structure</em>, in terms of fingers, joints, and
          actuation, required to support common and useful grasp types.
        </p>
      </Section>

      {/* Image */}
      <Figure
        src="/images/birh/Initial_Test.png"
        alt="Initial test prototype"
        caption="Initial test prototype focusing on geometry and passive mechanics."
      />

      <Section title="Initial Concept Design" id="initial-concept">
        <Subsection title="Core Design Philosophy">
          <p>
            The first prototype focused on achieving <strong>force closure</strong> using a simple
            geometric structure. The emphasis was intentionally placed on <strong>geometry, contact, and
            passive mechanics</strong>, rather than refined actuation or sensing.
          </p>
        </Subsection>

        <Subsection title="Key Design Decisions">
          <p style={{ margin: 0 }}>
            <strong>Three-Finger Configuration</strong>
          </p>
          <BulletList
            items={[
              "Three fingers to achieve force closure, even as the hand is rotated about the palm",
              "Symmetrical arrangement around the palm to reduce finger spacing and maximize object coverage",
              "Identical finger designs for interchangeability and rotational symmetry",
            ]}
          />

          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <strong>Human-Inspired Phalanges</strong>
          </p>
          <BulletList
            items={[
              "Three phalanges per finger to enable multiple contact points",
              "Phalange lengths scaled from measurements of my own forefinger",
              "Length decreases from proximal to distal to secure the object base first and refine grip stability",
            ]}
          />

          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <strong>Simple Actuation System</strong>
          </p>
          <BulletList
            items={[
              "Holes incorporated into the CAD models for string routing",
              "One motor per finger driving a single string with spring opposition",
              <>
                The focus was on testing the <em>effectiveness of geometry</em>, not optimizing tendon mechanics
              </>,
            ]}
          />

          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <strong>Wrist Rotation</strong>
          </p>
          <BulletList
            items={[
              "The palm was designed to rotate about the wrist joint to evaluate grasp stability across different orientations",
            ]}
          />
        </Subsection>

        <Subsection title="Early Insights">
          <p>
            Initially, I expected this design to work primarily for spherical objects. However,
            testing showed that it performed better than expected across a variety of shapes. The main
            challenge was achieving the desired <strong>closure sequence</strong>—ideally, proximal phalanges
            would close first to fully envelop the object before distal phalanges refined the grip.
          </p>

          <p>
            While this behavior could be approximated by adjusting friction through screw tightness, it
            highlighted the need for more principled underactuated mechanisms.
          </p>
        </Subsection>
      </Section>

      <Section title="Early Questions and Design Exploration" id="exploration">
        <BulletList
          items={[
            "How would adding a degree of freedom allowing each finger to rotate about the palm affect grasping ability?",
            "How sensitive is grasp performance to finger placement around the palm?",
            "Could a deformable or compliant palm improve grasp stability?",
            "How does thumb complexity expand the space of achievable grasps?",
            "What mechanical abstractions best capture the complex motion of the human thumb?",
          ]}
        />
      </Section>

      <Section title="AHAP-Guided Hand Configuration Analysis" id="ahap">
        <p>
          While exploring systematic ways to evaluate and refine hand designs, I discovered the{" "}
          <strong>Anthropomorphic Hand Assessment Protocol (AHAP)</strong> (Llop-Harillo et al., 2019),
          which proposes a standardized framework for assessing robotic hands using grasp types drawn from
          activities of daily living (ADLs).
        </p>

        <Subsection title="Adapted Testing Methodology">
          <p>
            Because fabricating multiple full robotic hands is time-consuming and expensive, I developed a{" "}
            <strong>low-cost proxy evaluation method</strong>. Using constrained motions of my own hand, I simulated
            different robotic configurations while attempting AHAP-defined grasps with simple objects (e.g., wire,
            paper, tape).
          </p>
        </Subsection>

        <Subsection title="Configuration Testing">
          <BulletList
            items={[
              <>
                <strong>Prototype 1</strong>: Three fingers, three phalanges, hinge joints only
              </>,
              <>
                <strong>Configuration 1</strong>: Two fingers + thumb, hinge joints only
              </>,
              <>
                <strong>Configuration 2</strong>: Two fingers + thumb with thumb abduction/adduction
              </>,
            ]}
          />
        </Subsection>

        <Subsection title="Configuration Testing Results">
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(0,0,0,0.10)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "rgba(0,0,0,0.04)" }}>
                  {["Grasp Type", "Prototype 1", "Config 1", "Config 2", "Notes"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "0.7rem 0.75rem",
                        borderBottom: "1px solid rgba(0,0,0,0.10)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Spherical grip", "✓ Stable", "⚠️ Less stable", "⚠️ Less stable", ""],
                  ["Cylindrical grip", "⚠️ Poor contact", "✓ More stable", "⚠️ Less stable", ""],
                  ["Diagonal volar grip", "✗ Not possible", "✗ Not possible", "✓ Stable", ""],
                  ["Lateral pinch", "⚠️ Not stable", "✗ Not possible", "✓ Stable", ""],
                  ["Extension grip", "✓ Possible", "✓ Stable", "✓ Stable", ""],
                  ["Platform", "✓ Possible", "✓ Possible", "✓ Possible", ""],
                  ["Tripod pinch", "✓ Stable", "✓ Stable", "✓ Stable", ""],
                  ["Pulp pinch", "✓ Stable", "✓ Stable", "✓ Stable", ""],
                  ["Hook", "✓ Possible", "✓ More stable", "✓ Stable", ""],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        style={{
                          padding: "0.7rem 0.75rem",
                          borderBottom: "1px solid rgba(0,0,0,0.06)",
                          verticalAlign: "top",
                          whiteSpace: i === 0 ? "nowrap" : "normal",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1rem" }}>
            See images and detailed notes here:{" "}
            <a
              href="/files/research/birh/Test.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              Test Results (PDF)
            </a>
          </p>
        </Subsection>

        <Subsection title="Key Design Insights">
          <BulletList
            items={[
              <>
                <strong>Surface contact area</strong> and <strong>opposing finger orientation</strong>{" "}
                critically affect grasp stability
              </>,
              <>
                The absence of <strong>abduction/adduction</strong> eliminates entire categories of grasps
                (e.g., lateral pinch, diagonal volar grip)
              </>,
            ]}
          />
        </Subsection>

        <Subsection title="Impact on Next Prototype">
          <p>
            Based on these results, I decided to pursue a second prototype consisting of{" "}
            <strong>two fingers opposing a thumb</strong>. Each finger would retain three phalanges, while
            the thumb would be capable of opposing in two directions:
          </p>
          <BulletList
            items={[
              "Toward the fingertips for cylindrical and tripod pinch grasps",
              "Laterally toward the index finger to enable diagonal volar grasps",
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Simulation in MuJoCo" id="mujoco">
        <p>
          To complement physical prototyping, I implemented multiple hand designs in{" "}
          <strong>MuJoCo</strong> to explore contact dynamics, grasp stability, and design variations at a
          faster iteration speed.
        </p>

        <Subsection title="Model Structure">
          <BulletList
            items={[
              "XML-based hand models defining finger geometry, joints, and contacts",
              "STL mesh assets for grasped objects (e.g., an apple)",
              "Python scripts for joint control, testing, and visualization",
            ]}
          />
          <p style={{ marginTop: "1rem" }}>
            The hand was eventually mounted to a <strong>UR10e</strong> robotic arm to evaluate grasping
            in a more realistic manipulation context.
          </p>
        </Subsection>

        <Subsection title="Tendon Modeling Challenges">
          <p>
            An early goal was to simulate underactuated tendon-driven fingers. In practice, I found tendon
            dynamics in MuJoCo difficult to tune and unstable. To move forward, I replaced tendon-driven
            fingers with explicit hinge joints to isolate geometric and kinematic effects.
          </p>
        </Subsection>

        <Subsection title="Contact and Stability Issues">
          <ol style={{ paddingLeft: "1.2rem", marginTop: "0.75rem" }}>
            <li style={{ marginBottom: "1rem" }}>
              <strong>Jitter vs. Stability</strong>
              <BulletList
                items={[
                  "High stiffness values caused numerical instability",
                  "Lower stiffness improved stability but slowed grasp closure",
                  "Objects often slipped before the hand could fully close",
                ]}
              />
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <strong>Object Mesh Fidelity</strong>
              <BulletList
                items={[
                  "Early apple STL meshes contained holes or non-manifold geometry",
                  "These artifacts made the object effectively ungraspable",
                  "Updating the mesh significantly improved contact realism",
                ]}
              />
            </li>
            <li>
              <strong>Contact Interference</strong>
              <BulletList
                items={[
                  "Finger–finger contact sometimes occurred before finger–object contact",
                  "This prevented meaningful grasping despite apparent closure",
                ]}
              />
            </li>
          </ol>
        </Subsection>

        <Subsection title="Unrealistic Grasp Strength and Evaluation Limits">
          <p>
            At one stage, the simulated hand exhibited unrealistically strong grasps. Even when large
            external forces were applied, the object could not be dislodged. This highlighted a key
            limitation: contact forces were not grounded in realistic material or actuator constraints. As a result, I reframed my evaluation criteria from <em>“Is this grasp strong?”</em> to{" "}
            <em>“Does this grasp fail in realistic ways given the inherent limitations of a physical design?”</em>
          </p>
        </Subsection>
      </Section>

      <Section title="Key Failures and Lessons Learned" id="lessons">
        <BulletList
          items={[
            "Underactuated tendon modeling is nontrivial and can obscure design insights if introduced too early",
            "Object geometry matters as much as hand geometry",
            "Missing degrees of freedom eliminate entire grasp classes",
            "Strong simulated grasps are meaningless without realistic constraints",
            "Geometry and contact sequencing often dominate control complexity",
          ]}
        />
      </Section>

      <Section title="Future Directions" id="future">
        <BulletList
          items={[
            "Simulation and fabrication of compliant or deformable palms",
            "Integration of minimal sensing (e.g., camera or pressure based touch sensor)",
            "Learning-based grasp policies that exploit underactuated dynamics",
            "Full vision-to-grasp pipelines using depth perception",
          ]}
        />
      </Section>

      <div style={{ marginTop: "2.5rem" }}>
        <a href="/" style={{ fontSize: "0.95rem", color: "#666", textDecoration: "underline" }}>
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
