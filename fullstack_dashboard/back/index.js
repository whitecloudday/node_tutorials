const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();

const swaggerSpec = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json()); // express 모듈의 json() 메서드 사용

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (request, response) => {
  response.send('Hello Node!!!');
});

app.use(require('./routes/visitorsRoute'));
app.use(require('./routes/revenueRoute'));
app.use(require('./routes/customerRoute'));
app.use(require('./routes/targetRealityRoute'));
app.use(require('./routes/topProductsRoute'));
app.use(require('./routes/salesMapRoute'));
app.use(require('./routes/volumeServicesRoute'));


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});