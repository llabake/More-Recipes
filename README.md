<content>
<snippet>

# Project-More-Recipes

Bootcamp/LOS 26 PROJECT

[![Build Status](https://travis-ci.org/llabake/more-recipes.svg?branch=ch-user-route-test-ch-test-150881181)](https://travis-ci.org/llabake/more-recipes)

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
<td>POST /api/users/sigin</td>
</tr>
<tr>
<td>Register a new user</td>
<td>POST /api/users/signup</td>
</tr>
<tr>
<td>Create a new group</td>
<td>POST /api/group/</td>
</tr>
<tr>
<td>Add members to a group</td>
<td>POST api/group/groupid/user</td>
</tr>
<tr>
<td>Get single user from a group </td>
<td>GET /api/groupid/user</td>
</tr>
<tr>
<td>Delete a member from a group </td>
<td>DELETE /api/groupid/user </td>
</tr>
<tr>
<td>Send group members a message </td>
<td>POST api/group/groupid/message </td>
</tr>
<tr>
<td>List all group messages for user </td>
<td>GET api/group/groupid/message </td>
</tr>
<tr>
<td>Delete message from a group </td>
<td>DELETE api/group/groupid/message </td>
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