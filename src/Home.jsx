import React, { useState, useEffect, useRef } from "react";
import { FaTwitter, FaCopy, FaRandom, FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const quoteCardRef = useRef(null);

  // Array of beautiful background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
    "https://images.unsplash.com/photo-1535591273668-578e31182c4f",
    "https://images.unsplash.com/photo-1500964757637-c85e8a162699"
  ];

  const getRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return `${backgroundImages[randomIndex]}?auto=format&fit=crop&w=1920&q=80`;
  };

  const fetchQuote = async () => {
    setIsLoading(true);
    const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
    const options = { method: "GET", headers: { accept: "application/json" } };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.success && data.data) {
        setQuote(data.data.content);
        setAuthor(data.data.author || "Unknown");
        setBgImage(getRandomBackground());
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote}" - ${author}`);
    alert("Quote copied to clipboard!");
  };

  const refreshBackground = () => {
    setBgImage(getRandomBackground());
  };

  const saveAsImage = async () => {
    if (!quoteCardRef.current) return;
    
    try {
      // First capture the entire screen
      const canvas = await html2canvas(document.body, {
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.scrollWidth, // Captures full width
        windowHeight: document.documentElement.scrollHeight, // Captures full height
        scale: 2, // Higher quality
      });
      
      // Create download link
      const link = document.createElement("a");
      link.download = `quote-${author.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error saving image:", error);
      alert("There was an error saving the image. Please try again.");
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 bg-cover bg-center transition-all duration-800 ease-in-out"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div 
        ref={quoteCardRef}
        className="w-full max-w-md p-8 rounded-xl text-center backdrop-blur-md bg-white/30 shadow-2xl border border-white/20"
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-6xl text-white opacity-50">"</span>
            </div>
            <p className="text-xl md:text-2xl font-serif text-white mb-6 leading-relaxed">{quote}</p>
            <p className="mt-4 text-lg text-white/90 font-semibold">― {author}</p>
            
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              <button
                onClick={fetchQuote}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-lg"
              >
                <span>New Quote</span>
              </button>
              
              <button
                onClick={refreshBackground}
                className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition shadow-lg"
                title="Change Background"
              >
                <FaRandom />
              </button>
              
              <button
                onClick={copyToClipboard}
                className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition shadow-lg"
                title="Copy to Clipboard"
              >
                <FaCopy />
              </button>
              
              <button
                onClick={saveAsImage}
                className="bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition shadow-lg"
                title="Save as Image"
              >
                <FaDownload />
              </button>
              
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition flex items-center shadow-lg"
                title="Share on Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;