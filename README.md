#Worflow del team 

```
 1 - Elegir que seccion hacer de la pagina.
 2 - Avisarle al compañero que seccion va a estar trabajando
 3 - Hacer pull antes de hacer cualquier cambio del repo remoto 
 4 - Crear una rama local sobre la seccion que se trabajara
 5 - Guardar cada cambio haciendo ej:git add archivos 
 6 - Realizar un commit con comentario en ingles ej: git commit -m "Adding styles on navbar component"
 7 - Realizar el push con git push.

 
```

 # Merger
   Si terminaste la seccion que estabas trabajando realizar los pasos para solicitar un pull request al dueño del repo 
 ```
  1 - Verificar que no tengas cambios en tu rama local en la cual trabajastes guardar todos los cambios y commitearlos para luego hacerles un push y subirlos.
  2 - Pararte en la rama main con git checkout main 
  3 - Una vez en main correr el comando git merge. Permite crear un nuevo commit con la combinación de dos ramas (la rama donde nos encontramos cuando ejecutamos el comando y la         rama que indiquemos después del comando),Ej: git checkout main git merge navbar.
  4 - Eso genera un pull request en el repositorio donde yo voy a ver si esta todo ok para combinarlo con nuestra rama main.
 ```
