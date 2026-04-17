import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                <span className="text-dark text-xl font-bold">A</span>
              </div>
              <span>ASHIRVAD</span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-8">
              Leading the construction industry since 1998. We build high-performance structures that stand the test of time.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors hover:bg-primary hover:text-dark">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Services', 'Projects', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-white/40 transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-white/40">
                <MapPin className="text-primary mt-1" size={20} />
                <span>Harchanf Plot No 43, <br />Dondaicha</span>
              </li>
              <li className="flex items-center gap-4 text-white/40">
                <Phone className="text-primary" size={20} />
                <span>+91 96733 58888</span>
              </li>
              <li className="flex items-center gap-4 text-white/40">
                <Mail className="text-primary" size={20} />
                <span>info@ashirvad.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-white/40 mb-6">Stay updated with our latest projects and insights.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-dark px-4 rounded-full text-xs font-bold hover:scale-105 active:scale-95 transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest text-white/20 uppercase">
          <p>© 2026 ASHIRVAD CONSTRUCTION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
