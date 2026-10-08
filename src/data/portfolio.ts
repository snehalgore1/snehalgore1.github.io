// ─────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH for Snehal's portfolio.
//  Edit content here - every section reads from this file.
//  Facts sourced from Snehal's resume + GitHub. Do not invent metrics.
// ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  context?: string;        // e.g. "Early-Stage InsurTech Startup"
  role: string;
  location: string;
  period: string;
  summary?: string;        // italic one-liner shown under the role
  impact?: string[];       // short metric chips shown above the bullets
  bullets: string[];       // always visible
  moreBullets?: string[];  // revealed by "Show more"
  tech: string[];
}

export interface Project {
  id: string;
  org?: string;            // employer, for industry case studies
  title: string;
  tagline: string;         // one-line, plain English
  featured: boolean;       // shown on home + top of projects
  category: 'Systems' | 'ML Systems' | 'AI / LLM' | 'Tools' | 'Edge ML' | 'Applied ML' | 'Backend';
  whatItIs: string;
  whyItMatters: string;
  whatIBuilt: string[];
  outcomes: string[];      // concrete metrics from the resume
  tech: string[];
  github?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  detail?: string;
}

export const profile = {
  name: 'Snehal Gore',
  role: 'Software Engineer · AI & ML',
  // One concise positioning line for the hero.
  positioning:
    "I build software that has to work in the real world: machine learning on a dryer's tiny microcontroller, an LLM over live payment data that can't make up numbers, and backends that move money exactly once.",
  // Short facts line under the hero.
  heroFacts: ['2.5+ yrs shipping production software', 'M.S. CS (AI), USC · Dec 2026', 'Available full-time Jan 2027'],
  // A tiny playful aside in About.
  nowNote: 'Currently: finishing my M.S. at USC, and learning pickleball.',
  location: 'Los Angeles, CA',
  openToWork: true,
  // Short one-liner (used in meta / fallbacks).
  summary:
    "Software engineer with 2.5+ years shipping production ML, finishing an M.S. in Computer Science (AI) at USC in December 2026.",
  // Multi-paragraph About (all resume-sourced).
  aboutParagraphs: [
    "I studied computer engineering in Pune, India, then spent two and a half years at Whirlpool putting machine learning into ovens, dryers and washers. Now I'm in Los Angeles, finishing my M.S. in Computer Science (AI) at USC.",
    "I like problems with a hard constraint attached, performance you can actually measure, and software that real people end up using. On a team, I'm the one who stays calm when something breaks in production.",
  ],
  aboutFacts: [
    { label: 'Based in', value: 'Los Angeles, CA · open to relocating anywhere in the US' },
    { label: 'Work status', value: 'Authorized to work in the US (STEM OPT eligible)' },
    { label: 'Graduating', value: 'M.S. CS (AI), USC · Dec 2026' },
    { label: 'Looking for', value: 'Full-time SWE, AI/ML and FDE roles · Jan 2027' },
    { label: 'Off the clock', value: 'Soccer, table tennis, pickleball, cooking' },
  ],
  email: 'ssgore18@gmail.com',
  phone: '+1 310-462-7354',
  linkedin: 'https://linkedin.com/in/snehal-gore',
  github: 'https://github.com/snehalgore1',
  // Base-aware so it works both in dev ("/") and on GitHub Pages ("/portfolio/").
  resumeFile: `${import.meta.env.BASE_URL}Snehal_Gore_Resume.pdf`, // PDF lives in /public
};

