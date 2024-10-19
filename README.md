#### Make the Script Executable: Run the following command to make the script executable:

    chmod +x script.sh

#### Run the Script: You can now run the script by executing:

    ./script.sh

##### can cp menully index.html file to build in package.json file

    "build": "webpack --mode production && cp public/index.html build/index.html"

#### Create any new project with using React CLI follow this step
- copy and past 4 files from here 
 - .dockerignore
 - default.conf
 - Dockerfile
 - script.sh
- add this command into package.json file as script
 - "start:prod": "chmod +x script.sh && ./script.sh"
- Run the application with Docker
 - npm run start:prod
 - or
 - chmod +x script.sh && ./script.sh
