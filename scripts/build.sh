#!/bin/sh
rm -rf docs/*
touch docs/.nojekyll
yarn story:build
mv .histoire/dist/* docs/
