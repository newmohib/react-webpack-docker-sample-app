#!/bin/bash

# Define the image name
IMAGE_NAME="react-pdf-generate"

# Build the Docker image
echo "Building the Docker image..."

docker build -t $IMAGE_NAME .

# Check if the build was successful
if [ $? -eq 0 ]; then
    echo "Image built successfully. Running the container..."

    # Run the Docker container
    docker run -p 3000:80 $IMAGE_NAME
else
    echo "Failed to build the Docker image."
    exit 1
fi
