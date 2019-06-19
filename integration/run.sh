#!/bin/bash

set -e

##define inputs
COMMAND_STACK=$1
QUERY_STACK=$1
##define variables
MACOS="Mac"

POSTURL=`aws cloudformation describe-stacks \
            --stack-name $COMMAND_STACK \
            --query "Stacks[0].[Outputs[? starts_with(OutputKey, 'ServiceEndpoint')]][0][*].{OutputValue:OutputValue}" \
            --output text`

echo $POSTURL

LENGTH=$(curl -s -o /dev/null -w '%{http_code}' $POSTURL/getcustomers | jq length)

curl -s -o /dev/null -w '%{http_code}' --data `{"name":"somename$RANDOM"}` $POSTURL/createcustomer
curl -s -o /dev/null -w '%{http_code}' --data `{"name":"somename$RANDOM"}` $POSTURL/createcustomer


GETURL=`aws cloudformation describe-stacks \
            --stack-name $QUERY_STACK \
            --query "Stacks[0].[Outputs[? starts_with(OutputKey, 'ServiceEndpoint')]][0][*].{OutputValue:OutputValue}" \
            --output text`

NEW_LENGTH=$(curl -s -o /dev/null -w '%{http_code}' $GETURL/getcustomers | jq length)

if [ "$(($LENGTH + 2))" -ne "$NEW_LENGTH" ]; then
    echo "Got $NEW_LENGHT when expected 2 + $LENGTH"
    exit 1
fi

echo "Tests Passed!"