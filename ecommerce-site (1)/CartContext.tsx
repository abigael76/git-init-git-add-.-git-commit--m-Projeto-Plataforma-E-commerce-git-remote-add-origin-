import { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CartContext.Provider value={{ carrinho, adicionarAoCarrinho, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};
