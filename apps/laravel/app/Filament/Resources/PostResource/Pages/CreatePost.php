<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePost extends CreateRecord
{
    protected static string $resource = PostResource::class;

    //added so that am able to customize the form data before i save it
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();

        return $data;
    }

    //redirect to the main table after creating a textWidget
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');

    }

    protected function getHeaderWidgets(): array
    {
        return [
            PostResource\Widgets\PostWidget::class,
        ];
    }
}
