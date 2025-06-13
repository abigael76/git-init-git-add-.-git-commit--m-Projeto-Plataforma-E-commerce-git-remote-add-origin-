export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h2 className="text-xl">Plataforma E-commerce</h2>
      <nav className="space-x-4">
        <a href="/" className="text-white">Home</a>
        <a href="/produtos" className="text-white">Produtos</a>
        <a href="/carrinho" className="text-white">Carrinho</a>
        <a href="/painel-vendedor" className="text-white">Painel do Vendedor</a>
      </nav>
    </header>
  );
}
