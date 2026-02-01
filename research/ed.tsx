import React from "react";

export default function EmotionDetectionProject() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-gray-800 leading-relaxed">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Facial Emotion Detection</h1>
        <p className="text-gray-600 text-justify">
          A computer vision project that classifies facial expressions into four
          emotion categories and supports both offline evaluation and live webcam
          inference. Built with a baseline Random Forest model and an improved
          CNN transfer-learning pipeline using FastAI (ResNet).
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "Computer Vision",
            "ML Pipeline",
            "Transfer Learning",
            "FastAI / PyTorch",
            "OpenCV",
            "Model Evaluation",
          ].map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Project Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="text-justify">
          This project implements facial emotion recognition using two modeling
          approaches:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-justify">
            <strong>Baseline:</strong> Random Forest classifier trained on
            flattened face image pixels.
          </li>
          <li className="text-justify">
            <strong>Improved model:</strong> CNN transfer learning using a ResNet
            backbone via FastAI, trained on standardized face crops.
          </li>
        </ol>
        <p className="text-justify">
          The end-to-end system supports dataset preprocessing, training,
          evaluation (confusion matrix + metrics), and real-time webcam emotion
          predictions.
        </p>
      </section>

      {/* Why it mattered */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Motivation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-justify">
            Build a complete ML workflow locally (data → training → evaluation →
            deployment).
          </li>
          <li className="text-justify">
            Improve model performance with measurable results and clear metrics.
          </li>
          <li className="text-justify">
            Create a reproducible project with documented setup and usage across
            Windows, Linux, and macOS.
          </li>
        </ul>
      </section>

      {/* Data + preprocessing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dataset and Preprocessing</h2>
        <p className="text-justify">
          A major source of error in webcam demos is train–test mismatch:
          training on “clean” images while inferring on webcam face crops. To
          reduce this gap, the pipeline includes a preprocessing step that:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-justify">Detects faces using the same detector used during inference</li>
          <li className="text-justify">Crops the largest detected face with padding</li>
          <li className="text-justify">Resizes crops to a consistent input size</li>
          <li className="text-justify">Saves crops into <code>faces_cropped/&lt;class&gt;</code> folders</li>
        </ul>
        <p className="text-justify">
          This standardized face-crop dataset is used to train the CNN model and
          generally improves robustness under real lighting and camera
          conditions.
        </p>
      </section>

      {/* Modeling */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Modeling Approach</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">1) Baseline: Random Forest</h3>
          <p className="text-justify">
            The baseline model uses a traditional ML workflow: face images are
            resized, flattened into feature vectors, and classified with a
            RandomForest. This provides a quick reference point but typically
            struggles with generalization due to limited representational power.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">2) Improved: CNN Transfer Learning (ResNet + FastAI)</h3>
          <p className="text-justify">
            The improved model uses transfer learning with a ResNet backbone. A
            pretrained vision model is fine-tuned on the face-cropped dataset,
            using augmentation and learning-rate scheduling to improve accuracy
            and stability.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-justify">
              Backbone: ResNet (FastAI vision_learner)
            </li>
            <li className="text-justify">
              Training: frozen head training → unfreeze → fine-tune
            </li>
            <li className="text-justify">
              Evaluation: confusion matrix + per-class performance
            </li>
          </ul>
        </div>
      </section>

      {/* Evaluation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Evaluation</h2>
        <p className="text-justify">
          Performance is validated using a held-out split and reported through:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-justify">Accuracy</li>
          <li className="text-justify">Confusion matrix</li>
          <li className="text-justify">Per-class precision/recall (recommended for imbalanced datasets)</li>
          <li className="text-justify">Macro F1-score (recommended resume metric)</li>
        </ul>
        <p className="text-justify">
          For live demos, inference stability can be improved with smoothing
          (moving average over recent predictions) and a confidence threshold to
          avoid forcing low-confidence outputs.
        </p>
      </section>

      {/* How to run */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Run</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Preprocess faces</h3>
          <pre className="bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`python prep_faces.py`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Train Baseline (Random Forest)</h3>
          <p className="text-justify">
            Run the notebook: <code>facialEmotionClassifier.ipynb</code>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Train Improved Model (CNN)</h3>
          <p className="text-justify">
            Run the notebook: <code>CnnEmotionClassifier.ipynb</code>
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Run webcam inference</h3>
          <pre className="bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`# Random Forest
python runModel.py

# CNN
python runModelCnn.py`}</code>
          </pre>
          <p className="text-justify">Press <code>q</code> to exit.</p>
        </div>
      </section>

      {/* What I’d improve next */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Improvements</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li className="text-justify">
            <strong>Train on face crops only:</strong> ensure training data
            matches webcam inference crops.
          </li>
          <li className="text-justify">
            <strong>Upgrade CNN fine-tuning:</strong> stronger augmentation,
            better LR schedule, and a larger backbone (ResNet34/50).
          </li>
          <li className="text-justify">
            <strong>Handle imbalance + label noise:</strong> clean top-loss
            examples and add class balancing.
          </li>
          <li className="text-justify">
            <strong>Stabilize live predictions:</strong> temporal smoothing +
            confidence thresholding.
          </li>
        </ol>
      </section>

      {/* Links */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Links</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="https://github.com/<YOUR_GITHUB>/<YOUR_REPO>"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub Repository
            </a>
          </li>
          <li className="text-justify">
            Notebooks: <code>facialEmotionClassifier.ipynb</code>,{" "}
            <code>CnnEmotionClassifier.ipynb</code>
          </li>
        </ul>
      </section>
    </main>
  );
}
