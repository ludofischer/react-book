import * as React from 'react';
import { observer } from 'mobx-react';
import Checkbox from './Checkbox';
import Store from './Store';

export default observer(function Filter({ store } : {store : Store }) {
  const onChange = (checked: boolean) => store.filter = checked;
  return <Checkbox name="filter" id="filter" label="Just favorites" checked={store.filter} onChange={onChange}/>;
});
