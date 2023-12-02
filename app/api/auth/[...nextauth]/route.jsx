import React from 'react'
import NextAuth from 'next-auth/next'
import GoogleProvider from  'next-auth/providers/google'
import { userModel } from '@models/usermodel'
import connectDB from '@utils/database'


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
    callbacks:{
        async session({session}){
            // console.log('i run')
            const userSession=userModel.findOne({email:session.user.email})

            session.user.id=userSession._id
            console.log(session.user.id)
            return session
        }
       ,
        async signIn({profile}){
    
            try{
                 await connectDB()
                 console.log('connected to mongo db')
                const userExist=await userModel.findOne({email:profile.email})
                console.log(userExist)
                if(!userExist){
                    await userModel.create({
                        email:profile.email,
                        username:profile.name.replace(/\s/g, "").toLowerCase(),
                        image:profile.picture
                    })
                }
                return true
            }catch(error){
                console.log(error.message)
                return false
            }
    
        }
    }
    })
    

export {handler as GET,handler as POST}

