# Laravel package for translations on frontend

## Installation

You can install the package via composer:

```bash
composer require laravelway/jstranslate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="jstranslate-config"
```

This is the contents of the published config file:

```php
return [
    'files' => [
    
    ]
];
```

## Build Script

```bash
npm run build
```

## Testing

```bash
composer test
```

