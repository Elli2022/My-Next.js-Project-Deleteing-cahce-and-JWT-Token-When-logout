//src/pages/_app.tsx
import { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import RootLayout from "@/app/layout"; // Uppdatera importen

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout>
        {" "}
        {/* Använd RootLayout för att omsluta ditt innehåll */}
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
