SELECT pref_lookingfor,COUNT(*) as count FROM am_am_member WHERE country=4 GROUP BY pref_lookingfor ORDER BY count DESC;
