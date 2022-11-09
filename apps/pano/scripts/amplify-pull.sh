#!/bin/bash
set -e
IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"profileName\":\"default\",\
\"accessKeyId\":\"$AWS_ACCESS_KEY\",\
\"secretAccessKey\":\"$AWS_SECRET_KEY\",\
\"region\":\"eu-central-1\"\
}"
AMPLIFY="{\
\"projectName\":\"pano\",\
\"appId\":\"d29c6nmgivvy2w\",\
\"envName\":\"prod\",\
\"defaultEditor\":\"code\"\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

amplify pull \
--amplify $AMPLIFY \
--providers $PROVIDERS \
--yes
