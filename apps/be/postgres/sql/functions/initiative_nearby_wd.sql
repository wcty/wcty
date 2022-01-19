-- Function returns a list of initiatives near a user based on the
-- input arguments location, limit, min and max distance and date, userid and membership
CREATE FUNCTION initiatives_nearby(
  "location" geometry, 
  "limit" integer default 20,
  min_distance float8 default 0.0,
  max_distance float8 default 20037500,
  min_date timestamptz default to_timestamp(0),
  max_date timestamptz default NOW(),
  user_id uuid default null, 
  own boolean default false
)
RETURNS SETOF public.initiative_distance AS $$
select * 
    from 
      public.initiatives I, 
      lateral ST_Distance(
        ST_Transform(I.geom::Geometry, 3857),
        ST_Transform(ST_SetSRID("location"::Geometry, 4326), 3857)
      ) distance
    where 
      case when user_id is not null 
        then NOT EXISTS (
          SELECT  -- SELECT list mostly irrelevant; can just be empty in Postgres
          FROM public.initiative_visits iv
          WHERE iv.user_id = user_id and iv.initiative_id = I.id
        ) 
        else true
      end and
      distance <= max_distance 
        and 
      distance > min_distance
        and
      I.created_at > min_date
        and
      I.created_at <= max_date
        and
      case when user_id is not null and own = true
        then 
          EXISTS (
            SELECT
            FROM public.initiative_members im
            WHERE im.user_id = user_id and im.initiative_id  = I.id
          )
        else true
      end
    order by distance
    limit "limit"
$$ LANGUAGE sql STABLE;
