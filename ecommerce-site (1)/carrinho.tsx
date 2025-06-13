import Header from '@/components/Header';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export default function Carrinho() {
  const { carrinho, limparCarrinho } = useContext(CartContext);
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Carrinho de Compras</h1>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="mt-4">
              {carrinho.map((item, index) => (
                <li key={index}>{item.nome} - R$ {item.preco}</li>
              ))}
            </ul>
            <p className="mt-2 font-bold">Total: R$ {total}</p>
            <button className="btn mt-2" onClick={limparCarrinho}>Finalizar Compra</button>
          </>
        )}
      </main>
    </div>
  );
}
