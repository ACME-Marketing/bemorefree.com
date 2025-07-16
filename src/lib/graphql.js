import { GraphQLClient, gql } from 'graphql-request';

// Use environment variable with fallback
const endpoint = import.meta.env.WORDPRESS_GRAPHQL_ENDPOINT || 'https://cms.acmemarketing.us/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    // Add any authentication headers if needed
  },
});

export { gql };