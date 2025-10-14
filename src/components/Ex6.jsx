// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      <div className =" h-80 grid grid-rows-3">
        <div className="bg-blue-500 h-20">
            <p>cabeçalho</p>
        </div>
        <div className="bg-purple-500 h-40">
          <p>conteudo principal</p>
        </div> 
        <div className="bg-red-500 h-20">
        <p>rodapé</p>
        </div>


      </div>
    </div>
  );
}
