import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1>Wings Cafe Inventory</h1>
            <p>Welcome to the dashboard of Wings Cafe. Manage your inventory, track products, and monitor sales all in one place.</p>
            <button onClick={() => alert('Redirect to Dashboard!')}>Go to Dashboard</button>
        </div>
    );
};

export default Home;
