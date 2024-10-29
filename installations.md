**Frontend installations:**
Create the react frontend map with:
npx create-react-app "name of the folder" (I used frontend)

**Backend installations**
Create Backend map mkdir backend
cd backend
npm init
create index.js (base server file) "entry point for Node app"
npm install express (will be added inside package.json)
npm install cors 

**- Inside index.js**
we can create a constant called express and run require(’express’). Then make a const called app and call the express function.
Add which is what server listen to for backend in our case 5000 app.listen(5000, () => {console.log('server listening on port 5000')})
Now add a route that our express app listens to '/' (root/homepage). app.get('/', (req, res) => { res.send('Hello from our server!') })
The (req, res) => {} is a callback function, where we have access to the request and the response as parameters.
add the cors as u did with express to avoid cors errors
add this line to use cors app.use(cors())

**Back to Frontend installations**
We will add axios for Api calls 
cd frontend 
npm install axios


**Inside app.js**
take away unneceary styling and content 
add import for axios and try a api call through axios