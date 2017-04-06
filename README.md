# bookApi

This is a simple API, written in NodeJS to manage some books.

---

> **GET** /api/books/
* Get a list of all books
---

> **POST** /api/books/
* Insert a new Book 

Paramenters:
  * title  (String)
  * author (String)
  * genre  (String)
  * read   (Boolean)
---

> **GET** /api/books/<id>
* Get info about a book
---
> **PUT** /api/books/<id>
* Updates info about a book
---
> **PATCH** /api/books/<id>
* Updates a particular info about a book
---
> **DELETE** /api/books/<id>
* Delete a book
---
