1. npm i react-router-dom concurrently
            [We install concurrently to use both the frontend and the backend server simultaneously]
2. Add to package.json
    "both": "concurrently \"npm run start\" \"node_modules/.bin/nodemon backend/index.js\" "
Option 2 is not working, so removed it. we'll use two terminals or later find out why that's not working