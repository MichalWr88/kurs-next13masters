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
    "query ProductsGetCountListByCategories {\n  products {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n  }\n}\n\nquery CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        slug\n        description\n        images {\n          data {\n            attributes {\n              url\n              height\n              width\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery CategoriesGeBySlugWithProducts($slug: String!) {\n  categories(filters: {slug: {eq: $slug}}) {\n    data {\n      attributes {\n        slug\n        products {\n          data {\n            attributes {\n              ...ProductData\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductsGetCountListByCategoriesDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      attributes {\n        slug\n        name\n        image {\n          data {\n            attributes {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetBySlug($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    data {\n      attributes {\n        ...ProductDataWithCategories\n      }\n    }\n  }\n}\n\nfragment CategoryData on CategoryEntity {\n  id\n  attributes {\n    name\n    slug\n  }\n}\n\nfragment ProductData on Product {\n  rating\n  images {\n    data {\n      attributes {\n        url\n        width\n        height\n      }\n    }\n  }\n  price\n  slug\n  title\n  description\n  locale\n}\n\nfragment ProductDataWithCategories on Product {\n  ...ProductData\n  categories {\n    data {\n      ...CategoryData\n    }\n  }\n}": types.ProductGetBySlugDocument,
    "query ProductsGetList($page: Int!, $pageSize: Int!, $filters: ProductFiltersInput, $sort: [String]) {\n  products(\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: $filters\n    sort: $sort\n  ) {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n    data {\n      attributes {\n        ...ProductDataWithCategories\n      }\n    }\n  }\n}\n\nquery ProductsGetCountList {\n  products {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n  }\n}\n\nquery ProductsGetCountListBySlug($slug: String!) {\n  products(filters: {categories: {slug: {eq: $slug}}}) {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment PaginationData on Pagination {\n  total\n  page\n  pageSize\n  pageCount\n}": types.PaginationDataFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCountListByCategories {\n  products {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n  }\n}\n\nquery CategoriesGetList {\n  categories {\n    data {\n      id\n      attributes {\n        name\n        slug\n        description\n        images {\n          data {\n            attributes {\n              url\n              height\n              width\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery CategoriesGeBySlugWithProducts($slug: String!) {\n  categories(filters: {slug: {eq: $slug}}) {\n    data {\n      attributes {\n        slug\n        products {\n          data {\n            attributes {\n              ...ProductData\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountListByCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      attributes {\n        slug\n        name\n        image {\n          data {\n            attributes {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySlug($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    data {\n      attributes {\n        ...ProductDataWithCategories\n      }\n    }\n  }\n}\n\nfragment CategoryData on CategoryEntity {\n  id\n  attributes {\n    name\n    slug\n  }\n}\n\nfragment ProductData on Product {\n  rating\n  images {\n    data {\n      attributes {\n        url\n        width\n        height\n      }\n    }\n  }\n  price\n  slug\n  title\n  description\n  locale\n}\n\nfragment ProductDataWithCategories on Product {\n  ...ProductData\n  categories {\n    data {\n      ...CategoryData\n    }\n  }\n}"): typeof import('./graphql').ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($page: Int!, $pageSize: Int!, $filters: ProductFiltersInput, $sort: [String]) {\n  products(\n    pagination: {page: $page, pageSize: $pageSize}\n    filters: $filters\n    sort: $sort\n  ) {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n    data {\n      attributes {\n        ...ProductDataWithCategories\n      }\n    }\n  }\n}\n\nquery ProductsGetCountList {\n  products {\n    meta {\n      pagination {\n        ...PaginationData\n      }\n    }\n  }\n}\n\nquery ProductsGetCountListBySlug($slug: String!) {\n  products(filters: {categories: {slug: {eq: $slug}}}) {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PaginationData on Pagination {\n  total\n  page\n  pageSize\n  pageCount\n}"): typeof import('./graphql').PaginationDataFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
