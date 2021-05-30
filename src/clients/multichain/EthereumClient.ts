import {XChainClientParams} from '@xchainjs/xchain-client';
import {Client as XChainEthereumClient} from '@xchainjs/xchain-ethereum';
import {ExplorerUrl, InfuraCreds} from '@xchainjs/xchain-ethereum/lib/types';
import {Chain, ETHChain} from '@xchainjs/xchain-util';

// todo remove when PR is merged in xchain
declare type EthereumClientParams = {
  ethplorerUrl?: string;
  ethplorerApiKey?: string;
  explorerUrl?: ExplorerUrl;
  etherscanApiKey?: string;
  infuraCreds?: InfuraCreds;
};

const ethereumClientConfig: EthereumClientParams = {};

export class EthereumClient extends XChainEthereumClient {
  public readonly chain: Chain;

  constructor({network = 'testnet', phrase = ''}: XChainClientParams) {
    super({network, phrase, ...ethereumClientConfig});
    this.chain = ETHChain;
  }
}
