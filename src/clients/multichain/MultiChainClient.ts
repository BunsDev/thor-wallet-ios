import {Network} from '@xchainjs/xchain-client';
import {EthereumClient} from './EthereumClient';
import {ClientConstructorParams} from './types/multichain-types';

export class MultiChainClient {
  private phrase: string;
  public readonly network: Network;

  public readonly chains = ['BNB', 'BTC', 'ETH', 'THOR', 'BCH', 'LTC'];

  public thor: ThorChain;

  public eth: EthereumClient;


  constructor({network = 'testnet', phrase = ''}: ClientConstructorParams) {
    this.network = network;
    this.phrase = phrase;

    this.thor = new ThorChain({network});
    this.eth = new EthereumClient({network, phrase});
  }
}
