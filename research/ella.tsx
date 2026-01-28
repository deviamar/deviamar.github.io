export default function EllaProject() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-gray-800 leading-relaxed">
      
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">ELLA: A Human-Centered Study of Spoken English Learning</h1>
        <p className="italic text-gray-600 text-justify">
          This study received IRB approval from the Foothill–De Anza Community College District.
        </p>
      </header>

      {/* Project Description */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
        <p className="text-justify">
          Being able to effectively communicate in English directly impacts the quality of life of a person living in the United States, but it is often challenging for international college students. From prior research, I found that mobile apps can be helpful for learning vocabulary and practicing skills like grammar, but few directly support speaking, cultural knowledge, and real-world communication. I became interested in investigating the main challenges international students at Foothill and De Anza face when learning English as a second (or third) language, and how low-pressure speaking practice could better support language acquisition.
        </p>

        <p className="text-justify">
          To understand these challenges, I interviewed faculty and tutors in the Listening and Speaking Center (LSC), Writing and Language Center (WLC), and ESL division regarding their experiences supporting international students. I then recruited student participants from Foothill and De Anza to complete an online survey.
        </p>

        <p className="text-justify">
          Through this survey, I assessed students' current English skills, goals and challenges, experiences with English-learning apps, and app features they may find helpful. All participant data was kept strictly confidential, and participants had the right to discontinue their participation at any time without penalty. The results of this work informed the design of a language-learning system focused on reducing anxiety and increasing speaking practice, with the long-term goal of developing an app that could potentially be used as an additional tool in the college curriculum.
        </p>
      </section>

      {/* Survey Link */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Student Survey</h2>
        <p className="text-justify">
          The full survey instrument used to collect data from international and ESL students is available here:
        </p>
        <p className="mt-2">
          <a
            href="/pdfs/StudentQuestionnaire.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Student Survey (PDF)
          </a>
        </p>
      </section>

      {/* IRB Process */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">IRB Approval Process</h2>
        <p className="text-justify">
          Because this project was conducted independently rather than as part of a class, obtaining IRB approval required additional time and coordination. At the time, IRB requests for both colleges were overseen by a single reviewer, which extended the approval timeline. To move the project forward, I actively followed up with my faculty mentor and communicated directly with Elaine, the college researcher, to schedule meetings and address questions related to recruitment, consent, and survey design.
        </p>

        <p className="text-justify">
          Based on feedback from Elaine—the researcher who reviewed and approved my study—I learned that survey questions should be designed not only to collect information, but also to support meaningful analysis and downstream design decisions. My original survey included a short-response question asking students to describe their perceived strengths in English; however, the prompt was too broad. Students could interpret “strengths” in many different ways (e.g., speaking, writing, grammar, or confidence), which made responses difficult to compare or prioritize.
        </p>

        <p className="text-justify">
          Rather than keeping an open-ended question with vague scope, I removed it and instead asked students to define what “success in English” meant to them in one or two sentences, followed by a structured set of statements measuring comfort with specific skills (for example, speaking with teachers, understanding fast-paced conversations, using slang, or giving presentations).
        </p>

        <p className="text-justify">
          I also learned that for background variables such as age, collecting exact values often increases analysis burden without meaningfully improving design insight. This reinforced that question formats should be chosen based on how the data will be used, not simply what seems interesting to ask. These revisions led me to refine question wording, reduce unnecessary complexity, and structure responses in ways that improved interpretability and relevance to system design.
        </p>
      </section>

      {/* Faculty Insights */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Insights from Faculty Interviews</h2>

        <h3 className="text-lg font-semibold mt-4">Speaking—not grammar—is the primary barrier</h3>
        <p className="text-justify">
          Faculty consistently observed that students are often competent in reading and grammar but struggle with spoken communication. The main difficulties are pronunciation, speech flow, and understanding fast, informal conversation—causing many students to freeze despite knowing the language.
        </p>

        <h3 className="text-lg font-semibold mt-4">Confidence and identity matter as much as skill</h3>
        <p className="text-justify">
          Instructors noted that students frequently lose confidence when their accent is misunderstood and may avoid speaking altogether. Cultural norms and negative reactions from others amplify anxiety, showing that emotional safety is central to language learning.
        </p>

        <h3 className="text-lg font-semibold mt-4">Native language shapes recurring error patterns</h3>
        <p className="text-justify">
          Faculty reported that error patterns are strongly influenced by a student's first language, such as difficulty with L/R sounds for Japanese speakers or word order for Spanish speakers. These mistakes persist because they become habitual and subconscious.
        </p>

        <h3 className="text-lg font-semibold mt-4">Correction must protect confidence</h3>
        <p className="text-justify">
          Effective instruction relies on indirect correction, repetition, and guiding students to self-correct rather than interrupting or publicly correcting them. Preserving confidence is essential for maintaining willingness to speak.
        </p>

        <h3 className="text-lg font-semibold mt-4">Immersion and context drive learning</h3>
        <p className="text-justify">
          Faculty emphasized that conversation, role-playing real situations, and exposure through movies or music are more effective than rule-based drills alone. Language acquisition improves when learners hear and use English in meaningful, real-world contexts.
        </p>

        <h3 className="text-lg font-semibold mt-4">Technology is useful but cannot replace instructors</h3>
        <p className="text-justify">
          Apps are viewed as helpful for independent practice but insufficient as a substitute for human instruction. Faculty highlighted barriers such as device access, technical issues, and limited class time, while seeing promise in AI for conversation, pronunciation, and rephrasing.
        </p>

        <h3 className="text-lg font-semibold mt-4">Most valuable app features are adaptive and supportive</h3>
        <p className="text-justify">
          Faculty envisioned tools that support pronunciation, simulate natural conversation, track common errors, and adjust language difficulty dynamically. The goal is not rote practice, but emotionally safe, personalized speaking support that encourages continued use.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Insights from the student questionnaire (Foothill/De Anza)
        </h2>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>The biggest “language gap” is structure, not vocabulary.</strong>{" "}
            Different sentence structure/word order was the most common
            difference reported, followed by verb tenses and articles,
            suggesting grammar structure is a primary friction point.
          </li>

          <li>
            <strong>English “culture” is a real learning requirement.</strong>{" "}
            Students cited informality, direct communication, and classroom
            participation expectations, supporting practice grounded in social
            situations rather than isolated sentences.
          </li>

          <li>
            <strong>Learners span a wide proficiency range.</strong>{" "}
            Responses ranged from new learners to those who have studied English
            their whole lives, indicating that one fixed difficulty path will
            not work for all learners.
          </li>

          <li>
            <strong>“Success in English” is defined as real-world functioning.</strong>{" "}
            Students emphasized communication with teachers, friends, and
            coworkers, handling work or school tasks, and participating
            socially.
          </li>

          <li>
            <strong>Students want specificity: comfort by scenario.</strong>{" "}
            Scenario-based comfort statements reveal where breakdowns occur more
            clearly than vague self-assessments.
          </li>

          <li>
            <strong>Informal English is a recurring pain point.</strong>{" "}
            Slang, idioms, pop culture, and fast-paced speech frequently cause
            confusion, matching faculty observations.
          </li>

          <li>
            <strong>Top desired features prioritize practice, feedback, and safety.</strong>{" "}
            Students requested pronunciation checking, conversation practice,
            paraphrasing, AI chat, and support for formal vs informal language.
          </li>

          <li>
            <strong>Trust and accessibility shape adoption.</strong>{" "}
            Barriers include cost, ads, repetition, connectivity, storage, and
            comfort with technology, suggesting the system should reduce
            friction and anxiety rather than replace instruction.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          What this project showcases
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Ability to run human-centered research and translate findings into
            design requirements.
          </li>
          <li>Comfort working across disciplines (HCI, education, AI).</li>
          <li>
            Preference for evidence-driven building rather than feature-driven
            building.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Future directions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Pilot prototypes with constrained, structured conversation flows to
            evaluate engagement and learning.
          </li>
          <li>
            Longitudinal progress tracking (confidence, fluency proxies,
            vocabulary growth).
          </li>
          <li>
            Instructor-informed feedback strategies (when to correct and how to
            correct).
          </li>
          <li>
            Evaluation with real learners to test whether low-pressure design
            increases speaking frequency.
          </li>
        </ul>
      </section>
    </main>
  );
}