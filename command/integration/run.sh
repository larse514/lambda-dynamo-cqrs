#!/bin/bash

set -e

##define inputs
STACK=$1
##define variables
MACOS="Mac"

NEWURL=`aws cloudformation describe-stacks \
            --stack-name $STACK \
            --query "Stacks[0].[Outputs[? starts_with(OutputKey, 'ServiceEndpoint')]][0][*].{OutputValue:OutputValue}" \
            --output text`

echo $NEWURL

STATUS=$(curl -s -o /dev/null -w '%{http_code}' --data '{"name":"somename"}' $NEWURL/create)

echo "${STATUS}"
if [ $STATUS != "200" ]; then
    echo "Incorrect status code ${STATUS} from api"
    exit 1
fi

echo "Tests Passed!"