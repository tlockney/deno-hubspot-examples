#!/usr/bin/env bash

for file in *.ipynb; do
	jupyter-nbconvert ${file} --to script
done
