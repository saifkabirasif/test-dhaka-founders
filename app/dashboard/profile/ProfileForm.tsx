"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Building2, Globe, Target, FileText, User, Mail, Linkedin } from "lucide-react";
import { saveCompanyProfile } from "./actions";

const initialState = { success: false, message: "", error: null as string | null };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
    >
      {pending ? "Saving..." : "Save Profile"}
    </button>
  );
}

export function ProfileForm({ defaultValues }: { defaultValues?: Record<string, any> | null }) {
  const [state, formAction] = useFormState(saveCompanyProfile, initialState);

  return (
    <form action={formAction} className="space-y-8">
      {state?.success && (
        <div className="bg-green-900/40 border border-green-700 text-green-300 px-4 py-3 rounded-lg text-sm">
          {state.message}
        </div>
      )}
      {state?.error && (
        <div className="bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-sm">
          {state.error}
        </div>
      )}

      <div className="bg-secondary border border-gray-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Building2 size={20} className="text-primary" />
          Company Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-gray-400 font-medium">Company Name *</label>
            <input
              name="company_name"
              required
              defaultValue={defaultValues?.company_name ?? ""}
              placeholder="Acme Inc."
              className="w-full bg-secondary-dark border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-gray-400 font-medium">
              <Globe size={14} className="inline mr-1" />
              Website URL
            </label>
            <input
              name="website_url"
              defaultValue={defaultValues?.website_url ?? ""}
              placeholder="https://acme.com"
              className="w-full bg-secondary-dark border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm text-gray-400 font-medium">
            <Target size={14} className="inline mr-1" />
            Category
          </label>
          <input
            name="category"
            defaultValue={defaultValues?.category ?? ""}
            placeholder="e.g. Fintech, Healthtech, SaaS"
            className="w-full bg-secondary-dark border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm text-gray-400 font-medium">
            <FileText size={14} className="inline mr-1" />
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            defaultValue={defaultValues?.description ?? ""}
            placeholder="Tell us about your startup..."
            className="w-full bg-secondary-dark border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
          />
        </div>
      </div>

      <div className="bg-secondary border border-gray-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <User size={20} className="text-primary" />
          Founder Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-gray-400 font-medium">Founder Name *</label>
            <input
              name="founder_name"
              required
              defaultValue={defaultValues?.founder_name ?? ""}
              placeholder="John Doe"
              className="w-full bg-secondary-dark border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-gray-400 font-medium">
              <Mail size={14} className="inline mr-1" />
              Founder Email
            </label>
            <input
              name="founder_email"
              type="email"
              defaultValue={defaultValues?.founder_email ?? ""}
              placeholder="john@acme.com"
              className="w-full bg-secondary-dark border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm text-gray-400 font-medium">
            <Linkedin size={14} className="inline mr-1" />
            LinkedIn URL
          </label>
          <input
            name="linkedin_url"
            defaultValue={defaultValues?.linkedin_url ?? ""}
            placeholder="https://linkedin.com/in/johndoe"
            className="w-full bg-secondary-dark border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          />
        </div>
      </div>

      <SubmitButton />

      <p className="text-xs text-gray-500 text-center mt-2">All fields marked with * are required.</p>
    </form>
  );
}
