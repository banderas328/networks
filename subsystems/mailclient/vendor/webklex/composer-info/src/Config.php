<?php
/*
* File: Config.php
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
 * Class Config
 *
 * @package Webklex\ComposerInfo
 */
class Config {

    /**
     * All library config
     *
     * @var array $config
     */
    public static $config = [];


    /**
     * Config constructor.
     * @param array|string $config
     */
    public function __construct($config = []) {
        $this->setConfig($config);
    }

    /**
     * Get a dotted config parameter
     * @param string $key
     * @param null   $default
     *
     * @return mixed|null
     */
    public static function get($key, $default = null) {
        $parts = explode('.', $key);
        $value = null;
        foreach($parts as $part) {
            if($value === null) {
                if(isset(self::$config[$part])) {
                    $value = self::$config[$part];
                }else{
                    break;
                }
            }else{
                if(isset($value[$part])) {
                    $value = $value[$part];
                }else{
                    break;
                }
            }
        }

        return $value === null ? $default : $value;
    }


    /**
     * Merge the vendor settings with the local config
     * @param array|string $config
     *
     * @return $this
     */
    public function setConfig($config) {

        if(is_array($config) === false) {
            $config = require $config;
        }

        $vendor_config = require __DIR__.'/config/composer-info.php';
        self::$config = $this->array_merge_recursive_distinct($vendor_config, $config);

        return $this;
    }

    /**
     * Marge arrays recursively and distinct
     *
     * Merges any number of arrays / parameters recursively, replacing
     * entries with string keys with values from latter arrays.
     * If the entry or the next value to be assigned is an array, then it
     * automatically treats both arguments as an array.
     * Numeric entries are appended, not replaced, but only if they are
     * unique
     *
     * @param  array $array1 Initial array to merge.
     * @param  array ...     Variable list of arrays to recursively merge.
     *
     * @return array|mixed
     *
     * @link   http://www.php.net/manual/en/function.array-merge-recursive.php#96201
     * @author Mark Roduner <mark.roduner@gmail.com>
     */
    private function array_merge_recursive_distinct() {

        $arrays = func_get_args();
        $base = array_shift($arrays);

        if(!is_array($base)) $base = empty($base) ? array() : array($base);

        foreach($arrays as $append) {

            if(!is_array($append)) $append = array($append);

            foreach($append as $key => $value) {

                if(!array_key_exists($key, $base) and !is_numeric($key)) {
                    $base[$key] = $append[$key];
                    continue;
                }

                if(is_array($value) or is_array($base[$key])) {
                    $base[$key] = $this->array_merge_recursive_distinct($base[$key], $append[$key]);
                } else if(is_numeric($key)) {
                    if(!in_array($value, $base)) $base[] = $value;
                } else {
                    $base[$key] = $value;
                }

            }

        }

        return $base;
    }
}