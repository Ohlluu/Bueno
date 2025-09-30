'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E3D5]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <span className={`text-3xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-[#1A1A1A]'}`}>
              Bueno
            </span>
          </motion.div>
          <div className={`hidden md:flex gap-8 font-medium ${scrolled ? 'text-white' : 'text-[#1A1A1A]'}`}>
            <a href="#experience" className="hover:opacity-70 transition-opacity">The Experience</a>
            <a href="#philosophy" className="hover:opacity-70 transition-opacity">Philosophy</a>
            <a href="#gallery" className="hover:opacity-70 transition-opacity">Gallery</a>
            <a href="#visit" className="hover:opacity-70 transition-opacity">Visit</a>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#visit"
            className="bg-[#1A1A1A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#333333] transition-colors"
          >
            Find Us
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="/images/Buenologo1.jpg"
              alt="Bueno"
              width={400}
              height={400}
              className="mx-auto mb-12 rounded-3xl shadow-2xl"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl mb-4 font-light text-gray-800"
          >
            A Coffee Experience Company
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Where every cup tells a story, and every moment is an experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(26, 26, 26, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#333333] transition-all"
            >
              Discover Bueno
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#visit"
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Visit Us
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Experience Section - featuring main.jpg */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#1A1A1A]"
          >
            The Bueno Experience
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#1A1A1A] mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <Image
                src="/images/main.jpg"
                alt="Bueno Coffee Experience"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                At Bueno, we don&apos;t just serve coffee—we craft experiences. Every cup is an
                invitation to slow down, to savor, to connect with something deeper than
                your daily routine.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We believe coffee is an art form, a ritual, a moment of intention in an
                otherwise chaotic world. It&apos;s not about rushing through your morning—it&apos;s
                about creating a memory worth holding onto.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                From sourcing to brewing, from the first sip to the last, we&apos;re obsessed
                with making every detail exceptional. Because you don&apos;t just deserve good coffee.
                You deserve <span className="font-bold italic">Bueno</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        id="philosophy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-[#1A1A1A] text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            Experience Over Everything
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-white mx-auto mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4">Intentional Craft</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every bean is selected with purpose. Every brew is timed to perfection.
                We don&apos;t cut corners—we create moments.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4">Elevated Atmosphere</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our space is designed for connection, creativity, and contemplation. Come for
                the coffee, stay for the vibe.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4">Memorable Moments</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We&apos;re not just making coffee—we&apos;re creating memories. Every visit is a chance
                to experience something extraordinary.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#1A1A1A]"
          >
            Moments at Bueno
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#1A1A1A] mx-auto mb-16"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/images/Bueno1.jpg",
              "/images/Bueno2.jpg",
              "/images/Bueno3.jpg",
              "/images/Bueno4.jpg",
              "/images/Bueno5.jpg",
              "/images/Bueno6.jpg",
              "/images/Bueno7.jpg",
              "/images/Bueno8.jpg",
              "/images/Bueno9.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visit Section */}
      <motion.section
        id="visit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-[#E8E3D5]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#1A1A1A]"
          >
            Come Experience Bueno
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#1A1A1A] mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#1A1A1A] flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Find Us
                </h3>
                <p className="text-xl text-gray-700">
                  2901 W Cermak Rd<br />
                  Chicago, Illinois 60623
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#1A1A1A] flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours
                </h3>
                <div className="text-lg text-gray-700 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 3:00 PM</p>
                  <p>Saturday - Sunday: 9:00 AM - 3:00 PM</p>
                </div>
              </div>

              <div className="bg-[#1A1A1A] text-white p-8 rounded-2xl">
                <p className="text-2xl font-bold mb-4">Your next experience awaits.</p>
                <p className="text-lg">
                  Step into Bueno and discover what coffee can truly be. More than a drink,
                  more than a destination—it&apos;s an experience you&apos;ll want to return to again
                  and again.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/buenodays.coffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @buenodays.coffee
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden shadow-2xl h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.5!2d-87.6987!3d41.8514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d123456789a%3A0x1234567890abcdef!2s2901%20W%20Cermak%20Rd%2C%20Chicago%2C%20IL%2060623!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4 tracking-tight">Bueno</h3>
          <p className="text-xl text-gray-300 mb-6">A Coffee Experience Company</p>
          <div className="border-t border-white/20 pt-6 mt-6">
            <p className="text-gray-300">© 2024 Bueno. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}