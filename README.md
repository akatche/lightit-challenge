# How to run this project

## **Requirements**

* Docker installed

## **Instructions**

* On a command line, paste the following command

```
git clone https://github.com/akatche/lightit-with-sail akatcheroff && cd akatcheroff && chmod +x ./light-it.sh && ./light-it.sh && ./vendor/bin/sail php artisan migrate
```

## **Troubleshoot**

If for some reason the migration didn´t succesfully run, copy and execute the following command

```
./vendor/bin/sail php artisan migrate
```
