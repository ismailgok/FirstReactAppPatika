const User = ({name,surname,age,friends,isLoggedIn}) => {

    return(
    <>
        <div>
        <h1>{name} {surname} ({age}) <br /> </h1>
        {
            friends.map((item) => {
                console.log(item.name); 
            })
        }
        </div>
    
    </>
    )
}


export default User;