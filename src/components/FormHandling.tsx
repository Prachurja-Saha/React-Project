import React, { BaseSyntheticEvent, HtmlHTMLAttributes, SyntheticEvent, useState } from "react"

// SyntheticEvent: The base type for all React synthetic events.
// FormEvent: For form events like form submission.
// MouseEvent: For mouse events.
// KeyboardEvent: For keyboard events.
// FocusEvent: For focus-related events.
// ChangeEvent: For input change events.

const FormHandler = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    //e: React.ChangeEvent<HTMLInputElement> here SyntheticEvent is React type(need to under..)
    const stopRelodwhileSubmit = (e : SyntheticEvent) => {
    
        e.preventDefault(); // this will stop reload
        const newTarget = e.target as HTMLInputElement
        console.log(newTarget.value); // not working

        console.log("submitted name is " + name);
        console.log("submitted email is " + email);
    }
    
    return <>
    <form onSubmit={stopRelodwhileSubmit}>
      <label htmlFor="Name">Name</label>
      <input 
       onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value) }
       value={name} type="text" id="Name" name="Name" 
      />
      <label htmlFor="Email">Email</label>
      <input 
       onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value) }
       value={email} type="text" id="Email" name="Email" 
      />

      {/* on submitting it will reload whole page we can stop that */}
      <button type="submit"> Submit Information </button>

    </form>

    </>

}

export default FormHandler