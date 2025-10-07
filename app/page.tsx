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
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <Image
              src="/grits-eggs-logo.webp"
              alt="Grits and Eggs"
              width={35}
              height={35}
              className="rounded-full md:w-[50px] md:h-[50px]"
            />
            <span className="text-base md:text-2xl font-bold tracking-tight text-[#F4D03F]">
              GRITS & EGGS
            </span>
          </motion.div>
          <div className="hidden md:flex gap-8 font-medium text-white">
            <a href="#about" className="hover:text-[#F4D03F] transition-colors">About</a>
            <a href="#episodes" className="hover:text-[#F4D03F] transition-colors">Episodes</a>
            <a href="#guests" className="hover:text-[#F4D03F] transition-colors">Notable Guests</a>
            <a href="#listen" className="hover:text-[#F4D03F] transition-colors">Listen</a>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.patreon.com/TheGritsAndEggsPodcast?utm_campaign=creatorshare_creator"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F4D03F] text-black px-3 py-1.5 md:px-6 md:py-2 rounded-full font-bold hover:bg-[#E8C639] transition-colors text-xs md:text-base"
          >
            <span className="hidden sm:inline">Support on Patreon</span>
            <span className="sm:hidden">Patreon</span>
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/grits-eggs-logo.webp"
            alt="Grits and Eggs Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 md:px-6 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-2 md:mb-4 tracking-tight animate-gradient-flow">
              RAW.
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-2 md:mb-4 tracking-tight animate-gradient-flow" style={{ animationDelay: '3s' }}>
              UNFILTERED.
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tight animate-gradient-flow" style={{ animationDelay: '6s' }}>
              REAL.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-4 md:mb-6 font-light text-white px-2"
          >
            The raw and unfiltered takes on pop culture, politics, and all things entertainment
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12"
          >
            Hosted by <span className="text-[#F4D03F] font-bold">Deante&apos; Kyle</span> | BIA Awards 2025 Nominee
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-3 md:gap-4 justify-center flex-wrap px-2"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(244, 208, 63, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#episodes"
              className="bg-[#F4D03F] text-black px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold hover:bg-[#E8C639] transition-all"
            >
              Watch Latest Episode
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#listen"
              className="border-2 border-[#F4D03F] text-[#F4D03F] px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold hover:bg-[#F4D03F] hover:text-black transition-all"
            >
              Listen Now
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-[#F4D03F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#F4D03F]"
          >
            About Deante&apos; Kyle
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#F4D03F] mx-auto mb-12"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Deante&apos; Kyle is the visionary host and creator behind the <span className="text-[#F4D03F] font-bold">Grits and Eggs Podcast</span>,
                a platform dedicated to delivering raw and unfiltered perspectives on pop culture, politics, and entertainment.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                With his authentic Southern voice and fearless approach to cultural commentary, Deante has built an
                independent media brand that resonates with listeners seeking truth without the fluff.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                A proud nominee for the <span className="text-[#F4D03F] font-bold">BIA Awards 2025</span>, Deante continues to
                push boundaries and create conversations that matter, one episode at a time.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#F4D03F]">
                <h3 className="text-3xl font-bold mb-6 text-[#F4D03F]">The Team</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="text-xl font-bold text-white">Big Kat</h4>
                    <p className="text-lg">Cameraman & Co-host</p>
                    <p className="text-sm mt-1">The voice behind &quot;New Music Monday&quot;</p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-xl font-bold text-white">Tristan</h4>
                    <p className="text-lg">Editor & Producer</p>
                    <p className="text-sm mt-1">Master of visual storytelling</p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-xl font-bold text-white">Suki</h4>
                    <p className="text-lg">Creative Director</p>
                    <p className="text-sm mt-1">Brand & graphic design visionary</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Notable Guests Section */}
      <motion.section
        id="guests"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-white"
          >
            Notable Guests
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#F4D03F] mx-auto mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "KevOnStage", episode: "75", topic: "Building a Media Empire" },
              { name: "Ab-Soul", episode: "76", topic: "Black Lip Pastor" },
              { name: "Omar Dorsey", episode: "45", topic: "Decatur Where It's Greater" },
              { name: "Amanda Seales", episode: "85", topic: "The Amanda Show" },
              { name: "Durand Bernarr", episode: "74", topic: "Words Matter" },
              { name: "Dr. Umar Johnson", episode: "Special", topic: "Always Outside" },
            ].map((guest, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-zinc-900 p-6 rounded-2xl border-2 border-[#F4D03F]/20 hover:border-[#F4D03F] transition-all"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#F4D03F]">{guest.name}</h3>
                <p className="text-sm text-gray-400 mb-3">Episode {guest.episode}</p>
                <p className="text-lg text-gray-300">{guest.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Episodes Section */}
      <motion.section
        id="episodes"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-6 bg-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-white"
          >
            Latest Episodes
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#F4D03F] mx-auto mb-12"
          />
          <motion.div variants={fadeInUp} className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#F4D03F] text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#F4D03F]">Episode 90</h3>
            <p className="text-2xl text-white mb-6">&quot;Sinners in Wonderland&quot;</p>
            <p className="text-lg text-gray-300 mb-8">
              The latest raw and unfiltered conversation covering the hottest topics in culture, politics, and entertainment.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/@GritsAndEggsPod"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://open.spotify.com/show/gritsandeggspod"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Listen Section */}
      <motion.section
        id="listen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-12 md:py-20 px-4 md:px-6 bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-[#F4D03F]"
          >
            Listen & Connect
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-[#F4D03F] mx-auto mb-8 md:mb-16"
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
              <div className="bg-zinc-900 p-4 md:p-8 rounded-2xl border-2 border-[#F4D03F]/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#F4D03F]">Streaming Platforms</h3>
                <div className="space-y-4">
                  <a href="https://www.youtube.com/@GritsAndEggsPod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#F4D03F] transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-lg font-semibold">YouTube</span>
                  </a>
                  <a href="https://open.spotify.com/show/gritsandeggspod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#F4D03F] transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span className="text-lg font-semibold">Spotify</span>
                  </a>
                  <a href="https://podcasts.apple.com/podcast/gritsandeggspod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#F4D03F] transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.846c5.604 0 10.154 4.55 10.154 10.154S17.604 22.154 12 22.154 1.846 17.604 1.846 12 6.396 1.846 12 1.846zm0 3.462c-3.699 0-6.692 2.994-6.692 6.692 0 2.716 1.615 5.055 3.942 6.123v-3.57c-1.143-.868-1.885-2.234-1.885-3.784 0-2.618 2.12-4.738 4.738-4.738s4.738 2.12 4.738 4.738c0 1.55-.742 2.916-1.885 3.784v3.57c2.327-1.068 3.942-3.407 3.942-6.123 0-3.698-2.993-6.692-6.692-6.692zm0 4.173c-1.39 0-2.519 1.129-2.519 2.519s1.129 2.519 2.519 2.519 2.519-1.129 2.519-2.519S13.39 9.48 12 9.48zm0 7.365c-.652 0-1.173.52-1.173 1.173v2.288c.38.078.769.117 1.173.117.404 0 .793-.039 1.173-.117v-2.288c0-.653-.521-1.173-1.173-1.173z"/>
                    </svg>
                    <span className="text-lg font-semibold">Apple Podcasts</span>
                  </a>
                  <a href="https://pocketcasts.com/podcast/grits-and-eggs-podcast/c6eefc40-a5c3-013b-f382-0acc26574db2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#F4D03F] transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                    </svg>
                    <span className="text-lg font-semibold">Pocket Casts</span>
                  </a>
                  <a href="https://castbox.fm/channel/id5362993?country=us" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#F4D03F] transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S2.5 17.247 2.5 12 6.753 2.5 12 2.5zm0 3C8.686 5.5 5.5 8.686 5.5 12.5S8.686 19.5 12 19.5s6.5-3.186 6.5-7S15.314 5.5 12 5.5zm0 2.5c2.485 0 4.5 2.015 4.5 4.5S14.485 17 12 17s-4.5-2.015-4.5-4.5S9.515 8 12 8zm0 2c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5S13.381 10 12 10z"/>
                    </svg>
                    <span className="text-lg font-semibold">Castbox</span>
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900 p-4 md:p-8 rounded-2xl border-2 border-[#F4D03F]/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#F4D03F]">Social Media</h3>
                <div className="space-y-4">
                  <a href="https://www.instagram.com/Deante.Kyle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#F4D03F] transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-lg font-semibold">@Deante.Kyle</span>
                  </a>
                  <a href="https://www.tiktok.com/@deante_kyle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#F4D03F] transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    <span className="text-lg font-semibold">@deante_kyle</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#F4D03F] text-black p-4 md:p-8 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Support the Show</h3>
                <p className="text-base md:text-lg mb-3 md:mb-4">
                  Join the Patreon community for exclusive behind-the-scenes content, early access, and more!
                </p>
                <a href="https://www.patreon.com/TheGritsAndEggsPodcast?utm_campaign=creatorshare_creator" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-[#F4D03F] px-6 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors">
                  Join for $8/month
                </a>
              </div>

              <div className="bg-zinc-900 p-4 md:p-8 rounded-2xl border-2 border-[#F4D03F]/20">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#F4D03F]">Get in Touch</h3>
                <p className="text-lg text-gray-300 mb-4">
                  For inquiries, collaborations, or just to say what&apos;s up:
                </p>
                <a href="mailto:Deante@deantekyle.com" className="text-xl text-white hover:text-[#F4D03F] transition-colors font-semibold">
                  Deante@deantekyle.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
              <div className="bg-zinc-900 p-4 md:p-8 rounded-2xl border-2 border-[#F4D03F]">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#F4D03F]">What Makes Us Different</h3>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">🎯 No Filter Policy</h4>
                    <p>We say what others won&apos;t. Real conversations about real issues in Black culture, politics, and entertainment.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">🔥 Top-Tier Guests</h4>
                    <p>From KevOnStage to Ab-Soul to Amanda Seales - we bring you conversations that matter with people who matter.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">🏆 Award-Nominated</h4>
                    <p>BIA Awards 2025 nominee - recognized for excellence in independent media and podcasting.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">📺 Multi-Platform Experience</h4>
                    <p>Full video episodes, audio podcasts, short clips, and exclusive Patreon content. Experience Grits & Eggs your way.</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#F4D03F]">
                <h3 className="text-2xl font-bold mb-4 text-[#F4D03F]">Weekly Content</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="text-lg font-semibold text-white">📻 New Episodes Every Week</p>
                    <p>Raw conversations on the latest in culture and politics</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">🎵 New Music Monday</p>
                    <p>Big Kat breaks down the hottest tracks of the week</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">🎬 Short Films & Special Projects</p>
                    <p>Like &quot;HEAD&apos;S OR TAIL&apos;S&quot; and other creative content</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#F4D03F] to-yellow-600 p-8 rounded-2xl">
                <h3 className="text-3xl font-bold mb-4 text-black">Shop Merch</h3>
                <p className="text-lg text-black mb-4">
                  Rep the brand with official Grits & Eggs apparel and accessories
                </p>
                <a href="https://www.deantekyle.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-[#F4D03F] px-6 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors">
                  Visit Store
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t-2 border-[#F4D03F]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/grits-eggs-logo.webp"
              alt="Grits and Eggs"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h3 className="text-4xl font-bold tracking-tight text-[#F4D03F]">GRITS & EGGS</h3>
          </div>
          <p className="text-xl text-gray-300 mb-6">Raw. Unfiltered. Real.</p>
          <p className="text-lg text-gray-400 mb-2">Hosted by Deante&apos; Kyle</p>
          <p className="text-sm text-gray-500">BIA Awards 2025 Nominee</p>
          <div className="border-t border-gray-800 pt-6 mt-6">
            <p className="text-gray-400">© 2024 Grits & Eggs Podcast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
