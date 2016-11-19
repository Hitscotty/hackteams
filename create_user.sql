DROP USER 'test'@'hackteams.c6p7kpyzcymg.us-east-1.rds.amazonaws.com';
CREATE USER 'test'@'hackteams.c6p7kpyzcymg.us-east-1.rds.amazonaws.com' IDENTIFIED BY 'password';
GRANT SELECT, INSERT, DELETE, UPDATE ON hackteams.* TO 'test'@'%';
FLUSH PRIVILEGES;