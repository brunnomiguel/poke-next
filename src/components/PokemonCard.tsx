import { pokemonProps } from "@/app/page";

import Image from "next/image";

export default function PokemonCard({ id, name, url }: pokemonProps) {
  const pathImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  return (
    <a href={`/pokemon/${id}`}>
      <li className="flex flex-col items-center justify-center p-2 text-2xl border-2 gap-2 border-zinc-500 shadow-3xl rounded-lg cursor-pointer box-shadow-custom hover:bg-zinc-500 hover:transition-all hover:duration-500">
        <Image
          alt={name}
          width={120}
          height={120}
          src={`${pathImage}${id}.png`}
        />
        <p className="p-1 rounded-lg bg-red-400 text-xl">#{id}</p>
        <h3 className="capitalize">{name}</h3>
      </li>
    </a>
  );
}
