# NodeDracoApi

API to communicate with Draconius GO server.  
Writing in TypeScript, compiled into full JavaScript for Node 8.x.

This is still a work in progress, not everything is implemented.  
Ask for feature or report bugs here: https://github.com/dracoapi/nodedracoapi/issues 

## How to use

All api calls can be done manuall using the `.call(service, method, args)` method.

```typescript
import * as DracoNode from 'draconode';

const draco = new DracoNode();
const response = await draco.call('AuthService', 'trySingIn', [
    new objects.AuthData({
        authType: enums.AuthType.DEVICE,
        profileId: this.user.deviceId,
    }),
    this.clientInfo,
    new objects.FRegistrationInfo({
        regType: 'dv',
    }),
]);
```

More high level methods also exists, here is a more complete example that get user items:

```typescript
import * as DracoNode from 'draconode';

const draco = new DracoNode();
const ping = await draco.ping();
await draco.boot({
    userId,
    deviceId,
});
await draco.login();
await draco.load();
const response = await draco.getUserItems();
for (const item of response.items) {
    console.log(`Item type ${enums.ItemType[item.type]}, count = ${item.count}`);
}
```

More example can be found here: https://github.com/dracoapi/nodedracoapi/tree/master/src/examples 

## FAQ

### I'm using an old version of node, can I use it?

Not directly but your can get it from GitHub, and change `tsconfig.json` to compile if for an old version of node (use ES2016 or ES2015).

