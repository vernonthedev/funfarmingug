<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Post;
use App\Models\Contact;
use Filament\Support\Enums\IconPosition;

class PostsWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Number of Blog Posts', value: Post::count())
                ->description('All blog posts made since website launch')
                ->descriptionIcon('heroicon-o-user-group', IconPosition::Before)
                ->chart([1,3,5,10,20,40,70,90])
                ->color(color: 'info'),
            Stat::make('Contacts Received', value: Contact::count())
                ->description('All Customers that have contacted us')
                ->descriptionIcon('heroicon-o-users', IconPosition::Before)
                ->chart([20,3,5,10,40,70,20])
                ->color(color: 'success'),
            Stat::make('Email Subscribers', value: Post::count())
                ->description('All Customers that have subscribed to our email listings')
                ->descriptionIcon('heroicon-o-envelope', IconPosition::Before)
                ->chart([1,5,10,20,2,70,90])
                ->color(color: 'warning'),
        ];
    }
}
