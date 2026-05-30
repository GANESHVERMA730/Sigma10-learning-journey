function handleFormSubmit(){
  event.preventDefault();
  console.log("form was submitted");
}

export default function Form(){
  return(
    <form>
      <input placeholder="Write Something"></input>
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}