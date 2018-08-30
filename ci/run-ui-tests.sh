#!/bin/sh
set -ex

cd repo

/root/webdriverio-chrome/node_modules/.bin/wdio --baseUrl $BASE_URL 
