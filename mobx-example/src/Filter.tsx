import * as React from 'react';
import { observer } from 'mobx-react';
import Checkbox from './Checkbox';

export default observer(function Filter({ store }) {
  const onChange = (checked) => store.filter = checked;
  return <Checkbox name="filter" id="filter" label="Just favorites" checked={store.filter} onChange={onChange}/>;
});
