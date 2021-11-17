import React from 'react'

const Dreams = () => {
  return (
    <div className="story">
      <h2>Your Dreams</h2>
      <form>
        <label>What are you dreaming of?</label>
        <textarea id="story"
          placeholder="Aha. All the things I could do. If I had a little money. It's a rich man's world"
          required
        >
        </textarea>

        <label>How?</label>
        <textarea id="story"
          placeholder="What do you need to do to make your dream come true?"
          required
        >
        </textarea>

        <label>How much?</label>
        <input
          type="number"
          min="100"
          step="100"
          placeholder="Money, money, money. Must be funny. In the rich man's world"
          required
        />
        <button>Save My Dream</button>
      </form>

    </div>
  )
}
export default Dreams
