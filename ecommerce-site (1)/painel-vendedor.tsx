import Header from '@/components/Header';

const vendas = [
  { id: 1, produto: 'Camiseta', cliente: 'João', data: '2025-06-12' },
  { id: 2, produto: 'Tênis Esportivo', cliente: 'Maria', data: '2025-06-10' },
];

export default function PainelVendedor() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Painel do Vendedor</h1>
        <ul className="mt-4">
          {vendas.map(v => (
            <li key={v.id} className="mb-2">
              Produto: {v.produto} | Cliente: {v.cliente} | Data: {v.data}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
