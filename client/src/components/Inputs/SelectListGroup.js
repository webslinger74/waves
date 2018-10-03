import React from 'react';
import classnames from 'classnames';

const SelectListGroup = ({
    name,
    value,
    error,
    info,
    onChange,
    options,
    placeholder
    
}) => {
         
    const selectOptions = options.map(option => (
        
        <option key={option._id} value={option.name}>
        {option.name}
        </option>
    
    ))

    return (
        <div className="form-group">
        {placeholder ? 
           <div className="label_inputs">{placeholder}</div>
           :null
       }
         <select
          className={classnames("form-control form-control-lg", {
      'is-invalid':error})}
          name={name}
          value={value}
          onChange={onChange}>
          <option value="">Select</option>

          {selectOptions}
          </select>

          {info && <small className="form-text text-muted">{info}</small>}
            {error && (
      <div className="invalid-feedback">{error}</div>
    )}
     
        
        
        </div>




    )
}


export default SelectListGroup;