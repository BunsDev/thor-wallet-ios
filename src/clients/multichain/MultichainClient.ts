import {useMemo} from 'react';
import {useNetwork} from '../../store/network/network-state';
import {usePhrase} from '../../store/phrase/phrase-state';
import {BinanceClient} from './BinanceClient';
import {BitcoinCashClient} from './BitcoinCashClient';
import {BitcoinClient} from './BitcoinClient';
import {EthereumClient} from './EthereumClient';
import {LitecoinClient} from './LitecoinClient';

// public readonly chains = ['BNB', 'BTC', 'ETH', 'THOR', 'BCH', 'LTC'];

export const useChainClient = () => {
  const [phrase] = usePhrase('phrase');
  const [network] = useNetwork('network');

  return useMemo(
    () => ({
      phrase,
      network,
      eth: new EthereumClient({network, phrase}),
      btc: new BitcoinClient({network, phrase}),
      bnb: new BinanceClient({network, phrase}),
      bch: new BitcoinCashClient({network, phrase}),
      ltc: new LitecoinClient({network, phrase}),
    }),
    [network, phrase],
  );
};
