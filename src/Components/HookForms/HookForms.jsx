// import { useState } from "react";
import useInputState from "../../Hooks/useInputState";


const HookForms = () => {
      // const [name, handleNameChange] = useInputState('Rojoni hooked');

      const emailState = useInputState('rojoni@aksldjjf.com');

      const handleSubmit = e => {
            console.log('form data', emailState.value);
            e.preventDefault();
      };

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        {/* <input
                              value={name} onChange={handleNameChange}
                              type="text" name="name" /> */}
                        <br />
                        <input {...emailState} type="email" name="email" id="" />
                        <br />
                        <input type="password" name="password" />
                        <br />
                        <input type="submit" value="Submit" />
                  </form>


            </div>
      );
};

export default HookForms;