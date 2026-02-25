import fastify from 'fastify';

const servidor = fastify();

const usuarios = []

servidor.get('/usuarios', () => {
    return usuarios
}) 

servidor.post('/usuarios', (request, reply) => {
    const body = request.body
    usuarios.push(body)
    return 'Usuario cadastrado'
}) 

servidor.listen({
    port: 1584
})
