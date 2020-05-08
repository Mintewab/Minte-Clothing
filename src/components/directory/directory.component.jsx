  
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.pinimg.com/originals/0b/b9/d2/0bb9d27d5de16cabe820a3608952a7ef.jpg',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F11%2Fcanada-goose-london-regent-street-store-opening-6.jpg?quality=95&w=1170&cbr=1&q=90&fit=max',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://arch-usa.com/wp-content/uploads/2017/10/uploads2F1508887017577-AFEWxSAUCONY-Studio-1200x800-1.jpg',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.pinimg.com/originals/e8/d4/5f/e8d45f5a041948369a3369e507da9102.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://www.thefashionisto.com/wp-content/uploads/2018/11/Mango-Man-Holiday-2018-Campaign-003.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;