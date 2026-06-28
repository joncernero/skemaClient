import { FiCheck, FiMonitor, FiCode, FiRefreshCw } from "react-icons/fi";

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <FiCheck className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
    <span className="text-sm text-gray-300">{text}</span>
  </li>
);

const ServiceCard = ({
  icon,
  title,
  priceLabel,
  description,
  features,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  priceLabel: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) => (
  <div
    className={`flex flex-col gap-6 rounded-2xl border p-8 shadow-sm ${
      highlight
        ? "border-blue-500 bg-blue-950 ring-2 ring-blue-500"
        : "border-gray-700 bg-gray-900"
    }`}
  >
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-blue-500">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-lg font-bold text-blue-500">{priceLabel}</p>
      </div>
    </div>
    <p className="text-sm text-gray-400">{description}</p>
    <ul className="flex-1 space-y-2">
      {features.map((f, i) => (
        <CheckItem key={i} text={f} />
      ))}
    </ul>
    <a
      href="#contact"
      className={`block rounded-full px-6 py-2 text-center text-sm font-bold transition-colors duration-300 ${
        highlight
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
      }`}
    >
      GET STARTED
    </a>
  </div>
);

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="grid min-h-screen w-full place-items-center bg-gray-900 py-10 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Services & Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Every project is custom-built to fit your goals. Reach out for a
            free consultation and we&apos;ll find the right solution for your
            business.
          </p>
        </div>

        {/* Three Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ServiceCard
            icon={<FiMonitor className="h-6 w-6" />}
            title="Website Packages"
            priceLabel="From $1,200"
            description="From simple landing pages to full eCommerce experiences — we build fast, modern, mobile-friendly websites tailored to your brand."
            features={[
              "Custom design",
              "Mobile-friendly",
              "SEO setup & Google Analytics",
              "Contact forms & booking systems",
              "eCommerce & Shopify available",
              "Hosting setup & training",
            ]}
          />

          <ServiceCard
            icon={<FiCode className="h-6 w-6" />}
            title="App Development"
            priceLabel="Free Consultation"
            description="Custom web apps, SaaS platforms, and mobile applications built to scale with your business."
            features={[
              "Web apps & SaaS MVPs",
              "iOS & Android mobile apps",
              "Client portals & dashboards",
              "Custom workflows & automation",
              "Payment integration",
              "Backend, API & App Store setup",
            ]}
            highlight
          />

          <ServiceCard
            icon={<FiRefreshCw className="h-6 w-6" />}
            title="Monthly Retainers"
            priceLabel="From $49/mo"
            description="Keep your site or app running smoothly. Plans scale with your company size and monthly needs — no subscription lock-in."
            features={[
              "Security updates & backups",
              "Uptime monitoring",
              "Performance & analytics reporting",
              "Content updates & improvements",
              "Priority & enterprise support available",
            ]}
          />
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400">
          Not sure where to start?{" "}
          <a
            href="#contact"
            className="font-medium text-blue-500 hover:underline"
          >
            Let&apos;s talk
          </a>{" "}
          — we&apos;ll help you figure out the right fit.
        </p>
      </div>
    </div>
  );
}
