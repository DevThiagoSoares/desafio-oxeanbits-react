build:
	docker compose build --no-cache
	docker compose up -d

.PHONY: build

deploy:
	git pull
	docker compose up -d --build

.PHONY: deploy

up:
	docker compose up -d

.PHONY: up

down:
	docker compose down

.PHONY: down

logs:
	docker logs DESAFIO-OXEANBITS-FRONTEND -f

.PHONY: logs

# Commands by PM2
build-pm2:
	yarn
	yarn build
	pm2 start dist/main.js -f --name DESAFIO-OXEANBITS-FRONTEND

.PHONY: build-pm2

logs-pm2:
	pm2 logs DESAFIO-OXEANBITS-FRONTEND

.PHONY: logs-pm2

