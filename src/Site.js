function Site( { title, desc, url }) {
  


  return (
    <div className="site">   
        <h2><a href={url}>{title}</a></h2>
        <div>{desc}</div> 
    </div>
  );
}

export default Site;