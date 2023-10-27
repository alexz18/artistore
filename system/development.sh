#!/bin/sh

psql -U postgres -c "CREATE USER ntest1 WITH CREATEDB ENCRYPTED PASSWORD 'tC-8rF1J0h'"
psql -U postgres -c 'CREATE DATABASE ntest1 WITH OWNER ntest1'
