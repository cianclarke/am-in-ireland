SELECT city,COUNT(*) as count FROM am_am_member WHERE country=4 GROUP BY city ORDER BY count DESC;
