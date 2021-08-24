# Node.js Application for Github Actions

This is a simple application made in Node.js to serve as a template for Github Actions.

## About this Github Actions pipeline and Node.js application

The pipeline runs Node.js versions tests to execute this application and HTTP endpoint response tests on the ```develop``` branch.

On the ```main``` branch, it compiles, packages, and sends the artifact to the docker registry for storage, and the generated artifact is a standard OCI container with the Node.js application ready to be deployed.

The app runs on ```localhost:3100```, and has two endpoints, one for the default Node.js metrics instrumented for Prometheus at ```localhost:3100/metrics``` and one for a health check at ```localhost:3100/health```. 

The application log is being sent to the console, directly to standard output.

## To build, package and run locally.

### The first step is to clone the repository and access it
```bash
$ git clone git@github.com:kleber-costa/nodeapp-github-actions.git
$ cd nodeapp_github_actions
```

### Install application dependencies for tests
```bash
$ npm install --save-dev supertest tape
```

### Install application dependencies for run
```bash
$ npm install --save express prom-client morgan
```

### To run the application in the command line:
```bash
$ npm start
```
 
### To run the endpoints test make the following call:
```bash
$ npm test
```

### To build and package, creating an docker image, run:
```bash
$ docker build -t nodeapp .
```

### To run the container locally:
```bash
$ docker run -d --name nodeapp -p 3100:3100 nodeapp
```
## Using Github Actions

### Get this project

To use Github action, you must fork the project, this is the first step.

### Create Docker Hub account with container registry and access token

Once you have your fork go to the [Docker Hub](https://hub.docker.com) and create a repository, after that configure an access token, beware, free accounts on the docker hub can only have one token.

See this official documentation on how to [create a container registry](https://docs.docker.com/docker-hub) and see this official documentation on how to [create a access token](https://docs.docker.com/docker-hub/access-tokens) in Docker Hub.

### Configure Github repository secrets

Enter your forked repository settings and configure this secrets:

- DOCKERHUB_USER
- DOCKERHUB_TOKEN

```DOCKERHUB_USER``` receives as a value your username in the docker hub.
```DOCKERHUB_TOKEN``` receives as value the access token generated in the docker hub.

See this official documentation on how to [configure a Github repository secret](https://docs.github.com/en/actions/reference/encrypted-secrets), if you have any questions about how to do.

### Running Github Actions over develop branch

#### Node.js test application

Make any changes that don't interrupt the app or test flow, make it in the development branch, and submit the code.
Follow Github Actions and check that the tests will run on the nodeapp-test.yml and node-version.yml files that are inside .github/workflows

### Running Github Actions over main branch

#### Build, packages, and sends the artifact to the docker registry

The first step is changing the repository reference line on the docker-build.yml, you must configure your docker repository on this last line of file.

Make any changes that don't interrupt the app or test flow, make it in the development branch, and submit the code.
Follow Github Actions and check that the workload will run on the docker-build.yml file that are inside .github/workflows.
