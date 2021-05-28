echo yarn
yarn
echo 'cd ios && pod install --repo-update'
cd ios && pod install --repo-update
echo 'cd .. && npm start -- --reset-cache'
cd .. && npm start -- --reset-cache