<?php

namespace App\Converter;

use App\Entity\Chronicle;

class ChronicleConverter implements Converter
{
    /**
     * @param Chronicle $entity
     * @return array
     */
    public function convert($entity)
    {
        if (null === $entity) {
            return [];
        }

        return [
            'id' => $entity->getId(),
            'name' => $entity->getName(),
            'game' => $entity->getGame(),
            'logo' => $entity->getLogo(),
            'url' => $entity->getUrl(),
            'description' => $entity->getDescription()
        ];
    }
}
