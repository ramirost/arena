#!/bin/bash
set -euo pipefail

cd /opt/arena/
node write_config.js
echo "Running with config: "
cat /opt/arena/src/server/config/index.json
exec yarn start