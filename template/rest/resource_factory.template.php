<?php
namespace Digital\V1\Rest\NAME_VAR;

use Zend\ServiceManager\Factory\FactoryInterface;
use Doctrine\ORM\EntityManager;
use Digital\Hydrator\CustomHydrator;

class NAME_VARResourceFactory implements FactoryInterface
{
    /**
     * {@inheritDoc}
     * @see \Zend\ServiceManager\Factory\FactoryInterface::__invoke()
     */
    public function __invoke(\Interop\Container\ContainerInterface $container, $requestedName, array $options = null)
    {
        $resource = new NAME_VARResource();

        $entityManager = $container->get(EntityManager::class);
        $resource->setEntityManager($entityManager);

        $repository = $entityManager->getRepository(NAME_VAREntity::class);
        $resource->setRepository($repository);

        /* Hydrator */
        $hydrator = new CustomHydrator($entityManager);
        $resource->setHydrator($hydrator);

        return $resource;
    }
}
