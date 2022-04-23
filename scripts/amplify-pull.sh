#!/bin/bash
set -e
IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"profileName\":\"default\",\
\"accessKeyId\":\"$AWS_ACCESS_KEY\",\
\"secretAccessKey\":\"$AWS_SECRET_KEY\",\
\"region\":\"us-west-2\"\
}"
AMPLIFY="{\
\"projectName\":\"pano\",\
\"appId\":\"d1qqdl2jy808wi\",\
\"envName\":\"dev\",\
\"defaultEditor\":\"code\"\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

amplify pull \
--amplify $AMPLIFY \
--providers $PROVIDERS \
--yes
