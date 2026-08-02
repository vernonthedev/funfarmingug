<?php

namespace App\Filament\Resources\NResource\Widgets;

use App\Filament\Resources\ContactResource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;


class LatestContacts extends BaseWidget
{
    // where the table is to be placed on the dashboard page.
    protected static ?int $sort = 8;

    // make the table expand to full width
    protected int | string | array $columnSpan = 'full';
    public function table(Table $table): Table
    {
        return $table
            ->query(
                ContactResource::getEloquentQuery()
            )
            ->defaultPaginationPageOption(8)
            ->defaultSort('created_at', 'desc')
            ->columns([
                 Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('phoneNumber')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('inquireType')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ]);
    }
}
