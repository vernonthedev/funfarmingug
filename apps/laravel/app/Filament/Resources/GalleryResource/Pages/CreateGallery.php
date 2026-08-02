<?php

namespace App\Filament\Resources\GalleryResource\Pages;

use App\Filament\Resources\GalleryResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateGallery extends CreateRecord
{
    protected static string $resource = GalleryResource::class;
   //redirect to the main table after creating a textWidget
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');

    }
}
