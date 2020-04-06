import React from "react";

//import { Form } from "react-bulma-components/full";

function Form(props) {
  const {
    horizontal,
    label,
    value,
    disabled,
    readOnly,
    isText,
    onChange,
    style
  } = props;
  return (
    <Form horizontal={horizontal}>
      <div>
        <label align="left">{label}</label>
      </div>
      <Form.Body>
        <div>
          <Form.Control>
            {isText ? (
              <textarea
                onChange={onChange}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                style={style}
              />
            ) : (
              <input
                onChange={onChange}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
              />
            )}
          </Form.Control>
        </div>
      </Form.Body>
    </Form>
  );
}

export default Form;
