import {Client as XChainBincanceClient} from '@xchainjs/xchain-binance';
import {XChainClientParams} from '@xchainjs/xchain-client';
import {BNBChain, Chain} from '@xchainjs/xchain-util';

export class BinanceClient extends XChainBincanceClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: XChainClientParams) {
    super({network, phrase});
    this.chain = BNBChain;
  }
}
