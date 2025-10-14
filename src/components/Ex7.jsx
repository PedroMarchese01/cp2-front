// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <header className="w-full justify-between flex">
        <h1>Meu Dashboard</h1>
        <button>Sair</button>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2">
        <div className="border px-2 py-1 justify-center flex shadow-lg rounded-sm">Card 1</div>
        <div className="border px-2 py-1 justify-center flex shadow-lg rounded-sm">Card 2</div>
        <div className="border px-2 py-1 justify-center flex shadow-lg rounded-sm">Card 3</div>
        <div className="border px-2 py-1 justify-center flex shadow-lg rounded-sm">Card 4</div>
      </main>
    </div>
  );
}
