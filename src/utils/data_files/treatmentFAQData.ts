// faqData.ts
// This file exports an array of FAQ objects for each treatment, keyed by slug.
// Each object includes slug (matching treatmentData.ts) and an array of { question, answer } pairs.
// Use this to map FAQs in slug pages (e.g., render as accordion or list).
// Tone: Professional, holistic, focused on natural health and patient education.

export const faqData = [
  {
    slug: 'mercury-free-fillings',
    questions: [
      {
        question:
          'What are the benefits of mercury-free fillings over traditional amalgam?',
        answer:
          'Mercury-free fillings use biocompatible composites that eliminate toxic vapors from mercury, supporting whole-body health without heavy metals. They match your natural tooth color for a seamless aesthetic and offer durable, long-lasting results with no risk of systemic effects.',
      },
      {
        question: 'Is the procedure painful, and how long does it take?',
        answer:
          'The procedure is gentle and typically painless with local anesthesia. It takes 30–60 minutes per filling, allowing you to return to normal activities immediately while promoting natural healing.',
      },
      {
        question: 'Are mercury-free fillings suitable for sensitive patients?',
        answer:
          "Yes, they are BPA-free and designed for biocompatibility, making them ideal for patients with allergies or sensitivities. We prioritize materials that harmonize with your body's natural processes for optimal wellness.",
      },
      {
        question: 'How do I care for mercury-free fillings after placement?',
        answer:
          "Follow standard oral hygiene with gentle brushing and flossing. Avoid hard foods initially, and maintain a balanced diet to support the filling's longevity and your overall oral microbiome health.",
      },
    ],
  },
  {
    slug: 'holistic-dental-cleanings',
    questions: [
      {
        question:
          'How do holistic cleanings differ from regular dental cleanings?',
        answer:
          "Holistic cleanings focus on whole-body wellness using microbiome-friendly techniques and natural agents, rather than harsh scraping. This supports your oral ecosystem's balance, reducing inflammation and promoting natural pH harmony.",
      },
      {
        question: 'What natural agents are used in the cleaning process?',
        answer:
          'We use ozonated water, herbal polishes, and enzyme-based agents that gently remove buildup without disrupting beneficial bacteria, ensuring a toxin-free experience that enhances your systemic health.',
      },
      {
        question: 'How often should I schedule holistic cleanings?',
        answer:
          'Every 3–6 months, depending on your diet and lifestyle. This preventive approach helps maintain oral balance and prevents issues like gum disease through personalized protocols.',
      },
      {
        question: 'Can holistic cleanings help with overall health issues?',
        answer:
          'Absolutely—by addressing oral microbiome imbalances, they can reduce inflammation linked to conditions like digestive or immune concerns, aligning with our philosophy of interconnected wellness.',
      },
    ],
  },
  {
    slug: 'ozone-therapy',
    questions: [
      {
        question: 'What conditions can ozone therapy treat?',
        answer:
          "It's effective for cavity prevention, gum disease, infections, and root canal alternatives, using oxygen's natural antimicrobial power to promote healing without invasive procedures.",
      },
      {
        question: 'Is ozone therapy safe for all patients?',
        answer:
          "Yes, it's non-toxic, pain-free, and has no side effects, making it suitable for children, pregnant individuals, and those with sensitivities. It harnesses your body's innate healing abilities.",
      },
      {
        question: 'How many sessions are typically needed?',
        answer:
          'Most issues resolve in 1–3 sessions, with accelerated healing that shortens recovery time compared to traditional treatments, supporting long-term oral vitality.',
      },
      {
        question: 'Does ozone therapy replace antibiotics?',
        answer:
          'It often does, as a natural alternative that targets pathogens directly without disrupting your microbiome or contributing to resistance, fostering holistic health.',
      },
    ],
  },
  {
    slug: 'ceramic-implants',
    questions: [
      {
        question: 'Why choose ceramic over metal implants?',
        answer:
          'Ceramic zirconia implants are 100% metal-free, highly biocompatible, and immune-friendly, avoiding potential allergies or electromagnetic issues while providing natural aesthetics and stability.',
      },
      {
        question: 'What is the recovery time for ceramic implants?',
        answer:
          "Healing is typically 3–6 months for integration, with minimal discomfort and faster bone fusion due to zirconia's natural compatibility, allowing a smoother return to daily life.",
      },
      {
        question: 'Are ceramic implants as durable as titanium?',
        answer:
          'Yes, they offer long-term stability and strength equivalent to titanium, but with superior biocompatibility for whole-body harmony and reduced inflammation risks.',
      },
      {
        question: 'Who is a good candidate for ceramic implants?',
        answer:
          'Ideal for those with metal sensitivities, holistic preferences, or aesthetic concerns, ensuring implants that integrate seamlessly with your natural biology.',
      },
    ],
  },
  {
    slug: 'nutritional-counseling',
    questions: [
      {
        question: 'How does nutrition impact oral health?',
        answer:
          'Diet influences pH balance, inflammation, and enamel strength; our counseling addresses root causes like deficiencies to prevent decay and support natural remineralization for whole-body wellness.',
      },
      {
        question: 'What does a typical session involve?',
        answer:
          'A personalized assessment followed by diet plans, supplement recommendations, and lifestyle tips tailored to your needs, focusing on anti-inflammatory foods for optimal oral and systemic health.',
      },
      {
        question: 'Can nutritional counseling complement other treatments?',
        answer:
          "Yes, it enhances outcomes for fillings, cleanings, or implants by optimizing your body's healing environment through targeted nutrition strategies.",
      },
      {
        question: 'How soon can I expect results?',
        answer:
          'Many notice reduced sensitivity and improved vitality within 2–4 weeks, with sustained benefits as habits build toward lifelong preventive care.',
      },
    ],
  },
  {
    slug: 'biocompatibility-testing',
    questions: [
      {
        question: 'Why is biocompatibility testing important?',
        answer:
          "It identifies materials that won't trigger allergies or immune responses, ensuring treatments align with your unique biology for safe, effective, and holistic outcomes.",
      },
      {
        question: 'What does the testing process entail?',
        answer:
          'A simple blood or serum sample analyzes reactions to dental materials, providing a customized report to guide your care without guesswork.',
      },
      {
        question: 'How often should I get retested?',
        answer:
          'Every 2–5 years or after health changes, with ongoing monitoring to adapt to your evolving needs for sustained compatibility.',
      },
      {
        question: 'Does it cover all dental materials?',
        answer:
          'Yes, from composites to implants, helping select options that support your natural healing and prevent systemic complications.',
      },
    ],
  },
];
