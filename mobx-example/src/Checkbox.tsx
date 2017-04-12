/* START:definiition */
import * as React from 'react';

/* START:body */
export default function Checkbox({ checked, onChange, name, label, id }: {checked: boolean, onChange: (c: boolean) => void, name: string, label: string, id: string}) {
  /* START_HIGHLIGHT */
  /* END:definition */
  function onCheck(event: React.ChangeEvent<HTMLInputElement>) {
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
