import React, {useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {TextInput, PrimaryButton} from '../components/UIkit/'
import {signIn} from '../reducks/users/operations'
import {push} from 'connected-react-router';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  },[setEmail]);

  const inputPassword= useCallback((event) => {
    setPassword(event.target.value)
  },[setPassword]);

  const dispatch = useDispatch();

  return(
    <div className={"c-section-container"}>
      <h2 className={"utext__headline u-text-center"}>サインイン</h2>
      <div className={"module-spacer--medium"} />
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
      
      <div className={"module-spacer--medium"}></div>
      <div className={"center"}>
        <PrimaryButton 
          label={"SignIn"}
          onClick={() => dispatch(signIn(email, password))}
        />
        <p onClick={()=> dispatch(push("/signup"))}>アカウントをお持ちでない方はこちら</p>
        <p onClick={() => dispatch(push("/signin/reset"))}>アカウントを忘れた方はこちら</p>
      </div>
    </div>
  )
}

export default SignIn;