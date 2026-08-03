import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setIsSubmitting(true);

    // Mock sending query
    setTimeout(() => {
      toast.success('Thank you! Your message has been sent successfully.');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setValidated(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-extrabold display-4 mb-2">
            Contact <span className="text-warning">Us</span>
          </h1>
          <p className="text-muted text-uppercase tracking-wider small" style={{ letterSpacing: '2px' }}>
            We'd love to hear from you. Get in touch with our team today.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Details & Info Column */}
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4">Get In <span className="text-warning">Touch</span></h2>
            <p className="text-muted leading-relaxed mb-4">
              Have questions about our menu, corporate catering, or custom bookings? Shoot us a message or contact us through the details below. Our support team responds within 24 hours.
            </p>

            <div className="d-flex flex-column gap-4">
              {/* Address */}
              <div className="d-flex align-items-start gap-3">
                <div className="p-3 bg-black border border-secondary text-warning rounded-circle flex-shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Our Location</h6>
                  <p className="text-muted mb-0 small">123 Culinary Boulevard, Food District, Gourmet City, GC 98765</p>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-start gap-3">
                <div className="p-3 bg-black border border-secondary text-warning rounded-circle flex-shrink-0">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="text-muted mb-0 small">
                    <a href="tel:+15551234567" className="text-muted text-decoration-none hover-warning">+1 (555) 123-4567</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-start gap-3">
                <div className="p-3 bg-black border border-secondary text-warning rounded-circle flex-shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email Address</h6>
                  <p className="text-muted mb-0 small">
                    <a href="mailto:info@foodchain.com" className="text-muted text-decoration-none hover-warning">info@foodchain.com</a>
                  </p>
                </div>
              </div>

              {/* Operating hours */}
              <div className="d-flex align-items-start gap-3">
                <div className="p-3 bg-black border border-secondary text-warning rounded-circle flex-shrink-0">
                  <FaClock size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Working Hours</h6>
                  <p className="text-muted mb-0 small">Mon - Fri: 10:00 AM - 11:00 PM</p>
                  <p className="text-muted mb-0 small">Sat - Sun: 09:00 AM - Midnight</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-7">
            <div className="card bg-black border-secondary p-4 p-md-5 rounded-4 shadow-lg">
              <h3 className="fw-bold text-white mb-4">Send Message</h3>

              <form onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
                <div className="row g-3">
                  {/* Name Input */}
                  <div className="col-md-6">
                    <label htmlFor="contactName" className="form-label text-muted small fw-semibold text-uppercase">Full Name</label>
                    <input
                      type="text"
                      id="contactName"
                      className="form-control bg-transparent border-secondary text-white shadow-none"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback text-danger">Please enter your name.</div>
                  </div>

                  {/* Email Input */}
                  <div className="col-md-6">
                    <label htmlFor="contactEmail" className="form-label text-muted small fw-semibold text-uppercase">Email Address</label>
                    <input
                      type="email"
                      id="contactEmail"
                      className="form-control bg-transparent border-secondary text-white shadow-none"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback text-danger">Please enter a valid email.</div>
                  </div>

                  {/* Subject Input */}
                  <div className="col-12">
                    <label htmlFor="contactSubject" className="form-label text-muted small fw-semibold text-uppercase">Subject</label>
                    <input
                      type="text"
                      id="contactSubject"
                      className="form-control bg-transparent border-secondary text-white shadow-none"
                      placeholder="Message Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback text-danger">Please enter a subject.</div>
                  </div>

                  {/* Message Input */}
                  <div className="col-12">
                    <label htmlFor="contactMessage" className="form-label text-muted small fw-semibold text-uppercase">Message</label>
                    <textarea
                      id="contactMessage"
                      className="form-control bg-transparent border-secondary text-white shadow-none"
                      rows="5"
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <div className="invalid-feedback text-danger">Please enter your message.</div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-warning w-100 fw-bold py-2.5 rounded d-flex align-items-center justify-content-center gap-2 text-uppercase"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-5 pt-4">
          <div className="card bg-black border-secondary p-2 rounded-4 shadow overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175402096317!2d-73.98685168459392!3d40.74844047932828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1627885448375!5m2!1sen!2sus"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map Placeholder"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
