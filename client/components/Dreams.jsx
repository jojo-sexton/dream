import React from 'react'

const Dreams = () => {
  
  const handleChange = (e) => {
    console.log(e)
  }

  const handleSubmit = (e) => {
    console.log(3)
  }

  return (
    <div className="story">
      <h2>Your Dreams</h2>
      <form onSubmit={handleSubmit}>
        <label>What are you dreaming of?</label>
        <textarea className="big-text" id="dream"
          placeholder="Aha. All the things I could do. If I had a little money. It's a rich man's world"
          required
          onChange={handleChange}
        >
        </textarea>

        <label>How?</label>
        <textarea className="big-text" id="whenDream"
          placeholder="What do you need to do to make your dream come true?"
          required
          onChange={handleChange}
        >
        </textarea>

        <label>How much?</label>
        <input
          id="howMuchDream"
          type="number"
          min="100"
          step="100"
          placeholder="Money, money, money. Must be funny. In the rich man's world"
          required
          onChange={handleChange}
        />
        {/* <button>Save My Dream</button> */}
      </form>

    </div>
  )
}
export default Dreams
