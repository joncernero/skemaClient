import { FiMapPin, FiZap, FiSliders, FiShield } from "react-icons/fi";

const pillars = [
  {
    icon: <FiMapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />,
    title: "Local",
    desc: "Indianapolis-based, invested in your community",
  },
  {
    icon: <FiZap className="h-5 w-5 text-blue-500" aria-hidden="true" />,
    title: "Fast",
    desc: "Quick turnarounds without sacrificing quality",
  },
  {
    icon: <FiSliders className="h-5 w-5 text-blue-500" aria-hidden="true" />,
    title: "Custom",
    desc: "Built for how your business actually works",
  },
  {
    icon: <FiShield className="h-5 w-5 text-blue-500" aria-hidden="true" />,
    title: "Reliable",
    desc: "Agency accountability at freelancer pricing",
  },
];

const stats = [
  {
    value: "75%",
    label: "Of consumers judge a business's credibility by its website design",
    ref: "¹",
  },
  {
    value: "94%",
    label: "Of first impressions are based on website design alone",
    ref: "²",
  },
  {
    value: "70%",
    label: "Of small businesses lack clear calls-to-action on their homepage",
    ref: "³",
  },
  {
    value: "$146B",
    label: "Custom software market projected by 2030 — up from $52B today",
    ref: "⁴",
  },
];

const references = [
  {
    num: "1",
    text: "Stanford Web Credibility Research via",
    link: "https://www.whitepeakdigital.com/blog/web-design-statistics/",
    label: "White Peak Digital",
  },
  {
    num: "2",
    text: "Web Design Statistics via",
    link: "https://www.businessdasher.com/web-design-statistics/",
    label: "Business Dasher",
  },
  {
    num: "3",
    text: "Small Business Website Statistics via",
    link: "https://marketingltb.com/blog/statistics/small-business-website-statistics/",
    label: "Marketing LTB",
  },
  {
    num: "4",
    text: "Global Custom Software Development Market via",
    link: "https://intellectmarkets.com/report/custom-software-development-market",
    label: "Intellect Markets",
  },
];

export default function Stats() {
  return (
    <section className="grid min-h-screen w-full place-items-center border-t border-b border-gray-800 bg-[#030712] px-4 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Split left/right statement */}
        <div className="mb-8 grid grid-cols-1 items-start gap-8 border-b border-gray-800 pb-8 md:mb-16 md:grid-cols-2 md:gap-12 md:pb-16">
          <div>
            <p className="text-3xl leading-tight font-bold text-white md:text-4xl">
              We build digital tools that{" "}
              <span className="text-blue-500">work as hard as you do.</span>
            </p>
            <div className="mt-6 mb-8 h-1 w-10 rounded bg-blue-500"></div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-gray-700 bg-gray-800 p-4"
                >
                  <div className="mt-0.5">{p.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-white">{p.title}</p>
                    <p className="mt-0.5 text-xs leading-snug text-gray-400">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:pt-2">
            <p className="text-base leading-relaxed text-gray-400">
              Most businesses don&apos;t need a massive agency or an unreliable
              freelancer — they need a focused partner who understands both
              technology and real-world operations. That&apos;s what Black Wren
              Digital is built to be.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              Whether you&apos;re launching your first website, connecting your
              tools through a custom API, or building an application to
              streamline how your team works — we start with your goals and
              build toward them. No bloated proposals, no cookie-cutter
              templates, no hand-offs to junior developers overseas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              From Indianapolis, we serve businesses that want more than a
              digital presence — they want a digital advantage.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-blue-500 px-8 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-600"
            >
              Get a Free Consultation
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Header */}
        <p className="mb-10 text-center text-sm font-bold tracking-widest text-gray-400 uppercase">
          The Digital Opportunity
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-5xl font-bold text-blue-500 md:text-6xl">
                {stat.value}
                <sup className="text-lg">{stat.ref}</sup>
              </span>
              <p className="max-w-[180px] text-sm font-semibold text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* References */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-1">
          {references.map((ref) => (
            <p key={ref.num} className="text-xs text-gray-400">
              <sup>{ref.num}</sup> {ref.text}{" "}
              <a
                href={ref.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-blue-500"
              >
                {ref.label}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
