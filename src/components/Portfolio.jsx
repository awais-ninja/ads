"use client";
import { motion } from "framer-motion";
import Link from "@/components/Link";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";

const projects = allProjects.slice(0, 5);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our <span className="text-red">Projects</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We're proud to help businesses across the UK grow online. Here's a
            sample of the recent work delivered by ADS.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-lg sm:text-2xl font-bold text-navy">
                    {project.title}
                  </h3>
                </div>
                <p className="text-base text-gray-600 mb-4">
                  {project.shortDescription}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900 transition-colors"
                  aria-label={`View project`}
                >
                  View More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red hover:bg-blue-600 transition-colors shadow-md"
            aria-label="Explore our complete portfolio of digital projects"
          >
            Explore our complete portfolio of digital projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
