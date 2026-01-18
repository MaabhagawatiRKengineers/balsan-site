import React from "react";
import Section from "../components/Section";

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          About BALSAN
        </h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-sm leading-relaxed">
          BALSAN provides complete business and finance solutions including accounting, taxation,
          GST, compliance, financial planning and corporate services with expertise and trust.
        </p>
      </div>
    </Section>
  );
};

export default About;
