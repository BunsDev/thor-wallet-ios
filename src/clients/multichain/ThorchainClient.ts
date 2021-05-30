import {
  Client as XChainThorchainClient,
  ThorchainClientParams,
} from '@xchainjs/xchain-thorchain';
import {Chain, THORChain} from '@xchainjs/xchain-util';
import {ClientConstructorParams} from './types/multichain-types';

const thorchainClientConfig: ThorchainClientParams = {};

export class ThorchainClient extends XChainThorchainClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: ClientConstructorParams) {
    super({network, phrase, ...thorchainClientConfig});
    this.chain = THORChain;
  }
}
