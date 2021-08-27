import { FormEvent, useState, useEffect } from 'react';
import { Container } from './styles';
import { ImGoogle, ImFacebook2 } from 'react-icons/im';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function LoginPage() {

  const [nameState, setName] = useState('');
  const [emailState, setEmail] = useState('');
  const [passwordState, setPassword] = useState('');

  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session) router.push('/main');
  }, [session, router]);

  async function handleSubmit(event: FormEvent) {

    event.preventDefault();
  }

  async function handleGoogleLogin() {
    await signIn('google', { callbackUrl: 'http://localhost:3000/main' });
  }

  async function handleFacebbokLogin() {
    await signIn('facebook', { callbackUrl: 'http://localhost:3000/main' });
  }

  return (
    <Container>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id='name'
            placeholder='Digite seu nome'
            value={nameState}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">e-mail:</label>
          <input
            type="text"
            id='email'
            placeholder='Digite seu e-mail'
            value={emailState}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id='password'
            placeholder='Digite sua senha'
            title='No mínimo 6 dígitos'
            value={passwordState}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type='submit'>
          Entrar
        </button>

        <hr />

        <button
          type='button'
          className='google-login'
          onClick={handleGoogleLogin}
        >
          <ImGoogle size='1rem' color='#eee' /> <span>Entrar com Google</span>
        </button>

        <button
          type='button'
          className='facebook-login'
          onClick={handleFacebbokLogin}
        >
          <ImFacebook2 size='1rem' /> <span>Entrar com Facebook</span>
        </button>

      </form>

    </Container>
  );
};
