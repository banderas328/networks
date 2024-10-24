# Composer Info

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Software License][ico-license]][link-license]
[![Build Status][ico-build]][link-scrutinizer] 
[![Total Downloads][ico-downloads]][link-downloads]
[![Hits][ico-hits]][link-hits]


## Description
Access the current details of your composer.lock file.


## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
    - [Basic usage example](#basic-usage-example)
- [Support](#support)
- [Documentation](#documentation)
  - [ComposerInfo::class](#composerinfoclass)
- [Security](#security)
- [Credits](#credits)
- [License](#license)


## Installation
1.) Now install the `composer-info` package by running the following command:
```shell script
composer require webklex/composer-info
```

## Configuration

Detailed [config/composer-info.php](src/config/composer-info.php) configuration:
 - `location` &mdash; used default composer.lock location

## Usage
#### Basic usage example
This is a basic example, which will echo the current version of `webklex/composer-info` and dump the
all available package information.

```php
use Webklex\ComposerInfo\ComposerInfo;

new ComposerInfo();

var_dump(ComposerInfo::getPackage("webklex/composer-info"));
echo ComposerInfo::getPackageVersion("webklex/composer-info");
```

## Support
If you encounter any problems or if you find a bug, please don't hesitate to create a new [issue](https://github.com/Webklex/composer-info/issues).
However please be aware that it might take some time to get an answer.
Off topic, rude or abusive issues will be deleted without any notice.

If you need **immediate** or **commercial** support, feel free to send me a mail at github@webklex.com. 


##### A little notice
If you write source code in your issue, please consider to format it correctly. This makes it so much nicer to read 
and people are more likely to comment and help :)

&#96;&#96;&#96; php

echo 'your php code...';

&#96;&#96;&#96;

will turn into:
```php
echo 'your php code...';
```


### Features & pull requests
Everyone can contribute to this project. Every pull request will be considered but it can also happen to be declined. 
To prevent unnecessary work, please consider to create a [feature issue](https://github.com/Webklex/composer-info/issues/new?template=feature_request.md) 
first, if you're planning to do bigger changes. Of course you can also create a new [feature issue](https://github.com/Webklex/composer-info/issues/new?template=feature_request.md)
if you're just wishing a feature ;)


## Documentation
### [ComposerInfo::class](src/ComposerInfo.php)
| Method                    | Arguments            | Return            | Description                                                                                         |
| ------------------------- | -------------------- | :---------------: | --------------------------------------------------------------------------------------------------- |
| setConfig                 | array|string $config | self              | Set the ComposerInfo configuration. Take a look at `config/composer-info.php` for more inspiration. |
| getPackage                | string $name         | array             | Get all available information for a given package name                                              |
| getPackageVersion         | string $name         | string            | Get the version for a given package name                                                            |
| load                      | string $location     | string            | Load a specific composer.lock file                                                                  |

## Change log
Please see [CHANGELOG][link-changelog] for more information what has changed recently.


## Security
If you discover any security related issues, please email github@webklex.com instead of using the issue tracker.


## Credits
- [Webklex][link-author]
- [All Contributors][link-contributors]


## License
The MIT License (MIT). Please see [License File][link-license] for more information.


[ico-version]: https://img.shields.io/packagist/v/Webklex/composer-info.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/Webklex/composer-info/master.svg?style=flat-square
[ico-scrutinizer]: https://img.shields.io/scrutinizer/coverage/g/Webklex/composer-info.svg?style=flat-square
[ico-code-quality]: https://img.shields.io/scrutinizer/g/Webklex/composer-info.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/Webklex/composer-info.svg?style=flat-square
[ico-build]: https://img.shields.io/scrutinizer/build/g/Webklex/composer-info/master?style=flat-square
[ico-quality]: https://img.shields.io/scrutinizer/quality/g/Webklex/composer-info/master?style=flat-square
[ico-hits]: https://hits.webklex.com/svg/webklex/composer-info

[link-packagist]: https://packagist.org/packages/Webklex/composer-info
[link-travis]: https://travis-ci.org/Webklex/composer-info
[link-scrutinizer]: https://scrutinizer-ci.com/g/Webklex/composer-info/code-structure
[link-code-quality]: https://scrutinizer-ci.com/g/Webklex/composer-info
[link-downloads]: https://packagist.org/packages/Webklex/composer-info
[link-author]: https://github.com/webklex
[link-contributors]: https://github.com/Webklex/composer-info/graphs/contributors
[link-license]: https://github.com/Webklex/composer-info/blob/master/LICENSE
[link-changelog]: https://github.com/Webklex/composer-info/blob/master/CHANGELOG.md
[link-hits]: https://hits.webklex.com
