function SearchItemResult({name,lastname,username,email,phone,website,about}) {
  return (
    <div className="item-search">
      <div className="date-name">
        <p className="name-user">
          {name} {lastname} 
        </p>
      </div>
      <div className="about-user">
        <p>
            {about}
        </p>
      </div>
      <div className="info-user">
        <p>User: {username}</p>
        <p>Email: {email}</p>
        <p>Tel: {phone}</p>
        <p>website: {website}</p>
      </div> 
    </div>
  );
}

export default SearchItemResult;
