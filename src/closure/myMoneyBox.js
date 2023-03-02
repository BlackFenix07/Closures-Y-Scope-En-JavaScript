function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

const moneyBoxSantiago = moneyBox();
moneyBoxSantiago(10);
moneyBoxSantiago(20);
moneyBoxSantiago(20);