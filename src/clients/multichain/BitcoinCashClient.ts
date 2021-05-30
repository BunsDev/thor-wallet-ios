import {Client as XChainBitcoinCashClient} from '@xchainjs/xchain-bitcoincash';
import {NodeAuth} from '@xchainjs/xchain-bitcoincash/lib/types';
import {ClientUrl} from '@xchainjs/xchain-bitcoincash/lib/types/client-types';
import {XChainClientParams} from '@xchainjs/xchain-client';
import {BCHChain, Chain} from '@xchainjs/xchain-util';

declare type BitcoinCashClientParams = {
  haskoinUrl?: ClientUrl;
  nodeUrl?: ClientUrl;
  nodeAuth?: NodeAuth;
};

const bitcoinCashClientConfig: BitcoinCashClientParams = {};

export class BitcoinCashClient extends XChainBitcoinCashClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: XChainClientParams) {
    super({network, phrase, ...bitcoinCashClientConfig});
    this.chain = BCHChain;
  }
}
