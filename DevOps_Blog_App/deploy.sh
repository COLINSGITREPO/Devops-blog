#!/bin/bash

# Replace with your actual application name
APP_NAME="SimpleApplication"

# Stop the application if it's already running
#!/bin/bash

# Replace with your actual application name
APP_NAME="SimpleApplication"

# Stop the application if it's already running
if [ -f /var/run/${APP_NAME}.pid ]; then
    sudo kill -TERM `sudo cat /var/run/${APP_NAME}.pid` || true
fi

# Remove previous build artifacts
sudo rm -rf /var/www/${APP_NAME}

# Clone the latest version of the code from Git
git clone https://github.com/COLINSGITREPO/Devops-blog.git /var/www/${APP_NAME}

# Change to the repository directory
cd /var/www/${APP_NAME}

# Install any required dependencies
sudo npm install
echo $PRIVATE_KEY > CA1.pem
echo $SERVER > server.crt
# Build the application
sudo npm run build

# Start the application
sudo npm start &
echo $! | sudo tee /var/run/${APP_NAME}.pid >/dev/null 2>&1