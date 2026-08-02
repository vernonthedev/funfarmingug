<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        'slug',
        'thumbnail',
        'body',
        'active',
        'published_at',
        'user_id',
        'meta_title',
        'meta_description',
    ];

    //change the publised_at type from strings to datetime format
    //for easier display and working with
    protected $casts = [
        'published_at' => 'datetime',
    ];

    //we wanna relate the user model to the post
    //so that post always belongs to the created user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    //so a post can have very many categories
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
    //a function to trim the body into a smaller text for the shortBody content
    public function shortBody(): string
    {
        return Str::words(strip_tags($this->body), 30);
    }

    //format the date to human readable format
    public function getformattedDate()
    {
        return $this->published_at->format('F jS Y');
    }
}
