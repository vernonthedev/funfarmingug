<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TextWidget extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'image',
        'title',
        'content',
        'active'
    ];


    //function to get the title of the TextWidget
    public static function getTitle(string $key): string
    {
        // Cache the content for later use so that we don't over request the data from the database every single time
        $widget = \Illuminate\Support\Facades\Cache::remember('text-widget-'.$key, now()->addMinutes(60), function() use ($key) {
            return TextWidget::query()
                    ->where('key', '=', $key)
                    ->where('active', '=', 1)
                    ->first();
        });

        if ($widget) {
            return $widget->title;
        }
        return '';
    }

    //function to get the content of the TextWidget
    public static function getContent(string $key): string
    {
        // Cache the content for later use so that we don't over request the data from the database every single time
        $widget = \Illuminate\Support\Facades\Cache::remember('text-widget-'.$key, now()->addMinutes(60), function() use ($key) {
            return TextWidget::query()
                    ->where('key', '=', $key)
                    ->where('active', '=', 1)
                    ->first();
        });

        if ($widget) {
            return $widget->content;
        }
        return '';
    }

    //function to get the image of the TextWidget that is not put in the cache because the image is stored in the database and is always updated
    public static function getImage(string $key): ?string
    {
        // Query the database directly for the widget
        $widget = TextWidget::query()
            ->where('key', '=', $key)
            ->where('active', '=', 1)
            ->first();
    
        // Check if the widget exists and has an image
        if ($widget && $widget->image) {
            return asset('storage/' . $widget->image);
        }
    
        // Return default image if no image is found or widget does not exist
        return asset("images/about/design.jpg");
    }
}
