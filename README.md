# TestFullstack-Factored-Frontend
To run the project first you need to clone the repo locally and have installed and running the Docker Desktop application. After cloning the repository, open cmd or windows terminal, and go to the root folder of the project, in this case testFullstack-Factored-Backend/frontend-factored (use cd name_folder to go to the correct address). Once you are in the correct folder, type in the cmd the instruction “docker build -t frontend .” (frontend can change, it is the name you want to assign to the image). This will create an image that can be run in a container. Once the build process is finished, you must write the instruction “docker run -it --publish 7000:80 frontend" (frontend is the image name). Finally, you can access the service using localhost and port 7000, so, you can open your browser and type in the top bar “http://localhost/7000, this will take you to the project login page.

You can open your browser and type in the top bar “http://localhost/7000, this will take you to the project login page.

To use the application, you can login with the following records created by the backed service: 

email: ma.cardenasc1@example.com
password: password

email: john21@example.com
password: password

Or you can create a new record with a request to the backend service specified in the backend repository: https://github.com/miguelangel1021/TestFullstack-Factored-Backend.git

