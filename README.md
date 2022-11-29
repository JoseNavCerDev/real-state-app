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

- PUBLIC
- PROPERTIES
- USER

<br>


### __PUBLIC__

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Public welcome GET`

This enpoint is for public use and send us a page with properties information.

<br>

```http
 GET /api/public/welcome 
```

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Public not found GET`

This enpoint send us a pages not founded or not authorized.

```http
 GET /api/public/not-found
```

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Public categories GET`

This enpoint send us a new page only with filtered categories.

```http
 GET /api/public/categories/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id category sending for backend |

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Public search POST`

This enpoint send us a new page only with filtered properties with the word sent.

```http
 GET /api/public/search
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ending` | `string` | **Required**. Keyword for property search |

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Public property GET`

This enpoint send us a page with all information about the property clicked.

```http
 GET /api/public/property/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id property sending by backend |

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Public property POST`

This enpoint required previous login. It's for send message and contact information with the property owner.

```http
 POST /api/public/property/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id property provided by backend |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `message` | `string` | **Required**. All the message and contact info for owner property |

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Public properties GET`

This enpoint required previous login. It's for send message and contact information with the property owner.

```http
 POST /api/public/property/:id
```
<br>


### __USER__

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

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `User Logout POST`

This endpoint is for user logout.

```http
  POST /api/user/log-out
```

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Forget password GET`

This endpoint is for .

```http
  POST /api/user/forget-password
```

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Change password GET`

This endpoint send us the page with a field to fill out for change password.

```http
  POST api/user/change-password/:token
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `email` | **Required**. Only allows email format (validated) |

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Change password POST`

This endpoint contains a field to fill out for change password.

```http
  POST api/user/change-password/:token
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `email` | **Required**. Only allows email format (validated) |

<br>

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Forget Password GET`

This endpoint 

```http
  POST api/user/change-password/:token
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `email` | **Required**. Only allows email format (validated) |

<br>















