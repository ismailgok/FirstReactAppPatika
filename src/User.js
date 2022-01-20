const User = ({name,surname,age,friends,isLoggedIn}) => {
    return(
    <>
        <h1>
            {
            isLoggedIn ? `${name} ${surname} (${age})` : `Giriş yapmadınız` 
            }
        </h1>
        {
            friends.map((friend,index) => (
               <div key={index}>
                   <h1>{friend}</h1>
               </div>
               ))
        }
    </>
    )
}


export default User;