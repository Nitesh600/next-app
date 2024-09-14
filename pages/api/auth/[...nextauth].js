import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23lis6VodYBGhy0Hf0 ',
            clientSecret: 'db611028f925aa947518617f383d6076d2a60593'
        }),
    ],
};

export default NextAuth(authOptions);

