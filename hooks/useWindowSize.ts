import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona o event listener para mudanças no tamanho da tela
    window.addEventListener("resize", handleResize);

    // Chama a função uma vez para definir o tamanho inicial
    handleResize();

    // Remove o event listener ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
