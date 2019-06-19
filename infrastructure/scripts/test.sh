#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

sudo gem install bundler
sudo bundle install
sudo bundle exec rake spec
