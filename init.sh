#!/bin/bash


truffle compile

#truffle network --clean
truffle migrate


#sed -i -e   's/0x2E645469f354BB4F5c8a05B3b30A929361cf77eC/<CONTRACT_ADDRESS>/g'  subgraph.yaml


yarn && yarn codegen

yarn create-local

yarn deploy-local
