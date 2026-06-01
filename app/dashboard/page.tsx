import Link from 'next/link';
import { User, Settings, Bell, LayoutDashboard, Building2, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-sans">Founder Dashboard</h1>
          <p className="text-gray-400 mt-2">Manage your profile and startup details.</p>
        </div>
        <Link
          href="/dashboard/profile"
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <Building2 size={18} />
          Update Company Profile
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-2">
          <div className="bg-secondary border border-gray-800 rounded-xl p-4 flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 w-full text-left px-4 py-3 bg-secondary-dark rounded-lg text-primary font-medium"
            >
              <LayoutDashboard size={20} />
              Overview
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-secondary-dark rounded-lg text-gray-300 transition-colors"
            >
              <User size={20} />
              My Profile
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-secondary-dark rounded-lg text-gray-300 transition-colors"
            >
              <Building2 size={20} />
              Company Profile
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-secondary-dark rounded-lg text-gray-300 transition-colors"
            >
              <Bell size={20} />
              Notifications
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-secondary-dark rounded-lg text-gray-300 transition-colors"
            >
              <Settings size={20} />
              Settings
            </Link>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-secondary border border-gray-800 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 bg-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                <Building2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Set up your company profile</h3>
              <p className="text-gray-400 mb-6">
                Add your startup details, logo, description, and more so other founders can discover you.
              </p>
              <Link
                href="/dashboard/profile"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25"
              >
                Update Company Profile
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
