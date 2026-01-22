// src/research/ella.tsx
import React from "react";

type LinkItem = { label: string; href: string };

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main style={{ maxWidth: 980, margin: "0 auto", padding: "3rem 1.25rem" }}>
    {children}
  </main>
);

const Header: React.FC<{
  title: string;
  subtitle: string;
  links?: LinkItem[];
}> = ({ title, subtitle, links }) => (
  <header style={{ marginBottom: "2rem" }}>
    <h1 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.5rem" }}>
      {title}
    </h1>
    <p style={{ fontSize: "1.05rem", opacity: 0.9, lineHeight: 1.6 }}>
      {subtitle}
    </p>

    {links && links.length > 0 && (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1rem" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              display: "inline-block",
              padding: "0.5rem 0.75rem",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.06)",
              textDecoration: "none",
              color: "inherit",
              fontSize: "0.95rem",
            }}
          >
            {l.label} ↗
          </a>
        ))}
      </div>
    )}
  </header>
);

const Section: React.FC<{ title: string; children: React.ReactNode; id?: string }> = ({
  title,
  children,
  id,
}) => (
  <section id={id} style={{ marginTop: "2.5rem" }}>
    <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>{title}</h2>
    <div style={{ lineHeight: 1.65, fontSize: "1.02rem" }}>{children}</div>
  </section>
);

const Subsection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginTop: "1.4rem" }}>
    <h3 style={{ fontSize: "1.18rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h3>
    <div style={{ lineHeight: 1.65 }}>{children}</div>
  </div>
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

const Callout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div
    style={{
      marginTop: "1.25rem",
      padding: "1rem 1rem",
      borderRadius: 12,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.10)",
    }}
  >
    <p style={{ margin: 0, fontWeight: 700 }}>{title}</p>
    <div style={{ marginTop: "0.6rem" }}>{children}</div>
  </div>
);

