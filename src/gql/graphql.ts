/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  images: Maybe<UploadFileEntityResponse>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Maybe<CategoryRelationResponseCollection>;
  name: Maybe<Scalars['String']['output']>;
  products: Maybe<ProductRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  attributes: Maybe<Category>;
  id: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  data: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  data: Array<CategoryEntity>;
};

export type Collection = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  image: Maybe<UploadFileEntityResponse>;
  name: Scalars['String']['output'];
  products: Maybe<ProductRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type CollectionProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CollectionEntity = {
  attributes: Maybe<Collection>;
  id: Maybe<Scalars['ID']['output']>;
};

export type CollectionEntityResponse = {
  data: Maybe<CollectionEntity>;
};

export type CollectionEntityResponseCollection = {
  data: Array<CollectionEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionRelationResponseCollection = {
  data: Array<CollectionEntity>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Filling = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type FillingEntity = {
  attributes: Maybe<Filling>;
  id: Maybe<Scalars['ID']['output']>;
};

export type FillingEntityResponse = {
  data: Maybe<FillingEntity>;
};

export type FillingEntityResponseCollection = {
  data: Array<FillingEntity>;
  meta: ResponseCollectionMeta;
};

export type FillingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FillingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FillingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FillingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FillingInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Category | Collection | Filling | I18NLocale | Order | OrderItem | Product | ProductVariant | Review | Size | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createCategory: Maybe<CategoryEntityResponse>;
  createCategoryLocalization: Maybe<CategoryEntityResponse>;
  createCollection: Maybe<CollectionEntityResponse>;
  createFilling: Maybe<FillingEntityResponse>;
  createOrder: Maybe<OrderEntityResponse>;
  createOrderItem: Maybe<OrderItemEntityResponse>;
  createProduct: Maybe<ProductEntityResponse>;
  createProductLocalization: Maybe<ProductEntityResponse>;
  createProductVariant: Maybe<ProductVariantEntityResponse>;
  createReview: Maybe<ReviewEntityResponse>;
  createSize: Maybe<SizeEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory: Maybe<CategoryEntityResponse>;
  deleteCollection: Maybe<CollectionEntityResponse>;
  deleteFilling: Maybe<FillingEntityResponse>;
  deleteOrder: Maybe<OrderEntityResponse>;
  deleteOrderItem: Maybe<OrderItemEntityResponse>;
  deleteProduct: Maybe<ProductEntityResponse>;
  deleteProductVariant: Maybe<ProductVariantEntityResponse>;
  deleteReview: Maybe<ReviewEntityResponse>;
  deleteSize: Maybe<SizeEntityResponse>;
  deleteUploadFile: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateCategory: Maybe<CategoryEntityResponse>;
  updateCollection: Maybe<CollectionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFilling: Maybe<FillingEntityResponse>;
  updateOrder: Maybe<OrderEntityResponse>;
  updateOrderItem: Maybe<OrderItemEntityResponse>;
  updateProduct: Maybe<ProductEntityResponse>;
  updateProductVariant: Maybe<ProductVariantEntityResponse>;
  updateReview: Maybe<ReviewEntityResponse>;
  updateSize: Maybe<SizeEntityResponse>;
  updateUploadFile: Maybe<UploadFileEntityResponse>;
  updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCollectionArgs = {
  data: CollectionInput;
};


export type MutationCreateFillingArgs = {
  data: FillingInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProductLocalizationArgs = {
  data?: InputMaybe<ProductInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProductVariantArgs = {
  data: ProductVariantInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewInput;
};


export type MutationCreateSizeArgs = {
  data: SizeInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFillingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSizeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFillingArgs = {
  data: FillingInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProductVariantArgs = {
  data: ProductVariantInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSizeArgs = {
  data: SizeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Order = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  order_items: Maybe<OrderItemRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  total: Maybe<Scalars['Float']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type OrderOrder_ItemsArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntity = {
  attributes: Maybe<Order>;
  id: Maybe<Scalars['ID']['output']>;
};

export type OrderEntityResponse = {
  data: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  order_items?: InputMaybe<OrderItemFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  total?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OrderInput = {
  order_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItem = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  order: Maybe<OrderEntityResponse>;
  product: Maybe<ProductEntityResponse>;
  product_variant: Maybe<ProductVariantEntityResponse>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  quantity: Maybe<Scalars['Int']['output']>;
  total: Maybe<Scalars['Float']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type OrderItemEntity = {
  attributes: Maybe<OrderItem>;
  id: Maybe<Scalars['ID']['output']>;
};

export type OrderItemEntityResponse = {
  data: Maybe<OrderItemEntity>;
};

export type OrderItemEntityResponseCollection = {
  data: Array<OrderItemEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OrderItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderItemFiltersInput>>>;
  order?: InputMaybe<OrderFiltersInput>;
  product?: InputMaybe<ProductFiltersInput>;
  product_variant?: InputMaybe<ProductVariantFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  total?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OrderItemInput = {
  order?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  product_variant?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItemRelationResponseCollection = {
  data: Array<OrderItemEntity>;
};

export type Pagination = {
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  categories: Maybe<CategoryRelationResponseCollection>;
  collections: Maybe<CollectionRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  filling: Maybe<FillingEntityResponse>;
  images: Maybe<UploadFileRelationResponseCollection>;
  locale: Maybe<Scalars['String']['output']>;
  localizations: Maybe<ProductRelationResponseCollection>;
  order_items: Maybe<OrderItemRelationResponseCollection>;
  price: Scalars['Float']['output'];
  product_variants: Maybe<ProductVariantRelationResponseCollection>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Float']['output'];
  reviews: Maybe<ReviewRelationResponseCollection>;
  size: Maybe<SizeEntityResponse>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ProductCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductLocalizationsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductOrder_ItemsArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductProduct_VariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  attributes: Maybe<Product>;
  id: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  data: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  collections?: InputMaybe<CollectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  filling?: InputMaybe<FillingFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProductFiltersInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  order_items?: InputMaybe<OrderItemFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  product_variants?: InputMaybe<ProductVariantFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  reviews?: InputMaybe<ReviewFiltersInput>;
  size?: InputMaybe<SizeFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  filling?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  order_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  product_variants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  size?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductRelationResponseCollection = {
  data: Array<ProductEntity>;
};

export type ProductVariant = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  filling: Maybe<FillingEntityResponse>;
  images: Maybe<UploadFileRelationResponseCollection>;
  order_items: Maybe<OrderItemRelationResponseCollection>;
  product: Maybe<ProductEntityResponse>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  size: Maybe<SizeEntityResponse>;
  slug: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ProductVariantImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantOrder_ItemsArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductVariantEntity = {
  attributes: Maybe<ProductVariant>;
  id: Maybe<Scalars['ID']['output']>;
};

export type ProductVariantEntityResponse = {
  data: Maybe<ProductVariantEntity>;
};

export type ProductVariantEntityResponseCollection = {
  data: Array<ProductVariantEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductVariantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  filling?: InputMaybe<FillingFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductVariantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductVariantFiltersInput>>>;
  order_items?: InputMaybe<OrderItemFiltersInput>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<SizeFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductVariantInput = {
  filling?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  order_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantRelationResponseCollection = {
  data: Array<ProductVariantEntity>;
};

export type PublicationState =
  | 'LIVE'
  | 'PREVIEW';

export type Query = {
  categories: Maybe<CategoryEntityResponseCollection>;
  category: Maybe<CategoryEntityResponse>;
  collection: Maybe<CollectionEntityResponse>;
  collections: Maybe<CollectionEntityResponseCollection>;
  filling: Maybe<FillingEntityResponse>;
  fillings: Maybe<FillingEntityResponseCollection>;
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  order: Maybe<OrderEntityResponse>;
  orderItem: Maybe<OrderItemEntityResponse>;
  orderItems: Maybe<OrderItemEntityResponseCollection>;
  orders: Maybe<OrderEntityResponseCollection>;
  product: Maybe<ProductEntityResponse>;
  productVariant: Maybe<ProductVariantEntityResponse>;
  productVariants: Maybe<ProductVariantEntityResponseCollection>;
  products: Maybe<ProductEntityResponseCollection>;
  review: Maybe<ReviewEntityResponse>;
  reviews: Maybe<ReviewEntityResponseCollection>;
  size: Maybe<SizeEntityResponse>;
  sizes: Maybe<SizeEntityResponseCollection>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder: Maybe<UploadFolderEntityResponse>;
  uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFillingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFillingsArgs = {
  filters?: InputMaybe<FillingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderItemsArgs = {
  filters?: InputMaybe<OrderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryProductVariantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductVariantsArgs = {
  filters?: InputMaybe<ProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySizeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySizesArgs = {
  filters?: InputMaybe<SizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export type Review = {
  content: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Maybe<Scalars['String']['output']>;
  headline: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: Maybe<ProductEntityResponse>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewEntity = {
  attributes: Maybe<Review>;
  id: Maybe<Scalars['ID']['output']>;
};

export type ReviewEntityResponse = {
  data: Maybe<ReviewEntity>;
};

export type ReviewEntityResponseCollection = {
  data: Array<ReviewEntity>;
  meta: ResponseCollectionMeta;
};

export type ReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  headline?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type ReviewRelationResponseCollection = {
  data: Array<ReviewEntity>;
};

export type Size = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  factor: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type SizeEntity = {
  attributes: Maybe<Size>;
  id: Maybe<Scalars['ID']['output']>;
};

export type SizeEntityResponse = {
  data: Maybe<SizeEntity>;
};

export type SizeEntityResponseCollection = {
  data: Array<SizeEntity>;
  meta: ResponseCollectionMeta;
};

export type SizeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SizeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  factor?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SizeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SizeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SizeInput = {
  factor?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  ext: Maybe<Scalars['String']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  children: Maybe<UploadFolderRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  files: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  attributes: Maybe<UploadFolder>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  jwt: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

export type CartCreateMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CartCreateMutation = { createOrder: { data: { id: string | null, attributes: { slug: string, total: number | null, order_items: { data: Array<{ id: string | null, attributes: { product: { data: { id: string | null } | null } | null } | null }> } | null } | null } | null } | null };

export type CartDataFragment = { id: string | null, attributes: { slug: string, total: number | null, order_items: { data: Array<{ id: string | null, attributes: { product: { data: { id: string | null } | null } | null } | null }> } | null } | null };

export type CartGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CartGetBySlugQuery = { orders: { data: Array<{ id: string | null, attributes: { total: number | null, slug: string, order_items: { data: Array<{ id: string | null, attributes: { quantity: number | null, total: number | null, product_variant: { data: { id: string | null, attributes: { slug: string | null, images: { data: Array<{ attributes: { width: number | null, height: number | null, name: string, url: string } | null }> } | null } | null } | null } | null, product: { data: { id: string | null, attributes: { rating: number, price: number, slug: string, title: string, description: string, locale: string | null, images: { data: Array<{ attributes: { url: string, width: number | null, height: number | null } | null }> } | null } | null } | null } | null } | null }> } | null } | null }> } | null };

export type OrderDataFragment = { id: string | null, attributes: { total: number | null, slug: string, order_items: { data: Array<{ id: string | null, attributes: { quantity: number | null, total: number | null, product_variant: { data: { id: string | null, attributes: { slug: string | null, images: { data: Array<{ attributes: { width: number | null, height: number | null, name: string, url: string } | null }> } | null } | null } | null } | null, product: { data: { id: string | null, attributes: { rating: number, price: number, slug: string, title: string, description: string, locale: string | null, images: { data: Array<{ attributes: { url: string, width: number | null, height: number | null } | null }> } | null } | null } | null } | null } | null }> } | null } | null };

export type CartItemCheckIsInCartQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
  cartId: Scalars['ID']['input'];
}>;


export type CartItemCheckIsInCartQuery = { orderItems: { data: Array<{ id: string | null, attributes: { quantity: number | null, product: { data: { attributes: { price: number } | null } | null } | null } | null }> } | null };

export type CartItemCreateMutationVariables = Exact<{
  total: Scalars['Float']['input'];
  productId?: InputMaybe<Scalars['ID']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CartItemCreateMutation = { createOrderItem: { data: { id: string | null, attributes: { product: { data: { id: string | null } | null } | null } | null } | null } | null };

export type CartRemoveProductItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartRemoveProductItemMutation = { deleteOrderItem: { data: { id: string | null } | null } | null };

export type CartSetProductQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  total: Scalars['Float']['input'];
}>;


export type CartSetProductQuantityMutation = { updateOrderItem: { data: { id: string | null, attributes: { quantity: number | null, total: number | null, product: { data: { attributes: { title: string, slug: string } | null } | null } | null } | null } | null } | null };

export type ProductsGetCountListByCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetCountListByCategoriesQuery = { products: { meta: { pagination: { total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: { data: Array<{ id: string | null, attributes: { name: string | null, slug: string, description: string | null, images: { data: { attributes: { url: string, height: number | null, width: number | null } | null } | null } | null } | null }> } | null };

export type CategoriesGeBySlugWithProductsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoriesGeBySlugWithProductsQuery = { categories: { data: Array<{ attributes: { slug: string, products: { data: Array<{ attributes: { rating: number, price: number, slug: string, title: string, description: string, locale: string | null, images: { data: Array<{ attributes: { url: string, width: number | null, height: number | null } | null }> } | null } | null }> } | null } | null }> } | null };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: { data: Array<{ attributes: { slug: string | null, name: string, image: { data: { attributes: { url: string, width: number | null, height: number | null } | null } | null } | null } | null }> } | null };

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetBySlugQuery = { collections: { data: Array<{ attributes: { name: string, description: string | null } | null }> } | null };

export type ProductGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductGetBySlugQuery = { products: { data: Array<{ id: string | null, attributes: { rating: number, price: number, slug: string, title: string, description: string, locale: string | null, categories: { data: Array<{ id: string | null, attributes: { name: string | null, slug: string } | null }> } | null, images: { data: Array<{ attributes: { url: string, width: number | null, height: number | null } | null }> } | null } | null }> } | null };

export type CategoryDataFragment = { id: string | null, attributes: { name: string | null, slug: string } | null };

export type ProductDataFragment = { rating: number, price: number, slug: string, title: string, description: string, locale: string | null, images: { data: Array<{ attributes: { url: string, width: number | null, height: number | null } | null }> } | null };

export type ProductDataWithCategoriesFragment = { rating: number, price: number, slug: string, title: string, description: string, locale: string | null, categories: { data: Array<{ id: string | null, attributes: { name: string | null, slug: string } | null }> } | null, images: { data: Array<{ attributes: { url: string, width: number | null, height: number | null } | null }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
  filters?: InputMaybe<ProductFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}>;


export type ProductsGetListQuery = { products: { meta: { pagination: { total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ attributes: { rating: number, price: number, slug: string, title: string, description: string, locale: string | null, categories: { data: Array<{ id: string | null, attributes: { name: string | null, slug: string } | null }> } | null, images: { data: Array<{ attributes: { url: string, width: number | null, height: number | null } | null }> } | null } | null }> } | null };

export type ProductsGetCountListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetCountListQuery = { products: { meta: { pagination: { total: number, page: number, pageSize: number, pageCount: number } } } | null };

export type ProductsGetCountListByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetCountListByCategorySlugQuery = { products: { meta: { pagination: { total: number } } } | null };

export type ProductsGetCountListByCollectionSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetCountListByCollectionSlugQuery = { products: { meta: { pagination: { total: number } } } | null };

export type PaginationDataFragment = { total: number, page: number, pageSize: number, pageCount: number };

export type ImagesDataFragment = { data: { attributes: { url: string, width: number | null, height: number | null } | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartDataFragmentDoc = new TypedDocumentString(`
    fragment CartData on OrderEntity {
  id
  attributes {
    slug
    total
    order_items {
      data {
        id
        attributes {
          product {
            data {
              id
            }
          }
        }
      }
    }
  }
}
    `, {"fragmentName":"CartData"}) as unknown as TypedDocumentString<CartDataFragment, unknown>;
export const ProductDataFragmentDoc = new TypedDocumentString(`
    fragment ProductData on Product {
  rating
  images {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  price
  slug
  title
  description
  locale
}
    `, {"fragmentName":"ProductData"}) as unknown as TypedDocumentString<ProductDataFragment, unknown>;
export const OrderDataFragmentDoc = new TypedDocumentString(`
    fragment OrderData on OrderEntity {
  id
  attributes {
    total
    slug
    order_items(publicationState: PREVIEW) {
      data {
        id
        attributes {
          quantity
          total
          product_variant {
            data {
              id
              attributes {
                slug
                images {
                  data {
                    attributes {
                      width
                      height
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          product {
            data {
              id
              attributes {
                ...ProductData
              }
            }
          }
        }
      }
    }
  }
}
    fragment ProductData on Product {
  rating
  images {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  price
  slug
  title
  description
  locale
}`, {"fragmentName":"OrderData"}) as unknown as TypedDocumentString<OrderDataFragment, unknown>;
export const CategoryDataFragmentDoc = new TypedDocumentString(`
    fragment CategoryData on CategoryEntity {
  id
  attributes {
    name
    slug
  }
}
    `, {"fragmentName":"CategoryData"}) as unknown as TypedDocumentString<CategoryDataFragment, unknown>;
export const ProductDataWithCategoriesFragmentDoc = new TypedDocumentString(`
    fragment ProductDataWithCategories on Product {
  ...ProductData
  categories {
    data {
      ...CategoryData
    }
  }
}
    fragment CategoryData on CategoryEntity {
  id
  attributes {
    name
    slug
  }
}
fragment ProductData on Product {
  rating
  images {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  price
  slug
  title
  description
  locale
}`, {"fragmentName":"ProductDataWithCategories"}) as unknown as TypedDocumentString<ProductDataWithCategoriesFragment, unknown>;
export const PaginationDataFragmentDoc = new TypedDocumentString(`
    fragment PaginationData on Pagination {
  total
  page
  pageSize
  pageCount
}
    `, {"fragmentName":"PaginationData"}) as unknown as TypedDocumentString<PaginationDataFragment, unknown>;
export const ImagesDataFragmentDoc = new TypedDocumentString(`
    fragment ImagesData on UploadFileEntityResponse {
  data {
    attributes {
      url
      width
      height
    }
  }
}
    `, {"fragmentName":"ImagesData"}) as unknown as TypedDocumentString<ImagesDataFragment, unknown>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($slug: String!) {
  createOrder(data: {total: 0, slug: $slug}) {
    data {
      ...CartData
    }
  }
}
    fragment CartData on OrderEntity {
  id
  attributes {
    slug
    total
    order_items {
      data {
        id
        attributes {
          product {
            data {
              id
            }
          }
        }
      }
    }
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetBySlugDocument = new TypedDocumentString(`
    query CartGetBySlug($slug: String!) {
  orders(publicationState: PREVIEW, filters: {slug: {eq: $slug}}) {
    data {
      ...OrderData
    }
  }
}
    fragment OrderData on OrderEntity {
  id
  attributes {
    total
    slug
    order_items(publicationState: PREVIEW) {
      data {
        id
        attributes {
          quantity
          total
          product_variant {
            data {
              id
              attributes {
                slug
                images {
                  data {
                    attributes {
                      width
                      height
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          product {
            data {
              id
              attributes {
                ...ProductData
              }
            }
          }
        }
      }
    }
  }
}
fragment ProductData on Product {
  rating
  images {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  price
  slug
  title
  description
  locale
}`) as unknown as TypedDocumentString<CartGetBySlugQuery, CartGetBySlugQueryVariables>;
export const CartItemCheckIsInCartDocument = new TypedDocumentString(`
    query CartItemCheckIsInCart($productId: ID!, $cartId: ID!) {
  orderItems(
    publicationState: PREVIEW
    filters: {product: {id: {eq: $productId}}, order: {id: {eq: $cartId}}}
  ) {
    data {
      id
      attributes {
        quantity
        product {
          data {
            attributes {
              price
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartItemCheckIsInCartQuery, CartItemCheckIsInCartQueryVariables>;
export const CartItemCreateDocument = new TypedDocumentString(`
    mutation CartItemCreate($total: Float!, $productId: ID, $orderId: ID) {
  createOrderItem(
    data: {total: $total, product: $productId, order: $orderId, quantity: 1}
  ) {
    data {
      id
      attributes {
        product {
          data {
            id
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartItemCreateMutation, CartItemCreateMutationVariables>;
export const CartRemoveProductItemDocument = new TypedDocumentString(`
    mutation CartRemoveProductItem($id: ID!) {
  deleteOrderItem(id: $id) {
    data {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CartRemoveProductItemMutation, CartRemoveProductItemMutationVariables>;
export const CartSetProductQuantityDocument = new TypedDocumentString(`
    mutation CartSetProductQuantity($id: ID!, $quantity: Int!, $total: Float!) {
  updateOrderItem(id: $id, data: {quantity: $quantity, total: $total}) {
    data {
      id
      attributes {
        quantity
        total
        product {
          data {
            attributes {
              title
              slug
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartSetProductQuantityMutation, CartSetProductQuantityMutationVariables>;
export const ProductsGetCountListByCategoriesDocument = new TypedDocumentString(`
    query ProductsGetCountListByCategories {
  products {
    meta {
      pagination {
        ...PaginationData
      }
    }
  }
}
    fragment PaginationData on Pagination {
  total
  page
  pageSize
  pageCount
}`) as unknown as TypedDocumentString<ProductsGetCountListByCategoriesQuery, ProductsGetCountListByCategoriesQueryVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    data {
      id
      attributes {
        name
        slug
        description
        images {
          data {
            attributes {
              url
              height
              width
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoriesGeBySlugWithProductsDocument = new TypedDocumentString(`
    query CategoriesGeBySlugWithProducts($slug: String!) {
  categories(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        slug
        products {
          data {
            attributes {
              ...ProductData
            }
          }
        }
      }
    }
  }
}
    fragment ProductData on Product {
  rating
  images {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  price
  slug
  title
  description
  locale
}`) as unknown as TypedDocumentString<CategoriesGeBySlugWithProductsQuery, CategoriesGeBySlugWithProductsQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    data {
      attributes {
        slug
        name
        image {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!) {
  collections(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        name
        description
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionGetBySlugQuery, CollectionGetBySlugQueryVariables>;
export const ProductGetBySlugDocument = new TypedDocumentString(`
    query ProductGetBySlug($slug: String!) {
  products(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        ...ProductDataWithCategories
      }
    }
  }
}
    fragment CategoryData on CategoryEntity {
  id
  attributes {
    name
    slug
  }
}
fragment ProductData on Product {
  rating
  images {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  price
  slug
  title
  description
  locale
}
fragment ProductDataWithCategories on Product {
  ...ProductData
  categories {
    data {
      ...CategoryData
    }
  }
}`) as unknown as TypedDocumentString<ProductGetBySlugQuery, ProductGetBySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($page: Int!, $pageSize: Int!, $filters: ProductFiltersInput, $sort: [String]) {
  products(
    pagination: {page: $page, pageSize: $pageSize}
    filters: $filters
    sort: $sort
  ) {
    meta {
      pagination {
        ...PaginationData
      }
    }
    data {
      attributes {
        ...ProductDataWithCategories
      }
    }
  }
}
    fragment CategoryData on CategoryEntity {
  id
  attributes {
    name
    slug
  }
}
fragment ProductData on Product {
  rating
  images {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  price
  slug
  title
  description
  locale
}
fragment ProductDataWithCategories on Product {
  ...ProductData
  categories {
    data {
      ...CategoryData
    }
  }
}
fragment PaginationData on Pagination {
  total
  page
  pageSize
  pageCount
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetCountListDocument = new TypedDocumentString(`
    query ProductsGetCountList {
  products {
    meta {
      pagination {
        ...PaginationData
      }
    }
  }
}
    fragment PaginationData on Pagination {
  total
  page
  pageSize
  pageCount
}`) as unknown as TypedDocumentString<ProductsGetCountListQuery, ProductsGetCountListQueryVariables>;
export const ProductsGetCountListByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetCountListByCategorySlug($slug: String!) {
  products(filters: {categories: {slug: {eq: $slug}}}) {
    meta {
      pagination {
        total
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetCountListByCategorySlugQuery, ProductsGetCountListByCategorySlugQueryVariables>;
export const ProductsGetCountListByCollectionSlugDocument = new TypedDocumentString(`
    query ProductsGetCountListByCollectionSlug($slug: String!) {
  products(filters: {collections: {slug: {eq: $slug}}}) {
    meta {
      pagination {
        total
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetCountListByCollectionSlugQuery, ProductsGetCountListByCollectionSlugQueryVariables>;