import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <Spline scene="https://prod.spline.design/3W8nRklB5q8z9rQe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              RZF Academy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-slate-700 max-w-xl"
            >
              Platform kursus modern untuk SD, SMP, SMA, dan Umum. Tingkatkan prestasi dengan kurikulum adaptif, mentor berpengalaman, dan pengalaman belajar interaktif.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex gap-3"
            >
              <a href="#paket" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                Lihat Paket
              </a>
              <a href="#kontak" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 font-medium">
                Konsultasi Gratis
              </a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">10k+</span> Alumni
              </div>
              <div>
                <span className="font-semibold text-slate-900">4.9/5</span> Rating Kepuasan
              </div>
              <div>
                Garansi Uang Kembali 7 Hari
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="Belajar interaktif"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
