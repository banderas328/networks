🐙 Octopus OS
docker run -d -p 80:80 antonzhavridminsk/octopusos
🛠 Manual Installation
Requirements
PHP 8.3
MariaDB 10+ or MySQL 8
Nginx or Apache
1. Install dependencies
composer install
2. Setup Database
Import dump:
database/octopus.sql
Then run:
SET GLOBAL sql_mode='';
🌐 Web Server Setup
Apache
<VirtualHost *:80>
    ServerName octopus.local
    DocumentRoot /path/to/octopus/public

    <Directory /path/to/octopus/public>
        DirectoryIndex index.php
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
Nginx
server {
    listen 80;
    server_name octopus.local;
    root /var/www/octopus/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
🧩 IFrame / External Services Setup

If you use iframe integrations:

client_max_body_size 20M;
proxy_hide_header X-Frame-Options;
add_header 'Access-Control-Allow-Origin' '*';
add_header X-Frame-Options "ALLOW-FROM octopus.local";
🍓 Raspberry Pi 5 Setup (Optional)

Enable PCIe:

sudo nano /boot/firmware/config.txt

Add:

dtparam=pciex1

Reboot device.

🧠 Concept

Octopus is not just a tool.

It’s:

Your internal digital infrastructure in one system

Instead of using:

Slack
Google Drive
Notion
Trello

You run everything locally.

📬 Feedback / Contact

If you use Octopus — reach out.
Feedback = faster evolution.

⚠️ Notes
Legacy Zend Framework compatibility layer is used
Deprecated notices are suppressed intentionally