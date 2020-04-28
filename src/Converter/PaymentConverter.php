<?php

namespace App\Converter;

use App\Entity\Payment;

class PaymentConverter implements Converter
{
    /**
     * @param Payment $entity
     *
     * @return array
     */
    public function convert($entity)
    {
        return [
            'id' => $entity->getId(),
            'note' => $entity->getNote(),
            'sum' => $entity->getSum(),
            'year' => $entity->getYear(),
            'date' => $entity->getDate()->format('Y-m-d H:i:s')
        ];
    }
}