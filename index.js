// const lodash = require('lodash')
//
// const a = {
//     name: "One"
// }
//
// const b = lodash.get(a, 'name', '---')
//
// console.log('Hello the ', b)

const express = require('express');
const app = express();
const PORT = 5000;
const cors = require("./cors");

cors(app);

const posts =  [
    {
        id: 1234567,                                // int ID объявления
        publishDate: 1234567,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234567,                           // int ID владельца объявления
        ownerLogin: 'MyOwner 1',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления 1 ',    // string
        bulletinText: 'Текст объявления 1 ...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde.',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234568,                                // int ID объявления
        publishDate: 1234568,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234568,                           // int ID владельца объявления
        ownerLogin: 'MyOwner 2',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления 2',    // string
        bulletinText: 'Текст объявления . 2 ..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde.',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234569,                                // int ID объявления
        publishDate: 1234569,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234569,                           // int ID владельца объявления
        ownerLogin: 'MyOwner 3 ',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления 3 ',    // string
        bulletinText: 'Текст объявления  3.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde...',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234570,                                // int ID объявления
        publishDate: 1234570,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня 4',        // string дата публикации в человекочитаемом формате
        ownerId: 1234570,                           // int ID владельца объявления
        ownerLogin: 'MyOwner 4 ',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления 4',    // string
        bulletinText: 'Текст объявления .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde...',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234581,                                // int ID объявления
        publishDate: 1234570,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234570,                           // int ID владельца объявления
        ownerLogin: 'MyOwner5',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde...',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234571,                                // int ID объявления
        publishDate: 1234571,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234571,                           // int ID владельца объявления
        ownerLogin: 'MyOwner6',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления ..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde..',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234572,                                // int ID объявления
        publishDate: 1234572,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234572,                           // int ID владельца объявления
        ownerLogin: 'MyOwner7',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления ...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde.',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234573,                                // int ID объявления
        publishDate: 1234573,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234573,                           // int ID владельца объявления
        ownerLogin: 'MyOwner8',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления ..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde..',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234574,                                // int ID объявления
        publishDate: 1234574,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234574,                           // int ID владельца объявления
        ownerLogin: 'MyOwner9',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления ..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde..',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234575,                                // int ID объявления
        publishDate: 1234575,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234575,                           // int ID владельца объявления
        ownerLogin: 'MyOwner10',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления ..Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde..',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234576,                                // int ID объявления
        publishDate: 1234576,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234576,                           // int ID владельца объявления
        ownerLogin: 'MyOwner11',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления ...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde.',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234577,                                // int ID объявления
        publishDate: 1234577,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234577,                           // int ID владельца объявления
        ownerLogin: 'MyOwner12',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde...',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234578,                                // int ID объявления
        publishDate: 1234578,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234578,                           // int ID владельца объявления
        ownerLogin: 'MyOwner13',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde....',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234579,                                // int ID объявления
        publishDate: 1234579,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234579,                           // int ID владельца объявления
        ownerLogin: 'MyOwner14',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления',    // string
        bulletinText: 'Текст объявления .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde...',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },        {
        id: 1234580,                                // int ID объявления
        publishDate: 1234580,                       // int timestamp даты публикации
        publishDateString: '08:46, сегодня',        // string дата публикации в человекочитаемом формате
        ownerId: 1234580,                           // int ID владельца объявления
        ownerLogin: 'MyOwner 99',                      // string имя пользователя владельца объявления
        bulletinSubject: 'Заголовок объявления 99',    // string
        bulletinText: 'Текст объявления  99.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet asperiores, dignissimos eligendi\n' +
            '    molestias nisi praesentium provident sint voluptate? Alias dignissimos error laboriosam maiores nostrum odit officia\n' +
            '    pariatur unde...',       // string
        bulletinImagees: [                          // string[] ссылки на прикрепленные к объявлению изображения
            'https://static.baza.farpost.ru/v/1510541224458_hugeBlock',
        ]
    },

]



function home (req,res) {
    res.send('get data at /cards, send data to /response')
}

function response (req,res) {
    req.get([{id:'status'}])
    console.log(req.data, 'serv-----')
}

async function cards (req,res) {

    let currentPage = req.query.page
    const n = 10
    res.send(posts.filter((el,i)=> i >= (currentPage * n - n) && i <= (currentPage * n) - n + (n - 1) ) );
}

app.get('/', home)
app.get('/cards', cards)
// app.get('/response', response)
app.use(express.urlencoded())
app.use(express.json())
app.post('/response', response)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


