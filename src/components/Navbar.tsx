import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex p-4 justify-between bg-zinc-900">
      <div className="flex gap-2 items-center">
        <Image
          width="35"
          height="35"
          src="/images/pokeball.png"
          alt="Imagem de Pokeball do anime Pokemon"
        />
        <h1 className="text-lg font-semibold">PokeNext</h1>
      </div>
      <ul className="flex gap-3 items-center">
        <li className="text-lg font-medium hover:text-zinc-300">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg font-medium hover:text-zinc-300">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
