<?php
class Translator
{

    private static $instances = [];

    protected function __construct()
    {
        session_start();
        if(isset($_SESSION['user'])){
            $user_session = $_SESSION['user'];
            $lang = $user_session["lang"];
            
            if ($lang) {
                $transtator = include $_SERVER["DOCUMENT_ROOT"] . '/../config/language/lang.array.' . $lang . ".php";
                $GLOBALS["HELPERS"]["TRANSLATOR"] = $transtator;
                return $transtator;
            }
        }
        else {
            
            $lang = "en"; // default lang
            
            if ($lang) {
                $transtator = include $_SERVER["DOCUMENT_ROOT"] . '/../config/language/lang.array.' . $lang . ".php";
                $GLOBALS["HELPERS"]["TRANSLATOR"] = $transtator;
                return $transtator;
            }
            
        }

        return;
    }

    protected function __clone()
    {}

    public function __wakeup()
    {
        throw new \Exception("Cannot unserialize a singleton.");
    }

    public static function getInstance(): Translator
    {
        $cls = static::class;
        if (! isset(self::$instances[$cls])) {
            self::$instances[$cls] = new static();
        }
        
        return self::$instances[$cls];
    }
}






