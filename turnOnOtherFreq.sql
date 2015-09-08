SELECT TRIM(pref_turnsmeon_other),COUNT(*) as count FROM am_am_member WHERE country=4 GROUP BY pref_turnsmeon_other ORDER BY count DESC;
