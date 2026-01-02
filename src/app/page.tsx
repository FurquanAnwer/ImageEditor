'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  Scissors,
  Expand,
  Target,
  Lightbulb,
  Star,
  CheckCircle2,
} from 'lucide-react';

import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';

/* -------------------- constants -------------------- */

const FEATURES = [
  {
    icon: Scissors,
    title: 'Precision Background Removal',
    description:
      'Pixel-perfect background removal for e-commerce, creatives, and marketing teams.',
  },
  {
    icon: Expand,
    title: 'Ultra-Sharp Upscaling',
    description:
      'Upscale images up to 4K using AI without losing detail or clarity.',
  },
  {
    icon: Target,
    title: 'Smart Object Detection',
    description:
      'Automatically detect subjects and frame images intelligently.',
  },
  {
    icon: Lightbulb,
    title: 'One-Click Enhancement',
    description:
      'Instant color, contrast, and sharpness optimization.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Alex Rivera',
    role: 'Product Photographer',
    content:
      'The quality is indistinguishable from manual editing. Massive time saver.',
  },
  {
    name: 'Jordan Kim',
    role: 'Content Creator',
    content:
      'Upscaling changed my workflow completely. Results are insanely clean.',
  },
  {
    name: 'Casey Thompson',
    role: 'E-commerce Manager',
    content:
      'Batch processing saved our team dozens of hours every week.',
  },
];

const PRICING_FEATURES = [
  'Background Removal',
  '4K Image Upscaling',
  'Auto Enhancement',
  'Batch Processing',
  'Cloud History',
];

/* -------------------- page -------------------- */

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* -------------------- navbar -------------------- */}
      <nav
        className={`sticky top-0 z-50 transition ${
          scrolled
            ? 'border-b border-gray-200 bg-white/90 backdrop-blur'
            : 'bg-white'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            PixelFlow
          </div>

          <div className="hidden items-center gap-8 md:flex text-sm">
            <Link href="#features" className="hover:text-indigo-600">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-indigo-600">
              Pricing
            </Link>
            <Link href="#testimonials" className="hover:text-indigo-600">
              Customers
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/sign-in">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="gap-1 bg-indigo-600 hover:bg-indigo-700">
                Get started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* -------------------- hero -------------------- */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-sm text-indigo-700">
            <Sparkles className="h-4 w-4" />
            AI-Powered Image Editing
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl">
            Edit images at
            <span className="block text-indigo-600"> lightning speed</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
            Remove backgrounds, upscale images, and enhance photos in seconds —
            no design skills required.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2 bg-indigo-600 hover:bg-indigo-700">
                <Play className="h-5 w-5" />
                Start editing free
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline">
                View demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- features -------------------- */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything you need to create faster
            </h2>
            <p className="mt-4 text-gray-600">
              Professional tools powered by modern AI
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- testimonials -------------------- */}
      <section id="testimonials" className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-14 text-center text-3xl font-bold sm:text-4xl">
            Trusted by professionals worldwide
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-gray-600">“{t.content}”</p>
                  <div className="mt-4">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- pricing -------------------- */}
      <section id="pricing" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-lg px-4">
          <Card className="border-2 border-indigo-600">
            <CardContent className="p-8">
              <h3 className="text-center text-2xl font-bold">Free Starter</h3>
              <div className="mt-4 text-center text-5xl font-bold">$0</div>
              <p className="mt-2 text-center text-gray-600">
                No credit card required
              </p>

              <ul className="mt-8 space-y-3">
                {PRICING_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/dashboard">
                <Button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700">
                  Get started
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* -------------------- footer -------------------- */}
      <footer className="border-t py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PixelFlow. All rights reserved.
      </footer>
    </div>
  );
}
