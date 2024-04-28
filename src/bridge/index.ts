import { installUoslifeDriver, makeUoslifeBridge } from '@uoslife/webview';

const { driver } = installUoslifeDriver();
const uoslifeBridge = makeUoslifeBridge({ driver });

export default uoslifeBridge;
