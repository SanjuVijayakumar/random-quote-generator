import { Quote, RefreshCw } from "lucide-react";

function QuoteCard({ quote, loading, onNewQuote }) {
  return (
    <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/50 backdrop-blur-2xl">

      {/* Glass Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/20 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-600/15 blur-[90px]" />

      {/* Card Content */}
      <div className="relative p-8 sm:p-10 md:p-12">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-purple-300 shadow-lg">
          <Quote size={24} fill="currentColor" />
        </div>

        <blockquote className="mb-8">
          <p className="text-2xl font-semibold leading-relaxed tracking-tight text-white sm:text-3xl md:text-4xl">
            "{quote.quote}"
          </p>
        </blockquote>

        <div className="mb-7 h-px w-full bg-white/10" />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Author
            </p>
            <p className="mt-1 text-lg font-semibold text-white/80">
              — {quote.author}
            </p>
          </div>

          <button
            onClick={onNewQuote}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-900/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw
              size={18}
              className={loading ? "animate-spin" : ""}
            />
            {loading ? "Loading..." : "New Quote"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;