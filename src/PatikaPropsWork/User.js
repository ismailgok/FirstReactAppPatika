import PropTypes from 'prop-types';

const User = ({name,surname,age,friends,isLoggedIn,address}) => {
  
    if(!isLoggedIn){
        return <div>Giriş yapmadınız.</div>
    }
    return(
    <>
        <h1>
            {
            isLoggedIn ? `${name} ${surname} (${age})` : `Giriş yapmadınız` 
            }
        </h1>

        {address.title} {address.zip}
        {
            friends &&
            friends.map((friend,index) => (
               <div key={index}>
                   <h1>{friend}</h1>
               </div>
               ))
        }

    </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    address:PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    name:'İsimsiz',
    isLoggedIn: false,
}

export default User;