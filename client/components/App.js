import React from "react";

function App({ children }) {
    return (
        <div className="container">
            <h1>Lyrical</h1>
            {children}
        </div>
    );
}

export default App;
