"use client";

import { ProgressProvider } from "@bprogress/next/app";

type Props = {
  children: React.ReactNode;
};

const ProviderContainer = ({ children }: Props) => {
  return (
    // <Provider store={store}>
    <ProgressProvider
      height="3px"
      color="#FB9F28"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
    // </Provider>
  );
};

export default ProviderContainer;
