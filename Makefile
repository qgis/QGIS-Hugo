help:
	@echo "QGIS Hugo"
	@echo
	@echo "Brought to you by Kartoza (Pty) Ltd."
	@echo
	@echo "Help for using this Makefile"
	@echo
	@echo "For detailed help please visit:"
	@echo "https://github.com/QGIS/QGIS-Hugo"
	@echo
	@echo "------------------------------------------------------------------"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort  | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m - %s\n", $$1, $$2}'
 
dev-build: ## Generate the development docker container
	docker build --rm -f Dockerfile.dev -t qgis_hugo_dev:latest .

dev: dev-build ## Run the development hugo container
	docker run --rm -it -v "$${PWD}":/app -w /app -p $${HOST_IP:-127.0.0.1}:1313:1313 qgis_hugo_dev:latest

dev-metrics: dev-build ## Run the development hugo container with metrics
	docker run --rm -it -v "$${PWD}":/app -w /app -p $${HOST_IP:-127.0.0.1}:1313:1313 qgis_hugo_dev:latest serve -D --bind 0.0.0.0 --templateMetrics --templateMetricsHints

deploy-prod: ## Deploy everything to production
	docker build -t qgis.org .
	docker-compose -f ~/docker-compose.yml up -d qgis_hugo_prod
	docker image prune -af

tests: ## Run the test suite
	docker build --rm -f Dockerfile.tests -t qgis_hugo_tests:latest .
	docker run --rm --net=host --volume "$${PWD}":/app -w /app qgis_hugo_tests:latest

build: ## Build the site then run using python http.server
	hugo --baseURL ""
	python -m http.server 8000 -d public
	#xdg-open http://localhost:8000

csv/schedule.csv scripts/schedule.ics data/conf.json:
	python scripts/update-schedule.py

clearschedule:
	$(RM) csv/schedule.csv data/conf.json

schedule: clearschedule csv/schedule.csv scripts/schedule.ics data/conf.json	## Update schedule after release
	git pull --autostash --rebase
	git commit -a -m "Update for $(shell jq -r '.release' data/conf.json)/$(shell jq -r '.ltrrelease' data/conf.json) point releases"

.PHONY: schedule
