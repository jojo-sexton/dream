import React from 'react'

const Story = () => {
  return (
    <div className="story">
      <h2>Your Story</h2>
      <label>Name</label>
      <input
        type="text"
        placeholder="Your name"
        required
      />

      <label>Age</label>
      <input
        type="number"
        placeholder="Your age"
        required
      />

      <label>Living arrangement</label>
      <select
        required
      >
        <option value="I rent">I rent</option>
        <option value="I own my own house">I own my own house</option>
        <option value="I board">I board</option>
        <option value="I live for free">I live for free</option>
        <option value="Other">Other</option>
      </select>

      <label>Work</label>
      <textarea id="story"
        placeholder="What are you doing for a living, where do your work and  how long have you been in your current job?"
        required
      >
      </textarea>

      <label>Your story</label>
      <textarea id="story"
        placeholder="Tell me about yourself and what's important to you?"
        required
      >
      </textarea>
    </div>
  )
}
export default Story
