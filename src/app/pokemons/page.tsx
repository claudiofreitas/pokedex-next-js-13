'use client';

import pokemons from '@/data/pokemons.json';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pokemons() {
  const [nameFilter, setNameFilter] = useState<string>('');
  const filteredPokemons = pokemons.slice(0, 30).filter((p) => {
    if (nameFilter !== '') return p.name.english.includes(nameFilter);
    else return p;
  });

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <table>
        <thead className="bg-blue-900 text-white">
          <tr>
            <td>Filter</td>
            <td>Id</td>
            <td className="text-black">
              <input
                type="text"
                size={6}
                value={nameFilter}
                onChange={(event) => {
                  setNameFilter(event.target.value);
                }}
              />
            </td>
            <td>Types</td>

            <td>HP</td>
            <td>Attack</td>
            <td>Defense</td>
            <td>Sp. Attack</td>
            <td>Sp. Defense</td>
            <td>Speed</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>Id</td>
            <td>Name</td>
            <td>Types</td>

            <td>HP</td>
            <td>Attack</td>
            <td>Defense</td>
            <td>Sp. Attack</td>
            <td>Sp. Defense</td>
            <td>Speed</td>
          </tr>
        </thead>
        <tbody className="">
          {filteredPokemons.map((pokemon) => {
            const imageName = `/sprites/${pokemon.id
              .toString()
              .padStart(3, '0')}MS.png`;
            return (
              <tr
                key={pokemon.id}
                className="cursor-pointer hover:bg-blue-100"
                onClick={() => {
                  router.push(`/pokemons/${pokemon.id}`);
                }}
              >
                <td>
                  <Image
                    src={imageName}
                    alt="thumbnail"
                    width={40}
                    height={40}
                  />
                </td>
                <td>{pokemon.id}</td>
                <td>{pokemon.name.english}</td>
                <td>{pokemon.type.join(', ')}</td>

                <td>{pokemon.base.HP}</td>
                <td>{pokemon.base.Attack}</td>
                <td>{pokemon.base.Defense}</td>
                <td>{pokemon.base['Sp. Attack']}</td>
                <td>{pokemon.base['Sp. Defense']}</td>
                <td>{pokemon.base.Speed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
