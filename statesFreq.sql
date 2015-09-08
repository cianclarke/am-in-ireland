SELECT state,COUNT(*) as count FROM am_am_member WHERE country=4 GROUP BY state ORDER BY count DESC;
