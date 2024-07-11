import React from 'react';

function Form() {
  return (
    <form>
      <table>
    <div>
      <tr>
      <td><label id="h">Name:</label></td>
      <td><input type="text" name="h"></input></td>
      </tr>
      <tr>
        <td><label id="a">Password:</label></td>
       <td> <input type="text" name="a"></input></td>
        </tr>
        <tr>
       <td> <label id="r">Confirm-Password:</label></td>
        <td><input type="text" name="r"></input></td>
      </tr>
      <tr>
        <td><label id="i">Address:</label></td>
        <td><textarea name="i"></textarea></td>
      </tr>
      <tr>
        <td><label id="k">Phone:</label></td>
        <td><input type="text" name="k"></input></td>
        </tr>
        <tr>
        <input type="submit"></input>
        </tr>
        </div>
    </table>
      </form>
  );
};
export default Form;
