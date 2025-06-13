export default function handler(req, res) {
  const { email, senha } = req.body;
  if ((email === 'usuario@email.com' || email === 'vendedor@email.com') && senha === '123') {
    const token = 'token-falso-' + (email.includes('vendedor') ? 'vendedor' : 'usuario');
    res.status(200).json({ token });
  } else {
    res.status(401).json({ erro: 'Credenciais inválidas' });
  }
}
