# Remotion Lottie

Lottie / Bodymovin Controller for Remotion.

![npm bundle size](https://img.shields.io/bundlephobia/min/remotion-lottie) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/remotion-lottie) [![npm downloads](https://img.shields.io/npm/dt/remotion-keyframes)](https://www.npmjs.com/package/remotion-lottie) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

## Installation

```bash

npm install remotion-lottie

```

or

```bash

yarn add remotion-lottie

```

## Usage

### Load Library and Lottie JSON file

```jsx
import { Lottier, useLottie } from "remotion-lottie";

import data from "./animationData.json";
```

#### Props

- **data**: Pass loaded animation data **Required**

- **fitMode** : "fitToWidth" , "fitToHeight" , "fitToContent" **Not Required**

- **stayAtLastFrame** : true or false, if true animation will stop on its last frame. **false by default**

```jsx
import { Sequence, useCurrentFrame } from "remotion";
import { Lottier, useLottie } from "remotion-lottie";
import data from "./11.json";

export const HiLottie = () => {
  return (
    <Sequence from={0} durationInFrames={150}>
      <Lottier data={data} fitMode="fitToWidth" stayAtLastFrame={true} />
    </Sequence>
  );
};
```

## useLottie

useLottie(data) is small helper to get information about animation.
You can use it to determine **Composition size** or **Sequence durationInframes** props.

```jsx
let { w, h, op, fr } = useLottie(data);
```

```jsx
let { op } = useLottie(data);
return (
  <Sequence from={0} durationInFrames={op}>
    <Lottier data={data} fitMode="fitToWidth" stayAtLastFrame={true} />
  </Sequence>
);
```

## License

MIT © [ahgsql](https://github.com/ahgsql)
