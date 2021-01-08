import React, {useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {TextInput, PrimaryButton} from '../components/UIkit/'
import {signUp} from '../reducks/users/operations'
import {push} from 'connected-react-router'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputUserName = useCallback((event) => {
    setUsername(event.target.value)
  },[setUsername]);

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  },[setEmail]);

  const inputPassword= useCallback((event) => {
    setPassword(event.target.value)
  },[setPassword]);

  const inputConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value)
  },[setConfirmPassword]);

  const dispatch = useDispatch();

  return(
    <div className={"c-section-container"}>
      <h2 className={"utext__headline u-text-center"}>アカウント登録</h2>
      <div className={"module-spacer--medium"} />
      <TextInput 
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUserName}
      />
      <TextInput 
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput 
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <TextInput 
        fullWidth={true}
        label={"パスワード(確認)"}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={"password"}
        onChange={inputConfirmPassword}
      />
      <div className={"module-spacer--medium"}></div>
      <div className={"center"}>
        <PrimaryButton 
          label={"アカウント登録する"}
          onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />
        <p onClick={() => dispatch(push("/signin"))}>アカウントをお持ちの方はこちら</p>
        <p onClick={() => dispatch(push("/signin/reset"))}>アカウントを忘れた方はこちら</p>
      </div>
    </div>
  )
}

export default SignUp;