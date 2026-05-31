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

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);