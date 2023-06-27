# Light-it code challenge

## **Requirements**

* Docker installed

## **Instructions**

* On a command line, paste the following command

```
git clone https://github.com/akatche/lightit-challenge akatcheroff && cd akatcheroff && cp -Rp .env.example .env
```

* Update the following env variables in .env file with the credentials provided on an email
```
API_MEDIC_USERNAME=
API_MEDIC_PASSWORD=
API_MEDIC_AUTH_SERVICE=
API_MEDIC_HEALTH_SERVICE=
```

* Execute this command
```
chmod +x ./light-it.sh && ./light-it.sh
```

## **Troubleshoot**

If for some reason the migration didn´t succesfully run, copy and execute the following command

```
./vendor/bin/sail php artisan migrate
```

If Laravel Sail is already installed, perhaps triggering could solve some issues
```
./vendor/bin/sail build --no-cache
```

## **Architectural Decisions**

I´ve decided to use the Inertia stack (Laravel + React) + Tailwind. 
Even though it cannot be called an SPA (it´s a classic server-side app), for a small and quick project it´s perfect, given the fact that 
you don´t need to maintain for instance a Laravel app + React app, which could be really useful for larger applications.


### Boilerplate
* Inertia
* React
* Laravel
* Tailwind
* Flowbite (Tailwind CSS component library)

### App structure
* Login/Register module
* Dashboard
  * Diagnose Module
  * Previous Diagnose Module

### App performance
I´m going to divide this in 3 sections
#### Auth with APIMEDIC service:
In order to perform any api calls to the apimedic service, an auth token is needed. This is why I decided to cache the auth token
for the entire time this token is valid through, then, it will be refetched.

#### Symptoms list:
Fetched and cached this value for an hour, so it´s not recreated every time any user uses this feature.

#### Diagnose:
Thinking in the fact that perhaps users can perform repeated searches on the same topic, 
I´ve decided to cache diagnoses replies from the API using the user_id and the symptoms ids as value.
Therefore, if the user(id=10), makes a query (symptoms = 158,87), next time that query won´t be made and will be retrieved directly from the cache.

### Testing
I´ve added some backend tests, which could be triggered using ./vendor/bin/sail test. I like to use Cypress for E2E tests, so this could have been an use case for using this tool.

### Features which could be added 
If I had more time or this could become a live app I´d add the following features
* Add a Rate Limit to api calls
* Edit profile feature
* Share diagnoses on WhatsApp with family/friends
* Leveraging apimedic´s API and using body parts to refine more the given results 
* Follow up with users (if they agree) to see how they are doing
* Create a WhatsApp bot, which could consume the current api (with a couple of auth tweaks)
* Add animations to make the app more friendly from an UX perspective
* Add a landing page
* Explain on register page why birth sex is required and why there are only 2 possible options
* Optimize Tailwind production size
