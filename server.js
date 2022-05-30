import express from 'express';
import { PORT } from './config';
import errorHandler from './middlewares/errorHandler';
const app = express();
app.use(express.json())
import routes from './routes'
app.use('/api', routes)
app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`On Port ${PORT}`)
})
