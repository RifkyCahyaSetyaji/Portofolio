import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && !value.trim()) {
      error = 'Nama lengkap wajib diisi';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'Email wajib diisi';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Format email tidak valid';
      }
    } else if (name === 'phone') {
      if (!value.trim()) {
        error = 'Nomor HP wajib diisi';
      } else if (!/^[0-9+() -]{9,15}$/.test(value)) {
        error = 'Format nomor HP tidak valid (9-15 digit)';
      }
    } else if (name === 'message' && value.trim().length < 10) {
      error = 'Pesan minimal berisi 10 karakter';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[90px]" />
      <div className="absolute bottom-[10%] left-0 w-90 h-90 rounded-full bg-brand-highlight/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-brand-primary dark:text-brand-accent px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-accent/10 mb-3"
          >
            Contact Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-brand-textDark"
          >
            Get In Touch With Me
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-primary dark:bg-brand-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-brand-primary dark:text-brand-accent mb-3">Let's Discuss</h3>
              <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-brand-textDark/75 leading-relaxed mb-6">
                Apakah Anda memiliki proyek website, kebutuhan audit keamanan server, atau ingin berkolaborasi di proyek IT? Jangan ragu untuk menghubungi saya melalui salah satu media berikut atau kirim pesan langsung melalui formulir.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-brand-cardDark/40 border border-brand-primary/10 dark:border-brand-accent/10 hover:border-brand-primary/40 dark:hover:border-brand-accent/40 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-3 bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 dark:text-brand-textDark/50">Email</span>
                  <h4 className="font-bold text-xs sm:text-sm text-brand-dark dark:text-brand-textDark">{profileData.email}</h4>
                </div>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-brand-cardDark/40 border border-brand-primary/10 dark:border-brand-accent/10 hover:border-brand-primary/40 dark:hover:border-brand-accent/40 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-3 bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 dark:text-brand-textDark/50">Telepon / WA</span>
                  <h4 className="font-bold text-xs sm:text-sm text-brand-dark dark:text-brand-textDark">{profileData.phone}</h4>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-brand-cardDark/40 border border-brand-primary/10 dark:border-brand-accent/10">
                <div className="p-3 bg-brand-primary/10 dark:bg-brand-accent/10 text-brand-primary dark:text-brand-accent rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50 dark:text-brand-textDark/50">Alamat</span>
                  <h4 className="font-bold text-xs sm:text-sm text-brand-dark dark:text-brand-textDark">{profileData.location}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5 flex flex-col h-full justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-4">
                    {/* Name input */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-xs font-bold text-brand-dark/70 dark:text-brand-textDark/70 uppercase mb-1.5 ml-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama Anda"
                        className={`w-full px-5 py-3 rounded-xl bg-white/60 dark:bg-brand-bgDark/60 border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-brand-primary/10 dark:border-brand-accent/10 focus:border-brand-primary dark:focus:border-brand-accent focus:ring-brand-primary/20 dark:focus:ring-brand-accent/20'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-500 font-medium mt-1 ml-1 flex items-center gap-1">
                          <AlertCircle size={13} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email input */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-xs font-bold text-brand-dark/70 dark:text-brand-textDark/70 uppercase mb-1.5 ml-1">
                          Alamat Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nama@email.com"
                          className={`w-full px-5 py-3 rounded-xl bg-white/60 dark:bg-brand-bgDark/60 border text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-500/20'
                              : 'border-brand-primary/10 dark:border-brand-accent/10 focus:border-brand-primary dark:focus:border-brand-accent focus:ring-brand-primary/20 dark:focus:ring-brand-accent/20'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-xs text-red-500 font-medium mt-1 ml-1 flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="text-xs font-bold text-brand-dark/70 dark:text-brand-textDark/70 uppercase mb-1.5 ml-1">
                          Nomor HP / WhatsApp
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="08123xxxxxx"
                          className={`w-full px-5 py-3 rounded-xl bg-white/60 dark:bg-brand-bgDark/60 border text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-500/20'
                              : 'border-brand-primary/10 dark:border-brand-accent/10 focus:border-brand-primary dark:focus:border-brand-accent focus:ring-brand-primary/20 dark:focus:ring-brand-accent/20'
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-xs text-red-500 font-medium mt-1 ml-1 flex items-center gap-1">
                            <AlertCircle size={13} /> {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-xs font-bold text-brand-dark/70 dark:text-brand-textDark/70 uppercase mb-1.5 ml-1">
                        Pesan Anda
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tulis pesan atau detail proyek Anda di sini..."
                        className={`w-full px-5 py-3 rounded-xl bg-white/60 dark:bg-brand-bgDark/60 border text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500/20'
                            : 'border-brand-primary/10 dark:border-brand-accent/10 focus:border-brand-primary dark:focus:border-brand-accent focus:ring-brand-primary/20 dark:focus:ring-brand-accent/20'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-500 font-medium mt-1 ml-1 flex items-center gap-1">
                          <AlertCircle size={13} /> {errors.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 mt-6 px-6 py-3.5 rounded-xl bg-brand-primary dark:bg-brand-accent text-brand-bgLight dark:text-brand-dark font-bold hover:bg-brand-secondary dark:hover:bg-brand-accent/80 transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-brand-bgLight border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send size={17} />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-primary dark:text-brand-accent mb-4" />
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-textDark">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/75 dark:text-brand-textDark/75 max-w-sm mt-2 leading-relaxed">
                    Terima kasih telah menghubungi saya. Pesan Anda telah diterima dan saya akan membalas secepatnya ke email atau nomor telepon Anda.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2.5 rounded-xl border-2 border-brand-primary dark:border-brand-accent text-brand-primary dark:text-brand-accent font-semibold text-xs sm:text-sm hover:bg-brand-primary/10 dark:hover:bg-brand-accent/10 transition-colors"
                  >
                    Kirim Pesan Baru
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            </div>

        </div>
      </div>
    </section>
  );
}
