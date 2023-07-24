import src from "../../../public/images/charizard.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 mb-6 text-2xl font-bold">Sobre o PokeNext</h1>
      <p className="max-w-2xl w-full my-6">
        Esta é uma aplicação desenvolvida em Next.js que permite buscar e exibir
        vários cards de pokemons através de requisições a uma API. O objetivo
        principal deste projeto é praticar o uso do Next.js, Next Routes e
        requisições HTTP, enquanto crio uma aplicação interativa e informativa
        sobre os pokemons.
      </p>
      <Image
        src={src}
        width={300}
        height={300}
        alt="Charizard"
        className="my-6"
      />
    </div>
  );
}
