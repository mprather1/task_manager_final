#Edit /etc/postgresql/9.4/main/pg_hba.conf 

local   all             postgres                                trust #peer

#######################################################################

sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
psql -f db.sql -U postgres

#GET users
curl http://127.0.0.1:8000/api/users

#GET users/:id
curl http://127.0.0.1:8000/api/users/:id

#POST users
curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Kill", "last_name":"Bill", "email":"KillBill@dead.com", "password":"dead"}' http://127.0.0.1:8000/api/users

#PUT users
curl -H "Content-Type: application/json" -X PUT -d '{"password":"Kill Bill"}' http://127.0.0.1:8000/api/users/1

#DELETE users
curl -X DELETE http://127.0.0.1:8000/api/users/1