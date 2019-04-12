import React from 'react';
import './oneRecord.css';

const viewOneRedflag = () => (
  <div className="container">
    <div className="heading-part">
      <div className="left-border__record">
        <small className="one-record__title">Title</small>
        <p className="one-record__title-response">Extortion by the police</p>
        <p className="one-response__type">Intervention</p>
      </div>
      <a href="#sdf" className="go-back">
        go back
      </a>
    </div>
    <div className="one-record__status-response">
      <img
        src="https://res.cloudinary.com/decqfpglp/image/upload/v1551647685/checked.png"
        className="tick"
        alt="img"
      />
      resolved <p className="one-record__location">Location: 3.4324 , 423434</p>
    </div>

    <hr />
    <div className="description-incident">
      <small className="description__title">Description of Incident</small>
      <p className="description-incident__brief">
        lLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        cupiditate, recusandae vitae dicta consectetur fugit dolore veritatis
        consequuntur tempora, dolor labore mollitia libero accusantium? Dolorem
        amet, sequi ab accusamus voluptates non sit doloremque exercitationem
        maiores nam numquam unde. Eveniet excepturi, quos adipisci deleniti
        minima, delectus quod recusandae enim, ipsam odio tenetur soluta cumque
        nulla officiis aliquid accusantium praesentium. Doloribus, atque fugiat
        maxime eum quisquam debitis vel, neque natus officia perspiciatis, ut
        veniam autem numquam esse sapiente. Quis ut atque distinctio, maxime eos
        vel quas quaerat aut laborum delectus blanditiis neque magni perferendis
        non labore, velit iure eligendi expedita ratione! Ipsum!
      </p>

      <div className="one-record__footer">
        <p className="one-record__time">21st feb. 2018</p>
      </div>
    </div>
    <hr />
    <div className="no-media">No media Found</div>
    <div />
  </div>
);

export default viewOneRedflag;
