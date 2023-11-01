# Todo List Mock Test Binar

## Jawaban :
1. Apakah Kegunaan JSON pada REST API?
    - Kegunaan JSON pada REST API adalah sebagai format standar untuk bertukar informasi antara client side dan server side
2. Jelaskan bagaimana REST API bekerja?
    - Cara kerja REST API adalah dengan memanipulasi resource dan pertukaran data diantara client dan server dalam bentuk format seperti json atau xml. Dengan REST API resource bisa dimanipulasi seperti dibuat, dibaca, diperbaharui, atau dihapus yang kita kenap sebagai CRUD

## Installation

- Install my-project with npm  
- Clone project using SSH or HTTPS
- Open terminal / CMD and direct to this project directory
- Copy `.env.example` and rename it to `.env` open the file and adjust the environment variables
- Run `npm install` to install all dependencies
- Run `npx sequelize-cli db:create` to create database
- Run `npx sequelize-cli db:migrate` to create table on the database
- Run `npm run dev` to start the development server

## Repository

- Back End `https://github.com/Shendy1567/Binar-MockTest_Backend`
- Front End `https://github.com/Shendy1567/Binar-MockTest-Frontend`

## Website

`https://shendy-mock-test-frontend.vercel.app`

## Feature Description

Aplikasi mocktest yang dibuat ini adalah sebuah website untuk membuat to-do list dimana bisa mencatat, mengecek, dan membuat list yang perlu dilakukan

Fitur yang tersedia antara lain:
- User dapat register dengan 6 digit angka yang diinginkan lalu akan diredirect ke halaman login
- User dapat login dengan 6 digit angka yang telah dibuat dan bisa mengakses halaman todo-list
- User dapat menambahkan todo-list dengan create new list dan memasukkan list dan juga due date
- User dapat mengedit, menghapus, dan terdapat toogle sudah selesai atau belum yang terdapat pada bagian action table
- User dapat logout dengan mengklik tombol logout yang terdapat pada navbar

# Note
Website yang disediakan hanya berupa frontend saja sehingga apabila ingin mengetes server side perlu untuk clone pada repository backend dan frontend
