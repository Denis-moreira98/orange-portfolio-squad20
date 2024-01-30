docker-compose down

# build imagem back
docker build -t backend-portfolio:latest ./backend

# build imagem front
docker build -t frontend-portfolio:latest ./frontend

# start enviroment
docker-compose up --build --force-recreate --remove-orphans