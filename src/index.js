import './index.html';
import dva, { connect } from 'dva';
import allModels from './models';


// 1. Initialize
const app = dva();
// 2. Model
allModels.forEach( models => {
  models.forEach( theModel => {
    app.model(theModel);
  });
})
// 3. Router
app.router(require('./router'));

// 4. Start
app.start(document.getElementById('root'));
