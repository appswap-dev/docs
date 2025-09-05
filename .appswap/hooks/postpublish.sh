#!/bin/bash
# AppSwap post-publish hook
# This script runs after successful publishing

echo "🎉 Package published successfully!"
echo "Version: $APPSWAP_VERSION"
echo "Destinations: $APPSWAP_DESTINATIONS"

# Optional: Send notification to Slack, Discord, etc.
# curl -X POST -H 'Content-type: application/json' \
#      --data '{"text":"📦 New release: $APPSWAP_VERSION"}' \
#      $SLACK_WEBHOOK_URL
