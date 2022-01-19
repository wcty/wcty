 SELECT o.id,
    o.name,
    o.geom,
    o.description,
    o.created_at,
    o.image,
    o.modified_at,
    o.members_count,
    'organization'::text AS type
   FROM orgs_view o
UNION ALL
 SELECT i.id,
    i.name,
    i.geom,
    i.description,
    i.created_at,
    i.image,
    i.modified_at,
    i.members_count,
    'initiative'::text AS type
   FROM initiatives_view i;