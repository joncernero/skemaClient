const stats = [
  {
    value: '75%',
    label: 'Of consumers judge a business\'s credibility by its website design',
    ref: '¹',
  },
  {
    value: '94%',
    label: 'Of first impressions are based on website design alone',
    ref: '²',
  },
  {
    value: '70%',
    label: 'Of small businesses lack clear calls-to-action on their homepage',
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
    <section className='w-full bg-white dark:bg-gray-900 py-12 px-4 border-t border-b border-gray-100 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto'>

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
              </a>
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
