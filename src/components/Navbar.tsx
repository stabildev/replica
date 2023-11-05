import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-20 flex w-full flex-col items-stretch">
      <div className="bg-border/[1%] flex h-20 w-full items-center justify-center backdrop-blur-md">
        <nav className="container grid max-w-[1330px] grid-cols-3">
          <Link className="flex items-center gap-3" href="/">
            <div className="via-grad-pink flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 from-10% to-yellow-200 to-90% text-2xl font-medium text-white">
              D
            </div>
            <h3 className="font-display text-lg font-medium">Dimension</h3>
          </Link>
          <ul className="border-border/15 flex items-center gap-10 place-self-center rounded-full border px-6 py-3 text-sm opacity-80">
            <li className="font-display font-medium">About</li>
            <li className="font-display flex items-center font-medium">
              Careers
              <div className="bg-border/5 ml-1 flex h-5 w-5 items-center justify-center rounded-full text-center text-xs font-light">
                3
              </div>
            </li>
            <li className="font-display font-medium">Blog</li>
            <li className="font-display font-medium">Changelog</li>
          </ul>
          <div className="border-border/15 from-border/15 via-border/5 to-border/0 my-auto h-9 place-self-end overflow-clip rounded-lg border bg-gradient-to-t">
            <button className="hover:bg-border/5 h-full w-full px-4 text-sm transition duration-500">
              Join waitlist
            </button>
          </div>
        </nav>
      </div>
      <div className="from-border/0 via-border/15 to-border/0 h-[1px] w-full bg-gradient-to-r" />
    </div>
  )
}
