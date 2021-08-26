import { signOut, useSession } from 'next-auth/client';
import Image from 'next/image';

import { Container } from './styles';

export default function MainPage() {

  const [session] = useSession();

  async function handleSignOut() {

    signOut({ callbackUrl: '/' });
  }

  return (
    <Container>

      <h1>Logado com sucesso!</h1>

      {session?.user?.image && 
        <figure>
          <Image 
            src={session?.user?.image} 
            alt="foto perfil usuário" 
            width={96}
            height={96}
          />
        </figure>
      }

      <div>
        <p>Nome: {session?.user?.name}</p>
        <p>e-mail: {session?.user?.email}</p>
      </div>

      <button
        type='button'
        onClick={handleSignOut}
      >
        Sair
      </button>

    </Container>
  );
};

