import React from 'react'

const Future = () => {
  return (
    <div className="story">
      <h2>Your Future</h2>
      <form >
        <label>When do you want to retire?</label>
        <textarea className="big-text" id="retire"
          placeholder="Aha. All the things I could do. If I had a little money."
          required
        >
        </textarea>

        <label>How do you want to reitire?</label>
        <textarea className="big-text" id="whenDream"
          placeholder="I travel the world and the seven seas Everybody's looking for something"
          required
        >
        </textarea>

        <label>Do you have any savings or investments lined up for your retirement?</label>
        <textarea className="big-text" id="whenDream"
          placeholder="
          I work all night, I work all day to pay the bills I have to pay
          Ain't it sad?
          And still there never seems to be a single penny left for me
          That's too bad"
          required
        >
        </textarea>

        
      </form>

    </div>
  )
}
export default Future
