 SELECT i.id,
    i.name,
    i.geom,
    i.description,
    i.created_at,
    i.image,
    i.modified_at,
    m.count AS members_count
   FROM orgs i,
    ( SELECT count(*) AS count,
            org_members.org_id AS id
           FROM org_members
          GROUP BY org_members.org_id) m
  WHERE i.id = m.id;