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
npm test -- reducer/noteReducer.test.js
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
