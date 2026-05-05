import { BsLinkedin } from 'react-icons/bs'
import { FaGoogle } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Black Wren Digital builds websites, APIs, and custom applications for businesses ready to grow. Based in Indianapolis, we deliver agency-quality work at freelancer prices — fast, local, and built around your goals.
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-gray-700 transition hover:text-blue-500"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <BsLinkedin className="size-6" />
              </a>
              <a
                className="text-gray-700 transition hover:text-blue-500"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Google Business</span>
                <FaGoogle className="size-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900">Services</strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-blue-500" href="#">Website Packages</a></li>
                <li><a className="text-gray-700 transition hover:text-blue-500" href="#">App Development</a></li>
                <li><a className="text-gray-700 transition hover:text-blue-500" href="#">APIs & Data Feeds</a></li>
                <li><a className="text-gray-700 transition hover:text-blue-500" href="#">Monthly Retainers</a></li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900">Support</strong>
              <ul className="mt-6 space-y-1">
                <li><a className="text-gray-700 transition hover:text-blue-500" href="#">Contact</a></li>
                <li><a className="text-gray-700 transition hover:text-blue-500" href="#">Get a Free Consultation</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Black Wren Digital {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
