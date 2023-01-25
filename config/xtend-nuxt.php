<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Directory for client-side application
    |--------------------------------------------------------------------------
    |
    | Here you may specify the client directory
    | by default this has been set for you to "client" in the root of your project
    |
    */

    'directory' => 'client',

    /*
    |--------------------------------------------------------------------------
    | Generator Options
    |--------------------------------------------------------------------------
    |
    | Here you may specify the options for the generator
    |
    */

    'generator' => [
        'ssr' => true,
        'typescript' => [
            // Generates Typescript interfaces from Laravel Models if empty includes all models
            'models' => [
                // 'App\Models\User',
            ],
        ],
        'api_routes' => [
            // Specify your API routes here
            'pages' => [
                // 'api/v1/users',
            ],
        ],
    ],
];
