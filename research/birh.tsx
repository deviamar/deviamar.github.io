export default function BiRHPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Title */}
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Bio-Inspired Robotic Hand (BiRH)
        </h1>
        <p className="mt-3 text-base text-neutral-600">
          A personal research project exploring how simplified hand designs can still achieve robust,
          versatile grasping.
        </p>
      </header>

      {/* Overview */}
      <section className="prose prose-neutral max-w-none">
        <h2>Overview</h2>
        <p>
          The <strong>Bio-Inspired Robotic Hand (BiRH)</strong> is a personal research project
          exploring how <strong>simplified hand designs</strong> can still achieve robust and
          versatile grasping.
        </p>

        <p>
          Inspired by the effectiveness of the human hand, this project began with a central question:
        </p>

        <blockquote>
          <strong>
            How is the human hand so effective at grasping a wide range of objects, and how can we
            design a robotic hand that is significantly simpler while remaining functionally effective?
          </strong>
        </blockquote>

        <p>
          Rather than attempting to replicate the full complexity of the human hand, this work focuses
          on identifying the <em>minimum mechanical structure</em>—in terms of fingers, joints, and
          actuation—required to support common and useful grasp types.
        </p>

        <hr />

        <h2>Initial Concept Design</h2>
        <h3>Core Design Philosophy</h3>
        <p>
          The first prototype focused on achieving <strong>force closure</strong> using a simple
          geometric structure. The emphasis was intentionally placed on <strong>geometry, contact, and
          passive mechanics</strong>, rather than refined actuation or sensing.
        </p>
      </section>

      {/* Image (Vite) */}
      <div className="my-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
        <img
          src="/images/birh/Initial_Test.png"
          alt="Initial test prototype"
          className="h-auto w-full"
        />
        <div className="px-4 py-3 text-sm text-neutral-600">
          Initial test prototype focusing on geometry and passive mechanics.
        </div>
      </div>

      <section className="prose prose-neutral max-w-none">
        <h3>Key Design Decisions</h3>

        <p><strong>Three-Finger Configuration</strong></p>
        <ul>
          <li>Three fingers to achieve force closure, even as the hand is rotated about the palm</li>
          <li>Symmetrical arrangement around the palm to reduce finger spacing and maximize object coverage</li>
          <li>Identical finger designs for interchangeability and rotational symmetry</li>
        </ul>

        <p><strong>Human-Inspired Phalanges</strong></p>
        <ul>
          <li>Three phalanges per finger to enable multiple contact points</li>
          <li>Phalange lengths scaled from measurements of my own forefinger</li>
          <li>Length decreases from proximal to distal to secure the object base first and refine grip stability</li>
        </ul>

        <p><strong>Simple Actuation System</strong></p>
        <ul>
          <li>Holes incorporated into the CAD models for string routing</li>
          <li>One motor per finger driving a single string with spring opposition</li>
          <li>The focus was on testing the <em>effectiveness of geometry</em>, not optimizing tendon mechanics</li>
        </ul>

        <p><strong>Wrist Rotation</strong></p>
        <ul>
          <li>The palm was designed to rotate about the wrist joint to evaluate grasp stability across different orientations</li>
        </ul>

        <h3>Early Insights</h3>
        <p>
          Initially, I expected this design to work primarily for spherical or soft objects. However, testing
          showed that it performed better than expected across a variety of shapes. The main challenge was
          achieving the desired <strong>closure sequence</strong>—ideally, proximal phalanges would close first
          to fully envelop the object before distal phalanges refined the grip.
        </p>

        <p>
          While this behavior could be approximated by adjusting friction through screw tightness, it highlighted
          the need for more principled underactuated mechanisms.
        </p>

        <hr />

        <h2>Early Questions and Design Exploration</h2>
        <ul>
          <li>How would adding a degree of freedom allowing each finger to rotate about the palm affect grasping ability?</li>
          <li>How sensitive is grasp performance to finger placement around the palm?</li>
          <li>Could a deformable or compliant palm improve grasp stability?</li>
          <li>How does thumb complexity expand the space of achievable grasps?</li>
          <li>What mechanical abstractions best capture the complex motion of the human thumb?</li>
        </ul>

        <hr />

        <h2>AHAP-Guided Hand Configuration Analysis</h2>
        <p>
          While exploring systematic ways to evaluate and refine hand designs, I discovered the{" "}
          <strong>Anthropomorphic Hand Assessment Protocol (AHAP)</strong> (Llop-Harillo et al., 2019),
          which proposes a standardized framework for assessing robotic hands using grasp types drawn from
          activities of daily living (ADLs).
        </p>

        <h3>Adapted Testing Methodology</h3>
        <p>
          Because fabricating multiple full robotic hands is time-consuming and expensive, I developed a{" "}
          <strong>low-cost proxy evaluation method</strong>. Using constrained motions of my own hand, I simulated
          different robotic configurations while attempting AHAP-defined grasps with simple objects (e.g., wire,
          paper, tape).
        </p>

        <h3>Configuration Testing</h3>
        <ul>
          <li><strong>Prototype 1</strong>: Three fingers, three phalanges, hinge joints only</li>
          <li><strong>Configuration 1</strong>: Two fingers + thumb, hinge joints only</li>
          <li><strong>Configuration 2</strong>: Two fingers + thumb with thumb abduction/adduction</li>
        </ul>

        <h3>Configuration Testing Results</h3>
        <div className="not-prose my-4 overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-neutral-50">
              <tr>
                <th className="border-b border-neutral-200 px-3 py-2 text-left">Grasp Type</th>
                <th className="border-b border-neutral-200 px-3 py-2 text-left">Prototype 1</th>
                <th className="border-b border-neutral-200 px-3 py-2 text-left">Config 1</th>
                <th className="border-b border-neutral-200 px-3 py-2 text-left">Config 2</th>
                <th className="border-b border-neutral-200 px-3 py-2 text-left">Notes</th>
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
                    <td key={i} className="border-b border-neutral-100 px-3 py-2 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          See images and detailed notes here:{" "}
          <a href="/files/research/birh/Test.pdf" target="_blank" rel="noreferrer">
            Test Results (PDF)
          </a>
        </p>

        <h3>Key Design Insights</h3>
        <ul>
          <li><strong>Surface contact area</strong> and <strong>opposing finger orientation</strong> critically affect grasp stability</li>
          <li>The absence of <strong>abduction/adduction</strong> eliminates entire categories of grasps (e.g., lateral pinch, diagonal volar grip)</li>
        </ul>

        <h3>Impact on Next Prototype</h3>
        <p>
          Based on these results, I decided to pursue a second prototype consisting of <strong>two fingers opposing a thumb</strong>.
          Each finger would retain three phalanges, while the thumb would be capable of opposing in two directions:
        </p>
        <ul>
          <li>Toward the fingertips for cylindrical and tripod pinch grasps</li>
          <li>Laterally toward the index finger to enable diagonal volar grasps</li>
        </ul>

        <hr />

        <h2>Simulation in MuJoCo</h2>
        <p>
          To complement physical prototyping, I implemented multiple hand designs in <strong>MuJoCo</strong> to explore
          contact dynamics, grasp stability, and design variations at a faster iteration speed.
        </p>

        <h3>Model Structure</h3>
        <ul>
          <li>XML-based hand models defining finger geometry, joints, and contacts</li>
          <li>STL mesh assets for grasped objects (e.g., an apple)</li>
          <li>Python scripts for joint control, testing, and visualization</li>
        </ul>

        <p>
          The hand was eventually mounted to a <strong>UR10e</strong> robotic arm to evaluate grasping in a more realistic manipulation context.
        </p>

        <h3>Tendon Modeling Challenges</h3>
        <p>
          An early goal was to simulate underactuated tendon-driven fingers. In practice, I found tendon dynamics in MuJoCo
          difficult to tune and unstable. To move forward, I replaced tendon-driven fingers with explicit hinge joints to isolate
          geometric and kinematic effects.
        </p>

        <blockquote>
          <strong>Simulation abstractions should serve the research question, not dominate it.</strong>
        </blockquote>

        <h3>Contact and Stability Issues</h3>
        <ol>
          <li>
            <strong>Jitter vs. Stability</strong>
            <ul>
              <li>High stiffness values caused numerical instability</li>
              <li>Lower stiffness improved stability but slowed grasp closure</li>
              <li>Objects often slipped before the hand could fully close</li>
            </ul>
          </li>
          <li>
            <strong>Object Mesh Fidelity</strong>
            <ul>
              <li>Early apple STL meshes contained holes or non-manifold geometry</li>
              <li>These artifacts made the object effectively ungraspable</li>
              <li>Updating the mesh significantly improved contact realism</li>
            </ul>
          </li>
          <li>
            <strong>Contact Interference</strong>
            <ul>
              <li>Finger–finger contact sometimes occurred before finger–object contact</li>
              <li>This prevented meaningful grasping despite apparent closure</li>
            </ul>
          </li>
        </ol>

        <h3>Unrealistic Grasp Strength and Evaluation Limits</h3>
        <p>
          At one stage, the simulated hand exhibited unrealistically strong grasps. Even when large external forces were applied,
          the object could not be dislodged. This highlighted a key limitation: contact forces were not grounded in realistic material
          or actuator constraints.
        </p>

        <p>
          As a result, I reframed my evaluation criteria from <em>“Is this grasp strong?”</em> to <em>“Does this grasp fail in realistic ways?”</em>
        </p>

        <hr />

        <h2>Key Failures and Lessons Learned</h2>
        <ul>
          <li>Underactuated tendon modeling is nontrivial and can obscure design insights if introduced too early</li>
          <li>Object geometry matters as much as hand geometry</li>
          <li>Missing degrees of freedom eliminate entire grasp classes</li>
          <li>Strong simulated grasps are meaningless without realistic constraints</li>
          <li>Geometry and contact sequencing often dominate control complexity</li>
        </ul>

        <hr />

        <h2>Future Directions</h2>
        <ul>
          <li>Simulation and fabrication of compliant or deformable palms</li>
          <li>Integration of minimal sensing (e.g., joint encoders or contact proxies)</li>
          <li>Learning-based grasp policies that exploit underactuated dynamics</li>
          <li>Full vision-to-grasp pipelines using depth perception</li>
        </ul>

        <p>
          More broadly, this work shaped my interest in <strong>robot–environment interaction under imperfect information</strong>,
          where intelligent behavior emerges from the interaction between morphology, mechanics, and control rather than from complexity alone.
        </p>
      </section>

      {/* Back link (Vite) */}
      <div className="mt-12">
        <a href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}