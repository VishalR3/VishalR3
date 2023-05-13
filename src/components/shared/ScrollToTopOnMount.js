import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0, { behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}
