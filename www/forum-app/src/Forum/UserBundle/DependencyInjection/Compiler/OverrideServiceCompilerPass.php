<?php
namespace Forum\UserBundle\DependencyInjection\Compiler;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Alias;
class OverrideServiceCompilerPass implements CompilerPassInterface
{

    /**
     * You can modify the container here before it is dumped to PHP code.
     *
     * @param ContainerBuilder $container
     */
    public function process(ContainerBuilder $container)
    {

        $alias = new Alias('fos_user.user_provider.username',false);

        $container->setAlias('fos_oauth_server.user_provider', $alias, false);

    }
}