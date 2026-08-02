<?php

use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterSubscriberController;
use App\Http\Controllers\OrderController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('about-us', function () { return view('about'); })->name('about');
Route::get('contact-us', function () { return view('contact'); })->name('contact');
Route::post('contact-us' ,[ContactController::class, 'store'])->name('contact.store');
Route::get('gallery', [GalleryController::class, 'index'])->name('gallery');
Route::get('activities', function () { return view('activities'); })->name('activities');
Route::get('shop', function () { return view('shop'); })->name('shop');
Route::get('farmfood', function () { return view('farmfood'); })->name('farmfood');
Route::get('references', function () { return view('references'); })->name('references');
Route::get('frequently-asked-questions', function () { return view('faq'); })->name('faq');
Route::get('farm-lounge', function () { return view('lounge'); })->name('lounge');
Route::get('blog', [PostController::class, 'index'])->name('blog');
Route::post('qoutes', [QuoteController::class, 'store'])->name('quote.store');
Route::post('subscribe',[NewsletterSubscriberController::class, 'store'])->name('subscribe.store');
Route::post('order',[OrderController::class, 'store'])->name('order.store');
Route::get('{post:slug}', [PostController::class, 'show'])->name('blog.show');
Route::get('get-support', function () { return view('support'); })->name('support');
Route::get('privacy-policy', function () { return view('privacy'); })->name('privacy');

