import { FiCheck, FiMonitor, FiCode, FiRefreshCw } from 'react-icons/fi'

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <FiCheck className="mt-1 w-4 h-4 text-blue-500 shrink-0" />
    <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
  </li>
)

const ServiceCard = ({
  icon,
  title,
  priceLabel,
  description,
  features,
  highlight = false,
}: {
  icon: React.ReactNode
  title: string
  priceLabel: string
  description: string
  features: string[]
  highlight?: boolean
}) => (
  <div
    className={`rounded-2xl p-8 flex flex-col gap-6 border shadow-sm ${
      highlight
        ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950'
        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
    }`}>
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
        <p className="text-blue-500 font-bold text-lg">{priceLabel}</p>
      </div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    <ul className="space-y-2 flex-1">
      {features.map((f, i) => (
        <CheckItem key={i} text={f} />
      ))}
    </ul>
    <a
      href="#contact"
      className={`block text-center text-sm font-bold py-2 px-6 rounded-full transition-colors duration-300 ${
        highlight
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
      }`}>
      GET STARTED
    </a>
  </div>
)

export default function Pricing() {
  return (
    <div id="pricing" className="w-full bg-gray-50 dark:bg-gray-950 min-h-screen py-10 sm:py-16 lg:py-24 grid place-items-center">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-white">Services & Pricing</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every project is custom-built to fit your goals. Reach out for a free consultation and we'll find the right solution for your business.
          </p>
        </div>

        {/* Three Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ServiceCard
            icon={<FiMonitor className="w-6 h-6" />}
            title="Website Packages"
            priceLabel="From $1,200"
            description="From simple landing pages to full eCommerce experiences — we build fast, modern, mobile-friendly websites tailored to your brand."
            features={[
              'Custom design',
              'Mobile-friendly',
              'SEO setup & Google Analytics',
              'Contact forms & booking systems',
              'eCommerce & Shopify available',
              'Hosting setup & training',
            ]}
          />

          <ServiceCard
            icon={<FiCode className="w-6 h-6" />}
            title="App Development"
            priceLabel="Free Consultation"
            description="Custom web apps, SaaS platforms, and mobile applications built to scale with your business."
            features={[
              'Web apps & SaaS MVPs',
              'iOS & Android mobile apps',
              'Client portals & dashboards',
              'Custom workflows & automation',
              'Payment integration',
              'Backend, API & App Store setup',
            ]}
            highlight
          />

          <ServiceCard
            icon={<FiRefreshCw className="w-6 h-6" />}
            title="Monthly Retainers"
            priceLabel="From $49/mo"
            description="Keep your site or app running smoothly. Plans scale with your company size and monthly needs — no subscription lock-in."
            features={[
              'Security updates & backups',
              'Uptime monitoring',
              'Performance & analytics reporting',
              'Content updates & improvements',
              'Priority & enterprise support available',
            ]}
          />

        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Not sure where to start? <a href="#contact" className="text-blue-500 hover:underline font-medium">Let's talk</a> — we'll help you figure out the right fit.
        </p>

      </div>
    </div>
  )
}
