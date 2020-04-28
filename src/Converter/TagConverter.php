<?php

namespace App\Converter;

use App\Entity\Tag;

class TagConverter implements Converter
{
    /**
     * @param Tag $entity
     *
     * @return array
     */
    public function convert($entity)
    {
        if (null === $entity) {
            return [];
        }

        return [
            'id' => $entity->getId(),
            'label' => $entity->getName(),
            'slug' => $entity->getSlug()
        ];
    }
}
