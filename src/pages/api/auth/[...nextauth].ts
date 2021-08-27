import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({

  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],

  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google' && account.id) {

        console.log('google_id', account.id);

        return true;
      } else if (account.provider === 'facebook' && account.id) {

        console.log('facebook_id', account.id);

        return true;
      } else {
        return false;
      }
    },
  }
  // Optional SQL or MongoDB database to persist users
  //database: process.env.DATABASE_URL
});