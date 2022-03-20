import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {
          "id": "6237588197402c79e7425516",
          "price": 209,
          "name": "Kristin Walls"
        },
        {
          "id": "623758816b836bc1e11e67f1",
          "price": 365,
          "name": "Ernestine Chambers"
        },
        {
          "id": "62375881aa5758a33d9510da",
          "price": 291,
          "name": "Erma Madden"
        },
        {
          "id": "6237588173d0ff7aa73376e3",
          "price": 318,
          "name": "Darcy Duran"
        },
        {
          "id": "623758815446dc05a2beb4b8",
          "price": 252,
          "name": "Mayer House"
        },
        {
          "id": "62375881c2a1d82953ab1ae3",
          "price": 337,
          "name": "Josefina Matthews"
        }
      ]
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;