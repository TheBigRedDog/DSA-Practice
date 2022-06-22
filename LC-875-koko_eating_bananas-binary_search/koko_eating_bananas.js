/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
*/

/*
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = 1;
  for (const pile of piles) {
    right = Math.max(right, pile);
  }

  while (left < right) {
    let m = Math.floor((left + right) / 2);

    let hours_spent = 0;
    for (i = 0; i < piles.length; i++) {
      hours_spent = hours_spent + Math.ceil(piles[i] / m);
    }
    if (hours_spent <= h) {
      right = m;
    } else {
      left = m + 1;
    }
  }
  return right;
};
