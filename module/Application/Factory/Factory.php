<?php 
namespace Application;
class Factory  {
    public static $instances = [];
    static public function FactoryMethod($name) {
         if(is_string($name))
         {
             include_once __DIR__."/Entities/".$name.".php";
             $factoryInstance = $name::getInstance();
             self::$instances[$name]["Entity"] = $factoryInstance;
             return self::$instances;
         }
         else {
             return self::$instances;
         }
    }
}