const User = ({name,surname,age,friends,isLoggedIn}) => {

    return(
    <>
        
        <h1>
            {
            isLoggedIn ? `${name} ${surname} (${age})` : `Giriş yapmadınız` 
            }
        </h1>
        {
            friends.map((friend) => {
                <div>{friend}</div>
            })
        }
       
    
    </>
    )
}


export default User;