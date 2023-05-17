import * as AFRAME from "aframe";

export default function Scene({ children }: { children: React.ReactNode }) {
  AFRAME.registerComponent("log", {
    schema: { type: "string" },
    init: function () {
      var stringToLog = this.data;
      console.log(stringToLog);
    },
  });

  return <a-scene log="Hello scene">{children}</a-scene>;
}
