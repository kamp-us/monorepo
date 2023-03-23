gen:
	@echo "Generating proto files..."
	rm -rf service.pb.go service.twirp.go
	protoc --proto_path=. --twirp_out=. --go_out=. service.proto
	mv go.kamp.us/protos/pano-api/*.go .
	rm -rf go.kamp.us
