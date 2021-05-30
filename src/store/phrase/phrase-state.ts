import {createGlobalState} from 'react-hooks-global-state';

type TPhraseState = {
  phrase: string;
};

const phraseState = createGlobalState<TPhraseState>({phrase: ''});
export const usePhrase = phraseState.useGlobalState;
