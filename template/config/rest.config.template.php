<?php

return [
    'zf-versioning' => [
        'uri' => [
            'digital.rest.NAME_LOWER_VAR',
        ],
    ],
    'zf-rest' => [
        'Digital\\V1\\Rest\\NAME_VAR\\Controller' => [
            'listener' => \Digital\V1\Rest\NAME_VAR\NAME_VARResource::class,
            'route_name' => 'digital.rest.NAME_LOWER_VAR',
            'route_identifier_name' => 'NAME_LOWER_VAR_id',
            'collection_name' => 'NAME_LOWER_VAR',
            'entity_http_methods' => [
                0 => 'PUT',
                1 => 'DELETE',
                2 => 'POST',
                3 => 'GET',
                4 => 'PATCH'
            ],
            'collection_http_methods' => [
                0 => 'GET',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 50,
            'page_size_param' => null,
            'entity_class' => \Digital\V1\Rest\NAME_VAR\NAME_VAREntity::class,
            'service_name' => 'NAME_VAR',
        ],
    ],
    'zf-content-negotiation' => [
        'controllers' => [
            'Digital\\V1\\Rest\\NAME_VAR\\Controller' => 'HalJson',
        ],
        'accept_whitelist' => [
            'Digital\\V1\\Rest\\NAME_VAR\\Controller' => [
                0 => 'application/vnd.digital.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
        ],
        'content_type_whitelist' => [
            'Digital\\V1\\Rest\\NAME_VAR\\Controller' => [
                0 => 'application/vnd.digital.v1+json',
                1 => 'application/json',
            ],
        ],
    ],
    'zf-hal' => [
        'metadata_map' => [
            \Digital\V1\Rest\NAME_VAR\NAME_VAREntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'digital.rest.NAME_LOWER_VAR',
                'route_identifier_name' => 'NAME_LOWER_VAR_id',
                'hydrator' => 'digital.hydrator.NAME_LOWER_VAR',
                'max_depth' => 5
            ],
        ],
    ],
];
