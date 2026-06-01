import { ArrowRight, Users, Rocket, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark to-secondary z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-sans">
            Connect with the Builders Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">Dhaka’s Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-body max-w-2xl mx-auto leading-relaxed">
            Dhaka’s Startup Ecosystem, All in One Place. Meet your next co-founder, investor, or early adopter in the heart of Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/directory" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 group shadow-lg shadow-primary/25">
              Explore Directory
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="/dashboard" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Features Preview */}
      <section className="w-full py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-secondary-dark border border-gray-800 flex flex-col items-center text-center">
              <Users className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 font-sans">Find Co-founders</h3>
              <p className="text-gray-400">Match with complementary skill sets and shared visions.</p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary-dark border border-gray-800 flex flex-col items-center text-center">
              <Building2 className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 font-sans">Discover Startups</h3>
              <p className="text-gray-400">Explore the most innovative companies emerging from Dhaka.</p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary-dark border border-gray-800 flex flex-col items-center text-center">
              <Rocket className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2 font-sans">Launch & Scale</h3>
              <p className="text-gray-400">Access resources, investors, and talent to accelerate your growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
