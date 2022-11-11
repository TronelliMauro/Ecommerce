









//   import React from "react";
//  // import { useNavigate } from "react-router-dom";
//   import './styles.css';

//   const CardDetail = ({item}) => {
   
//     console.log('hola');

//       return(
//       <div>
//          <h1> PRUEBA</h1>
//       </div>
//       )

//   };

//   export default CardDetail;




 /* import React from "react";
  import { useNavigate } from "react-router-dom";
  import './styles.css';

  const CardDetail = ({item}) => {
      const {id,title,image,price,category}=item;

  const navigate = useNavigate();

  const handleDetail=() =>{
  navigate(`/details/${id}`, {state: item});

  }

  handleDetail();

      return(
      <div className='card'>
          <div className='card-image-container'>
              <img className='card-image' src={image} alt={item.name} />
          </div>
          <div className='card-content'>
              <p className='card-name'>{title}</p>
              <p className='card-category'> Category: {category}</p>
              <p className='card-type'> Price: {price}</p>
              <h1 className='card-buy'>Press to Buy</h1>

          </div>
      </div>
      )

  };

  export default CardDetail;*/