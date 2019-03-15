/**
 * I'm Already Tracer
 * 
 * 
 */

function teamComp(heroes) {
  // it's not over til it's over
  if (heroes.length !== 6) {
    throw 'GG';
  }
  
  let comp = [0, 0, 0];
  let heroesArr = [];

  heroes.forEach(hero => {
    if (heroesArr.indexOf(hero) > -1) {
      throw 'GG';
    } else {
      heroesArr.push(hero);
      
      if (TANK.indexOf(hero) > -1) {
        comp[0] += 1;
      } else if (DAMAGE.indexOf(hero) > -1) {
        comp[1] += 1;
      } else if(SUPPORT.indexOf(hero) > -1) {
        comp[2] += 1;
      }
    }
  });
}
