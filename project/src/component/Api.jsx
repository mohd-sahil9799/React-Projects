import React from 'react';


function App() {
  // Your trending searches data (replace this with your actual trending searches)
  const trendingSearches = ['Events', 'Bhagavad Gita', 'Music', 'Podcast'];

  const openSecondModal = () => {
    // Code to open second modal (e.g., using Bootstrap's modal API or React Bootstrap methods)
  };

  return (
    <div>
      {/* Search Modal */}
      <Modal id="exampleModal" show={false}>
        {/* Content of your Search Modal */}
        {/* ... */}
        {/* Example of Trending Searches */}
        <div className="Trending">
          <h5>Trending Searches</h5>
          {trendingSearches.map((search, index) => (
            <div key={index} className="border d-flex justify-content-between px-3 py-2">
              <p>{search}</p>
              <i className="fas fa-arrow-left fs-4" style={{ transform: 'rotate(45deg)' }} onClick={openSecondModal}></i>
            </div>
          ))}
        </div>
        {/* ... */}
      </Modal>

      {/* Second Modal */}
      <Modal id="exampleModal1" show={false}>
        {/* Content of your Second Modal */}
        {/* ... */}
        <div className="modal-body">
          <p>Content of Second Modal</p>
        </div>
        {/* ... */}
      </Modal>
    </div>
  );
}

export default App;
