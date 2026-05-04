function Title() {
  let msg = "Ganesh";
  return (
    <div>
      <h1>I am the Title.</h1>

      {/* jsx with curly braces */}
      <p>2 * 2 = {2 * 2}</p>
      <p>Hello My Name is, {msg.toUpperCase()}</p>
    </div>
  );
}

// export
export default Title;
