import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

  
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);

    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
