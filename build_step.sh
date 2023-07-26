# Add the commands here
#!/bin/bash

echo "Build script"

# Install dependencies
npm install

# Build the production bundle
npm run build

# Start the server in production mode
npm run start-prod
