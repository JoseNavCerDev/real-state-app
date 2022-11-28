# Real State project

This project is a Real State system based on __API REST__ services and Model View Controller architecture. 

_______________________________________________________________________________

## Technologies

- [PUG](https://pugjs.org/api/getting-started.html)
- [TailwindCSS](https://tailwindcss.com/)
- [Nodejs](https://nodejs.org/en/)

_______________________________________________________________________________


### NPM Tools

- [Multer](https://www.npmjs.com/package/multer): It's primarily used for uploading files.
- [Dropzone](https://www.npmjs.com/package/dropzone): Turns any HTML element into a dropzone. This means that a user can drag and drop a file onto it.
- [Nodemailer](https://www.npmjs.com/package/nodemailer): Send emails from Node.js – easy as cake.

_______________________________________________________________________________


## API Reference

API uses 3 different sections:
- USER
- PROPERTIES
- PUBLIC

<br>

### __User__

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `User Register GET`

This enpoint send us a page to new user register.

```http
 GET /api/user/register 
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. The new user name |


<br> 

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `User Register POST`

This enpoint is for register new user. Only allows users with new or unregistered mail. 

```http
  POST /api/user/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. The new user name |
| `email` | `email` | **Required**. Only allows email format (validated) |
| `password` | `string` | **Required**. Password at least 6 characters|
| `password_confirmation` | `string` | **Required**. Password equals to previous field|

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `User LOGIN GET`

This endpoint send us a page to login (previsouly register)

```http
  GET /api/user/login
```
<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `User LOGIN POST`

This enpoint need previous register.

```http
  GET /api/user/user-login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `email` | **Required**. Only allows email format (validated) |
| `password` | `string` | **Required**. Password at least 6 characters |

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Validate email GET`

This endpoint is sending to the new email user, after the correct new creation. Only needs to click in the email link.

```http
  GET /api/user/validate-email/:token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`   | `string` | **Required**. Token previous created |

<br>



#### add(num1, num2)

Takes two numbers and returns the sum.








