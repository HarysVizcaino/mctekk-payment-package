import { NativeModules } from 'react-native';

class McPurchase {
    // constructor(nativeModule) {
    //     // super(nativeModule);
    //     this.getProducts = nativeModule.getProducts
    //     this.purchaseProduct = nativeModule.purchaseProduct
    // }

    runLog() {
        console.log("RUNNING MY LOG")
    }
}

// export default new McPurchase(NativeModules.MCPurchase)
export default new McPurchase()