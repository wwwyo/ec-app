import React, {useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {TextInput, PrimaryButton} from '../components/UIkit/'
import {resetPassword} from '../reducks/users/operations'

const Reset = () => {
  const [email, setEmail] = useState("");

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  },[setEmail]);

  const dispatch = useDispatch();

  return(
    <div className={"c-section-container"}>
      <h2 className={"utext__headline u-text-center"}>パスワードのリセット</h2>
      <div className={"module-spacer--medium"} />
      <TextInput 
        fullWidth={true}
        label={"リセットパスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      
      <div className={"module-spacer--medium"}></div>
      <div className={"center"}>
        <PrimaryButton 
          label={"Reset password"}
          onClick={() => dispatch(resetPassword(email))}
        />
      </div>
    </div>
  )
}

export default Reset;