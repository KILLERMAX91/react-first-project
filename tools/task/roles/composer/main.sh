#!/bin/bash

echo "installation composer"
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer.phar
echo "alias composer='/usr/local/bin/composer.phar'" >> ~/.bashrc
