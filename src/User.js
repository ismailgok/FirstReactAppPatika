import PropTypes from 'prop-types';

const User = ({name,surname,age,friends,isLoggedIn}) => {
    return(
    <>
        <h1>
            {
            isLoggedIn ? `${name} ${surname} (${age})` : `Giriş yapmadınız` 
            }
        </h1>
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
};



export default User;