<?php

use App\Http\Livewire\Home;
use Lunar\Models\Product;

return [
    'layout' => [
        'view' => 'components/layout.blade.php',
        'tailwind_config' => 'tailwind.config.js',
        'blade_components' => [],
        'livewire_components' => [],
    ],
    'pages' => [
        'index' => [
            'view' => 'sections/home.blade.php',
            'blade_components' => [],
            'livewire_components' => [
                Home\Banner::class,
                Home\SplitHero::class,
                Home\Offers::class,
                Home\FeaturedProducts::class,
                Home\FeaturedWeek::class,
                Home\Shoes::class,
            ],
        ],
        'category' => [
            'view' => 'sections/product.blade.php',
            'model' => Product::class,
            'blade_components' => [
                'container' => 'container.blade.php',
                'breadcrumbs' => 'breadcrumbs.blade.php',
                'product.gallery' => 'product/gallery.blade.php',
                'product.info' => 'product/info.blade.php',
                'product.related-products' => 'product/related-products.blade.php',
            ],
            'livewire_components' => [],
        ],
        'product' => [
            'view' => 'sections/product.blade.php',
            'model' => Product::class,
            'blade_components' => [
                'container' => 'container.blade.php',
                'breadcrumbs' => 'breadcrumbs.blade.php',
                'product.gallery' => 'product/gallery.blade.php',
                'product.info' => 'product/info.blade.php',
                'product.related-products' => 'product/related-products.blade.php',
            ],
            'livewire_components' => [],
        ],
    ],
    'replacements' => [
        'template' => 'replaced_template',
    ],
];
