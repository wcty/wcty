import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  float8: any;
  geography: any;
  geometry: any;
  numeric: any;
  timestamptz: any;
  timetz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "files" */
export type Files = {
  created_at?: Maybe<Scalars['timetz']>;
  downloadable_url?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  initiative?: Maybe<Initiatives>;
  initiative_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "files" */
export type Files_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Files_Max_Order_By>;
  min?: Maybe<Files_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Files_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: Maybe<Array<Files_Bool_Exp>>;
  _not?: Maybe<Files_Bool_Exp>;
  _or?: Maybe<Array<Files_Bool_Exp>>;
  created_at?: Maybe<Timetz_Comparison_Exp>;
  downloadable_url?: Maybe<String_Comparison_Exp>;
  file_path?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "files" */
export enum Files_Constraint {
  /** unique or primary key constraint */
  FilesPkey = 'files_pkey'
}

/** input type for inserting data into table "files" */
export type Files_Insert_Input = {
  created_at?: Maybe<Scalars['timetz']>;
  downloadable_url?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files" */
export type Files_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  downloadable_url?: Maybe<Order_By>;
  file_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "files" */
export type Files_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  downloadable_url?: Maybe<Order_By>;
  file_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "files" */
export type Files_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on conflict condition type for table "files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: Maybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "files". */
export type Files_Order_By = {
  created_at?: Maybe<Order_By>;
  downloadable_url?: Maybe<Order_By>;
  file_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files" */
export enum Files_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DownloadableUrl = 'downloadable_url',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "files" */
export type Files_Set_Input = {
  created_at?: Maybe<Scalars['timetz']>;
  downloadable_url?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "files" */
export enum Files_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DownloadableUrl = 'downloadable_url',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  UserId = 'user_id'
}



export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};


export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: Maybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: Maybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

/** columns and relationships of "i18n" */
export type I18n = {
  category: Scalars['String'];
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  /** An object relationship */
  i18n_category: I18n_Categories;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  uk?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "i18n" */
export type I18n_Aggregate_Order_By = {
  avg?: Maybe<I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<I18n_Max_Order_By>;
  min?: Maybe<I18n_Min_Order_By>;
  stddev?: Maybe<I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<I18n_Sum_Order_By>;
  var_pop?: Maybe<I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<I18n_Var_Samp_Order_By>;
  variance?: Maybe<I18n_Variance_Order_By>;
};

/** order by avg() on columns of table "i18n" */
export type I18n_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "i18n". All fields are combined with a logical 'AND'. */
export type I18n_Bool_Exp = {
  _and?: Maybe<Array<I18n_Bool_Exp>>;
  _not?: Maybe<I18n_Bool_Exp>;
  _or?: Maybe<Array<I18n_Bool_Exp>>;
  category?: Maybe<String_Comparison_Exp>;
  en?: Maybe<String_Comparison_Exp>;
  fr?: Maybe<String_Comparison_Exp>;
  i18n_category?: Maybe<I18n_Categories_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  uk?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "i18n_categories" */
export type I18n_Categories = {
  category: Scalars['String'];
  /** An array relationship */
  i18ns: Array<I18n>;
};


/** columns and relationships of "i18n_categories" */
export type I18n_CategoriesI18nsArgs = {
  distinct_on?: Maybe<Array<I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<I18n_Order_By>>;
  where?: Maybe<I18n_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "i18n_categories". All fields are combined with a logical 'AND'. */
export type I18n_Categories_Bool_Exp = {
  _and?: Maybe<Array<I18n_Categories_Bool_Exp>>;
  _not?: Maybe<I18n_Categories_Bool_Exp>;
  _or?: Maybe<Array<I18n_Categories_Bool_Exp>>;
  category?: Maybe<String_Comparison_Exp>;
  i18ns?: Maybe<I18n_Bool_Exp>;
};

/** Ordering options when selecting data from "i18n_categories". */
export type I18n_Categories_Order_By = {
  category?: Maybe<Order_By>;
  i18ns_aggregate?: Maybe<I18n_Aggregate_Order_By>;
};

/** select columns of table "i18n_categories" */
export enum I18n_Categories_Select_Column {
  /** column name */
  Category = 'category'
}

/** order by max() on columns of table "i18n" */
export type I18n_Max_Order_By = {
  category?: Maybe<Order_By>;
  en?: Maybe<Order_By>;
  fr?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  uk?: Maybe<Order_By>;
};

/** order by min() on columns of table "i18n" */
export type I18n_Min_Order_By = {
  category?: Maybe<Order_By>;
  en?: Maybe<Order_By>;
  fr?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  uk?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "i18n". */
export type I18n_Order_By = {
  category?: Maybe<Order_By>;
  en?: Maybe<Order_By>;
  fr?: Maybe<Order_By>;
  i18n_category?: Maybe<I18n_Categories_Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  uk?: Maybe<Order_By>;
};

/** select columns of table "i18n" */
export enum I18n_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  En = 'en',
  /** column name */
  Fr = 'fr',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Uk = 'uk'
}

/** order by stddev() on columns of table "i18n" */
export type I18n_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "i18n" */
export type I18n_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "i18n" */
export type I18n_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "i18n" */
export type I18n_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "i18n" */
export type I18n_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "i18n" */
export type I18n_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "i18n" */
export type I18n_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_donations" */
export type Initiative_Donations = {
  /** An object relationship */
  expense?: Maybe<Initiative_Expenses>;
  expense_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  post: Initiative_Thread_Posts;
  post_id: Scalars['bigint'];
  recurrent?: Maybe<Scalars['Boolean']>;
  sum?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "initiative_donations" */
export type Initiative_Donations_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Donations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Donations_Max_Order_By>;
  min?: Maybe<Initiative_Donations_Min_Order_By>;
  stddev?: Maybe<Initiative_Donations_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Donations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Donations_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Donations_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Donations_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Donations_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Donations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_donations" */
export type Initiative_Donations_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Donations_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Donations_On_Conflict>;
};

/** order by avg() on columns of table "initiative_donations" */
export type Initiative_Donations_Avg_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_donations". All fields are combined with a logical 'AND'. */
export type Initiative_Donations_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Donations_Bool_Exp>>;
  _not?: Maybe<Initiative_Donations_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Donations_Bool_Exp>>;
  expense?: Maybe<Initiative_Expenses_Bool_Exp>;
  expense_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  post_id?: Maybe<Bigint_Comparison_Exp>;
  recurrent?: Maybe<Boolean_Comparison_Exp>;
  sum?: Maybe<Numeric_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_donations" */
export enum Initiative_Donations_Constraint {
  /** unique or primary key constraint */
  InitiativeDonationsPkey = 'initiative_donations_pkey',
  /** unique or primary key constraint */
  UnqInitiativeDonationsPostId = 'unq_initiative_donations_post_id'
}

/** input type for incrementing numeric columns in table "initiative_donations" */
export type Initiative_Donations_Inc_Input = {
  expense_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  sum?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "initiative_donations" */
export type Initiative_Donations_Insert_Input = {
  expense?: Maybe<Initiative_Expenses_Obj_Rel_Insert_Input>;
  expense_id?: Maybe<Scalars['Int']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['bigint']>;
  recurrent?: Maybe<Scalars['Boolean']>;
  sum?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_donations" */
export type Initiative_Donations_Max_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_donations" */
export type Initiative_Donations_Min_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_donations" */
export type Initiative_Donations_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Donations>;
};

/** on conflict condition type for table "initiative_donations" */
export type Initiative_Donations_On_Conflict = {
  constraint: Initiative_Donations_Constraint;
  update_columns?: Array<Initiative_Donations_Update_Column>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_donations". */
export type Initiative_Donations_Order_By = {
  expense?: Maybe<Initiative_Expenses_Order_By>;
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  recurrent?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_donations */
export type Initiative_Donations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_donations" */
export enum Initiative_Donations_Select_Column {
  /** column name */
  ExpenseId = 'expense_id',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Recurrent = 'recurrent',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_donations" */
export type Initiative_Donations_Set_Input = {
  expense_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['bigint']>;
  recurrent?: Maybe<Scalars['Boolean']>;
  sum?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_donations" */
export type Initiative_Donations_Stddev_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_donations" */
export type Initiative_Donations_Stddev_Pop_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_donations" */
export type Initiative_Donations_Stddev_Samp_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_donations" */
export type Initiative_Donations_Sum_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** update columns of table "initiative_donations" */
export enum Initiative_Donations_Update_Column {
  /** column name */
  ExpenseId = 'expense_id',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Recurrent = 'recurrent',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_donations" */
export type Initiative_Donations_Var_Pop_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_donations" */
export type Initiative_Donations_Var_Samp_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_donations" */
export type Initiative_Donations_Variance_Order_By = {
  expense_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_edits" */
export type Initiative_Edits = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  info: Initiative_Info;
  info_id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  poll?: Maybe<Initiative_Polls>;
  poll_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  post: Initiative_Thread_Posts;
  post_id: Scalars['bigint'];
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "initiative_edits" */
export type Initiative_Edits_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Edits_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Edits_Max_Order_By>;
  min?: Maybe<Initiative_Edits_Min_Order_By>;
  stddev?: Maybe<Initiative_Edits_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Edits_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Edits_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Edits_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Edits_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Edits_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Edits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_edits" */
export type Initiative_Edits_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Edits_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Edits_On_Conflict>;
};

/** order by avg() on columns of table "initiative_edits" */
export type Initiative_Edits_Avg_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_edits". All fields are combined with a logical 'AND'. */
export type Initiative_Edits_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Edits_Bool_Exp>>;
  _not?: Maybe<Initiative_Edits_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Edits_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  info?: Maybe<Initiative_Info_Bool_Exp>;
  info_id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  poll?: Maybe<Initiative_Polls_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  post_id?: Maybe<Bigint_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_edits" */
export enum Initiative_Edits_Constraint {
  /** unique or primary key constraint */
  InitiativeTasksPkey_1 = 'initiative_tasks_pkey_1',
  /** unique or primary key constraint */
  UnqInitiativeEditsPostId = 'unq_initiative_edits_post_id'
}

/** input type for incrementing numeric columns in table "initiative_edits" */
export type Initiative_Edits_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  info_id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "initiative_edits" */
export type Initiative_Edits_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  info?: Maybe<Initiative_Info_Obj_Rel_Insert_Input>;
  info_id?: Maybe<Scalars['Int']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll?: Maybe<Initiative_Polls_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_edits" */
export type Initiative_Edits_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_edits" */
export type Initiative_Edits_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_edits" */
export type Initiative_Edits_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Edits>;
};

/** on conflict condition type for table "initiative_edits" */
export type Initiative_Edits_On_Conflict = {
  constraint: Initiative_Edits_Constraint;
  update_columns?: Array<Initiative_Edits_Update_Column>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_edits". */
export type Initiative_Edits_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  info?: Maybe<Initiative_Info_Order_By>;
  info_id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll?: Maybe<Initiative_Polls_Order_By>;
  poll_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_edits */
export type Initiative_Edits_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_edits" */
export enum Initiative_Edits_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InfoId = 'info_id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_edits" */
export type Initiative_Edits_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  info_id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_edits" */
export type Initiative_Edits_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_edits" */
export type Initiative_Edits_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_edits" */
export type Initiative_Edits_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_edits" */
export type Initiative_Edits_Sum_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_edits" */
export enum Initiative_Edits_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InfoId = 'info_id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_edits" */
export type Initiative_Edits_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_edits" */
export type Initiative_Edits_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_edits" */
export type Initiative_Edits_Variance_Order_By = {
  id?: Maybe<Order_By>;
  info_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_expenses" */
export type Initiative_Expenses = {
  budget: Scalars['numeric'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  donations: Array<Initiative_Donations>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  poll?: Maybe<Initiative_Polls>;
  poll_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  post: Initiative_Thread_Posts;
  post_id: Scalars['bigint'];
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "initiative_expenses" */
export type Initiative_ExpensesDonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};

/** order by aggregate values of table "initiative_expenses" */
export type Initiative_Expenses_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Expenses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Expenses_Max_Order_By>;
  min?: Maybe<Initiative_Expenses_Min_Order_By>;
  stddev?: Maybe<Initiative_Expenses_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Expenses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Expenses_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Expenses_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Expenses_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Expenses_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Expenses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_expenses" */
export type Initiative_Expenses_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Expenses_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Expenses_On_Conflict>;
};

/** order by avg() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Avg_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_expenses". All fields are combined with a logical 'AND'. */
export type Initiative_Expenses_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Expenses_Bool_Exp>>;
  _not?: Maybe<Initiative_Expenses_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Expenses_Bool_Exp>>;
  budget?: Maybe<Numeric_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  donations?: Maybe<Initiative_Donations_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  poll?: Maybe<Initiative_Polls_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  post_id?: Maybe<Bigint_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_expenses" */
export enum Initiative_Expenses_Constraint {
  /** unique or primary key constraint */
  InitiativeTasksPkey_0 = 'initiative_tasks_pkey_0',
  /** unique or primary key constraint */
  UnqInitiativeExpensesPostId = 'unq_initiative_expenses_post_id'
}

/** input type for incrementing numeric columns in table "initiative_expenses" */
export type Initiative_Expenses_Inc_Input = {
  budget?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "initiative_expenses" */
export type Initiative_Expenses_Insert_Input = {
  budget?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  donations?: Maybe<Initiative_Donations_Arr_Rel_Insert_Input>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll?: Maybe<Initiative_Polls_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Max_Order_By = {
  budget?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Min_Order_By = {
  budget?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_expenses" */
export type Initiative_Expenses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Expenses>;
};

/** input type for inserting object relation for remote table "initiative_expenses" */
export type Initiative_Expenses_Obj_Rel_Insert_Input = {
  data: Initiative_Expenses_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Expenses_On_Conflict>;
};

/** on conflict condition type for table "initiative_expenses" */
export type Initiative_Expenses_On_Conflict = {
  constraint: Initiative_Expenses_Constraint;
  update_columns?: Array<Initiative_Expenses_Update_Column>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_expenses". */
export type Initiative_Expenses_Order_By = {
  budget?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  donations_aggregate?: Maybe<Initiative_Donations_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll?: Maybe<Initiative_Polls_Order_By>;
  poll_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_expenses */
export type Initiative_Expenses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_expenses" */
export enum Initiative_Expenses_Select_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_expenses" */
export type Initiative_Expenses_Set_Input = {
  budget?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Stddev_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Stddev_Pop_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Stddev_Samp_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Sum_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_expenses" */
export enum Initiative_Expenses_Update_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Var_Pop_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Var_Samp_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Variance_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_info" */
export type Initiative_Info = {
  approved_at?: Maybe<Scalars['timestamptz']>;
  context?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  edits: Array<Initiative_Edits>;
  goal?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  modified_at: Scalars['timestamptz'];
  problem?: Maybe<Scalars['String']>;
};


/** columns and relationships of "initiative_info" */
export type Initiative_InfoEditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};

/** order by aggregate values of table "initiative_info" */
export type Initiative_Info_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Info_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Info_Max_Order_By>;
  min?: Maybe<Initiative_Info_Min_Order_By>;
  stddev?: Maybe<Initiative_Info_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Info_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Info_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Info_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Info_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Info_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_info" */
export type Initiative_Info_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Info_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Info_On_Conflict>;
};

/** order by avg() on columns of table "initiative_info" */
export type Initiative_Info_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_info". All fields are combined with a logical 'AND'. */
export type Initiative_Info_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Info_Bool_Exp>>;
  _not?: Maybe<Initiative_Info_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Info_Bool_Exp>>;
  approved_at?: Maybe<Timestamptz_Comparison_Exp>;
  context?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  edits?: Maybe<Initiative_Edits_Bool_Exp>;
  goal?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  modified_at?: Maybe<Timestamptz_Comparison_Exp>;
  problem?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_info" */
export enum Initiative_Info_Constraint {
  /** unique or primary key constraint */
  PkInitiativeInfoId = 'pk_initiative_info_id'
}

/** input type for incrementing numeric columns in table "initiative_info" */
export type Initiative_Info_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_info" */
export type Initiative_Info_Insert_Input = {
  approved_at?: Maybe<Scalars['timestamptz']>;
  context?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edits?: Maybe<Initiative_Edits_Arr_Rel_Insert_Input>;
  goal?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  problem?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "initiative_info" */
export type Initiative_Info_Max_Order_By = {
  approved_at?: Maybe<Order_By>;
  context?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  problem?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_info" */
export type Initiative_Info_Min_Order_By = {
  approved_at?: Maybe<Order_By>;
  context?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  problem?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_info" */
export type Initiative_Info_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Info>;
};

/** input type for inserting object relation for remote table "initiative_info" */
export type Initiative_Info_Obj_Rel_Insert_Input = {
  data: Initiative_Info_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Info_On_Conflict>;
};

/** on conflict condition type for table "initiative_info" */
export type Initiative_Info_On_Conflict = {
  constraint: Initiative_Info_Constraint;
  update_columns?: Array<Initiative_Info_Update_Column>;
  where?: Maybe<Initiative_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_info". */
export type Initiative_Info_Order_By = {
  approved_at?: Maybe<Order_By>;
  context?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  edits_aggregate?: Maybe<Initiative_Edits_Aggregate_Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  problem?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_info */
export type Initiative_Info_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_info" */
export enum Initiative_Info_Select_Column {
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  Context = 'context',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Goal = 'goal',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Problem = 'problem'
}

/** input type for updating data in table "initiative_info" */
export type Initiative_Info_Set_Input = {
  approved_at?: Maybe<Scalars['timestamptz']>;
  context?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  goal?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  problem?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "initiative_info" */
export type Initiative_Info_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_info" */
export type Initiative_Info_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_info" */
export type Initiative_Info_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_info" */
export type Initiative_Info_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "initiative_info" */
export enum Initiative_Info_Update_Column {
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  Context = 'context',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Goal = 'goal',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Problem = 'problem'
}

/** order by var_pop() on columns of table "initiative_info" */
export type Initiative_Info_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_info" */
export type Initiative_Info_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_info" */
export type Initiative_Info_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_members" */
export type Initiative_Members = {
  contractor?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  donator?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  initiator?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteer?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "initiative_members" */
export type Initiative_Members_Aggregate = {
  aggregate?: Maybe<Initiative_Members_Aggregate_Fields>;
  nodes: Array<Initiative_Members>;
};

/** aggregate fields of "initiative_members" */
export type Initiative_Members_Aggregate_Fields = {
  avg?: Maybe<Initiative_Members_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Initiative_Members_Max_Fields>;
  min?: Maybe<Initiative_Members_Min_Fields>;
  stddev?: Maybe<Initiative_Members_Stddev_Fields>;
  stddev_pop?: Maybe<Initiative_Members_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Initiative_Members_Stddev_Samp_Fields>;
  sum?: Maybe<Initiative_Members_Sum_Fields>;
  var_pop?: Maybe<Initiative_Members_Var_Pop_Fields>;
  var_samp?: Maybe<Initiative_Members_Var_Samp_Fields>;
  variance?: Maybe<Initiative_Members_Variance_Fields>;
};


/** aggregate fields of "initiative_members" */
export type Initiative_Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Initiative_Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "initiative_members" */
export type Initiative_Members_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Members_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Members_Max_Order_By>;
  min?: Maybe<Initiative_Members_Min_Order_By>;
  stddev?: Maybe<Initiative_Members_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Members_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Members_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Members_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Members_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Members_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Members_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_members" */
export type Initiative_Members_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Members_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Members_On_Conflict>;
};

/** aggregate avg on columns */
export type Initiative_Members_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "initiative_members" */
export type Initiative_Members_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_members". All fields are combined with a logical 'AND'. */
export type Initiative_Members_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Members_Bool_Exp>>;
  _not?: Maybe<Initiative_Members_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Members_Bool_Exp>>;
  contractor?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  donator?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  initiator?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  volunteer?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_members" */
export enum Initiative_Members_Constraint {
  /** unique or primary key constraint */
  InitiativeMemberPkey = 'initiative_member_pkey'
}

/** input type for incrementing numeric columns in table "initiative_members" */
export type Initiative_Members_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_members" */
export type Initiative_Members_Insert_Input = {
  contractor?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  donator?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  initiator?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteer?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Initiative_Members_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_members" */
export type Initiative_Members_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Initiative_Members_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "initiative_members" */
export type Initiative_Members_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_members" */
export type Initiative_Members_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Members>;
};

/** on conflict condition type for table "initiative_members" */
export type Initiative_Members_On_Conflict = {
  constraint: Initiative_Members_Constraint;
  update_columns?: Array<Initiative_Members_Update_Column>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_members". */
export type Initiative_Members_Order_By = {
  contractor?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  donator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  initiator?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  volunteer?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_members */
export type Initiative_Members_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_members" */
export enum Initiative_Members_Select_Column {
  /** column name */
  Contractor = 'contractor',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Donator = 'donator',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Initiator = 'initiator',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Volunteer = 'volunteer'
}

/** input type for updating data in table "initiative_members" */
export type Initiative_Members_Set_Input = {
  contractor?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  donator?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  initiator?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteer?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Initiative_Members_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "initiative_members" */
export type Initiative_Members_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Initiative_Members_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "initiative_members" */
export type Initiative_Members_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Initiative_Members_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "initiative_members" */
export type Initiative_Members_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Initiative_Members_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "initiative_members" */
export type Initiative_Members_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "initiative_members" */
export enum Initiative_Members_Update_Column {
  /** column name */
  Contractor = 'contractor',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Donator = 'donator',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Initiator = 'initiator',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Volunteer = 'volunteer'
}

/** aggregate var_pop on columns */
export type Initiative_Members_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "initiative_members" */
export type Initiative_Members_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Initiative_Members_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "initiative_members" */
export type Initiative_Members_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Initiative_Members_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "initiative_members" */
export type Initiative_Members_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_poll_votes" */
export type Initiative_Poll_Votes = {
  id: Scalars['bigint'];
  /** An object relationship */
  poll: Initiative_Polls;
  poll_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  value: Scalars['String'];
};

/** order by aggregate values of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Poll_Votes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Poll_Votes_Max_Order_By>;
  min?: Maybe<Initiative_Poll_Votes_Min_Order_By>;
  stddev?: Maybe<Initiative_Poll_Votes_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Poll_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Poll_Votes_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Poll_Votes_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Poll_Votes_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Poll_Votes_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Poll_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Poll_Votes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Poll_Votes_On_Conflict>;
};

/** order by avg() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_poll_votes". All fields are combined with a logical 'AND'. */
export type Initiative_Poll_Votes_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Poll_Votes_Bool_Exp>>;
  _not?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Poll_Votes_Bool_Exp>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  poll?: Maybe<Initiative_Polls_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_poll_votes" */
export enum Initiative_Poll_Votes_Constraint {
  /** unique or primary key constraint */
  PkInitiativePollVotesId = 'pk_initiative_poll_votes_id'
}

/** input type for incrementing numeric columns in table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  poll_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  poll?: Maybe<Initiative_Polls_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Max_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Min_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Poll_Votes>;
};

/** on conflict condition type for table "initiative_poll_votes" */
export type Initiative_Poll_Votes_On_Conflict = {
  constraint: Initiative_Poll_Votes_Constraint;
  update_columns?: Array<Initiative_Poll_Votes_Update_Column>;
  where?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_poll_votes". */
export type Initiative_Poll_Votes_Order_By = {
  id?: Maybe<Order_By>;
  poll?: Maybe<Initiative_Polls_Order_By>;
  poll_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_poll_votes */
export type Initiative_Poll_Votes_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_poll_votes" */
export enum Initiative_Poll_Votes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  poll_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_poll_votes" */
export enum Initiative_Poll_Votes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value'
}

/** order by var_pop() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_poll_votes" */
export type Initiative_Poll_Votes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_polls" */
export type Initiative_Polls = {
  /** An array relationship */
  edits: Array<Initiative_Edits>;
  /** An array relationship */
  expenses: Array<Initiative_Expenses>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An array relationship */
  tasks: Array<Initiative_Tasks>;
  user_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  votes: Array<Initiative_Poll_Votes>;
};


/** columns and relationships of "initiative_polls" */
export type Initiative_PollsEditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};


/** columns and relationships of "initiative_polls" */
export type Initiative_PollsExpensesArgs = {
  distinct_on?: Maybe<Array<Initiative_Expenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Expenses_Order_By>>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};


/** columns and relationships of "initiative_polls" */
export type Initiative_PollsTasksArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


/** columns and relationships of "initiative_polls" */
export type Initiative_PollsVotesArgs = {
  distinct_on?: Maybe<Array<Initiative_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Poll_Votes_Order_By>>;
  where?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};

/** order by aggregate values of table "initiative_polls" */
export type Initiative_Polls_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Polls_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Polls_Max_Order_By>;
  min?: Maybe<Initiative_Polls_Min_Order_By>;
  stddev?: Maybe<Initiative_Polls_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Polls_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Polls_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Polls_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Polls_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Polls_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Polls_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_polls" */
export type Initiative_Polls_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Polls_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Polls_On_Conflict>;
};

/** order by avg() on columns of table "initiative_polls" */
export type Initiative_Polls_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_polls". All fields are combined with a logical 'AND'. */
export type Initiative_Polls_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Polls_Bool_Exp>>;
  _not?: Maybe<Initiative_Polls_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Polls_Bool_Exp>>;
  edits?: Maybe<Initiative_Edits_Bool_Exp>;
  expenses?: Maybe<Initiative_Expenses_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  tasks?: Maybe<Initiative_Tasks_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  votes?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};

/** unique or primary key constraints on table "initiative_polls" */
export enum Initiative_Polls_Constraint {
  /** unique or primary key constraint */
  InitiativePollsPkey = 'initiative_polls_pkey'
}

/** input type for incrementing numeric columns in table "initiative_polls" */
export type Initiative_Polls_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_polls" */
export type Initiative_Polls_Insert_Input = {
  edits?: Maybe<Initiative_Edits_Arr_Rel_Insert_Input>;
  expenses?: Maybe<Initiative_Expenses_Arr_Rel_Insert_Input>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  tasks?: Maybe<Initiative_Tasks_Arr_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  votes?: Maybe<Initiative_Poll_Votes_Arr_Rel_Insert_Input>;
};

/** order by max() on columns of table "initiative_polls" */
export type Initiative_Polls_Max_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_polls" */
export type Initiative_Polls_Min_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_polls" */
export type Initiative_Polls_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Polls>;
};

/** input type for inserting object relation for remote table "initiative_polls" */
export type Initiative_Polls_Obj_Rel_Insert_Input = {
  data: Initiative_Polls_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Polls_On_Conflict>;
};

/** on conflict condition type for table "initiative_polls" */
export type Initiative_Polls_On_Conflict = {
  constraint: Initiative_Polls_Constraint;
  update_columns?: Array<Initiative_Polls_Update_Column>;
  where?: Maybe<Initiative_Polls_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_polls". */
export type Initiative_Polls_Order_By = {
  edits_aggregate?: Maybe<Initiative_Edits_Aggregate_Order_By>;
  expenses_aggregate?: Maybe<Initiative_Expenses_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  tasks_aggregate?: Maybe<Initiative_Tasks_Aggregate_Order_By>;
  user_id?: Maybe<Order_By>;
  votes_aggregate?: Maybe<Initiative_Poll_Votes_Aggregate_Order_By>;
};

/** primary key columns input for table: initiative_polls */
export type Initiative_Polls_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_polls" */
export enum Initiative_Polls_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_polls" */
export type Initiative_Polls_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_polls" */
export type Initiative_Polls_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_polls" */
export type Initiative_Polls_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_polls" */
export type Initiative_Polls_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_polls" */
export type Initiative_Polls_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "initiative_polls" */
export enum Initiative_Polls_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_polls" */
export type Initiative_Polls_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_polls" */
export type Initiative_Polls_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_polls" */
export type Initiative_Polls_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_projects" */
export type Initiative_Projects = {
  budget?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  org_project?: Maybe<Org_Projects>;
  /** An object relationship */
  post: Initiative_Thread_Posts;
  post_id: Scalars['bigint'];
  reference_project_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  tender: Tenders;
  tender_id: Scalars['bigint'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Scalars['numeric']>;
};

/** order by aggregate values of table "initiative_projects" */
export type Initiative_Projects_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Projects_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Projects_Max_Order_By>;
  min?: Maybe<Initiative_Projects_Min_Order_By>;
  stddev?: Maybe<Initiative_Projects_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Projects_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Projects_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Projects_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Projects_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Projects_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Projects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_projects" */
export type Initiative_Projects_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Projects_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Projects_On_Conflict>;
};

/** order by avg() on columns of table "initiative_projects" */
export type Initiative_Projects_Avg_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_projects". All fields are combined with a logical 'AND'. */
export type Initiative_Projects_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Projects_Bool_Exp>>;
  _not?: Maybe<Initiative_Projects_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Projects_Bool_Exp>>;
  budget?: Maybe<Numeric_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  org?: Maybe<Orgs_Bool_Exp>;
  org_id?: Maybe<Uuid_Comparison_Exp>;
  org_project?: Maybe<Org_Projects_Bool_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  post_id?: Maybe<Bigint_Comparison_Exp>;
  reference_project_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  tender?: Maybe<Tenders_Bool_Exp>;
  tender_id?: Maybe<Bigint_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  volunteers?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_projects" */
export enum Initiative_Projects_Constraint {
  /** unique or primary key constraint */
  PkInitiativeProjectsId = 'pk_initiative_projects_id',
  /** unique or primary key constraint */
  UnqInitiativeProjectsPostId = 'unq_initiative_projects_post_id'
}

/** input type for incrementing numeric columns in table "initiative_projects" */
export type Initiative_Projects_Inc_Input = {
  budget?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  reference_project_id?: Maybe<Scalars['Int']>;
  tender_id?: Maybe<Scalars['bigint']>;
  volunteers?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "initiative_projects" */
export type Initiative_Projects_Insert_Input = {
  budget?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  org_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['bigint']>;
  reference_project_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tender?: Maybe<Tenders_Obj_Rel_Insert_Input>;
  tender_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "initiative_projects" */
export type Initiative_Projects_Max_Order_By = {
  budget?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_projects" */
export type Initiative_Projects_Min_Order_By = {
  budget?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_projects" */
export type Initiative_Projects_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Projects>;
};

/** on conflict condition type for table "initiative_projects" */
export type Initiative_Projects_On_Conflict = {
  constraint: Initiative_Projects_Constraint;
  update_columns?: Array<Initiative_Projects_Update_Column>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_projects". */
export type Initiative_Projects_Order_By = {
  budget?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  org?: Maybe<Orgs_Order_By>;
  org_id?: Maybe<Order_By>;
  org_project?: Maybe<Org_Projects_Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tender?: Maybe<Tenders_Order_By>;
  tender_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_projects */
export type Initiative_Projects_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_projects" */
export enum Initiative_Projects_Select_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ReferenceProjectId = 'reference_project_id',
  /** column name */
  Status = 'status',
  /** column name */
  TenderId = 'tender_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Volunteers = 'volunteers'
}

/** input type for updating data in table "initiative_projects" */
export type Initiative_Projects_Set_Input = {
  budget?: Maybe<Scalars['numeric']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  org_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['bigint']>;
  reference_project_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tender_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Scalars['numeric']>;
};

/** order by stddev() on columns of table "initiative_projects" */
export type Initiative_Projects_Stddev_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_projects" */
export type Initiative_Projects_Stddev_Pop_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_projects" */
export type Initiative_Projects_Stddev_Samp_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_projects" */
export type Initiative_Projects_Sum_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** update columns of table "initiative_projects" */
export enum Initiative_Projects_Update_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ReferenceProjectId = 'reference_project_id',
  /** column name */
  Status = 'status',
  /** column name */
  TenderId = 'tender_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Volunteers = 'volunteers'
}

/** order by var_pop() on columns of table "initiative_projects" */
export type Initiative_Projects_Var_Pop_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_projects" */
export type Initiative_Projects_Var_Samp_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_projects" */
export type Initiative_Projects_Variance_Order_By = {
  budget?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reference_project_id?: Maybe<Order_By>;
  tender_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_tags" */
export type Initiative_Tags = {
  id: Scalars['Int'];
  /** An object relationship */
  initiative?: Maybe<Initiatives>;
  initiative_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
  /** An object relationship */
  tags?: Maybe<Tags>;
};

/** order by aggregate values of table "initiative_tags" */
export type Initiative_Tags_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Tags_Max_Order_By>;
  min?: Maybe<Initiative_Tags_Min_Order_By>;
  stddev?: Maybe<Initiative_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Tags_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_tags" */
export type Initiative_Tags_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Tags_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Tags_On_Conflict>;
};

/** order by avg() on columns of table "initiative_tags" */
export type Initiative_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_tags". All fields are combined with a logical 'AND'. */
export type Initiative_Tags_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Tags_Bool_Exp>>;
  _not?: Maybe<Initiative_Tags_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Tags_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  tag?: Maybe<String_Comparison_Exp>;
  tags?: Maybe<Tags_Bool_Exp>;
};

/** unique or primary key constraints on table "initiative_tags" */
export enum Initiative_Tags_Constraint {
  /** unique or primary key constraint */
  InitiativeTagPkey = 'initiative_tag_pkey'
}

/** input type for incrementing numeric columns in table "initiative_tags" */
export type Initiative_Tags_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_tags" */
export type Initiative_Tags_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
  tags?: Maybe<Tags_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "initiative_tags" */
export type Initiative_Tags_Max_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_tags" */
export type Initiative_Tags_Min_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_tags" */
export type Initiative_Tags_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Tags>;
};

/** on conflict condition type for table "initiative_tags" */
export type Initiative_Tags_On_Conflict = {
  constraint: Initiative_Tags_Constraint;
  update_columns?: Array<Initiative_Tags_Update_Column>;
  where?: Maybe<Initiative_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_tags". */
export type Initiative_Tags_Order_By = {
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
  tags?: Maybe<Tags_Order_By>;
};

/** primary key columns input for table: initiative_tags */
export type Initiative_Tags_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_tags" */
export enum Initiative_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Tag = 'tag'
}

/** input type for updating data in table "initiative_tags" */
export type Initiative_Tags_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
};

/** order by stddev() on columns of table "initiative_tags" */
export type Initiative_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_tags" */
export type Initiative_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_tags" */
export type Initiative_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_tags" */
export type Initiative_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "initiative_tags" */
export enum Initiative_Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Tag = 'tag'
}

/** order by var_pop() on columns of table "initiative_tags" */
export type Initiative_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_tags" */
export type Initiative_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_tags" */
export type Initiative_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_tasks" */
export type Initiative_Tasks = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An array relationship */
  initiative_volunteers: Array<Initiative_Volunteers>;
  /** An object relationship */
  poll?: Maybe<Initiative_Polls>;
  poll_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  post: Initiative_Thread_Posts;
  post_id: Scalars['bigint'];
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Scalars['numeric']>;
};


/** columns and relationships of "initiative_tasks" */
export type Initiative_TasksInitiative_VolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};

/** order by aggregate values of table "initiative_tasks" */
export type Initiative_Tasks_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Tasks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Tasks_Max_Order_By>;
  min?: Maybe<Initiative_Tasks_Min_Order_By>;
  stddev?: Maybe<Initiative_Tasks_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Tasks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Tasks_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Tasks_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Tasks_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Tasks_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Tasks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_tasks" */
export type Initiative_Tasks_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Tasks_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Tasks_On_Conflict>;
};

/** order by avg() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Avg_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_tasks". All fields are combined with a logical 'AND'. */
export type Initiative_Tasks_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Tasks_Bool_Exp>>;
  _not?: Maybe<Initiative_Tasks_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Tasks_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  initiative_volunteers?: Maybe<Initiative_Volunteers_Bool_Exp>;
  poll?: Maybe<Initiative_Polls_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  post_id?: Maybe<Bigint_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  volunteers?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_tasks" */
export enum Initiative_Tasks_Constraint {
  /** unique or primary key constraint */
  InitiativeTasksPkey = 'initiative_tasks_pkey',
  /** unique or primary key constraint */
  UnqInitiativeTasksPostId = 'unq_initiative_tasks_post_id'
}

/** input type for incrementing numeric columns in table "initiative_tasks" */
export type Initiative_Tasks_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  volunteers?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "initiative_tasks" */
export type Initiative_Tasks_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  initiative_volunteers?: Maybe<Initiative_Volunteers_Arr_Rel_Insert_Input>;
  poll?: Maybe<Initiative_Polls_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_tasks" */
export type Initiative_Tasks_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Tasks>;
};

/** input type for inserting object relation for remote table "initiative_tasks" */
export type Initiative_Tasks_Obj_Rel_Insert_Input = {
  data: Initiative_Tasks_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Tasks_On_Conflict>;
};

/** on conflict condition type for table "initiative_tasks" */
export type Initiative_Tasks_On_Conflict = {
  constraint: Initiative_Tasks_Constraint;
  update_columns?: Array<Initiative_Tasks_Update_Column>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_tasks". */
export type Initiative_Tasks_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  initiative_volunteers_aggregate?: Maybe<Initiative_Volunteers_Aggregate_Order_By>;
  poll?: Maybe<Initiative_Polls_Order_By>;
  poll_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_tasks */
export type Initiative_Tasks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_tasks" */
export enum Initiative_Tasks_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Volunteers = 'volunteers'
}

/** input type for updating data in table "initiative_tasks" */
export type Initiative_Tasks_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Scalars['numeric']>;
};

/** order by stddev() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Sum_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** update columns of table "initiative_tasks" */
export enum Initiative_Tasks_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Volunteers = 'volunteers'
}

/** order by var_pop() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Variance_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  volunteers?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_thread_comments" */
export type Initiative_Thread_Comments = {
  comment?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  message_id: Scalars['Int'];
  /** An object relationship */
  post: Initiative_Thread_Posts;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Thread_Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Thread_Comments_Max_Order_By>;
  min?: Maybe<Initiative_Thread_Comments_Min_Order_By>;
  stddev?: Maybe<Initiative_Thread_Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Thread_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Thread_Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Thread_Comments_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Thread_Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Thread_Comments_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Thread_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Thread_Comments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Thread_Comments_On_Conflict>;
};

/** order by avg() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Avg_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_thread_comments". All fields are combined with a logical 'AND'. */
export type Initiative_Thread_Comments_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Thread_Comments_Bool_Exp>>;
  _not?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Thread_Comments_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_thread_comments" */
export enum Initiative_Thread_Comments_Constraint {
  /** unique or primary key constraint */
  InitiativeThreadCommentPkey = 'initiative_thread_comment_pkey'
}

/** input type for incrementing numeric columns in table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  message_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Max_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Min_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Thread_Comments>;
};

/** on conflict condition type for table "initiative_thread_comments" */
export type Initiative_Thread_Comments_On_Conflict = {
  constraint: Initiative_Thread_Comments_Constraint;
  update_columns?: Array<Initiative_Thread_Comments_Update_Column>;
  where?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_thread_comments". */
export type Initiative_Thread_Comments_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_thread_comments */
export type Initiative_Thread_Comments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_thread_comments" */
export enum Initiative_Thread_Comments_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Sum_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_thread_comments" */
export enum Initiative_Thread_Comments_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_thread_comments" */
export type Initiative_Thread_Comments_Variance_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions = {
  id: Scalars['bigint'];
  /** An object relationship */
  post?: Maybe<Initiative_Thread_Posts>;
  post_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Thread_Post_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Thread_Post_Reactions_Max_Order_By>;
  min?: Maybe<Initiative_Thread_Post_Reactions_Min_Order_By>;
  stddev?: Maybe<Initiative_Thread_Post_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Thread_Post_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Thread_Post_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Thread_Post_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Thread_Post_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Thread_Post_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Thread_Post_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Thread_Post_Reactions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Thread_Post_Reactions_On_Conflict>;
};

/** order by avg() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_thread_post_reactions". All fields are combined with a logical 'AND'. */
export type Initiative_Thread_Post_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Thread_Post_Reactions_Bool_Exp>>;
  _not?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Thread_Post_Reactions_Bool_Exp>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_thread_post_reactions" */
export enum Initiative_Thread_Post_Reactions_Constraint {
  /** unique or primary key constraint */
  InitiativeThreadPostReactionsPkey = 'initiative_thread_post_reactions_pkey'
}

/** input type for incrementing numeric columns in table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Max_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Min_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Thread_Post_Reactions>;
};

/** on conflict condition type for table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_On_Conflict = {
  constraint: Initiative_Thread_Post_Reactions_Constraint;
  update_columns?: Array<Initiative_Thread_Post_Reactions_Update_Column>;
  where?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_thread_post_reactions". */
export type Initiative_Thread_Post_Reactions_Order_By = {
  id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_thread_post_reactions */
export type Initiative_Thread_Post_Reactions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_thread_post_reactions" */
export enum Initiative_Thread_Post_Reactions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_thread_post_reactions" */
export enum Initiative_Thread_Post_Reactions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_thread_post_reactions" */
export type Initiative_Thread_Post_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_Posts = {
  /** An array relationship */
  comments: Array<Initiative_Thread_Comments>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  donations: Array<Initiative_Donations>;
  /** An array relationship */
  edits: Array<Initiative_Edits>;
  /** An array relationship */
  expenses: Array<Initiative_Expenses>;
  id: Scalars['bigint'];
  modified_at: Scalars['timestamptz'];
  post?: Maybe<Scalars['String']>;
  /** An array relationship */
  projects: Array<Initiative_Projects>;
  /** An array relationship */
  reactions: Array<Initiative_Thread_Post_Reactions>;
  /** An array relationship */
  tasks: Array<Initiative_Tasks>;
  /** An object relationship */
  thread: Initiative_Threads;
  thread_id: Scalars['Int'];
  type: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  volunteers: Array<Initiative_Volunteers>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Comments_Order_By>>;
  where?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsDonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsEditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsExpensesArgs = {
  distinct_on?: Maybe<Array<Initiative_Expenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Expenses_Order_By>>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsTasksArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


/** columns and relationships of "initiative_thread_posts" */
export type Initiative_Thread_PostsVolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};

/** order by aggregate values of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Thread_Posts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Thread_Posts_Max_Order_By>;
  min?: Maybe<Initiative_Thread_Posts_Min_Order_By>;
  stddev?: Maybe<Initiative_Thread_Posts_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Thread_Posts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Thread_Posts_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Thread_Posts_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Thread_Posts_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Thread_Posts_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Thread_Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Thread_Posts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Thread_Posts_On_Conflict>;
};

/** order by avg() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_thread_posts". All fields are combined with a logical 'AND'. */
export type Initiative_Thread_Posts_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Thread_Posts_Bool_Exp>>;
  _not?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Thread_Posts_Bool_Exp>>;
  comments?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  donations?: Maybe<Initiative_Donations_Bool_Exp>;
  edits?: Maybe<Initiative_Edits_Bool_Exp>;
  expenses?: Maybe<Initiative_Expenses_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  modified_at?: Maybe<Timestamptz_Comparison_Exp>;
  post?: Maybe<String_Comparison_Exp>;
  projects?: Maybe<Initiative_Projects_Bool_Exp>;
  reactions?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
  tasks?: Maybe<Initiative_Tasks_Bool_Exp>;
  thread?: Maybe<Initiative_Threads_Bool_Exp>;
  thread_id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  volunteers?: Maybe<Initiative_Volunteers_Bool_Exp>;
};

/** unique or primary key constraints on table "initiative_thread_posts" */
export enum Initiative_Thread_Posts_Constraint {
  /** unique or primary key constraint */
  InitiativeThreadMessagePkey = 'initiative_thread_message_pkey'
}

/** input type for incrementing numeric columns in table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  thread_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Insert_Input = {
  comments?: Maybe<Initiative_Thread_Comments_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  donations?: Maybe<Initiative_Donations_Arr_Rel_Insert_Input>;
  edits?: Maybe<Initiative_Edits_Arr_Rel_Insert_Input>;
  expenses?: Maybe<Initiative_Expenses_Arr_Rel_Insert_Input>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  post?: Maybe<Scalars['String']>;
  projects?: Maybe<Initiative_Projects_Arr_Rel_Insert_Input>;
  reactions?: Maybe<Initiative_Thread_Post_Reactions_Arr_Rel_Insert_Input>;
  tasks?: Maybe<Initiative_Tasks_Arr_Rel_Insert_Input>;
  thread?: Maybe<Initiative_Threads_Obj_Rel_Insert_Input>;
  thread_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Initiative_Volunteers_Arr_Rel_Insert_Input>;
};

/** order by max() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  post?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  post?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Thread_Posts>;
};

/** input type for inserting object relation for remote table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Obj_Rel_Insert_Input = {
  data: Initiative_Thread_Posts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Thread_Posts_On_Conflict>;
};

/** on conflict condition type for table "initiative_thread_posts" */
export type Initiative_Thread_Posts_On_Conflict = {
  constraint: Initiative_Thread_Posts_Constraint;
  update_columns?: Array<Initiative_Thread_Posts_Update_Column>;
  where?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_thread_posts". */
export type Initiative_Thread_Posts_Order_By = {
  comments_aggregate?: Maybe<Initiative_Thread_Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  donations_aggregate?: Maybe<Initiative_Donations_Aggregate_Order_By>;
  edits_aggregate?: Maybe<Initiative_Edits_Aggregate_Order_By>;
  expenses_aggregate?: Maybe<Initiative_Expenses_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  post?: Maybe<Order_By>;
  projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  reactions_aggregate?: Maybe<Initiative_Thread_Post_Reactions_Aggregate_Order_By>;
  tasks_aggregate?: Maybe<Initiative_Tasks_Aggregate_Order_By>;
  thread?: Maybe<Initiative_Threads_Order_By>;
  thread_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers_aggregate?: Maybe<Initiative_Volunteers_Aggregate_Order_By>;
};

/** primary key columns input for table: initiative_thread_posts */
export type Initiative_Thread_Posts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_thread_posts" */
export enum Initiative_Thread_Posts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Post = 'post',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  post?: Maybe<Scalars['String']>;
  thread_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_thread_posts" */
export enum Initiative_Thread_Posts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Post = 'post',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_thread_posts" */
export type Initiative_Thread_Posts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_threads" */
export type Initiative_Threads = {
  /** An object relationship */
  initiative: Initiatives;
  /** An array relationship */
  posts: Array<Initiative_Thread_Posts>;
};


/** columns and relationships of "initiative_threads" */
export type Initiative_ThreadsPostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Posts_Order_By>>;
  where?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
};

/** order by aggregate values of table "initiative_threads" */
export type Initiative_Threads_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "initiative_threads" */
export type Initiative_Threads_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Threads_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Threads_On_Conflict>;
};

/** Boolean expression to filter rows from the table "initiative_threads". All fields are combined with a logical 'AND'. */
export type Initiative_Threads_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Threads_Bool_Exp>>;
  _not?: Maybe<Initiative_Threads_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Threads_Bool_Exp>>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  posts?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
};

/** unique or primary key constraints on table "initiative_threads" */
export enum Initiative_Threads_Constraint {
  /** unique or primary key constraint */
  InitiativeThreadPkey = 'initiative_thread_pkey',
  /** unique or primary key constraint */
  UnqInitiativeThreads = 'unq_initiative_threads'
}

/** input type for inserting data into table "initiative_threads" */
export type Initiative_Threads_Insert_Input = {
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  posts?: Maybe<Initiative_Thread_Posts_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "initiative_threads" */
export type Initiative_Threads_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Threads>;
};

/** input type for inserting object relation for remote table "initiative_threads" */
export type Initiative_Threads_Obj_Rel_Insert_Input = {
  data: Initiative_Threads_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Threads_On_Conflict>;
};

/** on conflict condition type for table "initiative_threads" */
export type Initiative_Threads_On_Conflict = {
  constraint: Initiative_Threads_Constraint;
  update_columns?: Array<Initiative_Threads_Update_Column>;
  where?: Maybe<Initiative_Threads_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_threads". */
export type Initiative_Threads_Order_By = {
  initiative?: Maybe<Initiatives_Order_By>;
  posts_aggregate?: Maybe<Initiative_Thread_Posts_Aggregate_Order_By>;
};

/** placeholder for update columns of table "initiative_threads" (current role has no relevant permissions) */
export enum Initiative_Threads_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** columns and relationships of "initiative_visits" */
export type Initiative_Visits = {
  id: Scalars['bigint'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  visited_at?: Maybe<Scalars['timestamptz']>;
};

/** order by aggregate values of table "initiative_visits" */
export type Initiative_Visits_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Visits_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Visits_Max_Order_By>;
  min?: Maybe<Initiative_Visits_Min_Order_By>;
  stddev?: Maybe<Initiative_Visits_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Visits_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Visits_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Visits_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Visits_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Visits_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Visits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_visits" */
export type Initiative_Visits_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Visits_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Visits_On_Conflict>;
};

/** order by avg() on columns of table "initiative_visits" */
export type Initiative_Visits_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_visits". All fields are combined with a logical 'AND'. */
export type Initiative_Visits_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Visits_Bool_Exp>>;
  _not?: Maybe<Initiative_Visits_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Visits_Bool_Exp>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  visited_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_visits" */
export enum Initiative_Visits_Constraint {
  /** unique or primary key constraint */
  InitiativeVisitsPkey = 'initiative_visits_pkey',
  /** unique or primary key constraint */
  UserInitiativeConstraint = 'user_initiative_constraint'
}

/** input type for incrementing numeric columns in table "initiative_visits" */
export type Initiative_Visits_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "initiative_visits" */
export type Initiative_Visits_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  visited_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "initiative_visits" */
export type Initiative_Visits_Max_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  visited_at?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_visits" */
export type Initiative_Visits_Min_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  visited_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_visits" */
export type Initiative_Visits_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Visits>;
};

/** on conflict condition type for table "initiative_visits" */
export type Initiative_Visits_On_Conflict = {
  constraint: Initiative_Visits_Constraint;
  update_columns?: Array<Initiative_Visits_Update_Column>;
  where?: Maybe<Initiative_Visits_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_visits". */
export type Initiative_Visits_Order_By = {
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  visited_at?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_visits */
export type Initiative_Visits_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_visits" */
export enum Initiative_Visits_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VisitedAt = 'visited_at'
}

/** input type for updating data in table "initiative_visits" */
export type Initiative_Visits_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  visited_at?: Maybe<Scalars['timestamptz']>;
};

/** order by stddev() on columns of table "initiative_visits" */
export type Initiative_Visits_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_visits" */
export type Initiative_Visits_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_visits" */
export type Initiative_Visits_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_visits" */
export type Initiative_Visits_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "initiative_visits" */
export enum Initiative_Visits_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VisitedAt = 'visited_at'
}

/** order by var_pop() on columns of table "initiative_visits" */
export type Initiative_Visits_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_visits" */
export type Initiative_Visits_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_visits" */
export type Initiative_Visits_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_volunteers" */
export type Initiative_Volunteers = {
  hours: Scalars['numeric'];
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  post: Initiative_Thread_Posts;
  post_id: Scalars['bigint'];
  /** An object relationship */
  task?: Maybe<Initiative_Tasks>;
  task_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "initiative_volunteers" */
export type Initiative_Volunteers_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Volunteers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Volunteers_Max_Order_By>;
  min?: Maybe<Initiative_Volunteers_Min_Order_By>;
  stddev?: Maybe<Initiative_Volunteers_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Volunteers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Volunteers_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Volunteers_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Volunteers_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Volunteers_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Volunteers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_volunteers" */
export type Initiative_Volunteers_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Volunteers_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Volunteers_On_Conflict>;
};

/** order by avg() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Avg_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_volunteers". All fields are combined with a logical 'AND'. */
export type Initiative_Volunteers_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Volunteers_Bool_Exp>>;
  _not?: Maybe<Initiative_Volunteers_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Volunteers_Bool_Exp>>;
  hours?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  post_id?: Maybe<Bigint_Comparison_Exp>;
  task?: Maybe<Initiative_Tasks_Bool_Exp>;
  task_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_volunteers" */
export enum Initiative_Volunteers_Constraint {
  /** unique or primary key constraint */
  InitiativeDonationsPkey_0 = 'initiative_donations_pkey_0',
  /** unique or primary key constraint */
  UnqInitiativeVolunteersPostId = 'unq_initiative_volunteers_post_id'
}

/** input type for incrementing numeric columns in table "initiative_volunteers" */
export type Initiative_Volunteers_Inc_Input = {
  hours?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  task_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_volunteers" */
export type Initiative_Volunteers_Insert_Input = {
  hours?: Maybe<Scalars['numeric']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Initiative_Thread_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['bigint']>;
  task?: Maybe<Initiative_Tasks_Obj_Rel_Insert_Input>;
  task_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Max_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Min_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_volunteers" */
export type Initiative_Volunteers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Volunteers>;
};

/** on conflict condition type for table "initiative_volunteers" */
export type Initiative_Volunteers_On_Conflict = {
  constraint: Initiative_Volunteers_Constraint;
  update_columns?: Array<Initiative_Volunteers_Update_Column>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_volunteers". */
export type Initiative_Volunteers_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Thread_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  task?: Maybe<Initiative_Tasks_Order_By>;
  task_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_volunteers */
export type Initiative_Volunteers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_volunteers" */
export enum Initiative_Volunteers_Select_Column {
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_volunteers" */
export type Initiative_Volunteers_Set_Input = {
  hours?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['bigint']>;
  task_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Stddev_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Stddev_Pop_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Stddev_Samp_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Sum_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_volunteers" */
export enum Initiative_Volunteers_Update_Column {
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Var_Pop_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Var_Samp_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Variance_Order_By = {
  hours?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiatives" */
export type Initiatives = {
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  donations: Array<Initiative_Donations>;
  /** An array relationship */
  edits: Array<Initiative_Edits>;
  /** An array relationship */
  expenses: Array<Initiative_Expenses>;
  /** An array relationship */
  files: Array<Files>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  /** An array relationship */
  infos: Array<Initiative_Info>;
  /** An array relationship */
  members: Array<Initiative_Members>;
  /** An aggregate relationship */
  members_aggregate: Initiative_Members_Aggregate;
  modified_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  polls: Array<Initiative_Polls>;
  /** An array relationship */
  projects: Array<Initiative_Projects>;
  /** An array relationship */
  tags: Array<Initiative_Tags>;
  /** An array relationship */
  tasks: Array<Initiative_Tasks>;
  /** An array relationship */
  tenders: Array<Tenders>;
  /** An array relationship */
  threads: Array<Initiative_Threads>;
  /** An array relationship */
  visits: Array<Initiative_Visits>;
  /** An array relationship */
  volunteers: Array<Initiative_Volunteers>;
};


/** columns and relationships of "initiatives" */
export type InitiativesDonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesEditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesExpensesArgs = {
  distinct_on?: Maybe<Array<Initiative_Expenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Expenses_Order_By>>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesInfosArgs = {
  distinct_on?: Maybe<Array<Initiative_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Info_Order_By>>;
  where?: Maybe<Initiative_Info_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesMembersArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesPollsArgs = {
  distinct_on?: Maybe<Array<Initiative_Polls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Polls_Order_By>>;
  where?: Maybe<Initiative_Polls_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesTagsArgs = {
  distinct_on?: Maybe<Array<Initiative_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tags_Order_By>>;
  where?: Maybe<Initiative_Tags_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesTasksArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesTendersArgs = {
  distinct_on?: Maybe<Array<Tenders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tenders_Order_By>>;
  where?: Maybe<Tenders_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesThreadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Threads_Order_By>>;
  where?: Maybe<Initiative_Threads_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesVisitsArgs = {
  distinct_on?: Maybe<Array<Initiative_Visits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Visits_Order_By>>;
  where?: Maybe<Initiative_Visits_Bool_Exp>;
};


/** columns and relationships of "initiatives" */
export type InitiativesVolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "initiatives". All fields are combined with a logical 'AND'. */
export type Initiatives_Bool_Exp = {
  _and?: Maybe<Array<Initiatives_Bool_Exp>>;
  _not?: Maybe<Initiatives_Bool_Exp>;
  _or?: Maybe<Array<Initiatives_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  donations?: Maybe<Initiative_Donations_Bool_Exp>;
  edits?: Maybe<Initiative_Edits_Bool_Exp>;
  expenses?: Maybe<Initiative_Expenses_Bool_Exp>;
  files?: Maybe<Files_Bool_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  infos?: Maybe<Initiative_Info_Bool_Exp>;
  members?: Maybe<Initiative_Members_Bool_Exp>;
  modified_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  polls?: Maybe<Initiative_Polls_Bool_Exp>;
  projects?: Maybe<Initiative_Projects_Bool_Exp>;
  tags?: Maybe<Initiative_Tags_Bool_Exp>;
  tasks?: Maybe<Initiative_Tasks_Bool_Exp>;
  tenders?: Maybe<Tenders_Bool_Exp>;
  threads?: Maybe<Initiative_Threads_Bool_Exp>;
  visits?: Maybe<Initiative_Visits_Bool_Exp>;
  volunteers?: Maybe<Initiative_Volunteers_Bool_Exp>;
};

/** unique or primary key constraints on table "initiatives" */
export enum Initiatives_Constraint {
  /** unique or primary key constraint */
  InitiativePkey = 'initiative__pkey'
}

/** input type for inserting data into table "initiatives" */
export type Initiatives_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  donations?: Maybe<Initiative_Donations_Arr_Rel_Insert_Input>;
  edits?: Maybe<Initiative_Edits_Arr_Rel_Insert_Input>;
  expenses?: Maybe<Initiative_Expenses_Arr_Rel_Insert_Input>;
  files?: Maybe<Files_Arr_Rel_Insert_Input>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  infos?: Maybe<Initiative_Info_Arr_Rel_Insert_Input>;
  members?: Maybe<Initiative_Members_Arr_Rel_Insert_Input>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  polls?: Maybe<Initiative_Polls_Arr_Rel_Insert_Input>;
  projects?: Maybe<Initiative_Projects_Arr_Rel_Insert_Input>;
  tags?: Maybe<Initiative_Tags_Arr_Rel_Insert_Input>;
  tasks?: Maybe<Initiative_Tasks_Arr_Rel_Insert_Input>;
  tenders?: Maybe<Tenders_Arr_Rel_Insert_Input>;
  threads?: Maybe<Initiative_Threads_Arr_Rel_Insert_Input>;
  visits?: Maybe<Initiative_Visits_Arr_Rel_Insert_Input>;
  volunteers?: Maybe<Initiative_Volunteers_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "initiatives" */
export type Initiatives_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiatives>;
};

export type Initiatives_Nearby_Args = {
  limit?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['geometry']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  own?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** input type for inserting object relation for remote table "initiatives" */
export type Initiatives_Obj_Rel_Insert_Input = {
  data: Initiatives_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiatives_On_Conflict>;
};

/** on conflict condition type for table "initiatives" */
export type Initiatives_On_Conflict = {
  constraint: Initiatives_Constraint;
  update_columns?: Array<Initiatives_Update_Column>;
  where?: Maybe<Initiatives_Bool_Exp>;
};

/** Ordering options when selecting data from "initiatives". */
export type Initiatives_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  donations_aggregate?: Maybe<Initiative_Donations_Aggregate_Order_By>;
  edits_aggregate?: Maybe<Initiative_Edits_Aggregate_Order_By>;
  expenses_aggregate?: Maybe<Initiative_Expenses_Aggregate_Order_By>;
  files_aggregate?: Maybe<Files_Aggregate_Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  infos_aggregate?: Maybe<Initiative_Info_Aggregate_Order_By>;
  members_aggregate?: Maybe<Initiative_Members_Aggregate_Order_By>;
  modified_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  polls_aggregate?: Maybe<Initiative_Polls_Aggregate_Order_By>;
  projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  tags_aggregate?: Maybe<Initiative_Tags_Aggregate_Order_By>;
  tasks_aggregate?: Maybe<Initiative_Tasks_Aggregate_Order_By>;
  tenders_aggregate?: Maybe<Tenders_Aggregate_Order_By>;
  threads_aggregate?: Maybe<Initiative_Threads_Aggregate_Order_By>;
  visits_aggregate?: Maybe<Initiative_Visits_Aggregate_Order_By>;
  volunteers_aggregate?: Maybe<Initiative_Volunteers_Aggregate_Order_By>;
};

/** primary key columns input for table: initiatives */
export type Initiatives_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "initiatives" */
export enum Initiatives_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "initiatives" */
export type Initiatives_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "initiatives" */
export enum Initiatives_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Name = 'name'
}

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "files" */
  delete_files?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "files" */
  delete_files_by_pk?: Maybe<Files>;
  /** delete data from the table: "initiative_donations" */
  delete_initiative_donations?: Maybe<Initiative_Donations_Mutation_Response>;
  /** delete single row from the table: "initiative_donations" */
  delete_initiative_donations_by_pk?: Maybe<Initiative_Donations>;
  /** delete data from the table: "initiative_edits" */
  delete_initiative_edits?: Maybe<Initiative_Edits_Mutation_Response>;
  /** delete single row from the table: "initiative_edits" */
  delete_initiative_edits_by_pk?: Maybe<Initiative_Edits>;
  /** delete data from the table: "initiative_expenses" */
  delete_initiative_expenses?: Maybe<Initiative_Expenses_Mutation_Response>;
  /** delete single row from the table: "initiative_expenses" */
  delete_initiative_expenses_by_pk?: Maybe<Initiative_Expenses>;
  /** delete data from the table: "initiative_info" */
  delete_initiative_info?: Maybe<Initiative_Info_Mutation_Response>;
  /** delete single row from the table: "initiative_info" */
  delete_initiative_info_by_pk?: Maybe<Initiative_Info>;
  /** delete data from the table: "initiative_members" */
  delete_initiative_members?: Maybe<Initiative_Members_Mutation_Response>;
  /** delete single row from the table: "initiative_members" */
  delete_initiative_members_by_pk?: Maybe<Initiative_Members>;
  /** delete data from the table: "initiative_poll_votes" */
  delete_initiative_poll_votes?: Maybe<Initiative_Poll_Votes_Mutation_Response>;
  /** delete single row from the table: "initiative_poll_votes" */
  delete_initiative_poll_votes_by_pk?: Maybe<Initiative_Poll_Votes>;
  /** delete data from the table: "initiative_polls" */
  delete_initiative_polls?: Maybe<Initiative_Polls_Mutation_Response>;
  /** delete single row from the table: "initiative_polls" */
  delete_initiative_polls_by_pk?: Maybe<Initiative_Polls>;
  /** delete data from the table: "initiative_projects" */
  delete_initiative_projects?: Maybe<Initiative_Projects_Mutation_Response>;
  /** delete single row from the table: "initiative_projects" */
  delete_initiative_projects_by_pk?: Maybe<Initiative_Projects>;
  /** delete data from the table: "initiative_tags" */
  delete_initiative_tags?: Maybe<Initiative_Tags_Mutation_Response>;
  /** delete single row from the table: "initiative_tags" */
  delete_initiative_tags_by_pk?: Maybe<Initiative_Tags>;
  /** delete data from the table: "initiative_tasks" */
  delete_initiative_tasks?: Maybe<Initiative_Tasks_Mutation_Response>;
  /** delete single row from the table: "initiative_tasks" */
  delete_initiative_tasks_by_pk?: Maybe<Initiative_Tasks>;
  /** delete data from the table: "initiative_thread_comments" */
  delete_initiative_thread_comments?: Maybe<Initiative_Thread_Comments_Mutation_Response>;
  /** delete single row from the table: "initiative_thread_comments" */
  delete_initiative_thread_comments_by_pk?: Maybe<Initiative_Thread_Comments>;
  /** delete data from the table: "initiative_thread_post_reactions" */
  delete_initiative_thread_post_reactions?: Maybe<Initiative_Thread_Post_Reactions_Mutation_Response>;
  /** delete single row from the table: "initiative_thread_post_reactions" */
  delete_initiative_thread_post_reactions_by_pk?: Maybe<Initiative_Thread_Post_Reactions>;
  /** delete data from the table: "initiative_thread_posts" */
  delete_initiative_thread_posts?: Maybe<Initiative_Thread_Posts_Mutation_Response>;
  /** delete single row from the table: "initiative_thread_posts" */
  delete_initiative_thread_posts_by_pk?: Maybe<Initiative_Thread_Posts>;
  /** delete data from the table: "initiative_threads" */
  delete_initiative_threads?: Maybe<Initiative_Threads_Mutation_Response>;
  /** delete data from the table: "initiative_visits" */
  delete_initiative_visits?: Maybe<Initiative_Visits_Mutation_Response>;
  /** delete single row from the table: "initiative_visits" */
  delete_initiative_visits_by_pk?: Maybe<Initiative_Visits>;
  /** delete data from the table: "initiative_volunteers" */
  delete_initiative_volunteers?: Maybe<Initiative_Volunteers_Mutation_Response>;
  /** delete single row from the table: "initiative_volunteers" */
  delete_initiative_volunteers_by_pk?: Maybe<Initiative_Volunteers>;
  /** delete data from the table: "initiatives" */
  delete_initiatives?: Maybe<Initiatives_Mutation_Response>;
  /** delete single row from the table: "initiatives" */
  delete_initiatives_by_pk?: Maybe<Initiatives>;
  /** delete data from the table: "tenders" */
  delete_tenders?: Maybe<Tenders_Mutation_Response>;
  /** delete single row from the table: "tenders" */
  delete_tenders_by_pk?: Maybe<Tenders>;
  /** insert data into the table: "files" */
  insert_files?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "files" */
  insert_files_one?: Maybe<Files>;
  /** insert data into the table: "initiative_donations" */
  insert_initiative_donations?: Maybe<Initiative_Donations_Mutation_Response>;
  /** insert a single row into the table: "initiative_donations" */
  insert_initiative_donations_one?: Maybe<Initiative_Donations>;
  /** insert data into the table: "initiative_edits" */
  insert_initiative_edits?: Maybe<Initiative_Edits_Mutation_Response>;
  /** insert a single row into the table: "initiative_edits" */
  insert_initiative_edits_one?: Maybe<Initiative_Edits>;
  /** insert data into the table: "initiative_expenses" */
  insert_initiative_expenses?: Maybe<Initiative_Expenses_Mutation_Response>;
  /** insert a single row into the table: "initiative_expenses" */
  insert_initiative_expenses_one?: Maybe<Initiative_Expenses>;
  /** insert data into the table: "initiative_info" */
  insert_initiative_info?: Maybe<Initiative_Info_Mutation_Response>;
  /** insert a single row into the table: "initiative_info" */
  insert_initiative_info_one?: Maybe<Initiative_Info>;
  /** insert data into the table: "initiative_members" */
  insert_initiative_members?: Maybe<Initiative_Members_Mutation_Response>;
  /** insert a single row into the table: "initiative_members" */
  insert_initiative_members_one?: Maybe<Initiative_Members>;
  /** insert data into the table: "initiative_poll_votes" */
  insert_initiative_poll_votes?: Maybe<Initiative_Poll_Votes_Mutation_Response>;
  /** insert a single row into the table: "initiative_poll_votes" */
  insert_initiative_poll_votes_one?: Maybe<Initiative_Poll_Votes>;
  /** insert data into the table: "initiative_polls" */
  insert_initiative_polls?: Maybe<Initiative_Polls_Mutation_Response>;
  /** insert a single row into the table: "initiative_polls" */
  insert_initiative_polls_one?: Maybe<Initiative_Polls>;
  /** insert data into the table: "initiative_projects" */
  insert_initiative_projects?: Maybe<Initiative_Projects_Mutation_Response>;
  /** insert a single row into the table: "initiative_projects" */
  insert_initiative_projects_one?: Maybe<Initiative_Projects>;
  /** insert data into the table: "initiative_tags" */
  insert_initiative_tags?: Maybe<Initiative_Tags_Mutation_Response>;
  /** insert a single row into the table: "initiative_tags" */
  insert_initiative_tags_one?: Maybe<Initiative_Tags>;
  /** insert data into the table: "initiative_tasks" */
  insert_initiative_tasks?: Maybe<Initiative_Tasks_Mutation_Response>;
  /** insert a single row into the table: "initiative_tasks" */
  insert_initiative_tasks_one?: Maybe<Initiative_Tasks>;
  /** insert data into the table: "initiative_thread_comments" */
  insert_initiative_thread_comments?: Maybe<Initiative_Thread_Comments_Mutation_Response>;
  /** insert a single row into the table: "initiative_thread_comments" */
  insert_initiative_thread_comments_one?: Maybe<Initiative_Thread_Comments>;
  /** insert data into the table: "initiative_thread_post_reactions" */
  insert_initiative_thread_post_reactions?: Maybe<Initiative_Thread_Post_Reactions_Mutation_Response>;
  /** insert a single row into the table: "initiative_thread_post_reactions" */
  insert_initiative_thread_post_reactions_one?: Maybe<Initiative_Thread_Post_Reactions>;
  /** insert data into the table: "initiative_thread_posts" */
  insert_initiative_thread_posts?: Maybe<Initiative_Thread_Posts_Mutation_Response>;
  /** insert a single row into the table: "initiative_thread_posts" */
  insert_initiative_thread_posts_one?: Maybe<Initiative_Thread_Posts>;
  /** insert data into the table: "initiative_threads" */
  insert_initiative_threads?: Maybe<Initiative_Threads_Mutation_Response>;
  /** insert a single row into the table: "initiative_threads" */
  insert_initiative_threads_one?: Maybe<Initiative_Threads>;
  /** insert data into the table: "initiative_visits" */
  insert_initiative_visits?: Maybe<Initiative_Visits_Mutation_Response>;
  /** insert a single row into the table: "initiative_visits" */
  insert_initiative_visits_one?: Maybe<Initiative_Visits>;
  /** insert data into the table: "initiative_volunteers" */
  insert_initiative_volunteers?: Maybe<Initiative_Volunteers_Mutation_Response>;
  /** insert a single row into the table: "initiative_volunteers" */
  insert_initiative_volunteers_one?: Maybe<Initiative_Volunteers>;
  /** insert data into the table: "initiatives" */
  insert_initiatives?: Maybe<Initiatives_Mutation_Response>;
  /** insert a single row into the table: "initiatives" */
  insert_initiatives_one?: Maybe<Initiatives>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "tenders" */
  insert_tenders?: Maybe<Tenders_Mutation_Response>;
  /** insert a single row into the table: "tenders" */
  insert_tenders_one?: Maybe<Tenders>;
  /** update data of the table: "files" */
  update_files?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "files" */
  update_files_by_pk?: Maybe<Files>;
  /** update data of the table: "initiative_donations" */
  update_initiative_donations?: Maybe<Initiative_Donations_Mutation_Response>;
  /** update single row of the table: "initiative_donations" */
  update_initiative_donations_by_pk?: Maybe<Initiative_Donations>;
  /** update data of the table: "initiative_edits" */
  update_initiative_edits?: Maybe<Initiative_Edits_Mutation_Response>;
  /** update single row of the table: "initiative_edits" */
  update_initiative_edits_by_pk?: Maybe<Initiative_Edits>;
  /** update data of the table: "initiative_expenses" */
  update_initiative_expenses?: Maybe<Initiative_Expenses_Mutation_Response>;
  /** update single row of the table: "initiative_expenses" */
  update_initiative_expenses_by_pk?: Maybe<Initiative_Expenses>;
  /** update data of the table: "initiative_info" */
  update_initiative_info?: Maybe<Initiative_Info_Mutation_Response>;
  /** update single row of the table: "initiative_info" */
  update_initiative_info_by_pk?: Maybe<Initiative_Info>;
  /** update data of the table: "initiative_members" */
  update_initiative_members?: Maybe<Initiative_Members_Mutation_Response>;
  /** update single row of the table: "initiative_members" */
  update_initiative_members_by_pk?: Maybe<Initiative_Members>;
  /** update data of the table: "initiative_poll_votes" */
  update_initiative_poll_votes?: Maybe<Initiative_Poll_Votes_Mutation_Response>;
  /** update single row of the table: "initiative_poll_votes" */
  update_initiative_poll_votes_by_pk?: Maybe<Initiative_Poll_Votes>;
  /** update data of the table: "initiative_polls" */
  update_initiative_polls?: Maybe<Initiative_Polls_Mutation_Response>;
  /** update single row of the table: "initiative_polls" */
  update_initiative_polls_by_pk?: Maybe<Initiative_Polls>;
  /** update data of the table: "initiative_projects" */
  update_initiative_projects?: Maybe<Initiative_Projects_Mutation_Response>;
  /** update single row of the table: "initiative_projects" */
  update_initiative_projects_by_pk?: Maybe<Initiative_Projects>;
  /** update data of the table: "initiative_tags" */
  update_initiative_tags?: Maybe<Initiative_Tags_Mutation_Response>;
  /** update single row of the table: "initiative_tags" */
  update_initiative_tags_by_pk?: Maybe<Initiative_Tags>;
  /** update data of the table: "initiative_tasks" */
  update_initiative_tasks?: Maybe<Initiative_Tasks_Mutation_Response>;
  /** update single row of the table: "initiative_tasks" */
  update_initiative_tasks_by_pk?: Maybe<Initiative_Tasks>;
  /** update data of the table: "initiative_thread_comments" */
  update_initiative_thread_comments?: Maybe<Initiative_Thread_Comments_Mutation_Response>;
  /** update single row of the table: "initiative_thread_comments" */
  update_initiative_thread_comments_by_pk?: Maybe<Initiative_Thread_Comments>;
  /** update data of the table: "initiative_thread_post_reactions" */
  update_initiative_thread_post_reactions?: Maybe<Initiative_Thread_Post_Reactions_Mutation_Response>;
  /** update single row of the table: "initiative_thread_post_reactions" */
  update_initiative_thread_post_reactions_by_pk?: Maybe<Initiative_Thread_Post_Reactions>;
  /** update data of the table: "initiative_thread_posts" */
  update_initiative_thread_posts?: Maybe<Initiative_Thread_Posts_Mutation_Response>;
  /** update single row of the table: "initiative_thread_posts" */
  update_initiative_thread_posts_by_pk?: Maybe<Initiative_Thread_Posts>;
  /** update data of the table: "initiative_visits" */
  update_initiative_visits?: Maybe<Initiative_Visits_Mutation_Response>;
  /** update single row of the table: "initiative_visits" */
  update_initiative_visits_by_pk?: Maybe<Initiative_Visits>;
  /** update data of the table: "initiative_volunteers" */
  update_initiative_volunteers?: Maybe<Initiative_Volunteers_Mutation_Response>;
  /** update single row of the table: "initiative_volunteers" */
  update_initiative_volunteers_by_pk?: Maybe<Initiative_Volunteers>;
  /** update data of the table: "initiatives" */
  update_initiatives?: Maybe<Initiatives_Mutation_Response>;
  /** update single row of the table: "initiatives" */
  update_initiatives_by_pk?: Maybe<Initiatives>;
  /** update data of the table: "tenders" */
  update_tenders?: Maybe<Tenders_Mutation_Response>;
  /** update single row of the table: "tenders" */
  update_tenders_by_pk?: Maybe<Tenders>;
};


/** mutation root */
export type Mutation_RootDelete_FilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_DonationsArgs = {
  where: Initiative_Donations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Donations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_EditsArgs = {
  where: Initiative_Edits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Edits_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_ExpensesArgs = {
  where: Initiative_Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Expenses_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_InfoArgs = {
  where: Initiative_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Info_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_MembersArgs = {
  where: Initiative_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Members_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Poll_VotesArgs = {
  where: Initiative_Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Poll_Votes_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_PollsArgs = {
  where: Initiative_Polls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Polls_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_ProjectsArgs = {
  where: Initiative_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Projects_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_TagsArgs = {
  where: Initiative_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_TasksArgs = {
  where: Initiative_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Tasks_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Thread_CommentsArgs = {
  where: Initiative_Thread_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Thread_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Thread_Post_ReactionsArgs = {
  where: Initiative_Thread_Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Thread_Post_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Thread_PostsArgs = {
  where: Initiative_Thread_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Thread_Posts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_ThreadsArgs = {
  where: Initiative_Threads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_VisitsArgs = {
  where: Initiative_Visits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Visits_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_VolunteersArgs = {
  where: Initiative_Volunteers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Volunteers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InitiativesArgs = {
  where: Initiatives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiatives_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TendersArgs = {
  where: Tenders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_FilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: Maybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_OneArgs = {
  object: Files_Insert_Input;
  on_conflict?: Maybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_DonationsArgs = {
  objects: Array<Initiative_Donations_Insert_Input>;
  on_conflict?: Maybe<Initiative_Donations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Donations_OneArgs = {
  object: Initiative_Donations_Insert_Input;
  on_conflict?: Maybe<Initiative_Donations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_EditsArgs = {
  objects: Array<Initiative_Edits_Insert_Input>;
  on_conflict?: Maybe<Initiative_Edits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Edits_OneArgs = {
  object: Initiative_Edits_Insert_Input;
  on_conflict?: Maybe<Initiative_Edits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_ExpensesArgs = {
  objects: Array<Initiative_Expenses_Insert_Input>;
  on_conflict?: Maybe<Initiative_Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Expenses_OneArgs = {
  object: Initiative_Expenses_Insert_Input;
  on_conflict?: Maybe<Initiative_Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_InfoArgs = {
  objects: Array<Initiative_Info_Insert_Input>;
  on_conflict?: Maybe<Initiative_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Info_OneArgs = {
  object: Initiative_Info_Insert_Input;
  on_conflict?: Maybe<Initiative_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_MembersArgs = {
  objects: Array<Initiative_Members_Insert_Input>;
  on_conflict?: Maybe<Initiative_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Members_OneArgs = {
  object: Initiative_Members_Insert_Input;
  on_conflict?: Maybe<Initiative_Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Poll_VotesArgs = {
  objects: Array<Initiative_Poll_Votes_Insert_Input>;
  on_conflict?: Maybe<Initiative_Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Poll_Votes_OneArgs = {
  object: Initiative_Poll_Votes_Insert_Input;
  on_conflict?: Maybe<Initiative_Poll_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_PollsArgs = {
  objects: Array<Initiative_Polls_Insert_Input>;
  on_conflict?: Maybe<Initiative_Polls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Polls_OneArgs = {
  object: Initiative_Polls_Insert_Input;
  on_conflict?: Maybe<Initiative_Polls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_ProjectsArgs = {
  objects: Array<Initiative_Projects_Insert_Input>;
  on_conflict?: Maybe<Initiative_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Projects_OneArgs = {
  object: Initiative_Projects_Insert_Input;
  on_conflict?: Maybe<Initiative_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_TagsArgs = {
  objects: Array<Initiative_Tags_Insert_Input>;
  on_conflict?: Maybe<Initiative_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Tags_OneArgs = {
  object: Initiative_Tags_Insert_Input;
  on_conflict?: Maybe<Initiative_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_TasksArgs = {
  objects: Array<Initiative_Tasks_Insert_Input>;
  on_conflict?: Maybe<Initiative_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Tasks_OneArgs = {
  object: Initiative_Tasks_Insert_Input;
  on_conflict?: Maybe<Initiative_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Thread_CommentsArgs = {
  objects: Array<Initiative_Thread_Comments_Insert_Input>;
  on_conflict?: Maybe<Initiative_Thread_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Thread_Comments_OneArgs = {
  object: Initiative_Thread_Comments_Insert_Input;
  on_conflict?: Maybe<Initiative_Thread_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Thread_Post_ReactionsArgs = {
  objects: Array<Initiative_Thread_Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Initiative_Thread_Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Thread_Post_Reactions_OneArgs = {
  object: Initiative_Thread_Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Initiative_Thread_Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Thread_PostsArgs = {
  objects: Array<Initiative_Thread_Posts_Insert_Input>;
  on_conflict?: Maybe<Initiative_Thread_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Thread_Posts_OneArgs = {
  object: Initiative_Thread_Posts_Insert_Input;
  on_conflict?: Maybe<Initiative_Thread_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_ThreadsArgs = {
  objects: Array<Initiative_Threads_Insert_Input>;
  on_conflict?: Maybe<Initiative_Threads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Threads_OneArgs = {
  object: Initiative_Threads_Insert_Input;
  on_conflict?: Maybe<Initiative_Threads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_VisitsArgs = {
  objects: Array<Initiative_Visits_Insert_Input>;
  on_conflict?: Maybe<Initiative_Visits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Visits_OneArgs = {
  object: Initiative_Visits_Insert_Input;
  on_conflict?: Maybe<Initiative_Visits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_VolunteersArgs = {
  objects: Array<Initiative_Volunteers_Insert_Input>;
  on_conflict?: Maybe<Initiative_Volunteers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Volunteers_OneArgs = {
  object: Initiative_Volunteers_Insert_Input;
  on_conflict?: Maybe<Initiative_Volunteers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InitiativesArgs = {
  objects: Array<Initiatives_Insert_Input>;
  on_conflict?: Maybe<Initiatives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiatives_OneArgs = {
  object: Initiatives_Insert_Input;
  on_conflict?: Maybe<Initiatives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TendersArgs = {
  objects: Array<Tenders_Insert_Input>;
  on_conflict?: Maybe<Tenders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenders_OneArgs = {
  object: Tenders_Insert_Input;
  on_conflict?: Maybe<Tenders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FilesArgs = {
  _set?: Maybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_By_PkArgs = {
  _set?: Maybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_DonationsArgs = {
  _inc?: Maybe<Initiative_Donations_Inc_Input>;
  _set?: Maybe<Initiative_Donations_Set_Input>;
  where: Initiative_Donations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Donations_By_PkArgs = {
  _inc?: Maybe<Initiative_Donations_Inc_Input>;
  _set?: Maybe<Initiative_Donations_Set_Input>;
  pk_columns: Initiative_Donations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_EditsArgs = {
  _inc?: Maybe<Initiative_Edits_Inc_Input>;
  _set?: Maybe<Initiative_Edits_Set_Input>;
  where: Initiative_Edits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Edits_By_PkArgs = {
  _inc?: Maybe<Initiative_Edits_Inc_Input>;
  _set?: Maybe<Initiative_Edits_Set_Input>;
  pk_columns: Initiative_Edits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_ExpensesArgs = {
  _inc?: Maybe<Initiative_Expenses_Inc_Input>;
  _set?: Maybe<Initiative_Expenses_Set_Input>;
  where: Initiative_Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Expenses_By_PkArgs = {
  _inc?: Maybe<Initiative_Expenses_Inc_Input>;
  _set?: Maybe<Initiative_Expenses_Set_Input>;
  pk_columns: Initiative_Expenses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_InfoArgs = {
  _inc?: Maybe<Initiative_Info_Inc_Input>;
  _set?: Maybe<Initiative_Info_Set_Input>;
  where: Initiative_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Info_By_PkArgs = {
  _inc?: Maybe<Initiative_Info_Inc_Input>;
  _set?: Maybe<Initiative_Info_Set_Input>;
  pk_columns: Initiative_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_MembersArgs = {
  _inc?: Maybe<Initiative_Members_Inc_Input>;
  _set?: Maybe<Initiative_Members_Set_Input>;
  where: Initiative_Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Members_By_PkArgs = {
  _inc?: Maybe<Initiative_Members_Inc_Input>;
  _set?: Maybe<Initiative_Members_Set_Input>;
  pk_columns: Initiative_Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Poll_VotesArgs = {
  _inc?: Maybe<Initiative_Poll_Votes_Inc_Input>;
  _set?: Maybe<Initiative_Poll_Votes_Set_Input>;
  where: Initiative_Poll_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Poll_Votes_By_PkArgs = {
  _inc?: Maybe<Initiative_Poll_Votes_Inc_Input>;
  _set?: Maybe<Initiative_Poll_Votes_Set_Input>;
  pk_columns: Initiative_Poll_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_PollsArgs = {
  _inc?: Maybe<Initiative_Polls_Inc_Input>;
  _set?: Maybe<Initiative_Polls_Set_Input>;
  where: Initiative_Polls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Polls_By_PkArgs = {
  _inc?: Maybe<Initiative_Polls_Inc_Input>;
  _set?: Maybe<Initiative_Polls_Set_Input>;
  pk_columns: Initiative_Polls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_ProjectsArgs = {
  _inc?: Maybe<Initiative_Projects_Inc_Input>;
  _set?: Maybe<Initiative_Projects_Set_Input>;
  where: Initiative_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Projects_By_PkArgs = {
  _inc?: Maybe<Initiative_Projects_Inc_Input>;
  _set?: Maybe<Initiative_Projects_Set_Input>;
  pk_columns: Initiative_Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_TagsArgs = {
  _inc?: Maybe<Initiative_Tags_Inc_Input>;
  _set?: Maybe<Initiative_Tags_Set_Input>;
  where: Initiative_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Tags_By_PkArgs = {
  _inc?: Maybe<Initiative_Tags_Inc_Input>;
  _set?: Maybe<Initiative_Tags_Set_Input>;
  pk_columns: Initiative_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_TasksArgs = {
  _inc?: Maybe<Initiative_Tasks_Inc_Input>;
  _set?: Maybe<Initiative_Tasks_Set_Input>;
  where: Initiative_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Tasks_By_PkArgs = {
  _inc?: Maybe<Initiative_Tasks_Inc_Input>;
  _set?: Maybe<Initiative_Tasks_Set_Input>;
  pk_columns: Initiative_Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Thread_CommentsArgs = {
  _inc?: Maybe<Initiative_Thread_Comments_Inc_Input>;
  _set?: Maybe<Initiative_Thread_Comments_Set_Input>;
  where: Initiative_Thread_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Thread_Comments_By_PkArgs = {
  _inc?: Maybe<Initiative_Thread_Comments_Inc_Input>;
  _set?: Maybe<Initiative_Thread_Comments_Set_Input>;
  pk_columns: Initiative_Thread_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Thread_Post_ReactionsArgs = {
  _inc?: Maybe<Initiative_Thread_Post_Reactions_Inc_Input>;
  _set?: Maybe<Initiative_Thread_Post_Reactions_Set_Input>;
  where: Initiative_Thread_Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Thread_Post_Reactions_By_PkArgs = {
  _inc?: Maybe<Initiative_Thread_Post_Reactions_Inc_Input>;
  _set?: Maybe<Initiative_Thread_Post_Reactions_Set_Input>;
  pk_columns: Initiative_Thread_Post_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Thread_PostsArgs = {
  _inc?: Maybe<Initiative_Thread_Posts_Inc_Input>;
  _set?: Maybe<Initiative_Thread_Posts_Set_Input>;
  where: Initiative_Thread_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Thread_Posts_By_PkArgs = {
  _inc?: Maybe<Initiative_Thread_Posts_Inc_Input>;
  _set?: Maybe<Initiative_Thread_Posts_Set_Input>;
  pk_columns: Initiative_Thread_Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_VisitsArgs = {
  _inc?: Maybe<Initiative_Visits_Inc_Input>;
  _set?: Maybe<Initiative_Visits_Set_Input>;
  where: Initiative_Visits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Visits_By_PkArgs = {
  _inc?: Maybe<Initiative_Visits_Inc_Input>;
  _set?: Maybe<Initiative_Visits_Set_Input>;
  pk_columns: Initiative_Visits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_VolunteersArgs = {
  _inc?: Maybe<Initiative_Volunteers_Inc_Input>;
  _set?: Maybe<Initiative_Volunteers_Set_Input>;
  where: Initiative_Volunteers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Volunteers_By_PkArgs = {
  _inc?: Maybe<Initiative_Volunteers_Inc_Input>;
  _set?: Maybe<Initiative_Volunteers_Set_Input>;
  pk_columns: Initiative_Volunteers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InitiativesArgs = {
  _set?: Maybe<Initiatives_Set_Input>;
  where: Initiatives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiatives_By_PkArgs = {
  _set?: Maybe<Initiatives_Set_Input>;
  pk_columns: Initiatives_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TendersArgs = {
  _inc?: Maybe<Tenders_Inc_Input>;
  _set?: Maybe<Tenders_Set_Input>;
  where: Tenders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenders_By_PkArgs = {
  _inc?: Maybe<Tenders_Inc_Input>;
  _set?: Maybe<Tenders_Set_Input>;
  pk_columns: Tenders_Pk_Columns_Input;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "org_projects" */
export type Org_Projects = {
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** fetch data from the table: "initiative_projects" */
  initiative_projects: Array<Initiative_Projects>;
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  tenders: Array<Tenders>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "org_projects" */
export type Org_ProjectsInitiative_ProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


/** columns and relationships of "org_projects" */
export type Org_ProjectsTendersArgs = {
  distinct_on?: Maybe<Array<Tenders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tenders_Order_By>>;
  where?: Maybe<Tenders_Bool_Exp>;
};

/** order by aggregate values of table "org_projects" */
export type Org_Projects_Aggregate_Order_By = {
  avg?: Maybe<Org_Projects_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Projects_Max_Order_By>;
  min?: Maybe<Org_Projects_Min_Order_By>;
  stddev?: Maybe<Org_Projects_Stddev_Order_By>;
  stddev_pop?: Maybe<Org_Projects_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Org_Projects_Stddev_Samp_Order_By>;
  sum?: Maybe<Org_Projects_Sum_Order_By>;
  var_pop?: Maybe<Org_Projects_Var_Pop_Order_By>;
  var_samp?: Maybe<Org_Projects_Var_Samp_Order_By>;
  variance?: Maybe<Org_Projects_Variance_Order_By>;
};

/** order by avg() on columns of table "org_projects" */
export type Org_Projects_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "org_projects". All fields are combined with a logical 'AND'. */
export type Org_Projects_Bool_Exp = {
  _and?: Maybe<Array<Org_Projects_Bool_Exp>>;
  _not?: Maybe<Org_Projects_Bool_Exp>;
  _or?: Maybe<Array<Org_Projects_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative_projects?: Maybe<Initiative_Projects_Bool_Exp>;
  org?: Maybe<Orgs_Bool_Exp>;
  org_id?: Maybe<Uuid_Comparison_Exp>;
  tenders?: Maybe<Tenders_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "org_projects" */
export type Org_Projects_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "org_projects" */
export type Org_Projects_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "org_projects". */
export type Org_Projects_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  org?: Maybe<Orgs_Order_By>;
  org_id?: Maybe<Order_By>;
  tenders_aggregate?: Maybe<Tenders_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "org_projects" */
export enum Org_Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "org_projects" */
export type Org_Projects_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "org_projects" */
export type Org_Projects_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "org_projects" */
export type Org_Projects_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "org_projects" */
export type Org_Projects_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "org_projects" */
export type Org_Projects_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "org_projects" */
export type Org_Projects_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "org_projects" */
export type Org_Projects_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "org_tags" */
export type Org_Tags = {
  id: Scalars['Int'];
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  tags?: Maybe<Tags>;
};

/** order by aggregate values of table "org_tags" */
export type Org_Tags_Aggregate_Order_By = {
  avg?: Maybe<Org_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Tags_Max_Order_By>;
  min?: Maybe<Org_Tags_Min_Order_By>;
  stddev?: Maybe<Org_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Org_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Org_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Org_Tags_Sum_Order_By>;
  var_pop?: Maybe<Org_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Org_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Org_Tags_Variance_Order_By>;
};

/** order by avg() on columns of table "org_tags" */
export type Org_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "org_tags". All fields are combined with a logical 'AND'. */
export type Org_Tags_Bool_Exp = {
  _and?: Maybe<Array<Org_Tags_Bool_Exp>>;
  _not?: Maybe<Org_Tags_Bool_Exp>;
  _or?: Maybe<Array<Org_Tags_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  org?: Maybe<Orgs_Bool_Exp>;
  org_id?: Maybe<Uuid_Comparison_Exp>;
  tags?: Maybe<Tags_Bool_Exp>;
};

/** order by max() on columns of table "org_tags" */
export type Org_Tags_Max_Order_By = {
  id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "org_tags" */
export type Org_Tags_Min_Order_By = {
  id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "org_tags". */
export type Org_Tags_Order_By = {
  id?: Maybe<Order_By>;
  org?: Maybe<Orgs_Order_By>;
  org_id?: Maybe<Order_By>;
  tags?: Maybe<Tags_Order_By>;
};

/** select columns of table "org_tags" */
export enum Org_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'org_id'
}

/** order by stddev() on columns of table "org_tags" */
export type Org_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "org_tags" */
export type Org_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "org_tags" */
export type Org_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "org_tags" */
export type Org_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "org_tags" */
export type Org_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "org_tags" */
export type Org_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "org_tags" */
export type Org_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "orgs" */
export type Orgs = {
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['uuid'];
  /** fetch data from the table: "initiative_projects" */
  initiative_projects: Array<Initiative_Projects>;
  /** An array relationship */
  projects: Array<Org_Projects>;
  /** An array relationship */
  tags: Array<Org_Tags>;
  /** An array relationship */
  tenders: Array<Tenders>;
};


/** columns and relationships of "orgs" */
export type OrgsInitiative_ProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


/** columns and relationships of "orgs" */
export type OrgsProjectsArgs = {
  distinct_on?: Maybe<Array<Org_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Projects_Order_By>>;
  where?: Maybe<Org_Projects_Bool_Exp>;
};


/** columns and relationships of "orgs" */
export type OrgsTagsArgs = {
  distinct_on?: Maybe<Array<Org_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Tags_Order_By>>;
  where?: Maybe<Org_Tags_Bool_Exp>;
};


/** columns and relationships of "orgs" */
export type OrgsTendersArgs = {
  distinct_on?: Maybe<Array<Tenders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tenders_Order_By>>;
  where?: Maybe<Tenders_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "orgs". All fields are combined with a logical 'AND'. */
export type Orgs_Bool_Exp = {
  _and?: Maybe<Array<Orgs_Bool_Exp>>;
  _not?: Maybe<Orgs_Bool_Exp>;
  _or?: Maybe<Array<Orgs_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  initiative_projects?: Maybe<Initiative_Projects_Bool_Exp>;
  projects?: Maybe<Org_Projects_Bool_Exp>;
  tags?: Maybe<Org_Tags_Bool_Exp>;
  tenders?: Maybe<Tenders_Bool_Exp>;
};

/** Ordering options when selecting data from "orgs". */
export type Orgs_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  projects_aggregate?: Maybe<Org_Projects_Aggregate_Order_By>;
  tags_aggregate?: Maybe<Org_Tags_Aggregate_Order_By>;
  tenders_aggregate?: Maybe<Tenders_Aggregate_Order_By>;
};

/** select columns of table "orgs" */
export enum Orgs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

export type Query_Root = {
  /** An array relationship */
  files: Array<Files>;
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>;
  /** fetch data from the table: "i18n" */
  i18n: Array<I18n>;
  /** fetch data from the table: "i18n" using primary key columns */
  i18n_by_pk?: Maybe<I18n>;
  /** fetch data from the table: "i18n_categories" */
  i18n_categories: Array<I18n_Categories>;
  /** fetch data from the table: "i18n_categories" using primary key columns */
  i18n_categories_by_pk?: Maybe<I18n_Categories>;
  /** fetch data from the table: "initiative_donations" */
  initiative_donations: Array<Initiative_Donations>;
  /** fetch data from the table: "initiative_donations" using primary key columns */
  initiative_donations_by_pk?: Maybe<Initiative_Donations>;
  /** fetch data from the table: "initiative_edits" */
  initiative_edits: Array<Initiative_Edits>;
  /** fetch data from the table: "initiative_edits" using primary key columns */
  initiative_edits_by_pk?: Maybe<Initiative_Edits>;
  /** fetch data from the table: "initiative_expenses" */
  initiative_expenses: Array<Initiative_Expenses>;
  /** fetch data from the table: "initiative_expenses" using primary key columns */
  initiative_expenses_by_pk?: Maybe<Initiative_Expenses>;
  /** fetch data from the table: "initiative_info" */
  initiative_info: Array<Initiative_Info>;
  /** fetch data from the table: "initiative_info" using primary key columns */
  initiative_info_by_pk?: Maybe<Initiative_Info>;
  /** An array relationship */
  initiative_members: Array<Initiative_Members>;
  /** An aggregate relationship */
  initiative_members_aggregate: Initiative_Members_Aggregate;
  /** fetch data from the table: "initiative_members" using primary key columns */
  initiative_members_by_pk?: Maybe<Initiative_Members>;
  /** fetch data from the table: "initiative_poll_votes" */
  initiative_poll_votes: Array<Initiative_Poll_Votes>;
  /** fetch data from the table: "initiative_poll_votes" using primary key columns */
  initiative_poll_votes_by_pk?: Maybe<Initiative_Poll_Votes>;
  /** fetch data from the table: "initiative_polls" */
  initiative_polls: Array<Initiative_Polls>;
  /** fetch data from the table: "initiative_polls" using primary key columns */
  initiative_polls_by_pk?: Maybe<Initiative_Polls>;
  /** fetch data from the table: "initiative_projects" */
  initiative_projects: Array<Initiative_Projects>;
  /** fetch data from the table: "initiative_projects" using primary key columns */
  initiative_projects_by_pk?: Maybe<Initiative_Projects>;
  /** An array relationship */
  initiative_tags: Array<Initiative_Tags>;
  /** fetch data from the table: "initiative_tags" using primary key columns */
  initiative_tags_by_pk?: Maybe<Initiative_Tags>;
  /** fetch data from the table: "initiative_tasks" */
  initiative_tasks: Array<Initiative_Tasks>;
  /** fetch data from the table: "initiative_tasks" using primary key columns */
  initiative_tasks_by_pk?: Maybe<Initiative_Tasks>;
  /** fetch data from the table: "initiative_thread_comments" */
  initiative_thread_comments: Array<Initiative_Thread_Comments>;
  /** fetch data from the table: "initiative_thread_comments" using primary key columns */
  initiative_thread_comments_by_pk?: Maybe<Initiative_Thread_Comments>;
  /** fetch data from the table: "initiative_thread_post_reactions" */
  initiative_thread_post_reactions: Array<Initiative_Thread_Post_Reactions>;
  /** fetch data from the table: "initiative_thread_post_reactions" using primary key columns */
  initiative_thread_post_reactions_by_pk?: Maybe<Initiative_Thread_Post_Reactions>;
  /** fetch data from the table: "initiative_thread_posts" */
  initiative_thread_posts: Array<Initiative_Thread_Posts>;
  /** fetch data from the table: "initiative_thread_posts" using primary key columns */
  initiative_thread_posts_by_pk?: Maybe<Initiative_Thread_Posts>;
  /** fetch data from the table: "initiative_threads" */
  initiative_threads: Array<Initiative_Threads>;
  /** An array relationship */
  initiative_visits: Array<Initiative_Visits>;
  /** fetch data from the table: "initiative_visits" using primary key columns */
  initiative_visits_by_pk?: Maybe<Initiative_Visits>;
  /** An array relationship */
  initiative_volunteers: Array<Initiative_Volunteers>;
  /** fetch data from the table: "initiative_volunteers" using primary key columns */
  initiative_volunteers_by_pk?: Maybe<Initiative_Volunteers>;
  /** fetch data from the table: "initiatives" */
  initiatives: Array<Initiatives>;
  /** fetch data from the table: "initiatives" using primary key columns */
  initiatives_by_pk?: Maybe<Initiatives>;
  /** execute function "initiatives_nearby" which returns "initiatives" */
  initiatives_nearby: Array<Initiatives>;
  /** An array relationship */
  org_projects: Array<Org_Projects>;
  /** fetch data from the table: "org_projects" using primary key columns */
  org_projects_by_pk?: Maybe<Org_Projects>;
  /** An array relationship */
  org_tags: Array<Org_Tags>;
  /** fetch data from the table: "org_tags" using primary key columns */
  org_tags_by_pk?: Maybe<Org_Tags>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** An array relationship */
  tenders: Array<Tenders>;
  /** fetch data from the table: "tenders" using primary key columns */
  tenders_by_pk?: Maybe<Tenders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};


export type Query_RootFiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootI18nArgs = {
  distinct_on?: Maybe<Array<I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<I18n_Order_By>>;
  where?: Maybe<I18n_Bool_Exp>;
};


export type Query_RootI18n_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootI18n_CategoriesArgs = {
  distinct_on?: Maybe<Array<I18n_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<I18n_Categories_Order_By>>;
  where?: Maybe<I18n_Categories_Bool_Exp>;
};


export type Query_RootI18n_Categories_By_PkArgs = {
  category: Scalars['String'];
};


export type Query_RootInitiative_DonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


export type Query_RootInitiative_Donations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_EditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};


export type Query_RootInitiative_Edits_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_ExpensesArgs = {
  distinct_on?: Maybe<Array<Initiative_Expenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Expenses_Order_By>>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};


export type Query_RootInitiative_Expenses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_InfoArgs = {
  distinct_on?: Maybe<Array<Initiative_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Info_Order_By>>;
  where?: Maybe<Initiative_Info_Bool_Exp>;
};


export type Query_RootInitiative_Info_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_MembersArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


export type Query_RootInitiative_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


export type Query_RootInitiative_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_Poll_VotesArgs = {
  distinct_on?: Maybe<Array<Initiative_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Poll_Votes_Order_By>>;
  where?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};


export type Query_RootInitiative_Poll_Votes_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInitiative_PollsArgs = {
  distinct_on?: Maybe<Array<Initiative_Polls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Polls_Order_By>>;
  where?: Maybe<Initiative_Polls_Bool_Exp>;
};


export type Query_RootInitiative_Polls_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_ProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


export type Query_RootInitiative_Projects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_TagsArgs = {
  distinct_on?: Maybe<Array<Initiative_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tags_Order_By>>;
  where?: Maybe<Initiative_Tags_Bool_Exp>;
};


export type Query_RootInitiative_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_TasksArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


export type Query_RootInitiative_Tasks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_Thread_CommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Comments_Order_By>>;
  where?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
};


export type Query_RootInitiative_Thread_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_Thread_Post_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
};


export type Query_RootInitiative_Thread_Post_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInitiative_Thread_PostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Posts_Order_By>>;
  where?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
};


export type Query_RootInitiative_Thread_Posts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInitiative_ThreadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Threads_Order_By>>;
  where?: Maybe<Initiative_Threads_Bool_Exp>;
};


export type Query_RootInitiative_VisitsArgs = {
  distinct_on?: Maybe<Array<Initiative_Visits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Visits_Order_By>>;
  where?: Maybe<Initiative_Visits_Bool_Exp>;
};


export type Query_RootInitiative_Visits_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInitiative_VolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


export type Query_RootInitiative_Volunteers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiativesArgs = {
  distinct_on?: Maybe<Array<Initiatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiatives_Order_By>>;
  where?: Maybe<Initiatives_Bool_Exp>;
};


export type Query_RootInitiatives_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInitiatives_NearbyArgs = {
  args: Initiatives_Nearby_Args;
  distinct_on?: Maybe<Array<Initiatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiatives_Order_By>>;
  where?: Maybe<Initiatives_Bool_Exp>;
};


export type Query_RootOrg_ProjectsArgs = {
  distinct_on?: Maybe<Array<Org_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Projects_Order_By>>;
  where?: Maybe<Org_Projects_Bool_Exp>;
};


export type Query_RootOrg_Projects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrg_TagsArgs = {
  distinct_on?: Maybe<Array<Org_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Tags_Order_By>>;
  where?: Maybe<Org_Tags_Bool_Exp>;
};


export type Query_RootOrg_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrgsArgs = {
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
};


export type Query_RootOrgs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  tag: Scalars['String'];
};


export type Query_RootTendersArgs = {
  distinct_on?: Maybe<Array<Tenders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tenders_Order_By>>;
  where?: Maybe<Tenders_Bool_Exp>;
};


export type Query_RootTenders_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

export type Subscription_Root = {
  /** An array relationship */
  files: Array<Files>;
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>;
  /** fetch data from the table: "i18n" */
  i18n: Array<I18n>;
  /** fetch data from the table: "i18n" using primary key columns */
  i18n_by_pk?: Maybe<I18n>;
  /** fetch data from the table: "i18n_categories" */
  i18n_categories: Array<I18n_Categories>;
  /** fetch data from the table: "i18n_categories" using primary key columns */
  i18n_categories_by_pk?: Maybe<I18n_Categories>;
  /** fetch data from the table: "initiative_donations" */
  initiative_donations: Array<Initiative_Donations>;
  /** fetch data from the table: "initiative_donations" using primary key columns */
  initiative_donations_by_pk?: Maybe<Initiative_Donations>;
  /** fetch data from the table: "initiative_edits" */
  initiative_edits: Array<Initiative_Edits>;
  /** fetch data from the table: "initiative_edits" using primary key columns */
  initiative_edits_by_pk?: Maybe<Initiative_Edits>;
  /** fetch data from the table: "initiative_expenses" */
  initiative_expenses: Array<Initiative_Expenses>;
  /** fetch data from the table: "initiative_expenses" using primary key columns */
  initiative_expenses_by_pk?: Maybe<Initiative_Expenses>;
  /** fetch data from the table: "initiative_info" */
  initiative_info: Array<Initiative_Info>;
  /** fetch data from the table: "initiative_info" using primary key columns */
  initiative_info_by_pk?: Maybe<Initiative_Info>;
  /** An array relationship */
  initiative_members: Array<Initiative_Members>;
  /** An aggregate relationship */
  initiative_members_aggregate: Initiative_Members_Aggregate;
  /** fetch data from the table: "initiative_members" using primary key columns */
  initiative_members_by_pk?: Maybe<Initiative_Members>;
  /** fetch data from the table: "initiative_poll_votes" */
  initiative_poll_votes: Array<Initiative_Poll_Votes>;
  /** fetch data from the table: "initiative_poll_votes" using primary key columns */
  initiative_poll_votes_by_pk?: Maybe<Initiative_Poll_Votes>;
  /** fetch data from the table: "initiative_polls" */
  initiative_polls: Array<Initiative_Polls>;
  /** fetch data from the table: "initiative_polls" using primary key columns */
  initiative_polls_by_pk?: Maybe<Initiative_Polls>;
  /** fetch data from the table: "initiative_projects" */
  initiative_projects: Array<Initiative_Projects>;
  /** fetch data from the table: "initiative_projects" using primary key columns */
  initiative_projects_by_pk?: Maybe<Initiative_Projects>;
  /** An array relationship */
  initiative_tags: Array<Initiative_Tags>;
  /** fetch data from the table: "initiative_tags" using primary key columns */
  initiative_tags_by_pk?: Maybe<Initiative_Tags>;
  /** fetch data from the table: "initiative_tasks" */
  initiative_tasks: Array<Initiative_Tasks>;
  /** fetch data from the table: "initiative_tasks" using primary key columns */
  initiative_tasks_by_pk?: Maybe<Initiative_Tasks>;
  /** fetch data from the table: "initiative_thread_comments" */
  initiative_thread_comments: Array<Initiative_Thread_Comments>;
  /** fetch data from the table: "initiative_thread_comments" using primary key columns */
  initiative_thread_comments_by_pk?: Maybe<Initiative_Thread_Comments>;
  /** fetch data from the table: "initiative_thread_post_reactions" */
  initiative_thread_post_reactions: Array<Initiative_Thread_Post_Reactions>;
  /** fetch data from the table: "initiative_thread_post_reactions" using primary key columns */
  initiative_thread_post_reactions_by_pk?: Maybe<Initiative_Thread_Post_Reactions>;
  /** fetch data from the table: "initiative_thread_posts" */
  initiative_thread_posts: Array<Initiative_Thread_Posts>;
  /** fetch data from the table: "initiative_thread_posts" using primary key columns */
  initiative_thread_posts_by_pk?: Maybe<Initiative_Thread_Posts>;
  /** fetch data from the table: "initiative_threads" */
  initiative_threads: Array<Initiative_Threads>;
  /** An array relationship */
  initiative_visits: Array<Initiative_Visits>;
  /** fetch data from the table: "initiative_visits" using primary key columns */
  initiative_visits_by_pk?: Maybe<Initiative_Visits>;
  /** An array relationship */
  initiative_volunteers: Array<Initiative_Volunteers>;
  /** fetch data from the table: "initiative_volunteers" using primary key columns */
  initiative_volunteers_by_pk?: Maybe<Initiative_Volunteers>;
  /** fetch data from the table: "initiatives" */
  initiatives: Array<Initiatives>;
  /** fetch data from the table: "initiatives" using primary key columns */
  initiatives_by_pk?: Maybe<Initiatives>;
  /** execute function "initiatives_nearby" which returns "initiatives" */
  initiatives_nearby: Array<Initiatives>;
  /** An array relationship */
  org_projects: Array<Org_Projects>;
  /** fetch data from the table: "org_projects" using primary key columns */
  org_projects_by_pk?: Maybe<Org_Projects>;
  /** An array relationship */
  org_tags: Array<Org_Tags>;
  /** fetch data from the table: "org_tags" using primary key columns */
  org_tags_by_pk?: Maybe<Org_Tags>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** An array relationship */
  tenders: Array<Tenders>;
  /** fetch data from the table: "tenders" using primary key columns */
  tenders_by_pk?: Maybe<Tenders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootI18nArgs = {
  distinct_on?: Maybe<Array<I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<I18n_Order_By>>;
  where?: Maybe<I18n_Bool_Exp>;
};


export type Subscription_RootI18n_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootI18n_CategoriesArgs = {
  distinct_on?: Maybe<Array<I18n_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<I18n_Categories_Order_By>>;
  where?: Maybe<I18n_Categories_Bool_Exp>;
};


export type Subscription_RootI18n_Categories_By_PkArgs = {
  category: Scalars['String'];
};


export type Subscription_RootInitiative_DonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


export type Subscription_RootInitiative_Donations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_EditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};


export type Subscription_RootInitiative_Edits_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_ExpensesArgs = {
  distinct_on?: Maybe<Array<Initiative_Expenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Expenses_Order_By>>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};


export type Subscription_RootInitiative_Expenses_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_InfoArgs = {
  distinct_on?: Maybe<Array<Initiative_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Info_Order_By>>;
  where?: Maybe<Initiative_Info_Bool_Exp>;
};


export type Subscription_RootInitiative_Info_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_MembersArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


export type Subscription_RootInitiative_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


export type Subscription_RootInitiative_Members_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_Poll_VotesArgs = {
  distinct_on?: Maybe<Array<Initiative_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Poll_Votes_Order_By>>;
  where?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};


export type Subscription_RootInitiative_Poll_Votes_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootInitiative_PollsArgs = {
  distinct_on?: Maybe<Array<Initiative_Polls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Polls_Order_By>>;
  where?: Maybe<Initiative_Polls_Bool_Exp>;
};


export type Subscription_RootInitiative_Polls_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_ProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


export type Subscription_RootInitiative_Projects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_TagsArgs = {
  distinct_on?: Maybe<Array<Initiative_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tags_Order_By>>;
  where?: Maybe<Initiative_Tags_Bool_Exp>;
};


export type Subscription_RootInitiative_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_TasksArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


export type Subscription_RootInitiative_Tasks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_Thread_CommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Comments_Order_By>>;
  where?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
};


export type Subscription_RootInitiative_Thread_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_Thread_Post_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
};


export type Subscription_RootInitiative_Thread_Post_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootInitiative_Thread_PostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Posts_Order_By>>;
  where?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
};


export type Subscription_RootInitiative_Thread_Posts_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootInitiative_ThreadsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Threads_Order_By>>;
  where?: Maybe<Initiative_Threads_Bool_Exp>;
};


export type Subscription_RootInitiative_VisitsArgs = {
  distinct_on?: Maybe<Array<Initiative_Visits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Visits_Order_By>>;
  where?: Maybe<Initiative_Visits_Bool_Exp>;
};


export type Subscription_RootInitiative_Visits_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootInitiative_VolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


export type Subscription_RootInitiative_Volunteers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiativesArgs = {
  distinct_on?: Maybe<Array<Initiatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiatives_Order_By>>;
  where?: Maybe<Initiatives_Bool_Exp>;
};


export type Subscription_RootInitiatives_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInitiatives_NearbyArgs = {
  args: Initiatives_Nearby_Args;
  distinct_on?: Maybe<Array<Initiatives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiatives_Order_By>>;
  where?: Maybe<Initiatives_Bool_Exp>;
};


export type Subscription_RootOrg_ProjectsArgs = {
  distinct_on?: Maybe<Array<Org_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Projects_Order_By>>;
  where?: Maybe<Org_Projects_Bool_Exp>;
};


export type Subscription_RootOrg_Projects_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrg_TagsArgs = {
  distinct_on?: Maybe<Array<Org_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Tags_Order_By>>;
  where?: Maybe<Org_Tags_Bool_Exp>;
};


export type Subscription_RootOrg_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrgsArgs = {
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
};


export type Subscription_RootOrgs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  tag: Scalars['String'];
};


export type Subscription_RootTendersArgs = {
  distinct_on?: Maybe<Array<Tenders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tenders_Order_By>>;
  where?: Maybe<Tenders_Bool_Exp>;
};


export type Subscription_RootTenders_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "tags" */
export type Tags = {
  /** An array relationship */
  initiative_tags: Array<Initiative_Tags>;
  /** An array relationship */
  org_tags: Array<Org_Tags>;
  tag: Scalars['String'];
};


/** columns and relationships of "tags" */
export type TagsInitiative_TagsArgs = {
  distinct_on?: Maybe<Array<Initiative_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tags_Order_By>>;
  where?: Maybe<Initiative_Tags_Bool_Exp>;
};


/** columns and relationships of "tags" */
export type TagsOrg_TagsArgs = {
  distinct_on?: Maybe<Array<Org_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Tags_Order_By>>;
  where?: Maybe<Org_Tags_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: Maybe<Array<Tags_Bool_Exp>>;
  _not?: Maybe<Tags_Bool_Exp>;
  _or?: Maybe<Array<Tags_Bool_Exp>>;
  initiative_tags?: Maybe<Initiative_Tags_Bool_Exp>;
  org_tags?: Maybe<Org_Tags_Bool_Exp>;
  tag?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey'
}

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  initiative_tags?: Maybe<Initiative_Tags_Arr_Rel_Insert_Input>;
  tag?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tags_On_Conflict>;
};

/** on conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns?: Array<Tags_Update_Column>;
  where?: Maybe<Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  initiative_tags_aggregate?: Maybe<Initiative_Tags_Aggregate_Order_By>;
  org_tags_aggregate?: Maybe<Org_Tags_Aggregate_Order_By>;
  tag?: Maybe<Order_By>;
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Tag = 'tag'
}

/** placeholder for update columns of table "tags" (current role has no relevant permissions) */
export enum Tags_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** columns and relationships of "tenders" */
export type Tenders = {
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  org_project: Org_Projects;
  parent_project: Scalars['Int'];
  /** An array relationship */
  projects: Array<Initiative_Projects>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "tenders" */
export type TendersProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};

/** order by aggregate values of table "tenders" */
export type Tenders_Aggregate_Order_By = {
  avg?: Maybe<Tenders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tenders_Max_Order_By>;
  min?: Maybe<Tenders_Min_Order_By>;
  stddev?: Maybe<Tenders_Stddev_Order_By>;
  stddev_pop?: Maybe<Tenders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tenders_Stddev_Samp_Order_By>;
  sum?: Maybe<Tenders_Sum_Order_By>;
  var_pop?: Maybe<Tenders_Var_Pop_Order_By>;
  var_samp?: Maybe<Tenders_Var_Samp_Order_By>;
  variance?: Maybe<Tenders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tenders" */
export type Tenders_Arr_Rel_Insert_Input = {
  data: Array<Tenders_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Tenders_On_Conflict>;
};

/** order by avg() on columns of table "tenders" */
export type Tenders_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tenders". All fields are combined with a logical 'AND'. */
export type Tenders_Bool_Exp = {
  _and?: Maybe<Array<Tenders_Bool_Exp>>;
  _not?: Maybe<Tenders_Bool_Exp>;
  _or?: Maybe<Array<Tenders_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  org?: Maybe<Orgs_Bool_Exp>;
  org_id?: Maybe<Uuid_Comparison_Exp>;
  org_project?: Maybe<Org_Projects_Bool_Exp>;
  parent_project?: Maybe<Int_Comparison_Exp>;
  projects?: Maybe<Initiative_Projects_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tenders" */
export enum Tenders_Constraint {
  /** unique or primary key constraint */
  PkTendersId = 'pk_tenders_id'
}

/** input type for incrementing numeric columns in table "tenders" */
export type Tenders_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  parent_project?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tenders" */
export type Tenders_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  org_id?: Maybe<Scalars['uuid']>;
  parent_project?: Maybe<Scalars['Int']>;
  projects?: Maybe<Initiative_Projects_Arr_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tenders" */
export type Tenders_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "tenders" */
export type Tenders_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "tenders" */
export type Tenders_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenders>;
};

/** input type for inserting object relation for remote table "tenders" */
export type Tenders_Obj_Rel_Insert_Input = {
  data: Tenders_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tenders_On_Conflict>;
};

/** on conflict condition type for table "tenders" */
export type Tenders_On_Conflict = {
  constraint: Tenders_Constraint;
  update_columns?: Array<Tenders_Update_Column>;
  where?: Maybe<Tenders_Bool_Exp>;
};

/** Ordering options when selecting data from "tenders". */
export type Tenders_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  org?: Maybe<Orgs_Order_By>;
  org_id?: Maybe<Order_By>;
  org_project?: Maybe<Org_Projects_Order_By>;
  parent_project?: Maybe<Order_By>;
  projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: tenders */
export type Tenders_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "tenders" */
export enum Tenders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  ParentProject = 'parent_project',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tenders" */
export type Tenders_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  org_id?: Maybe<Scalars['uuid']>;
  parent_project?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "tenders" */
export type Tenders_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "tenders" */
export type Tenders_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "tenders" */
export type Tenders_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};

/** order by sum() on columns of table "tenders" */
export type Tenders_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};

/** update columns of table "tenders" */
export enum Tenders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  ParentProject = 'parent_project',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "tenders" */
export type Tenders_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "tenders" */
export type Tenders_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};

/** order by variance() on columns of table "tenders" */
export type Tenders_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parent_project?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  avatar_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  comments: Array<Initiative_Thread_Comments>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  donations: Array<Initiative_Donations>;
  /** An array relationship */
  edits: Array<Initiative_Edits>;
  /** An array relationship */
  expenses: Array<Initiative_Expenses>;
  /** An array relationship */
  files: Array<Files>;
  id: Scalars['uuid'];
  /** An array relationship */
  initiative_members: Array<Initiative_Members>;
  /** An aggregate relationship */
  initiative_members_aggregate: Initiative_Members_Aggregate;
  /** An array relationship */
  initiative_visits: Array<Initiative_Visits>;
  /** An array relationship */
  org_projects: Array<Org_Projects>;
  /** An array relationship */
  post_reactions: Array<Initiative_Thread_Post_Reactions>;
  /** An array relationship */
  posts: Array<Initiative_Thread_Posts>;
  /** An array relationship */
  projects: Array<Initiative_Projects>;
  /** An array relationship */
  tasks: Array<Initiative_Tasks>;
  /** An array relationship */
  tenders: Array<Tenders>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  volunteers: Array<Initiative_Volunteers>;
  /** An array relationship */
  votes: Array<Initiative_Poll_Votes>;
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Comments_Order_By>>;
  where?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersEditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersExpensesArgs = {
  distinct_on?: Maybe<Array<Initiative_Expenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Expenses_Order_By>>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInitiative_MembersArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInitiative_Members_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Members_Order_By>>;
  where?: Maybe<Initiative_Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInitiative_VisitsArgs = {
  distinct_on?: Maybe<Array<Initiative_Visits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Visits_Order_By>>;
  where?: Maybe<Initiative_Visits_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrg_ProjectsArgs = {
  distinct_on?: Maybe<Array<Org_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Projects_Order_By>>;
  where?: Maybe<Org_Projects_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Thread_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Thread_Posts_Order_By>>;
  where?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTasksArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTendersArgs = {
  distinct_on?: Maybe<Array<Tenders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tenders_Order_By>>;
  where?: Maybe<Tenders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVotesArgs = {
  distinct_on?: Maybe<Array<Initiative_Poll_Votes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Poll_Votes_Order_By>>;
  where?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  comments?: Maybe<Initiative_Thread_Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  donations?: Maybe<Initiative_Donations_Bool_Exp>;
  edits?: Maybe<Initiative_Edits_Bool_Exp>;
  expenses?: Maybe<Initiative_Expenses_Bool_Exp>;
  files?: Maybe<Files_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  initiative_members?: Maybe<Initiative_Members_Bool_Exp>;
  initiative_visits?: Maybe<Initiative_Visits_Bool_Exp>;
  org_projects?: Maybe<Org_Projects_Bool_Exp>;
  post_reactions?: Maybe<Initiative_Thread_Post_Reactions_Bool_Exp>;
  posts?: Maybe<Initiative_Thread_Posts_Bool_Exp>;
  projects?: Maybe<Initiative_Projects_Bool_Exp>;
  tasks?: Maybe<Initiative_Tasks_Bool_Exp>;
  tenders?: Maybe<Tenders_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  volunteers?: Maybe<Initiative_Volunteers_Bool_Exp>;
  votes?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Initiative_Thread_Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  donations_aggregate?: Maybe<Initiative_Donations_Aggregate_Order_By>;
  edits_aggregate?: Maybe<Initiative_Edits_Aggregate_Order_By>;
  expenses_aggregate?: Maybe<Initiative_Expenses_Aggregate_Order_By>;
  files_aggregate?: Maybe<Files_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  initiative_members_aggregate?: Maybe<Initiative_Members_Aggregate_Order_By>;
  initiative_visits_aggregate?: Maybe<Initiative_Visits_Aggregate_Order_By>;
  org_projects_aggregate?: Maybe<Org_Projects_Aggregate_Order_By>;
  post_reactions_aggregate?: Maybe<Initiative_Thread_Post_Reactions_Aggregate_Order_By>;
  posts_aggregate?: Maybe<Initiative_Thread_Posts_Aggregate_Order_By>;
  projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  tasks_aggregate?: Maybe<Initiative_Tasks_Aggregate_Order_By>;
  tenders_aggregate?: Maybe<Tenders_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  volunteers_aggregate?: Maybe<Initiative_Volunteers_Aggregate_Order_By>;
  votes_aggregate?: Maybe<Initiative_Poll_Votes_Aggregate_Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AddInitiativeMutationVariables = Exact<{
  geom: Scalars['geometry'];
  name: Scalars['String'];
  description: Scalars['String'];
  user_id: Scalars['uuid'];
  problem?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['String']>;
  context?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
}>;


export type AddInitiativeMutation = { insert_initiatives_one?: Maybe<Pick<Initiatives, 'created_at' | 'description' | 'geom' | 'id' | 'image' | 'name'>> };

export type DeleteInitiativeMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
}>;


export type DeleteInitiativeMutation = { delete_initiatives_by_pk?: Maybe<Pick<Initiatives, 'id'>> };

export type AddInitiativePostMutationVariables = Exact<{
  thread_id?: Maybe<Scalars['Int']>;
  user_id: Scalars['uuid'];
  post?: Maybe<Scalars['String']>;
}>;


export type AddInitiativePostMutation = { insert_initiative_thread_posts_one?: Maybe<Pick<Initiative_Thread_Posts, 'id'>> };

export type DeleteInitiativeMemberMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type DeleteInitiativeMemberMutation = { delete_initiative_members?: Maybe<(
    Pick<Initiative_Members_Mutation_Response, 'affected_rows'>
    & { returning: Array<Pick<Initiative_Members, 'initiative_id' | 'user_id'>> }
  )> };

export type AddInitiativeMemberMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
  contractor?: Maybe<Scalars['Boolean']>;
  donator?: Maybe<Scalars['Boolean']>;
  volunteer?: Maybe<Scalars['Boolean']>;
}>;


export type AddInitiativeMemberMutation = { insert_initiative_members_one?: Maybe<Pick<Initiative_Members, 'user_id' | 'initiative_id'>> };

export type AddInitiativeVisitMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type AddInitiativeVisitMutation = { insert_initiative_visits_one?: Maybe<{ initiative: Pick<Initiatives, 'id'> }> };

export type InsertFileMutationVariables = Exact<{
  file: Files_Insert_Input;
}>;


export type InsertFileMutation = { insert_files_one?: Maybe<Pick<Files, 'id'>> };

export type DeleteFilesMutationVariables = Exact<{
  where: Files_Bool_Exp;
}>;


export type DeleteFilesMutation = { delete_files?: Maybe<Pick<Files_Mutation_Response, 'affected_rows'>> };

export type InitiativeFieldsFragment = (
  Pick<Initiatives, 'geom' | 'name' | 'id' | 'image' | 'description' | 'created_at'>
  & { members: Array<Pick<Initiative_Members, 'user_id'>> }
);

export type InitiativesNearbyQueryVariables = Exact<{
  location: Scalars['geometry'];
  limit?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  user_id?: Maybe<Scalars['uuid']>;
  own?: Maybe<Scalars['Boolean']>;
}>;


export type InitiativesNearbyQuery = { initiatives_nearby: Array<InitiativeFieldsFragment> };

export type MyInitiativesNearbyQueryVariables = Exact<{
  location: Scalars['geometry'];
  limit?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  user_id: Scalars['uuid'];
  own?: Maybe<Scalars['Boolean']>;
}>;


export type MyInitiativesNearbyQuery = { initiatives_nearby: Array<InitiativeFieldsFragment> };

export type InitiativesLastVisitedQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['uuid'];
}>;


export type InitiativesLastVisitedQuery = { initiative_visits: Array<(
    Pick<Initiative_Visits, 'visited_at'>
    & { initiative: InitiativeFieldsFragment }
  )> };

export type InitiativeQueryVariables = Exact<{
  initiative_id: Scalars['uuid'];
}>;


export type InitiativeQuery = { initiatives_by_pk?: Maybe<InitiativeFieldsFragment> };

export type MyInitiativesQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type MyInitiativesQuery = { initiatives: Array<InitiativeFieldsFragment> };

export type InitiativeInfoQueryVariables = Exact<{
  initiative_id: Scalars['uuid'];
}>;


export type InitiativeInfoQuery = { initiative_info: Array<Pick<Initiative_Info, 'context' | 'goal' | 'problem'>> };

export type InitiativePostsQueryVariables = Exact<{
  initiative_id: Scalars['uuid'];
}>;


export type InitiativePostsQuery = { initiative_thread_posts: Array<(
    Pick<Initiative_Thread_Posts, 'id' | 'thread_id' | 'created_at' | 'post'>
    & { comments: Array<Pick<Initiative_Thread_Comments, 'comment' | 'created_at'>>, user?: Maybe<Pick<Users, 'avatar_url' | 'display_name'>> }
  )> };

export type InitiativePostCommentsQueryVariables = Exact<{
  message_id: Scalars['Int'];
}>;


export type InitiativePostCommentsQuery = { initiative_thread_comments: Array<(
    Pick<Initiative_Thread_Comments, 'created_at' | 'comment'>
    & { user?: Maybe<Pick<Users, 'avatar_url' | 'display_name'>> }
  )> };

export type UserQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type UserQuery = { users_by_pk?: Maybe<Pick<Users, 'id' | 'avatar_url' | 'created_at' | 'display_name'>> };

export type FilesQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type FilesQuery = { files: Array<Pick<Files, 'id' | 'created_at' | 'file_path' | 'downloadable_url'>> };

export type S_GetFilesSubscriptionVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type S_GetFilesSubscription = { files: Array<Pick<Files, 'id' | 'created_at' | 'file_path' | 'downloadable_url'>> };

export type DictionaryQueryVariables = Exact<{
  en?: Maybe<Scalars['Boolean']>;
  uk?: Maybe<Scalars['Boolean']>;
  fr?: Maybe<Scalars['Boolean']>;
}>;


export type DictionaryQuery = { i18n: Array<MakeOptional<Pick<I18n, 'key' | 'en' | 'uk' | 'fr'>, 'en' | 'uk' | 'fr'>> };

export const InitiativeFieldsFragmentDoc = gql`
    fragment InitiativeFields on initiatives {
  geom
  name
  id
  image
  description
  created_at
  members {
    user_id
  }
}
    `;
export const AddInitiativeDocument = gql`
    mutation AddInitiative($geom: geometry!, $name: String!, $description: String!, $user_id: uuid!, $problem: String = "", $goal: String = "", $context: String = "", $image: String = "") {
  insert_initiatives_one(
    object: {description: $description, geom: $geom, image: $image, members: {data: {initiator: true, user_id: $user_id}}, infos: {data: {context: $context, goal: $goal, problem: $problem}}, visits: {data: {user_id: $user_id}}, name: $name}
  ) {
    created_at
    description
    geom
    id
    image
    name
  }
}
    `;
export type AddInitiativeMutationFn = Apollo.MutationFunction<AddInitiativeMutation, AddInitiativeMutationVariables>;

/**
 * __useAddInitiativeMutation__
 *
 * To run a mutation, you first call `useAddInitiativeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddInitiativeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addInitiativeMutation, { data, loading, error }] = useAddInitiativeMutation({
 *   variables: {
 *      geom: // value for 'geom'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      user_id: // value for 'user_id'
 *      problem: // value for 'problem'
 *      goal: // value for 'goal'
 *      context: // value for 'context'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useAddInitiativeMutation(baseOptions?: Apollo.MutationHookOptions<AddInitiativeMutation, AddInitiativeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddInitiativeMutation, AddInitiativeMutationVariables>(AddInitiativeDocument, options);
      }
export type AddInitiativeMutationHookResult = ReturnType<typeof useAddInitiativeMutation>;
export type AddInitiativeMutationResult = Apollo.MutationResult<AddInitiativeMutation>;
export type AddInitiativeMutationOptions = Apollo.BaseMutationOptions<AddInitiativeMutation, AddInitiativeMutationVariables>;
export const DeleteInitiativeDocument = gql`
    mutation DeleteInitiative($initiative_id: uuid!) {
  delete_initiatives_by_pk(id: $initiative_id) {
    id
  }
}
    `;
export type DeleteInitiativeMutationFn = Apollo.MutationFunction<DeleteInitiativeMutation, DeleteInitiativeMutationVariables>;

/**
 * __useDeleteInitiativeMutation__
 *
 * To run a mutation, you first call `useDeleteInitiativeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInitiativeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInitiativeMutation, { data, loading, error }] = useDeleteInitiativeMutation({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *   },
 * });
 */
export function useDeleteInitiativeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInitiativeMutation, DeleteInitiativeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInitiativeMutation, DeleteInitiativeMutationVariables>(DeleteInitiativeDocument, options);
      }
export type DeleteInitiativeMutationHookResult = ReturnType<typeof useDeleteInitiativeMutation>;
export type DeleteInitiativeMutationResult = Apollo.MutationResult<DeleteInitiativeMutation>;
export type DeleteInitiativeMutationOptions = Apollo.BaseMutationOptions<DeleteInitiativeMutation, DeleteInitiativeMutationVariables>;
export const AddInitiativePostDocument = gql`
    mutation AddInitiativePost($thread_id: Int, $user_id: uuid!, $post: String) {
  insert_initiative_thread_posts_one(
    object: {user_id: $user_id, post: $post, thread_id: $thread_id}
  ) {
    id
  }
}
    `;
export type AddInitiativePostMutationFn = Apollo.MutationFunction<AddInitiativePostMutation, AddInitiativePostMutationVariables>;

/**
 * __useAddInitiativePostMutation__
 *
 * To run a mutation, you first call `useAddInitiativePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddInitiativePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addInitiativePostMutation, { data, loading, error }] = useAddInitiativePostMutation({
 *   variables: {
 *      thread_id: // value for 'thread_id'
 *      user_id: // value for 'user_id'
 *      post: // value for 'post'
 *   },
 * });
 */
export function useAddInitiativePostMutation(baseOptions?: Apollo.MutationHookOptions<AddInitiativePostMutation, AddInitiativePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddInitiativePostMutation, AddInitiativePostMutationVariables>(AddInitiativePostDocument, options);
      }
export type AddInitiativePostMutationHookResult = ReturnType<typeof useAddInitiativePostMutation>;
export type AddInitiativePostMutationResult = Apollo.MutationResult<AddInitiativePostMutation>;
export type AddInitiativePostMutationOptions = Apollo.BaseMutationOptions<AddInitiativePostMutation, AddInitiativePostMutationVariables>;
export const DeleteInitiativeMemberDocument = gql`
    mutation DeleteInitiativeMember($initiative_id: uuid!, $user_id: uuid!) {
  delete_initiative_members(
    where: {initiative_id: {_eq: $initiative_id}, user_id: {_eq: $user_id}}
  ) {
    affected_rows
    returning {
      initiative_id
      user_id
    }
  }
}
    `;
export type DeleteInitiativeMemberMutationFn = Apollo.MutationFunction<DeleteInitiativeMemberMutation, DeleteInitiativeMemberMutationVariables>;

/**
 * __useDeleteInitiativeMemberMutation__
 *
 * To run a mutation, you first call `useDeleteInitiativeMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInitiativeMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInitiativeMemberMutation, { data, loading, error }] = useDeleteInitiativeMemberMutation({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useDeleteInitiativeMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInitiativeMemberMutation, DeleteInitiativeMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInitiativeMemberMutation, DeleteInitiativeMemberMutationVariables>(DeleteInitiativeMemberDocument, options);
      }
export type DeleteInitiativeMemberMutationHookResult = ReturnType<typeof useDeleteInitiativeMemberMutation>;
export type DeleteInitiativeMemberMutationResult = Apollo.MutationResult<DeleteInitiativeMemberMutation>;
export type DeleteInitiativeMemberMutationOptions = Apollo.BaseMutationOptions<DeleteInitiativeMemberMutation, DeleteInitiativeMemberMutationVariables>;
export const AddInitiativeMemberDocument = gql`
    mutation AddInitiativeMember($initiative_id: uuid!, $user_id: uuid!, $contractor: Boolean, $donator: Boolean, $volunteer: Boolean) {
  insert_initiative_members_one(
    object: {initiative_id: $initiative_id, user_id: $user_id, contractor: $contractor, donator: $donator, volunteer: $volunteer}
  ) {
    user_id
    initiative_id
  }
}
    `;
export type AddInitiativeMemberMutationFn = Apollo.MutationFunction<AddInitiativeMemberMutation, AddInitiativeMemberMutationVariables>;

/**
 * __useAddInitiativeMemberMutation__
 *
 * To run a mutation, you first call `useAddInitiativeMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddInitiativeMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addInitiativeMemberMutation, { data, loading, error }] = useAddInitiativeMemberMutation({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *      user_id: // value for 'user_id'
 *      contractor: // value for 'contractor'
 *      donator: // value for 'donator'
 *      volunteer: // value for 'volunteer'
 *   },
 * });
 */
export function useAddInitiativeMemberMutation(baseOptions?: Apollo.MutationHookOptions<AddInitiativeMemberMutation, AddInitiativeMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddInitiativeMemberMutation, AddInitiativeMemberMutationVariables>(AddInitiativeMemberDocument, options);
      }
export type AddInitiativeMemberMutationHookResult = ReturnType<typeof useAddInitiativeMemberMutation>;
export type AddInitiativeMemberMutationResult = Apollo.MutationResult<AddInitiativeMemberMutation>;
export type AddInitiativeMemberMutationOptions = Apollo.BaseMutationOptions<AddInitiativeMemberMutation, AddInitiativeMemberMutationVariables>;
export const AddInitiativeVisitDocument = gql`
    mutation AddInitiativeVisit($initiative_id: uuid!, $user_id: uuid!) {
  insert_initiative_visits_one(
    object: {initiative_id: $initiative_id, user_id: $user_id}
  ) {
    initiative {
      id
    }
  }
}
    `;
export type AddInitiativeVisitMutationFn = Apollo.MutationFunction<AddInitiativeVisitMutation, AddInitiativeVisitMutationVariables>;

/**
 * __useAddInitiativeVisitMutation__
 *
 * To run a mutation, you first call `useAddInitiativeVisitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddInitiativeVisitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addInitiativeVisitMutation, { data, loading, error }] = useAddInitiativeVisitMutation({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddInitiativeVisitMutation(baseOptions?: Apollo.MutationHookOptions<AddInitiativeVisitMutation, AddInitiativeVisitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddInitiativeVisitMutation, AddInitiativeVisitMutationVariables>(AddInitiativeVisitDocument, options);
      }
export type AddInitiativeVisitMutationHookResult = ReturnType<typeof useAddInitiativeVisitMutation>;
export type AddInitiativeVisitMutationResult = Apollo.MutationResult<AddInitiativeVisitMutation>;
export type AddInitiativeVisitMutationOptions = Apollo.BaseMutationOptions<AddInitiativeVisitMutation, AddInitiativeVisitMutationVariables>;
export const InsertFileDocument = gql`
    mutation insertFile($file: files_insert_input!) {
  insert_files_one(object: $file) {
    id
  }
}
    `;
export type InsertFileMutationFn = Apollo.MutationFunction<InsertFileMutation, InsertFileMutationVariables>;

/**
 * __useInsertFileMutation__
 *
 * To run a mutation, you first call `useInsertFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFileMutation, { data, loading, error }] = useInsertFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useInsertFileMutation(baseOptions?: Apollo.MutationHookOptions<InsertFileMutation, InsertFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertFileMutation, InsertFileMutationVariables>(InsertFileDocument, options);
      }
export type InsertFileMutationHookResult = ReturnType<typeof useInsertFileMutation>;
export type InsertFileMutationResult = Apollo.MutationResult<InsertFileMutation>;
export type InsertFileMutationOptions = Apollo.BaseMutationOptions<InsertFileMutation, InsertFileMutationVariables>;
export const DeleteFilesDocument = gql`
    mutation deleteFiles($where: files_bool_exp!) {
  delete_files(where: $where) {
    affected_rows
  }
}
    `;
export type DeleteFilesMutationFn = Apollo.MutationFunction<DeleteFilesMutation, DeleteFilesMutationVariables>;

/**
 * __useDeleteFilesMutation__
 *
 * To run a mutation, you first call `useDeleteFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFilesMutation, { data, loading, error }] = useDeleteFilesMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteFilesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFilesMutation, DeleteFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFilesMutation, DeleteFilesMutationVariables>(DeleteFilesDocument, options);
      }
export type DeleteFilesMutationHookResult = ReturnType<typeof useDeleteFilesMutation>;
export type DeleteFilesMutationResult = Apollo.MutationResult<DeleteFilesMutation>;
export type DeleteFilesMutationOptions = Apollo.BaseMutationOptions<DeleteFilesMutation, DeleteFilesMutationVariables>;
export const InitiativesNearbyDocument = gql`
    query InitiativesNearby($location: geometry!, $limit: Int = 20, $max_date: timestamptz = "2999-01-01T00:00:00.000Z", $max_distance: float8 = 20037500.0, $min_date: timestamptz = "1970-01-01T00:00:00.000Z", $min_distance: float8 = 0.0, $user_id: uuid, $own: Boolean = false) {
  initiatives_nearby(
    args: {location: $location, own: $own, user_id: $user_id, max_date: $max_date, limit: $limit, max_distance: $max_distance, min_date: $min_date, min_distance: $min_distance}
  ) {
    ...InitiativeFields
  }
}
    ${InitiativeFieldsFragmentDoc}`;

/**
 * __useInitiativesNearbyQuery__
 *
 * To run a query within a React component, call `useInitiativesNearbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativesNearbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativesNearbyQuery({
 *   variables: {
 *      location: // value for 'location'
 *      limit: // value for 'limit'
 *      max_date: // value for 'max_date'
 *      max_distance: // value for 'max_distance'
 *      min_date: // value for 'min_date'
 *      min_distance: // value for 'min_distance'
 *      user_id: // value for 'user_id'
 *      own: // value for 'own'
 *   },
 * });
 */
export function useInitiativesNearbyQuery(baseOptions: Apollo.QueryHookOptions<InitiativesNearbyQuery, InitiativesNearbyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativesNearbyQuery, InitiativesNearbyQueryVariables>(InitiativesNearbyDocument, options);
      }
export function useInitiativesNearbyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativesNearbyQuery, InitiativesNearbyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativesNearbyQuery, InitiativesNearbyQueryVariables>(InitiativesNearbyDocument, options);
        }
export type InitiativesNearbyQueryHookResult = ReturnType<typeof useInitiativesNearbyQuery>;
export type InitiativesNearbyLazyQueryHookResult = ReturnType<typeof useInitiativesNearbyLazyQuery>;
export type InitiativesNearbyQueryResult = Apollo.QueryResult<InitiativesNearbyQuery, InitiativesNearbyQueryVariables>;
export const MyInitiativesNearbyDocument = gql`
    query MyInitiativesNearby($location: geometry!, $limit: Int = 20, $max_date: timestamptz = "2999-01-01T00:00:00.000Z", $max_distance: float8 = 20037500.0, $min_date: timestamptz = "1970-01-01T00:00:00.000Z", $min_distance: float8 = 0.0, $user_id: uuid!, $own: Boolean = true) {
  initiatives_nearby(
    args: {location: $location, own: $own, user_id: $user_id, max_date: $max_date, limit: $limit, max_distance: $max_distance, min_date: $min_date, min_distance: $min_distance}
  ) {
    ...InitiativeFields
  }
}
    ${InitiativeFieldsFragmentDoc}`;

/**
 * __useMyInitiativesNearbyQuery__
 *
 * To run a query within a React component, call `useMyInitiativesNearbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInitiativesNearbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInitiativesNearbyQuery({
 *   variables: {
 *      location: // value for 'location'
 *      limit: // value for 'limit'
 *      max_date: // value for 'max_date'
 *      max_distance: // value for 'max_distance'
 *      min_date: // value for 'min_date'
 *      min_distance: // value for 'min_distance'
 *      user_id: // value for 'user_id'
 *      own: // value for 'own'
 *   },
 * });
 */
export function useMyInitiativesNearbyQuery(baseOptions: Apollo.QueryHookOptions<MyInitiativesNearbyQuery, MyInitiativesNearbyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyInitiativesNearbyQuery, MyInitiativesNearbyQueryVariables>(MyInitiativesNearbyDocument, options);
      }
export function useMyInitiativesNearbyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyInitiativesNearbyQuery, MyInitiativesNearbyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyInitiativesNearbyQuery, MyInitiativesNearbyQueryVariables>(MyInitiativesNearbyDocument, options);
        }
export type MyInitiativesNearbyQueryHookResult = ReturnType<typeof useMyInitiativesNearbyQuery>;
export type MyInitiativesNearbyLazyQueryHookResult = ReturnType<typeof useMyInitiativesNearbyLazyQuery>;
export type MyInitiativesNearbyQueryResult = Apollo.QueryResult<MyInitiativesNearbyQuery, MyInitiativesNearbyQueryVariables>;
export const InitiativesLastVisitedDocument = gql`
    query InitiativesLastVisited($limit: Int = 20, $max_date: timestamptz = "2999-01-01T00:00:00.000Z", $min_date: timestamptz = "1970-01-01T00:00:00.000Z", $user_id: uuid!) {
  initiative_visits(
    where: {_and: [{user_id: {_eq: $user_id}}, {visited_at: {_gt: $min_date}}, {visited_at: {_lte: $max_date}}]}
    order_by: {visited_at: desc}
    limit: $limit
  ) {
    initiative {
      ...InitiativeFields
    }
    visited_at
  }
}
    ${InitiativeFieldsFragmentDoc}`;

/**
 * __useInitiativesLastVisitedQuery__
 *
 * To run a query within a React component, call `useInitiativesLastVisitedQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativesLastVisitedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativesLastVisitedQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      max_date: // value for 'max_date'
 *      min_date: // value for 'min_date'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useInitiativesLastVisitedQuery(baseOptions: Apollo.QueryHookOptions<InitiativesLastVisitedQuery, InitiativesLastVisitedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativesLastVisitedQuery, InitiativesLastVisitedQueryVariables>(InitiativesLastVisitedDocument, options);
      }
export function useInitiativesLastVisitedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativesLastVisitedQuery, InitiativesLastVisitedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativesLastVisitedQuery, InitiativesLastVisitedQueryVariables>(InitiativesLastVisitedDocument, options);
        }
export type InitiativesLastVisitedQueryHookResult = ReturnType<typeof useInitiativesLastVisitedQuery>;
export type InitiativesLastVisitedLazyQueryHookResult = ReturnType<typeof useInitiativesLastVisitedLazyQuery>;
export type InitiativesLastVisitedQueryResult = Apollo.QueryResult<InitiativesLastVisitedQuery, InitiativesLastVisitedQueryVariables>;
export const InitiativeDocument = gql`
    query Initiative($initiative_id: uuid!) {
  initiatives_by_pk(id: $initiative_id) {
    ...InitiativeFields
  }
}
    ${InitiativeFieldsFragmentDoc}`;

/**
 * __useInitiativeQuery__
 *
 * To run a query within a React component, call `useInitiativeQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativeQuery({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *   },
 * });
 */
export function useInitiativeQuery(baseOptions: Apollo.QueryHookOptions<InitiativeQuery, InitiativeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativeQuery, InitiativeQueryVariables>(InitiativeDocument, options);
      }
export function useInitiativeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativeQuery, InitiativeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativeQuery, InitiativeQueryVariables>(InitiativeDocument, options);
        }
export type InitiativeQueryHookResult = ReturnType<typeof useInitiativeQuery>;
export type InitiativeLazyQueryHookResult = ReturnType<typeof useInitiativeLazyQuery>;
export type InitiativeQueryResult = Apollo.QueryResult<InitiativeQuery, InitiativeQueryVariables>;
export const MyInitiativesDocument = gql`
    query MyInitiatives($user_id: uuid!) {
  initiatives(where: {members: {user: {id: {_eq: $user_id}}}}) {
    ...InitiativeFields
  }
}
    ${InitiativeFieldsFragmentDoc}`;

/**
 * __useMyInitiativesQuery__
 *
 * To run a query within a React component, call `useMyInitiativesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInitiativesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInitiativesQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useMyInitiativesQuery(baseOptions: Apollo.QueryHookOptions<MyInitiativesQuery, MyInitiativesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyInitiativesQuery, MyInitiativesQueryVariables>(MyInitiativesDocument, options);
      }
export function useMyInitiativesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyInitiativesQuery, MyInitiativesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyInitiativesQuery, MyInitiativesQueryVariables>(MyInitiativesDocument, options);
        }
export type MyInitiativesQueryHookResult = ReturnType<typeof useMyInitiativesQuery>;
export type MyInitiativesLazyQueryHookResult = ReturnType<typeof useMyInitiativesLazyQuery>;
export type MyInitiativesQueryResult = Apollo.QueryResult<MyInitiativesQuery, MyInitiativesQueryVariables>;
export const InitiativeInfoDocument = gql`
    query InitiativeInfo($initiative_id: uuid!) {
  initiative_info(where: {initiative: {id: {_eq: $initiative_id}}}) {
    context
    goal
    problem
  }
}
    `;

/**
 * __useInitiativeInfoQuery__
 *
 * To run a query within a React component, call `useInitiativeInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativeInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativeInfoQuery({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *   },
 * });
 */
export function useInitiativeInfoQuery(baseOptions: Apollo.QueryHookOptions<InitiativeInfoQuery, InitiativeInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativeInfoQuery, InitiativeInfoQueryVariables>(InitiativeInfoDocument, options);
      }
export function useInitiativeInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativeInfoQuery, InitiativeInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativeInfoQuery, InitiativeInfoQueryVariables>(InitiativeInfoDocument, options);
        }
export type InitiativeInfoQueryHookResult = ReturnType<typeof useInitiativeInfoQuery>;
export type InitiativeInfoLazyQueryHookResult = ReturnType<typeof useInitiativeInfoLazyQuery>;
export type InitiativeInfoQueryResult = Apollo.QueryResult<InitiativeInfoQuery, InitiativeInfoQueryVariables>;
export const InitiativePostsDocument = gql`
    query InitiativePosts($initiative_id: uuid!) {
  initiative_thread_posts(
    where: {thread: {initiative: {id: {_eq: $initiative_id}}}}
  ) {
    id
    thread_id
    created_at
    post
    comments {
      comment
      created_at
    }
    user {
      avatar_url
      display_name
    }
  }
}
    `;

/**
 * __useInitiativePostsQuery__
 *
 * To run a query within a React component, call `useInitiativePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativePostsQuery({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *   },
 * });
 */
export function useInitiativePostsQuery(baseOptions: Apollo.QueryHookOptions<InitiativePostsQuery, InitiativePostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativePostsQuery, InitiativePostsQueryVariables>(InitiativePostsDocument, options);
      }
export function useInitiativePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativePostsQuery, InitiativePostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativePostsQuery, InitiativePostsQueryVariables>(InitiativePostsDocument, options);
        }
export type InitiativePostsQueryHookResult = ReturnType<typeof useInitiativePostsQuery>;
export type InitiativePostsLazyQueryHookResult = ReturnType<typeof useInitiativePostsLazyQuery>;
export type InitiativePostsQueryResult = Apollo.QueryResult<InitiativePostsQuery, InitiativePostsQueryVariables>;
export const InitiativePostCommentsDocument = gql`
    query InitiativePostComments($message_id: Int!) {
  initiative_thread_comments(where: {message_id: {_eq: $message_id}}) {
    created_at
    comment
    user {
      avatar_url
      display_name
    }
  }
}
    `;

/**
 * __useInitiativePostCommentsQuery__
 *
 * To run a query within a React component, call `useInitiativePostCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativePostCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativePostCommentsQuery({
 *   variables: {
 *      message_id: // value for 'message_id'
 *   },
 * });
 */
export function useInitiativePostCommentsQuery(baseOptions: Apollo.QueryHookOptions<InitiativePostCommentsQuery, InitiativePostCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativePostCommentsQuery, InitiativePostCommentsQueryVariables>(InitiativePostCommentsDocument, options);
      }
export function useInitiativePostCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativePostCommentsQuery, InitiativePostCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativePostCommentsQuery, InitiativePostCommentsQueryVariables>(InitiativePostCommentsDocument, options);
        }
export type InitiativePostCommentsQueryHookResult = ReturnType<typeof useInitiativePostCommentsQuery>;
export type InitiativePostCommentsLazyQueryHookResult = ReturnType<typeof useInitiativePostCommentsLazyQuery>;
export type InitiativePostCommentsQueryResult = Apollo.QueryResult<InitiativePostCommentsQuery, InitiativePostCommentsQueryVariables>;
export const UserDocument = gql`
    query User($user_id: uuid!) {
  users_by_pk(id: $user_id) {
    id
    avatar_url
    created_at
    display_name
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const FilesDocument = gql`
    query Files($limit: Int!) {
  files(limit: $limit) {
    id
    created_at
    file_path
    downloadable_url
  }
}
    `;

/**
 * __useFilesQuery__
 *
 * To run a query within a React component, call `useFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFilesQuery(baseOptions: Apollo.QueryHookOptions<FilesQuery, FilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
      }
export function useFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesQuery, FilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
        }
export type FilesQueryHookResult = ReturnType<typeof useFilesQuery>;
export type FilesLazyQueryHookResult = ReturnType<typeof useFilesLazyQuery>;
export type FilesQueryResult = Apollo.QueryResult<FilesQuery, FilesQueryVariables>;
export const S_GetFilesDocument = gql`
    subscription s_getFiles($limit: Int!) {
  files(limit: $limit, order_by: {created_at: desc}) {
    id
    created_at
    file_path
    downloadable_url
  }
}
    `;

/**
 * __useS_GetFilesSubscription__
 *
 * To run a query within a React component, call `useS_GetFilesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useS_GetFilesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useS_GetFilesSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useS_GetFilesSubscription(baseOptions: Apollo.SubscriptionHookOptions<S_GetFilesSubscription, S_GetFilesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<S_GetFilesSubscription, S_GetFilesSubscriptionVariables>(S_GetFilesDocument, options);
      }
export type S_GetFilesSubscriptionHookResult = ReturnType<typeof useS_GetFilesSubscription>;
export type S_GetFilesSubscriptionResult = Apollo.SubscriptionResult<S_GetFilesSubscription>;
export const DictionaryDocument = gql`
    query Dictionary($en: Boolean = false, $uk: Boolean = false, $fr: Boolean = false) {
  i18n(order_by: {key: asc}) {
    key
    en @include(if: $en)
    uk @include(if: $uk)
    fr @include(if: $fr)
  }
}
    `;

/**
 * __useDictionaryQuery__
 *
 * To run a query within a React component, call `useDictionaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDictionaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDictionaryQuery({
 *   variables: {
 *      en: // value for 'en'
 *      uk: // value for 'uk'
 *      fr: // value for 'fr'
 *   },
 * });
 */
export function useDictionaryQuery(baseOptions?: Apollo.QueryHookOptions<DictionaryQuery, DictionaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DictionaryQuery, DictionaryQueryVariables>(DictionaryDocument, options);
      }
export function useDictionaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DictionaryQuery, DictionaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DictionaryQuery, DictionaryQueryVariables>(DictionaryDocument, options);
        }
export type DictionaryQueryHookResult = ReturnType<typeof useDictionaryQuery>;
export type DictionaryLazyQueryHookResult = ReturnType<typeof useDictionaryLazyQuery>;
export type DictionaryQueryResult = Apollo.QueryResult<DictionaryQuery, DictionaryQueryVariables>;
export type filesKeySpecifier = ('created_at' | 'downloadable_url' | 'file_path' | 'id' | 'initiative' | 'initiative_id' | 'user' | 'user_id' | filesKeySpecifier)[];
export type filesFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadable_url?: FieldPolicy<any> | FieldReadFunction<any>,
	file_path?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type files_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | files_mutation_responseKeySpecifier)[];
export type files_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type i18nKeySpecifier = ('category' | 'en' | 'fr' | 'i18n_category' | 'id' | 'key' | 'uk' | i18nKeySpecifier)[];
export type i18nFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	en?: FieldPolicy<any> | FieldReadFunction<any>,
	fr?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_category?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	uk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type i18n_categoriesKeySpecifier = ('category' | 'i18ns' | i18n_categoriesKeySpecifier)[];
export type i18n_categoriesFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	i18ns?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donationsKeySpecifier = ('expense' | 'expense_id' | 'id' | 'initiative' | 'initiative_id' | 'post' | 'post_id' | 'recurrent' | 'sum' | 'user' | 'user_id' | initiative_donationsKeySpecifier)[];
export type initiative_donationsFieldPolicy = {
	expense?: FieldPolicy<any> | FieldReadFunction<any>,
	expense_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	recurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_donations_mutation_responseKeySpecifier)[];
export type initiative_donations_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_editsKeySpecifier = ('description' | 'id' | 'info' | 'info_id' | 'initiative' | 'initiative_id' | 'poll' | 'poll_id' | 'post' | 'post_id' | 'status' | 'user' | 'user_id' | initiative_editsKeySpecifier)[];
export type initiative_editsFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	info_id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_edits_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_edits_mutation_responseKeySpecifier)[];
export type initiative_edits_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_expensesKeySpecifier = ('budget' | 'description' | 'donations' | 'id' | 'initiative' | 'initiative_id' | 'poll' | 'poll_id' | 'post' | 'post_id' | 'status' | 'user' | 'user_id' | initiative_expensesKeySpecifier)[];
export type initiative_expensesFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	donations?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_expenses_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_expenses_mutation_responseKeySpecifier)[];
export type initiative_expenses_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_infoKeySpecifier = ('approved_at' | 'context' | 'created_at' | 'edits' | 'goal' | 'id' | 'initiative' | 'initiative_id' | 'modified_at' | 'problem' | initiative_infoKeySpecifier)[];
export type initiative_infoFieldPolicy = {
	approved_at?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	goal?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	problem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_info_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_info_mutation_responseKeySpecifier)[];
export type initiative_info_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_membersKeySpecifier = ('contractor' | 'created_at' | 'donator' | 'id' | 'initiative' | 'initiative_id' | 'initiator' | 'user' | 'user_id' | 'volunteer' | initiative_membersKeySpecifier)[];
export type initiative_membersFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	donator?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiator?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_aggregateKeySpecifier = ('aggregate' | 'nodes' | initiative_members_aggregateKeySpecifier)[];
export type initiative_members_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | initiative_members_aggregate_fieldsKeySpecifier)[];
export type initiative_members_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_avg_fieldsKeySpecifier = ('id' | initiative_members_avg_fieldsKeySpecifier)[];
export type initiative_members_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_max_fieldsKeySpecifier = ('created_at' | 'id' | 'initiative_id' | 'user_id' | initiative_members_max_fieldsKeySpecifier)[];
export type initiative_members_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_min_fieldsKeySpecifier = ('created_at' | 'id' | 'initiative_id' | 'user_id' | initiative_members_min_fieldsKeySpecifier)[];
export type initiative_members_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_members_mutation_responseKeySpecifier)[];
export type initiative_members_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_stddev_fieldsKeySpecifier = ('id' | initiative_members_stddev_fieldsKeySpecifier)[];
export type initiative_members_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_stddev_pop_fieldsKeySpecifier = ('id' | initiative_members_stddev_pop_fieldsKeySpecifier)[];
export type initiative_members_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_stddev_samp_fieldsKeySpecifier = ('id' | initiative_members_stddev_samp_fieldsKeySpecifier)[];
export type initiative_members_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_sum_fieldsKeySpecifier = ('id' | initiative_members_sum_fieldsKeySpecifier)[];
export type initiative_members_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_var_pop_fieldsKeySpecifier = ('id' | initiative_members_var_pop_fieldsKeySpecifier)[];
export type initiative_members_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_var_samp_fieldsKeySpecifier = ('id' | initiative_members_var_samp_fieldsKeySpecifier)[];
export type initiative_members_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_members_variance_fieldsKeySpecifier = ('id' | initiative_members_variance_fieldsKeySpecifier)[];
export type initiative_members_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_poll_votesKeySpecifier = ('id' | 'poll' | 'poll_id' | 'user' | 'user_id' | 'value' | initiative_poll_votesKeySpecifier)[];
export type initiative_poll_votesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_poll_votes_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_poll_votes_mutation_responseKeySpecifier)[];
export type initiative_poll_votes_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_pollsKeySpecifier = ('edits' | 'expenses' | 'id' | 'initiative' | 'initiative_id' | 'tasks' | 'user_id' | 'votes' | initiative_pollsKeySpecifier)[];
export type initiative_pollsFieldPolicy = {
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_polls_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_polls_mutation_responseKeySpecifier)[];
export type initiative_polls_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_projectsKeySpecifier = ('budget' | 'description' | 'id' | 'initiative' | 'initiative_id' | 'org' | 'org_id' | 'org_project' | 'post' | 'post_id' | 'reference_project_id' | 'status' | 'tender' | 'tender_id' | 'user' | 'user_id' | 'volunteers' | initiative_projectsKeySpecifier)[];
export type initiative_projectsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	org_project?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	reference_project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tender?: FieldPolicy<any> | FieldReadFunction<any>,
	tender_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_projects_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_projects_mutation_responseKeySpecifier)[];
export type initiative_projects_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tagsKeySpecifier = ('id' | 'initiative' | 'initiative_id' | 'tag' | 'tags' | initiative_tagsKeySpecifier)[];
export type initiative_tagsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tags_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_tags_mutation_responseKeySpecifier)[];
export type initiative_tags_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasksKeySpecifier = ('description' | 'id' | 'initiative' | 'initiative_id' | 'initiative_volunteers' | 'poll' | 'poll_id' | 'post' | 'post_id' | 'status' | 'user' | 'user_id' | 'volunteers' | initiative_tasksKeySpecifier)[];
export type initiative_tasksFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_tasks_mutation_responseKeySpecifier)[];
export type initiative_tasks_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_thread_commentsKeySpecifier = ('comment' | 'created_at' | 'id' | 'message_id' | 'post' | 'user' | 'user_id' | initiative_thread_commentsKeySpecifier)[];
export type initiative_thread_commentsFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_thread_comments_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_thread_comments_mutation_responseKeySpecifier)[];
export type initiative_thread_comments_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_thread_post_reactionsKeySpecifier = ('id' | 'post' | 'post_id' | 'type' | 'user' | 'user_id' | initiative_thread_post_reactionsKeySpecifier)[];
export type initiative_thread_post_reactionsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_thread_post_reactions_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_thread_post_reactions_mutation_responseKeySpecifier)[];
export type initiative_thread_post_reactions_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_thread_postsKeySpecifier = ('comments' | 'created_at' | 'donations' | 'edits' | 'expenses' | 'id' | 'modified_at' | 'post' | 'projects' | 'reactions' | 'tasks' | 'thread' | 'thread_id' | 'type' | 'user' | 'user_id' | 'volunteers' | initiative_thread_postsKeySpecifier)[];
export type initiative_thread_postsFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	donations?: FieldPolicy<any> | FieldReadFunction<any>,
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_thread_posts_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_thread_posts_mutation_responseKeySpecifier)[];
export type initiative_thread_posts_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_threadsKeySpecifier = ('initiative' | 'posts' | initiative_threadsKeySpecifier)[];
export type initiative_threadsFieldPolicy = {
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_threads_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_threads_mutation_responseKeySpecifier)[];
export type initiative_threads_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_visitsKeySpecifier = ('id' | 'initiative' | 'initiative_id' | 'user' | 'user_id' | 'visited_at' | initiative_visitsKeySpecifier)[];
export type initiative_visitsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	visited_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_visits_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_visits_mutation_responseKeySpecifier)[];
export type initiative_visits_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteersKeySpecifier = ('hours' | 'id' | 'initiative' | 'initiative_id' | 'post' | 'post_id' | 'task' | 'task_id' | 'user' | 'user_id' | initiative_volunteersKeySpecifier)[];
export type initiative_volunteersFieldPolicy = {
	hours?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	task?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_volunteers_mutation_responseKeySpecifier)[];
export type initiative_volunteers_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiativesKeySpecifier = ('created_at' | 'description' | 'donations' | 'edits' | 'expenses' | 'files' | 'geom' | 'id' | 'image' | 'infos' | 'members' | 'members_aggregate' | 'modified_at' | 'name' | 'polls' | 'projects' | 'tags' | 'tasks' | 'tenders' | 'threads' | 'visits' | 'volunteers' | initiativesKeySpecifier)[];
export type initiativesFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	donations?: FieldPolicy<any> | FieldReadFunction<any>,
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	geom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	infos?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	members_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	polls?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	threads?: FieldPolicy<any> | FieldReadFunction<any>,
	visits?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiatives_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiatives_mutation_responseKeySpecifier)[];
export type initiatives_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_files' | 'delete_files_by_pk' | 'delete_initiative_donations' | 'delete_initiative_donations_by_pk' | 'delete_initiative_edits' | 'delete_initiative_edits_by_pk' | 'delete_initiative_expenses' | 'delete_initiative_expenses_by_pk' | 'delete_initiative_info' | 'delete_initiative_info_by_pk' | 'delete_initiative_members' | 'delete_initiative_members_by_pk' | 'delete_initiative_poll_votes' | 'delete_initiative_poll_votes_by_pk' | 'delete_initiative_polls' | 'delete_initiative_polls_by_pk' | 'delete_initiative_projects' | 'delete_initiative_projects_by_pk' | 'delete_initiative_tags' | 'delete_initiative_tags_by_pk' | 'delete_initiative_tasks' | 'delete_initiative_tasks_by_pk' | 'delete_initiative_thread_comments' | 'delete_initiative_thread_comments_by_pk' | 'delete_initiative_thread_post_reactions' | 'delete_initiative_thread_post_reactions_by_pk' | 'delete_initiative_thread_posts' | 'delete_initiative_thread_posts_by_pk' | 'delete_initiative_threads' | 'delete_initiative_visits' | 'delete_initiative_visits_by_pk' | 'delete_initiative_volunteers' | 'delete_initiative_volunteers_by_pk' | 'delete_initiatives' | 'delete_initiatives_by_pk' | 'delete_tenders' | 'delete_tenders_by_pk' | 'insert_files' | 'insert_files_one' | 'insert_initiative_donations' | 'insert_initiative_donations_one' | 'insert_initiative_edits' | 'insert_initiative_edits_one' | 'insert_initiative_expenses' | 'insert_initiative_expenses_one' | 'insert_initiative_info' | 'insert_initiative_info_one' | 'insert_initiative_members' | 'insert_initiative_members_one' | 'insert_initiative_poll_votes' | 'insert_initiative_poll_votes_one' | 'insert_initiative_polls' | 'insert_initiative_polls_one' | 'insert_initiative_projects' | 'insert_initiative_projects_one' | 'insert_initiative_tags' | 'insert_initiative_tags_one' | 'insert_initiative_tasks' | 'insert_initiative_tasks_one' | 'insert_initiative_thread_comments' | 'insert_initiative_thread_comments_one' | 'insert_initiative_thread_post_reactions' | 'insert_initiative_thread_post_reactions_one' | 'insert_initiative_thread_posts' | 'insert_initiative_thread_posts_one' | 'insert_initiative_threads' | 'insert_initiative_threads_one' | 'insert_initiative_visits' | 'insert_initiative_visits_one' | 'insert_initiative_volunteers' | 'insert_initiative_volunteers_one' | 'insert_initiatives' | 'insert_initiatives_one' | 'insert_tags' | 'insert_tags_one' | 'insert_tenders' | 'insert_tenders_one' | 'update_files' | 'update_files_by_pk' | 'update_initiative_donations' | 'update_initiative_donations_by_pk' | 'update_initiative_edits' | 'update_initiative_edits_by_pk' | 'update_initiative_expenses' | 'update_initiative_expenses_by_pk' | 'update_initiative_info' | 'update_initiative_info_by_pk' | 'update_initiative_members' | 'update_initiative_members_by_pk' | 'update_initiative_poll_votes' | 'update_initiative_poll_votes_by_pk' | 'update_initiative_polls' | 'update_initiative_polls_by_pk' | 'update_initiative_projects' | 'update_initiative_projects_by_pk' | 'update_initiative_tags' | 'update_initiative_tags_by_pk' | 'update_initiative_tasks' | 'update_initiative_tasks_by_pk' | 'update_initiative_thread_comments' | 'update_initiative_thread_comments_by_pk' | 'update_initiative_thread_post_reactions' | 'update_initiative_thread_post_reactions_by_pk' | 'update_initiative_thread_posts' | 'update_initiative_thread_posts_by_pk' | 'update_initiative_visits' | 'update_initiative_visits_by_pk' | 'update_initiative_volunteers' | 'update_initiative_volunteers_by_pk' | 'update_initiatives' | 'update_initiatives_by_pk' | 'update_tenders' | 'update_tenders_by_pk' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_files?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_donations?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_donations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_edits?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_edits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_expenses_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_info?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_info_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_members?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_members_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_poll_votes?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_poll_votes_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_polls?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_polls_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_thread_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_thread_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_thread_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_thread_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_thread_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_thread_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_visits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_volunteers_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiatives_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_tenders_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_files?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_files_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_donations?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_donations_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_edits?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_edits_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_expenses_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_info?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_info_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_members?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_members_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_poll_votes?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_poll_votes_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_polls?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_polls_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_projects_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tags_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tasks_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_thread_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_thread_comments_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_thread_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_thread_post_reactions_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_thread_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_thread_posts_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_threads_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_visits_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_volunteers_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiatives_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_tags_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_tenders_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_files?: FieldPolicy<any> | FieldReadFunction<any>,
	update_files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_donations?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_donations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_edits?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_edits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_expenses_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_info?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_info_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_members?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_members_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_poll_votes?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_poll_votes_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_polls?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_polls_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_thread_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_thread_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_thread_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_thread_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_thread_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_thread_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_visits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_volunteers_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiatives_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	update_tenders_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_projectsKeySpecifier = ('created_at' | 'description' | 'id' | 'initiative_projects' | 'org' | 'org_id' | 'tenders' | 'user' | 'user_id' | org_projectsKeySpecifier)[];
export type org_projectsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_tagsKeySpecifier = ('id' | 'org' | 'org_id' | 'tags' | org_tagsKeySpecifier)[];
export type org_tagsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type orgsKeySpecifier = ('created_at' | 'description' | 'geom' | 'id' | 'initiative_projects' | 'projects' | 'tags' | 'tenders' | orgsKeySpecifier)[];
export type orgsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	geom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('files' | 'files_by_pk' | 'i18n' | 'i18n_by_pk' | 'i18n_categories' | 'i18n_categories_by_pk' | 'initiative_donations' | 'initiative_donations_by_pk' | 'initiative_edits' | 'initiative_edits_by_pk' | 'initiative_expenses' | 'initiative_expenses_by_pk' | 'initiative_info' | 'initiative_info_by_pk' | 'initiative_members' | 'initiative_members_aggregate' | 'initiative_members_by_pk' | 'initiative_poll_votes' | 'initiative_poll_votes_by_pk' | 'initiative_polls' | 'initiative_polls_by_pk' | 'initiative_projects' | 'initiative_projects_by_pk' | 'initiative_tags' | 'initiative_tags_by_pk' | 'initiative_tasks' | 'initiative_tasks_by_pk' | 'initiative_thread_comments' | 'initiative_thread_comments_by_pk' | 'initiative_thread_post_reactions' | 'initiative_thread_post_reactions_by_pk' | 'initiative_thread_posts' | 'initiative_thread_posts_by_pk' | 'initiative_threads' | 'initiative_visits' | 'initiative_visits_by_pk' | 'initiative_volunteers' | 'initiative_volunteers_by_pk' | 'initiatives' | 'initiatives_by_pk' | 'initiatives_nearby' | 'org_projects' | 'org_projects_by_pk' | 'org_tags' | 'org_tags_by_pk' | 'orgs' | 'orgs_by_pk' | 'tags' | 'tags_by_pk' | 'tenders' | 'tenders_by_pk' | 'users' | 'users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_edits?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_edits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_expenses_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_info?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_info_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_poll_votes?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_poll_votes_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_polls?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_polls_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('files' | 'files_by_pk' | 'i18n' | 'i18n_by_pk' | 'i18n_categories' | 'i18n_categories_by_pk' | 'initiative_donations' | 'initiative_donations_by_pk' | 'initiative_edits' | 'initiative_edits_by_pk' | 'initiative_expenses' | 'initiative_expenses_by_pk' | 'initiative_info' | 'initiative_info_by_pk' | 'initiative_members' | 'initiative_members_aggregate' | 'initiative_members_by_pk' | 'initiative_poll_votes' | 'initiative_poll_votes_by_pk' | 'initiative_polls' | 'initiative_polls_by_pk' | 'initiative_projects' | 'initiative_projects_by_pk' | 'initiative_tags' | 'initiative_tags_by_pk' | 'initiative_tasks' | 'initiative_tasks_by_pk' | 'initiative_thread_comments' | 'initiative_thread_comments_by_pk' | 'initiative_thread_post_reactions' | 'initiative_thread_post_reactions_by_pk' | 'initiative_thread_posts' | 'initiative_thread_posts_by_pk' | 'initiative_threads' | 'initiative_visits' | 'initiative_visits_by_pk' | 'initiative_volunteers' | 'initiative_volunteers_by_pk' | 'initiatives' | 'initiatives_by_pk' | 'initiatives_nearby' | 'org_projects' | 'org_projects_by_pk' | 'org_tags' | 'org_tags_by_pk' | 'orgs' | 'orgs_by_pk' | 'tags' | 'tags_by_pk' | 'tenders' | 'tenders_by_pk' | 'users' | 'users_by_pk' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_edits?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_edits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_expenses_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_info?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_info_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_poll_votes?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_poll_votes_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_polls?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_polls_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_thread_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tagsKeySpecifier = ('initiative_tags' | 'org_tags' | 'tag' | tagsKeySpecifier)[];
export type tagsFieldPolicy = {
	initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tags_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | tags_mutation_responseKeySpecifier)[];
export type tags_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tendersKeySpecifier = ('created_at' | 'id' | 'initiative' | 'initiative_id' | 'org' | 'org_id' | 'org_project' | 'parent_project' | 'projects' | 'user' | 'user_id' | tendersKeySpecifier)[];
export type tendersFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	org_project?: FieldPolicy<any> | FieldReadFunction<any>,
	parent_project?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type tenders_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | tenders_mutation_responseKeySpecifier)[];
export type tenders_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type usersKeySpecifier = ('avatar_url' | 'comments' | 'created_at' | 'display_name' | 'donations' | 'edits' | 'expenses' | 'files' | 'id' | 'initiative_members' | 'initiative_members_aggregate' | 'initiative_visits' | 'org_projects' | 'post_reactions' | 'posts' | 'projects' | 'tasks' | 'tenders' | 'updated_at' | 'volunteers' | 'votes' | usersKeySpecifier)[];
export type usersFieldPolicy = {
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	donations?: FieldPolicy<any> | FieldReadFunction<any>,
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	files?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | filesKeySpecifier | (() => undefined | filesKeySpecifier),
		fields?: filesFieldPolicy,
	},
	files_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | files_mutation_responseKeySpecifier | (() => undefined | files_mutation_responseKeySpecifier),
		fields?: files_mutation_responseFieldPolicy,
	},
	i18n?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | i18nKeySpecifier | (() => undefined | i18nKeySpecifier),
		fields?: i18nFieldPolicy,
	},
	i18n_categories?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | i18n_categoriesKeySpecifier | (() => undefined | i18n_categoriesKeySpecifier),
		fields?: i18n_categoriesFieldPolicy,
	},
	initiative_donations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donationsKeySpecifier | (() => undefined | initiative_donationsKeySpecifier),
		fields?: initiative_donationsFieldPolicy,
	},
	initiative_donations_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_mutation_responseKeySpecifier | (() => undefined | initiative_donations_mutation_responseKeySpecifier),
		fields?: initiative_donations_mutation_responseFieldPolicy,
	},
	initiative_edits?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_editsKeySpecifier | (() => undefined | initiative_editsKeySpecifier),
		fields?: initiative_editsFieldPolicy,
	},
	initiative_edits_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_edits_mutation_responseKeySpecifier | (() => undefined | initiative_edits_mutation_responseKeySpecifier),
		fields?: initiative_edits_mutation_responseFieldPolicy,
	},
	initiative_expenses?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_expensesKeySpecifier | (() => undefined | initiative_expensesKeySpecifier),
		fields?: initiative_expensesFieldPolicy,
	},
	initiative_expenses_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_expenses_mutation_responseKeySpecifier | (() => undefined | initiative_expenses_mutation_responseKeySpecifier),
		fields?: initiative_expenses_mutation_responseFieldPolicy,
	},
	initiative_info?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_infoKeySpecifier | (() => undefined | initiative_infoKeySpecifier),
		fields?: initiative_infoFieldPolicy,
	},
	initiative_info_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_info_mutation_responseKeySpecifier | (() => undefined | initiative_info_mutation_responseKeySpecifier),
		fields?: initiative_info_mutation_responseFieldPolicy,
	},
	initiative_members?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_membersKeySpecifier | (() => undefined | initiative_membersKeySpecifier),
		fields?: initiative_membersFieldPolicy,
	},
	initiative_members_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_aggregateKeySpecifier | (() => undefined | initiative_members_aggregateKeySpecifier),
		fields?: initiative_members_aggregateFieldPolicy,
	},
	initiative_members_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_aggregate_fieldsKeySpecifier | (() => undefined | initiative_members_aggregate_fieldsKeySpecifier),
		fields?: initiative_members_aggregate_fieldsFieldPolicy,
	},
	initiative_members_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_avg_fieldsKeySpecifier | (() => undefined | initiative_members_avg_fieldsKeySpecifier),
		fields?: initiative_members_avg_fieldsFieldPolicy,
	},
	initiative_members_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_max_fieldsKeySpecifier | (() => undefined | initiative_members_max_fieldsKeySpecifier),
		fields?: initiative_members_max_fieldsFieldPolicy,
	},
	initiative_members_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_min_fieldsKeySpecifier | (() => undefined | initiative_members_min_fieldsKeySpecifier),
		fields?: initiative_members_min_fieldsFieldPolicy,
	},
	initiative_members_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_mutation_responseKeySpecifier | (() => undefined | initiative_members_mutation_responseKeySpecifier),
		fields?: initiative_members_mutation_responseFieldPolicy,
	},
	initiative_members_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_stddev_fieldsKeySpecifier | (() => undefined | initiative_members_stddev_fieldsKeySpecifier),
		fields?: initiative_members_stddev_fieldsFieldPolicy,
	},
	initiative_members_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_stddev_pop_fieldsKeySpecifier | (() => undefined | initiative_members_stddev_pop_fieldsKeySpecifier),
		fields?: initiative_members_stddev_pop_fieldsFieldPolicy,
	},
	initiative_members_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_stddev_samp_fieldsKeySpecifier | (() => undefined | initiative_members_stddev_samp_fieldsKeySpecifier),
		fields?: initiative_members_stddev_samp_fieldsFieldPolicy,
	},
	initiative_members_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_sum_fieldsKeySpecifier | (() => undefined | initiative_members_sum_fieldsKeySpecifier),
		fields?: initiative_members_sum_fieldsFieldPolicy,
	},
	initiative_members_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_var_pop_fieldsKeySpecifier | (() => undefined | initiative_members_var_pop_fieldsKeySpecifier),
		fields?: initiative_members_var_pop_fieldsFieldPolicy,
	},
	initiative_members_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_var_samp_fieldsKeySpecifier | (() => undefined | initiative_members_var_samp_fieldsKeySpecifier),
		fields?: initiative_members_var_samp_fieldsFieldPolicy,
	},
	initiative_members_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_members_variance_fieldsKeySpecifier | (() => undefined | initiative_members_variance_fieldsKeySpecifier),
		fields?: initiative_members_variance_fieldsFieldPolicy,
	},
	initiative_poll_votes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_poll_votesKeySpecifier | (() => undefined | initiative_poll_votesKeySpecifier),
		fields?: initiative_poll_votesFieldPolicy,
	},
	initiative_poll_votes_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_poll_votes_mutation_responseKeySpecifier | (() => undefined | initiative_poll_votes_mutation_responseKeySpecifier),
		fields?: initiative_poll_votes_mutation_responseFieldPolicy,
	},
	initiative_polls?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_pollsKeySpecifier | (() => undefined | initiative_pollsKeySpecifier),
		fields?: initiative_pollsFieldPolicy,
	},
	initiative_polls_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_polls_mutation_responseKeySpecifier | (() => undefined | initiative_polls_mutation_responseKeySpecifier),
		fields?: initiative_polls_mutation_responseFieldPolicy,
	},
	initiative_projects?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_projectsKeySpecifier | (() => undefined | initiative_projectsKeySpecifier),
		fields?: initiative_projectsFieldPolicy,
	},
	initiative_projects_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_projects_mutation_responseKeySpecifier | (() => undefined | initiative_projects_mutation_responseKeySpecifier),
		fields?: initiative_projects_mutation_responseFieldPolicy,
	},
	initiative_tags?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tagsKeySpecifier | (() => undefined | initiative_tagsKeySpecifier),
		fields?: initiative_tagsFieldPolicy,
	},
	initiative_tags_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tags_mutation_responseKeySpecifier | (() => undefined | initiative_tags_mutation_responseKeySpecifier),
		fields?: initiative_tags_mutation_responseFieldPolicy,
	},
	initiative_tasks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasksKeySpecifier | (() => undefined | initiative_tasksKeySpecifier),
		fields?: initiative_tasksFieldPolicy,
	},
	initiative_tasks_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_mutation_responseKeySpecifier | (() => undefined | initiative_tasks_mutation_responseKeySpecifier),
		fields?: initiative_tasks_mutation_responseFieldPolicy,
	},
	initiative_thread_comments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_thread_commentsKeySpecifier | (() => undefined | initiative_thread_commentsKeySpecifier),
		fields?: initiative_thread_commentsFieldPolicy,
	},
	initiative_thread_comments_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_thread_comments_mutation_responseKeySpecifier | (() => undefined | initiative_thread_comments_mutation_responseKeySpecifier),
		fields?: initiative_thread_comments_mutation_responseFieldPolicy,
	},
	initiative_thread_post_reactions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_thread_post_reactionsKeySpecifier | (() => undefined | initiative_thread_post_reactionsKeySpecifier),
		fields?: initiative_thread_post_reactionsFieldPolicy,
	},
	initiative_thread_post_reactions_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_thread_post_reactions_mutation_responseKeySpecifier | (() => undefined | initiative_thread_post_reactions_mutation_responseKeySpecifier),
		fields?: initiative_thread_post_reactions_mutation_responseFieldPolicy,
	},
	initiative_thread_posts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_thread_postsKeySpecifier | (() => undefined | initiative_thread_postsKeySpecifier),
		fields?: initiative_thread_postsFieldPolicy,
	},
	initiative_thread_posts_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_thread_posts_mutation_responseKeySpecifier | (() => undefined | initiative_thread_posts_mutation_responseKeySpecifier),
		fields?: initiative_thread_posts_mutation_responseFieldPolicy,
	},
	initiative_threads?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_threadsKeySpecifier | (() => undefined | initiative_threadsKeySpecifier),
		fields?: initiative_threadsFieldPolicy,
	},
	initiative_threads_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_threads_mutation_responseKeySpecifier | (() => undefined | initiative_threads_mutation_responseKeySpecifier),
		fields?: initiative_threads_mutation_responseFieldPolicy,
	},
	initiative_visits?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_visitsKeySpecifier | (() => undefined | initiative_visitsKeySpecifier),
		fields?: initiative_visitsFieldPolicy,
	},
	initiative_visits_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_visits_mutation_responseKeySpecifier | (() => undefined | initiative_visits_mutation_responseKeySpecifier),
		fields?: initiative_visits_mutation_responseFieldPolicy,
	},
	initiative_volunteers?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteersKeySpecifier | (() => undefined | initiative_volunteersKeySpecifier),
		fields?: initiative_volunteersFieldPolicy,
	},
	initiative_volunteers_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_mutation_responseKeySpecifier | (() => undefined | initiative_volunteers_mutation_responseKeySpecifier),
		fields?: initiative_volunteers_mutation_responseFieldPolicy,
	},
	initiatives?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiativesKeySpecifier | (() => undefined | initiativesKeySpecifier),
		fields?: initiativesFieldPolicy,
	},
	initiatives_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiatives_mutation_responseKeySpecifier | (() => undefined | initiatives_mutation_responseKeySpecifier),
		fields?: initiatives_mutation_responseFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	org_projects?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_projectsKeySpecifier | (() => undefined | org_projectsKeySpecifier),
		fields?: org_projectsFieldPolicy,
	},
	org_tags?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_tagsKeySpecifier | (() => undefined | org_tagsKeySpecifier),
		fields?: org_tagsFieldPolicy,
	},
	orgs?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | orgsKeySpecifier | (() => undefined | orgsKeySpecifier),
		fields?: orgsFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	},
	tags?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | tagsKeySpecifier | (() => undefined | tagsKeySpecifier),
		fields?: tagsFieldPolicy,
	},
	tags_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | tags_mutation_responseKeySpecifier | (() => undefined | tags_mutation_responseKeySpecifier),
		fields?: tags_mutation_responseFieldPolicy,
	},
	tenders?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | tendersKeySpecifier | (() => undefined | tendersKeySpecifier),
		fields?: tendersFieldPolicy,
	},
	tenders_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | tenders_mutation_responseKeySpecifier | (() => undefined | tenders_mutation_responseKeySpecifier),
		fields?: tenders_mutation_responseFieldPolicy,
	},
	users?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | usersKeySpecifier | (() => undefined | usersKeySpecifier),
		fields?: usersFieldPolicy,
	}
};

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    