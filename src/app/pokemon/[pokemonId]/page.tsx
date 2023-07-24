import Image from "next/image";

export const getPokemon = async (pokemonId: number) => {
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/${pokemonId}`);

  const data = await res.json();

  return data;
};

interface typePokemon {
  type: { name: string };
}

export default async function Pokemon({
  params,
}: {
  params: { pokemonId: number };
}) {
  const pokemonData = await getPokemon(params.pokemonId);

  const pathImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <Image
        width={200}
        height={200}
        alt={pokemonData.name}
        src={`${pathImage}${pokemonData.id}.png`}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemonData.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div>
          {pokemonData.types.map((item: typePokemon, index: number) => (
            <span key={index}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h4>Peso:</h4>
          <p>{pokemonData.weight / 10} kg</p>
        </div>
        <div>
          <h4>Altura:</h4>
          <p>{pokemonData.height * 10} cm</p>
        </div>
      </div>
    </div>
  );
}
