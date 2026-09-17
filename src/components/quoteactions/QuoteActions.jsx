import React from "react";
import QuoteCard from "../quotecard/QuoteCard";

const QuoteActions = ({ quote, loading, error, onNewQuote }) => {
  return (
    <section className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8">
      <div className="flex w-full max-w-4xl flex-col items-center">       
        {/* Heading */}  
        <div className="mb-10 text-center">            
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">              
            Random Quote  
          </p>  
          <h2 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-5xl">              
            Words that inspire.  
          </h2>  
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">             
            Discover meaningful thoughts, timeless wisdom, and unexpected
            inspiration with every new quote.  
          </p>  
        </div>  
        {/* Loading */}  
        {loading && !quote && (
          <div className="flex w-full max-w-3xl items-center justify-center rounded-3xl border border-slate-200 bg-white p-16 shadow-xl">              
            <div className="text-center">               
              <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />  
              <p className="font-medium text-slate-500">                  
                Finding something inspiring...  
              </p>  
            </div>  
          </div>
        )}  
        {/* Error */}  
        {error && !quote && (
          <div className="w-full max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center">             
            <p className="font-medium text-red-600"> {error} </p>  
            <button
              onClick={onNewQuote}
              className="mt-4 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >                
              Try Again  
            </button>  
          </div>
        )}  
        {/* Quote Card */}  
        {quote && (
          <QuoteCard quote={quote} loading={loading} onNewQuote={onNewQuote} />
        )}   
      </div>  
    </section>
  );
};

export default QuoteActions;
