CREATE VIEW initiative_distance as
SELECT *, 0::double precision AS distance
FROM initiatives;