Docker Driven Development
=========================

## Build Image

`docker build -t openapi-test .`

## Run Image

WIN: `winpty docker run -it -p8080:8080 openapi-test`


## Run Development

WIN: `winpty docker run -it -p8080:8080 -v /$PWD://app/dev -w /app/dev openapi-test`



npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.14
npm info ok
