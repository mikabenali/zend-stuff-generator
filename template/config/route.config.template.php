<?php
return [
    'router' => [
        'routes' => [
            'digital.rest.NAME_LOWER_VAR' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/digital/NAME_LOWER_VAR[/:NAME_LOWER_VAR_id]',
                    'defaults' => [
                        'controller' => 'Digital\\V1\\Rest\\NAME_VAR\\Controller',
                    ],
                ],
            ],
        ]
    ]
];
