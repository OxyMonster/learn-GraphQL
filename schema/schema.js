const graphql = require('graphql'); 
const _ = require('lodash'); 

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql; 

// *** Dummy data *** 
const books = [
    {name: 'Name of thhe Wind', genre: 'Fantsy', id:'1'},
    {name: 'Me GrandMother Iliko and Ilarion', genre: 'Comedy', id:'2'},
    {name: 'The Final Empire', genre: 'Fantasy', id:'3'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id:'4'} 
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString }, 
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
}); 

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        book:{
            type: BookType,
            args: { id: {type: GraphQLString} },
            resolve(parent, args){
            // code to get data from db // other source  = ) 
                // return books.map(book => book.id = args.id);  
                return _.find(books,{id: args.id}); 
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
}); 
