// Ex3 — Grid simples

// Crie um `grid` com 2 colunas e 2 linhas, cada célula com fundo cinza claro e altura fixa de `80px`.

export default function Ex3() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex3 - Grid Simples</h1>
      <div className="grid grid-cols-2 w-40 h-40">
        <div className="w-20 h-20 bg-gray-200"> <p>1</p> </div>
        <div className="w-20 h-20 bg-gray-200"> <p>2</p> </div>
        <div className="w-20 h-20 bg-gray-200"> <p>3</p> </div>
        <div className="w-20 h-20 bg-gray-200"> <p>4</p></div>
      </div>
    </div>
  );
}