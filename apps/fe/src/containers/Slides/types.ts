import type { FetchMoreQueryOptions } from "@apollo/client";
import type { Exact, Maybe, NearbyEntriesQuery } from "generated";

export type FeedProps = {
  fetchMore: (fetchMoreOptions: FetchMoreQueryOptions<Exact<{
    location: any;
    limit?: Maybe<number> | undefined;
    max_date?: any;
    max_distance?: any;
    min_date?: any;
    min_distance?: any;
    user_id?: any;
    own?: Maybe<boolean> | undefined;
  }>, NearbyEntriesQuery>)=>any
}