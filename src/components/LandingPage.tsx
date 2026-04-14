import React from 'react';
import { Sparkles, Palette, Download, Zap, Star, ArrowRight, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-accent-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">LogoMaker</span>
        </div>
        <button
          onClick={onStart}
          className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-200 border border-white/20"
        >
          Create Logo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-36">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">100% Free — No hidden fees</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            Design your
            <span className="block bg-gradient-to-r from-brand-300 via-purple-300 to-accent-400 bg-clip-text text-transparent">
              perfect logo
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create a professional logo in minutes with our easy-to-use logo maker. 
            No design skills needed. Download your logo for free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onStart}
              className="group bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 flex items-center gap-2"
            >
              Make My Logo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onStart}
              className="text-white/70 hover:text-white px-8 py-4 font-medium transition-colors"
            >
              See how it works →
            </button>
          </div>

          {/* Sample logos showcase */}
          <div className="mt-16 flex justify-center gap-6 flex-wrap">
            {['🏢 TechCorp', '🌿 GreenLife', '☕ BrewMaster', '💎 LuxBrand'].map((sample, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-white/80 font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {sample}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Design your logo in minutes. Boom.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              No timeline, no budget constraints, no judgement — just pure logo design freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Start with top-notch design options',
                desc: 'Generate 100s of different logos based on your industry and preferences. Browse and pick your faves like a boss!',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Zap,
                title: 'Edit your logo to perfection',
                desc: 'Zero design skills needed. Get instant color, font, symbol, and layout suggestions to make it just right.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Download,
                title: 'Download for free',
                desc: 'When you\'re ready, download your PNG file for free! Walk away with a professional logo design.',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What people are saying
            </h2>
            <p className="text-white/60">Join thousands of happy logo creators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "It was by far the easiest logo creator to use — from choosing layout, font, imagery and colour scheme. Thank you for making the process so simple!",
                name: "Sarah K.",
                role: "Tech Startup",
                rating: 5,
              },
              {
                text: "The options are amazing (colors, fonts, graphics, etc). We found exactly what we were looking for and designed our logo in minutes.",
                name: "Mike R.",
                role: "Coffee Shop Owner",
                rating: 5,
              },
              {
                text: "Such a great resource for a smaller company or personal brand. So easy to use, so many options and no price barrier. Highly recommended!",
                name: "Mackenzie L.",
                role: "Personal Brand",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-brand-500/20 to-purple-600/20 border border-white/10 rounded-3xl p-12 md:p-16 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Try the best free logo maker today
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Ahh, the satisfaction (and bragging rights) of knowing you did it yourself.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {['No sign-up required', '100% free downloads', 'Professional quality'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onStart}
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Create Your Free Logo →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-accent-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-white/80 font-semibold">LogoMaker</span>
          </div>
          <p className="text-white/40 text-sm">
            © 2026 LogoMaker. Free logo design for everyone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
