import * as React from 'react';
import { observer } from 'mobx-react';

export default observer(function LoadingIndicator({ store, children }) {
  if (store.loading) {
    return <div>Loading…</div>;
  } else {
    return (
      <div>
        {children}
      </div>
    );
  }
});



