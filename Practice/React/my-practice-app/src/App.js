import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Mario's Birthday bash", id: 1 },
    { title: "bowser's live stream" },
    { title: 'race to the moon and beyond' },
  ]);

  console.log(showEvents);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = 'All the latest events in the Marioland';

  return (
    <div className='App'>
      <Title title='Events in your Area' subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <React.Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>Delete event</button>
          </React.Fragment>
        ))}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off Coupon Code</h2>
          <p>Use the code NINJA10 at the checkout</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
