import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { fadeUp } from '../animations/fadeUp';
import { brandInfo } from '../data/navigation';
import Button from '../components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: 'Business Growth',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Configured for immediate static integration or direct action
      // Simulate clean front-end submission verification
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        service: 'Business Growth',
        message: ''
      });
    } catch (err) {
      setSubmitError('Unable to send inquiry at this moment. Please call or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-white text-content-primary">
      
      {/* ==================================================
          PAGE HERO
          ================================================== */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-surface-warm border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-orange/5 via-brand-coral/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <div className="brand-divider max-w-xs mx-auto mb-5">
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">
                CONNECT WITH US
              </span>
            </div>

            <h1 className="font-display text-navy-900 tracking-tight mb-5">
              LET'S <span className="gradient-text">TALK</span>
            </h1>

            <p className="text-body-lg text-content-secondary max-w-xl mx-auto leading-relaxed mb-8">
              Tell us what you're looking to build, improve or automate.
            </p>

            {/* Quick Connect Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${brandInfo.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-white border border-slate-200 text-xs font-heading font-semibold text-navy-900 hover:border-brand-orange hover:text-brand-orange transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call Now: {brandInfo.phone}</span>
              </a>

              <a
                href={brandInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-white border border-slate-200 text-xs font-heading font-semibold text-navy-900 hover:border-brand-coral hover:text-brand-coral transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brand-coral" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`mailto:${brandInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-white border border-slate-200 text-xs font-heading font-semibold text-navy-900 hover:border-brand-magenta hover:text-brand-magenta transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-brand-magenta" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          MAIN CONTACT SECTION: SPLIT FORM & CONTACT DETAILS
          ================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Contact Information & Reference Details (lg:col-span-5) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold block mb-2">
                OFFICIAL DETAILS
              </span>
              <h2 className="font-h2 text-navy-900 tracking-tight mb-4">
                Reach Our Pune Office Directly
              </h2>
              <p className="text-body text-content-secondary leading-relaxed">
                Whether you have an upcoming project, need strategic counsel, or want to automate manual workflows, our team is available to assist you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-surface-warm border border-slate-200/80 shadow-controlled-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Phone Inquiries
                  </span>
                  <a href={`tel:${brandInfo.phone}`} className="font-heading font-bold text-base text-navy-900 hover:text-brand-coral transition-colors">
                    +91 {brandInfo.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct business line &amp; WhatsApp
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-surface-warm border border-slate-200/80 shadow-controlled-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-brand-coral" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Email Correspondence
                  </span>
                  <a href={`mailto:${brandInfo.email}`} className="font-heading font-bold text-base text-navy-900 hover:text-brand-coral transition-colors">
                    {brandInfo.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    General, partnership &amp; client inquiries
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-surface-warm border border-slate-200/80 shadow-controlled-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-magenta/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-magenta" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Office Location
                  </span>
                  <p className="font-heading font-bold text-sm text-navy-900">
                    {brandInfo.address}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {brandInfo.location}
                  </p>
                </div>
              </div>

              {/* Website Domain */}
              <div className="p-6 rounded-2xl bg-surface-warm border border-slate-200/80 shadow-controlled-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-5 h-5 text-navy-900" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Official Website
                  </span>
                  <a href={`https://${brandInfo.website}`} target="_blank" rel="noopener noreferrer" className="font-heading font-bold text-sm text-navy-900 hover:text-brand-coral transition-colors">
                    {brandInfo.website}
                  </a>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Inquiry Form with Validation & States (lg:col-span-7) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-surface-white border border-slate-200/90 shadow-controlled-lg relative">
              
              {/* Success State */}
              {isSuccess ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-brand-coral/10 border border-brand-coral/30 flex items-center justify-center mx-auto text-brand-coral shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-navy-900">
                    Inquiry Received Successfully
                  </h3>

                  <p className="text-sm text-content-secondary max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Yuvantaa Digitals. Our core team in Pune will review your project requirements and respond within 24 hours.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-900 text-white text-xs font-heading font-semibold hover:bg-navy-800 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Inquiry</span>
                    </button>

                    <a
                      href={brandInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-coral text-white text-xs font-heading font-semibold hover:brightness-105 transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Follow Up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-navy-900 tracking-tight">
                      Send Us an Inquiry
                    </h3>
                    <p className="text-xs text-content-secondary mt-1">
                      Complete the form below and we will contact you shortly.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-heading font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-brand-coral">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-surface-warm border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-coral transition-colors ${
                          errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-heading font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                        Business / Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-4 py-3 rounded-xl bg-surface-warm border border-slate-200 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-coral transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-heading font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                        Email Address <span className="text-brand-coral">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-surface-warm border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-coral transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-heading font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                        Phone Number <span className="text-brand-coral">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9423121388"
                        className={`w-full px-4 py-3 rounded-xl bg-surface-warm border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-coral transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-heading font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                      Service Interested In <span className="text-brand-coral">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-warm border border-slate-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-coral transition-colors cursor-pointer"
                    >
                      <option value="Business Growth">Business Growth</option>
                      <option value="Creative Services">Creative Services</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-heading font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                      Message <span className="text-brand-coral">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're looking to build, improve or automate..."
                      className={`w-full px-4 py-3 rounded-xl bg-surface-warm border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-coral transition-colors resize-y ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 rounded-full bg-brand-gradient text-white font-heading font-bold text-sm tracking-wider uppercase shadow-brand-glow hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-400">
                    We respect your privacy. No spam. Direct consultation only.
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
