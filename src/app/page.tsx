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
          <Image
            src="/spotlight.png"
            fill
            alt=""
            className="object-cover opacity-30"
          />
        </div>
        <div
          id="section-header"
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Announcement */}
          <div className="group relative cursor-pointer overflow-clip rounded-full border border-purpleshine/20 px-3 py-[0.07rem] transition duration-300 hover:border-purpleshine/30">
            <span className="bg-gradient-to-r from-grad-purple via-grad-pink to-grad-orange bg-clip-text text-sm text-white/50 opacity-80">
              Just Released: Get It Now!
            </span>
            <div className="absolute inset-0 -z-10 bg-background" />
            <div className="absolute -left-1/2 -right-1/2 -top-1/2 bottom-0 -z-10 rounded-full bg-gradient-radial from-purpleshine/0 to-purpleshine/30 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-medium leading-tight tracking-[-1.44px] sm:text-7xl sm:leading-[80px]">
            Lorem ipsum dolor
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-orange-300 to-orange-200 bg-clip-text text-transparent">
              sit amet consectetur
            </span>
          </h1>

          {/* Subtitle */}
          <p className="pt-1 opacity-80 sm:text-lg">
            Quasi voluptates, voluptatum, quo, doloribus quidem
          </p>

          {/* Hero Action */}
          <form
            id="hero-action"
            className="flex w-full flex-col items-stretch gap-5 py-3.5 sm:flex-row sm:justify-center"
          >
            <div className="group relative h-11 overflow-clip rounded-lg border border-border/15 transition-colors duration-300 focus-within:border-border/30 sm:w-[278px]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-border/10 to-border/5 to-70% transition duration-300 group-focus-within:opacity-0 group-hover:bg-border/5" />
              <input
                className="h-full w-full rounded-lg bg-background px-3.5 placeholder-border/30 outline-none"
                placeholder="Email address..."
              />
            </div>
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="relative z-10 h-11 rounded-lg bg-gradient-to-br from-grad-purple from-10% via-grad-pink via-40% to-grad-orange px-5 font-medium text-white"
            >
              <div className="absolute -inset-1 rounded-xl border-[1px] border-border/10" />
              <div className="absolute -inset-2 rounded-2xl border-[1px] border-border/10" />
              <div className="absolute -inset-3 rounded-[1.25rem] border-[1px] border-border/5" />
              Join now
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
        <div className="relative mt-4 h-[719px] min-w-[1200px] max-w-full self-start sm:mt-12 xl:self-auto">
          <Image
            src="/screenshot.png"
            alt="screenshot"
            fill
            quality={100}
            priority
            className=" left-0 rounded-2xl border border-border/10 object-contain gradient-mask-b-0"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="relative flex h-[70vh] flex-col items-center justify-center gap-5 overflow-hidden px-4"
      >
        <div className="relative m-3 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-grad-purple from-10% via-grad-pink to-grad-orange to-90% text-5xl font-semibold text-white sm:h-24 sm:w-24 sm:text-6xl">
          <div className="absolute -inset-1 rounded-[1.75rem] border-[1px] border-border/10" />
          <div className="absolute -inset-2 rounded-[2rem] border-[1px] border-border/10" />
          <div className="absolute -inset-3 rounded-[2.25rem] border-[1px] border-border/5" />
          R
        </div>

        <h2 className="text-center font-display text-3xl font-medium sm:text-5xl">
          Lorem ipsum dolor{' '}
          <span className="bg-gradient-to-r from-grad-purple from-10% via-grad-pink via-40% to-grad-orange bg-clip-text font-medium text-transparent">
            sit amet?
          </span>
        </h2>
        <p className="text-center">
          Consectetur adipisicing elit. Quasi voluptates, voluptatum, quo,
          doloribus quidem
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative z-10 m-5 h-11 w-full rounded-lg bg-gradient-to-br from-grad-purple from-10% via-grad-pink via-40% to-grad-orange px-5 font-medium text-white sm:w-fit"
        >
          <div className="absolute -inset-1 rounded-xl border-[1px] border-border/10" />
          <div className="absolute -inset-2 rounded-2xl border-[1px] border-border/10" />
          <div className="absolute -inset-3 rounded-[1.25rem] border-[1px] border-border/5" />
          Join now
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
        <a
          href="https://hardcoded.digital"
          className="flex-[0.7] font-medium hover:underline"
        >
          Hardcoded.
        </a>
        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3">
          <div className="space-y-5 text-sm">
            <div className="font-medium">Product</div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Updates
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Documentation
            </div>
          </div>
          <div className="space-y-5 text-sm">
            <div className="font-medium">Company</div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              About us
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Jobs
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              News
            </div>
          </div>
          <div className="space-y-5 text-sm">
            <div className="font-medium">Contact us</div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              Discord
            </div>
            <div className="cursor-pointer opacity-60 transition-opacity duration-300 hover:opacity-80">
              X / Twitter
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
        <p>
          Copyright © 2023{' '}
          <a href="https://hardcoded.digital" className="hover:underline">
            Hardcoded Digital
          </a>
          . Portfolio demonstration only.
        </p>
        <nav className="flex flex-row gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </nav>
      </footer>
    </main>
  )
}
