**Full Stack Test**

This repository contains three projects, two APIs/MicroServices and one frontend project to consume from them.

The purpose is to display two carousels of recommended products using only HTML, CSS and JavaScript on the frontend. The list of recommended products, comes from a given endpoint and returns only the ids of the products. The Recommendation API them get these product ids and get details of each product from the Catalog API.

The two APIs were made with Nodejs and framework Express.

Redis was used to improve performance by storing in-memory data of the most recent requests.

MongoDB was the persistence database used, due to the fact that the details of the products are available by a big json, MongoDB makes it easy to store it, and the catalog api has only one endpoint where it's given a product id and returns the details of it, and relational database was not really necessary, at least at the context of the project.

Each project has one Dockerfile defining its container with environment variables. One docker-compose.yml on the root directory of the repository runs all necessary containers, including the APIs, the frontend, Redis and MongoDB.

On the docker-compose.yml file  your going to notice that there are two Redis containers, one is used by Catalog API and the other by Recommendation API.

To run the project, you need to have docker and docker-compose on your machine:

```
  sudo apt-get install docker.io
  sudo apt-get install docker-compose
```

After verifying that you have these two, you only need to run the command below:

```
sudo docker-compose up
```

**PS: If you don't use 'sudo', docker-compose errors and doesn't start the services**
