gen:
	@echo "Generating proto files..."
	protoc --twirp_out=. --go_out=. rpc/pano-api/service.proto

upgrade:
	@echo "Upgrading dependencies..."
	go get -u

build_up: 
	@echo "Building pano-api..."
	sudo docker compose up --build --remove-orphans

up:
	@echo "Starting docker-compose..."
	sudo docker compose up 

down:
	@echo "Stopping docker-compose..."
	sudo docker compose down --remove-orphans
