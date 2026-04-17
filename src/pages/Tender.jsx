import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Clock } from 'lucide-react';

const tenders = [
  { id: 'T-2026-001', title: 'Urban Highway Expansion Phase III', authority: 'NHAI', deadline: '2026-06-15', budget: 'Est. ₹450 Cr' },
  { id: 'T-2026-004', title: 'Smart City IT Park Development', authority: 'MIDC', deadline: '2026-05-20', budget: 'Est. ₹120 Cr' },
  { id: 'T-2026-012', title: 'Deep Sea Port Infrastructure', authority: 'Port Authority', deadline: '2026-07-01', budget: 'Est. ₹890 Cr' },
  { id: 'T-2026-015', title: 'Public Hospital Vertical Wing', authority: 'PWD', deadline: '2026-05-30', budget: 'Est. ₹55 Cr' },
];

const Tender = () => {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Bidding Portal</span>
          <h1 className="text-6xl font-black mb-8">ACTIVE <span className="text-primary italic">TENDERS</span></h1>
          <p className="text-white/40 max-w-xl">View and download current tender opportunities for our upcoming projects.</p>
        </motion.div>

        <div className="space-y-6">
          {tenders.map((tender, index) => (
            <motion.div
              key={tender.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group hover:border-primary/30"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <FileText />
                </div>
                <div>
                  <span className="text-xs font-bold text-white/30 uppercase">{tender.id}</span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tender.title}</h3>
                  <p className="text-sm text-white/40">{tender.authority}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                  <p className="text-[10px] font-bold text-white/20 uppercase mb-1">Deadline</p>
                  <p className="text-sm font-semibold flex items-center gap-2"><Clock size={14} className="text-primary" /> {tender.deadline}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/20 uppercase mb-1">Budget</p>
                  <p className="text-sm font-semibold">{tender.budget}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary transition-all text-primary">
                  <Download size={20} />
                </button>
                <button className="bg-primary text-dark font-bold text-xs uppercase tracking-widest px-8 rounded-full py-3 hover:scale-105 transition-all">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tender;
