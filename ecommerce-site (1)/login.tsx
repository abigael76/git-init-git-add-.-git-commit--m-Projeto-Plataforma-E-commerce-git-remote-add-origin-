import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import api from '@/services/api';
import { AuthContext } from '@/context/AuthContext';
import Header from '@/components/Header';

export default function Login() {
  const router = useRouter();
  const tipo = router.query.tipo || 'usuario';
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await api.post(`/login`, { email, senha });
      login(response.data.token);
      router.push('/produtos');
    } catch (err) {
      alert('Erro no login. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-xl font-bold">Login - {tipo}</h1>
        <input placeholder="Email" className="input" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input placeholder="Senha" type="password" className="input" value={senha} onChange={e => setSenha(e.target.value)} /><br />
        <button className="btn mt-2" onClick={handleLogin}>Entrar</button>
      </main>
    </div>
  );
}
