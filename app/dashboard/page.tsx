import { User, Settings, Bell, LayoutDashboard } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-sans">Founder Dashboard</h1>
          <p className="text-gray-400 mt-2">Manage your profile and startup details.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-2">
          <div className="bg-secondary border border-gray-800 rounded-xl p-4 flex flex-col gap-2">
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 bg-secondary-dark rounded-lg text-primary font-medium">
              <LayoutDashboard size={20} />
              Overview
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-secondary-dark rounded-lg text-gray-300 transition-colors">
              <User size={20} />
              My Profile
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-secondary-dark rounded-lg text-gray-300 transition-colors">
              <Bell size={20} />
              Notifications
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-secondary-dark rounded-lg text-gray-300 transition-colors">
              <Settings size={20} />
              Settings
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-secondary border border-gray-800 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <LayoutDashboard className="text-gray-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Welcome to your dashboard</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                This is where you'll be able to manage your startup listing, connect with other founders, and update your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
