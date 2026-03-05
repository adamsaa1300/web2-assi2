import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', paddingTop: '40px' }}>
      <div className="container">
        <Carousel
          interval={null}
          indicators={true}
          prevLabel="Previous"
          nextLabel="Next"
          style={{ backgroundColor: '#343a40', borderRadius: '10px', padding: '40px 80px' }}
        >

          <Carousel.Item>
            <div className="d-flex justify-content-center mb-4">
              <StudentCard name="Adam" major="CAP" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center mb-4">
              <StudentCard name="Kareem" major="CAP" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center mb-4">
              <StudentCard name="Osama" major="Eng" />
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}

export default App;