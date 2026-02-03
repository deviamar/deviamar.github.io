import React from "react";

export default function EmotionDetectionProject() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-14 text-gray-800 leading-relaxed">
      {/* Title */}
      <header className="space-y-6">
        <h1 className="text-4xl font-bold">Facial Emotion Classification</h1>
        <p className="text-gray-600 text-justify">
          This project studies facial emotion recognition under limited data and compute by
          benchmarking progressively stronger model families on a manually curated dataset.
          Starting from a Random Forest baseline, we transition to transfer-learning CNNs
          (ResNet) and finally a Vision Transformer (ViT). Models are evaluated with
          accuracy, macro-F1, and confusion matrices, with attention to robustness under
          real webcam input.
        </p>
      </header>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="text-justify">
          We started from a noisy Kaggle facial expression dataset and manually curated it
          into four classes: <strong>happy</strong>, <strong>neutral</strong>,{" "}
          <strong>sad</strong>, and <strong>surprise</strong>. Each image was reviewed to
          remove incorrect labels, heavy occlusion, watermarks/large text overlays, and
          ambiguous expressions. The final dataset contains approximately{" "}
          <strong>~700 images per class</strong> (≈2.8k total).
        </p>
        <p className="text-justify">We evaluate three model families:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Random Forest:</strong> classical baseline using flattened pixel features.
          </li>
          <li>
            <strong>CNN (ResNet):</strong> ImageNet-pretrained backbone fine-tuned with FastAI.
          </li>
          <li>
            <strong>Vision Transformer (ViT):</strong> transformer backbone fine-tuned on the curated dataset.
          </li>
        </ol>
      </section>

      {/* Data */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dataset and Preprocessing</h2>
        <p className="text-justify">
          A key failure mode in emotion recognition is mismatch between training images and
          webcam frames. To reduce this gap, we add a face-cropping preprocessing step that:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Detects faces using the same detector used at inference time.</li>
          <li>Selects the largest detected face and applies padding.</li>
          <li>Resizes images to a fixed resolution (224×224 for deep models).</li>
          <li>Stores standardized crops in <code>faces_cropped/&lt;class&gt;</code>.</li>
        </ul>
        <p className="text-justify">
          During training, we use conservative “face-safe” augmentation (small rotation/zoom,
          mild lighting variation, minimal warp) to improve generalization without distorting
          expression geometry.
        </p>
      </section>

      {/* Results Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Results</h2>
        <ul className="list-disc pl-6 space-y-2 text-justify">
          <li>
            <strong>Random Forest baseline:</strong> Accuracy ≈ <strong>0.540</strong>, Macro-F1 ≈{" "}
            <strong>0.530</strong>.
          </li>
          <li>
            <strong>Naive CNN fine-tune (ResNet-34):</strong> started near chance (val acc ≈{" "}
            <strong>0.20</strong>), peaked at <strong>0.631</strong>, and ended at{" "}
            <strong>0.585</strong>, with rising validation loss indicating mild overfitting.
          </li>
          <li>
            <strong>Tuned CNN (ResNet-34, curated data + face-safe aug + early stopping):</strong>{" "}
            Accuracy ≈ <strong>0.764</strong>, Macro-F1 ≈ <strong>0.755</strong>. Large gains
            were driven by improved data quality and training protocol rather than architecture.
          </li>
          <li>
            <strong>Vision Transformer (ViT):</strong> Accuracy ≈ <strong>0.780</strong>, Macro-F1 ≈{" "}
            <strong>0.771</strong> (best overall).
          </li>
        </ul>
      </section>

      {/* Modeling */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Modeling Approach</h2>

        {/* RF */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Baseline: Random Forest</h3>
          <p className="text-justify">
            Images are resized and flattened into pixel vectors and classified using a Random
            Forest. This baseline quantifies the limitations of hand-engineered pixel features
            for subtle facial expression discrimination, particularly for visually similar
            classes (e.g., neutral vs sad).
          </p>
          <ul className="list-disc pl-6">
            <li>Accuracy ≈ <strong>0.540</strong></li>
            <li>Macro-F1 ≈ <strong>0.530</strong></li>
          </ul>
        </div>

        {/* Naive CNN learning curve */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">CNN Transfer Learning (ResNet) — Initial Run</h3>
          <p className="text-justify">
            We first fine-tuned an ImageNet-pretrained ResNet-34 using a minimal training recipe.
            Performance began near chance for a 4-class task (val acc ≈ <strong>0.20</strong>) and
            improved rapidly, but later epochs showed increasing validation loss, consistent with
            limited-data overfitting and unstable optimization.
          </p>
          <ul className="list-disc pl-6">
            <li>Start: Accuracy ≈ <strong>0.200</strong> (epoch 0)</li>
            <li>Peak: Accuracy ≈ <strong>0.631</strong> (epoch 6)</li>
            <li>Final: Accuracy ≈ <strong>0.585</strong> (epoch 7)</li>
          </ul>
        </div>

        {/* Tuned CNN */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">CNN Transfer Learning (ResNet) — Tuned Model</h3>
          <p className="text-justify">
            We then improved training by using the curated dataset, conservative face-safe
            augmentation, and explicit generalization control (best-checkpoint selection and early
            stopping). With the same ResNet-34 backbone, this produced a large jump in performance,
            demonstrating that data quality and training protocol dominated model capacity in this regime.
          </p>
          <ul className="list-disc pl-6">
            <li>Accuracy ≈ <strong>0.764</strong></li>
            <li>Macro-F1 ≈ <strong>0.755</strong></li>
            
          </ul>
        </div>

        {/* ViT */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Vision Transformer (ViT)</h3>
          <p className="text-justify">
            A Vision Transformer is fine-tuned via transfer learning. ViT models global relationships
            between image patches using self-attention, which can better capture distributed facial cues
            (eyes–brows–mouth interactions) than purely local convolutional features.
          </p>
          <ul className="list-disc pl-6">
            <li>Accuracy ≈ <strong>0.780</strong></li>
            <li>Macro-F1 ≈ <strong>0.771</strong></li>
            <li>
              Happy class (notable improvement): Precision ≈ <strong>0.822</strong>, Recall ≈{" "}
              <strong>0.879</strong> (F1 ≈ <strong>0.850</strong>)
            </li>
          </ul>
        </div>
      </section>

      {/* Evaluation */}
<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Evaluation and Failure Modes</h2>
  <p className="text-justify">
    Rather than relying on a single accuracy value, we evaluated models using both{" "}
    <strong>accuracy</strong> and <strong>macro-F1</strong> and examined confusion matrices to
    understand how different emotions were being misclassified in practice. This made it possible
    to assess not only overall performance, but also whether errors were concentrated in specific
    classes.
  </p>
  <p className="text-justify">
    Across all model families, the same pattern emerged: confusion between{" "}
    <strong>neutral</strong> and <strong>sad</strong>. This reflects the subtle visual boundary
    between these expressions and residual ambiguity in the dataset even after manual curation.
    In contrast, <strong>happy</strong> and <strong>surprise</strong> were consistently easier to
    classify due to more distinct facial cues.
  </p>
</section>

{/* Deployment */}
<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Live Webcam Inference</h2>
  <p className="text-justify">
    To move beyond static image evaluation, we deployed the trained models in a real-time webcam
    pipeline using OpenCV. This exposed challenges that are not present in curated datasets,
    including lighting variation, motion blur, partial occlusion, and inconsistent face framing.
  </p>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      We standardized face cropping so that webcam frames matched the training distribution: the
      largest detected face is selected, padded to preserve facial context, and resized
      consistently before classification.
    </li>
    <li>
      We applied confidence-based filtering so that low-confidence predictions are labeled as{" "}
      <em>uncertain</em> rather than forcing unstable emotion outputs.
    </li>
    <li>
      This deployment step highlighted the importance of preprocessing consistency for achieving
      reliable behavior under real-world input.
    </li>
  </ul>
</section>

{/* Takeaway */}
<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Key Takeaways</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      The largest performance gains came from <strong>dataset curation and preprocessing</strong>,
      not from changing architectures.
    </li>
    <li>
      A tuned ResNet substantially outperformed a naive fine-tuning run, showing that{" "}
      <strong>training protocol mattered more than model size</strong> in this regime.
    </li>
    <li>
      Vision Transformers achieved the strongest overall results, but the improvement over a
      well-trained CNN was incremental, indicating that expression ambiguity is now the dominant
      bottleneck.
    </li>
    <li>
      Persistent confusion between neutral and sad suggests that future progress depends more on{" "}
      <strong>better labeling criteria or richer data</strong> than on deeper networks alone.
    </li>
  </ul>
</section>

    </main>
  );
}