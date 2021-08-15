# Notes - small app to keep my developer notes

Available at https://notes.munhoz.dev

---

## Requirements

To run the app locally, you will need the following installed on your environment:

  * [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [docker and docker-compose](https://docs.docker.com/get-docker/)

## Cloning

Then clone the app via git:

```sh
git clone git@github.com:fnmunhoz/notes.git
```


## Development mode

To start the app in development mode, go to the repository root folder, and run:

```sh
docker-compose run --rm app npm install
docker-compose up
```

Then, open the app on the browser at the following address: http://localhost:8000

## Production mode

To start the app in production mode, go to the repository root folder, and run:

```sh
docker-compose run --rm app npm install
docker-compose run --service-ports prod
```

Then, open the app on the browser at the following address: http://localhost:9000

----

Built with [Gatsby](https://www.gatsbyjs.com) and deployed to [Netlify](https://www.netlify.com/).

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff937afd-aacf-475c-8d8c-f10bddd39c67/deploy-status)](https://app.netlify.com/sites/munhoz-notes/deploys)


