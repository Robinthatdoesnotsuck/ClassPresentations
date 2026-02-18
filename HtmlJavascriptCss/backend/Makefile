flask:
	flask --app backend run

init-db:
	docker run --name my-postgres \
	-e POSTGRES_PASSWORD=secret \
	-e POSTGRES_USER=myuser \
	-v ./basic_db.sql:/tmp/init.sql:ro \
	-p 5432:5432 -d postgres:latest

connect-to-db:
	docker exec -it my-postgres psql -U myuser -d myapp