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

/** columns and relationships of "entries" */
export type Entries = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  members_count?: Maybe<Scalars['bigint']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "entries". All fields are combined with a logical 'AND'. */
export type Entries_Bool_Exp = {
  _and?: Maybe<Array<Entries_Bool_Exp>>;
  _not?: Maybe<Entries_Bool_Exp>;
  _or?: Maybe<Array<Entries_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  members_count?: Maybe<Bigint_Comparison_Exp>;
  modified_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

export type Entries_Nearby_Args = {
  limit?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['geometry']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  own?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** Ordering options when selecting data from "entries". */
export type Entries_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  members_count?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** select columns of table "entries" */
export enum Entries_Select_Column {
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
  MembersCount = 'members_count',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** columns and relationships of "entry_members" */
export type Entry_Members = {
  /** An object relationship */
  entry?: Maybe<Entries>;
  entry_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** Boolean expression to filter rows from the table "entry_members". All fields are combined with a logical 'AND'. */
export type Entry_Members_Bool_Exp = {
  _and?: Maybe<Array<Entry_Members_Bool_Exp>>;
  _not?: Maybe<Entry_Members_Bool_Exp>;
  _or?: Maybe<Array<Entry_Members_Bool_Exp>>;
  entry?: Maybe<Entries_Bool_Exp>;
  entry_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "entry_members". */
export type Entry_Members_Order_By = {
  entry?: Maybe<Entries_Order_By>;
  entry_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "entry_members" */
export enum Entry_Members_Select_Column {
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "entry_visits" */
export type Entry_Visits = {
  /** An object relationship */
  entry?: Maybe<Entries>;
  entry_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  visited_at?: Maybe<Scalars['timestamptz']>;
};

/** Boolean expression to filter rows from the table "entry_visits". All fields are combined with a logical 'AND'. */
export type Entry_Visits_Bool_Exp = {
  _and?: Maybe<Array<Entry_Visits_Bool_Exp>>;
  _not?: Maybe<Entry_Visits_Bool_Exp>;
  _or?: Maybe<Array<Entry_Visits_Bool_Exp>>;
  entry?: Maybe<Entries_Bool_Exp>;
  entry_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  visited_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "entry_visits". */
export type Entry_Visits_Order_By = {
  entry?: Maybe<Entries_Order_By>;
  entry_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  visited_at?: Maybe<Order_By>;
};

/** select columns of table "entry_visits" */
export enum Entry_Visits_Select_Column {
  /** column name */
  EntryId = 'entry_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VisitedAt = 'visited_at'
}

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

/** columns and relationships of "initiative_comment_reactions" */
export type Initiative_Comment_Reactions = {
  /** An object relationship */
  comment?: Maybe<Initiative_Comments>;
  comment_id?: Maybe<Scalars['Int']>;
  id: Scalars['bigint'];
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Comment_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Comment_Reactions_Max_Order_By>;
  min?: Maybe<Initiative_Comment_Reactions_Min_Order_By>;
  stddev?: Maybe<Initiative_Comment_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Comment_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Comment_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Comment_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Comment_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Comment_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Comment_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Comment_Reactions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Comment_Reactions_On_Conflict>;
};

/** order by avg() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Avg_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_comment_reactions". All fields are combined with a logical 'AND'. */
export type Initiative_Comment_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Comment_Reactions_Bool_Exp>>;
  _not?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Comment_Reactions_Bool_Exp>>;
  comment?: Maybe<Initiative_Comments_Bool_Exp>;
  comment_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_comment_reactions" */
export enum Initiative_Comment_Reactions_Constraint {
  /** unique or primary key constraint */
  InitiativeCommentReactionsPkey = 'initiative_comment_reactions_pkey'
}

/** input type for incrementing numeric columns in table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Inc_Input = {
  comment_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Insert_Input = {
  comment?: Maybe<Initiative_Comments_Obj_Rel_Insert_Input>;
  comment_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Max_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Min_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Comment_Reactions>;
};

/** on conflict condition type for table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_On_Conflict = {
  constraint: Initiative_Comment_Reactions_Constraint;
  update_columns?: Array<Initiative_Comment_Reactions_Update_Column>;
  where?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_comment_reactions". */
export type Initiative_Comment_Reactions_Order_By = {
  comment?: Maybe<Initiative_Comments_Order_By>;
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_comment_reactions */
export type Initiative_Comment_Reactions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_comment_reactions" */
export enum Initiative_Comment_Reactions_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Set_Input = {
  comment_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Stddev_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Stddev_Pop_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Stddev_Samp_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Sum_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "initiative_comment_reactions" */
export enum Initiative_Comment_Reactions_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Var_Pop_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Var_Samp_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_comment_reactions" */
export type Initiative_Comment_Reactions_Variance_Order_By = {
  comment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_comments" */
export type Initiative_Comments = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  message_id: Scalars['Int'];
  /** An object relationship */
  post: Initiative_Posts;
  /** An array relationship */
  reactions: Array<Initiative_Comment_Reactions>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "initiative_comments" */
export type Initiative_CommentsReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comment_Reactions_Order_By>>;
  where?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
};

/** aggregated selection of "initiative_comments" */
export type Initiative_Comments_Aggregate = {
  aggregate?: Maybe<Initiative_Comments_Aggregate_Fields>;
  nodes: Array<Initiative_Comments>;
};

/** aggregate fields of "initiative_comments" */
export type Initiative_Comments_Aggregate_Fields = {
  avg?: Maybe<Initiative_Comments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Initiative_Comments_Max_Fields>;
  min?: Maybe<Initiative_Comments_Min_Fields>;
  stddev?: Maybe<Initiative_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Initiative_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Initiative_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Initiative_Comments_Sum_Fields>;
  var_pop?: Maybe<Initiative_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Initiative_Comments_Var_Samp_Fields>;
  variance?: Maybe<Initiative_Comments_Variance_Fields>;
};


/** aggregate fields of "initiative_comments" */
export type Initiative_Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Initiative_Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "initiative_comments" */
export type Initiative_Comments_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Comments_Max_Order_By>;
  min?: Maybe<Initiative_Comments_Min_Order_By>;
  stddev?: Maybe<Initiative_Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Comments_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Comments_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_comments" */
export type Initiative_Comments_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Comments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Initiative_Comments_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "initiative_comments" */
export type Initiative_Comments_Avg_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_comments". All fields are combined with a logical 'AND'. */
export type Initiative_Comments_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Comments_Bool_Exp>>;
  _not?: Maybe<Initiative_Comments_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Comments_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  message_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Initiative_Posts_Bool_Exp>;
  reactions?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_comments" */
export enum Initiative_Comments_Constraint {
  /** unique or primary key constraint */
  InitiativeCommentPkey = 'initiative_comment_pkey'
}

/** input type for incrementing numeric columns in table "initiative_comments" */
export type Initiative_Comments_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_comments" */
export type Initiative_Comments_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  message?: Maybe<Scalars['String']>;
  message_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Initiative_Posts_Obj_Rel_Insert_Input>;
  reactions?: Maybe<Initiative_Comment_Reactions_Arr_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Initiative_Comments_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_comments" */
export type Initiative_Comments_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Initiative_Comments_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "initiative_comments" */
export type Initiative_Comments_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_comments" */
export type Initiative_Comments_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Comments>;
};

/** input type for inserting object relation for remote table "initiative_comments" */
export type Initiative_Comments_Obj_Rel_Insert_Input = {
  data: Initiative_Comments_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Comments_On_Conflict>;
};

/** on conflict condition type for table "initiative_comments" */
export type Initiative_Comments_On_Conflict = {
  constraint: Initiative_Comments_Constraint;
  update_columns?: Array<Initiative_Comments_Update_Column>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_comments". */
export type Initiative_Comments_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Posts_Order_By>;
  reactions_aggregate?: Maybe<Initiative_Comment_Reactions_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_comments */
export type Initiative_Comments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "initiative_comments" */
export enum Initiative_Comments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_comments" */
export type Initiative_Comments_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Initiative_Comments_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "initiative_comments" */
export type Initiative_Comments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Initiative_Comments_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "initiative_comments" */
export type Initiative_Comments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Initiative_Comments_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "initiative_comments" */
export type Initiative_Comments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Initiative_Comments_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "initiative_comments" */
export type Initiative_Comments_Sum_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_comments" */
export enum Initiative_Comments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Initiative_Comments_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "initiative_comments" */
export type Initiative_Comments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Initiative_Comments_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "initiative_comments" */
export type Initiative_Comments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Initiative_Comments_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "initiative_comments" */
export type Initiative_Comments_Variance_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_donations" */
export type Initiative_Donations = {
  amount?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  recurrent?: Maybe<Scalars['Boolean']>;
  status: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "initiative_donations" */
export type Initiative_Donations_Aggregate = {
  aggregate?: Maybe<Initiative_Donations_Aggregate_Fields>;
  nodes: Array<Initiative_Donations>;
};

/** aggregate fields of "initiative_donations" */
export type Initiative_Donations_Aggregate_Fields = {
  avg?: Maybe<Initiative_Donations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Initiative_Donations_Max_Fields>;
  min?: Maybe<Initiative_Donations_Min_Fields>;
  stddev?: Maybe<Initiative_Donations_Stddev_Fields>;
  stddev_pop?: Maybe<Initiative_Donations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Initiative_Donations_Stddev_Samp_Fields>;
  sum?: Maybe<Initiative_Donations_Sum_Fields>;
  var_pop?: Maybe<Initiative_Donations_Var_Pop_Fields>;
  var_samp?: Maybe<Initiative_Donations_Var_Samp_Fields>;
  variance?: Maybe<Initiative_Donations_Variance_Fields>;
};


/** aggregate fields of "initiative_donations" */
export type Initiative_Donations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Initiative_Donations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
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

/** aggregate avg on columns */
export type Initiative_Donations_Avg_Fields = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "initiative_donations" */
export type Initiative_Donations_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_donations". All fields are combined with a logical 'AND'. */
export type Initiative_Donations_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Donations_Bool_Exp>>;
  _not?: Maybe<Initiative_Donations_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Donations_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  currency?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  recurrent?: Maybe<Boolean_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_donations" */
export enum Initiative_Donations_Constraint {
  /** unique or primary key constraint */
  InitiativeDonationsPkey = 'initiative_donations_pkey'
}

/** input type for incrementing numeric columns in table "initiative_donations" */
export type Initiative_Donations_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_donations" */
export type Initiative_Donations_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  recurrent?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Initiative_Donations_Max_Fields = {
  amount?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_donations" */
export type Initiative_Donations_Max_Order_By = {
  amount?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Initiative_Donations_Min_Fields = {
  amount?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "initiative_donations" */
export type Initiative_Donations_Min_Order_By = {
  amount?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
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
  amount?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  recurrent?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
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
  Amount = 'amount',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Recurrent = 'recurrent',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_donations" */
export type Initiative_Donations_Set_Input = {
  amount?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  recurrent?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Initiative_Donations_Stddev_Fields = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "initiative_donations" */
export type Initiative_Donations_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Initiative_Donations_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "initiative_donations" */
export type Initiative_Donations_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Initiative_Donations_Stddev_Samp_Fields = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "initiative_donations" */
export type Initiative_Donations_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Initiative_Donations_Sum_Fields = {
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "initiative_donations" */
export type Initiative_Donations_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "initiative_donations" */
export enum Initiative_Donations_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Recurrent = 'recurrent',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Initiative_Donations_Var_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "initiative_donations" */
export type Initiative_Donations_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Initiative_Donations_Var_Samp_Fields = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "initiative_donations" */
export type Initiative_Donations_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Initiative_Donations_Variance_Fields = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "initiative_donations" */
export type Initiative_Donations_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  post: Initiative_Posts;
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
  post?: Maybe<Initiative_Posts_Bool_Exp>;
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
  post?: Maybe<Initiative_Posts_Obj_Rel_Insert_Input>;
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
  post?: Maybe<Initiative_Posts_Order_By>;
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
  amount: Scalars['numeric'];
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  link?: Maybe<Scalars['String']>;
  link_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  poll?: Maybe<Initiative_Polls>;
  poll_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  post: Initiative_Posts;
  post_id: Scalars['bigint'];
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
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
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_expenses". All fields are combined with a logical 'AND'. */
export type Initiative_Expenses_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Expenses_Bool_Exp>>;
  _not?: Maybe<Initiative_Expenses_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Expenses_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  currency?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  link?: Maybe<String_Comparison_Exp>;
  link_name?: Maybe<String_Comparison_Exp>;
  poll?: Maybe<Initiative_Polls_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Initiative_Posts_Bool_Exp>;
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
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "initiative_expenses" */
export type Initiative_Expenses_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  link_name?: Maybe<Scalars['String']>;
  poll?: Maybe<Initiative_Polls_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Initiative_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Max_Order_By = {
  amount?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  link_name?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Min_Order_By = {
  amount?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  link_name?: Maybe<Order_By>;
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

/** on conflict condition type for table "initiative_expenses" */
export type Initiative_Expenses_On_Conflict = {
  constraint: Initiative_Expenses_Constraint;
  update_columns?: Array<Initiative_Expenses_Update_Column>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_expenses". */
export type Initiative_Expenses_Order_By = {
  amount?: Maybe<Order_By>;
  currency?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  link_name?: Maybe<Order_By>;
  poll?: Maybe<Initiative_Polls_Order_By>;
  poll_id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Posts_Order_By>;
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
  Amount = 'amount',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Link = 'link',
  /** column name */
  LinkName = 'link_name',
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
  amount?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  link_name?: Maybe<Scalars['String']>;
  poll_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_expenses" */
export enum Initiative_Expenses_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Link = 'link',
  /** column name */
  LinkName = 'link_name',
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
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_expenses" */
export type Initiative_Expenses_Variance_Order_By = {
  amount?: Maybe<Order_By>;
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
  /** An object relationship */
  user?: Maybe<Users>;
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
  user?: Maybe<Users_Bool_Exp>;
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
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  problem?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
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
  user?: Maybe<Users_Order_By>;
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
  /** An array relationship */
  donations: Array<Initiative_Donations>;
  /** An aggregate relationship */
  donations_aggregate: Initiative_Donations_Aggregate;
  donator?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  initiator?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  tasks: Array<Initiative_Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: Initiative_Tasks_Aggregate;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteer?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  volunteers: Array<Initiative_Volunteers>;
  /** An aggregate relationship */
  volunteers_aggregate: Initiative_Volunteers_Aggregate;
};


/** columns and relationships of "initiative_members" */
export type Initiative_MembersDonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


/** columns and relationships of "initiative_members" */
export type Initiative_MembersDonations_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


/** columns and relationships of "initiative_members" */
export type Initiative_MembersTasksArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


/** columns and relationships of "initiative_members" */
export type Initiative_MembersTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


/** columns and relationships of "initiative_members" */
export type Initiative_MembersVolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


/** columns and relationships of "initiative_members" */
export type Initiative_MembersVolunteers_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
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
  donations?: Maybe<Initiative_Donations_Bool_Exp>;
  donator?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  initiator?: Maybe<Boolean_Comparison_Exp>;
  tasks?: Maybe<Initiative_Tasks_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  volunteer?: Maybe<Boolean_Comparison_Exp>;
  volunteers?: Maybe<Initiative_Volunteers_Bool_Exp>;
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
  donations?: Maybe<Initiative_Donations_Arr_Rel_Insert_Input>;
  donator?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  initiator?: Maybe<Scalars['Boolean']>;
  tasks?: Maybe<Initiative_Tasks_Arr_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteer?: Maybe<Scalars['Boolean']>;
  volunteers?: Maybe<Initiative_Volunteers_Arr_Rel_Insert_Input>;
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
  donations_aggregate?: Maybe<Initiative_Donations_Aggregate_Order_By>;
  donator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  initiator?: Maybe<Order_By>;
  tasks_aggregate?: Maybe<Initiative_Tasks_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  volunteer?: Maybe<Order_By>;
  volunteers_aggregate?: Maybe<Initiative_Volunteers_Aggregate_Order_By>;
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
  /** An aggregate relationship */
  tasks_aggregate: Initiative_Tasks_Aggregate;
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
export type Initiative_PollsTasks_AggregateArgs = {
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

/** columns and relationships of "initiative_post_reactions" */
export type Initiative_Post_Reactions = {
  id: Scalars['bigint'];
  /** An object relationship */
  post?: Maybe<Initiative_Posts>;
  post_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Post_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Post_Reactions_Max_Order_By>;
  min?: Maybe<Initiative_Post_Reactions_Min_Order_By>;
  stddev?: Maybe<Initiative_Post_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Post_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Post_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Post_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Post_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Post_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Post_Reactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Post_Reactions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Post_Reactions_On_Conflict>;
};

/** order by avg() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_post_reactions". All fields are combined with a logical 'AND'. */
export type Initiative_Post_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Post_Reactions_Bool_Exp>>;
  _not?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Post_Reactions_Bool_Exp>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  post?: Maybe<Initiative_Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_post_reactions" */
export enum Initiative_Post_Reactions_Constraint {
  /** unique or primary key constraint */
  InitiativePostReactionsPkey = 'initiative_post_reactions_pkey'
}

/** input type for incrementing numeric columns in table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  post?: Maybe<Initiative_Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Max_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Min_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Post_Reactions>;
};

/** on conflict condition type for table "initiative_post_reactions" */
export type Initiative_Post_Reactions_On_Conflict = {
  constraint: Initiative_Post_Reactions_Constraint;
  update_columns?: Array<Initiative_Post_Reactions_Update_Column>;
  where?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_post_reactions". */
export type Initiative_Post_Reactions_Order_By = {
  id?: Maybe<Order_By>;
  post?: Maybe<Initiative_Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_post_reactions */
export type Initiative_Post_Reactions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_post_reactions" */
export enum Initiative_Post_Reactions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_post_reactions" */
export enum Initiative_Post_Reactions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** order by var_pop() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "initiative_post_reactions" */
export type Initiative_Post_Reactions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_posts" */
export type Initiative_Posts = {
  /** An array relationship */
  comments: Array<Initiative_Comments>;
  /** An aggregate relationship */
  comments_aggregate: Initiative_Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  edits: Array<Initiative_Edits>;
  /** An array relationship */
  expenses: Array<Initiative_Expenses>;
  id: Scalars['bigint'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  message?: Maybe<Scalars['String']>;
  modified_at: Scalars['timestamptz'];
  /** An array relationship */
  projects: Array<Initiative_Projects>;
  /** An array relationship */
  reactions: Array<Initiative_Post_Reactions>;
  /** An object relationship */
  thread: Initiative_Threads;
  thread_id: Scalars['Int'];
  type: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "initiative_posts" */
export type Initiative_PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};


/** columns and relationships of "initiative_posts" */
export type Initiative_PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};


/** columns and relationships of "initiative_posts" */
export type Initiative_PostsEditsArgs = {
  distinct_on?: Maybe<Array<Initiative_Edits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Edits_Order_By>>;
  where?: Maybe<Initiative_Edits_Bool_Exp>;
};


/** columns and relationships of "initiative_posts" */
export type Initiative_PostsExpensesArgs = {
  distinct_on?: Maybe<Array<Initiative_Expenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Expenses_Order_By>>;
  where?: Maybe<Initiative_Expenses_Bool_Exp>;
};


/** columns and relationships of "initiative_posts" */
export type Initiative_PostsProjectsArgs = {
  distinct_on?: Maybe<Array<Initiative_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Projects_Order_By>>;
  where?: Maybe<Initiative_Projects_Bool_Exp>;
};


/** columns and relationships of "initiative_posts" */
export type Initiative_PostsReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
};

/** aggregated selection of "initiative_posts" */
export type Initiative_Posts_Aggregate = {
  aggregate?: Maybe<Initiative_Posts_Aggregate_Fields>;
  nodes: Array<Initiative_Posts>;
};

/** aggregate fields of "initiative_posts" */
export type Initiative_Posts_Aggregate_Fields = {
  avg?: Maybe<Initiative_Posts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Initiative_Posts_Max_Fields>;
  min?: Maybe<Initiative_Posts_Min_Fields>;
  stddev?: Maybe<Initiative_Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Initiative_Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Initiative_Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Initiative_Posts_Sum_Fields>;
  var_pop?: Maybe<Initiative_Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Initiative_Posts_Var_Samp_Fields>;
  variance?: Maybe<Initiative_Posts_Variance_Fields>;
};


/** aggregate fields of "initiative_posts" */
export type Initiative_Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Initiative_Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "initiative_posts" */
export type Initiative_Posts_Aggregate_Order_By = {
  avg?: Maybe<Initiative_Posts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Initiative_Posts_Max_Order_By>;
  min?: Maybe<Initiative_Posts_Min_Order_By>;
  stddev?: Maybe<Initiative_Posts_Stddev_Order_By>;
  stddev_pop?: Maybe<Initiative_Posts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Initiative_Posts_Stddev_Samp_Order_By>;
  sum?: Maybe<Initiative_Posts_Sum_Order_By>;
  var_pop?: Maybe<Initiative_Posts_Var_Pop_Order_By>;
  var_samp?: Maybe<Initiative_Posts_Var_Samp_Order_By>;
  variance?: Maybe<Initiative_Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "initiative_posts" */
export type Initiative_Posts_Arr_Rel_Insert_Input = {
  data: Array<Initiative_Posts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Initiative_Posts_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "initiative_posts" */
export type Initiative_Posts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_posts". All fields are combined with a logical 'AND'. */
export type Initiative_Posts_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Posts_Bool_Exp>>;
  _not?: Maybe<Initiative_Posts_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Posts_Bool_Exp>>;
  comments?: Maybe<Initiative_Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  edits?: Maybe<Initiative_Edits_Bool_Exp>;
  expenses?: Maybe<Initiative_Expenses_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  modified_at?: Maybe<Timestamptz_Comparison_Exp>;
  projects?: Maybe<Initiative_Projects_Bool_Exp>;
  reactions?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
  thread?: Maybe<Initiative_Threads_Bool_Exp>;
  thread_id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_posts" */
export enum Initiative_Posts_Constraint {
  /** unique or primary key constraint */
  InitiativeMessagePkey = 'initiative_message_pkey'
}

/** input type for incrementing numeric columns in table "initiative_posts" */
export type Initiative_Posts_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  thread_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_posts" */
export type Initiative_Posts_Insert_Input = {
  comments?: Maybe<Initiative_Comments_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edits?: Maybe<Initiative_Edits_Arr_Rel_Insert_Input>;
  expenses?: Maybe<Initiative_Expenses_Arr_Rel_Insert_Input>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  projects?: Maybe<Initiative_Projects_Arr_Rel_Insert_Input>;
  reactions?: Maybe<Initiative_Post_Reactions_Arr_Rel_Insert_Input>;
  thread?: Maybe<Initiative_Threads_Obj_Rel_Insert_Input>;
  thread_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Initiative_Posts_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  thread_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_posts" */
export type Initiative_Posts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Initiative_Posts_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  thread_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "initiative_posts" */
export type Initiative_Posts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "initiative_posts" */
export type Initiative_Posts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Initiative_Posts>;
};

/** input type for inserting object relation for remote table "initiative_posts" */
export type Initiative_Posts_Obj_Rel_Insert_Input = {
  data: Initiative_Posts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Initiative_Posts_On_Conflict>;
};

/** on conflict condition type for table "initiative_posts" */
export type Initiative_Posts_On_Conflict = {
  constraint: Initiative_Posts_Constraint;
  update_columns?: Array<Initiative_Posts_Update_Column>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "initiative_posts". */
export type Initiative_Posts_Order_By = {
  comments_aggregate?: Maybe<Initiative_Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  edits_aggregate?: Maybe<Initiative_Edits_Aggregate_Order_By>;
  expenses_aggregate?: Maybe<Initiative_Expenses_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  reactions_aggregate?: Maybe<Initiative_Post_Reactions_Aggregate_Order_By>;
  thread?: Maybe<Initiative_Threads_Order_By>;
  thread_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_posts */
export type Initiative_Posts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_posts" */
export enum Initiative_Posts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Message = 'message',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_posts" */
export type Initiative_Posts_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  thread_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Initiative_Posts_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "initiative_posts" */
export type Initiative_Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Initiative_Posts_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "initiative_posts" */
export type Initiative_Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Initiative_Posts_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "initiative_posts" */
export type Initiative_Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Initiative_Posts_Sum_Fields = {
  id?: Maybe<Scalars['bigint']>;
  thread_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "initiative_posts" */
export type Initiative_Posts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_posts" */
export enum Initiative_Posts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Message = 'message',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  ThreadId = 'thread_id',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Initiative_Posts_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "initiative_posts" */
export type Initiative_Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Initiative_Posts_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "initiative_posts" */
export type Initiative_Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Initiative_Posts_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  thread_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "initiative_posts" */
export type Initiative_Posts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  thread_id?: Maybe<Order_By>;
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
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  /** An object relationship */
  poll?: Maybe<Initiative_Polls>;
  poll_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  volunteers: Array<Initiative_Volunteers>;
  /** An aggregate relationship */
  volunteers_aggregate: Initiative_Volunteers_Aggregate;
  volunteers_needed?: Maybe<Scalars['numeric']>;
};


/** columns and relationships of "initiative_tasks" */
export type Initiative_TasksVolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


/** columns and relationships of "initiative_tasks" */
export type Initiative_TasksVolunteers_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};

/** aggregated selection of "initiative_tasks" */
export type Initiative_Tasks_Aggregate = {
  aggregate?: Maybe<Initiative_Tasks_Aggregate_Fields>;
  nodes: Array<Initiative_Tasks>;
};

/** aggregate fields of "initiative_tasks" */
export type Initiative_Tasks_Aggregate_Fields = {
  avg?: Maybe<Initiative_Tasks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Initiative_Tasks_Max_Fields>;
  min?: Maybe<Initiative_Tasks_Min_Fields>;
  stddev?: Maybe<Initiative_Tasks_Stddev_Fields>;
  stddev_pop?: Maybe<Initiative_Tasks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Initiative_Tasks_Stddev_Samp_Fields>;
  sum?: Maybe<Initiative_Tasks_Sum_Fields>;
  var_pop?: Maybe<Initiative_Tasks_Var_Pop_Fields>;
  var_samp?: Maybe<Initiative_Tasks_Var_Samp_Fields>;
  variance?: Maybe<Initiative_Tasks_Variance_Fields>;
};


/** aggregate fields of "initiative_tasks" */
export type Initiative_Tasks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
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

/** aggregate avg on columns */
export type Initiative_Tasks_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  volunteers_needed?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Avg_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_tasks". All fields are combined with a logical 'AND'. */
export type Initiative_Tasks_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Tasks_Bool_Exp>>;
  _not?: Maybe<Initiative_Tasks_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Tasks_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  poll?: Maybe<Initiative_Polls_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  volunteers?: Maybe<Initiative_Volunteers_Bool_Exp>;
  volunteers_needed?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_tasks" */
export enum Initiative_Tasks_Constraint {
  /** unique or primary key constraint */
  InitiativeTasksPkey = 'initiative_tasks_pkey'
}

/** input type for incrementing numeric columns in table "initiative_tasks" */
export type Initiative_Tasks_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  volunteers_needed?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "initiative_tasks" */
export type Initiative_Tasks_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll?: Maybe<Initiative_Polls_Obj_Rel_Insert_Input>;
  poll_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers?: Maybe<Initiative_Volunteers_Arr_Rel_Insert_Input>;
  volunteers_needed?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Initiative_Tasks_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers_needed?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Initiative_Tasks_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers_needed?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
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
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  poll?: Maybe<Initiative_Polls_Order_By>;
  poll_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  volunteers_aggregate?: Maybe<Initiative_Volunteers_Aggregate_Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_tasks */
export type Initiative_Tasks_Pk_Columns_Input = {
  id: Scalars['Int'];
  initiative_id: Scalars['uuid'];
};

/** select columns of table "initiative_tasks" */
export enum Initiative_Tasks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VolunteersNeeded = 'volunteers_needed'
}

/** input type for updating data in table "initiative_tasks" */
export type Initiative_Tasks_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  poll_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
  volunteers_needed?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Initiative_Tasks_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  volunteers_needed?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Initiative_Tasks_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  volunteers_needed?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Initiative_Tasks_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  volunteers_needed?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Initiative_Tasks_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  poll_id?: Maybe<Scalars['Int']>;
  volunteers_needed?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Sum_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** update columns of table "initiative_tasks" */
export enum Initiative_Tasks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  PollId = 'poll_id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VolunteersNeeded = 'volunteers_needed'
}

/** aggregate var_pop on columns */
export type Initiative_Tasks_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  volunteers_needed?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Initiative_Tasks_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  volunteers_needed?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Initiative_Tasks_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
  volunteers_needed?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "initiative_tasks" */
export type Initiative_Tasks_Variance_Order_By = {
  id?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
  volunteers_needed?: Maybe<Order_By>;
};

/** columns and relationships of "initiative_threads" */
export type Initiative_Threads = {
  /** An object relationship */
  initiative: Initiatives;
  /** An array relationship */
  posts: Array<Initiative_Posts>;
  /** An aggregate relationship */
  posts_aggregate: Initiative_Posts_Aggregate;
};


/** columns and relationships of "initiative_threads" */
export type Initiative_ThreadsPostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
};


/** columns and relationships of "initiative_threads" */
export type Initiative_ThreadsPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
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
  posts?: Maybe<Initiative_Posts_Bool_Exp>;
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
  posts?: Maybe<Initiative_Posts_Arr_Rel_Insert_Input>;
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
  posts_aggregate?: Maybe<Initiative_Posts_Aggregate_Order_By>;
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
  id: Scalars['bigint'];
  /** An object relationship */
  initiative: Initiatives;
  initiative_id: Scalars['uuid'];
  role?: Maybe<Scalars['String']>;
  /** An object relationship */
  task?: Maybe<Initiative_Tasks>;
  task_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "initiative_volunteers" */
export type Initiative_Volunteers_Aggregate = {
  aggregate?: Maybe<Initiative_Volunteers_Aggregate_Fields>;
  nodes: Array<Initiative_Volunteers>;
};

/** aggregate fields of "initiative_volunteers" */
export type Initiative_Volunteers_Aggregate_Fields = {
  avg?: Maybe<Initiative_Volunteers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Initiative_Volunteers_Max_Fields>;
  min?: Maybe<Initiative_Volunteers_Min_Fields>;
  stddev?: Maybe<Initiative_Volunteers_Stddev_Fields>;
  stddev_pop?: Maybe<Initiative_Volunteers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Initiative_Volunteers_Stddev_Samp_Fields>;
  sum?: Maybe<Initiative_Volunteers_Sum_Fields>;
  var_pop?: Maybe<Initiative_Volunteers_Var_Pop_Fields>;
  var_samp?: Maybe<Initiative_Volunteers_Var_Samp_Fields>;
  variance?: Maybe<Initiative_Volunteers_Variance_Fields>;
};


/** aggregate fields of "initiative_volunteers" */
export type Initiative_Volunteers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
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

/** aggregate avg on columns */
export type Initiative_Volunteers_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  task_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Avg_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "initiative_volunteers". All fields are combined with a logical 'AND'. */
export type Initiative_Volunteers_Bool_Exp = {
  _and?: Maybe<Array<Initiative_Volunteers_Bool_Exp>>;
  _not?: Maybe<Initiative_Volunteers_Bool_Exp>;
  _or?: Maybe<Array<Initiative_Volunteers_Bool_Exp>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  initiative?: Maybe<Initiatives_Bool_Exp>;
  initiative_id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  task?: Maybe<Initiative_Tasks_Bool_Exp>;
  task_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "initiative_volunteers" */
export enum Initiative_Volunteers_Constraint {
  /** unique or primary key constraint */
  InitiativeVolunteersPkey = 'initiative_volunteers_pkey'
}

/** input type for incrementing numeric columns in table "initiative_volunteers" */
export type Initiative_Volunteers_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  task_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "initiative_volunteers" */
export type Initiative_Volunteers_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  initiative?: Maybe<Initiatives_Obj_Rel_Insert_Input>;
  initiative_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  task?: Maybe<Initiative_Tasks_Obj_Rel_Insert_Input>;
  task_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Initiative_Volunteers_Max_Fields = {
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Max_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Initiative_Volunteers_Min_Fields = {
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Min_Order_By = {
  id?: Maybe<Order_By>;
  initiative_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
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
  id?: Maybe<Order_By>;
  initiative?: Maybe<Initiatives_Order_By>;
  initiative_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  task?: Maybe<Initiative_Tasks_Order_By>;
  task_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: initiative_volunteers */
export type Initiative_Volunteers_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "initiative_volunteers" */
export enum Initiative_Volunteers_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Role = 'role',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "initiative_volunteers" */
export type Initiative_Volunteers_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  initiative_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Initiative_Volunteers_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  task_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Initiative_Volunteers_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  task_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Initiative_Volunteers_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  task_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Initiative_Volunteers_Sum_Fields = {
  id?: Maybe<Scalars['bigint']>;
  task_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Sum_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** update columns of table "initiative_volunteers" */
export enum Initiative_Volunteers_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InitiativeId = 'initiative_id',
  /** column name */
  Role = 'role',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Initiative_Volunteers_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  task_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Initiative_Volunteers_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  task_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Initiative_Volunteers_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  task_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "initiative_volunteers" */
export type Initiative_Volunteers_Variance_Order_By = {
  id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
};

/** columns and relationships of "initiatives" */
export type Initiatives = {
  address?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  donations: Array<Initiative_Donations>;
  /** An aggregate relationship */
  donations_aggregate: Initiative_Donations_Aggregate;
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
  /** An aggregate relationship */
  tasks_aggregate: Initiative_Tasks_Aggregate;
  /** An array relationship */
  tenders: Array<Tenders>;
  /** An array relationship */
  threads: Array<Initiative_Threads>;
  /** An array relationship */
  visits: Array<Initiative_Visits>;
  /** An array relationship */
  volunteers: Array<Initiative_Volunteers>;
  /** An aggregate relationship */
  volunteers_aggregate: Initiative_Volunteers_Aggregate;
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
export type InitiativesDonations_AggregateArgs = {
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
export type InitiativesTasks_AggregateArgs = {
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


/** columns and relationships of "initiatives" */
export type InitiativesVolunteers_AggregateArgs = {
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
  address?: Maybe<String_Comparison_Exp>;
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
  address?: Maybe<Scalars['String']>;
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
  address?: Maybe<Order_By>;
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
  Address = 'address',
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
  address?: Maybe<Scalars['String']>;
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
  Address = 'address',
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

/** columns and relationships of "map_entries" */
export type Map_Entries = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['bigint']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregated selection of "map_entries" */
export type Map_Entries_Aggregate = {
  aggregate?: Maybe<Map_Entries_Aggregate_Fields>;
  nodes: Array<Map_Entries>;
};

/** aggregate fields of "map_entries" */
export type Map_Entries_Aggregate_Fields = {
  avg?: Maybe<Map_Entries_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Map_Entries_Max_Fields>;
  min?: Maybe<Map_Entries_Min_Fields>;
  stddev?: Maybe<Map_Entries_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Entries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Entries_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Entries_Sum_Fields>;
  var_pop?: Maybe<Map_Entries_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Entries_Var_Samp_Fields>;
  variance?: Maybe<Map_Entries_Variance_Fields>;
};


/** aggregate fields of "map_entries" */
export type Map_Entries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Entries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Map_Entries_Avg_Fields = {
  members?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "map_entries". All fields are combined with a logical 'AND'. */
export type Map_Entries_Bool_Exp = {
  _and?: Maybe<Array<Map_Entries_Bool_Exp>>;
  _not?: Maybe<Map_Entries_Bool_Exp>;
  _or?: Maybe<Array<Map_Entries_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  members?: Maybe<Bigint_Comparison_Exp>;
  modified_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Map_Entries_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['bigint']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Map_Entries_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['bigint']>;
  modified_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "map_entries". */
export type Map_Entries_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  members?: Maybe<Order_By>;
  modified_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** select columns of table "map_entries" */
export enum Map_Entries_Select_Column {
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
  Members = 'members',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Map_Entries_Stddev_Fields = {
  members?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Map_Entries_Stddev_Pop_Fields = {
  members?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Map_Entries_Stddev_Samp_Fields = {
  members?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Map_Entries_Sum_Fields = {
  members?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Map_Entries_Var_Pop_Fields = {
  members?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Map_Entries_Var_Samp_Fields = {
  members?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Map_Entries_Variance_Fields = {
  members?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "files" */
  delete_files?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "files" */
  delete_files_by_pk?: Maybe<Files>;
  /** delete data from the table: "initiative_comment_reactions" */
  delete_initiative_comment_reactions?: Maybe<Initiative_Comment_Reactions_Mutation_Response>;
  /** delete single row from the table: "initiative_comment_reactions" */
  delete_initiative_comment_reactions_by_pk?: Maybe<Initiative_Comment_Reactions>;
  /** delete data from the table: "initiative_comments" */
  delete_initiative_comments?: Maybe<Initiative_Comments_Mutation_Response>;
  /** delete single row from the table: "initiative_comments" */
  delete_initiative_comments_by_pk?: Maybe<Initiative_Comments>;
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
  /** delete data from the table: "initiative_post_reactions" */
  delete_initiative_post_reactions?: Maybe<Initiative_Post_Reactions_Mutation_Response>;
  /** delete single row from the table: "initiative_post_reactions" */
  delete_initiative_post_reactions_by_pk?: Maybe<Initiative_Post_Reactions>;
  /** delete data from the table: "initiative_posts" */
  delete_initiative_posts?: Maybe<Initiative_Posts_Mutation_Response>;
  /** delete single row from the table: "initiative_posts" */
  delete_initiative_posts_by_pk?: Maybe<Initiative_Posts>;
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
  /** insert data into the table: "initiative_comment_reactions" */
  insert_initiative_comment_reactions?: Maybe<Initiative_Comment_Reactions_Mutation_Response>;
  /** insert a single row into the table: "initiative_comment_reactions" */
  insert_initiative_comment_reactions_one?: Maybe<Initiative_Comment_Reactions>;
  /** insert data into the table: "initiative_comments" */
  insert_initiative_comments?: Maybe<Initiative_Comments_Mutation_Response>;
  /** insert a single row into the table: "initiative_comments" */
  insert_initiative_comments_one?: Maybe<Initiative_Comments>;
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
  /** insert data into the table: "initiative_post_reactions" */
  insert_initiative_post_reactions?: Maybe<Initiative_Post_Reactions_Mutation_Response>;
  /** insert a single row into the table: "initiative_post_reactions" */
  insert_initiative_post_reactions_one?: Maybe<Initiative_Post_Reactions>;
  /** insert data into the table: "initiative_posts" */
  insert_initiative_posts?: Maybe<Initiative_Posts_Mutation_Response>;
  /** insert a single row into the table: "initiative_posts" */
  insert_initiative_posts_one?: Maybe<Initiative_Posts>;
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
  /** update data of the table: "initiative_comment_reactions" */
  update_initiative_comment_reactions?: Maybe<Initiative_Comment_Reactions_Mutation_Response>;
  /** update single row of the table: "initiative_comment_reactions" */
  update_initiative_comment_reactions_by_pk?: Maybe<Initiative_Comment_Reactions>;
  /** update data of the table: "initiative_comments" */
  update_initiative_comments?: Maybe<Initiative_Comments_Mutation_Response>;
  /** update single row of the table: "initiative_comments" */
  update_initiative_comments_by_pk?: Maybe<Initiative_Comments>;
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
  /** update data of the table: "initiative_post_reactions" */
  update_initiative_post_reactions?: Maybe<Initiative_Post_Reactions_Mutation_Response>;
  /** update single row of the table: "initiative_post_reactions" */
  update_initiative_post_reactions_by_pk?: Maybe<Initiative_Post_Reactions>;
  /** update data of the table: "initiative_posts" */
  update_initiative_posts?: Maybe<Initiative_Posts_Mutation_Response>;
  /** update single row of the table: "initiative_posts" */
  update_initiative_posts_by_pk?: Maybe<Initiative_Posts>;
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
export type Mutation_RootDelete_Initiative_Comment_ReactionsArgs = {
  where: Initiative_Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Comment_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_CommentsArgs = {
  where: Initiative_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Comments_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Initiative_Post_ReactionsArgs = {
  where: Initiative_Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Post_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Initiative_PostsArgs = {
  where: Initiative_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Initiative_Posts_By_PkArgs = {
  id: Scalars['bigint'];
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
  initiative_id: Scalars['uuid'];
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
  id: Scalars['bigint'];
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
export type Mutation_RootInsert_Initiative_Comment_ReactionsArgs = {
  objects: Array<Initiative_Comment_Reactions_Insert_Input>;
  on_conflict?: Maybe<Initiative_Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Comment_Reactions_OneArgs = {
  object: Initiative_Comment_Reactions_Insert_Input;
  on_conflict?: Maybe<Initiative_Comment_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_CommentsArgs = {
  objects: Array<Initiative_Comments_Insert_Input>;
  on_conflict?: Maybe<Initiative_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Comments_OneArgs = {
  object: Initiative_Comments_Insert_Input;
  on_conflict?: Maybe<Initiative_Comments_On_Conflict>;
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
export type Mutation_RootInsert_Initiative_Post_ReactionsArgs = {
  objects: Array<Initiative_Post_Reactions_Insert_Input>;
  on_conflict?: Maybe<Initiative_Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Post_Reactions_OneArgs = {
  object: Initiative_Post_Reactions_Insert_Input;
  on_conflict?: Maybe<Initiative_Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_PostsArgs = {
  objects: Array<Initiative_Posts_Insert_Input>;
  on_conflict?: Maybe<Initiative_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Initiative_Posts_OneArgs = {
  object: Initiative_Posts_Insert_Input;
  on_conflict?: Maybe<Initiative_Posts_On_Conflict>;
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
export type Mutation_RootUpdate_Initiative_Comment_ReactionsArgs = {
  _inc?: Maybe<Initiative_Comment_Reactions_Inc_Input>;
  _set?: Maybe<Initiative_Comment_Reactions_Set_Input>;
  where: Initiative_Comment_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Comment_Reactions_By_PkArgs = {
  _inc?: Maybe<Initiative_Comment_Reactions_Inc_Input>;
  _set?: Maybe<Initiative_Comment_Reactions_Set_Input>;
  pk_columns: Initiative_Comment_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_CommentsArgs = {
  _inc?: Maybe<Initiative_Comments_Inc_Input>;
  _set?: Maybe<Initiative_Comments_Set_Input>;
  where: Initiative_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Comments_By_PkArgs = {
  _inc?: Maybe<Initiative_Comments_Inc_Input>;
  _set?: Maybe<Initiative_Comments_Set_Input>;
  pk_columns: Initiative_Comments_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Initiative_Post_ReactionsArgs = {
  _inc?: Maybe<Initiative_Post_Reactions_Inc_Input>;
  _set?: Maybe<Initiative_Post_Reactions_Set_Input>;
  where: Initiative_Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Post_Reactions_By_PkArgs = {
  _inc?: Maybe<Initiative_Post_Reactions_Inc_Input>;
  _set?: Maybe<Initiative_Post_Reactions_Set_Input>;
  pk_columns: Initiative_Post_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_PostsArgs = {
  _inc?: Maybe<Initiative_Posts_Inc_Input>;
  _set?: Maybe<Initiative_Posts_Set_Input>;
  where: Initiative_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Initiative_Posts_By_PkArgs = {
  _inc?: Maybe<Initiative_Posts_Inc_Input>;
  _set?: Maybe<Initiative_Posts_Set_Input>;
  pk_columns: Initiative_Posts_Pk_Columns_Input;
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

/** columns and relationships of "org_members" */
export type Org_Members = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  role_description?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "org_members" */
export type Org_Members_Aggregate_Order_By = {
  avg?: Maybe<Org_Members_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Org_Members_Max_Order_By>;
  min?: Maybe<Org_Members_Min_Order_By>;
  stddev?: Maybe<Org_Members_Stddev_Order_By>;
  stddev_pop?: Maybe<Org_Members_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Org_Members_Stddev_Samp_Order_By>;
  sum?: Maybe<Org_Members_Sum_Order_By>;
  var_pop?: Maybe<Org_Members_Var_Pop_Order_By>;
  var_samp?: Maybe<Org_Members_Var_Samp_Order_By>;
  variance?: Maybe<Org_Members_Variance_Order_By>;
};

/** order by avg() on columns of table "org_members" */
export type Org_Members_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "org_members". All fields are combined with a logical 'AND'. */
export type Org_Members_Bool_Exp = {
  _and?: Maybe<Array<Org_Members_Bool_Exp>>;
  _not?: Maybe<Org_Members_Bool_Exp>;
  _or?: Maybe<Array<Org_Members_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  org?: Maybe<Orgs_Bool_Exp>;
  org_id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  role_description?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "org_members" */
export type Org_Members_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  role_description?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "org_members" */
export type Org_Members_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  role_description?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "org_members". */
export type Org_Members_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Orgs_Order_By>;
  org_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  role_description?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "org_members" */
export enum Org_Members_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  Role = 'role',
  /** column name */
  RoleDescription = 'role_description',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "org_members" */
export type Org_Members_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "org_members" */
export type Org_Members_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "org_members" */
export type Org_Members_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by sum() on columns of table "org_members" */
export type Org_Members_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "org_members" */
export type Org_Members_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "org_members" */
export type Org_Members_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by variance() on columns of table "org_members" */
export type Org_Members_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "org_projects" */
export type Org_Projects = {
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
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
  image?: Maybe<Scalars['String']>;
  /** An array relationship */
  initiative_projects: Array<Initiative_Projects>;
  /** An array relationship */
  members: Array<Org_Members>;
  modified_at: Scalars['timestamptz'];
  name?: Maybe<Scalars['String']>;
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
export type OrgsMembersArgs = {
  distinct_on?: Maybe<Array<Org_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Members_Order_By>>;
  where?: Maybe<Org_Members_Bool_Exp>;
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
  image?: Maybe<String_Comparison_Exp>;
  initiative_projects?: Maybe<Initiative_Projects_Bool_Exp>;
  members?: Maybe<Org_Members_Bool_Exp>;
  modified_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  projects?: Maybe<Org_Projects_Bool_Exp>;
  tags?: Maybe<Org_Tags_Bool_Exp>;
  tenders?: Maybe<Tenders_Bool_Exp>;
};

export type Orgs_Nearby_Args = {
  limit?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['geometry']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  own?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** Ordering options when selecting data from "orgs". */
export type Orgs_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  initiative_projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  members_aggregate?: Maybe<Org_Members_Aggregate_Order_By>;
  modified_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Name = 'name'
}

export type Query_Root = {
  /** fetch data from the table: "entries" */
  entries: Array<Entries>;
  /** execute function "entries_nearby" which returns "entries" */
  entries_nearby: Array<Entries>;
  /** fetch data from the table: "entry_members" */
  entry_members: Array<Entry_Members>;
  /** fetch data from the table: "entry_visits" */
  entry_visits: Array<Entry_Visits>;
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
  /** fetch data from the table: "initiative_comment_reactions" */
  initiative_comment_reactions: Array<Initiative_Comment_Reactions>;
  /** fetch data from the table: "initiative_comment_reactions" using primary key columns */
  initiative_comment_reactions_by_pk?: Maybe<Initiative_Comment_Reactions>;
  /** fetch data from the table: "initiative_comments" */
  initiative_comments: Array<Initiative_Comments>;
  /** fetch aggregated fields from the table: "initiative_comments" */
  initiative_comments_aggregate: Initiative_Comments_Aggregate;
  /** fetch data from the table: "initiative_comments" using primary key columns */
  initiative_comments_by_pk?: Maybe<Initiative_Comments>;
  /** fetch data from the table: "initiative_donations" */
  initiative_donations: Array<Initiative_Donations>;
  /** fetch aggregated fields from the table: "initiative_donations" */
  initiative_donations_aggregate: Initiative_Donations_Aggregate;
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
  /** fetch data from the table: "initiative_post_reactions" */
  initiative_post_reactions: Array<Initiative_Post_Reactions>;
  /** fetch data from the table: "initiative_post_reactions" using primary key columns */
  initiative_post_reactions_by_pk?: Maybe<Initiative_Post_Reactions>;
  /** fetch data from the table: "initiative_posts" */
  initiative_posts: Array<Initiative_Posts>;
  /** fetch aggregated fields from the table: "initiative_posts" */
  initiative_posts_aggregate: Initiative_Posts_Aggregate;
  /** fetch data from the table: "initiative_posts" using primary key columns */
  initiative_posts_by_pk?: Maybe<Initiative_Posts>;
  /** An array relationship */
  initiative_projects: Array<Initiative_Projects>;
  /** fetch data from the table: "initiative_projects" using primary key columns */
  initiative_projects_by_pk?: Maybe<Initiative_Projects>;
  /** An array relationship */
  initiative_tags: Array<Initiative_Tags>;
  /** fetch data from the table: "initiative_tags" using primary key columns */
  initiative_tags_by_pk?: Maybe<Initiative_Tags>;
  /** fetch data from the table: "initiative_tasks" */
  initiative_tasks: Array<Initiative_Tasks>;
  /** fetch aggregated fields from the table: "initiative_tasks" */
  initiative_tasks_aggregate: Initiative_Tasks_Aggregate;
  /** fetch data from the table: "initiative_tasks" using primary key columns */
  initiative_tasks_by_pk?: Maybe<Initiative_Tasks>;
  /** fetch data from the table: "initiative_threads" */
  initiative_threads: Array<Initiative_Threads>;
  /** An array relationship */
  initiative_visits: Array<Initiative_Visits>;
  /** fetch data from the table: "initiative_visits" using primary key columns */
  initiative_visits_by_pk?: Maybe<Initiative_Visits>;
  /** An array relationship */
  initiative_volunteers: Array<Initiative_Volunteers>;
  /** An aggregate relationship */
  initiative_volunteers_aggregate: Initiative_Volunteers_Aggregate;
  /** fetch data from the table: "initiative_volunteers" using primary key columns */
  initiative_volunteers_by_pk?: Maybe<Initiative_Volunteers>;
  /** fetch data from the table: "initiatives" */
  initiatives: Array<Initiatives>;
  /** fetch data from the table: "initiatives" using primary key columns */
  initiatives_by_pk?: Maybe<Initiatives>;
  /** execute function "initiatives_nearby" which returns "initiatives" */
  initiatives_nearby: Array<Initiatives>;
  /** fetch data from the table: "map_entries" */
  map_entries: Array<Map_Entries>;
  /** fetch aggregated fields from the table: "map_entries" */
  map_entries_aggregate: Map_Entries_Aggregate;
  /** An array relationship */
  org_members: Array<Org_Members>;
  /** fetch data from the table: "org_members" using primary key columns */
  org_members_by_pk?: Maybe<Org_Members>;
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
  /** execute function "orgs_nearby" which returns "orgs" */
  orgs_nearby: Array<Orgs>;
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


export type Query_RootEntriesArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


export type Query_RootEntries_NearbyArgs = {
  args: Entries_Nearby_Args;
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


export type Query_RootEntry_MembersArgs = {
  distinct_on?: Maybe<Array<Entry_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Members_Order_By>>;
  where?: Maybe<Entry_Members_Bool_Exp>;
};


export type Query_RootEntry_VisitsArgs = {
  distinct_on?: Maybe<Array<Entry_Visits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Visits_Order_By>>;
  where?: Maybe<Entry_Visits_Bool_Exp>;
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


export type Query_RootInitiative_Comment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comment_Reactions_Order_By>>;
  where?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
};


export type Query_RootInitiative_Comment_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInitiative_CommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};


export type Query_RootInitiative_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};


export type Query_RootInitiative_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInitiative_DonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


export type Query_RootInitiative_Donations_AggregateArgs = {
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


export type Query_RootInitiative_Post_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
};


export type Query_RootInitiative_Post_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootInitiative_PostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
};


export type Query_RootInitiative_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
};


export type Query_RootInitiative_Posts_By_PkArgs = {
  id: Scalars['bigint'];
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


export type Query_RootInitiative_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


export type Query_RootInitiative_Tasks_By_PkArgs = {
  id: Scalars['Int'];
  initiative_id: Scalars['uuid'];
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


export type Query_RootInitiative_Volunteers_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


export type Query_RootInitiative_Volunteers_By_PkArgs = {
  id: Scalars['bigint'];
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


export type Query_RootMap_EntriesArgs = {
  distinct_on?: Maybe<Array<Map_Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Map_Entries_Order_By>>;
  where?: Maybe<Map_Entries_Bool_Exp>;
};


export type Query_RootMap_Entries_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Map_Entries_Order_By>>;
  where?: Maybe<Map_Entries_Bool_Exp>;
};


export type Query_RootOrg_MembersArgs = {
  distinct_on?: Maybe<Array<Org_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Members_Order_By>>;
  where?: Maybe<Org_Members_Bool_Exp>;
};


export type Query_RootOrg_Members_By_PkArgs = {
  id: Scalars['Int'];
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


export type Query_RootOrgs_NearbyArgs = {
  args: Orgs_Nearby_Args;
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
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
  /** fetch data from the table: "entries" */
  entries: Array<Entries>;
  /** execute function "entries_nearby" which returns "entries" */
  entries_nearby: Array<Entries>;
  /** fetch data from the table: "entry_members" */
  entry_members: Array<Entry_Members>;
  /** fetch data from the table: "entry_visits" */
  entry_visits: Array<Entry_Visits>;
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
  /** fetch data from the table: "initiative_comment_reactions" */
  initiative_comment_reactions: Array<Initiative_Comment_Reactions>;
  /** fetch data from the table: "initiative_comment_reactions" using primary key columns */
  initiative_comment_reactions_by_pk?: Maybe<Initiative_Comment_Reactions>;
  /** fetch data from the table: "initiative_comments" */
  initiative_comments: Array<Initiative_Comments>;
  /** fetch aggregated fields from the table: "initiative_comments" */
  initiative_comments_aggregate: Initiative_Comments_Aggregate;
  /** fetch data from the table: "initiative_comments" using primary key columns */
  initiative_comments_by_pk?: Maybe<Initiative_Comments>;
  /** fetch data from the table: "initiative_donations" */
  initiative_donations: Array<Initiative_Donations>;
  /** fetch aggregated fields from the table: "initiative_donations" */
  initiative_donations_aggregate: Initiative_Donations_Aggregate;
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
  /** fetch data from the table: "initiative_post_reactions" */
  initiative_post_reactions: Array<Initiative_Post_Reactions>;
  /** fetch data from the table: "initiative_post_reactions" using primary key columns */
  initiative_post_reactions_by_pk?: Maybe<Initiative_Post_Reactions>;
  /** fetch data from the table: "initiative_posts" */
  initiative_posts: Array<Initiative_Posts>;
  /** fetch aggregated fields from the table: "initiative_posts" */
  initiative_posts_aggregate: Initiative_Posts_Aggregate;
  /** fetch data from the table: "initiative_posts" using primary key columns */
  initiative_posts_by_pk?: Maybe<Initiative_Posts>;
  /** An array relationship */
  initiative_projects: Array<Initiative_Projects>;
  /** fetch data from the table: "initiative_projects" using primary key columns */
  initiative_projects_by_pk?: Maybe<Initiative_Projects>;
  /** An array relationship */
  initiative_tags: Array<Initiative_Tags>;
  /** fetch data from the table: "initiative_tags" using primary key columns */
  initiative_tags_by_pk?: Maybe<Initiative_Tags>;
  /** fetch data from the table: "initiative_tasks" */
  initiative_tasks: Array<Initiative_Tasks>;
  /** fetch aggregated fields from the table: "initiative_tasks" */
  initiative_tasks_aggregate: Initiative_Tasks_Aggregate;
  /** fetch data from the table: "initiative_tasks" using primary key columns */
  initiative_tasks_by_pk?: Maybe<Initiative_Tasks>;
  /** fetch data from the table: "initiative_threads" */
  initiative_threads: Array<Initiative_Threads>;
  /** An array relationship */
  initiative_visits: Array<Initiative_Visits>;
  /** fetch data from the table: "initiative_visits" using primary key columns */
  initiative_visits_by_pk?: Maybe<Initiative_Visits>;
  /** An array relationship */
  initiative_volunteers: Array<Initiative_Volunteers>;
  /** An aggregate relationship */
  initiative_volunteers_aggregate: Initiative_Volunteers_Aggregate;
  /** fetch data from the table: "initiative_volunteers" using primary key columns */
  initiative_volunteers_by_pk?: Maybe<Initiative_Volunteers>;
  /** fetch data from the table: "initiatives" */
  initiatives: Array<Initiatives>;
  /** fetch data from the table: "initiatives" using primary key columns */
  initiatives_by_pk?: Maybe<Initiatives>;
  /** execute function "initiatives_nearby" which returns "initiatives" */
  initiatives_nearby: Array<Initiatives>;
  /** fetch data from the table: "map_entries" */
  map_entries: Array<Map_Entries>;
  /** fetch aggregated fields from the table: "map_entries" */
  map_entries_aggregate: Map_Entries_Aggregate;
  /** An array relationship */
  org_members: Array<Org_Members>;
  /** fetch data from the table: "org_members" using primary key columns */
  org_members_by_pk?: Maybe<Org_Members>;
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
  /** execute function "orgs_nearby" which returns "orgs" */
  orgs_nearby: Array<Orgs>;
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


export type Subscription_RootEntriesArgs = {
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


export type Subscription_RootEntries_NearbyArgs = {
  args: Entries_Nearby_Args;
  distinct_on?: Maybe<Array<Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entries_Order_By>>;
  where?: Maybe<Entries_Bool_Exp>;
};


export type Subscription_RootEntry_MembersArgs = {
  distinct_on?: Maybe<Array<Entry_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Members_Order_By>>;
  where?: Maybe<Entry_Members_Bool_Exp>;
};


export type Subscription_RootEntry_VisitsArgs = {
  distinct_on?: Maybe<Array<Entry_Visits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entry_Visits_Order_By>>;
  where?: Maybe<Entry_Visits_Bool_Exp>;
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


export type Subscription_RootInitiative_Comment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comment_Reactions_Order_By>>;
  where?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
};


export type Subscription_RootInitiative_Comment_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootInitiative_CommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};


export type Subscription_RootInitiative_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};


export type Subscription_RootInitiative_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInitiative_DonationsArgs = {
  distinct_on?: Maybe<Array<Initiative_Donations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Donations_Order_By>>;
  where?: Maybe<Initiative_Donations_Bool_Exp>;
};


export type Subscription_RootInitiative_Donations_AggregateArgs = {
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


export type Subscription_RootInitiative_Post_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
};


export type Subscription_RootInitiative_Post_Reactions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootInitiative_PostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
};


export type Subscription_RootInitiative_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
};


export type Subscription_RootInitiative_Posts_By_PkArgs = {
  id: Scalars['bigint'];
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


export type Subscription_RootInitiative_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Tasks_Order_By>>;
  where?: Maybe<Initiative_Tasks_Bool_Exp>;
};


export type Subscription_RootInitiative_Tasks_By_PkArgs = {
  id: Scalars['Int'];
  initiative_id: Scalars['uuid'];
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


export type Subscription_RootInitiative_Volunteers_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


export type Subscription_RootInitiative_Volunteers_By_PkArgs = {
  id: Scalars['bigint'];
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


export type Subscription_RootMap_EntriesArgs = {
  distinct_on?: Maybe<Array<Map_Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Map_Entries_Order_By>>;
  where?: Maybe<Map_Entries_Bool_Exp>;
};


export type Subscription_RootMap_Entries_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Entries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Map_Entries_Order_By>>;
  where?: Maybe<Map_Entries_Bool_Exp>;
};


export type Subscription_RootOrg_MembersArgs = {
  distinct_on?: Maybe<Array<Org_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Members_Order_By>>;
  where?: Maybe<Org_Members_Bool_Exp>;
};


export type Subscription_RootOrg_Members_By_PkArgs = {
  id: Scalars['Int'];
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


export type Subscription_RootOrgs_NearbyArgs = {
  args: Orgs_Nearby_Args;
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
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
  comment_reactions: Array<Initiative_Comment_Reactions>;
  /** An array relationship */
  comments: Array<Initiative_Comments>;
  /** An aggregate relationship */
  comments_aggregate: Initiative_Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  donations: Array<Initiative_Donations>;
  /** An aggregate relationship */
  donations_aggregate: Initiative_Donations_Aggregate;
  /** An array relationship */
  edits: Array<Initiative_Edits>;
  /** An array relationship */
  expenses: Array<Initiative_Expenses>;
  /** An array relationship */
  files: Array<Files>;
  id: Scalars['uuid'];
  /** An array relationship */
  initiative_infos: Array<Initiative_Info>;
  /** An array relationship */
  initiative_members: Array<Initiative_Members>;
  /** An aggregate relationship */
  initiative_members_aggregate: Initiative_Members_Aggregate;
  /** An array relationship */
  initiative_visits: Array<Initiative_Visits>;
  /** An array relationship */
  initiative_volunteers: Array<Initiative_Volunteers>;
  /** An aggregate relationship */
  initiative_volunteers_aggregate: Initiative_Volunteers_Aggregate;
  /** An array relationship */
  org_members: Array<Org_Members>;
  /** An array relationship */
  org_projects: Array<Org_Projects>;
  /** An array relationship */
  post_reactions: Array<Initiative_Post_Reactions>;
  /** An array relationship */
  posts: Array<Initiative_Posts>;
  /** An aggregate relationship */
  posts_aggregate: Initiative_Posts_Aggregate;
  /** An array relationship */
  projects: Array<Initiative_Projects>;
  /** An array relationship */
  tasks: Array<Initiative_Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: Initiative_Tasks_Aggregate;
  /** An array relationship */
  tenders: Array<Tenders>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  votes: Array<Initiative_Poll_Votes>;
};


/** columns and relationships of "users" */
export type UsersComment_ReactionsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comment_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comment_Reactions_Order_By>>;
  where?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Comments_Order_By>>;
  where?: Maybe<Initiative_Comments_Bool_Exp>;
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
export type UsersDonations_AggregateArgs = {
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
export type UsersInitiative_InfosArgs = {
  distinct_on?: Maybe<Array<Initiative_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Info_Order_By>>;
  where?: Maybe<Initiative_Info_Bool_Exp>;
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
export type UsersInitiative_VolunteersArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInitiative_Volunteers_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Volunteers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Volunteers_Order_By>>;
  where?: Maybe<Initiative_Volunteers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrg_MembersArgs = {
  distinct_on?: Maybe<Array<Org_Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Org_Members_Order_By>>;
  where?: Maybe<Org_Members_Bool_Exp>;
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
  distinct_on?: Maybe<Array<Initiative_Post_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Post_Reactions_Order_By>>;
  where?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Initiative_Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Initiative_Posts_Order_By>>;
  where?: Maybe<Initiative_Posts_Bool_Exp>;
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
export type UsersTasks_AggregateArgs = {
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
  comment_reactions?: Maybe<Initiative_Comment_Reactions_Bool_Exp>;
  comments?: Maybe<Initiative_Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  donations?: Maybe<Initiative_Donations_Bool_Exp>;
  edits?: Maybe<Initiative_Edits_Bool_Exp>;
  expenses?: Maybe<Initiative_Expenses_Bool_Exp>;
  files?: Maybe<Files_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  initiative_infos?: Maybe<Initiative_Info_Bool_Exp>;
  initiative_members?: Maybe<Initiative_Members_Bool_Exp>;
  initiative_visits?: Maybe<Initiative_Visits_Bool_Exp>;
  initiative_volunteers?: Maybe<Initiative_Volunteers_Bool_Exp>;
  org_members?: Maybe<Org_Members_Bool_Exp>;
  org_projects?: Maybe<Org_Projects_Bool_Exp>;
  post_reactions?: Maybe<Initiative_Post_Reactions_Bool_Exp>;
  posts?: Maybe<Initiative_Posts_Bool_Exp>;
  projects?: Maybe<Initiative_Projects_Bool_Exp>;
  tasks?: Maybe<Initiative_Tasks_Bool_Exp>;
  tenders?: Maybe<Tenders_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  votes?: Maybe<Initiative_Poll_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: Maybe<Order_By>;
  comment_reactions_aggregate?: Maybe<Initiative_Comment_Reactions_Aggregate_Order_By>;
  comments_aggregate?: Maybe<Initiative_Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  donations_aggregate?: Maybe<Initiative_Donations_Aggregate_Order_By>;
  edits_aggregate?: Maybe<Initiative_Edits_Aggregate_Order_By>;
  expenses_aggregate?: Maybe<Initiative_Expenses_Aggregate_Order_By>;
  files_aggregate?: Maybe<Files_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  initiative_infos_aggregate?: Maybe<Initiative_Info_Aggregate_Order_By>;
  initiative_members_aggregate?: Maybe<Initiative_Members_Aggregate_Order_By>;
  initiative_visits_aggregate?: Maybe<Initiative_Visits_Aggregate_Order_By>;
  initiative_volunteers_aggregate?: Maybe<Initiative_Volunteers_Aggregate_Order_By>;
  org_members_aggregate?: Maybe<Org_Members_Aggregate_Order_By>;
  org_projects_aggregate?: Maybe<Org_Projects_Aggregate_Order_By>;
  post_reactions_aggregate?: Maybe<Initiative_Post_Reactions_Aggregate_Order_By>;
  posts_aggregate?: Maybe<Initiative_Posts_Aggregate_Order_By>;
  projects_aggregate?: Maybe<Initiative_Projects_Aggregate_Order_By>;
  tasks_aggregate?: Maybe<Initiative_Tasks_Aggregate_Order_By>;
  tenders_aggregate?: Maybe<Tenders_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
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

export type UserQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type UserQuery = { users_by_pk?: { id: any, avatar_url?: string | null | undefined, created_at: any, display_name?: string | null | undefined } | null | undefined };

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


export type AddInitiativeMutation = { insert_initiatives_one?: { created_at: any, description?: string | null | undefined, geom?: any | null | undefined, id: any, image?: string | null | undefined, name?: string | null | undefined } | null | undefined };

export type DeleteInitiativeMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
}>;


export type DeleteInitiativeMutation = { delete_initiatives_by_pk?: { id: any } | null | undefined };

export type DeleteInitiativeMemberMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type DeleteInitiativeMemberMutation = { delete_initiative_members?: { affected_rows: number, returning: Array<{ initiative_id: any, user_id?: any | null | undefined }> } | null | undefined };

export type AddInitiativeMemberMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
  contractor?: Maybe<Scalars['Boolean']>;
  donator?: Maybe<Scalars['Boolean']>;
  volunteer?: Maybe<Scalars['Boolean']>;
}>;


export type AddInitiativeMemberMutation = { insert_initiative_members_one?: { user_id?: any | null | undefined, initiative_id: any } | null | undefined };

export type AddInitiativeVisitMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type AddInitiativeVisitMutation = { insert_initiative_visits_one?: { initiative: { id: any } } | null | undefined };

export type InsertFileMutationVariables = Exact<{
  file: Files_Insert_Input;
}>;


export type InsertFileMutation = { insert_files_one?: { id: any } | null | undefined };

export type DeleteFilesMutationVariables = Exact<{
  where: Files_Bool_Exp;
}>;


export type DeleteFilesMutation = { delete_files?: { affected_rows: number } | null | undefined };

export type InitiativeFieldsFragment = { geom?: any | null | undefined, name?: string | null | undefined, id: any, image?: string | null | undefined, description?: string | null | undefined, created_at: any, members: Array<{ user_id?: any | null | undefined }> };

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


export type InitiativesNearbyQuery = { initiatives_nearby: Array<{ geom?: any | null | undefined, name?: string | null | undefined, id: any, image?: string | null | undefined, description?: string | null | undefined, created_at: any, members: Array<{ user_id?: any | null | undefined }> }> };

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


export type MyInitiativesNearbyQuery = { initiatives_nearby: Array<{ geom?: any | null | undefined, name?: string | null | undefined, id: any, image?: string | null | undefined, description?: string | null | undefined, created_at: any, members: Array<{ user_id?: any | null | undefined }> }> };

export type InitiativesLastVisitedQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['uuid'];
}>;


export type InitiativesLastVisitedQuery = { initiative_visits: Array<{ visited_at?: any | null | undefined, initiative: { geom?: any | null | undefined, name?: string | null | undefined, id: any, image?: string | null | undefined, description?: string | null | undefined, created_at: any, members: Array<{ user_id?: any | null | undefined }> } }> };

export type InitiativeQueryVariables = Exact<{
  initiative_id: Scalars['uuid'];
}>;


export type InitiativeQuery = { initiatives_by_pk?: { geom?: any | null | undefined, name?: string | null | undefined, id: any, image?: string | null | undefined, description?: string | null | undefined, created_at: any, members: Array<{ user_id?: any | null | undefined }> } | null | undefined };

export type MyInitiativesQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type MyInitiativesQuery = { initiatives: Array<{ geom?: any | null | undefined, name?: string | null | undefined, id: any, image?: string | null | undefined, description?: string | null | undefined, created_at: any, members: Array<{ user_id?: any | null | undefined }> }> };

export type InitiativeInfoQueryVariables = Exact<{
  initiative_id: Scalars['uuid'];
}>;


export type InitiativeInfoQuery = { initiative_info: Array<{ context?: string | null | undefined, goal?: string | null | undefined, problem?: string | null | undefined }> };

export type FilesQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type FilesQuery = { files: Array<{ id: any, created_at?: any | null | undefined, file_path?: string | null | undefined, downloadable_url?: string | null | undefined }> };

export type S_GetFilesSubscriptionVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type S_GetFilesSubscription = { files: Array<{ id: any, created_at?: any | null | undefined, file_path?: string | null | undefined, downloadable_url?: string | null | undefined }> };

export type DictionaryQueryVariables = Exact<{
  en?: Maybe<Scalars['Boolean']>;
  uk?: Maybe<Scalars['Boolean']>;
  fr?: Maybe<Scalars['Boolean']>;
}>;


export type DictionaryQuery = { i18n: Array<{ key?: string | null | undefined, en?: string | null | undefined, uk?: string | null | undefined, fr?: string | null | undefined }> };

export type CreatePostMutationVariables = Exact<{
  message: Scalars['String'];
  user_id: Scalars['uuid'];
  initiative_id: Scalars['uuid'];
}>;


export type CreatePostMutation = { insert_initiative_posts_one?: { id: any } | null | undefined };

export type PostFragment = { type: string, message?: string | null | undefined, comments_count: { aggregate?: { count: number } | null | undefined }, user?: { display_name?: string | null | undefined, avatar_url?: string | null | undefined } | null | undefined };

export type SearchResultsQueryVariables = Exact<{
  layers?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  keyword: Scalars['String'];
}>;


export type SearchResultsQuery = { entries: Array<{ id?: any | null | undefined, image?: string | null | undefined, name?: string | null | undefined, created_at?: any | null | undefined, description?: string | null | undefined, type?: string | null | undefined, members_count?: any | null | undefined, modified_at?: any | null | undefined, geometry?: any | null | undefined }> };

export type FeedQueryVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
}>;


export type FeedQuery = { posts: Array<{ id: any, created_at: any, modified_at: any, message?: string | null | undefined, type: string, user?: { avatar_url?: string | null | undefined, display_name?: string | null | undefined } | null | undefined, comments_aggregate: { aggregate?: { count: number } | null | undefined } }> };

export type FeedFieldsFragment = { id: any, created_at: any, modified_at: any, message?: string | null | undefined, type: string, user?: { avatar_url?: string | null | undefined, display_name?: string | null | undefined } | null | undefined, comments_aggregate: { aggregate?: { count: number } | null | undefined } };

export type InitiativeByPkQueryVariables = Exact<{
  id: Scalars['uuid'];
  user_id?: Maybe<Scalars['uuid']>;
}>;


export type InitiativeByPkQuery = { initiative?: { id: any, name?: string | null | undefined, address?: string | null | undefined, modified_at?: any | null | undefined, created_at: any, image?: string | null | undefined, description?: string | null | undefined, geometry?: any | null | undefined, members: Array<{ user_id?: any | null | undefined }>, members_aggregate: { aggregate?: { count: number } | null | undefined }, infos: Array<{ problem?: string | null | undefined, goal?: string | null | undefined, context?: string | null | undefined }>, tasks: Array<{ id: number, status?: string | null | undefined, description?: string | null | undefined, volunteers_needed?: any | null | undefined, volunteers_aggregate: { aggregate?: { count: number } | null | undefined } }>, donations_aggregate: { aggregate?: { count: number, sum?: { amount?: any | null | undefined } | null | undefined } | null | undefined }, expenses: Array<{ status?: string | null | undefined, amount: any, currency?: string | null | undefined, description?: string | null | undefined, link?: string | null | undefined, link_name?: string | null | undefined }>, volunteers_aggregate: { aggregate?: { count: number } | null | undefined } } | null | undefined };

export type CheckTaskMutationVariables = Exact<{
  initiative_id: Scalars['uuid'];
  task_id: Scalars['Int'];
  value?: Scalars['String'];
}>;


export type CheckTaskMutation = { update_initiative_tasks_by_pk?: { id: number } | null | undefined };

export type JoinMutationVariables = Exact<{
  userId: Scalars['uuid'];
  id: Scalars['uuid'];
  donations: Array<Initiative_Donations_Insert_Input> | Initiative_Donations_Insert_Input;
  tasks: Array<Initiative_Tasks_Insert_Input> | Initiative_Tasks_Insert_Input;
  volunteers: Array<Initiative_Volunteers_Insert_Input> | Initiative_Volunteers_Insert_Input;
}>;


export type JoinMutation = { insert_initiative_members?: { affected_rows: number } | null | undefined };

export type TasksQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TasksQuery = { initiative_tasks: Array<{ id: number, description?: string | null | undefined, volunteers_needed?: any | null | undefined, status?: string | null | undefined, volunteers_aggregate: { aggregate?: { count: number } | null | undefined } }> };

export type InitiativeCardFragment = { id: any, image?: string | null | undefined, name?: string | null | undefined, created_at: any, description?: string | null | undefined, geometry?: any | null | undefined };

export type OrganizationCardFragment = { id: any, image?: string | null | undefined, name?: string | null | undefined, created_at: any, description?: string | null | undefined, geometry?: any | null | undefined };

export type EntryCardFragment = { id?: any | null | undefined, image?: string | null | undefined, name?: string | null | undefined, created_at?: any | null | undefined, description?: string | null | undefined, type?: string | null | undefined, members_count?: any | null | undefined, modified_at?: any | null | undefined, geometry?: any | null | undefined };

export type InitiativesNearbyListQueryVariables = Exact<{
  location: Scalars['geometry'];
  limit?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  user_id?: Maybe<Scalars['uuid']>;
  own?: Maybe<Scalars['Boolean']>;
}>;


export type InitiativesNearbyListQuery = { initiatives: Array<{ id: any, image?: string | null | undefined, name?: string | null | undefined, created_at: any, description?: string | null | undefined, geometry?: any | null | undefined }> };

export type MyInitiativeListQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type MyInitiativeListQuery = { initiatives: Array<{ id: any, image?: string | null | undefined, name?: string | null | undefined, created_at: any, description?: string | null | undefined, geometry?: any | null | undefined }> };

export type OrganizationNearbyListQueryVariables = Exact<{
  location: Scalars['geometry'];
  limit?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  user_id?: Maybe<Scalars['uuid']>;
  own?: Maybe<Scalars['Boolean']>;
}>;


export type OrganizationNearbyListQuery = { orgs: Array<{ id: any, image?: string | null | undefined, name?: string | null | undefined, created_at: any, description?: string | null | undefined, geometry?: any | null | undefined }> };

export type MyOrganizationListQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type MyOrganizationListQuery = { orgs: Array<{ id: any, image?: string | null | undefined, name?: string | null | undefined, created_at: any, description?: string | null | undefined, geometry?: any | null | undefined }> };

export type LastEntriesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['uuid'];
}>;


export type LastEntriesQuery = { entry_visits: Array<{ visited_at?: any | null | undefined, entry?: { id?: any | null | undefined, image?: string | null | undefined, name?: string | null | undefined, created_at?: any | null | undefined, description?: string | null | undefined, type?: string | null | undefined, members_count?: any | null | undefined, modified_at?: any | null | undefined, geometry?: any | null | undefined } | null | undefined }> };

export type NearbyEntriesQueryVariables = Exact<{
  location: Scalars['geometry'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  max_date?: Maybe<Scalars['timestamptz']>;
  max_distance?: Maybe<Scalars['float8']>;
  min_date?: Maybe<Scalars['timestamptz']>;
  min_distance?: Maybe<Scalars['float8']>;
  user_id?: Maybe<Scalars['uuid']>;
  own?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type NearbyEntriesQuery = { entries_nearby: Array<{ id?: any | null | undefined, image?: string | null | undefined, name?: string | null | undefined, created_at?: any | null | undefined, description?: string | null | undefined, type?: string | null | undefined, members_count?: any | null | undefined, modified_at?: any | null | undefined, geometry?: any | null | undefined }> };

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
export const PostFragmentDoc = gql`
    fragment Post on initiative_posts {
  comments_count: comments_aggregate {
    aggregate {
      count
    }
  }
  type
  message
  user {
    display_name
    avatar_url
  }
}
    `;
export const FeedFieldsFragmentDoc = gql`
    fragment FeedFields on initiative_posts {
  id
  user {
    avatar_url
    display_name
  }
  created_at
  modified_at
  message
  type
  comments_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const InitiativeCardFragmentDoc = gql`
    fragment InitiativeCard on initiatives {
  id
  image
  name
  geometry: geom
  created_at
  description
}
    `;
export const OrganizationCardFragmentDoc = gql`
    fragment OrganizationCard on orgs {
  id
  image
  name
  geometry: geom
  created_at
  description
}
    `;
export const EntryCardFragmentDoc = gql`
    fragment EntryCard on entries {
  id
  image
  name
  geometry: geom
  created_at
  description
  type
  members_count
  modified_at
}
    `;
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
export const CreatePostDocument = gql`
    mutation CreatePost($message: String!, $user_id: uuid!, $initiative_id: uuid!) {
  insert_initiative_posts_one(
    object: {type: "message", message: $message, user_id: $user_id, initiative_id: $initiative_id}
  ) {
    id
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      message: // value for 'message'
 *      user_id: // value for 'user_id'
 *      initiative_id: // value for 'initiative_id'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const SearchResultsDocument = gql`
    query SearchResults($layers: [String!] = ["initiative", "organization"], $keyword: String!) {
  entries(
    where: {_and: [{type: {_in: $layers}}, {_or: [{name: {_ilike: $keyword}}, {description: {_ilike: $keyword}}]}]}
    limit: 5
  ) {
    ...EntryCard
  }
}
    ${EntryCardFragmentDoc}`;

/**
 * __useSearchResultsQuery__
 *
 * To run a query within a React component, call `useSearchResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchResultsQuery({
 *   variables: {
 *      layers: // value for 'layers'
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchResultsQuery(baseOptions: Apollo.QueryHookOptions<SearchResultsQuery, SearchResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchResultsQuery, SearchResultsQueryVariables>(SearchResultsDocument, options);
      }
export function useSearchResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchResultsQuery, SearchResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchResultsQuery, SearchResultsQueryVariables>(SearchResultsDocument, options);
        }
export type SearchResultsQueryHookResult = ReturnType<typeof useSearchResultsQuery>;
export type SearchResultsLazyQueryHookResult = ReturnType<typeof useSearchResultsLazyQuery>;
export type SearchResultsQueryResult = Apollo.QueryResult<SearchResultsQuery, SearchResultsQueryVariables>;
export const FeedDocument = gql`
    query Feed($id: uuid) {
  posts: initiative_posts(where: {thread: {initiative: {id: {_eq: $id}}}}) {
    ...FeedFields
  }
}
    ${FeedFieldsFragmentDoc}`;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const InitiativeByPkDocument = gql`
    query InitiativeByPK($id: uuid!, $user_id: uuid = "00000000-0000-0000-0000-000000000000") {
  initiative: initiatives_by_pk(id: $id) {
    id
    name
    members(where: {user_id: {_eq: $user_id}}) {
      user_id
    }
    members_aggregate {
      aggregate {
        count
      }
    }
    address
    infos(order_by: {approved_at: desc}, limit: 1) {
      problem
      goal
      context
    }
    geometry: geom
    modified_at
    created_at
    image
    description
    address
    tasks {
      id
      status
      description
      volunteers_needed
      volunteers_aggregate {
        aggregate {
          count
        }
      }
    }
    donations_aggregate {
      aggregate {
        sum {
          amount
        }
        count
      }
    }
    expenses {
      status
      amount
      currency
      description
      link
      link_name
    }
    volunteers_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useInitiativeByPkQuery__
 *
 * To run a query within a React component, call `useInitiativeByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativeByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativeByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useInitiativeByPkQuery(baseOptions: Apollo.QueryHookOptions<InitiativeByPkQuery, InitiativeByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativeByPkQuery, InitiativeByPkQueryVariables>(InitiativeByPkDocument, options);
      }
export function useInitiativeByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativeByPkQuery, InitiativeByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativeByPkQuery, InitiativeByPkQueryVariables>(InitiativeByPkDocument, options);
        }
export type InitiativeByPkQueryHookResult = ReturnType<typeof useInitiativeByPkQuery>;
export type InitiativeByPkLazyQueryHookResult = ReturnType<typeof useInitiativeByPkLazyQuery>;
export type InitiativeByPkQueryResult = Apollo.QueryResult<InitiativeByPkQuery, InitiativeByPkQueryVariables>;
export const CheckTaskDocument = gql`
    mutation CheckTask($initiative_id: uuid!, $task_id: Int!, $value: String! = "PENDING") {
  update_initiative_tasks_by_pk(
    pk_columns: {id: $task_id, initiative_id: $initiative_id}
    _set: {status: $value}
  ) {
    id
  }
}
    `;
export type CheckTaskMutationFn = Apollo.MutationFunction<CheckTaskMutation, CheckTaskMutationVariables>;

/**
 * __useCheckTaskMutation__
 *
 * To run a mutation, you first call `useCheckTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkTaskMutation, { data, loading, error }] = useCheckTaskMutation({
 *   variables: {
 *      initiative_id: // value for 'initiative_id'
 *      task_id: // value for 'task_id'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useCheckTaskMutation(baseOptions?: Apollo.MutationHookOptions<CheckTaskMutation, CheckTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckTaskMutation, CheckTaskMutationVariables>(CheckTaskDocument, options);
      }
export type CheckTaskMutationHookResult = ReturnType<typeof useCheckTaskMutation>;
export type CheckTaskMutationResult = Apollo.MutationResult<CheckTaskMutation>;
export type CheckTaskMutationOptions = Apollo.BaseMutationOptions<CheckTaskMutation, CheckTaskMutationVariables>;
export const JoinDocument = gql`
    mutation Join($userId: uuid!, $id: uuid!, $donations: [initiative_donations_insert_input!]!, $tasks: [initiative_tasks_insert_input!]!, $volunteers: [initiative_volunteers_insert_input!]!) {
  insert_initiative_members(
    objects: {initiative_id: $id, user_id: $userId, donations: {data: $donations}, tasks: {data: $tasks}, volunteers: {data: $volunteers}}
  ) {
    affected_rows
  }
}
    `;
export type JoinMutationFn = Apollo.MutationFunction<JoinMutation, JoinMutationVariables>;

/**
 * __useJoinMutation__
 *
 * To run a mutation, you first call `useJoinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinMutation, { data, loading, error }] = useJoinMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      id: // value for 'id'
 *      donations: // value for 'donations'
 *      tasks: // value for 'tasks'
 *      volunteers: // value for 'volunteers'
 *   },
 * });
 */
export function useJoinMutation(baseOptions?: Apollo.MutationHookOptions<JoinMutation, JoinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinMutation, JoinMutationVariables>(JoinDocument, options);
      }
export type JoinMutationHookResult = ReturnType<typeof useJoinMutation>;
export type JoinMutationResult = Apollo.MutationResult<JoinMutation>;
export type JoinMutationOptions = Apollo.BaseMutationOptions<JoinMutation, JoinMutationVariables>;
export const TasksDocument = gql`
    query Tasks($id: uuid!) {
  initiative_tasks(
    order_by: {created_at: desc}
    where: {initiative_id: {_eq: $id}}
  ) {
    id
    description
    volunteers_needed
    status
    volunteers_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTasksQuery(baseOptions: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export const InitiativesNearbyListDocument = gql`
    query InitiativesNearbyList($location: geometry!, $limit: Int = 20, $max_date: timestamptz = "2999-01-01T00:00:00.000Z", $max_distance: float8 = 20037500.0, $min_date: timestamptz = "1970-01-01T00:00:00.000Z", $min_distance: float8 = 0.0, $user_id: uuid, $own: Boolean = false) {
  initiatives: initiatives_nearby(
    args: {location: $location, own: $own, user_id: $user_id, max_date: $max_date, limit: $limit, max_distance: $max_distance, min_date: $min_date, min_distance: $min_distance}
  ) {
    ...InitiativeCard
  }
}
    ${InitiativeCardFragmentDoc}`;

/**
 * __useInitiativesNearbyListQuery__
 *
 * To run a query within a React component, call `useInitiativesNearbyListQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitiativesNearbyListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitiativesNearbyListQuery({
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
export function useInitiativesNearbyListQuery(baseOptions: Apollo.QueryHookOptions<InitiativesNearbyListQuery, InitiativesNearbyListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InitiativesNearbyListQuery, InitiativesNearbyListQueryVariables>(InitiativesNearbyListDocument, options);
      }
export function useInitiativesNearbyListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InitiativesNearbyListQuery, InitiativesNearbyListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InitiativesNearbyListQuery, InitiativesNearbyListQueryVariables>(InitiativesNearbyListDocument, options);
        }
export type InitiativesNearbyListQueryHookResult = ReturnType<typeof useInitiativesNearbyListQuery>;
export type InitiativesNearbyListLazyQueryHookResult = ReturnType<typeof useInitiativesNearbyListLazyQuery>;
export type InitiativesNearbyListQueryResult = Apollo.QueryResult<InitiativesNearbyListQuery, InitiativesNearbyListQueryVariables>;
export const MyInitiativeListDocument = gql`
    query MyInitiativeList($user_id: uuid!) {
  initiatives(where: {members: {user_id: {_eq: $user_id}}}) {
    ...InitiativeCard
  }
}
    ${InitiativeCardFragmentDoc}`;

/**
 * __useMyInitiativeListQuery__
 *
 * To run a query within a React component, call `useMyInitiativeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInitiativeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInitiativeListQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useMyInitiativeListQuery(baseOptions: Apollo.QueryHookOptions<MyInitiativeListQuery, MyInitiativeListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyInitiativeListQuery, MyInitiativeListQueryVariables>(MyInitiativeListDocument, options);
      }
export function useMyInitiativeListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyInitiativeListQuery, MyInitiativeListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyInitiativeListQuery, MyInitiativeListQueryVariables>(MyInitiativeListDocument, options);
        }
export type MyInitiativeListQueryHookResult = ReturnType<typeof useMyInitiativeListQuery>;
export type MyInitiativeListLazyQueryHookResult = ReturnType<typeof useMyInitiativeListLazyQuery>;
export type MyInitiativeListQueryResult = Apollo.QueryResult<MyInitiativeListQuery, MyInitiativeListQueryVariables>;
export const OrganizationNearbyListDocument = gql`
    query OrganizationNearbyList($location: geometry!, $limit: Int = 20, $max_date: timestamptz = "2999-01-01T00:00:00.000Z", $max_distance: float8 = 20037500.0, $min_date: timestamptz = "1970-01-01T00:00:00.000Z", $min_distance: float8 = 0.0, $user_id: uuid, $own: Boolean = false) {
  orgs: orgs_nearby(
    args: {location: $location, own: $own, user_id: $user_id, max_date: $max_date, limit: $limit, max_distance: $max_distance, min_date: $min_date, min_distance: $min_distance}
  ) {
    ...OrganizationCard
  }
}
    ${OrganizationCardFragmentDoc}`;

/**
 * __useOrganizationNearbyListQuery__
 *
 * To run a query within a React component, call `useOrganizationNearbyListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationNearbyListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationNearbyListQuery({
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
export function useOrganizationNearbyListQuery(baseOptions: Apollo.QueryHookOptions<OrganizationNearbyListQuery, OrganizationNearbyListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationNearbyListQuery, OrganizationNearbyListQueryVariables>(OrganizationNearbyListDocument, options);
      }
export function useOrganizationNearbyListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationNearbyListQuery, OrganizationNearbyListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationNearbyListQuery, OrganizationNearbyListQueryVariables>(OrganizationNearbyListDocument, options);
        }
export type OrganizationNearbyListQueryHookResult = ReturnType<typeof useOrganizationNearbyListQuery>;
export type OrganizationNearbyListLazyQueryHookResult = ReturnType<typeof useOrganizationNearbyListLazyQuery>;
export type OrganizationNearbyListQueryResult = Apollo.QueryResult<OrganizationNearbyListQuery, OrganizationNearbyListQueryVariables>;
export const MyOrganizationListDocument = gql`
    query MyOrganizationList($user_id: uuid!) {
  orgs(where: {members: {user_id: {_eq: $user_id}}}) {
    ...OrganizationCard
  }
}
    ${OrganizationCardFragmentDoc}`;

/**
 * __useMyOrganizationListQuery__
 *
 * To run a query within a React component, call `useMyOrganizationListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrganizationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrganizationListQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useMyOrganizationListQuery(baseOptions: Apollo.QueryHookOptions<MyOrganizationListQuery, MyOrganizationListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyOrganizationListQuery, MyOrganizationListQueryVariables>(MyOrganizationListDocument, options);
      }
export function useMyOrganizationListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyOrganizationListQuery, MyOrganizationListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyOrganizationListQuery, MyOrganizationListQueryVariables>(MyOrganizationListDocument, options);
        }
export type MyOrganizationListQueryHookResult = ReturnType<typeof useMyOrganizationListQuery>;
export type MyOrganizationListLazyQueryHookResult = ReturnType<typeof useMyOrganizationListLazyQuery>;
export type MyOrganizationListQueryResult = Apollo.QueryResult<MyOrganizationListQuery, MyOrganizationListQueryVariables>;
export const LastEntriesDocument = gql`
    query LastEntries($limit: Int = 20, $max_date: timestamptz = "2999-01-01T00:00:00.000Z", $min_date: timestamptz = "1970-01-01T00:00:00.000Z", $user_id: uuid!) {
  entry_visits(
    where: {_and: [{user_id: {_eq: $user_id}}, {visited_at: {_gt: $min_date}}, {visited_at: {_lte: $max_date}}]}
    order_by: {visited_at: desc}
    limit: $limit
  ) {
    visited_at
    entry {
      ...EntryCard
    }
  }
}
    ${EntryCardFragmentDoc}`;

/**
 * __useLastEntriesQuery__
 *
 * To run a query within a React component, call `useLastEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastEntriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      max_date: // value for 'max_date'
 *      min_date: // value for 'min_date'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useLastEntriesQuery(baseOptions: Apollo.QueryHookOptions<LastEntriesQuery, LastEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastEntriesQuery, LastEntriesQueryVariables>(LastEntriesDocument, options);
      }
export function useLastEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastEntriesQuery, LastEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastEntriesQuery, LastEntriesQueryVariables>(LastEntriesDocument, options);
        }
export type LastEntriesQueryHookResult = ReturnType<typeof useLastEntriesQuery>;
export type LastEntriesLazyQueryHookResult = ReturnType<typeof useLastEntriesLazyQuery>;
export type LastEntriesQueryResult = Apollo.QueryResult<LastEntriesQuery, LastEntriesQueryVariables>;
export const NearbyEntriesDocument = gql`
    query NearbyEntries($location: geometry!, $limit: Int = null, $offset: Int = 0, $max_date: timestamptz = "2999-01-01T00:00:00.000Z", $max_distance: float8 = 20037500.0, $min_date: timestamptz = "1970-01-01T00:00:00.000Z", $min_distance: float8 = 0.0, $user_id: uuid, $own: Boolean = false, $type: [String!] = ["organization", "initiative"]) {
  entries_nearby(
    offset: $offset
    limit: $limit
    where: {type: {_in: $type}}
    args: {location: $location, own: $own, user_id: $user_id, max_date: $max_date, limit: null, max_distance: $max_distance, min_date: $min_date, min_distance: $min_distance}
  ) {
    ...EntryCard
  }
}
    ${EntryCardFragmentDoc}`;

/**
 * __useNearbyEntriesQuery__
 *
 * To run a query within a React component, call `useNearbyEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNearbyEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNearbyEntriesQuery({
 *   variables: {
 *      location: // value for 'location'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      max_date: // value for 'max_date'
 *      max_distance: // value for 'max_distance'
 *      min_date: // value for 'min_date'
 *      min_distance: // value for 'min_distance'
 *      user_id: // value for 'user_id'
 *      own: // value for 'own'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useNearbyEntriesQuery(baseOptions: Apollo.QueryHookOptions<NearbyEntriesQuery, NearbyEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NearbyEntriesQuery, NearbyEntriesQueryVariables>(NearbyEntriesDocument, options);
      }
export function useNearbyEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NearbyEntriesQuery, NearbyEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NearbyEntriesQuery, NearbyEntriesQueryVariables>(NearbyEntriesDocument, options);
        }
export type NearbyEntriesQueryHookResult = ReturnType<typeof useNearbyEntriesQuery>;
export type NearbyEntriesLazyQueryHookResult = ReturnType<typeof useNearbyEntriesLazyQuery>;
export type NearbyEntriesQueryResult = Apollo.QueryResult<NearbyEntriesQuery, NearbyEntriesQueryVariables>;
export type entriesKeySpecifier = ('created_at' | 'description' | 'geom' | 'id' | 'image' | 'members_count' | 'modified_at' | 'name' | 'type' | entriesKeySpecifier)[];
export type entriesFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	geom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	members_count?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type entry_membersKeySpecifier = ('entry' | 'entry_id' | 'id' | 'type' | 'user_id' | entry_membersKeySpecifier)[];
export type entry_membersFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	entry_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type entry_visitsKeySpecifier = ('entry' | 'entry_id' | 'id' | 'type' | 'user' | 'user_id' | 'visited_at' | entry_visitsKeySpecifier)[];
export type entry_visitsFieldPolicy = {
	entry?: FieldPolicy<any> | FieldReadFunction<any>,
	entry_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	visited_at?: FieldPolicy<any> | FieldReadFunction<any>
};
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
export type initiative_comment_reactionsKeySpecifier = ('comment' | 'comment_id' | 'id' | 'type' | 'user' | 'user_id' | initiative_comment_reactionsKeySpecifier)[];
export type initiative_comment_reactionsFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	comment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comment_reactions_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_comment_reactions_mutation_responseKeySpecifier)[];
export type initiative_comment_reactions_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_commentsKeySpecifier = ('created_at' | 'id' | 'message' | 'message_id' | 'post' | 'reactions' | 'user' | 'user_id' | initiative_commentsKeySpecifier)[];
export type initiative_commentsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_aggregateKeySpecifier = ('aggregate' | 'nodes' | initiative_comments_aggregateKeySpecifier)[];
export type initiative_comments_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | initiative_comments_aggregate_fieldsKeySpecifier)[];
export type initiative_comments_aggregate_fieldsFieldPolicy = {
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
export type initiative_comments_avg_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_avg_fieldsKeySpecifier)[];
export type initiative_comments_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_max_fieldsKeySpecifier = ('created_at' | 'id' | 'message' | 'message_id' | 'user_id' | initiative_comments_max_fieldsKeySpecifier)[];
export type initiative_comments_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_min_fieldsKeySpecifier = ('created_at' | 'id' | 'message' | 'message_id' | 'user_id' | initiative_comments_min_fieldsKeySpecifier)[];
export type initiative_comments_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_comments_mutation_responseKeySpecifier)[];
export type initiative_comments_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_stddev_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_stddev_fieldsKeySpecifier)[];
export type initiative_comments_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_stddev_pop_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_stddev_pop_fieldsKeySpecifier)[];
export type initiative_comments_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_stddev_samp_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_stddev_samp_fieldsKeySpecifier)[];
export type initiative_comments_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_sum_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_sum_fieldsKeySpecifier)[];
export type initiative_comments_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_var_pop_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_var_pop_fieldsKeySpecifier)[];
export type initiative_comments_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_var_samp_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_var_samp_fieldsKeySpecifier)[];
export type initiative_comments_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_comments_variance_fieldsKeySpecifier = ('id' | 'message_id' | initiative_comments_variance_fieldsKeySpecifier)[];
export type initiative_comments_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donationsKeySpecifier = ('amount' | 'currency' | 'id' | 'initiative' | 'initiative_id' | 'recurrent' | 'status' | 'user' | 'user_id' | initiative_donationsKeySpecifier)[];
export type initiative_donationsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	recurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_aggregateKeySpecifier = ('aggregate' | 'nodes' | initiative_donations_aggregateKeySpecifier)[];
export type initiative_donations_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | initiative_donations_aggregate_fieldsKeySpecifier)[];
export type initiative_donations_aggregate_fieldsFieldPolicy = {
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
export type initiative_donations_avg_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_avg_fieldsKeySpecifier)[];
export type initiative_donations_avg_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_max_fieldsKeySpecifier = ('amount' | 'currency' | 'id' | 'initiative_id' | 'status' | 'user_id' | initiative_donations_max_fieldsKeySpecifier)[];
export type initiative_donations_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_min_fieldsKeySpecifier = ('amount' | 'currency' | 'id' | 'initiative_id' | 'status' | 'user_id' | initiative_donations_min_fieldsKeySpecifier)[];
export type initiative_donations_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_donations_mutation_responseKeySpecifier)[];
export type initiative_donations_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_stddev_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_stddev_fieldsKeySpecifier)[];
export type initiative_donations_stddev_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_stddev_pop_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_stddev_pop_fieldsKeySpecifier)[];
export type initiative_donations_stddev_pop_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_stddev_samp_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_stddev_samp_fieldsKeySpecifier)[];
export type initiative_donations_stddev_samp_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_sum_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_sum_fieldsKeySpecifier)[];
export type initiative_donations_sum_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_var_pop_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_var_pop_fieldsKeySpecifier)[];
export type initiative_donations_var_pop_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_var_samp_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_var_samp_fieldsKeySpecifier)[];
export type initiative_donations_var_samp_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_donations_variance_fieldsKeySpecifier = ('amount' | 'id' | initiative_donations_variance_fieldsKeySpecifier)[];
export type initiative_donations_variance_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
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
export type initiative_expensesKeySpecifier = ('amount' | 'currency' | 'description' | 'id' | 'initiative' | 'initiative_id' | 'link' | 'link_name' | 'poll' | 'poll_id' | 'post' | 'post_id' | 'status' | 'user' | 'user_id' | initiative_expensesKeySpecifier)[];
export type initiative_expensesFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	link_name?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type initiative_infoKeySpecifier = ('approved_at' | 'context' | 'created_at' | 'edits' | 'goal' | 'id' | 'initiative' | 'initiative_id' | 'modified_at' | 'problem' | 'user' | initiative_infoKeySpecifier)[];
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
	problem?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_info_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_info_mutation_responseKeySpecifier)[];
export type initiative_info_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_membersKeySpecifier = ('contractor' | 'created_at' | 'donations' | 'donations_aggregate' | 'donator' | 'id' | 'initiative' | 'initiative_id' | 'initiator' | 'tasks' | 'tasks_aggregate' | 'user' | 'user_id' | 'volunteer' | 'volunteers' | 'volunteers_aggregate' | initiative_membersKeySpecifier)[];
export type initiative_membersFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	donations?: FieldPolicy<any> | FieldReadFunction<any>,
	donations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	donator?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiator?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteer?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
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
export type initiative_pollsKeySpecifier = ('edits' | 'expenses' | 'id' | 'initiative' | 'initiative_id' | 'tasks' | 'tasks_aggregate' | 'user_id' | 'votes' | initiative_pollsKeySpecifier)[];
export type initiative_pollsFieldPolicy = {
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_polls_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_polls_mutation_responseKeySpecifier)[];
export type initiative_polls_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_post_reactionsKeySpecifier = ('id' | 'post' | 'post_id' | 'type' | 'user' | 'user_id' | initiative_post_reactionsKeySpecifier)[];
export type initiative_post_reactionsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	post_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_post_reactions_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_post_reactions_mutation_responseKeySpecifier)[];
export type initiative_post_reactions_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_postsKeySpecifier = ('comments' | 'comments_aggregate' | 'created_at' | 'edits' | 'expenses' | 'id' | 'initiative' | 'initiative_id' | 'message' | 'modified_at' | 'projects' | 'reactions' | 'thread' | 'thread_id' | 'type' | 'user' | 'user_id' | initiative_postsKeySpecifier)[];
export type initiative_postsFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	comments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	thread?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_aggregateKeySpecifier = ('aggregate' | 'nodes' | initiative_posts_aggregateKeySpecifier)[];
export type initiative_posts_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | initiative_posts_aggregate_fieldsKeySpecifier)[];
export type initiative_posts_aggregate_fieldsFieldPolicy = {
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
export type initiative_posts_avg_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_avg_fieldsKeySpecifier)[];
export type initiative_posts_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_max_fieldsKeySpecifier = ('created_at' | 'id' | 'initiative_id' | 'message' | 'modified_at' | 'thread_id' | 'type' | 'user_id' | initiative_posts_max_fieldsKeySpecifier)[];
export type initiative_posts_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_min_fieldsKeySpecifier = ('created_at' | 'id' | 'initiative_id' | 'message' | 'modified_at' | 'thread_id' | 'type' | 'user_id' | initiative_posts_min_fieldsKeySpecifier)[];
export type initiative_posts_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_posts_mutation_responseKeySpecifier)[];
export type initiative_posts_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_stddev_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_stddev_fieldsKeySpecifier)[];
export type initiative_posts_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_stddev_pop_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_stddev_pop_fieldsKeySpecifier)[];
export type initiative_posts_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_stddev_samp_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_stddev_samp_fieldsKeySpecifier)[];
export type initiative_posts_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_sum_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_sum_fieldsKeySpecifier)[];
export type initiative_posts_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_var_pop_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_var_pop_fieldsKeySpecifier)[];
export type initiative_posts_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_var_samp_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_var_samp_fieldsKeySpecifier)[];
export type initiative_posts_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_posts_variance_fieldsKeySpecifier = ('id' | 'thread_id' | initiative_posts_variance_fieldsKeySpecifier)[];
export type initiative_posts_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_projectsKeySpecifier = ('budget' | 'description' | 'id' | 'initiative' | 'initiative_id' | 'org' | 'org_id' | 'org_project' | 'post_id' | 'reference_project_id' | 'status' | 'tender' | 'tender_id' | 'user' | 'user_id' | 'volunteers' | initiative_projectsKeySpecifier)[];
export type initiative_projectsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	org_project?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type initiative_tasksKeySpecifier = ('created_at' | 'description' | 'id' | 'initiative' | 'initiative_id' | 'poll' | 'poll_id' | 'status' | 'user' | 'user_id' | 'volunteers' | 'volunteers_aggregate' | 'volunteers_needed' | initiative_tasksKeySpecifier)[];
export type initiative_tasksFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_aggregateKeySpecifier = ('aggregate' | 'nodes' | initiative_tasks_aggregateKeySpecifier)[];
export type initiative_tasks_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | initiative_tasks_aggregate_fieldsKeySpecifier)[];
export type initiative_tasks_aggregate_fieldsFieldPolicy = {
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
export type initiative_tasks_avg_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_avg_fieldsKeySpecifier)[];
export type initiative_tasks_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_max_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'initiative_id' | 'poll_id' | 'status' | 'user_id' | 'volunteers_needed' | initiative_tasks_max_fieldsKeySpecifier)[];
export type initiative_tasks_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_min_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'initiative_id' | 'poll_id' | 'status' | 'user_id' | 'volunteers_needed' | initiative_tasks_min_fieldsKeySpecifier)[];
export type initiative_tasks_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_tasks_mutation_responseKeySpecifier)[];
export type initiative_tasks_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_stddev_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_stddev_fieldsKeySpecifier)[];
export type initiative_tasks_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_stddev_pop_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_stddev_pop_fieldsKeySpecifier)[];
export type initiative_tasks_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_stddev_samp_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_stddev_samp_fieldsKeySpecifier)[];
export type initiative_tasks_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_sum_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_sum_fieldsKeySpecifier)[];
export type initiative_tasks_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_var_pop_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_var_pop_fieldsKeySpecifier)[];
export type initiative_tasks_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_var_samp_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_var_samp_fieldsKeySpecifier)[];
export type initiative_tasks_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_tasks_variance_fieldsKeySpecifier = ('id' | 'poll_id' | 'volunteers_needed' | initiative_tasks_variance_fieldsKeySpecifier)[];
export type initiative_tasks_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	poll_id?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_needed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_threadsKeySpecifier = ('initiative' | 'posts' | 'posts_aggregate' | initiative_threadsKeySpecifier)[];
export type initiative_threadsFieldPolicy = {
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	posts_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
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
export type initiative_volunteersKeySpecifier = ('id' | 'initiative' | 'initiative_id' | 'role' | 'task' | 'task_id' | 'user' | 'user_id' | initiative_volunteersKeySpecifier)[];
export type initiative_volunteersFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	task?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_aggregateKeySpecifier = ('aggregate' | 'nodes' | initiative_volunteers_aggregateKeySpecifier)[];
export type initiative_volunteers_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | initiative_volunteers_aggregate_fieldsKeySpecifier)[];
export type initiative_volunteers_aggregate_fieldsFieldPolicy = {
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
export type initiative_volunteers_avg_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_avg_fieldsKeySpecifier)[];
export type initiative_volunteers_avg_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_max_fieldsKeySpecifier = ('id' | 'initiative_id' | 'role' | 'task_id' | 'user_id' | initiative_volunteers_max_fieldsKeySpecifier)[];
export type initiative_volunteers_max_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_min_fieldsKeySpecifier = ('id' | 'initiative_id' | 'role' | 'task_id' | 'user_id' | initiative_volunteers_min_fieldsKeySpecifier)[];
export type initiative_volunteers_min_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiative_volunteers_mutation_responseKeySpecifier)[];
export type initiative_volunteers_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_stddev_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_stddev_fieldsKeySpecifier)[];
export type initiative_volunteers_stddev_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_stddev_pop_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_stddev_pop_fieldsKeySpecifier)[];
export type initiative_volunteers_stddev_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_stddev_samp_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_stddev_samp_fieldsKeySpecifier)[];
export type initiative_volunteers_stddev_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_sum_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_sum_fieldsKeySpecifier)[];
export type initiative_volunteers_sum_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_var_pop_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_var_pop_fieldsKeySpecifier)[];
export type initiative_volunteers_var_pop_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_var_samp_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_var_samp_fieldsKeySpecifier)[];
export type initiative_volunteers_var_samp_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiative_volunteers_variance_fieldsKeySpecifier = ('id' | 'task_id' | initiative_volunteers_variance_fieldsKeySpecifier)[];
export type initiative_volunteers_variance_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	task_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiativesKeySpecifier = ('address' | 'created_at' | 'description' | 'donations' | 'donations_aggregate' | 'edits' | 'expenses' | 'files' | 'geom' | 'id' | 'image' | 'infos' | 'members' | 'members_aggregate' | 'modified_at' | 'name' | 'polls' | 'projects' | 'tags' | 'tasks' | 'tasks_aggregate' | 'tenders' | 'threads' | 'visits' | 'volunteers' | 'volunteers_aggregate' | initiativesKeySpecifier)[];
export type initiativesFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	donations?: FieldPolicy<any> | FieldReadFunction<any>,
	donations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
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
	tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	threads?: FieldPolicy<any> | FieldReadFunction<any>,
	visits?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	volunteers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type initiatives_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | initiatives_mutation_responseKeySpecifier)[];
export type initiatives_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entriesKeySpecifier = ('created_at' | 'description' | 'geom' | 'id' | 'image' | 'members' | 'modified_at' | 'name' | 'type' | map_entriesKeySpecifier)[];
export type map_entriesFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	geom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_aggregateKeySpecifier = ('aggregate' | 'nodes' | map_entries_aggregateKeySpecifier)[];
export type map_entries_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | map_entries_aggregate_fieldsKeySpecifier)[];
export type map_entries_aggregate_fieldsFieldPolicy = {
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
export type map_entries_avg_fieldsKeySpecifier = ('members' | map_entries_avg_fieldsKeySpecifier)[];
export type map_entries_avg_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_max_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'image' | 'members' | 'modified_at' | 'name' | 'type' | map_entries_max_fieldsKeySpecifier)[];
export type map_entries_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_min_fieldsKeySpecifier = ('created_at' | 'description' | 'id' | 'image' | 'members' | 'modified_at' | 'name' | 'type' | map_entries_min_fieldsKeySpecifier)[];
export type map_entries_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_stddev_fieldsKeySpecifier = ('members' | map_entries_stddev_fieldsKeySpecifier)[];
export type map_entries_stddev_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_stddev_pop_fieldsKeySpecifier = ('members' | map_entries_stddev_pop_fieldsKeySpecifier)[];
export type map_entries_stddev_pop_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_stddev_samp_fieldsKeySpecifier = ('members' | map_entries_stddev_samp_fieldsKeySpecifier)[];
export type map_entries_stddev_samp_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_sum_fieldsKeySpecifier = ('members' | map_entries_sum_fieldsKeySpecifier)[];
export type map_entries_sum_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_var_pop_fieldsKeySpecifier = ('members' | map_entries_var_pop_fieldsKeySpecifier)[];
export type map_entries_var_pop_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_var_samp_fieldsKeySpecifier = ('members' | map_entries_var_samp_fieldsKeySpecifier)[];
export type map_entries_var_samp_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type map_entries_variance_fieldsKeySpecifier = ('members' | map_entries_variance_fieldsKeySpecifier)[];
export type map_entries_variance_fieldsFieldPolicy = {
	members?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_files' | 'delete_files_by_pk' | 'delete_initiative_comment_reactions' | 'delete_initiative_comment_reactions_by_pk' | 'delete_initiative_comments' | 'delete_initiative_comments_by_pk' | 'delete_initiative_donations' | 'delete_initiative_donations_by_pk' | 'delete_initiative_edits' | 'delete_initiative_edits_by_pk' | 'delete_initiative_expenses' | 'delete_initiative_expenses_by_pk' | 'delete_initiative_info' | 'delete_initiative_info_by_pk' | 'delete_initiative_members' | 'delete_initiative_members_by_pk' | 'delete_initiative_poll_votes' | 'delete_initiative_poll_votes_by_pk' | 'delete_initiative_polls' | 'delete_initiative_polls_by_pk' | 'delete_initiative_post_reactions' | 'delete_initiative_post_reactions_by_pk' | 'delete_initiative_posts' | 'delete_initiative_posts_by_pk' | 'delete_initiative_projects' | 'delete_initiative_projects_by_pk' | 'delete_initiative_tags' | 'delete_initiative_tags_by_pk' | 'delete_initiative_tasks' | 'delete_initiative_tasks_by_pk' | 'delete_initiative_threads' | 'delete_initiative_visits' | 'delete_initiative_visits_by_pk' | 'delete_initiative_volunteers' | 'delete_initiative_volunteers_by_pk' | 'delete_initiatives' | 'delete_initiatives_by_pk' | 'delete_tenders' | 'delete_tenders_by_pk' | 'insert_files' | 'insert_files_one' | 'insert_initiative_comment_reactions' | 'insert_initiative_comment_reactions_one' | 'insert_initiative_comments' | 'insert_initiative_comments_one' | 'insert_initiative_donations' | 'insert_initiative_donations_one' | 'insert_initiative_edits' | 'insert_initiative_edits_one' | 'insert_initiative_expenses' | 'insert_initiative_expenses_one' | 'insert_initiative_info' | 'insert_initiative_info_one' | 'insert_initiative_members' | 'insert_initiative_members_one' | 'insert_initiative_poll_votes' | 'insert_initiative_poll_votes_one' | 'insert_initiative_polls' | 'insert_initiative_polls_one' | 'insert_initiative_post_reactions' | 'insert_initiative_post_reactions_one' | 'insert_initiative_posts' | 'insert_initiative_posts_one' | 'insert_initiative_projects' | 'insert_initiative_projects_one' | 'insert_initiative_tags' | 'insert_initiative_tags_one' | 'insert_initiative_tasks' | 'insert_initiative_tasks_one' | 'insert_initiative_threads' | 'insert_initiative_threads_one' | 'insert_initiative_visits' | 'insert_initiative_visits_one' | 'insert_initiative_volunteers' | 'insert_initiative_volunteers_one' | 'insert_initiatives' | 'insert_initiatives_one' | 'insert_tags' | 'insert_tags_one' | 'insert_tenders' | 'insert_tenders_one' | 'update_files' | 'update_files_by_pk' | 'update_initiative_comment_reactions' | 'update_initiative_comment_reactions_by_pk' | 'update_initiative_comments' | 'update_initiative_comments_by_pk' | 'update_initiative_donations' | 'update_initiative_donations_by_pk' | 'update_initiative_edits' | 'update_initiative_edits_by_pk' | 'update_initiative_expenses' | 'update_initiative_expenses_by_pk' | 'update_initiative_info' | 'update_initiative_info_by_pk' | 'update_initiative_members' | 'update_initiative_members_by_pk' | 'update_initiative_poll_votes' | 'update_initiative_poll_votes_by_pk' | 'update_initiative_polls' | 'update_initiative_polls_by_pk' | 'update_initiative_post_reactions' | 'update_initiative_post_reactions_by_pk' | 'update_initiative_posts' | 'update_initiative_posts_by_pk' | 'update_initiative_projects' | 'update_initiative_projects_by_pk' | 'update_initiative_tags' | 'update_initiative_tags_by_pk' | 'update_initiative_tasks' | 'update_initiative_tasks_by_pk' | 'update_initiative_visits' | 'update_initiative_visits_by_pk' | 'update_initiative_volunteers' | 'update_initiative_volunteers_by_pk' | 'update_initiatives' | 'update_initiatives_by_pk' | 'update_tenders' | 'update_tenders_by_pk' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_files?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_comment_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_comment_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
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
	delete_initiative_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
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
	insert_initiative_comment_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_comment_reactions_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_comments_one?: FieldPolicy<any> | FieldReadFunction<any>,
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
	insert_initiative_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_post_reactions_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_posts_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_projects_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tags_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_initiative_tasks_one?: FieldPolicy<any> | FieldReadFunction<any>,
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
	update_initiative_comment_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_comment_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
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
	update_initiative_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_visits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiative_volunteers_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	update_initiatives_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	update_tenders_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type org_membersKeySpecifier = ('created_at' | 'id' | 'org' | 'org_id' | 'role' | 'role_description' | 'user' | 'user_id' | org_membersKeySpecifier)[];
export type org_membersFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	org?: FieldPolicy<any> | FieldReadFunction<any>,
	org_id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	role_description?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
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
export type orgsKeySpecifier = ('created_at' | 'description' | 'geom' | 'id' | 'image' | 'initiative_projects' | 'members' | 'modified_at' | 'name' | 'projects' | 'tags' | 'tenders' | orgsKeySpecifier)[];
export type orgsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	geom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('entries' | 'entries_nearby' | 'entry_members' | 'entry_visits' | 'files' | 'files_by_pk' | 'i18n' | 'i18n_by_pk' | 'i18n_categories' | 'i18n_categories_by_pk' | 'initiative_comment_reactions' | 'initiative_comment_reactions_by_pk' | 'initiative_comments' | 'initiative_comments_aggregate' | 'initiative_comments_by_pk' | 'initiative_donations' | 'initiative_donations_aggregate' | 'initiative_donations_by_pk' | 'initiative_edits' | 'initiative_edits_by_pk' | 'initiative_expenses' | 'initiative_expenses_by_pk' | 'initiative_info' | 'initiative_info_by_pk' | 'initiative_members' | 'initiative_members_aggregate' | 'initiative_members_by_pk' | 'initiative_poll_votes' | 'initiative_poll_votes_by_pk' | 'initiative_polls' | 'initiative_polls_by_pk' | 'initiative_post_reactions' | 'initiative_post_reactions_by_pk' | 'initiative_posts' | 'initiative_posts_aggregate' | 'initiative_posts_by_pk' | 'initiative_projects' | 'initiative_projects_by_pk' | 'initiative_tags' | 'initiative_tags_by_pk' | 'initiative_tasks' | 'initiative_tasks_aggregate' | 'initiative_tasks_by_pk' | 'initiative_threads' | 'initiative_visits' | 'initiative_visits_by_pk' | 'initiative_volunteers' | 'initiative_volunteers_aggregate' | 'initiative_volunteers_by_pk' | 'initiatives' | 'initiatives_by_pk' | 'initiatives_nearby' | 'map_entries' | 'map_entries_aggregate' | 'org_members' | 'org_members_by_pk' | 'org_projects' | 'org_projects_by_pk' | 'org_tags' | 'org_tags_by_pk' | 'orgs' | 'orgs_by_pk' | 'orgs_nearby' | 'tags' | 'tags_by_pk' | 'tenders' | 'tenders_by_pk' | 'users' | 'users_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	entries_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
	entry_members?: FieldPolicy<any> | FieldReadFunction<any>,
	entry_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comment_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comment_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
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
	initiative_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_posts_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
	map_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	map_entries_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	org_members?: FieldPolicy<any> | FieldReadFunction<any>,
	org_members_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	users_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('entries' | 'entries_nearby' | 'entry_members' | 'entry_visits' | 'files' | 'files_by_pk' | 'i18n' | 'i18n_by_pk' | 'i18n_categories' | 'i18n_categories_by_pk' | 'initiative_comment_reactions' | 'initiative_comment_reactions_by_pk' | 'initiative_comments' | 'initiative_comments_aggregate' | 'initiative_comments_by_pk' | 'initiative_donations' | 'initiative_donations_aggregate' | 'initiative_donations_by_pk' | 'initiative_edits' | 'initiative_edits_by_pk' | 'initiative_expenses' | 'initiative_expenses_by_pk' | 'initiative_info' | 'initiative_info_by_pk' | 'initiative_members' | 'initiative_members_aggregate' | 'initiative_members_by_pk' | 'initiative_poll_votes' | 'initiative_poll_votes_by_pk' | 'initiative_polls' | 'initiative_polls_by_pk' | 'initiative_post_reactions' | 'initiative_post_reactions_by_pk' | 'initiative_posts' | 'initiative_posts_aggregate' | 'initiative_posts_by_pk' | 'initiative_projects' | 'initiative_projects_by_pk' | 'initiative_tags' | 'initiative_tags_by_pk' | 'initiative_tasks' | 'initiative_tasks_aggregate' | 'initiative_tasks_by_pk' | 'initiative_threads' | 'initiative_visits' | 'initiative_visits_by_pk' | 'initiative_volunteers' | 'initiative_volunteers_aggregate' | 'initiative_volunteers_by_pk' | 'initiatives' | 'initiatives_by_pk' | 'initiatives_nearby' | 'map_entries' | 'map_entries_aggregate' | 'org_members' | 'org_members_by_pk' | 'org_projects' | 'org_projects_by_pk' | 'org_tags' | 'org_tags_by_pk' | 'orgs' | 'orgs_by_pk' | 'orgs_nearby' | 'tags' | 'tags_by_pk' | 'tenders' | 'tenders_by_pk' | 'users' | 'users_by_pk' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	entries?: FieldPolicy<any> | FieldReadFunction<any>,
	entries_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
	entry_members?: FieldPolicy<any> | FieldReadFunction<any>,
	entry_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories?: FieldPolicy<any> | FieldReadFunction<any>,
	i18n_categories_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comment_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comment_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_comments_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_donations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
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
	initiative_post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_post_reactions_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_posts_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_posts_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_tasks_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_threads?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	initiatives_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
	map_entries?: FieldPolicy<any> | FieldReadFunction<any>,
	map_entries_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	org_members?: FieldPolicy<any> | FieldReadFunction<any>,
	org_members_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags?: FieldPolicy<any> | FieldReadFunction<any>,
	org_tags_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	orgs_nearby?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type usersKeySpecifier = ('avatar_url' | 'comment_reactions' | 'comments' | 'comments_aggregate' | 'created_at' | 'display_name' | 'donations' | 'donations_aggregate' | 'edits' | 'expenses' | 'files' | 'id' | 'initiative_infos' | 'initiative_members' | 'initiative_members_aggregate' | 'initiative_visits' | 'initiative_volunteers' | 'initiative_volunteers_aggregate' | 'org_members' | 'org_projects' | 'post_reactions' | 'posts' | 'posts_aggregate' | 'projects' | 'tasks' | 'tasks_aggregate' | 'tenders' | 'updated_at' | 'votes' | usersKeySpecifier)[];
export type usersFieldPolicy = {
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	comment_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	comments_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	donations?: FieldPolicy<any> | FieldReadFunction<any>,
	donations_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edits?: FieldPolicy<any> | FieldReadFunction<any>,
	expenses?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_infos?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_members_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_visits?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers?: FieldPolicy<any> | FieldReadFunction<any>,
	initiative_volunteers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	org_members?: FieldPolicy<any> | FieldReadFunction<any>,
	org_projects?: FieldPolicy<any> | FieldReadFunction<any>,
	post_reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	posts_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	tenders?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	entries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | entriesKeySpecifier | (() => undefined | entriesKeySpecifier),
		fields?: entriesFieldPolicy,
	},
	entry_members?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | entry_membersKeySpecifier | (() => undefined | entry_membersKeySpecifier),
		fields?: entry_membersFieldPolicy,
	},
	entry_visits?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | entry_visitsKeySpecifier | (() => undefined | entry_visitsKeySpecifier),
		fields?: entry_visitsFieldPolicy,
	},
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
	initiative_comment_reactions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comment_reactionsKeySpecifier | (() => undefined | initiative_comment_reactionsKeySpecifier),
		fields?: initiative_comment_reactionsFieldPolicy,
	},
	initiative_comment_reactions_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comment_reactions_mutation_responseKeySpecifier | (() => undefined | initiative_comment_reactions_mutation_responseKeySpecifier),
		fields?: initiative_comment_reactions_mutation_responseFieldPolicy,
	},
	initiative_comments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_commentsKeySpecifier | (() => undefined | initiative_commentsKeySpecifier),
		fields?: initiative_commentsFieldPolicy,
	},
	initiative_comments_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_aggregateKeySpecifier | (() => undefined | initiative_comments_aggregateKeySpecifier),
		fields?: initiative_comments_aggregateFieldPolicy,
	},
	initiative_comments_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_aggregate_fieldsKeySpecifier | (() => undefined | initiative_comments_aggregate_fieldsKeySpecifier),
		fields?: initiative_comments_aggregate_fieldsFieldPolicy,
	},
	initiative_comments_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_avg_fieldsKeySpecifier | (() => undefined | initiative_comments_avg_fieldsKeySpecifier),
		fields?: initiative_comments_avg_fieldsFieldPolicy,
	},
	initiative_comments_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_max_fieldsKeySpecifier | (() => undefined | initiative_comments_max_fieldsKeySpecifier),
		fields?: initiative_comments_max_fieldsFieldPolicy,
	},
	initiative_comments_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_min_fieldsKeySpecifier | (() => undefined | initiative_comments_min_fieldsKeySpecifier),
		fields?: initiative_comments_min_fieldsFieldPolicy,
	},
	initiative_comments_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_mutation_responseKeySpecifier | (() => undefined | initiative_comments_mutation_responseKeySpecifier),
		fields?: initiative_comments_mutation_responseFieldPolicy,
	},
	initiative_comments_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_stddev_fieldsKeySpecifier | (() => undefined | initiative_comments_stddev_fieldsKeySpecifier),
		fields?: initiative_comments_stddev_fieldsFieldPolicy,
	},
	initiative_comments_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_stddev_pop_fieldsKeySpecifier | (() => undefined | initiative_comments_stddev_pop_fieldsKeySpecifier),
		fields?: initiative_comments_stddev_pop_fieldsFieldPolicy,
	},
	initiative_comments_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_stddev_samp_fieldsKeySpecifier | (() => undefined | initiative_comments_stddev_samp_fieldsKeySpecifier),
		fields?: initiative_comments_stddev_samp_fieldsFieldPolicy,
	},
	initiative_comments_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_sum_fieldsKeySpecifier | (() => undefined | initiative_comments_sum_fieldsKeySpecifier),
		fields?: initiative_comments_sum_fieldsFieldPolicy,
	},
	initiative_comments_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_var_pop_fieldsKeySpecifier | (() => undefined | initiative_comments_var_pop_fieldsKeySpecifier),
		fields?: initiative_comments_var_pop_fieldsFieldPolicy,
	},
	initiative_comments_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_var_samp_fieldsKeySpecifier | (() => undefined | initiative_comments_var_samp_fieldsKeySpecifier),
		fields?: initiative_comments_var_samp_fieldsFieldPolicy,
	},
	initiative_comments_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_comments_variance_fieldsKeySpecifier | (() => undefined | initiative_comments_variance_fieldsKeySpecifier),
		fields?: initiative_comments_variance_fieldsFieldPolicy,
	},
	initiative_donations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donationsKeySpecifier | (() => undefined | initiative_donationsKeySpecifier),
		fields?: initiative_donationsFieldPolicy,
	},
	initiative_donations_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_aggregateKeySpecifier | (() => undefined | initiative_donations_aggregateKeySpecifier),
		fields?: initiative_donations_aggregateFieldPolicy,
	},
	initiative_donations_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_aggregate_fieldsKeySpecifier | (() => undefined | initiative_donations_aggregate_fieldsKeySpecifier),
		fields?: initiative_donations_aggregate_fieldsFieldPolicy,
	},
	initiative_donations_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_avg_fieldsKeySpecifier | (() => undefined | initiative_donations_avg_fieldsKeySpecifier),
		fields?: initiative_donations_avg_fieldsFieldPolicy,
	},
	initiative_donations_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_max_fieldsKeySpecifier | (() => undefined | initiative_donations_max_fieldsKeySpecifier),
		fields?: initiative_donations_max_fieldsFieldPolicy,
	},
	initiative_donations_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_min_fieldsKeySpecifier | (() => undefined | initiative_donations_min_fieldsKeySpecifier),
		fields?: initiative_donations_min_fieldsFieldPolicy,
	},
	initiative_donations_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_mutation_responseKeySpecifier | (() => undefined | initiative_donations_mutation_responseKeySpecifier),
		fields?: initiative_donations_mutation_responseFieldPolicy,
	},
	initiative_donations_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_stddev_fieldsKeySpecifier | (() => undefined | initiative_donations_stddev_fieldsKeySpecifier),
		fields?: initiative_donations_stddev_fieldsFieldPolicy,
	},
	initiative_donations_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_stddev_pop_fieldsKeySpecifier | (() => undefined | initiative_donations_stddev_pop_fieldsKeySpecifier),
		fields?: initiative_donations_stddev_pop_fieldsFieldPolicy,
	},
	initiative_donations_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_stddev_samp_fieldsKeySpecifier | (() => undefined | initiative_donations_stddev_samp_fieldsKeySpecifier),
		fields?: initiative_donations_stddev_samp_fieldsFieldPolicy,
	},
	initiative_donations_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_sum_fieldsKeySpecifier | (() => undefined | initiative_donations_sum_fieldsKeySpecifier),
		fields?: initiative_donations_sum_fieldsFieldPolicy,
	},
	initiative_donations_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_var_pop_fieldsKeySpecifier | (() => undefined | initiative_donations_var_pop_fieldsKeySpecifier),
		fields?: initiative_donations_var_pop_fieldsFieldPolicy,
	},
	initiative_donations_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_var_samp_fieldsKeySpecifier | (() => undefined | initiative_donations_var_samp_fieldsKeySpecifier),
		fields?: initiative_donations_var_samp_fieldsFieldPolicy,
	},
	initiative_donations_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_donations_variance_fieldsKeySpecifier | (() => undefined | initiative_donations_variance_fieldsKeySpecifier),
		fields?: initiative_donations_variance_fieldsFieldPolicy,
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
	initiative_post_reactions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_post_reactionsKeySpecifier | (() => undefined | initiative_post_reactionsKeySpecifier),
		fields?: initiative_post_reactionsFieldPolicy,
	},
	initiative_post_reactions_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_post_reactions_mutation_responseKeySpecifier | (() => undefined | initiative_post_reactions_mutation_responseKeySpecifier),
		fields?: initiative_post_reactions_mutation_responseFieldPolicy,
	},
	initiative_posts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_postsKeySpecifier | (() => undefined | initiative_postsKeySpecifier),
		fields?: initiative_postsFieldPolicy,
	},
	initiative_posts_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_aggregateKeySpecifier | (() => undefined | initiative_posts_aggregateKeySpecifier),
		fields?: initiative_posts_aggregateFieldPolicy,
	},
	initiative_posts_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_aggregate_fieldsKeySpecifier | (() => undefined | initiative_posts_aggregate_fieldsKeySpecifier),
		fields?: initiative_posts_aggregate_fieldsFieldPolicy,
	},
	initiative_posts_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_avg_fieldsKeySpecifier | (() => undefined | initiative_posts_avg_fieldsKeySpecifier),
		fields?: initiative_posts_avg_fieldsFieldPolicy,
	},
	initiative_posts_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_max_fieldsKeySpecifier | (() => undefined | initiative_posts_max_fieldsKeySpecifier),
		fields?: initiative_posts_max_fieldsFieldPolicy,
	},
	initiative_posts_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_min_fieldsKeySpecifier | (() => undefined | initiative_posts_min_fieldsKeySpecifier),
		fields?: initiative_posts_min_fieldsFieldPolicy,
	},
	initiative_posts_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_mutation_responseKeySpecifier | (() => undefined | initiative_posts_mutation_responseKeySpecifier),
		fields?: initiative_posts_mutation_responseFieldPolicy,
	},
	initiative_posts_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_stddev_fieldsKeySpecifier | (() => undefined | initiative_posts_stddev_fieldsKeySpecifier),
		fields?: initiative_posts_stddev_fieldsFieldPolicy,
	},
	initiative_posts_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_stddev_pop_fieldsKeySpecifier | (() => undefined | initiative_posts_stddev_pop_fieldsKeySpecifier),
		fields?: initiative_posts_stddev_pop_fieldsFieldPolicy,
	},
	initiative_posts_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_stddev_samp_fieldsKeySpecifier | (() => undefined | initiative_posts_stddev_samp_fieldsKeySpecifier),
		fields?: initiative_posts_stddev_samp_fieldsFieldPolicy,
	},
	initiative_posts_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_sum_fieldsKeySpecifier | (() => undefined | initiative_posts_sum_fieldsKeySpecifier),
		fields?: initiative_posts_sum_fieldsFieldPolicy,
	},
	initiative_posts_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_var_pop_fieldsKeySpecifier | (() => undefined | initiative_posts_var_pop_fieldsKeySpecifier),
		fields?: initiative_posts_var_pop_fieldsFieldPolicy,
	},
	initiative_posts_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_var_samp_fieldsKeySpecifier | (() => undefined | initiative_posts_var_samp_fieldsKeySpecifier),
		fields?: initiative_posts_var_samp_fieldsFieldPolicy,
	},
	initiative_posts_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_posts_variance_fieldsKeySpecifier | (() => undefined | initiative_posts_variance_fieldsKeySpecifier),
		fields?: initiative_posts_variance_fieldsFieldPolicy,
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
	initiative_tasks_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_aggregateKeySpecifier | (() => undefined | initiative_tasks_aggregateKeySpecifier),
		fields?: initiative_tasks_aggregateFieldPolicy,
	},
	initiative_tasks_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_aggregate_fieldsKeySpecifier | (() => undefined | initiative_tasks_aggregate_fieldsKeySpecifier),
		fields?: initiative_tasks_aggregate_fieldsFieldPolicy,
	},
	initiative_tasks_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_avg_fieldsKeySpecifier | (() => undefined | initiative_tasks_avg_fieldsKeySpecifier),
		fields?: initiative_tasks_avg_fieldsFieldPolicy,
	},
	initiative_tasks_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_max_fieldsKeySpecifier | (() => undefined | initiative_tasks_max_fieldsKeySpecifier),
		fields?: initiative_tasks_max_fieldsFieldPolicy,
	},
	initiative_tasks_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_min_fieldsKeySpecifier | (() => undefined | initiative_tasks_min_fieldsKeySpecifier),
		fields?: initiative_tasks_min_fieldsFieldPolicy,
	},
	initiative_tasks_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_mutation_responseKeySpecifier | (() => undefined | initiative_tasks_mutation_responseKeySpecifier),
		fields?: initiative_tasks_mutation_responseFieldPolicy,
	},
	initiative_tasks_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_stddev_fieldsKeySpecifier | (() => undefined | initiative_tasks_stddev_fieldsKeySpecifier),
		fields?: initiative_tasks_stddev_fieldsFieldPolicy,
	},
	initiative_tasks_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_stddev_pop_fieldsKeySpecifier | (() => undefined | initiative_tasks_stddev_pop_fieldsKeySpecifier),
		fields?: initiative_tasks_stddev_pop_fieldsFieldPolicy,
	},
	initiative_tasks_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_stddev_samp_fieldsKeySpecifier | (() => undefined | initiative_tasks_stddev_samp_fieldsKeySpecifier),
		fields?: initiative_tasks_stddev_samp_fieldsFieldPolicy,
	},
	initiative_tasks_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_sum_fieldsKeySpecifier | (() => undefined | initiative_tasks_sum_fieldsKeySpecifier),
		fields?: initiative_tasks_sum_fieldsFieldPolicy,
	},
	initiative_tasks_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_var_pop_fieldsKeySpecifier | (() => undefined | initiative_tasks_var_pop_fieldsKeySpecifier),
		fields?: initiative_tasks_var_pop_fieldsFieldPolicy,
	},
	initiative_tasks_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_var_samp_fieldsKeySpecifier | (() => undefined | initiative_tasks_var_samp_fieldsKeySpecifier),
		fields?: initiative_tasks_var_samp_fieldsFieldPolicy,
	},
	initiative_tasks_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_tasks_variance_fieldsKeySpecifier | (() => undefined | initiative_tasks_variance_fieldsKeySpecifier),
		fields?: initiative_tasks_variance_fieldsFieldPolicy,
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
	initiative_volunteers_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_aggregateKeySpecifier | (() => undefined | initiative_volunteers_aggregateKeySpecifier),
		fields?: initiative_volunteers_aggregateFieldPolicy,
	},
	initiative_volunteers_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_aggregate_fieldsKeySpecifier | (() => undefined | initiative_volunteers_aggregate_fieldsKeySpecifier),
		fields?: initiative_volunteers_aggregate_fieldsFieldPolicy,
	},
	initiative_volunteers_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_avg_fieldsKeySpecifier | (() => undefined | initiative_volunteers_avg_fieldsKeySpecifier),
		fields?: initiative_volunteers_avg_fieldsFieldPolicy,
	},
	initiative_volunteers_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_max_fieldsKeySpecifier | (() => undefined | initiative_volunteers_max_fieldsKeySpecifier),
		fields?: initiative_volunteers_max_fieldsFieldPolicy,
	},
	initiative_volunteers_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_min_fieldsKeySpecifier | (() => undefined | initiative_volunteers_min_fieldsKeySpecifier),
		fields?: initiative_volunteers_min_fieldsFieldPolicy,
	},
	initiative_volunteers_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_mutation_responseKeySpecifier | (() => undefined | initiative_volunteers_mutation_responseKeySpecifier),
		fields?: initiative_volunteers_mutation_responseFieldPolicy,
	},
	initiative_volunteers_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_stddev_fieldsKeySpecifier | (() => undefined | initiative_volunteers_stddev_fieldsKeySpecifier),
		fields?: initiative_volunteers_stddev_fieldsFieldPolicy,
	},
	initiative_volunteers_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_stddev_pop_fieldsKeySpecifier | (() => undefined | initiative_volunteers_stddev_pop_fieldsKeySpecifier),
		fields?: initiative_volunteers_stddev_pop_fieldsFieldPolicy,
	},
	initiative_volunteers_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_stddev_samp_fieldsKeySpecifier | (() => undefined | initiative_volunteers_stddev_samp_fieldsKeySpecifier),
		fields?: initiative_volunteers_stddev_samp_fieldsFieldPolicy,
	},
	initiative_volunteers_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_sum_fieldsKeySpecifier | (() => undefined | initiative_volunteers_sum_fieldsKeySpecifier),
		fields?: initiative_volunteers_sum_fieldsFieldPolicy,
	},
	initiative_volunteers_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_var_pop_fieldsKeySpecifier | (() => undefined | initiative_volunteers_var_pop_fieldsKeySpecifier),
		fields?: initiative_volunteers_var_pop_fieldsFieldPolicy,
	},
	initiative_volunteers_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_var_samp_fieldsKeySpecifier | (() => undefined | initiative_volunteers_var_samp_fieldsKeySpecifier),
		fields?: initiative_volunteers_var_samp_fieldsFieldPolicy,
	},
	initiative_volunteers_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiative_volunteers_variance_fieldsKeySpecifier | (() => undefined | initiative_volunteers_variance_fieldsKeySpecifier),
		fields?: initiative_volunteers_variance_fieldsFieldPolicy,
	},
	initiatives?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiativesKeySpecifier | (() => undefined | initiativesKeySpecifier),
		fields?: initiativesFieldPolicy,
	},
	initiatives_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | initiatives_mutation_responseKeySpecifier | (() => undefined | initiatives_mutation_responseKeySpecifier),
		fields?: initiatives_mutation_responseFieldPolicy,
	},
	map_entries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entriesKeySpecifier | (() => undefined | map_entriesKeySpecifier),
		fields?: map_entriesFieldPolicy,
	},
	map_entries_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_aggregateKeySpecifier | (() => undefined | map_entries_aggregateKeySpecifier),
		fields?: map_entries_aggregateFieldPolicy,
	},
	map_entries_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_aggregate_fieldsKeySpecifier | (() => undefined | map_entries_aggregate_fieldsKeySpecifier),
		fields?: map_entries_aggregate_fieldsFieldPolicy,
	},
	map_entries_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_avg_fieldsKeySpecifier | (() => undefined | map_entries_avg_fieldsKeySpecifier),
		fields?: map_entries_avg_fieldsFieldPolicy,
	},
	map_entries_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_max_fieldsKeySpecifier | (() => undefined | map_entries_max_fieldsKeySpecifier),
		fields?: map_entries_max_fieldsFieldPolicy,
	},
	map_entries_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_min_fieldsKeySpecifier | (() => undefined | map_entries_min_fieldsKeySpecifier),
		fields?: map_entries_min_fieldsFieldPolicy,
	},
	map_entries_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_stddev_fieldsKeySpecifier | (() => undefined | map_entries_stddev_fieldsKeySpecifier),
		fields?: map_entries_stddev_fieldsFieldPolicy,
	},
	map_entries_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_stddev_pop_fieldsKeySpecifier | (() => undefined | map_entries_stddev_pop_fieldsKeySpecifier),
		fields?: map_entries_stddev_pop_fieldsFieldPolicy,
	},
	map_entries_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_stddev_samp_fieldsKeySpecifier | (() => undefined | map_entries_stddev_samp_fieldsKeySpecifier),
		fields?: map_entries_stddev_samp_fieldsFieldPolicy,
	},
	map_entries_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_sum_fieldsKeySpecifier | (() => undefined | map_entries_sum_fieldsKeySpecifier),
		fields?: map_entries_sum_fieldsFieldPolicy,
	},
	map_entries_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_var_pop_fieldsKeySpecifier | (() => undefined | map_entries_var_pop_fieldsKeySpecifier),
		fields?: map_entries_var_pop_fieldsFieldPolicy,
	},
	map_entries_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_var_samp_fieldsKeySpecifier | (() => undefined | map_entries_var_samp_fieldsKeySpecifier),
		fields?: map_entries_var_samp_fieldsFieldPolicy,
	},
	map_entries_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | map_entries_variance_fieldsKeySpecifier | (() => undefined | map_entries_variance_fieldsKeySpecifier),
		fields?: map_entries_variance_fieldsFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	org_members?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | org_membersKeySpecifier | (() => undefined | org_membersKeySpecifier),
		fields?: org_membersFieldPolicy,
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
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    