export const nav: NavItem[] = [
  { label: 'Story', href: '#story' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const experience: ExperienceItem[] = [
  {
    company: 'SnapRefund',
    context: 'Early-Stage InsurTech Startup',
    role: 'Software Engineer Intern',
    location: 'Los Angeles, CA',
    period: 'May 2026 – Aug 2026',
    summary: 'Built a production LLM assistant and the payments backend it runs on, across two white-label insurance products.',
    impact: ['45% → 5% ungrounded answers', '10K+ users migrated, 0 password resets', 'Exactly-once disbursements'],
    bullets: [
      'Built AiSnap, a production Gemini function-calling assistant that lets merchants and admins query live payment data in natural language, translating questions into typed PostgreSQL tools for search, aggregation, payment statistics, and check intelligence via a NestJS API.',
      'Reduced ungrounded financial answers from 45% to 5% by detecting responses that reported figures without a database call and forcing tool-use regeneration; added tenant-scoped queries, field allowlisting, PII sanitization, and burst/daily rate limiting.',
      'Led migration of the payments platform from Firebase Cloud Functions to NestJS/PostgreSQL, re-implementing Firebase\'s scrypt password hashing so 10K+ existing users authenticated with zero password resets.',
      'Engineered concurrency-safe payment processing with PostgreSQL SKIP LOCKED row locking and stale-lock recovery to horizontally scale mass-payment workers, using idempotency keys to guarantee exactly-once recurring disbursements.',
    ],
    moreBullets: [
      'Built signed outbound webhook delivery with HMAC-SHA256 signatures, exponential retry, and per-account event subscriptions on AWS SQS, routing failures through a dead-letter queue to SNS/Lambda Slack alerts, provisioned in Pulumi across 4 environments.',
      'Implemented role-based access control for a multi-tenant platform serving two white-label insurance products: team invites, page-level permissions, and about 20 composable NestJS guards enforcing KYC status, payment permissions, and account type.',
      'Engineered per-merchant OFAC-validation billing end to end: a new fee type, a TypeORM migration, an admin fee-configuration UI in Vue, and charge logic wired into the payment flow and monthly billing cron.',
      'Shipped Admin Dashboard payment-detail views and identity validation (state normalization, 18+ age checks), expanded unit test coverage, and ran code reviews and end-to-end QA across test, staging, and production.',
    ],
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Gemini', 'AWS SQS/SNS/Lambda', 'Pulumi', 'Vue 3 / Nuxt 3', 'Vitest'],
  },
  {
    company: 'Whirlpool Corporation',
    role: 'Software Engineer, Machine Learning',
    location: 'Pune, India',
    period: 'Jul 2022 – Dec 2024',
    summary: 'Owned ML systems end to end, from raw telemetry to models running on 1M+ appliances in people\'s homes.',
    impact: ['$250K+/yr cloud cost eliminated', '7× lower dryer ETR error', 'STAR Award', 'Hackathon 1st of 200+ teams'],
    bullets: [
      'Migrated production ML inference from cloud to on-device execution across 1M+ connected appliances by deploying quantized TensorFlow Lite models to appliance controllers and Android displays, eliminating $250K+/year in cloud costs and cutting latency 3×.',
      'Replaced legacy rule-based dryer time-remaining logic with an on-device neural network under 1K parameters, deployed via TinyML to 1M+ dryers, cutting prediction error 7× (±35 to ±5 min) and resolving the top driver of negative reviews.',
      'Built the oven\'s lens-cleanliness detection in the Android touchscreen app (Java, CameraX, TensorFlow Lite): live frames split into a 4×4 grid for INT8 EfficientNet inference, prompting a clean at 75%+ obstruction. Won a Whirlpool STAR Award.',
      'Automated build, packaging, and staged OTA rollout of on-device models across cooking and laundry product lines, cutting release cycles from days to hours while sustaining 99.5% latency-SLA compliance with a 60% smaller model footprint.',
    ],
    moreBullets: [
      'Architected the MLOps workflow for dryer time-series data (Redshift to S3 Parquet, SageMaker training jobs, MLflow versioning, retraining on new field data), reused across 7 follow-on ML proofs of concept.',
      'Reduced residual-moisture estimation RMSE by up to 81% vs. the legacy algorithm by designing a two-stage neural network around thermodynamic warmup and steady-state dryer phases under strict edge-compute limits.',
      'Generated 50K+ synthetic stain images by fine-tuning Stable Diffusion with DreamBooth, raising a 20+ class stain classifier\'s accuracy 38%; fine-tuned Mistral-7B with QLoRA on 8K+ fabric-care prompt pairs to turn predictions into wash recommendations.',
      'Built and shipped a FastAPI inference service (Faster R-CNN) for fridge food inventory and the lens system, with model versioning and lifecycle management on SageMaker, S3, and MLflow.',
      'Shipped OTA model updates and evaluated them in-field through Engineering Field Testing (EFT) and Consumer Use Field Testing (CuFT), with telemetry-based regression monitoring.',
      'Automated the migration of 500+ repositories from IBM RTC to GitHub Enterprise Cloud using Python and Bash, preserving full commit history and cutting per-user licensing costs 82%.',
      'Won 1st place out of 200+ teams at the Whirlpool Global Software Hackathon (May 2024) for an on-device AI recipe recommender that learned user habits to auto-suggest oven settings; mentored interns on development and deployment.',
    ],
    tech: ['Python', 'Java', 'C++', 'TensorFlow Lite / TFLite Micro', 'PyTorch', 'AWS SageMaker', 'AWS Redshift', 'MLflow', 'FastAPI', 'Android / CameraX'],
  },
  {
    company: 'QuantXpress Technologies',
    role: 'Data Analyst Intern',
    location: 'Pune, India',
    period: 'Jun 2021 – Aug 2021',
    summary: 'Automated technical analysis for a trading desk.',
    impact: ['+39% technical-analysis accuracy', '15% fewer false positives'],
    bullets: [
      'Improved technical-analysis accuracy by 39% by building a candlestick pattern recognition system (Python, TA-Lib, Backtrader) identifying 30+ patterns such as Morning Star and Engulfing.',
      'Built pipelines that turned OHLC stock data into structured trading signals, reducing false positives by 15% through strategy backtesting and PyTest-driven validation; delivered daily signal dashboards to senior fund managers.',
    ],
    tech: ['Python', 'TA-Lib', 'Backtrader', 'pandas', 'PyTest'],
  },
];

// Deep dives into production work. These are employer systems, so there is no
// public repo; the case study carries the story instead.
export const caseStudies: Project[] = [
  {
    id: 'aisnap',
    org: 'SnapRefund',
    title: 'AiSnap: an LLM that won\'t make up your numbers',
    tagline: 'A natural-language assistant over live payment data, built so every figure it reports comes from the database.',
    featured: true,
    category: 'AI / LLM',
    whatItIs:
      'A production Gemini function-calling assistant inside SnapRefund\'s merchant and admin apps. People ask questions like "how much did we pay out last month" and it answers by calling typed PostgreSQL tools over 112 TypeORM entities.',
    whyItMatters:
      'In finance, a confident wrong number is worse than no answer. Before the fix, 45% of answers that quoted figures never touched the database. The interesting work was making the model provably grounded, safe across tenants, and cheap to run.',
    whatIBuilt: [
      'Typed NestJS tools for search, aggregation, payment statistics, and check intelligence, exposed to Gemini through function calling.',
      'A grounding check that flags any response reporting figures without a database call and forces tool-use regeneration, cutting ungrounded answers from 45% to 5%.',
      'A safety layer: tenant-scoped queries, field allowlisting, PII sanitization, and burst/daily rate limits to bound inference cost.',
    ],
    outcomes: ['45% → 5% ungrounded answers', '112 entities queryable in plain English', 'Tenant-scoped, PII-sanitized'],
    tech: ['Gemini function calling', 'NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM'],
  },
  {
    id: 'lens',
    org: 'Whirlpool · STAR Award',
    title: 'Teaching an oven to know its camera is dirty',
    tagline: 'Every vision feature in the oven fails when the lens fogs up. I built the model that tells you when to wipe it.',
    featured: true,
    category: 'Edge ML',
    whatItIs:
      'A lens-contamination detector that runs on the oven\'s Android touchscreen. It watches the live camera feed and asks the user to clean the lens before food recognition and doneness detection start making mistakes.',
    whyItMatters:
      'Cook bacon once and the lens is covered in oil and steam. Every downstream camera model (food recognition, doneness) silently degrades, so this model is the gatekeeper for the whole smart-oven feature set.',
    whatIBuilt: [
      'Started with YOLOv3 object detection for stains and vapor; it was too heavy for the oven hardware, so I reframed the problem as 4×4 grid classification.',
      'Benchmarked MobileNetV3, ResNet, InceptionV3, and EfficientNet; shipped a fine-tuned EfficientNet, INT8-quantized to TensorFlow Lite.',
      'Calibrated the 75% threshold (12 of 16 tiles) by measuring where the downstream doneness and food-recognition models began failing.',
      'Wrote the Java/CameraX inference loop on the Android HMI, plus a Tkinter annotation tool and labeling pipeline that curated 50K+ training images.',
    ],
    outcomes: ['Whirlpool STAR Award', 'INT8 on-device inference', '50K+ curated images'],
    tech: ['TensorFlow Lite', 'EfficientNet', 'Java', 'CameraX', 'AWS SageMaker', 'MLflow'],
  },
  {
    id: 'dryer-etr',
    org: 'Whirlpool',
    title: 'A 1K-parameter model that fixed the dryer\'s clock',
    tagline: 'Dryers kept lying about how long was left. A tiny neural net, small enough for the dryer\'s microcontroller, made it 7× more accurate.',
    featured: true,
    category: 'Edge ML',
    whatItIs:
      'Whirlpool\'s first on-device dryer ML model: an estimated-time-remaining (ETR) predictor that replaced hand-written if/else rules, running directly on the appliance controller.',
    whyItMatters:
      'Analysis of low-star reviews showed wrong time estimates were the number one complaint. The catch: the controller has almost no memory, so the best offline model was useless if it could not fit on the device.',
    whatIBuilt: [
      'SQL extraction of telemetry from AWS Redshift (about 1M cycles from 200K+ users) into S3 Parquet, with SageMaker training jobs and MLflow versioning.',
      'Cleaning of noisy real-world cycles: mid-cycle door opens, empty runs, and restarts on already-dry clothes, plus sensor outliers.',
      'Features from initial moisture, drum temperature curve, heater duty cycle, and exhaust temperature rate of change.',
      'LSTM, XGBoost, and Random Forest all exceeded controller memory, so I designed an ANN under 1K parameters and deployed it with TinyML. The pipeline became the template for 7 follow-on ML proofs of concept.',
    ],
    outcomes: ['7× lower error (±35 → ±5 min)', 'Shipped to 1M+ dryers', '< 1K parameters'],
    tech: ['TFLite Micro', 'Python', 'AWS Redshift', 'S3', 'SageMaker', 'MLflow'],
  },
  {
    id: 'stain-care',
    org: 'Whirlpool',
    title: 'Stain-care: from a photo to a wash cycle',
    tagline: 'A multimodal prototype: snap a stain, get pre-treatment and wash instructions.',
    featured: false,
    category: 'AI / LLM',
    whatItIs:
      'A prototype for the Whirlpool app that pairs a stain classifier with a fine-tuned LLM, turning a photo of a stain into pre-treatment steps and a recommended wash cycle.',
    whyItMatters:
      'Real stain photos under appliance lighting are scarce, and generic LLMs give generic laundry advice. Both halves needed domain data that did not exist yet.',
    whatIBuilt: [
      'Fine-tuned Stable Diffusion with DreamBooth to generate 50K+ synthetic stain images across fabrics and backgrounds, raising a 20+ class classifier\'s accuracy 38% over real data alone.',
      'Fine-tuned Mistral-7B with QLoRA on 8K+ fabric-care prompt pairs to turn stain predictions into actionable recommendations.',
    ],
    outcomes: ['+38% classifier accuracy', '50K+ synthetic images', 'Mistral-7B + QLoRA'],
    tech: ['Stable Diffusion', 'DreamBooth', 'Mistral-7B', 'QLoRA', 'PyTorch'],
  },
];

export const projects: Project[] = [
  {
    id: 'distributed-object-store',
    title: 'Distributed Object Store',
    tagline: 'A cloud-style storage system that keeps files safe and available even when servers crash.',
    featured: true,
    category: 'Systems',
    whatItIs:
      'A distributed, fault-tolerant object store written in C++20 that keeps data available and consistent even when storage nodes fail.',
    whyItMatters:
      'Object stores are the backbone of cloud storage. Building one end to end, including the consensus algorithm, means understanding replication, durability, and failure recovery at the level real systems need.',
    whatIBuilt: [
      'Consistent hashing with 3-way replication and quorum writes, checksum-verified reads, failure detection, and anti-entropy repair across nodes.',
      'A Raft consensus engine from scratch for the metadata control plane: pre-vote elections, persistent replicated logs, majority commit, follower catch-up, and leader failover over gRPC.',
      'Concurrent request handling with bounded thread pools, sharded read/write locks, WAL-backed crash recovery, and atomic fsync/rename writes.',
      'Benchmarked the design choices: consistent hashing moved 25.25% of keys when adding a 4th node vs 74.99% for modulo hashing, and an LRU metadata cache raised hot-read throughput about 30% and cut p50 latency 23%.',
      'Chaos tests that kill nodes and corrupt data; conditional and idempotent writes (expected_version, request_id) make client retries safe.',
    ],
    outcomes: [
      '~3.8K req/s on a 3-node cluster',
      '131 tests incl. chaos + ThreadSanitizer CI',
      '~3× fewer keys moved vs. modulo hashing',
    ],
    tech: ['C++20', 'gRPC', 'Raft', 'Protobuf', 'SQLite', 'CMake', 'GoogleTest', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    github: 'https://github.com/snehalgore1/distributed-object-storage',
  },
  {
    id: 'mini-tensorrt',
    title: 'MiniTensorRT',
    tagline: 'Custom software that runs AI language models fast, on both regular processors and GPUs.',
    featured: true,
    category: 'ML Systems',
    whatItIs:
      'A from-scratch C++17 inference runtime with its own graph IR (JSON/ONNX loaders), fusion and constant-folding passes, and CPU and CUDA backends. It runs GPT-2 (124M) token-for-token identical to Hugging Face.',
    whyItMatters:
      'Inference cost and latency decide whether a model is usable in production. Writing the runtime by hand exposes exactly where the time and memory go, and how to get them back.',
    whatIBuilt: [
      'Optimized GEMM from 1.7 to 310 GFLOP/s (~180×) with ARM NEON SIMD and multithreading; cut transformer-block latency 56× and memory 12.5× via arena memory planning and operator fusion.',
      'Ported the runtime to CUDA with hand-written LayerNorm, softmax, and elementwise kernels plus cuBLAS GEMM: a 64-token GPT-2 forward pass in 21.7 ms on a Tesla T4, with a device memory arena cutting peak memory 98%.',
      'Implemented FP16 WMMA Tensor Core GEMM, tiled SGEMM, and FlashAttention-style online-softmax kernels, validated against cuBLAS and PyTorch.',
      'Per-channel INT8 weight quantization (4× compression, 8.8× lower logit error than per-tensor) and a KV-cache decode path with 1.87× faster generation and byte-identical output.',
      'A per-operator profiler with Chrome Trace output, and 63 golden and unit tests in CI.',
    ],
    outcomes: [
      '~180× GEMM speedup (1.7 → 310 GFLOP/s)',
      'GPT-2 in 21.7 ms on a Tesla T4',
      'Token-identical to Hugging Face',
      '56× lower block latency, 12.5× less memory',
    ],
    tech: ['C++17', 'CUDA', 'cuBLAS', 'ARM NEON SIMD', 'CMake', 'ONNX'],
    github: 'https://github.com/snehalgore1/mini-tensorrt',
  },
  {
    id: 'agentic-rag',
    title: 'Agentic RAG & Information Retrieval Platform',
    tagline: 'A search system that gives AI accurate, source-backed answers in under 2 seconds.',
    featured: true,
    category: 'AI / LLM',
    whatItIs:
      'A production-shaped retrieval-augmented-generation platform that indexes thousands of documents and serves grounded, low-latency answers.',
    whyItMatters:
      'RAG is only useful if answers are grounded and fast. This project focuses on retrieval quality and guardrails, not just wiring an LLM to a vector store.',
    whatIBuilt: [
      'End-to-end platform indexing 10K+ documents across 7 containerized services, serving grounded responses at <2s p95 latency.',
      'Hybrid retrieval combining BM25 and dense retrieval with Reciprocal Rank Fusion, improving Recall@10 by 35%.',
      'A LangGraph agent with relevance grading, adaptive query rewriting and expansion, retrieval routing, and out-of-domain guardrails.',
      'Airflow-orchestrated chunking, embedding, and OpenSearch ingestion, with Redis caching on the serving path.',
    ],
    outcomes: ['<2s p95 latency', '+35% Recall@10', '10K+ documents, 7 services'],
    tech: ['Python', 'LangGraph', 'FastAPI', 'OpenSearch', 'PostgreSQL', 'Redis', 'Airflow', 'Docker'],
    github: 'https://github.com/snehalgore1/agentic-rag',
  },
  {
    id: 'mode',
    title: 'MoDE: Difficulty-Aware Compute for Reasoning Models',
    tagline: 'Makes AI reasoning cheaper by spending extra effort only on the hard questions.',
    featured: true,
    category: 'AI / LLM',
    whatItIs:
      'A framework that predicts, per question, how much thinking effort a large model should spend, so easy questions stop wasting compute.',
    whyItMatters:
      'Reasoning models burn compute uniformly regardless of difficulty. Allocating budget by predicted complexity cuts cost without hurting answers.',
    whatIBuilt: [
      'Fine-tuned Llama-3.2-3B with LoRA (rank 32) on 484K math and code reasoning traces on GCP Vertex AI to predict token budgets, reaching Pearson r = 0.809 (R² = 0.640).',
      'An 11-expert Mixture of Difficulty Experts (MoDE) routing architecture that allocates reasoning compute by predicted query complexity.',
    ],
    outcomes: ['Pearson r = 0.809', '45.3% lower compute-allocation loss', 'NeurIPS-style poster, USC CSCI 566'],
    tech: ['Python', 'PyTorch', 'Llama 3.2-3B', 'HuggingFace', 'LoRA', 'Vertex AI'],
    github: 'https://github.com/snehalgore1/reasoning-budget',
  },
  {
    id: 'efficient-llm',
    title: 'Efficient LLM Inference: INT4 + Mixture-of-Experts',
    tagline: 'Shrinks a large AI model by 60% so it runs on smaller, cheaper hardware.',
    featured: false,
    category: 'ML Systems',
    whatItIs:
      'A study in making LLM inference cheaper: per-group INT4 quantization plus a sparse Mixture-of-Experts on Llama 3.2-1B.',
    whyItMatters:
      'Memory footprint gates where a model can run. Quantization and sparsity are the two biggest levers, so I implemented both from the ground up.',
    whatIBuilt: [
      'Per-group INT4 weight-only quantization for Llama 3.2-1B via 4-bit weight packing and group-wise scaling, cutting memory 60.6% (2.86 GB → 1.13 GB).',
      'Benchmarked FP16 vs. INT4 across batch sizes and traced a 35% to 2× INT4 slowdown to dequantized FP16 weights being materialized in HBM, showing why fused dequantize-matmul kernels matter for memory-bound decode.',
      'A top-2 Mixture-of-Experts with learned token routing and LoRA fine-tuning, training only 2.23M of 1.50B parameters (0.15%).',
    ],
    outcomes: ['−60.6% memory (2.86 → 1.13 GB)', '9.59 perplexity vs. 9.66 dense, training 0.15% of params'],
    tech: ['Python', 'PyTorch', 'CUDA', 'Llama 3.2-1B', 'LoRA'],
    github: 'https://github.com/snehalgore1/Efficient-LLM-Inference',
  },
  {
    id: 'preference-falsification',
    title: 'Preference Falsification in LLM Multi-Agent Networks',
    tagline: 'A study of when AI agents hide their true opinions under social pressure.',
    featured: false,
    category: 'AI / LLM',
    whatItIs:
      'A controlled experiment with many AI agents, studying when they misrepresent their private beliefs under social pressure.',
    whyItMatters:
      'As AI systems with many agents grow, understanding group behavior like conformity and self-censorship matters for reliability and safety.',
    whatIBuilt: [
      'A simulation with 24 Gemini agents across 7 experimental conditions varying social pressure and private information.',
      'A dual-channel design (private belief vs. public statement) with a same-prompt control that isolated audience framing as an independent driver of divergence.',
      'Quantitative evaluation measuring a 2.26–2.72 Falsification Gap vs. a 1.32 stochastic baseline; a single whistleblower agent reduced the gap up to 47%.',
    ],
    outcomes: ['24 agents × 7 conditions', 'Whistleblower cut falsification up to 47%', 'Co-authored paper (ACL ARR format)'],
    tech: ['Python', 'Gemini 2.0 Flash', 'Vertex AI', 'Multi-Agent Systems', 'LLM Evaluation'],
    github: 'https://github.com/snehalgore1/Preference-Falsification',
  },
  {
    id: 'cuda-kernels',
    title: 'CUDA Kernel Implementations',
    tagline: 'Hand-optimized GPU code that speeds up the core math behind machine learning.',
    featured: false,
    category: 'ML Systems',
    whatItIs:
      'A set of seven GPU programs (reduction, matrix multiply, tiling, transpose) implemented and benchmarked on an NVIDIA P100.',
    whyItMatters:
      'GPU performance lives and dies on memory access patterns. These kernels make the difference between naive and optimized concrete and measurable.',
    whatIBuilt: [
      'Seven kernels covering parallel reduction, GEMM, 32×32 shared-memory tiling, memory coalescing, and matrix transpose.',
      'Eliminated 32-way shared-memory bank conflicts using padded 32×33 tiles; validated all kernels against CPU reference implementations.',
    ],
    outcomes: ['7 kernels on an NVIDIA P100', '32-way bank conflicts eliminated'],
    tech: ['CUDA C++', 'NVIDIA P100', 'USC CARC'],
    github: 'https://github.com/snehalgore1/CUDA-Kernel-Implementations',
  },
  {
    id: 'kernel-dataflow',
    title: 'Kernel Design & Dataflow Simulation',
    tagline: 'High-performance math code plus simulations of how AI chips move data.',
    featured: false,
    category: 'ML Systems',
    whatItIs:
      'Custom convolution and matrix-multiply code built as PyTorch extensions, plus simulations of how AI accelerator chips move data around.',
    whyItMatters:
      'Understanding how data moves through a chip is the key to AI hardware performance, so I modeled those dataflows directly.',
    whatIBuilt: [
      'im2col convolution and six custom GEMM kernels as PyTorch C++ extensions, from naive loop orderings to cache-blocked, AVX-vectorized, and multithreaded.',
      'Multiprocessing simulations of weight-, output-, and input-stationary accelerator dataflows, validating each against CPU ground truth.',
    ],
    outcomes: ['6 matrix-multiply kernels benchmarked vs. PyTorch', '3 accelerator dataflows simulated and validated'],
    tech: ['C++', 'Python', 'PyTorch C++ Extensions', 'AVX SIMD', 'Multithreading'],
    github: 'https://github.com/snehalgore1/Kernel-Design-Dataflow-Simulation',
  },
  {
    id: 'transformer-scratch',
    title: 'Transformer from Scratch',
    tagline: 'Built the core architecture behind modern AI (like ChatGPT) from scratch, then trained it to translate.',
    featured: false,
    category: 'AI / LLM',
    whatItIs:
      'A complete encoder-decoder Transformer implemented from scratch in PyTorch and trained for English→Spanish translation.',
    whyItMatters:
      'Building attention, masking, and decoding by hand is the clearest way to actually understand the architecture behind modern LLMs.',
    whatIBuilt: [
      'Multi-head scaled dot-product attention, sinusoidal positional encoding, masked self-attention, cross-attention, feed-forward layers, residuals, and layer norm.',
      'Full training/inference pipeline: custom tokenizer, variable-length batching, causal/source-target masking, and configurable beam search.',
    ],
    outcomes: ['Trained on 20K parallel sentence pairs (USC CARC / Colab)'],
    tech: ['Python', 'PyTorch', 'CUDA/GPU Training', 'NLP'],
    github: 'https://github.com/snehalgore1/Transformer-from-Scratch',
  },
  {
    id: 'greenprompt',
    title: 'GreenPrompt',
    tagline: 'A Chrome extension that rewrites AI prompts to cut cost and energy use.',
    featured: false,
    category: 'Tools',
    whatItIs:
      'A Chrome extension that injects a prompt-optimization workflow into the Gemini web UI and estimates the energy/cost savings.',
    whyItMatters:
      'Small prompt changes add up across millions of queries. GreenPrompt makes the token and energy cost of a prompt visible and actionable.',
    whatIBuilt: [
      'A Chrome extension integrating with Gemini via content scripts, background services, DOM observers, and the Gemini API.',
      'One-click prompt rewriting and evaluation comparing token usage and clarity, plus an impact dashboard built with Chart.js.',
    ],
    outcomes: ['40–45% less prompt token redundancy', 'Built at SF Hacks 2026'],
    tech: ['JavaScript', 'Chrome Extension APIs', 'Gemini API', 'Chart.js'],
    github: 'https://github.com/snehalgore1/sfhacks2026-greenprompt',
  },
];

export const education: EducationItem[] = [
  {
    school: 'University of Southern California',
    degree: 'M.S. Computer Science, AI Specialization',
    location: 'Los Angeles, CA',
    period: 'Jan 2025 – Dec 2026 (Expected)',
    detail:
      'Coursework: Analysis of Algorithms, Information Retrieval & Web Search, Hardware Foundations of ML, Machine Learning, Applied NLP, Deep Learning, Foundations of AI.',
  },
  {
    school: 'Savitribai Phule Pune University',
    degree: 'B.E. Computer Engineering',
    location: 'Pune, India',
    period: 'May 2018 – May 2022',
    detail: 'GPA 9.4/10. Published "Stock Market Prediction and Analysis Using ML Algorithms" in IRJET (2022).',
  },
];

export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['C++', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Systems', items: ['Distributed Systems', 'Multithreading', 'Concurrency', 'gRPC', 'Protobuf', 'Raft', 'CUDA', 'ARM NEON SIMD', 'CMake'] },
  { group: 'Backend & Data', items: ['NestJS', 'FastAPI', 'Node.js', 'PostgreSQL', 'TypeORM', 'Redis', 'OpenSearch', 'AWS Redshift', 'REST APIs'] },
  { group: 'Cloud & Infra', items: ['AWS (SQS, SNS, Lambda, S3)', 'GCP', 'Docker', 'Kubernetes', 'Pulumi', 'GitHub Actions', 'Prometheus / Grafana'] },
  { group: 'ML & Edge', items: ['PyTorch', 'TensorFlow', 'TensorFlow Lite / TinyML', 'ONNX', 'INT8/INT4 Quantization', 'Computer Vision', 'Time Series'] },
  { group: 'LLMs & GenAI', items: ['Gemini Function Calling', 'LangGraph', 'RAG / Hybrid Search', 'LoRA / QLoRA', 'Hugging Face', 'Stable Diffusion'] },
  { group: 'MLOps', items: ['MLflow', 'SageMaker', 'Vertex AI', 'OTA Model Deployment', 'Airflow'] },
];

// Role-based skill views. A recruiter can flip to what's relevant to their hire.
// Every item is drawn from Snehal's resume + shipped projects (no invented skills).
export interface SkillTrack {
  id: 'all' | 'swe' | 'ml';
  label: string;
  blurb: string;
  groups: SkillGroup[];
}

export const skillTracks: SkillTrack[] = [
  {
    id: 'all',
    label: 'Everything',
    blurb: 'The full toolkit, grouped by area.',
    groups: skills,
  },
  {
    id: 'swe',
    label: 'Software Engineering',
    blurb: 'Backend services, distributed systems, and the infrastructure to ship them.',
    groups: [
      { group: 'Languages', items: ['C++', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'] },
      { group: 'Backend & APIs', items: ['FastAPI', 'NestJS', 'Node.js', 'REST APIs', 'gRPC', 'Protobuf'] },
      { group: 'Data', items: ['PostgreSQL', 'TypeORM', 'Redis', 'OpenSearch', 'MySQL', 'SQLite'] },
      { group: 'Systems & Concurrency', items: ['Distributed Systems', 'Raft', 'Consistent Hashing', 'Multithreading', 'Row Locking & Idempotency', 'Webhooks / Queues'] },
      { group: 'Cloud & Infra', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'Airflow', 'Pulumi'] },
    ],
  },
  {
    id: 'ml',
    label: 'AI & ML',
    blurb: 'Model training, inference systems, LLMs, and low-level performance.',
    groups: [
      { group: 'ML Frameworks', items: ['PyTorch', 'TensorFlow', 'TensorFlow Lite / TinyML', 'ONNX', 'Hugging Face', 'scikit-learn', 'XGBoost'] },
      { group: 'LLM & GenAI', items: ['Gemini Function Calling', 'LangGraph', 'RAG / Hybrid Search', 'LoRA / QLoRA', 'Stable Diffusion / DreamBooth', 'LLM Evaluation'] },
      { group: 'ML Ops & Serving', items: ['MLflow', 'SageMaker', 'Vertex AI', 'OTA Model Deployment', 'FastAPI Serving'] },
      { group: 'Performance', items: ['CUDA', 'Tensor Cores (FP16)', 'ARM NEON SIMD', 'INT8/INT4 Quantization', 'Operator Fusion', 'KV Caching'] },
    ],
  },
];

// The career story, told in chapters. Every fact here is on the master resume.
export interface Chapter {
  years: string;
  place: string;
  title: string;
  body: string;
  highlight: string;
  next?: boolean;
}

export const story: Chapter[] = [
  {
    years: '2018 – 2022',
    place: 'Pune, India',
    title: 'Learning to build',
    body: 'B.E. in Computer Engineering. Published my first ML paper on stock prediction, spent a summer at QuantXpress building candlestick-pattern detection for a trading desk, and captained the university women\'s football team.',
    highlight: 'GPA 9.4/10 · IRJET paper',
  },
  {
    years: '2022 – 2024',
    place: 'Whirlpool · Pune',
    title: 'ML that has to fit',
    body: 'Where the constraints got real: controllers with almost no memory, cameras inside hot ovens, rollouts to a million homes. Shipped Whirlpool\'s first on-device dryer model and the oven lens detector, and moved inference off the cloud.',
    highlight: '1M+ appliances · $250K+/yr saved',
  },
  {
    years: '2025 – 2026',
    place: 'USC · Los Angeles',
    title: 'One layer down',
    body: 'Started an M.S. in CS (AI) and went under the frameworks I had been using: CUDA kernels, a C++ inference runtime written from scratch, INT4 quantization, and a distributed object store with Raft.',
    highlight: '180× GEMM speedup · Raft from scratch',
  },
  {
    years: 'Summer 2026',
    place: 'SnapRefund · Los Angeles',
    title: 'LLMs with receipts',
    body: 'Built AiSnap, an assistant over live payment data that has to prove every figure with a database call, plus the payments backend under it: an auth migration for 10K+ users and exactly-once disbursements.',
    highlight: '45% → 5% ungrounded answers',
  },
  {
    years: 'Jan 2027',
    place: 'Next',
    title: 'Your team?',
    body: 'Graduating in December 2026 and looking for full-time software, AI/ML and forward-deployed engineering roles anywhere in the US.',
    highlight: 'Open to work',
    next: true,
  },
];

// Awards, publications, and research. Everything here is verifiable.
export interface RecognitionItem {
  kind: 'Award' | 'Publication' | 'Research';
  title: string;
  detail: string;
  date: string;
  href?: string;
}

export const recognition: RecognitionItem[] = [
  {
    kind: 'Award',
    title: 'Whirlpool STAR Award, "Lead with Impact"',
    detail: 'For the oven Dirty-Lens Detection System.',
    date: 'Aug 2023',
  },
  {
    kind: 'Award',
    title: '1st place, Whirlpool Global Software Hackathon',
    detail: 'Out of 200+ teams, for an on-device AI recipe recommender; fast-tracked for production.',
    date: 'May 2024',
  },
  {
    kind: 'Research',
    title: 'Private Beliefs, Public Lies: Preference Falsification in LLM Multi-Agent Networks',
    detail: 'Co-author. ACL ARR format, in preparation for arXiv.',
    date: '2026',
    href: 'https://github.com/snehalgore1/Preference-Falsification',
  },
  {
    kind: 'Research',
    title: 'MoDE: Difficulty-Aware Compute Allocation for Large Reasoning Models',
    detail: 'NeurIPS-style poster, USC CSCI 566.',
    date: 'Dec 2025',
    href: 'https://github.com/snehalgore1/reasoning-budget',
  },
  {
    kind: 'Publication',
    title: 'Stock Market Prediction and Analysis Using ML Algorithms',
    detail: 'IRJET, Paper ID IRJET-V9I5496.',
    date: 'May 2022',
    href: 'https://www.irjet.net/archives/V9/i5/IRJET-V9I5496.pdf',
  },
];

// Real photos (EXIF/location data stripped). Live in /public/photos.
export const photos = {
  portrait: `${import.meta.env.BASE_URL}photos/snehal-portrait.jpg`,
  trail: `${import.meta.env.BASE_URL}photos/snehal-trail.jpg`,
  tableTennis: `${import.meta.env.BASE_URL}photos/snehal-table-tennis.jpg`,
};

// Situational avatars. Drop illustrations into /public/avatars and fill the
// paths below; empty strings show a branded placeholder until then.
// e.g. hero: `${import.meta.env.BASE_URL}avatars/hero.png`
export const avatars = {
  hero: `${import.meta.env.BASE_URL}avatars/hero.jpg`,
  about: `${import.meta.env.BASE_URL}avatars/about.jpg`,
  hobbies: `${import.meta.env.BASE_URL}avatars/hobbies.jpg`,
  footer: `${import.meta.env.BASE_URL}avatars/footer.jpg`,
};

// Personality: subtle, never the main content. Only what the brief allows.
export const personal = {
  heading: 'Besides work, I like doing these things',
  sports: [
    { label: 'Soccer', note: 'since I was 14', icon: 'soccer' },
    { label: 'Table tennis', note: 'a longtime favorite', icon: 'pingpong' },
    { label: 'Pickleball', note: 'learning, about a year in', icon: 'pickleball' },
  ],
  cooking:
    'I cook a lot, and I like treating recipes the way I treat systems: experimenting, combining ingredients from different cuisines, and iterating until it works.',
};
