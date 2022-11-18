#!/bin/bash

bash nvm use --lts
code .
npm install
wait
npm run serve

