import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span className="text-5xl">Hola Nareko!</span>
        <Link href="/main">Main page</Link>
      </main>
    </Provider>
  );
}
