gen:
	@echo "Generating proto files..."
	protoc --twirp_out=. --go_out=. rpc/pano-api/service.proto

upgrade:
	@echo "Upgrading dependencies..."
	go get -u

build_up:
	@echo "Building pano-api..."
	docker compose up --build --remove-orphans

up:
	@echo "Starting docker-compose..."
	docker compose up

down:
	@echo "Stopping docker-compose..."
	docker compose down --remove-orphans
