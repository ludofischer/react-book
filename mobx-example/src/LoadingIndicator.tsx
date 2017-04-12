import * as React from 'react';
import { observer } from 'mobx-react';
import Store from './Store';

export default observer(function LoadingIndicator({ store, children }: {store: Store, children?: React.ReactNode}) {
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



