<?php

namespace App\Response;

use App\Converter\PaymentConverter;

class PaymentResponse
{
    /** @var PaymentConverter */
    protected $paymentConverter;

    /**
     * PaymentResponse constructor.
     * @param PaymentConverter $paymentConverter
     */
    public function __construct(PaymentConverter $paymentConverter)
    {
        $this->paymentConverter = $paymentConverter;
    }

    public function getResponse($payments,  $isLogged = 0, $filters = [], $errors = [])
    {
        return [
            'isLogged' => $isLogged,
            'payments' => array_map(function ($payment) {
                return $this->paymentConverter->convert($payment);
            }, $payments),
            'filter' => $filters,
            'errors' => $errors,
        ];
    }
}