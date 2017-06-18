#!/bin/bash

debconf-set-selections <<< 'mysql-server mysql-server/root_password password docker'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password docker'
install-apt mysql-server
install-apt mysql-client 
