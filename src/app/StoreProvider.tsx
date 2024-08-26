"use client";

import { useRef } from "react";
import { AppStore, makeStore } from "./lib/store";
import { Provider } from "react-redux";

// Creates client side provider to avoid shared state between requests
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
