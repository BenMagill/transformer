#!/bin/bash
SERVICE=$1

npm run build

cd build

shopt -s extglob
cd services
rm -rf !($SERVICE)

cd ..
sed -i "s/SERVICE_NAME/${SERVICE}/" micro.js