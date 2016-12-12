DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    completed BOOL DEFAULT 'f',
    item_number VARCHAR,
    location_number VARCHAR,
    project VARCHAR,
    description VARCHAR,
    priority VARCHAR,
    requestor VARCHAR,
    assigned_to VARCHAR,
    due_date VARCHAR,
    notes VARCHAR
);
  
INSERT INTO tasks ( completed, item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES (true, '1', '111', 'project', 'description', 'high', 'mike', 'mike', '10-10-2017', 'notes');

INSERT INTO tasks ( completed, item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES (true, '2', '111', 'project', 'description', 'high', 'mike', 'mike', '10-13-2017', 'notes');

INSERT INTO tasks ( completed, item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES (true, '3', '222', 'project', 'description', 'high', 'mike', 'mike', '10-14-2017', 'notes');

INSERT INTO tasks ( item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('4', '222', 'project', 'description2', 'low', 'mike', 'mike', '10-11-2017', 'Notes');

INSERT INTO tasks ( item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('5', '333', 'project', 'description3', 'low', 'mike', 'mike', '10-12-2017', 'notes');

INSERT INTO tasks ( item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('6', '333', 'project', 'description3', 'low', 'mike', 'mike', '10-16-2017', 'notes');

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    completed BOOL DEFAULT 'f',
    item_number VARCHAR,
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

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    completed BOOL DEFAULT 'f',
    item_number VARCHAR,
    location_number VARCHAR,
    project VARCHAR,
    description VARCHAR,
    priority VARCHAR,
    requestor VARCHAR,
    assigned_to VARCHAR,
    due_date VARCHAR,
    notes VARCHAR
);