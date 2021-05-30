import {Client as XChainBitcoinClient} from '@xchainjs/xchain-bitcoin';
import {XChainClientParams} from '@xchainjs/xchain-client';
import {BTCChain, Chain} from '@xchainjs/xchain-util';

// todo remove when pr is merged in xchain
declare type BitcoinClientParams = {
  sochainUrl?: string;
  blockstreamUrl?: string;
};

const bitcoinClientConfig: BitcoinClientParams = {};

export class BitcoinClient extends XChainBitcoinClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: XChainClientParams) {
    super({network, phrase, ...bitcoinClientConfig});
    this.chain = BTCChain;
  }
}
