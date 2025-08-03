import Link from "@/components/Link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <div className="mt-12">
      {/* Horizontal divider */}
      <hr className="border-gray-200 mb-8" />

      {/* Author Card */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-start gap-4">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="relative w-16 h-16">
              <Image
                src="/images/awais-khan-profile.jpg"
                alt="Awais Ahmad - Founder of Awais Digital Services"
                fill
                className="object-cover rounded-full border-2 border-white shadow-sm"
                priority
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500">By</span>
                <span className="font-bold text-black ml-1">Awais Ahmad</span>
              </div>

              {/* LinkedIn Icon */}
              <Link
                href="https://www.linkedin.com/in/awais-ahmad-mirza/"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Awais Ahmad on LinkedIn"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>

            <p className="text-black text-sm leading-relaxed mb-4">
              Hi, I’m <strong>Awais Ahmad</strong>, a passionate and
              results-driven <strong>Web Developer</strong>,{" "}
              <strong>Website Designer</strong>, and{" "}
              <strong>Digital Marketing Specialist</strong> based in{" "}
              <strong>Leicester, UK</strong>. I’ve helped clients across{" "}
              <strong>Coventry</strong>, <strong>London</strong>,{" "}
              <strong>Manchester</strong>, and other cities build impactful
              digital identities through tailored website solutions and smart
              marketing strategies.
              <br />
              <br />
              My expertise spans <strong>
                custom website development
              </strong>, <strong>responsive web design</strong>,{" "}
              <strong>SEO</strong>, <strong>email marketing</strong>, and{" "}
              <strong>eCommerce strategy</strong>. I focus on building fast,
              modern websites and running conversion-focused campaigns that help
              businesses stand out online.
              <br />
              <br />
              Through this blog, I share practical insights, success stories,
              and actionable tips in areas like web development, digital
              marketing, SEO trends, branding, and business growth — all drawn
              from real-world client work.
            </p>

            <div className="text-sm text-black space-y-1 mt-2">
              <p>
                <strong>Call us:</strong>{" "}
                <Link
                  href="tel:+447780059219"
                  className="text-blue-600 hover:underline"
                >
                  +44 7780 059219
                </Link>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <Link
                  href="https://wa.me/447443098117"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  +44 7443 098117
                </Link>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:info@awaisdigitalservices.co.uk"
                  className="text-blue-600 hover:underline"
                >
                  info@awaisdigitalservices.co.uk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <hr className="border-gray-200 mt-8" />
    </div>
  );
}
