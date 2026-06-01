import { Search, Filter, Briefcase } from 'lucide-react';

export default function DirectoryPage() {
  const startups = [
    { name: 'FinTech BD', industry: 'Finance', stage: 'Seed', description: 'Revolutionizing digital payments in Bangladesh.' },
    { name: 'AgriTech Solutions', industry: 'Agriculture', stage: 'Series A', description: 'Smart farming solutions for local farmers.' },
    { name: 'HealthConnect', industry: 'Healthcare', stage: 'Pre-seed', description: 'Connecting patients with top doctors remotely.' },
    { name: 'EduSmart', industry: 'Education', stage: 'Seed', description: 'AI-driven personalized learning platform.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">Startup Directory</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover and connect with the most promising startups building the future in Dhaka.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search startups, founders, or industries..." 
            className="w-full bg-secondary-dark border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button className="bg-secondary border border-gray-800 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-secondary-dark transition-colors">
          <Filter size={20} />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {startups.map((startup, idx) => (
          <div key={idx} className="bg-secondary border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-secondary-dark rounded-lg flex items-center justify-center border border-gray-700">
                <Briefcase className="text-primary" size={24} />
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {startup.stage}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors font-sans">{startup.name}</h3>
            <p className="text-gray-400 mb-4">{startup.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">{startup.industry}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
