#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR/.."
OUTPUT_DIR="$PROJECT_DIR/output"
TF_DIR="$PROJECT_DIR/tf"

terraform init \
    -backend-config "key=dynamo/base.tfstate" \
    -backend-config "bucket=$S3_BUCKET_NAME" \
    -backend-config "region=$AWS_REGION" \
    -reconfigure \
    -input=false \
    "$TF_DIR"