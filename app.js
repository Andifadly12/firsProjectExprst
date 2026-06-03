//     const express = require('express');
//     const app = express();
//     const port = 3000;
//     const path = require('path');

//     // app.use(express.static(path.join(__dirname, 'public')));

//     // app.get('/', (req, res) => {
//     //   res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     // });


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//     app.listen(port,()=>{
//         console.log(`Server berjalan di http://localhost:${port}`);
//     });

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(3000);


// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));


// const loger = (req, res, next) => {
//   console.log('masuk');   
//   next();
// };

// app.use(loger);

// const logger = (req, res, next) => {
//   console.log("Ada request masuk");
//   next();
// };

// app.use(logger);




// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(3000, ()=>{console.log('Server berjalan di http://localhost:3000');});



// const express = require('express');
// const app = express();

// const users = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Doe' },
//   { id: 3, name: 'Alice' },
//   { id: 4, name: 'Bob' }
// ];
// app.get('/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find(user => user.id === id);

//   if (!user) {
//     return res.status(404).send('User tidak ditemukan');
//   }

//   res.json(user);
// });

// app.listen(3000, () => {
//   console.log('Server berjalan di http://localhost:3000');
// });

// const express = require('express');
// const app = express();

// app.use(express.json());

// let users = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Doe' },
//   { id: 3, name: 'Alice' }
// ];


// // GET semua user
// app.get('/users', (req, res) => {
//   res.status(200).json(console.log(users) );
// });


// // GET user berdasarkan id
// app.get('/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find(u => u.id === id);

//   if (!user) {
//     return res.status(404).json({
//       message: 'User tidak ditemukan'
//     });
//   }

//   res.status(200).json(user);
// });


// // POST tambah user
// app.post('/users', (req, res) => {
//   const { name } = req.body;

//   const newUser = {
//     id: users.length + 1,
//     name
//   };

//   users.push(newUser);

//   res.status(201).json({
//     message: 'User berhasil ditambahkan',
//     data: newUser
//   });
// });


// // PUT update user
// app.put('/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find(u => u.id === id);

//   if (!user) {
//     return res.status(404).json({
//       message: 'User tidak ditemukan'
//     });
//   }

//   user.name = req.body.name;

//   res.status(200).json({
//     message: 'User berhasil diupdate',
//     data: user
//   });
// });


// // DELETE user
// app.delete('/users/:id', (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find(u => u.id === id);

//   if (!user) {
//     return res.status(404).json({
//       message: 'User tidak ditemukan'
//     });
//   }

//   users = users.filter(u => u.id !== id);

//   res.status(200).json({
//     message: 'User berhasil dihapus'
//   });
// });


// app.listen(3000, () => {
//   console.log('Server berjalan di http://localhost:3000');
// });


const express = require('express');
const app = express();
const path = require('path');

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Bob' }
];
app.get('/', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).send('User tidak ditemukan');
  }

  res.json(user);
});
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});