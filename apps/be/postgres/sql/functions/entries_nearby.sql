CREATE FUNCTION entries_nearby(
  "location" geometry,
  "limit" integer default 20,
  min_distance double precision default 0.0,
  max_distance double precision default 20037500,
  min_date timestamptz default  to_timestamp((0)::double precision),
  max_date timestamptz default now(),
  user_id uuid default null::uuid,
  own boolean default false,
  "type" text default 'all'
)
RETURNS SETOF entries AS $$

  select I.id, I.name, I.geom, I.description, I.created_at, I.image, I.modified_at, I.members_count, I.type 
      from 
        public.entries I, 
        lateral ST_Distance(
          ST_Transform(I.geom::Geometry, 3857),
          ST_Transform(ST_SetSRID("location"::Geometry, 4326), 3857)
        ) distance
      where 
        case when type='all'
          then true
          else I.type=type
        end and
        case when user_id is not null 
          then NOT EXISTS (
            SELECT  -- SELECT list mostly irrelevant; can just be empty in Postgres
            FROM public.entry_visits iv
            WHERE iv.user_id = user_id and iv.entry_id = I.id
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
              FROM public.entry_members im
              WHERE im.user_id = user_id and im.entry_id  = I.id
            )
          else true
        end
      order by distance
      limit "limit"

$$ LANGUAGE sql STABLE;