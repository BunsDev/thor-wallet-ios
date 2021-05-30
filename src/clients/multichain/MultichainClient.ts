import {Network, XChainClientParams} from '@xchainjs/xchain-client';
import {BinanceClient} from './BinanceClient';
import {BitcoinCashClient} from './BitcoinCashClient';
import {BitcoinClient} from './BitcoinClient';
import {EthereumClient} from './EthereumClient';
import {LitecoinClient} from './LitecoinClient';

export class MultichainClient {
  private phrase: string;
  public readonly network: Network;

  public readonly chains = ['BNB', 'BTC', 'ETH', 'THOR', 'BCH', 'LTC'];

  // public thor: ThorchainClient;

  public eth: EthereumClient;

  public btc: BitcoinClient;

  public bnb: BinanceClient;

  public bch: BitcoinCashClient;

  public ltc: LitecoinClient;

  constructor({network = 'testnet', phrase = ''}: XChainClientParams) {
    this.network = network;
    this.phrase = phrase;

    // this.thor = new ThorchainClient({network, phrase});
    this.eth = new EthereumClient({network, phrase});
    this.btc = new BitcoinClient({network, phrase});
    this.bnb = new BinanceClient({network, phrase});
    this.bch = new BitcoinCashClient({network, phrase});
    this.ltc = new LitecoinClient({network, phrase});
  }
}