export default function EllaPage() {
  // Update these to your real links/files
  const links: LinkItem[] = [
    { label: "GitHub", href: "https://github.com/deviamar/ella" },
    { label: "RSL Poster (PDF)", href: "/pdfs/ELLA_RSL_Poster.pdf" },
  ];

  return (
    <Container>
      <Header
        title="ELLA — English Language Learning Assistant"
        subtitle="A human-centered research project exploring how international and ESL students build speaking confidence—and how adaptive, low-pressure conversational practice can reduce barriers to language growth."
        links={links}
      />

      <Section title="Project Overview" id="overview">
        <p>
          ELLA is a human-centered research project that started from a simple observation: many
          international and ESL students understand English grammar and vocabulary, but still
          avoid speaking in real settings due to anxiety, fear of judgment, and lack of
          consistent practice opportunities. Rather than jumping straight into building a
          product, the project began with <strong>user research</strong> to understand the real
          constraints and motivations behind language learning behavior.
        </p>

        <p style={{ marginTop: "1rem" }}>
          The core question that guided the work was:
        </p>

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
            How can we support consistent, confidence-building speaking practice for ESL
            learners without increasing cognitive load or creating social pressure?
          </strong>
        </blockquote>
      </Section>

      <Section title="Motivation" id="motivation">
        <p>
          Across conversations with students and educators, a pattern kept repeating:
          learners often have access to content (videos, textbooks, flashcards), but struggle
          with <strong>low-stakes, frequent speaking practice</strong>. For many students, the
          hardest part is not knowing what to say—it’s feeling safe enough to say it.
        </p>

        <Subsection title="Problem Framing">
          <BulletList
            items={[
              <>
                <strong>Speaking anxiety</strong> and fear of embarrassment reduce practice frequency.
              </>,
              <>
                <strong>Inconsistent feedback</strong> makes it hard to build confidence and correct errors.
              </>,
              <>
                <strong>High-pressure social contexts</strong> (classrooms, group settings) can slow progress.
              </>,
              <>
                <strong>Fragmented tools</strong> don’t integrate practice, reflection, and progression in one loop.
              </>,
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Research Process" id="process">
        <Subsection title="User Research">
          <p>
            The project was grounded in qualitative + quantitative data collection. The goal
            was to learn how learners actually practice, what blocks them, and what kinds of
            support feel motivating (not annoying or overwhelming).
          </p>

          <BulletList
            items={[
              <>Designed and deployed a questionnaire targeting international/ESL learners.</>,
              <>Conducted interviews to capture lived experiences around confidence and practice.</>,
              <>Spoke with ESL instructors/tutors to understand patterns they see repeatedly.</>,
              <>Synthesized results into requirements and design principles for an assistive system.</>,
            ]}
          />

          <Callout title="Key Insight">
            <p style={{ margin: 0 }}>
              Learners don’t just need “more practice.” They need a{" "}
              <strong>low-pressure environment</strong> that encourages frequent speaking,
              provides lightweight guidance, and reinforces progress without judgment.
            </p>
          </Callout>
        </Subsection>

        <Subsection title="Evidence → Requirements">
          <p>
            Instead of building a feature list, the outcome of research became a set of
            constraints that shaped the solution direction:
          </p>

          <BulletList
            items={[
              <>
                <strong>Low friction</strong>: practice should be easy to start (no setup, no social risk).
              </>,
              <>
                <strong>Adaptive difficulty</strong>: interactions should match proficiency and gradually stretch it.
              </>,
              <>
                <strong>Confidence-first feedback</strong>: corrections should be supportive, not discouraging.
              </>,
              <>
                <strong>Short sessions</strong>: frequent micro-practice beats rare long sessions.
              </>,
              <>
                <strong>Progress visibility</strong>: learners should feel improvement week-to-week.
              </>,
            ]}
          />
        </Subsection>
      </Section>

      <Section title="System Concept" id="concept">
        <p>
          Based on the research, ELLA was framed as an <strong>English Language Learning Assistant</strong>{" "}
          focused on conversational practice. The core concept is a system that can:
        </p>

        <BulletList
          items={[
            <>Provide low-stakes speaking prompts and guided dialogue.</>,
            <>Adapt to a learner’s proficiency level and goals.</>,
            <>Offer gentle corrections and examples (grammar, phrasing, pronunciation cues).</>,
            <>Support reflection loops (what went well, what to practice next).</>,
          ]}
        />

        <Subsection title="Why Generative AI (and why carefully)">
          <p>
            Generative AI is useful here because language learning is inherently open-ended—there
            isn’t one “correct” conversation path. However, the design goal isn’t to impress with
            intelligence; it’s to create a practice environment that is:
          </p>

          <BulletList
            items={[
              <>
                <strong>Supportive</strong> (reduces fear of judgment),
              </>,
              <>
                <strong>Consistent</strong> (always available),
              </>,
              <>
                <strong>Structured</strong> (keeps practice purposeful),
              </>,
              <>
                <strong>Accountable</strong> (tracks progress over time).
              </>,
            ]}
          />

          <Callout title="Design Principle">
            <p style={{ margin: 0 }}>
              The model should not replace human teachers—it should{" "}
              <strong>increase the frequency of practice between human interactions</strong>.
            </p>
          </Callout>
        </Subsection>
      </Section>

      <Section title="Outcomes" id="outcomes">
        <p>
          The main output of ELLA was a research-backed concept and set of design requirements,
          communicated through a written synthesis and an RSL presentation/poster. The work
          demonstrates a complete end-to-end research loop:{" "}
          <strong>problem discovery → user research → synthesis → system framing</strong>.
        </p>

        <Subsection title="What This Project Showcases">
          <BulletList
            items={[
              <>Ability to run human-centered research and translate findings into design requirements.</>,
              <>Comfort working across disciplines (HCI, education, AI).</>,
              <>A preference for evidence-driven building rather than feature-driven building.</>,
            ]}
          />
        </Subsection>
      </Section>

      <Section title="Future Directions" id="future">
        <p>If continued, this project would explore:</p>

        <BulletList
          items={[
            <>Pilot prototypes with constrained, structured conversation flows (to evaluate engagement + learning).</>,
            <>Longitudinal progress tracking (confidence, fluency proxies, vocabulary growth).</>,
            <>Instructor-informed feedback strategies (when to correct, how to correct).</>,
            <>Evaluation with real learners to test whether “low-pressure” actually increases speaking frequency.</>,
          ]}
        />

        <p style={{ marginTop: "1rem" }}>
          More broadly, ELLA reinforced my interest in human-centered AI systems where the goal
          is not maximal model capability, but <strong>meaningful behavior change</strong> for
          real people in real contexts.
        </p>
      </Section>
    </Container>
  );
}