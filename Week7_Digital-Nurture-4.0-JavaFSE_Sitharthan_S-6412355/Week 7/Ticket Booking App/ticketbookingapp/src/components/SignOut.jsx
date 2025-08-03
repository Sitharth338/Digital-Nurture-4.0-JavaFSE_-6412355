function SignOut({setFlag}){
    return(
        <div>
            <h2>Please Sign Up.</h2>
            <button onClick={() => setFlag(true)}>Login</button>
        </div>
    )
}
export default SignOut;