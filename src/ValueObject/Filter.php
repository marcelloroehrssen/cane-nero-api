<?php

namespace App\ValueObject;

use App\Entity\News;
use App\Entity\Tag;
use App\Entity\User;

class Filter
{
    /** @var News|null  */
    public $news;

    /** @var \DateTime|null  */
    public $dateMin;

    /** @var \DateTime|null  */
    public $dateMax;

    /** @var User|null  */
    public $user;

    /** @var Tag[]|array  */
    public $tags = [];

    /**
     * Filter constructor.
     *
     * @param News $news
     * @param \DateTime $dateMin
     * @param \DateTime $dateMax
     * @param User|null $user
     * @param Tag[] $tags
     */
    public function __construct(?News $news, ?\DateTime $dateMin, ?\DateTime $dateMax, ?User $user, array $tags = [])
    {
        $this->news = $news;
        $this->dateMin = $dateMin;
        $this->dateMax = $dateMax;
        $this->user = $user;
        $this->tags = $tags;
    }
}
