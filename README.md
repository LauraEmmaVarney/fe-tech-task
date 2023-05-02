# Tebex FE Tech Test

## Task

### Part 1
This codebase is a basic checkout SPA that uses Laravel to make API calls, and Vue2 to render the frontend. At the moment, it's a single monolithic Vue component (bleh!), the validation is not very good, and the code quality could be massively improved!

- Refactor the checkout SPA in a way that you feel makes the code cleaner and easier to maintain and extend in future
- Look at how the user experience could be improved by considering different types of user (mobile vs desktop, wifi vs 3G etc) or by general improvements that would benifit all users.

### Part 2
Write some automated tests for the code you've written. You do not need to have complete test coverage we just want to see that you have some experience in writing automated tests!


## Running the code

### 1. Install PHP
The code does need PHP8 in order to run. If you are on a Mac, the built-in version of PHP should suffice!

### 2. Install Laravel dependencies 
Laravel uses composer to manage dependencies, as such you'll need to install this project's dependencies by running:

```
php composer.phar install
```

### 3. Run the application

Navigate to the root of the codebase and run the following command:

```
php artisan serve
```

This will reply with a web address (usually http://127.0.0.1:8000 or http://127.0.0.1:8001). You can then access the checkout SPA by going to that URL, with `/checkout` on the end (e.g. http://127.0.0.1:8000/checkout)

### 4. Recompile assets
Using Node v16, please run `npm i` to install the dependencies.

The frontend tooling is currently webpack, so you can then build the code in dev mode with `npm run watch` or `npm run dev`. There is no need to do a production build for this task.


