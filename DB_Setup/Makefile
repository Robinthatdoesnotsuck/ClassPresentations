init-postgres-detached-to-terminal-container:
	docker run -d --name city_blog \
		-p 5432:5432 \
		-e POSTGRES_PASSWORD=super_secret \
		-v ./CreateTables.sql:/tmp/CreateTables.sql:ro \
		postgres:latest

init-postgres-attached-to-terminal-container:
	docker run --name city_blog \
		-p 5432:5433 \
		-e POSTGRES_PASSWORD=super_secret \
		-v ./CreateTables.sql:/tmp/CreateTables.sql:ro \
		postgres:latest

execute-sql-init-file:
	docker exec -i city_blog psql -U postgres -d postgres < ./CreateTables.sql

execute-sql-dummy-data:
	docker exec -i city_blog psql -U postgres -d postgres < ./InsertDummyData.sql

access-postgres-container:
	docker exec -it city_blog psql -U postgres -d postgres

init-postgres-only-db-to-terminal-container:
	docker run --name city_blog \
		-p 5432:5432 \
		-e POSTGRES_PASSWORD=super_secret \
		-v ./InitDB.sql:/docker-entrypoint-initdb.d/InitDB.sql \
		postgres:latest

execute-db:
	docker exec -i city_blog psql -U postgres -d city_blog < ./InitDB.sql
