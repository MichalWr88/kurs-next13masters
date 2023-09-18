/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductsGetList($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n    data {\n      attributes {\n        rating\n        categories {\n          data {\n            id\n            attributes {\n              name\n              slug\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              url\n              width\n              height\n            }\n          }\n        }\n        price\n        slug\n        title\n        description\n        locale\n      }\n    }\n  }\n}\n\nquery ProductsGetCountList {\n  products {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment PaginationData on Pagination {\n  total\n  page\n  pageSize\n  pageCount\n}": types.PaginationDataFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($page: Int!, $pageSize: Int!) {\n  products(pagination: {page: $page, pageSize: $pageSize}) {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n    data {\n      attributes {\n        rating\n        categories {\n          data {\n            id\n            attributes {\n              name\n              slug\n            }\n          }\n        }\n        images {\n          data {\n            attributes {\n              url\n              width\n              height\n            }\n          }\n        }\n        price\n        slug\n        title\n        description\n        locale\n      }\n    }\n  }\n}\n\nquery ProductsGetCountList {\n  products {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PaginationData on Pagination {\n  total\n  page\n  pageSize\n  pageCount\n}"): typeof import('./graphql').PaginationDataFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
