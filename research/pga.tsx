// src/research/pga.tsx
import React from "react";

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  id?: string;
}> = ({ title, children, id }) => (
  <section id={id} style={{ marginTop: "2.5rem" }}>
    <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
      {title}
    </h2>
    <div style={{ lineHeight: 1.65, fontSize: "1.02rem" }}>{children}</div>
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
          environments.
        </p>
      </header>

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

      <Section title="Machine Learning Framing" id="ml">
        <p>
          Rather than attempting clinical diagnosis, the ML objective is framed as:
        </p>

        <BulletList
          items={[
            "Detecting deviations from an individual’s baseline",
            "Classifying specific gait abnormality patterns linked to known risk factors",
            "Mapping detected patterns to targeted intervention suggestions",
          ]}
        />

        <p style={{ marginTop: "1rem" }}>
          For example:
        </p>

        <BulletList
          items={[
            "Reduced stride length and clearance → associated with lower-limb weakness → recommend strength and balance exercises",
            "Increased reliance on the cane → potential decline in stability → flag for physician review",
          ]}
        />

        <p style={{ marginTop: "1rem" }}>
          This framing is consistent with established clinical tools such as gait speed tests,
          chair-stand tests, and balance assessments, while enabling{" "}
          <strong>continuous, real-world monitoring</strong>.
        </p>
      </Section>

      <Section title="Design Philosophy" id="philosophy">
        <p>
          This project is intentionally <strong>not</strong> a fully autonomous robot or a
          socially assistive companion. Instead, it focuses on solving{" "}
          <strong>one widespread, high-impact problem well</strong>.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Core design principles:
        </p>

        <BulletList
          items={[
            "Safety: no active actuation or destabilizing behavior",
            "Low cognitive load: no complex interfaces required",
            "Passive monitoring: sensing occurs naturally during use",
            "Clinical relevance: features map to known gait and balance metrics",
            "Scalability: affordable, lightweight, and energy-efficient",
          ]}
        />
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

      <Section title="Key Insights and Lessons Learned" id="insights">
        <BulletList
          items={[
            "Hardware simplicity often increases real-world impact.",
            "IMU data alone can be surprisingly expressive when analyzed longitudinally.",
            "Sensor placement fundamentally shapes what can be learned.",
            "Specific, interpretable outputs are more valuable than vague “risk scores.”",
            "Assistive technology must respect dignity and autonomy to be adopted.",
          ]}
        />
      </Section>

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
