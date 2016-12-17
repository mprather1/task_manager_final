DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;


CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    username VARCHAR,
    email VARCHAR,
    password_hash VARCHAR
);
  
INSERT INTO users ( first_name, last_name, username, email, password_hash )
VALUES ('Michael', 'Prather', 'mprather1', 'mprather@example.com', '$2a$10$dzRDo.p/8GlXkeQFPGbebeRYOfwrxGcE1AYvmn0Y89t7mty3FBUWO');

INSERT INTO users ( first_name, last_name, username, email, password_hash )
VALUES ('Kill', 'Bill', 'killbill', 'killbill@example.com', '$2a$10$dzRDo.p/8GlXkeQFPGbeberEI5tpZFQ0Uo3ouvKJRS5ryi/F8I1IC');

INSERT INTO users ( first_name, last_name, username, email, password_hash )
VALUES ('Turd', 'Sandwich', 'turdsandwich', 'turdsandwich@example.com', '$2a$10$dzRDo.p/8GlXkeQFPGbebeRYOfwrxGcE1AYvmn0Y89t7mty3FBUWO');

INSERT INTO users ( first_name, last_name, username, email, password_hash )
VALUES ('Giant', 'Douche', 'giant_douche', 'giant_douche@example.com', '$2a$10$dzRDo.p/8GlXkeQFPGbeberEI5tpZFQ0Uo3ouvKJRS5ryi/F8I1IC');

INSERT INTO users ( first_name, last_name, username, email, password_hash )
VALUES ('Sam', 'Sasquatch', 'samsqaunch', 'sasquatchpenis@example.com', '$2a$10$dzRDo.p/8GlXkeQFPGbeberEI5tpZFQ0Uo3ouvKJRS5ryi/F8I1IC');

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    completed BOOL DEFAULT 'f',
    location_number VARCHAR,
    project VARCHAR,
    description VARCHAR,
    priority VARCHAR,
    requestor VARCHAR,
    assigned_to VARCHAR,
    due_date VARCHAR,
    notes VARCHAR
);
  
INSERT INTO tasks ( location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('101', 'project', 'Flush the toilet!', 'high', 'Mike Prather', 'Kill Bill', '10-10-2017', 'Do not forget to flush the toilet!!');

INSERT INTO tasks ( location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('201', 'project', 'Eat Dinner!', 'med', 'Mike Prather', 'Sam Sasquatch', '10-13-2017', 'Do not forget to eat dinner!!');

INSERT INTO tasks ( location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('302', 'project', 'You are fired!', 'high', 'Giant Douche', 'Turd Sandwich', '10-14-2017', 'Donald Trump!');

INSERT INTO tasks ( location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('432', 'project', 'This is a new task.', 'low', 'Kill Bill', 'Giant Douche', '10-11-2017', 'Here is a new task for you to do.');

INSERT INTO tasks ( location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('111', 'project', 'Another Task.', 'low', 'Sam Sasquatch', 'Mike Prather', '10-12-2017', 'Another task for you to do!');

INSERT INTO tasks ( location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('100', 'project', 'Here is a description.', 'med', 'Turd Sandwich', 'Sam Sasquatch', '10-16-2017', 'Here is some notes.');

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    username VARCHAR,
    email VARCHAR,
    password_hash VARCHAR
);

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    completed BOOL DEFAULT 'f',
    location_number VARCHAR,
    project VARCHAR,
    description VARCHAR,
    priority VARCHAR,
    requestor VARCHAR,
    assigned_to VARCHAR,
    due_date VARCHAR,
    notes VARCHAR
);

DROP DATABASE IF EXISTS api_production;
CREATE DATABASE api_production;

\c api_production;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    username VARCHAR,
    email VARCHAR,
    password_hash VARCHAR
);

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    completed BOOL DEFAULT 'f',
    location_number VARCHAR,
    project VARCHAR,
    description VARCHAR,
    priority VARCHAR,
    requestor VARCHAR,
    assigned_to VARCHAR,
    due_date VARCHAR,
    notes VARCHAR
);