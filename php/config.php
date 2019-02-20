<?php

use Medoo\Medoo;

// Initialize
$database = new Medoo([
    'database_type' => 'mysql',
    'database_name' => 'test-login',
    'server' => 'localhost',
    'username' => 'root',
    'password' => 'root',
    'charset' => 'utf8'
]);

define('NAME_TABLE', 'user');
define('SECRET_KEY', '5f2b5cdbe5194f10b3241568fe4e2b24');

?>
