"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Get featured projects for the hero section
  const featuredProjects = projects.slice(0, 3);

  // Predefined colors for the grid to avoid hydration errors
  const gridColors = [
    "rgba(44, 105, 162, 0.05)",
    "rgba(118, 99, 206, 0.05)",
    "rgba(20, 83, 229, 0.05)",
    "rgba(97, 25, 190, 0.05)",
    "rgba(128, 121, 10, 0.05)",
    "rgba(250, 124, 142, 0.05)",
    "rgba(235, 67, 8, 0.05)",
    "rgba(249, 141, 197, 0.05)",
    "rgba(49, 171, 33, 0.05)",
    "rgba(163, 120, 165, 0.05)",
    "rgba(76, 88, 131, 0.05)",
    "rgba(189, 231, 226, 0.05)",
    "rgba(16, 55, 56, 0.05)",
    "rgba(148, 170, 27, 0.05)",
    "rgba(184, 164, 248, 0.05)",
    "rgba(65, 191, 226, 0.05)",
    "rgba(137, 176, 130, 0.05)",
    "rgba(187, 154, 126, 0.05)",
    "rgba(175, 71, 53, 0.05)",
    "rgba(242, 9, 73, 0.05)",
    "rgba(189, 7, 190, 0.05)",
    "rgba(169, 137, 228, 0.05)",
    "rgba(104, 232, 7, 0.05)",
    "rgba(81, 230, 233, 0.05)",
    "rgba(2, 76, 247, 0.05)",
    "rgba(66, 15, 29, 0.05)",
    "rgba(163, 146, 38, 0.05)",
    "rgba(176, 99, 66, 0.05)",
    "rgba(206, 93, 123, 0.05)",
    "rgba(221, 5, 127, 0.05)",
    "rgba(13, 21, 122, 0.05)",
    "rgba(8, 237, 238, 0.05)",
    "rgba(101, 106, 216, 0.05)",
    "rgba(222, 187, 111, 0.05)",
    "rgba(88, 225, 188, 0.05)",
    "rgba(124, 229, 92, 0.05)",
  ];

  // Predefined positions for particles
  const particlePositions = [
    { x: 10, y: 20 },
    { x: 25, y: 45 },
    { x: 40, y: 15 },
    { x: 60, y: 30 },
    { x: 75, y: 50 },
    { x: 90, y: 25 },
    { x: 15, y: 70 },
    { x: 30, y: 85 },
    { x: 50, y: 65 },
    { x: 70, y: 80 },
    { x: 85, y: 60 },
    { x: 20, y: 40 },
    { x: 35, y: 55 },
    { x: 55, y: 35 },
    { x: 80, y: 45 },
    { x: 5, y: 75 },
    { x: 45, y: 5 },
    { x: 65, y: 90 },
    { x: 95, y: 10 },
    { x: 10, y: 90 },
  ];

  // Predefined colors for particles
  const particleColors = [
    "rgba(255, 100, 100, 0.3)",
    "rgba(100, 255, 100, 0.3)",
    "rgba(100, 100, 255, 0.3)",
    "rgba(255, 255, 100, 0.3)",
    "rgba(255, 100, 255, 0.3)",
    "rgba(100, 255, 255, 0.3)",
    "rgba(200, 150, 100, 0.3)",
    "rgba(150, 200, 100, 0.3)",
    "rgba(100, 150, 200, 0.3)",
    "rgba(200, 100, 150, 0.3)",
    "rgba(150, 100, 200, 0.3)",
    "rgba(100, 200, 150, 0.3)",
    "rgba(200, 150, 200, 0.3)",
    "rgba(150, 200, 150, 0.3)",
    "rgba(200, 200, 100, 0.3)",
    "rgba(100, 200, 200, 0.3)",
    "rgba(200, 100, 200, 0.3)",
    "rgba(150, 150, 200, 0.3)",
    "rgba(200, 150, 150, 0.3)",
    "rgba(150, 200, 150, 0.3)",
  ];

  // Predefined circle positions and colors
  const circleStyles = [
    {
      width: "200px",
      height: "200px",
      left: "30%",
      top: "40%",
      border: "1px solid rgba(212, 41, 227, 0.1)",
    },
    {
      width: "300px",
      height: "300px",
      left: "50%",
      top: "50%",
      border: "1px solid rgba(63, 47, 20, 0.1)",
    },
    {
      width: "400px",
      height: "400px",
      left: "70%",
      top: "60%",
      border: "1px solid rgba(1, 87, 217, 0.1)",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-navy/5 to-red/5"
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
            {[...Array(36)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="border border-navy/10"
                style={{
                  background: gridColors[i % gridColors.length],
                  opacity: 0,
                  transform: "scale(0.8)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: [0, 0.5, 0],
                x: [0, 100, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-navy/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
              }}
            />
          ))}
        </div>

        {/* Animated Circles */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
              className="absolute rounded-full"
              style={{
                width: circleStyles[i].width,
                height: circleStyles[i].height,
                border: circleStyles[i].border,
                left: circleStyles[i].left,
                top: circleStyles[i].top,
                opacity: 0,
                transform: "scale(0)",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight mt-40 md:mt-0">
                Our <span className="text-red">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover some of the digital solutions we've crafted for
                businesses across the UK. From stunning websites to powerful
                branding and marketing platforms.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-red text-white rounded-lg font-semibold hover:bg-red/90 transition-colors"
              >
                Start Your Project
              </Link>
            </motion.div>

            {/* Right Content - Project Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative h-[500px] w-full">
                {/* Main Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl z-10"
                >
                  <Image
                    src={featuredProjects[0].thumbnail}
                    alt={featuredProjects[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl">
                      {featuredProjects[0].title}
                    </h3>
                  </div>
                </motion.div>

                {/* Secondary Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl z-20"
                >
                  <Image
                    src={featuredProjects[1].thumbnail}
                    alt={featuredProjects[1].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">
                      {featuredProjects[1].title}
                    </h3>
                  </div>
                </motion.div>

                {/* Tertiary Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-xl z-30"
                >
                  <Image
                    src={featuredProjects[2].thumbnail}
                    alt={featuredProjects[2].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-base">
                      {featuredProjects[2].title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {project.shortDescription}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block px-6 py-3 bg-red text-white rounded-lg font-semibold hover:bg-red/90 transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
