echo "Hi, I´m the alebot and I´m gonna be installing everything needed for the challenge to work"
echo ""
echo "So... let´s begin"
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
echo "Generating app key..."
echo ""
./vendor/bin/sail php artisan key:generate
./vendor/bin/sail php artisan optimize

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
