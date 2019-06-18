#!/usr/bin/env bash

set -euo pipefail

ENV=$1

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR/.."
TF_DIR="$PROJECT_DIR/tf"


"$SCRIPT_DIR/init.sh"

terraform apply -auto-approve -input=false -var-file="$PROJECT_DIR/environments/$ENV.tfvars" "$TF_DIR"