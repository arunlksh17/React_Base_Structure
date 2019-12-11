import React from 'react';

export function Input({ input, label, type,className,placeHolder, meta: { touched, error , warning} }) {
    console.log(className)
    var classname=''
    if(className){
        classname=`form-control ${className}`;
    }
    if(!className){
        classname=`form-control`;
    }
    
    return(
        <div className="form-group">
            <div className="form-label">{label}</div>
            <input type={type} {...input} className={classname} placeholder={placeHolder}/>
            {touched &&
            ((error && <span style={{ color: 'red' }}>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    )
}
