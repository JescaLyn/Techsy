```javascript

<label className="radio-buttons">
  <input
    type="radio"
    className="radio"
    name="gender"
    value="female"
    checked={checked("female")}
    onChange={this.updateGender.bind(this)}
  /> Female
  <input
    type="radio"
    className="radio"
    name="gender"
    value="male"
    checked={checked("male")}
    onChange={this.updateGender.bind(this)}
  /> Male
  <input
    type="radio"
    className="radio"
    name="gender"
    value="other"
    checked={checked("other")}
    onChange={this.updateGender.bind(this)}
  /> Other
</label>

```
