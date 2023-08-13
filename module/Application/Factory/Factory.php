<?php 
namespace Application;
class Factory  {
    public static $instances = [];
    static public function FactoryMethod($name) {
         if(is_string($name))
         {
             include_once "Entities/".$name.".php";
             $factoryInstance = $name::getInstance();
             self::$instances[$name]["Entity"] = $factoryInstance;
             return $factoryInstance;
         }
         else {
             return self::$instances;
         }
    }
}