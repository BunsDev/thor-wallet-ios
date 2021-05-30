import {Network} from '@xchainjs/xchain-client';
import {createGlobalState} from 'react-hooks-global-state';

type TNetworkState = {
  network: Network;
};

const networkState = createGlobalState<TNetworkState>({network: 'testnet'});
export const useNetwork = networkState.useGlobalState;
