import {XChainClientParams} from '@xchainjs/xchain-client';
import {Client as XChainLitecoinClient} from '@xchainjs/xchain-litecoin';
import {NodeAuth} from '@xchainjs/xchain-litecoin/lib/types';
import {Chain, LTCChain} from '@xchainjs/xchain-util';

// todo remove when PR is merged in xchain
declare type LitecoinClientParams = {
  sochainUrl?: string;
  nodeUrl?: string;
  nodeAuth?: NodeAuth | null;
};

const litecoinClientConfig: LitecoinClientParams = {};

export class LitecoinClient extends XChainLitecoinClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: XChainClientParams) {
    super({network, phrase, ...litecoinClientConfig});
    this.chain = LTCChain;
  }
}
