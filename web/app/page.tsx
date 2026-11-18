import Link from "next/link";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-10">
        <header className="flex items-center justify-between py-7">
          <Link href="/" className="text-xl font-bold tracking-tight">
            College<span className="text-blue-400">Play</span>
          </Link>
          <span className="hidden text-sm text-slate-400 sm:block">
            The next step in your game
          </span>
        </header>

        <section className="grid flex-1 items-center gap-14 py-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Built for the next generation of athletes
            </p>

            <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Your game.
              <br />
              Your future.
              <span className="text-blue-400"> Connected.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              College Play connects student-athletes with college coaches.
              Create your profile, get discovered, and take the next step in
              your college sports journey.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/player"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/40"
              >
                I’m a player
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/coach"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-slate-500 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-slate-400/30"
              >
                I’m a coach
              </Link>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Choose your role to get started.
            </p>
          </div>

          {/* Decorative sports-inspired panel */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-7 shadow-2xl sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[36px] border-blue-400/10"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">
                    THE OPPORTUNITY
                  </span>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    GET STARTED
                  </span>
                </div>

                <div className="mt-12">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/15 text-4xl">
                    <span aria-hidden="true">🏆</span>
                  </div>

                  <h2 className="mt-7 text-3xl font-bold">
                    Make your next move count.
                  </h2>
                  <p className="mt-3 leading-7 text-slate-300">
                    Put your athletic journey in front of the people who can
                    help shape what comes next.
                  </p>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2" aria-hidden="true">
                      <span className="h-9 w-9 rounded-full border-2 border-slate-800 bg-blue-400" />
                      <span className="h-9 w-9 rounded-full border-2 border-slate-800 bg-indigo-400" />
                      <span className="h-9 w-9 rounded-full border-2 border-slate-800 bg-cyan-300" />
                    </div>
                    <p className="text-sm text-slate-300">
                      Players and coaches, moving forward together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
          College Play · Connecting students with college coaches
        </footer>
      </div>
    </main>
  );
}
