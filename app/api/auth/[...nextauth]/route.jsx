import React from 'react'
import NextAuth from 'next-auth/next'
import GoogleProvider from  'next-auth/providers/google'
import { userModel } from '@models/usermodel'

// console.log({
//     clientId:process.env.GOOGLE_CLIENTID,
//     clientSecret:process.env.GOOGLE_CLIENT_SECRET

// })

const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENTID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({session}){
             const userSession=await userModel.findOne({email:session.user.email})
             if(userSession){
                session.user.id=userSession._id.toString();
                return session;
             }
    },
    async signIn({profile}){

        const userExist=await userModel.findOne({email:profile.email})
        if(!userExist){
            await userModel.create({
                email:profile.email,
                username:profile.name.trim().toLowerCase(),
                image:profile.picture
            })
        }
        

    }
})

export {handler as GET,handler as POST}

