Introduction
------------
Core of octopus project. Cloud os. 

Existing features :
        Task Manager,
        Hard Drive,
        Network Connections,
        Messeger,
        Blogs, News of company,
        Settings,
        Adding to friends module,
        Search module,
        IFrame module (allow to connect external web sirvices in ifame window).

Fully independet from web.

Installation
------------

run command "composer install" in main directory

Requires php8.3 , maria db 10 or mysql 8. nginx or apache

### Database
use database/octopus.sql like Maria DB or Mysql 8 database dump


run command  "set global sql_mode='';" inside database


### Apache Setup

    <VirtualHost *:80>
        ServerName zf2-tutorial.localhost
        DocumentRoot /path/to/zf2-tutorial/public
        SetEnv APPLICATION_ENV "development"
        <Directory /path/to/zf2-tutorial/public>
            DirectoryIndex index.php
            AllowOverride All
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>

    
### Nginx Setup

server {
    listen 100;
    server_name server_domain_or_IP;
    root /var/www/html/networks/networks/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
###
For Frames
client_max_body_size 20M;
server_name  octopus.local;
proxy_hide_header X-Frame-Options;
---
Nginx subsystems ifmare settings
client_max_body_size 20M;
server_name mail.octopus.local;
proxy_hide_header X-Frame-Options;
add_header 'Access-Control-Allow-Origin' '*';
add_header X-Frame-Options "ALLOW-FROM octopus.local";

---


