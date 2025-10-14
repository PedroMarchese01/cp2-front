// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      <div className="w-full lg:w-96 flex flex-col items-center">
        <h2>title</h2>
        <p>text</p>
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-950 text-center flex"> my button</button>
      </div>
    </div>
  );
}