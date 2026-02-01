const TAGS = [
  "Computer Vision",
  "Transfer Learning",
  "FastAI / PyTorch",
  "OpenCV",
  "Real-Time Inference",
  "Model Evaluation (Macro-F1)",
] as const;

type Link = { label: string; href: string };
type Stat = { label: string; value: string };

type Props = {
  repoUrl?: string;
  writeupUrl?: string;
  imageSrc?: string;

  // Optional: replace placeholders with your real results when you have them
  highlights?: Stat[];
  datasetSummary?: Stat[];
};

export default function EmotionDetectionProject({
  repoUrl = "https://github.com/deviamar/MLSN-Team-6H",
  writeupUrl = "/research/ed",
  imageSrc = "/images/home/emotion-detection.png",
  highlights = [
    { label: "Best model", value: "ViT / EfficientNet / ConvNeXt (transfer learning)" },
    { label: "Key metric", value: "Macro-F1 (primary), Accuracy (secondary)" },
    { label: "Deployment", value: "Live webcam inference + smoothing + confidence threshold" },
  ],
  datasetSummary = [
    { label: "Classes", value: "happy, neutral, sad, surprise" },
    { label: "Preprocessing", value: "face-detect → padded crop → resize → folder-by-class" },
    { label: "Why it matters", value: "reduces train ↔ webcam mismatch" },
  ],
}: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-gray-800 leading-relaxed">
      {/* Title */}
      <header className="space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Facial Emotion Detection</h1>
          <p className="text-gray-600 text-justify">
            A computer vision pipeline for classifying facial expressions into four categories
            and running real-time webcam inference. I implemented a Random Forest baseline,
            then upgraded to transfer learning (FastAI/PyTorch) with standardized face-crop
            preprocessing to improve robustness under real lighting and camera conditions.
          </p>
        </div>

        {/* Optional hero image */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt="Facial Emotion Detection preview"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Quick links */}
      <section className="flex flex-wrap gap-3">
        <a
          href={writeupUrl}
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
        >
          Project Writeup
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
        >
          GitHub Repo
        </a>
      </section>

      {/* Highlights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Highlights</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {highlights.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-200 bg-white p-4 space-y-2"
            >
              <div className="text-sm text-gray-500">{s.label}</div>
              <div className="font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Project overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="text-justify">
          The system supports an end-to-end workflow: dataset preprocessing, training, evaluation
          (confusion matrix + class-wise metrics), and live webcam inference. The key upgrade was
          aligning training data with inference data by training on face crops produced by the same
          detector used in the webcam loop.
        </p>
      </section>

      {/* Dataset + preprocessing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dataset and Preprocessing</h2>
        <p className="text-justify">
          Webcam demos often fail because training images are “clean” while inference inputs are
          low-resolution face crops with variable lighting. To reduce that train–test mismatch, I
          added a preprocessing pipeline that generates a standardized face-crop dataset.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {datasetSummary.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-200 bg-white p-4 space-y-2"
            >
              <div className="text-sm text-gray-500">{s.label}</div>
              <div className="font-semibold">{s.value}</div>
            </div>
          ))}
        </div>

        <ul className="list-disc pl-6 space-y-2">
          <li className="text-justify">Detect face(s) in each image.</li>
          <li className="text-justify">Select the largest face, crop with padding, resize to a consistent input size.</li>
          <li className="text-justify">Save to <code>faces_cropped/&lt;class&gt;</code> for training.</li>
        </ul>
      </section>

      {/* Modeling */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Modeling</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Baseline: Random Forest</h3>
          <p className="text-justify">
            The baseline flattens face pixels into feature vectors and trains a RandomForest classifier.
            It’s quick to implement but limited in generalization—especially across lighting and camera quality.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Improved: Transfer Learning (FastAI/PyTorch)</h3>
          <p className="text-justify">
            The upgraded pipeline fine-tunes pretrained vision backbones on the standardized face-crop dataset.
            Transfer learning improves performance with limited data by leveraging strong pretrained representations.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-justify">
              Training flow: freeze head → train → unfreeze → fine-tune with augmentation and LR scheduling.
            </li>
            <li className="text-justify">
              Candidates: ResNet (baseline TL), plus stronger backbones like EfficientNet, ConvNeXt, and ViT.
            </li>
          </ul>
        </div>
      </section>

      {/* Evaluation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Evaluation</h2>
        <p className="text-justify">
          Because emotion classes are typically imbalanced, I prioritize macro-F1 alongside accuracy, and
          inspect confusion matrices to understand which expressions collapse to “neutral” under ambiguity.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-justify">Accuracy</li>
          <li className="text-justify">Macro F1-score</li>
          <li className="text-justify">Confusion matrix + per-class precision/recall</li>
        </ul>
      </section>

      {/* Live inference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Live Webcam Inference</h2>
        <p className="text-justify">
          For a stable demo experience, I smooth predictions over time and apply a confidence threshold
          so low-confidence frames show “uncertain” instead of forcing an incorrect label.
        </p>

        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold mb-2">Stability features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-justify">Face crop with padding (avoid cutting forehead/chin).</li>
            <li className="text-justify">Temporal smoothing (moving average / majority vote).</li>
            <li className="text-justify">Confidence threshold (e.g., if max prob &lt; 0.45 → “uncertain”).</li>
          </ul>
        </div>
      </section>

      {/* How to run (short) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Run</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Preprocess face crops</h3>
          <pre className="bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`python prep_faces.py`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Run webcam inference</h3>
          <pre className="bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`# Random Forest
python runModel.py

# Transfer learning model
python runModelCnn.py`}</code>
          </pre>
        </div>
      </section>

      {/* Next steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li className="text-justify">
            Add balanced sampling / class weights + label cleanup using top-loss inspection.
          </li>
          <li className="text-justify">
            Compare backbones (EfficientNet vs ConvNeXt vs ViT) under the same preprocessing and metrics.
          </li>
          <li className="text-justify">
            Improve robustness with stronger augmentation and calibration (confidence → “uncertain”).
          </li>
        </ol>
      </section>
    </main>
  );
}
