# Vue-spa
Vue.js &amp; Laravel SPA

My Vue.js portfolio. Using Laravel for backend.

Demonstration of CRUD application and live search, using vue axios library.

LiveUpdate with Laravel Echo and Pusher (or socket.io): 
reffer to https://laravel.com/docs/5.4/broadcasting#broadcast-name

STEPS:
- in .env file put Pusher keys for app
- in config/app.php enable(uncomment) App\Providers\BroadcastServiceProvider::class,
- composer require pusher/pusher-php-server "~2.6"
- npm install --save laravel-echo pusher-js
- in bootstrap.js file uncomment Echo part, to enable it in app

make:event ProjectAdded
