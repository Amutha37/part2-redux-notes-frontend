<<<<<<< HEAD
import { useSelector } from 'react-redux'

// anecdotes: anecdoteReducer,
//   filter: filterReducer,

const Notification = () => {
  const notification = useSelector((state) => state.notification)

  const style = {
    border: 'solid',
    backgroundColor: 'grey',
    padding: 10,
    borderWidth: 1,
    marginBottom: 37,
    borderRadius: 5,
    color: 'yellow',
  }
  return <div style={style}>{notification}</div>
}

export default Notification
=======
import React from "react";

const Notification = ({ message }) => <p className="error">{message}</p>;

export default Notification;
>>>>>>> 6f2290c (fetch data from backend node express)
