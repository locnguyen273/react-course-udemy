import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/meals">Meals Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Meals Share Page</Link>
      </p>
      <p>
        <Link href="/community">Community Page</Link>
      </p>
    </main>
  );
}
