import { Montserrat } from "next/font/google";
import Link from "next/link";

const monserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default function Home() {
  return (
    <main className={monserrat.className}>
      <span className="text-5xl">Hola Nareko!</span>
      <Link href="/main">Main page</Link>
    </main>
  );
}
