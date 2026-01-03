FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    zip \
    gd

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# ⬇⬇⬇ ВАЖНО ⬇⬇⬇
COPY docker/php/php.ini /usr/local/etc/php/php.ini

WORKDIR /var/www/html
