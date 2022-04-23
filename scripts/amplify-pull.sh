#!/bin/bash
set -e
IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\
\"profileName\":\"default\",\
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
