import React from 'react'

const Money = () => {
  return (
    <div className="story">
      <h2>Your Money</h2>
      <form >
        <label>How much is your yearly income?</label>
        <input
          id="income"
          type="number"
          min="0"
          step="1000"
          placeholder="income"
          required
        />
        <label>After you have paid all of your expenses, how much do you have left over for saving?</label>
        <input
          id="income"
          type="number"
          min="0"
          step="10"
          placeholder="leftover to save"
          required
        />


        <label>If your income were to stopped, how do you carry on?</label>
        <textarea className="big-text" id="nightmare"
          placeholder="tell me about your nightmare"
          required
        >
        </textarea>

        <label>Do you have any backup plan?</label>
        <textarea className="big-text" id="whenDream"
          placeholder="In my dreams I have a plan
                       If I got me a wealthy man
                      I wouldn't have to work at all, I'd fool around and have a ballg"
          required
        >
        </textarea>
      </form>

    </div>
  )
}
export default Money
