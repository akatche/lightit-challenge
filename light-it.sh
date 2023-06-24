echo "Hi, I´m the alebot and I´m gonna be installing everything needed for the challenge to work"
echo ""
echo "So... let´s begin"
echo "We are going to need 2 command lines, on the first one "
echo "*****************************************************"
echo "Do you have Docker installed? [y/N]"
read reply

if [ "$reply" == "N" -o "$reply" == "n" ]; then
    echo "Please, install it and execute this command again, thanks!"
    exit 1
fi

echo ""
echo "Copying Laravel env file..."
echo ""
if [ ! -f .env ]; then
    cp -Rp .env.example .env
fi

echo ""
echo "Starting containers..."
echo ""
./vendor/bin/sail up -d

echo ""
echo "Installing Composer Dependencies..."
echo ""
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs

echo ""
echo "Generating app key..."
echo ""
./vendor/bin/sail php artisan key:generate

echo ""
echo "Performing migrations..."
echo ""
./vendor/bin/sail php artisan migrate

echo ""
echo "Installing node packages..."
echo ""
./vendor/bin/sail npm install

echo ""
echo "Running dev server..."
echo ""
./vendor/bin/sail npm run dev
