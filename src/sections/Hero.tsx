import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-14">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Smart Business & <br /> Finance Solutions
          </h1>

          <p className="mt-4 text-slate-600 text-lg">
            for Every Growing Company
          </p>

          <p className="mt-5 text-slate-500 max-w-xl text-sm leading-relaxed">
            We help businesses with accounting, taxation, compliance, financial planning,
            and end-to-end business support — all under one trusted roof.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#services"
              className="px-6 py-3 rounded-lg bg-balsanSky text-white font-semibold shadow-soft hover:opacity-95 transition"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition inline-flex items-center gap-2"
            >
              Contact Now <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden shadow-soft border border-slate-100">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
            alt="Balsan Business & Finance"
            className="w-full h-[360px] lg:h-[460px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
