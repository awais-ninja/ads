"use client";

import { motion } from "framer-motion";
import { services, tools, platforms } from "@/data/servicesData";
import Link from "@/components/Link";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";

export default function ServicesContent() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-red/10 to-navy/5 text-center overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-red/20 via-navy/10 to-blue-400/10 z-0 animate-spin-slow" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-navy/10 via-red/10 to-blue-600/10 z-0 animate-spin-slow-reverse" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy">
            Our <span className="text-red">Digital Services</span> for UK
            Businesses
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help startups and small
            businesses across the UK grow their online presence and achieve
            their goals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <div
                    className={`inline-flex items-center justify-center ${service.iconBg} text-white rounded-xl p-3 mb-4`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    {service.subtitle}
                  </h4>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.linkHref}
                    className="text-red hover:text-red/80 font-semibold inline-flex items-center text-sm"
                    aria-label={service.linkText}
                  >
                    {service.linkText}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Tools and Platforms We Use
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We leverage industry-leading tools and platforms to deliver
              high-quality digital solutions for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                >
                  <Icon className="text-3xl text-navy mb-2" />
                  <h3 className="font-semibold text-navy text-sm">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {tool.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Marketing Platforms
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We help you reach your target audience through various digital
              marketing channels and platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                >
                  <Icon className="text-4xl text-navy mb-3" />
                  <h3 className="font-bold text-navy text-lg">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    {platform.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}
