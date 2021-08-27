import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { Container } from './styles';

interface AuthProps {
  children: ReactNode;
}

export default function Auth({ children }: AuthProps) {

  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if(loading == false && !session) router.replace('/');
  }, [loading, session, router]);

  if(loading || !session) return (
    <Container>
      <h1>Carregando</h1>
    </Container>
  );

  return <>{children}</>
};
