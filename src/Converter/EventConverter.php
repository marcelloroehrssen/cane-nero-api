<?php

namespace App\Converter;

class EventConverter implements Converter
{
    /** @var UserConverter */
    protected $userConverter;

    /** @var ChronicleConverter */
    protected $chronicleConverter;

    /**
     * EventConverter constructor.
     * @param UserConverter $userConverter
     * @param ChronicleConverter $chronicleConverter
     */
    public function __construct(UserConverter $userConverter, ChronicleConverter $chronicleConverter)
    {
        $this->userConverter = $userConverter;
        $this->chronicleConverter = $chronicleConverter;
    }

    public function convert($entity)
    {
        if (null === $entity) {
            return [];
        }

        return [
            'id' => $entity->getId(),
            'name' => $entity->getName(),
            'chronicle' => $this->chronicleConverter->convert($entity->getChronicle()),
            'location' => $entity->getLocation(),
            'creator' => $this->userConverter->convert($entity->getCreator()),
            'date' => $entity->getDate(),
        ];
    }
}
