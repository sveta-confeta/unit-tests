import React ,{MouseEvent,ChangeEvent} from 'react';

export const User=()=>{

    const deleteUser=(event:MouseEvent<HTMLButtonElement>)=>{
        alert(event.currentTarget.name);
    }
    const usersave=(event:MouseEvent<HTMLButtonElement>)=>{
            //информация о том , с кем произошло событие.в данном случае c button
        // alert('save')

    }
    return <div>Dimych<button name="del" onClick={deleteUser}>Delete</button>
        <button onClick={usersave}>Seve</button></div>

}

export const UserText=()=>{

    const changeText=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        alert(event.currentTarget.value);
    }


    return <div>
        <textarea onChange={changeText} >  </textarea>
    </div>
}
