import react from 'react';
import './User.css';
import StarRating from './StarRating';

const User = ({ img, star, name, bio, about }) => {
  return (
    
    <div className='User'>
      <img src={img} alt={name} />
      <StarRating rating={star} />
      <div className="userInfo">
        <h1>{name}</h1>
        <p className='bio'>{bio}</p>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default User;