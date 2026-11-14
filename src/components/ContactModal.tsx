import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || 'Custom Software Development',
    budget: '₹10k - ₹25k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Auto-sync selected service and pre-fill details whenever the modal opens
  useEffect(() => {
    if (isOpen) {
      let matchedService = 'Custom Software Development';
      let prefilledMessage = '';

      if (defaultService) {
        const options = [
          'Attendance Management System',
          'Café Management System',
          'Task Management System',
          'School Management System',
          'Single-Vendor E-Commerce',
          'Multi-Vendor E-Commerce',
          'CRM & ERP Solutions',
          'Custom Software Development',
          'Digital Marketing & Growth',
        ];

        const found = options.find((opt) =>
          defaultService.toLowerCase().includes(opt.toLowerCase()) ||
          opt.toLowerCase().includes(defaultService.toLowerCase())
        );

        if (found) {
          matchedService = found;
          if (defaultService.toLowerCase().includes('demo')) {
            prefilledMessage = `Hi, I would like to request a live product walkthrough and pricing details for ${found}.`;
          } else if (defaultService.toLowerCase().includes('hardware')) {
            prefilledMessage = `Hi, I would like to consult with an engineer regarding on-site hardware and turnstile integration for ${found}.`;
          } else {
            prefilledMessage = `Hi, I am interested in ${found} for our organization.`;
          }
        } else {
          matchedService = defaultService;
        }
      }

      setFormData((prev) => ({
        ...prev,
        service: matchedService,
        message: prev.message || prefilledMessage,
      }));
      setSubmitted(false);
      setErrors({});
      setSubmitError(null);
    }
  }, [isOpen, defaultService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please provide brief project details';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError(null);

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      'a9f7b0c1-1267-4864-891e-94a286a589ff';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Inquiry: ${formData.service} from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
          from_name: 'Bloody Developer Website',
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          botcheck: '',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedName(formData.name);
        setSubmitted(true);
        // Clear form for subsequent inquiries
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: defaultService || 'Custom Software Development',
          budget: '₹10k - ₹25k',
          message: '',
        });
      } else {
        setSubmitError(data.message || 'Failed to submit inquiry. Please try again or reach out directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError('Unable to connect to the email server. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-[650px] max-h-[92vh] overflow-y-auto bg-[#0c1624] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(255,38,56,0.18)]">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff2638]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/60 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ff2638]/15 border border-[#ff2638]/40 flex items-center justify-center mx-auto text-[#ff2638] shadow-[0_0_24px_rgba(255,38,56,0.35)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-white">Project Inquiry Received!</h3>
            <p className="text-[14px] text-[#8e9cae] max-w-[440px] mx-auto leading-relaxed">
              Thank you, <span className="text-white font-medium">{submittedName || 'there'}</span>. A senior solutions architect from Bloody Developer will review your requirements and reach out within 24 hours.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="inline-flex items-center gap-2 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[13.5px] font-bold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(255,38,56,0.45)] transition-all cursor-pointer"
              >
                <span>Back to Website</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-[11px] font-bold tracking-[0.22em] text-[#ff2638] uppercase">
                START A PROJECT
              </div>
              <h2 className="text-[24px] sm:text-[26px] font-bold text-white mt-1">Let's Discuss Your Vision</h2>
              <p className="text-[13.5px] sm:text-[14px] text-[#8e9cae] mt-1 leading-relaxed">
                Tell us about your project requirements or the software solution you need.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#c4ccd7] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className={`w-full bg-[#08101a] border ${errors.name ? 'border-[#ff2638]' : 'border-white/10'
                      } rounded-xl px-3.5 py-2.5 text-[16px] sm:text-[13.5px] text-white focus:outline-none focus:border-[#ff2638] transition-colors`}
                  />
                  {errors.name && <span className="text-[11px] text-[#ff2638] mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#c4ccd7] mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full bg-[#08101a] border ${errors.email ? 'border-[#ff2638]' : 'border-white/10'
                      } rounded-xl px-3.5 py-2.5 text-[16px] sm:text-[13.5px] text-white focus:outline-none focus:border-[#ff2638] transition-colors`}
                  />
                  {errors.email && <span className="text-[11px] text-[#ff2638] mt-1 block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#c4ccd7] mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-[#08101a] border border-white/10 rounded-xl px-3.5 py-2.5 text-[16px] sm:text-[13.5px] text-white focus:outline-none focus:border-[#ff2638] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#c4ccd7] mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Enterprises"
                    className="w-full bg-[#08101a] border border-white/10 rounded-xl px-3.5 py-2.5 text-[16px] sm:text-[13.5px] text-white focus:outline-none focus:border-[#ff2638] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#c4ccd7] mb-1.5">
                    Required Solution / Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#08101a] border border-white/10 rounded-xl px-3.5 py-2.5 text-[16px] sm:text-[13.5px] text-white focus:outline-none focus:border-[#ff2638] transition-colors cursor-pointer"
                  >
                    <option value="Attendance Management System">Attendance Management System</option>
                    <option value="Café Management System">Café Management System</option>
                    <option value="Task Management System">Task Management System</option>
                    <option value="School Management System">School Management System</option>
                    <option value="Single-Vendor E-Commerce">Single-Vendor E-Commerce</option>
                    <option value="Multi-Vendor E-Commerce">Multi-Vendor E-Commerce</option>
                    <option value="CRM & ERP Solutions">CRM & ERP Solutions</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#c4ccd7] mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#08101a] border border-white/10 rounded-xl px-3.5 py-2.5 text-[16px] sm:text-[13.5px] text-white focus:outline-none focus:border-[#ff2638] transition-colors cursor-pointer"
                  >
                    <option value="< ₹10k">&lt; ₹10k</option>
                    <option value="₹10k - ₹25k">₹10k - ₹25k</option>
                    <option value="₹25k - ₹50k">₹25k - ₹50k</option>
                    <option value="₹50k - ₹1 Lakh">₹50k - ₹1 Lakh</option>
                    <option value="₹1 Lakh - ₹5 Lakhs">₹1 Lakh - ₹5 Lakhs</option>
                    <option value="₹5 Lakhs+">₹5 Lakhs+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#c4ccd7] mb-1.5">
                  Project Details & Goals *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current bottleneck, desired features, timeline, and tech requirements..."
                  className={`w-full bg-[#08101a] border ${errors.message ? 'border-[#ff2638]' : 'border-white/10'
                    } rounded-xl px-3.5 py-2.5 text-[16px] sm:text-[13.5px] text-white focus:outline-none focus:border-[#ff2638] transition-colors resize-none`}
                />
                {errors.message && <span className="text-[11px] text-[#ff2638] mt-1 block">{errors.message}</span>}
              </div>

              {submitError && (
                <div className="flex items-center gap-2.5 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-[12.5px] leading-relaxed">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ff2638] hover:bg-[#e01f30] text-white text-[13.5px] sm:text-[14px] font-bold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(255,38,56,0.45)] hover:shadow-[0_0_28px_rgba(255,38,56,0.65)] transition-all cursor-pointer active:scale-97 disabled:opacity-60 disabled:cursor-not-allowed min-h-12"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
