import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-background text-foreground">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold text-easyfairs-green">
          Easyfairs Configurator
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl text-center sm:text-left">
          Welcome to the future of stand configuration. This platform is currently under development as part of Phase 01: Discovery & MLP.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/dashboard" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-easyfairs-green text-easyfairs-dark gap-2 hover:bg-foreground hover:text-background text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 font-bold cursor-pointer">
            Start Configuration
          </Link>
          <button className="rounded-full border border-solid border-foreground/20 transition-colors flex items-center justify-center bg-foreground/10 text-foreground gap-2 hover:bg-foreground/20 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            View Documentation
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-foreground/60 text-sm">
        <p>© 2025 Easyfairs. All rights reserved.</p>
      </footer>
    </div>
  );
}
