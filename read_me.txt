1. npm i react-router-dom concurrently
            [We install concurrently to use both the frontend and the backend server simultaneously]
2. Add to package.json
    "both": "concurrently \"npm run start\" \"node_modules/.bin/nodemon backend/index.js\" "
Option 2 is not working, so removed it. we'll use two terminals or later find out why that's not working

3. to understand useLocation :
                        // const location = useLocation();
                        // React.useEffect(() => {
                        // }, [location]);

4.  To start the backend server
                node_modules/.bin/nodemon .\index.js

5.  //Client side logic
    // let newNote = {
    //   "_id": "640590c8d238fd3079bd434f3e82f3",
    //   "user": "6401c4aafb6cdee10bde4091",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-03-06T07:05:44.634Z",
    //   "comments": [],
    //   "__v": 0
    // }
    // setNotes(notes.concat(newNote))