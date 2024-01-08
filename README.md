# Development 
Pasos para levantar la aplicacion en desarrollo

1. Levantar la base de datos.

```
docker compose up -d
```
2. Crear una copia el .env.template y renombrarlo a .env 
3. Ejecutar el comando ```npm install```
4. Ejecutar el comando ```npm run dev```
5. Reemplazar las variables de entorno
6. Ejecutar los siguientes comandos 
```
npx prisma migrate dev
npx prisma generate 
```
7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands
```
npx create init
npx prisma migrate dev
npx prisma generate 
```