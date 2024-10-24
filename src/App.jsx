import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/sidebar";
import MobileHeader from "./components/mobile-header";
import MobileNavbar from "./components/mobile-navbar";
import Post from "./components/post";
import Suggestions from "./components/suggestions";
import Stories from "./components/stories";
import { posts } from "./assets/data.js";

export default function App() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-16 md:pb-0">
      <Sidebar />
      <MobileHeader showHeader={showHeader} />
      <div className="md:ml-64">
        <div className="max-w-4xl mx-auto pt-14 md:pt-4 md:px-4">
          <div className="flex">
            <div className="w-full lg:w-2/3">
              <Stories />
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
            <div className="hidden lg:block lg:w-1/3 lg:pl-8">
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
}