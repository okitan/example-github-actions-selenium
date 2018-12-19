#!/bin/bash

set -eux

cd $APP_ENV || exti

npm test
