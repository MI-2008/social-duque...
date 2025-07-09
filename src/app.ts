import Fastify from "fastify"
import { AppDataSource } from "./data-source"
import { usersRoutes } from './routes/users.routes'

export async function starApp(){
    const app = Fastify()

    // Inicializar banco de dados
    await AppDataSource.initialize().then(
        ()=>{
            console.log('Banco de 🎲 inicializado')
        }
    ).catch((ex)=>{
        console.log(' ❌ Erro de conexão do banco de dados',ex)
        process.exit(1)

    })
    app.listen({port:3333}).then(()=>{
        console.log('🚀 Server is running at http://localhost:3333')
    })

    
    //Registre as rotas e plugins aqui
    app.register(usersRoutes)
    return app

    
}