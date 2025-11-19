'use client';

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Sparkles, Zap, Star, ArrowRight, ImageIcon, Scissors, Expand, Target, Download, CheckCircle2, Play, Lightbulb, Rocket, Paintbrush } from 'lucide-react';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Precision Background Removal",
      description:
        "Remove backgrounds with pixel-perfect accuracy. Professional results for e-commerce and creative work.",
      color: "text-gray-900",
      bgColor: "bg-gray-200",
    },
    {
      icon: <Expand className="h-8 w-8" />,
      title: "Ultra-Sharp Upscaling",
      description:
        "Enlarge images without quality loss using next-gen neural networks. Perfect for print and display.",
      color: "text-gray-900",
      bgColor: "bg-gray-200",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Smart Object Detection",
      description:
        "Automatically identify and focus on subjects. Intelligent framing that understands composition.",
      color: "text-gray-900",
      bgColor: "bg-gray-200",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "One-Click Enhancement",
      description:
        "Auto-enhance colors, contrast, and sharpness. Your photos, beautifully optimized instantly.",
      color: "text-gray-900",
      bgColor: "bg-gray-200",
    },
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Product Photographer",
      content:
        "Saves me hours every week. The quality is indistinguishable from manual editing.",
      rating: 5,
    },
    {
      name: "Jordan Kim",
      role: "Content Creator",
      content:
        "The upscaling feature is a game-changer for social media. Crisp, professional results instantly.",
      rating: 5,
    },
    {
      name: "Casey Thompson",
      role: "E-commerce Manager",
      content:
        "Batch processing saves our team so much time. Quality is consistent across thousands of products.",
      rating: 5,
    },
  ];

  const pricingFeatures = [
    "Background Removal & Replacement",
    "4K Resolution Upscaling",
    "Smart Object Detection",
    "Auto Color Enhancement",
    "Batch Processing",
    "Cloud Backup & History",
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-gray-300/60 bg-white/95 backdrop-blur' : 'border-transparent bg-white/50 backdrop-blur'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                PixelFlow
              </span>
            </div>

            <div className="hidden items-center space-x-8 md:flex">
              <Link
                href="#features"
                className="text-gray-700 transition-colors hover:text-black"
              >
                Capabilities
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 transition-colors hover:text-black"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 transition-colors hover:text-black"
              >
                Stories
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/auth/sign-in">
                <Button variant="ghost" size="sm" className="cursor-pointer">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="sm" className="cursor-pointer gap-2">
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 sm:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-400/60 bg-gray-100/60 px-4 py-2 text-sm animate-fade-in">
              <Rocket className="h-4 w-4 text-gray-800" />
              <span className="font-medium text-gray-800">
                AI-Powered Image Magic
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-black sm:text-7xl animate-fade-in animation-delay-200">
              Edit Photos{" "}
              <span className="bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">
                At Light Speed
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-700 sm:text-xl animate-fade-in animation-delay-300">
              Professional-grade image editing powered by advanced AI. Transform your photos in seconds, not hours. Remove backgrounds, upscale, enhance, and create stunning visuals effortlessly.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in animation-delay-400">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="cursor-pointer gap-2 px-8 py-6 text-base bg-black text-white hover:bg-gray-900 transition-all hover:shadow-lg"
                >
                  <Play className="h-5 w-5" />
                  Start Editing Free
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer gap-2 px-8 py-6 text-base border-gray-400 text-gray-900 hover:bg-gray-100 transition-all"
                >
                  <ImageIcon className="h-5 w-5" />
                  See Live Demo
                </Button>
              </Link>
            </div>

            <div className="mt-16 text-center">
              <p className="mb-8 text-sm text-gray-600">
                Trusted by creators, designers, and businesses worldwide
              </p>
              <div className="grid grid-cols-2 items-center justify-center gap-6 opacity-80 sm:grid-cols-5">
                <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-xs text-gray-600">Photos Daily</div>
                </div>
                <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-gray-900">15K+</div>
                  <div className="text-xs text-gray-600">Happy Users</div>
                </div>
                <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-gray-900">99.99%</div>
                  <div className="text-xs text-gray-600">Reliability</div>
                </div>
                <div className="text-center hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-xs text-gray-600">Rated Best</div>
                </div>
                <div className="col-span-2 text-center hover:scale-105 transition-transform sm:col-span-1">
                  <div className="text-2xl font-bold text-gray-900">Sub 1s</div>
                  <div className="text-xs text-gray-600">Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Capabilities That{" "}
              <span className="text-black">
                Inspire
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Four powerful AI tools designed to elevate your creative workflow
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-gray-300 bg-white/70 backdrop-blur-sm transition-all hover:shadow-xl hover:border-gray-400 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div
                    className={`${feature.bgColor} mb-4 inline-flex items-center justify-center rounded-lg p-3 ${feature.color} group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {feature.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/0 to-gray-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Three Steps to Perfection
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              From upload to download, magic happens in seconds
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload & Select",
                description:
                  "Choose your image and select the AI tool you need. We support JPG, PNG, WebP, and more.",
              },
              {
                step: "02",
                title: "AI Processing",
                description:
                  "Watch as our advanced algorithms work their magic. Real-time preview of your edits.",
              },
              {
                step: "03",
                title: "Download & Share",
                description:
                  "Get high-resolution results instantly. Perfect for web, print, or social media.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-lg group-hover:bg-gray-900 group-hover:shadow-xl transition-all">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="ml-4 hidden h-0.5 w-full bg-gray-400 group-hover:bg-black transition-colors md:block" />
                  )}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-black group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Real Stories from{" "}
              <span className="text-black">
                Real Users
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              See how professionals are transforming their workflows
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative border-gray-300 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all hover:border-gray-400"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: Number(testimonial.rating) }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gray-400 text-gray-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-gradient-to-br from-white to-gray-100 py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Start Creating{" "}
              <span className="text-black">
                For Free
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              No credit card needed. Unlimited creativity awaits.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <Card className="relative overflow-hidden border-2 border-gray-400 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 bg-black px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-black">
                    Starter Free
                  </h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-black">
                      $0
                    </span>
                    <span className="ml-2 text-gray-700">forever</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    All essential features included
                  </p>
                </div>

                <ul className="mb-8 space-y-4">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gray-800" />
                      <span className="text-sm text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/dashboard">
                  <Button
                    className="w-full cursor-pointer gap-2 bg-black text-white hover:bg-gray-900 transition-all hover:shadow-lg"
                    size="lg"
                  >
                    <Sparkles className="h-4 w-4" />
                    Get Started Now
                  </Button>
                </Link>

                <p className="mt-4 text-center text-xs text-gray-600">
                  50 free edits monthly • Full feature access
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-200/70 to-gray-300/70 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Your Photos Deserve Better
            </h2>
            <p className="mt-4 text-lg text-gray-800">
              Join thousands of creators who are reimagining their workflow with PixelFlow
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="cursor-pointer gap-2 bg-black text-white px-8 py-6 text-base hover:bg-gray-900 transition-all hover:shadow-lg"
                >
                  <Sparkles className="h-5 w-5" />
                  Start Editing Now
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer gap-2 border-gray-500 px-8 py-6 text-base text-gray-900 hover:bg-gray-200 transition-all"
                >
                  <Download className="h-5 w-5" />
                  View Showcase
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-300 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-black">
                    PixelFlow
                  </span>
                </div>
                <p className="max-w-md text-gray-700">
                  Professional image editing powered by artificial intelligence. Transform your creative vision into reality.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-black">Product</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <Link
                      href="#features"
                      className="transition-colors hover:text-black"
                    >
                      Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="transition-colors hover:text-black"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="transition-colors hover:text-black"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-black">Support</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-black"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-black"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-black"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2025 PixelFlow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
