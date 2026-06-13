// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

function App() {
  let handleClick = () => {
    console.log("button was clicked");
  };

  let handleDelete = () => {
    console.log("Delete Button clicked");
  };

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} >Contained</Button>
       <Button variant="outlined" disabled>Outlined</Button>
       <Button variant="contained" onClick={handleDelete} color="error" startIcon={<DeleteIcon />}>Delete</Button>
       <br></br>
       <br></br>
       <Alert severity="error">This is an error Alert.</Alert>
    </>
  );
}

export default App
