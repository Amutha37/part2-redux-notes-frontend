<h1 align="center"> $\textcolor{orange}{REDUX\ }$
</h1>

## $\color{cyan}{Part6}$

 <details>
 <summary>
Step 1
</summary>
Testing the Reduce method.
Install deep-freeze to ensure reducer has been correctly define as an immutable function.

```
npm install redux
```

```
npm install --save-dev deep-freeze
```

### To run individual test file : -

```
run test file :
```

```
npm test --reducer/noteReducer.test.js
```

### run specific test name or describe block name

- test name

```
npm test -- -t  "a specific note is within the returned notes"
```

- test describtion

```
  npm test -- -t 'notes'
```

</details>

## $\color{cyan}{Part6-b}$

 <details>
 <summary>
Redux ToolKit
</summary>
[Redux Toolkit](https://redux-toolkit.js.org/) is a library that solves  repetitive boilerplate code for action and reduce implemented for multiple state management. `Redux Toolkit` library for example greatly simplifies the configuration of the Redux store and offers a large variety of tools to ease state management.

```
npm install @reduxjs/toolkit

```

</details>

$\color{cyan}{Part6-b12-13}$

 <details>
 <summary>
Step 10
</summary>
- Render message stored in the Redux store.

- Create separate reducer for the notification using `createSlice` .

</details>

$\color{cyan}{Part6-c\ -\ Communicating\ with\ server}$

 <details>
 <summary>
Step 1
</summary>

$\color{lightblue}{Step\ 1}$

- Getting data from the backend
  In this exercise we will use `json-server`.

1. Create dummy data in `db.json`
   \*\*\* which is placed in the root of the project.

2. Install json-server for the project ...

```
npm install json-server --save-dev
```

3.  Add scripts line in `package.json`

```
"server": "json-server -p3001 --watch db.

```

4.  Launch json-server
    ```
    npm run server
    ```

$\color{lightyellow}{Fetching\ data\ from\ the\ backend}$

Use a fetch method to get the data using `axios` in `services/anecdotes.js` .

```
npm install axios
```

- Use Redux Thunk Library to : -

\*\* We did not use `await` where it only works inside `async` functions.For the simple nature of this operation we'll abtain from using `async`.

5. Change the creation of new notes to be stored in backend(db.json).

6. Changes of important note status to be updated in backend.

7. Create notification message.

</details>
