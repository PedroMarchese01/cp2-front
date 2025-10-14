// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      <nav className="w-full bg-gray-400">
        <ul className="flex flex-col md:flex-row justify-center p-5 gap-4">
          <li><a href="">link-1</a></li>
          <li><a href="">link-2</a></li>
          <li><a href="">link-3</a></li>
        </ul>
      </nav>
    </div>
  );
}