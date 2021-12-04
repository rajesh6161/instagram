import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  //   theme: {
  //     logo: 'https://links.papa.com/sq0',
  //     brandColor: '#f13287',
  //     colorScheme: 'auto',
  //   },
  pages: {
    signIn: '/auth/signin',
  },
  secret: 'aa27660aa7e186902981b9f9f8b8b8b8',
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});
