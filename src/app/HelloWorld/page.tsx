"use client";

import dynamic from "next/dynamic";

const Example = dynamic(() => import("@/components/example"), {
  ssr: false,
});

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
});

export default function HelloWorld() {
  return (
    <Scene>
      <Example />
    </Scene>
  );
}
