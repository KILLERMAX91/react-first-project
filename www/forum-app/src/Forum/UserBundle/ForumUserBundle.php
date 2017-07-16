<?php

namespace Forum\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Forum\UserBundle\DependencyInjection\Compiler\OverrideServiceCompilerPass;

class ForumUserBundle extends Bundle
{
    public function build(ContainerBuilder $container)
    {
        parent::build($container);

        $container->addCompilerPass(new OverrideServiceCompilerPass());
    }

    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
