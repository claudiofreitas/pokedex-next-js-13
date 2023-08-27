import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <Link href="pokemons" className="text-blue-600 underline">
        Access pokemons
      </Link>
    </main>
  );
}
