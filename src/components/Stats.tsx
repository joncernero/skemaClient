import { FiMapPin, FiZap, FiSliders, FiShield } from 'react-icons/fi'

const pillars = [
  { icon: <FiMapPin className='w-5 h-5 text-blue-500' aria-hidden='true' />, title: 'Local', desc: 'Indianapolis-based, invested in your community' },
  { icon: <FiZap className='w-5 h-5 text-blue-500' aria-hidden='true' />, title: 'Fast', desc: 'Quick turnarounds without sacrificing quality' },
  { icon: <FiSliders className='w-5 h-5 text-blue-500' aria-hidden='true' />, title: 'Custom', desc: 'Built for how your business actually works' },
  { icon: <FiShield className='w-5 h-5 text-blue-500' aria-hidden='true' />, title: 'Reliable', desc: 'Agency accountability at freelancer pricing' },
]

const stats = [
  {
    value: '75%',
    label: "Of consumers judge a business's credibility by its website design",
    ref: '¹',
  },
  {
    value: '94%',
    label: 'Of first impressions are based on website design alone',
    ref: '²',
  },
  {
    value: '70%',
    label: "Of small businesses lack clear calls-to-action on their homepage",
    ref: '³',
  },
  {
    value: '$146B',
    label: 'Custom software market projected by 2030 — up from $52B today',
    ref: '⁴',
  },
]

const references = [
  { num: '1', text: 'Stanford Web Credibility Research via', link: 'https://www.whitepeakdigital.com/blog/web-design-statistics/', label: 'White Peak Digital' },
  { num: '2', text: 'Web Design Statistics via', link: 'https://www.businessdasher.com/web-design-statistics/', label: 'Business Dasher' },
  { num: '3', text: 'Small Business Website Statistics via', link: 'https://marketingltb.com/blog/statistics/small-business-website-statistics/', label: 'Marketing LTB' },
  { num: '4', text: 'Global Custom Software Development Market via', link: 'https://intellectmarkets.com/report/custom-software-development-market', label: 'Intellect Markets' },
]

export default function Stats() {
  return (
    <section className='w-full bg-white dark:bg-gray-900 min-h-screen grid place-items-center px-4 py-10 sm:py-16 lg:py-24 border-t border-b border-gray-100 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto'>

        {/* Split left/right statement */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-8 md:mb-16 pb-8 md:pb-16 border-b border-gray-100 dark:border-gray-800'>
          <div>
            <p className='text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-white'>
              We build digital tools that{' '}
              <span className='text-blue-500'>work as hard as you do.</span>
            </p>
            <div className='w-10 h-1 bg-blue-500 rounded mt-6 mb-8'></div>
            <div className='grid grid-cols-2 gap-4'>
              {pillars.map((p, i) => (
                <div key={i} className='flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'>
                  <div className='mt-0.5'>{p.icon}</div>
                  <div>
                    <p className='font-bold text-sm text-slate-700 dark:text-white'>{p.title}</p>
                    <p className='text-xs text-gray-400 dark:text-gray-400 mt-0.5 leading-snug'>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='md:pt-2'>
            <p className='text-base text-gray-500 dark:text-gray-400 leading-relaxed'>
              Most businesses don&apos;t need a massive agency or an unreliable freelancer — they need a focused partner who understands both technology and real-world operations. That&apos;s what Black Wren Digital is built to be.
            </p>
            <p className='text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-4'>
              Whether you&apos;re launching your first website, connecting your tools through a custom API, or building an application to streamline how your team works — we start with your goals and build toward them. No bloated proposals, no cookie-cutter templates, no hand-offs to junior developers overseas.
            </p>
            <p className='text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-4'>
              From Indianapolis, we serve businesses that want more than a digital presence — they want a digital advantage.
            </p>
            <a
              href='#contact'
              className='inline-flex items-center mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300'>
              Get a Free Consultation
              <span className='ml-2'>→</span>
            </a>
          </div>
        </div>

        {/* Header */}
        <p className='text-center font-bold text-sm tracking-widest text-gray-400 uppercase mb-10'>
          The Digital Opportunity
        </p>

        {/* Stats Row */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {stats.map((stat, i) => (
            <div key={i} className='flex flex-col items-center gap-2'>
              <span className='text-5xl md:text-6xl font-bold text-blue-500'>
                {stat.value}<sup className='text-lg'>{stat.ref}</sup>
              </span>
              <p className='text-sm font-semibold text-gray-600 dark:text-gray-300 max-w-[180px]'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* References */}
        <div className='mt-10 flex flex-wrap justify-center gap-x-6 gap-y-1'>
          {references.map((ref) => (
            <p key={ref.num} className='text-xs text-gray-400'>
              <sup>{ref.num}</sup> {ref.text}{' '}
              <a href={ref.link} target='_blank' rel='noopener noreferrer' className='underline hover:text-blue-500 transition-colors'>
                {ref.label}
                <span className='sr-only'> (opens in new tab)</span>
              </a>
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
