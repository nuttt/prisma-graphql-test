import { GraphQLServer } from 'graphql-yoga'
import { readFileSync } from 'fs'
import path from 'path'

const PORT = process.env.PORT || 3000

const typeDefs = readFileSync(path.join(__dirname, 'typeDefs.graphql')).toString()

const resolvers = {
  Query: {
    posts: () => {
      return [{
        id: 1,
        content: 'content1',
        username: 'user1'
      }]
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start({
  port: PORT
}, () => {
  console.log(`Server is running on port ${PORT}`)
})
