const React = require('react')
const Def = require('../default')

function new_form (data) {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
        <form method="POST" action="/places">
       
            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Place Name</label>
                 <input className="form-control" id="name" name="name" required />
            </div>
            <br></br>

            
            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="cuisine">Cuisine</label>
                 <input className="form-control" id="cuisines" name="cuisines" required />
            </div>
        <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="pic">Place Picture</label>
                 <input className="form-control" id="pic" name="pic" />
                </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="city">City Name</label>
                 <input className="form-control" id="city" name="city" />
                </div>
            <br></br>

            <div className="col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="state">State</label>
                 <input list="state-list" id="state" name="state"/>
                    <datalist id="state-list">
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CT">Connecticut</option>
                        <option value="CO">Colorado</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachussets</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OH">Ohio</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                    </datalist>
                    </div>
            <br></br>

            <div className="form-group col-sm-4">
              <label htmlFor="founded">Founded Year</label>
                     <input 
                      type="number" 
                     className="form-control" 
                     id="founded" 
                     name="founded" 
                    value={new Date().getFullYear()} />
            </div>
        
            <input class= "btn btn-primary" type="submit" value="Add Place"/>

            </form>

          </main>
        </Def>
    )
}

module.exports = new_form