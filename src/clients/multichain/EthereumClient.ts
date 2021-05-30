import {XChainClientParams} from '@xchainjs/xchain-client';
import {Client as XChainEthereumClient} from '@xchainjs/xchain-ethereum';
import {ExplorerUrl, InfuraCreds} from '@xchainjs/xchain-ethereum/lib/types';
import {Chain, ETHChain} from '@xchainjs/xchain-util';
import {ClientConstructorParams} from './types/multichain-types';

declare type EthereumClientParams = XChainClientParams & {
  ethplorerUrl?: string;
  ethplorerApiKey?: string;
  explorerUrl?: ExplorerUrl;
  etherscanApiKey?: string;
  infuraCreds?: InfuraCreds;
};

const ethereumClientConfig: EthereumClientParams = {};

export class EthereumClient extends XChainEthereumClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: ClientConstructorParams) {
    super({network, phrase, ...ethereumClientConfig});
    this.chain = ETHChain;
  }
}
