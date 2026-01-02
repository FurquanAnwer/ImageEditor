import type { ReactNode } from "react";
import {Providers} from "@/src/components/providers";
import { Sparkles, Zap, Lock, Settings } from 'lucide-react';
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen">

        {/* Left Side - Auth Form */}
        <div className="flex flex-1 flex-col justify-center bg-gradient-to-br from-white to-gray-100/50 px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 text-center lg:hidden">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent">
                  PixelFlow
                </span>
              </Link>
            </div>

            {/* Auth Form Container */}
            <div>{children}</div>

            {/* Footer Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Back to{" "}
              <Link
                href="/"
                className="font-medium text-gray-900 transition-colors hover:text-black"
              >
                homepage
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Branding */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 lg:flex lg:w-1/2">
          <div className="bg-grid-white/[0.05] absolute inset-0 bg-[size:30px_30px]" />
          <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16">
            {/* Logo */}
            <Link href="/" className="mb-12 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-600/50 bg-gray-800/50 backdrop-blur-sm">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                PixelFlow
              </span>
            </Link>

            {/* Hero Content */}
            <div className="max-w-md">
              <h1 className="mb-6 text-4xl leading-tight font-bold text-white xl:text-5xl">
                Access Your{" "}
                <span className="text-gray-300">Creative Studio</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Unlock professional image editing tools designed for modern creators. 
                Simple sign-in to powerful AI-driven editing capabilities.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    text: "Instant AI Processing",
                    color:
                      "bg-gray-700/40 border-gray-600/40 text-gray-300",
                  },
                  {
                    icon: Lock,
                    text: "Secure & Private",
                    color: "bg-gray-700/40 border-gray-600/40 text-gray-300",
                  },
                  {
                    icon: Settings,
                    text: "Full Control & Customization",
                    color:
                      "bg-gray-700/40 border-gray-600/40 text-gray-300",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border backdrop-blur-sm ${feature.color}`}
                    >
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-gray-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50M+</div>
                <div className="text-sm text-gray-500">Images Edited</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm text-gray-500">User Rating</div>
              </div>
            </div>
          </div>

          <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-gray-600/20 blur-3xl" />
          <div className="absolute right-32 bottom-20 h-24 w-24 rounded-full bg-gray-500/15 blur-2xl" />
          <div className="absolute top-1/2 right-10 h-16 w-16 rounded-full bg-gray-700/20 blur-xl" />
        </div>


      </div>
    </Providers>
  );
}
