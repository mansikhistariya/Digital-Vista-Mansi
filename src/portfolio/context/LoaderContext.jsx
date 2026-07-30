import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

const LoaderContext = createContext({
  isLoaded: false,
  setLoaded: () => {},
});

export function LoaderProvider({ children }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isLoaded, setIsLoaded] = useState(() => prefersReducedMotion);

  const setLoaded = useCallback(() => setIsLoaded(true), []);

  const value = useMemo(() => ({ isLoaded, setLoaded }), [isLoaded, setLoaded]);

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLoader() {
  return useContext(LoaderContext);
}
