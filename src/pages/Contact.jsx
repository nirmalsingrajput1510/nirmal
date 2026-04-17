import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h1 className="text-6xl font-black mb-8 leading-tight">GET IN <br /><span className="text-primary italic">TOUCH.</span></h1>
              <p className="text-white/40 leading-relaxed">
                Contact us today to discuss your next big project. Our experts are ready to provide technical insights and cost-effective solutions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Office Location</p>
                  <p className="font-bold">Harchanf Plot No 43, Dondaicha</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="font-bold">+91 96733 58888</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Email us</p>
                  <p className="font-bold">contact@ashirvad.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 md:p-12 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-4">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-4">Email Address</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-4">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-primary transition-colors appearance-none text-white/40">
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Tendering Service</option>
                  <option>Job Opportunity</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-4">Message</label>
                <textarea
                  rows="6"
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button className="btn-primary w-full py-5 flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
