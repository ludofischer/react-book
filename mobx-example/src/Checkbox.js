// @flow
/* START:definiition */
import React from 'react';
import PropTypes from 'prop-types';

type CheckboxProps = {
  checked: boolean,
  onChange: (x: boolean) => void,
  name: string,
  label: string,
  id: string
}

/* START:body */
export default function Checkbox({ checked, onChange, name, label, id }: CheckboxProps) {
  /* START_HIGHLIGHT */
  /* END:definition */
  function onCheck(event) {
    onChange(event.target.checked);
  }

  return (
    <div className="flex mw4">
      <label className="pr2" htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={onCheck}
        checked={checked}
        />
    </div>
  );
  /* START:definition */
}
/* END_HIGHLIGHT */
/* END:body */
/* END:definition */
Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string
};
