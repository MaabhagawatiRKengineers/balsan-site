import React from "react";
import Section from "../components/Section";
import { Mail, Phone, User, Globe, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Contact Balsan
        </h2>
        <p className="mt-2 text-slate-600 text-sm">
          Get in touch with our experts today
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <form className="p-8 rounded-2xl border border-slate-100 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Send us a message
          </h3>

          <div className="space-y-4">
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              placeholder="Full Name"
            />
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              placeholder="Email Address"
            />
            <input
              className="w-full border border-slate-200 rounded-lg px-4 py-3"
              placeholder="Phone Number"
            />
            <textarea
              className="w-full border border-slate-200 rounded-lg px-4 py-3 h-28"
              placeholder="Message"
            />
          </div>

          <button
            type="button"
            className="mt-6 w-full bg-balsanBlue text-white py-3 rounded-lg font-semibold hover:bg-balsanBlue2 transition"
          >
            Send Message
          </button>
        </form>

        {/* Details + map */}
        <div className="space-y-6">
          <div className="p-8 rounded-2xl border border-slate-100 shadow-soft">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Contact Details
            </h3>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex gap-3 items-center">
                <User className="text-balsanSky" size={18} />
                Contact Person: <b>Manish Sehgal</b>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-balsanSky" size={18} />
                +91 98xxx xxxxx
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="text-balsanSky" size={18} />
                info@balsan.com
              </div>

              <div className="flex gap-3 items-center">
                <Globe className="text-balsanSky" size={18} />
                www.balsan.com
              </div>

              <div className="flex gap-3 items-center">
                <MapPin className="text-balsanSky" size={18} />
                Hyderabad, Telangana
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-soft">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Hyderabad%20Telangana&output=embed"
              className="w-full h-[290px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
