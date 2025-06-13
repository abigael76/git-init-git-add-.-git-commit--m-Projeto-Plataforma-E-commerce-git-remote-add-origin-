import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Bem-vindo à Plataforma E-commerce Integrada</h1>
        <p>Escolha seu perfil para navegar:</p>
        <div className="flex gap-4 mt-4">
          <a href="/login?tipo=usuario" className="btn">Sou Cliente</a>
          <a href="/login?tipo=vendedor" className="btn">Sou Vendedor</a>
        </div>
      </main>
    </div>
  );
}
