 SELECT i.id,
    i.name,
    i.geom,
    i.description,
    i.created_at,
    i.image,
    i.modified_at,
    m.count AS members_count
   FROM initiatives i,
    ( SELECT count(*) AS count,
            initiative_members.initiative_id AS id
           FROM initiative_members
          GROUP BY initiative_members.initiative_id) m
  WHERE i.id = m.id;