<?php

namespace Digital\V1\Rest\NAME_VAR;

use Doctrine\ORM\EntityManager;
use DoctrineModule\Stdlib\Hydrator\DoctrineObject;
use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\FactoryInterface;
use Digital\Hydrator\Strategy\DateTimeFormatterStrategy;

class NAME_VARHydratorFactory implements FactoryInterface
{
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        /** @var ClassMethods $hydrator */
        $hydrator = new DoctrineObject($container->get(EntityManager::class), MessageEntity::class);

        return $hydrator;
    }
}
