<content>
<snippet>

# Project-More-Recipes

Bootcamp/LOS 26 PROJECT

[![Build Status](https://travis-ci.org/llabake/more-recipes.svg?branch=develop)](https://travis-ci.org/llabake/more-recipes) [![Coverage Status](https://coveralls.io/repos/github/llabake/more-recipes/badge.svg?branch=develop)](https://coveralls.io/github/llabake/more-recipes?branch=develop)

# Description

More-Recipes provides a platform for users to share the awesome and exciting  recipe ideas they have invented or learnt.  Suppose a user comes up with a food recipe,  he/she can post it on More-Recipes and  get feedback in form of reviews and votes from other users who explore that recipe. Users can also keep a list of their favorite recipes on the application

# Installation

Clone the repo git clone https://github.com/llabake/more-recipes.git and navigate to the project root directory

Install depndencies

Set up Express

Set up Database and make migrations by running the following commands.<br> 
- ```sequelize db model:create. 
- ````create necessary tables in the database. 
- ```sequelize db migrate to apply changes in the table.

# Functionality and Endpoints

<table>
<tr>
<th> Funtionality </th>
<th> Endpoint </th>
</tr>
<tr>
<td>Logs a user in</td>
<td>POST /api/v1/users/sigin</td>
</tr>
<tr>
<td>Register a new user</td>
<td>POST /api/v1/users/signup</td>
</tr>
<tr>
<td>Create a new recipe</td>
<td>POST /api/v1/recipe/</td>
</tr>
<tr>
<td>Add members to a recipe</td>
<td>POST api/v1/recipe/recipeid/user</td>
</tr>
<tr>
<td>Get single user from a recipe </td>
<td>GET /api/v1/recipeid/user</td>
</tr>
<tr>
<td>Delete a member from a recipe </td>
<td>DELETE /api/v1/recipeid/user </td>
</tr>
<tr>
<td>Send recipe members a message </td>
<td>POST api/v1/recipe/recipeid/message </td>
</tr>
<tr>
<td>List all recipe messages for user </td>
<td>GET api/v1/recipe/recipeid/message </td>
</tr>
<tr>
<td>Delete message from a recipe </td>
<td>DELETE api/v1/recipe/recipeid/message </td>
</tr>

 

# Usage

The app can be used with Postman,before making requests, make sure the server is running by running nodemon app.js

# References

https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-generating-models <br/>
http://docs.sequelizejs.com/manual/tutorial/models-usage.html </br>
https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6</br>

# Author
Lemboye Labake

# License

</content>
</snippet>