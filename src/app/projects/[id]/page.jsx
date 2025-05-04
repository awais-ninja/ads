"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "@/components/Link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ProjectPage({ params }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);
  const { scrollY } = useScroll();

  if (!project) {
    notFound();
  }

  const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Only use gallery images if they are provided in the project data
  const galleryImages = project.images || [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-navy/10 to-red/10"
        />

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 mb-8 text-navy hover:text-red transition-colors group"
              >
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ←
                </motion.span>
                Back to Projects
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl md:text-7xl font-bold text-navy mb-6 leading-tight"
            >
              {project.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl"
            >
              {project.heroTagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-red text-white rounded-lg font-semibold hover:bg-red/90 transition-all"
                >
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#project-content"
                  className="px-8 py-4 border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  View Details
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section id="project-content" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Project Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-4">
                Project Story
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.projectStory}
              </p>
            </motion.div>

            {/* Our Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-4">
                Our Solution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Project Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-navy mb-4">
                Project Impact
              </h2>
              <ul className="space-y-3">
                {project.impact.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red mr-2">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery - Only show if there are gallery images */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Project Gallery
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the visual journey of this project through our curated
                gallery of images.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative group overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} - Featured`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    Featured View
                  </h3>
                  <p className="text-white/90 max-w-2xl">
                    This project showcases our commitment to delivering
                    exceptional digital solutions that drive business growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-navy/5 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-navy mb-4">
                {project.ctaTitle}
              </h2>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-red text-white rounded-lg font-semibold hover:bg-red/90 transition-colors"
              >
                {project.ctaButton}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
