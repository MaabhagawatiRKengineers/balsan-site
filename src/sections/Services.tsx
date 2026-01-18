import React from "react";
import Section from "../components/Section";
import {
  Calculator,
  ReceiptIndianRupee,
  FileCheck2,
  TrendingUp,
  Wallet,
  Landmark,
} from "lucide-react";

const services = [
  {
    title: "Accounting",
    desc: "Comprehensive bookkeeping and accounting services tailored to your business needs.",
    icon: Calculator,
  },
  {
    title: "Income Tax",
    desc: "Expert guidance on income tax planning, filing and compliance for individuals and companies.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "GST",
    desc: "End-to-end GST solutions including registration, returns filing and advisory.",
    icon: FileCheck2,
  },
  {
    title: "Financial Services",
    desc: "Helping businesses plan, manage cashflows, and improve long-term growth.",
    icon: TrendingUp,
  },
  {
    title: "Wealth Management",
    desc: "Personalized wealth management support to secure and grow your assets.",
    icon: Wallet,
  },
  {
    title: "Business Loans",
    desc: "Assistance in securing business funding with documentation support.",
    icon: Landmark,
  },
];

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our Services
        </h2>
        <p className="mt-3 text-slate-600 text-sm">
          Comprehensive financial solutions tailored for your success
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-7 rounded-2xl border border-slate-100 shadow-soft hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-balsanSky/10 flex items-center justify-center mb-5">
              <s.icon className="text-balsanSky" />
            </div>

            <h3 className="font-bold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
