-- Riftline's casual, client-reported high-score boards are separate by game mode.
-- Board IDs and rules versions are immutable after this migration is applied.
INSERT INTO game_lb_boards
  (namespace,id,rules_version,direction,min_score,max_score,min_duration_ms,max_duration_ms,`open`)
VALUES
  ('production','onslaught-score-v1','v1','desc',0,10000000,0,1800000,TRUE),
  ('production','deathmatch-score-v1','v1','desc',0,10000000,0,1800000,TRUE);
