# Light-it code challenge

## **Requirements**

* Docker installed

## **Instructions**

* On a command line, paste the following command

```
git clone https://github.com/akatche/lightit-with-sail akatcheroff && cd akatcheroff && cp -Rp .env.example .env
```

* Update the following env variables in .env file with the credentials provided on an email*
```
API_MEDIC_USERNAME=
API_MEDIC_PASSWORD=
API_MEDIC_AUTH_SERVICE=
API_MEDIC_HEALTH_SERVICE=
```

* Execute this command
```
chmod +x ./light-it.sh && ./light-it.sh && ./vendor/bin/sail php artisan migrate
```

## **Troubleshoot**

If for some reason the migration didn´t succesfully run, copy and execute the following command

```
./vendor/bin/sail php artisan migrate
```
