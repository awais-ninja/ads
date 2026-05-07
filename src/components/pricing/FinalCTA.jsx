import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-14 px-4 bg-gradient-to-br from-navy to-[#101b43] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Not Sure What You Need?</h2>
        <p className="text-sm md:text-base text-blue-100 mt-3 max-w-3xl mx-auto">
          Tell us about your business, goals, and budget. ADS will recommend the right
          website, marketing, IT, or digital support package.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link
            href="/contact"
            className="px-5 py-3 rounded-lg bg-red text-white font-semibold hover:bg-red/90 transition-colors"
          >
            Request a Quote
          </Link>
          <a
            href="#build-package"
            className="px-5 py-3 rounded-lg bg-white text-navy font-semibold hover:bg-gray-100 transition-colors"
          >
            Build My Package
          </a>
          <Link
            href="https://wa.me/447443098117"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white/10 transition-colors"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}

