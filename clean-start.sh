echo rm ios/Podfile.lock
rm ios/Podfile.lock
echo rm -rf ios/Pods
rm -rf ios/Pods
echo yarn
yarn
echo 'cd ios && pod install --repo-update'
cd ios && pod install --repo-update
echo 'cd .. && npm start -- --reset-cache'
cd .. && npm start -- --reset-cache