<?php
namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Models\Post;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Web Content';

    protected static ?string $recordTitleAttribute = 'title';

    // limit the number of posts picked from the db at a time.
    protected static int $globalSearchResultsLimit = 20;

    public static function getGloballySearchResultDetails(Model $record): array
    {
        return [
            /**
             * FIX ME::
             * The categories can't preload from the db and are not
             * displayed during a global search even when the post
             * title appears.
             */
            'categories' => $record->categories->title,
        ];
    }

    // Eargerly load the search info from the db for later use.
    public static function getGlobalSearchEloquentQuery(): Builder
    {
        return parent::getGlobalSearchEloquentQuery()->with(['categories']);
    }

    public static function getNavigationBadge():?string
    {
        return "NEW";
    }

    public static function form(Form $form): Form
    {
        return $form
        //setup the two grid layout
            ->schema([
                Forms\Components\Section::make('Blog Creation')
                    ->schema([
                        Forms\Components\Grid::make(2)
                            ->schema([
                                Forms\Components\TextInput::make('title')
                                    ->required()
                                    ->maxLength(2048)
                                //auto generate the slug from the title
                                    ->reactive()
                                    ->afterStateUpdated(function ($record, $state, $set) {
                                        $set('slug', Str::slug($state));
                                    }),
                                Forms\Components\TextInput::make('slug')
                                    ->required()
                                    ->maxLength(2048),

                            ]),
                        Forms\Components\RichEditor::make('body')
                            ->helperText('The complete description of your blog post.')
                            ->required(),
                        Forms\Components\TextInput::make('meta_title')
                            ->helperText('This should be the similar to the title of the blog post.'),
                        Forms\Components\TextInput::make('meta_description')
                            ->helperText('The should be a shorter description of the blog post.'),
                        Forms\Components\Toggle::make('active')
                            ->helperText('Enable Or Disable Post from appearing on site.')
                            ->required(),
                        Forms\Components\DateTimePicker::make('published_at')
                            ->default(now()->format('Y-m-d H:i:s'))
                            ->required(),

                    ])->columnSpan(8),
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\FileUpload::make('thumbnail')
                            ->image()
                            ->imageEditor(),
                        Forms\Components\Select::make('categories')
                            ->preload()
                            ->multiple()
                            ->relationship('categories', 'title')
                            ->required(),
                    ])->columnSpan(4),
            ])->columns(12);

    }
    //the table layout and functionalities as well as actions.
    public static function table(Table $table): Table
    {
        return $table
            // Posts sorted by created_at in DESC
            ->query(Post::query()->latest())
            ->columns([
                Tables\Columns\ImageColumn::make('thumbnail'),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\IconColumn::make('active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('published_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'view'   => Pages\ViewPost::route('/{record}'),
            'edit'   => Pages\EditPost::route('/{record}/edit'),
        ];
    }

    // Register my widgets
    public static function getWidgets(): array
    {
        return [
            PostResource\Widgets\PostWidget::class,
        ];

    }

}
