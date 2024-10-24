<?php
/*
* File: ComposerInfo.php
* Category: -
* Author: M.Goldenbaum
* Created: 13.10.20 01:16
* Updated: -
*
* Description:
*  -
*/

namespace Webklex\ComposerInfo;

/**
 * Class ComposerInfo
 *
 * @package Webklex\ComposerInfo
 */
class ComposerInfo {

    /**
     * All library config
     *
     * @var Config $config
     */
    public static $config;

    /** @var array $packages */
    public static $packages = [];

    /**
     * ComposerInfo constructor.
     * @param array|string $config
     */
    public function __construct($config = []) {
        $this->setConfig($config);
        $this->load(self::$config->get("location"));
    }

    /**
     * Get a specific package
     * @param string   $name
     *
     * @return mixed|null
     */
    public static function getPackage($name) {
        if (isset(self::$packages[$name])) {
            return self::$packages[$name];
        }
        return null;
    }

    /**
     * Get a specific package version
     * @param string   $name
     *
     * @return mixed|null
     */
    public static function getPackageVersion($name) {
        if (($package = self::getPackage($name)) !== null) {
            if (isset($package["version"])) {
                return $package["version"];
            }
        }
        return null;
    }


    /**
     * @param $location
     */
    public function load($location) {
        if (file_exists($location)) {
            $content = file_get_contents($location);
            $data = json_decode($content, true);

            if (isset($data["packages"])) {
                foreach($data["packages"] as $package) {
                    if (isset($package["name"])) {
                        self::$packages[$package["name"]] = $package;
                    }
                }
            }
        }
    }

    /**
     * @param array|string $config
     *
     * @return $this
     */
    public function setConfig($config) {
        self::$config = new Config($config);
        return $this;
    }
}