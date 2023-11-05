import { Circle } from '@/components/Circle'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section id="hero" className="relative min-h-screen px-5 pt-36">
        <Image src="/lights.png" fill alt="" />
        <div
          id="section-header"
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Announcement */}
          <div className="border-purpleshine/20 hover:border-purpleshine/30 group relative cursor-pointer overflow-clip rounded-full border px-3 py-[0.07rem] transition duration-300">
            <span className="from-grad-purple via-grad-pink to-grad-orange bg-gradient-to-r bg-clip-text text-sm text-white/40">
              Announcing our $1.4M Fundraise
            </span>
            <div className="bg-background absolute inset-0 -z-10" />
            <div className="to-purpleshine/30 from-purpleshine/0 absolute -left-1/2 -right-1/2 -top-1/2 bottom-0 -z-10 rounded-full bg-gradient-radial opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          {/* Title */}
          <h1 className="font-display text-7xl font-medium leading-[80px] tracking-[-1.44px]">
            Dimension is the new
            <br />
            <span className="from-grad-purple bg-gradient-to-r via-red-400 to-yellow-200 bg-clip-text text-transparent">
              standard for collaboration
            </span>
          </h1>
          {/* Subtitle */}
          <p className="pt-1 text-lg opacity-80">
            Chat, code, cloud, deployments, and more.
          </p>
          {/* Hero Action */}
          <form id="hero-action" className="flex flex-row gap-5 py-3.5">
            <div className="focus-within:border-border/30 border-border/20 group relative h-11 w-[278px] overflow-clip rounded-lg border transition-colors duration-300">
              <div className="from-border/10 to-border/5 group-hover:bg-border/5 pointer-events-none absolute inset-0 bg-gradient-to-t to-70% transition duration-300 group-focus-within:opacity-0" />
              <input
                className="placeholder-border/30 bg-background h-full w-full rounded-lg px-4 outline-none"
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
          {/* Circles */}
          <Circle
            diameter={1000}
            className="absolute -top-2 left-1/2 -z-20 -translate-x-1/2"
          />
          <Circle
            animated
            diameter={1000}
            className="absolute left-1/2 top-36 -z-20 -translate-x-1/2"
          />
          <Circle
            animated
            reversed
            diameter={1000}
            className="absolute left-1/2 top-72 -z-20 -translate-x-1/2"
          />

          {/* Hero Preview */}
          <Image
            src="/hero-preview.png"
            alt="screenshot"
            width={1216}
            height={766}
            className="border-border/10 mt-12 rounded-xl border"
          />
        </div>
      </section>
      <section className="min-h-screen" />
    </main>
  )
}
