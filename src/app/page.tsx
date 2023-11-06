'use client'

import { Circle } from '@/components/Circle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section
        id="hero"
        className="relative flex max-w-full flex-col items-center overflow-clip px-5 pt-36 sm:min-h-screen"
      >
        <div className="absolute top-0 -z-10 h-screen w-screen sm:h-[800px] sm:w-full">
          <Image src="/lights.png" fill alt="" className="object-cover" />
        </div>
        <div
          id="section-header"
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Announcement */}
          <div className="border-purpleshine/20 hover:border-purpleshine/30 group relative cursor-pointer overflow-clip rounded-full border px-3 py-[0.07rem] transition duration-300">
            <span className="from-grad-purple via-grad-pink to-grad-orange bg-gradient-to-r bg-clip-text text-sm text-white/50 opacity-80">
              Announcing our $1.4M Fundraise
            </span>
            <div className="bg-background absolute inset-0 -z-10" />
            <div className="to-purpleshine/30 from-purpleshine/0 absolute -left-1/2 -right-1/2 -top-1/2 bottom-0 -z-10 rounded-full bg-gradient-radial opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-medium leading-tight tracking-[-1.44px] sm:text-7xl sm:leading-[80px]">
            Dimension is the new
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-orange-300 to-orange-200 bg-clip-text text-transparent">
              standard for collaboration
            </span>
          </h1>

          {/* Subtitle */}
          <p className="pt-1 opacity-80 sm:text-lg">
            Chat, code, cloud, deployments, and more.
          </p>

          {/* Hero Action */}
          <form
            id="hero-action"
            className="flex w-full flex-col items-stretch gap-5 py-3.5 sm:flex-row sm:justify-center"
          >
            <div className="focus-within:border-border/30 border-border/15 group relative h-11 overflow-clip rounded-lg border transition-colors duration-300 sm:w-[278px]">
              <div className="from-border/10 to-border/5 group-hover:bg-border/5 pointer-events-none absolute inset-0 bg-gradient-to-t to-70% transition duration-300 group-focus-within:opacity-0" />
              <input
                className="placeholder-border/30 bg-background h-full w-full rounded-lg px-3.5 outline-none"
                placeholder="Email address..."
              />
            </div>
            <button
              // type="submit"
              className="from-grad-purple via-grad-pink to-grad-orange z-10 h-11 rounded-lg bg-gradient-to-br from-10% via-40% px-5 font-medium text-white"
            >
              Join waitlist
            </button>
          </form>
        </div>
        {/* Circles */}
        <Circle className="absolute left-1/2 top-12 -z-20 -translate-x-1/2" />
        <Circle
          animated
          className="absolute left-1/2 top-52 -z-20 h-72 -translate-x-1/2"
        />
        <Circle
          animated
          reversed
          className="absolute left-1/2 top-[21rem] -z-20 -translate-x-1/2"
        />

        {/* Hero Preview */}
        <div className="relative mt-4 h-[766px] min-w-[1216px] self-start sm:mt-12">
          <Image
            src="/hero-preview.png"
            alt="screenshot"
            fill
            quality={100}
            priority
            className="border-border/10 gradient-mask-b-0 left-0 rounded-2xl border object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="relative flex h-[70vh] flex-col items-center justify-center gap-5 overflow-hidden px-4"
      >
        <div className="via-grad-pink m-3 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-400 from-10% to-yellow-200 to-90% text-5xl font-medium text-white sm:h-24 sm:w-24 sm:text-6xl">
          D
        </div>

        <h2 className="font-display text-center text-3xl font-medium sm:text-5xl">
          Ready to join a new{' '}
          <span className="from-grad-purple via-grad-pink to-grad-orange bg-gradient-to-r from-10% via-40% bg-clip-text font-medium text-transparent">
            Dimension?
          </span>
        </h2>
        <p className="text-center">
          The delightfully smart collaboration platform. Get started - for free.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="from-grad-purple via-grad-pink to-grad-orange z-10 m-5 h-11 w-full rounded-lg bg-gradient-to-br from-10% via-40% px-5 font-medium text-white sm:w-fit"
        >
          Join waitlist
        </button>

        <Circle className="absolute -top-20 left-1/2 -z-20 h-72 -translate-x-1/2 sm:top-14" />
        <Circle
          animated
          className="absolute left-1/2 top-0 -z-20 h-96 -translate-x-1/2 sm:top-52"
        />
        <Circle
          animated
          reversed
          className="absolute left-1/2 top-12 -z-20 h-72 -translate-x-1/2 sm:top-96"
        />
      </section>
      <hr className="border-border/15 gradient-mask-r-50-d" />
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-40 pt-20 sm:flex-row">
        <div className="flex-[0.7] font-medium">Hardcoded.</div>
        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3">
          <div className="space-y-5 text-sm">
            <div className="font-medium">Product</div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Changelog
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Documentation
            </div>
          </div>
          <div className="space-y-5 text-sm">
            <div className="font-medium">Company</div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              About
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Careers
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Blog
            </div>
          </div>
          <div className="space-y-5 text-sm">
            <div className="font-medium">Contact</div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Discord
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Twitter
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Github
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Email
            </div>
          </div>
        </div>
      </nav>
      <hr className="border-border/15 gradient-mask-r-50-d" />
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 py-14 text-xs opacity-40 sm:flex-row">
        <p>Copyright © 2023 Hardcoded Digital. All rights reserved.</p>
        <nav className="flex flex-row gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </nav>
      </footer>
    </main>
  )
}
