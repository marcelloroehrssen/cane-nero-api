<?php

namespace App\Controller;

use App\Response\FileResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/file", name="file")
 */
class FileController extends AbstractController
{
    /** @var FileResponse */
    protected $fileResponse;

    /**
     * FileController constructor.
     * @param FileResponse $fileResponse
     */
    public function __construct(FileResponse $fileResponse)
    {
        $this->fileResponse = $fileResponse;
    }

    /**
     * @Route("/news", methods={"POST"})
     *
     * @param Request $request
     * @param string $newsDestinationFiles
     *
     * @return JsonResponse
     */
    public function uploadNews(Request $request, string $newsDestinationFiles)
    {
        $files = $request->files->all();

        return $this->json($this->upload('news', $files, $newsDestinationFiles));
    }

    /**
     * @Route("/user", methods={"POST"})
     *
     * @param Request $request
     * @param string $userDestinationFiles
     *
     * @return JsonResponse
     */
    public function uploadUser(Request $request, string $userDestinationFiles)
    {
        $files = $request->files->all();

        return $this->json($this->upload('user', $files, $userDestinationFiles));
    }

    private function upload($resource, $files, $destination)
    {
        $path = '';

        $name = null;

        /** @var UploadedFile $file */
        foreach ($files as $file) {
            $ext = $file->getClientOriginalExtension();
            $name = sprintf('%s.%s', sha1($file->getClientOriginalName()), $ext);
            $file->move($destination, $name);
        }

        return $this->fileResponse->getResponse($name, $resource, $this->getUser() === null);
    }
}
