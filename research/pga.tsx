// src/research/pga.tsx
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
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
        {title}
      </h2>
      {right && (
        <span style={{ fontSize: "0.85rem", color: "#666" }}>
          {right}
        </span>
      )}
    </div>

    <div
      style={{
        lineHeight: 1.65,
        fontSize: "1.02rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem", // vertical space between paragraphs
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
    <h3 style={{ fontSize: "1.18rem", fontWeight: 700, marginBottom: "0.5rem" }}>
      {title}
    </h3>
    <div style={{ lineHeight: 1.65 }}>{children}</div>
  </div>
);

const Figure: React.FC<{
  src: string;
  alt: string;
  caption?: string;
}> = ({ src, alt, caption }) => (
  <figure style={{ margin: "1.25rem 0 0 0" }}>
    <div
      style={{
        width: "100%",
        height: "375px",              // controls visible height
        overflow: "hidden",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",         // crops top & bottom
          objectPosition: "center 35%", // adjust if needed
        }}
        loading="lazy"
      />
    </div>

    {caption && (
      <figcaption style={{ marginTop: "0.6rem", fontSize: "1.2rem", color: "rgba(0,0,0,0.65)", textAlign: "center", }}>
        {caption}
      </figcaption>
    )}
  </figure>
);

const FullFigure: React.FC<{
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
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.12)",
      }}
      loading="lazy"
    />

    {caption && (
      <figcaption
        style={{
          marginTop: "0.6rem",
          fontSize: "0.9rem",
          color: "#555",
          textAlign: "center",
        }}
      >
        {caption}
      </figcaption>
    )}
  </figure>
);


const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{ paddingLeft: "1.2rem", marginTop: "0.75rem" }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: "0.4rem" }}>
        {item}
      </li>
    ))}
  </ul>
);


