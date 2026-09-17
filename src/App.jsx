import { useEffect, useState } from "react";
import "./App.css";
import { getRandomQuote } from "./api/QuoteApi";
import QuoteCard from "./components/quotecard/QuoteCard";
import Header from "./components/header/Header";
import QuoteActions from "./components/quoteactions/QuoteActions";
import Footer from "./components/footer/Footer";

function App() {
  const [quote, setQuote] = useState(null);
  // console.log(quote);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getRandomQuote();

      setQuote(data);
    } catch (error) {
      setError("Failed to load quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <div className="absolute inset-0 -z-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[130px]" />{" "}
          <div className="absolute bottom-[-180px] left-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[130px]" />{" "}
          <div className="absolute right-[-100px] top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[130px]" />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Header */}
          <Header />
          {/* Main Content */}
          <QuoteActions
            quote={quote}
            loading={loading}
            error={error}
            onNewQuote={fetchQuote}
          />
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
