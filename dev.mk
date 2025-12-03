# ---

update-npm-packages:
	sh ./scripts/update-npm-packages.sh

psql:
	docker exec -it ${PROJECT_NAME}-postgres psql -U dev ${PROJECT_NAME}-local

compose-up:
	docker compose -f ./docker-compose.dev.yml -p ${PROJECT_NAME} up -d

compose-down:
	docker compose -p ${PROJECT_NAME} down --volumes

compose-start:
	docker compose -p ${PROJECT_NAME} start

compose-stop:
	docker compose -p ${PROJECT_NAME} stop

compose-reborn:
	make compose-down && make compose-up && sleep 2 && npm run migrate
