import React from "react";
import Section from "../components/Section";

const Solutions: React.FC = () => {
  return (
    <Section id="solutions" className="bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
          <span className="w-1.5 h-7 bg-balsanSky rounded-full" />
          Business Solutions
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-slate-600">
          <div>
            <p className="font-semibold text-slate-900 mb-3">
              FINANCIAL SERVICES
            </p>
            <ul className="space-y-2">
              <li>Bookkeeping & Accounting</li>
              <li>Advisory & Consultancy</li>
              <li>Financial Reports</li>
              <li>Financial Planning</li>
              <li>SME & Corporate Loans</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-3">TAXATION</p>
            <ul className="space-y-2">
              <li>Income Tax</li>
              <li>GST</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-3">
              AUDITS & COMPLIANCES
            </p>
            <ul className="space-y-2">
              <li>New Business Registration</li>
              <li>ROC & Year Filing</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-3">HR SERVICES</p>
            <ul className="space-y-2">
              <li>Payroll Processing</li>
              <li>Recruitment</li>
              <li>Job Posting</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-3">OTHERS</p>
            <ul className="space-y-2">
              <li>Training</li>
              <li>Miscellaneous Services</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Solutions;
