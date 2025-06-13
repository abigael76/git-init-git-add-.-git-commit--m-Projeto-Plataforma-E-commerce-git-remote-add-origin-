import Header from '@/components/Header';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

const produtos = [
  { id: 1, nome: 'Camiseta', preco: 50 },
  { id: 2, nome: 'Calça Jeans', preco: 120 },
  { id: 3, nome: 'Tênis Esportivo', preco: 300 },
];

export default function Produtos() {
  const { adicionarAoCarrinho } = useContext(CartContext);

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <ul className="mt-4">
          {produtos.map(prod => (
            <li key={prod.id} className="mb-4">
              <strong>{prod.nome}</strong><br />
              kz {prod.preco}<br />
              <button className="btn mt-1" onClick={() => adicionarAoCarrinho(prod)}>Adicionar ao Carrinho</button>
            </li>
          ))}
        </ul>
        <a href="/carrinho" className="btn mt-4 inline-block">Ir para o Carrinho</a>
      </main>
    </div>
  );
}
