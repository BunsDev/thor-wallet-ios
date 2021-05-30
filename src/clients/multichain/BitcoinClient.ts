import {Client as XChainBitcoinClient} from '@xchainjs/xchain-bitcoin';
import {BTCChain, Chain} from '@xchainjs/xchain-util';
import {ClientConstructorParams} from './types/multichain-types';

// todo remove when pr is merged in xchain
declare type BitcoinClientParams = {
  sochainUrl?: string;
  blockstreamUrl?: string;
};

const bitcoinClientConfig: BitcoinClientParams = {};

export class BitcoinClient extends XChainBitcoinClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: ClientConstructorParams) {
    super({network, phrase, ...bitcoinClientConfig});
    this.chain = BTCChain;
  }
}
