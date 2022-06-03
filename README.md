# poc-prisma-test

commands:

create an conteiner with postgres on docker -> docker run -d --name postgres -e POSTGRES_PASSWORD=elefante -p 5432:5432 postgres

run migrations -> yarn prisma migrate dev

run api -> yarn dev

run prisma studio -> yarn prisma studio
