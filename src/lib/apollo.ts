import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4rty26v1m8801yydqfd5zdf/master',
    cache: new InMemoryCache()
})