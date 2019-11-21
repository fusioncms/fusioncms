<h1>FusionCMS</h1>

<p align="center">
<img src="https://app.chipperci.com/projects/d07a29d8-bc76-4be7-8ff4-c77e0ab85dc4/status/master" alt="Build Status">
<a href="https://discord.gg/bZKyvrc"><img alt="Discord" src="https://img.shields.io/discord/588839859884392487.svg?style=flat-square"></a>
</p>

**FusionCMS** is a modern, intuitive, and flexible content management system (CMS) built on the Laravel framework. **This repository contains the source code for version 6 of FusionCMS, which is under heavy active development.**

Modular at heart, FusionCMS provides the necessary launching platform to build out any type of web or mobile application. It's intuitive and easy for content editors to use on a daily basis, while still maintaining the power and flexibility for developers and designers to dig into the heart of the platform to build and design whatever comes to mind.

![preview screenshot](fusioncms.png)

## Installing
FusionCMS has a few system requirements. You will need to ensure your server meets the following requirements:

- PHP >= 7.2.0
- BCMath PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

FusionCMS utilizes Composer to manage its dependencies. So, before using FusionCMS, make sure you have Composer installed on your machine.

From the root directory of FusionCMS, run `composer install` to download and install the required dependencies from your terminal:

```
$ composer install
```

Finally, use the following command to run the FusionCMS installer from your project's root directory:

```
php artisan fusion:install
```

The installer will walk you through the steps required to configure FusionCMS. There are also a handful of useful tags at your disposal. These can help speed up the installation process.

- **--dev:** Enables debug mode, which will display detailed error pages during local development.
- **--quick:** Utilizes the default values for the installation process and skips the installation wizard.
- **--host[=HOST]:** Assign the database host to be used during installation. Can be used in combination with the `--quick` flag.
- **--database[=DATABASE]:** Assign the database name to be used during installation. Can be used in combination with the `--quick` flag.
- **--username[=USERNAME]:** Assign the database username to be used during installation. Can be used in combination with the `--quick` flag.
- **--password[=PASSWORD]:** Assign the database password to be used during installation. Can be used in combination with the `--quick` flag.
- **--charset[=CHARSET]:** Assign the database charset to be used during installation. Can be used in combination with the `--quick` flag.
- **--collation[=COLLATION]:** Assign the database collation to be used during installation. Can be used in combination with the `--quick` flag.

## Contributing
Thank you for considering contributing to FusionCMS! The contribution guide can be found in the [CONTRIBUTING.md](CONTRIBUTING.md) file here in the repository.

## Security Vulnerabilities
If you discover a security Vulnerability within FusionCMS, please send a message to **Kai** on our Discord server. All security vulnerabilities will be promptly addressed.

## License
For a quick summary, FusionCMS is **not open source** but rather _source-available_ software. We require a paid license if you intend on using FusionCMS for commercial purposes. You are free to modify and alter the CMS as needed as long as it does not impede on our licensing or means of enforcing the licensing. For the complete license, please refer to the [LICENSE.md](LICENSE.md) file here in the repository.