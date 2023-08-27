'use client';
import pokemons from '@/data/pokemons.json';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type PageParams = { id: string };
export default function PokemonDetail({ params }: { params: PageParams }) {
  const router = useRouter();
  const { id } = params;

  const pokemon = pokemons.find((p) => p.id.toString() === id)!;
  const imageName = `/sprites/${pokemon.id.toString().padStart(3, '0')}MS.png`;

  return (
    <main>
      <button
        onClick={() => {
          router.push('/pokemons');
        }}
      >
        ← Back
      </button>

      <div>
        <Image src={imageName} alt="thumbnail" width={4 * 40} height={4 * 40} />
      </div>
      <div>Id: {pokemon.id}</div>
      <div>Name (English): {pokemon.name.english}</div>
      <div>Name (Japanese): {pokemon.name.japanese}</div>
      <div>Types: {pokemon.type.join(', ')}</div>
      <div>HP: {pokemon.base.HP}</div>
      <div>Attack: {pokemon.base.Attack}</div>
      <div>Defense: {pokemon.base.Defense}</div>
      <div>Sp. Attack: {pokemon.base['Sp. Attack']}</div>
      <div>Sp. Defense: {pokemon.base['Sp. Defense']}</div>
      <div>Speed: {pokemon.base.Speed}</div>
    </main>
  );
}
