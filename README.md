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


## Starting

To start the app, make sure you are inside the repository root folder.

```sh
docker-compose run --rm app npm install
docker-compose up
```

After that you should be able to open the app on the browser at the following address: http://localhost:8000


----

Built with [Gatsby](https://www.gatsbyjs.com) and deployed to [Netlify](https://www.netlify.com/).

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff937afd-aacf-475c-8d8c-f10bddd39c67/deploy-status)](https://app.netlify.com/sites/munhoz-notes/deploys)


