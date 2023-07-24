import PokemonCard from "@/components/PokemonCard";
import Image from "next/image";

export interface pokemonProps {
  id: number;
  name: string;
  url: string;
}

export default async function Home() {
  const data = await getPokemons();

  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-8">
        <Image
          width={50}
          height={50}
          src="/images/pokeball.png"
          alt="Imagem de Pokeball do anime Pokemon"
        />
        <h1 className="text-5xl text-zinc-50">
          Poke<span className="text-red-600">Next</span>
        </h1>
      </div>
      <ul className="w-full p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((item: pokemonProps) => (
          <PokemonCard
            id={item.id}
            key={item.id}
            url={item.url}
            name={item.name}
          />
        ))}
      </ul>
    </>
  );
}

export const getPokemons = async () => {
  const maxPokemons = 25;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  data.results.forEach((item: pokemonProps, index: number) => {
    item.id = index + 1;
  });

  return data.results;
};
