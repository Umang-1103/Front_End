import React from 'react'

function Task4() {
    return (
        <div>

            <h2>Q-1.</h2>
            <p>Explain in your own words (3-4 lines) how React's Virtual DOM makes updating the UI faster compared to traditional DOM manipulation.</p>
            <h2>Ans.</h2>
            <p>React's Virtual DOM keeps a lightweight copy of the actual DOM in memory. When data changes, React updates the Virtual DOM first and compares it with the previous version to find exactly what changed. Instead of re-rendering the entire page, it updates only the affected parts of the real DOM. This reduces expensive DOM operations and makes UI updates faster and more efficient.</p>

        </div>
    )
}

export default Task4