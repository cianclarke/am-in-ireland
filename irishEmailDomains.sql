SELECT email from aminno.aminno_member_email WHERE pnum IN (SELECT id FROM am.am_am_member WHERE country = 4);
