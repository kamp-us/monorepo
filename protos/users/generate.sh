PROTOC_GEN_TWIRP_BIN="$(npm root)/.bin/protoc-gen-twirp_ts"
PROTOC_GEN_TS_BIN="$(npm root)/.bin/protoc-gen-ts"
OUT_DIR="./typescript"

rm -rf ${OUT_DIR}
mkdir -p ${OUT_DIR}

npx protoc \
    --proto_path=. \
    --plugin=protoc-gen-ts=${PROTOC_GEN_TS_BIN} \
    --plugin=protoc-gen-twirp_ts=${PROTOC_GEN_TWIRP_BIN} \
    --ts_opt=client_none \
    --ts_opt=generate_dependencies \
    --twirp_ts_opt="index_file" \
    --ts_out=${OUT_DIR} \
    --twirp_ts_out=${OUT_DIR} \
    ./service.proto
