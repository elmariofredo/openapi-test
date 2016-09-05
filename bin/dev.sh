#!/bin/bash

winpty docker run -it -p8080:8080 -v /$PWD://app/dev -w //app/dev openapi-test