export default function PGAPage() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "3rem 1.25rem",
      }}
    >
      <header style={{ marginBottom: "1.75rem" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Predictive Gait Analysis
        </h1>
        <p style={{ fontSize: "1.05rem", opacity: 0.9, lineHeight: 1.6 }}>
          Predictive Gait Analysis (PGA) is a human-centered research project focused on early
          detection of mobility decline and fall risk using minimal sensing in real-world
          environments. Source code is available on GitHub, the experimental dataset (IMU recordings and videos) is provided under Data, and the Executive Summary and Poster offer high-level documentation of the project’s motivation and design.
        </p>
      </header>

      <div style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="https://github.com/deviamar/predictive-gait-analysis/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          GitHub
        </a>

        <a
          href="https://drive.google.com/drive/folders/1rCGqkWPsfDxp_-JHScxSccDoRixHejuz?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          Data
        </a>

        <a
          href="public/pdfs/PGA_GCC_R2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          Executive Summary
        </a>

        <a
          href="public/images/PGA_poster.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          Poster
        </a>
      </div>

      <Figure
          src="/images/RSLS_demo.jpg"
          alt="Live Demonstration During a Research Symposium Poster Session."
          caption="Live Demonstration During a Research Symposium Poster Session."
        />


      <Section title="Overview" id="overview">
        

        <p>
          The project began during the Google Case Competition, where my team explored
          opportunities for technology to meaningfully improve quality of life for an aging
          population. We found that nearly 4,000 seniors die from fall-related injuries each
          month, yet most existing solutions focus on emergency response <em>after</em> a fall
          rather than <strong>early detection of mobility decline</strong>.
        </p>

        <p style={{ marginTop: "1rem" }}>This led to a central question:</p>

        <blockquote
          style={{
            margin: "1rem 0",
            padding: "0.9rem 1rem",
            borderLeft: "4px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 10,
          }}
        >
          <strong>
            Can we detect meaningful changes in gait and mobility early, using a device that
            older adults already rely on daily, without increasing cognitive or behavioral
            burden?
          </strong>
        </blockquote>

        <p>
          This work reframes fall prevention as a <strong>longitudinal sensing and analysis</strong>{" "}
          problem, rather than a one-time alerting task.
        </p>
      </Section>

      


      <Section title="Motivation: Aging in Place and Mobility Decline" id="motivation">
        <p>
          Across interviews, clinical literature, and market research, one theme consistently
          emerged: <strong>older adults overwhelmingly want to age in their own homes</strong>,
          not in institutional settings. In the U.S., roughly 80% of older adults live
          independently, yet many face increasing risks due to:
        </p>

        <BulletList
          items={[
            "Sarcopenia (age-related muscle loss)",
            "Reduced balance and proprioception",
            "Multimorbidity (co-occurring chronic conditions)",
            "Cognitive and sensory decline",
          ]}
        />


        <p style={{ marginTop: "1rem" }}>
          Mobility decline is particularly critical. Research shows that{" "}
          <strong>
            changes in walking speed, stride length, variability, and reliance on assistive
            devices
          </strong>{" "}
          strongly correlate with fall risk and loss of independence (e.g., gait speed tests,
          Timed Up and Go). Importantly, these changes are often <strong>gradual</strong>, making
          continuous monitoring far more valuable than episodic clinical assessments.
        </p>
      </Section>


      <Section title="Positioning and Broader Context" id="positioning">
        <p>
          Many existing eldercare technologies emphasize:
        </p>

        <BulletList
          items={[
            "Emergency alerts after falls",
            "High-cost robotic systems",
            "Wearables with low long-term adherence",
          ]}
        />

        <p style={{ marginTop: "1rem" }}>
          In contrast, PGA emphasizes:
        </p>

        <BulletList
          items={[
            "Prevention over reaction",
            "Longitudinal monitoring",
            "Human-centered design",
            "Integration into existing care workflows",
          ]}
        />

        <p style={{ marginTop: "1rem" }}>
          This approach aligns with broader trends in health technology and embedded AI already
          being explored by organizations such as Google, particularly in on-device machine
          learning, health data platforms, and scalable preventative care systems.
        </p>
      </Section>






      <Section title="Why a Cane Attachment?" id="why-cane">
        <p>From both research and user interviews, several constraints shaped the design:</p>

        <BulletList
          items={[
            "Wearables are often forgotten, removed, or inconsistently charged.",
            "Many older adults already rely on canes for balance and confidence.",
            "A cane naturally experiences forces, impacts, and motion patterns that reflect gait.",
          ]}
        />

        <p style={{ marginTop: "1rem" }}>
          Embedding sensing into a cane shifts assistive technology from something the user must{" "}
          <em>remember</em> to something that is <strong>already integrated into their daily routine</strong>.
          This design choice prioritizes:
        </p>

        <BulletList
          items={[
            "High adherence",
            "Passive data collection",
            "Ecological validity of measurements",
          ]}
        />
      </Section>

      <Section title="Technical Direction: From Sensor-Rich to Sensor-Minimal" id="technical">
        <Subsection title="Initial Consideration: Multi-Sensor Systems">
          <p>Early technical exploration considered integrating multiple sensors, including:</p>
          <BulletList items={["IMUs", "LiDAR or depth sensors", "Force-sensitive resistors", "Cameras"]} />

          <p style={{ marginTop: "1rem" }}>
            While powerful, this approach introduced significant drawbacks:
          </p>
          <BulletList
            items={[
              "Higher power consumption",
              "Increased cost and maintenance",
              "Larger form factor",
              "Greater failure modes",
              "Reduced scalability for large populations",
            ]}
          />
        </Subsection>

        <Subsection title="Design Pivot: IMU-Only Sensing">
          <p>
            After further evaluation, we made a deliberate decision to{" "}
            <strong>simplify the system to an IMU-only design</strong>, relying on machine
            learning for signal interpretation. This shift was motivated by several factors:
          </p>

          <BulletList
            items={[
              "IMUs are low-power, low-cost, and robust",
              "They are already widely used in clinical gait assessment",
              "They scale better for long-term, real-world deployment",
              "Simpler hardware shifts complexity into software, where updates are easier",
            ]}
          />

          <p style={{ marginTop: "1rem" }}>
            This decision aligned with a broader principle:{" "}
            <strong>
              simplicity at the hardware level enables scalability and reliability
            </strong>
            , especially in eldercare contexts.
          </p>
        </Subsection>
      </Section>

      <Section title="Clinical and Expert Input">
          <p>
            In parallel with technical development, this project was informed by exposure to physicians and physical therapists at El Camino Hospital’s Acute Rehabilitation Facility, where I observed how gait and mobility are evaluated in practice.
          </p>
          <p>
            During discussions with clinicians and observation of gait assessments, I learned that fall risk is evaluated using a combination of biomechanical and behavioral indicators. These include walking speed, step width, postural stability, reliance on assistive devices, trunk posture (upright vs. forward-leaning), directional drift, variability in foot placement, and overall steadiness during ambulation. Clinicians also assess cognitive-motor interaction by observing whether patients can follow instructions and engage in conversation while walking, as difficulty with dual-task walking is associated with increased fall risk.
          </p>
          <p>
            A shadowing experience with a physical therapist further highlighted the importance of linking observed gait patterns to underlying functional impairments. For example, altered foot strike patterns (e.g., reduced heel strike) were associated with quadriceps weakness, while shortened stride and increased asymmetry were linked to lower-limb strength deficits and balance impairment. This reinforced a focus on muscle weakness as a modifiable risk factor that can be addressed through targeted strength and balance exercises.
          </p>
          <p>
            These clinical insights motivated a shift from generic mobility metrics toward identifying specific gait abnormalities associated with lower-limb weakness and instability. To explore this, I studied documented gait abnormalities, analyzed reference videos, and experimentally simulated these patterns while collecting IMU data from both cane-mounted and foot-mounted placements. This enabled direct comparison of how different abnormalities manifest in sensor signals and guided both sensor placement and feature selection.
          </p>
      </Section>

      <Section title="Experimental Exploration: Cane vs. Foot Placement" id="placement">
        <p>
          To understand what information could be extracted from IMU data alone, we tested the
          device in two placements:
        </p>

        <ol style={{ paddingLeft: "1.2rem", marginTop: "0.75rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>At the base of the cane</li>
          <li style={{ marginBottom: "0.4rem" }}>Attached near the foot</li>
        </ol>

        <Subsection title="Cane-Mounted IMU">
          <p>When attached to the cane, the IMU captured:</p>
          <BulletList
            items={[
              "Walking speed, inferred from step cadence and periodic acceleration",
              "Cane reliance, inferred from the magnitude and timing of acceleration spikes upon ground contact",
            ]}
          />
          <p style={{ marginTop: "1rem" }}>
            This provided insight into how much the user depended on the cane for support—an
            important proxy for balance confidence and lower-limb strength.
          </p>
        </Subsection>

        <Subsection title="Foot-Mounted IMU">
          <p>
            After discussions with a physician, the project focus shifted from generic mobility
            metrics to <strong>specific gait abnormalities</strong> associated with muscle weakness
            and fall risk. Clinical literature describes characteristic gait changes linked to
            conditions such as sarcopenia and neurological decline, including:
          </p>

          <BulletList
            items={[
              "Reduced stride length",
              "Decreased foot clearance",
              "Increased asymmetry",
              "Hesitation at gait initiation",
              "Greater variability in step timing",
            ]}
          />

          <p style={{ marginTop: "1rem" }}>
            When the IMU was attached near the foot, these patterns became{" "}
            <strong>far more distinguishable</strong>, allowing clearer differentiation between
            normal gait and abnormalities associated with lower-limb weakness.
          </p>
        </Subsection>

        <div
          style={{
            marginTop: "1.25rem",
            padding: "1rem 1rem",
            borderRadius: 12,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>Key insight:</strong>
          </p>
          <ul style={{ paddingLeft: "1.2rem", marginTop: "0.6rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Cane-mounted sensing</strong> excels at monitoring reliance and stability
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              <strong>Foot-mounted sensing</strong> excels at identifying specific biomechanical gait
              abnormalities
            </li>
          </ul>

          <p style={{ marginTop: "0.8rem", marginBottom: 0 }}>
            Rather than viewing this as a limitation, it reframed the system as{" "}
            <strong>modular and extensible</strong>, with the cane serving as the primary
            interface and optional foot sensing enabling deeper analysis when appropriate.
          </p>
        </div>
      </Section>

      <FullFigure
        src="/public/images/PGA_poster.jpg"
        alt=""
      />
      

      <Section title="Future Directions" id="future">
        <p>If continued, this project would explore:</p>

        <BulletList
          items={[
            "Longitudinal data collection across diverse mobility profiles",
            "Personalized baseline modeling and anomaly detection",
            "Modular sensor extensions for deeper gait analysis",
            "Clinician-facing dashboards for trend visualization",
            "Validation studies linking detected patterns to clinical outcomes",
          ]}
        />

        <p style={{ marginTop: "1rem" }}>
          More broadly, this work reinforced my interest in{" "}
          <strong>human-centered sensing systems</strong>, where meaningful intelligence emerges
          not from hardware complexity, but from careful integration of behavior, biomechanics,
          and machine learning.
        </p>
      </Section>
    </main>
  );
}
